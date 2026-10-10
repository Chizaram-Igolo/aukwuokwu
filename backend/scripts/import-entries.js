/**
 * Bulk Entry Importer for Igbo Academic Dictionary
 * Ingests vocabulary from JSON files into Strapi 5 SQLite database.
 * 
 * Usage:
 *   node backend/scripts/import-entries.js [filePath]
 * Example:
 *   node backend/scripts/import-entries.js backend/data/igbo-lexicon.json
 */

const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

// Tone normalization helper
function stripTones(text) {
  if (!text) return '';
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .normalize('NFC')
    .replace(/[àáā]/g, 'a')
    .replace(/[èéē]/g, 'e')
    .replace(/[ìíī]/g, 'i')
    .replace(/[òóō]/g, 'o')
    .replace(/[ùúū]/g, 'u')
    .replace(/[ịị́ị̀ị̄]/g, 'ị')
    .replace(/[ọọ́ọ̀ọ̄]/g, 'ọ')
    .replace(/[ụụ́ụ̀ụ̄]/g, 'ụ')
    .replace(/[ṅñ]/g, 'n')
    .toLowerCase();
}

function runImport() {
  const defaultFile = path.resolve(__dirname, '..', 'data', 'igbo-lexicon.json');
  const targetFile = process.argv[2] ? path.resolve(process.argv[2]) : defaultFile;

  if (!fs.existsSync(targetFile)) {
    console.error(`[ERROR] File not found: ${targetFile}`);
    process.exit(1);
  }

  const rawData = fs.readFileSync(targetFile, 'utf-8');
  let entriesList = [];
  try {
    entriesList = JSON.parse(rawData);
    if (!Array.isArray(entriesList)) {
      throw new Error('Root JSON must be an array of dictionary entries');
    }
  } catch (err) {
    console.error('[ERROR] Failed to parse JSON file:', err.message);
    process.exit(1);
  }

  const dbPath = path.resolve(__dirname, '..', '.tmp', 'data.db');
  if (!fs.existsSync(dbPath)) {
    console.error(`[ERROR] Database not found at: ${dbPath}`);
    process.exit(1);
  }

  const db = new Database(dbPath);
  console.log(`\n==================================================`);
  console.log(`AKWỤKWỌ NKỌWAOKWU ỌKAMMỤTA: MBATA DATA (BULK INGEST)`);
  console.log(`Faịlụ ntinye: ${targetFile}`);
  console.log(`Mkpụrụokwu a chọrọ ibubata: ${entriesList.length}`);
  console.log(`==================================================\n`);

  const now = new Date().toISOString();
  let inserted = 0;
  let updated = 0;

  const findStmt = db.prepare('SELECT id, document_id FROM entries WHERE headword = ?');
  const updateStmt = db.prepare(`
    UPDATE entries 
    SET simplified = ?, part_of_speech = ?, phonetic = ?, dialect = ?, definitions = ?, etymology = ?, cross_references = ?, notes = ?, updated_at = ?
    WHERE headword = ?
  `);
  const insertStmt = db.prepare(`
    INSERT INTO entries (document_id, headword, simplified, part_of_speech, phonetic, dialect, definitions, etymology, cross_references, notes, created_at, updated_at, published_at, locale)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'en')
  `);

  for (const entry of entriesList) {
    if (!entry.headword) {
      console.warn(`[WARN] Akwụsịrị ntinye: Ọ nweghị 'headword'`);
      continue;
    }

    const headword = entry.headword.trim();
    const simplified = entry.simplified ? entry.simplified.trim() : stripTones(headword);
    const partOfSpeech = entry.partOfSpeech || 'ahà (noun)';
    const phonetic = entry.phonetic || '';
    const dialect = entry.dialect || 'Igbo Izugbe (General Igbo)';
    const defsJson = JSON.stringify(entry.definitions || []);
    const etymology = entry.etymology || '';
    const crossReferences = entry.crossReferences || '';
    const notes = entry.notes || '';

    const existing = findStmt.get(headword);

    if (existing) {
      updateStmt.run(simplified, partOfSpeech, phonetic, dialect, defsJson, etymology, crossReferences, notes, now, headword);
      console.log(`[NDEZI / UPDATED] ${headword}`);
      updated++;
    } else {
      const docId = Math.random().toString(36).substring(2, 26);
      // Insert Draft
      insertStmt.run(docId, headword, simplified, partOfSpeech, phonetic, dialect, defsJson, etymology, crossReferences, notes, now, now, null);
      // Insert Published
      insertStmt.run(docId, headword, simplified, partOfSpeech, phonetic, dialect, defsJson, etymology, crossReferences, notes, now, now, now);
      console.log(`[ỌHỤRỤ / INSERTED] ${headword}`);
      inserted++;
    }
  }

  // Get total count
  const countRow = db.prepare('SELECT COUNT(*) as total FROM entries WHERE published_at IS NOT NULL').get();

  db.close();

  console.log(`\n==================================================`);
  console.log(`NZỤKỌTA (SUMMARY):`);
  console.log(`- Tinyere ọhụrụ: ${inserted}`);
  console.log(`- Melitere: ${updated}`);
  console.log(`- Mkpụrụokwu niile ebipụtara ugbu a n'ime Akwụkwọ: ${countRow.total}`);
  console.log(`==================================================\n`);
}

runImport();
