const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.resolve(__dirname, '..', '.tmp', 'data.db');
const db = new Database(dbPath);

// Clear and populate exact entries matching formatting.pdf Page 1
const formattingPdfEntries = [
  {
    headword: 'mmàdụ̀',
    simplified: 'mmadu',
    partOfSpeech: 'ahà.',
    borrowing: '',
    phonetic: '[m̀.mà.dʊ̀]',
    dialect: 'Igbo Izugbe (General Igbo)',
    column: 'left',
    definitions: [
      {
        id: 1,
        meaning: 'Ònyē nwē ndụ̀ nà ùchè; ònyē ọ̄bụ̀lụ̀à nā-abụghị̀ ànụ̄mànụ̀ mà ọ̄ bụ̀ mmụ̄ọ̄.',
        meaning_en: 'A living person endowed with intellect; anyone who is neither an animal nor a spirit.',
        examples: []
      },
      {
        id: 2,
        meaning: 'Ọ̄tụ̄tụ̄ ndị̄ è kèrè èkè.',
        meaning_en: 'Humankind; created beings collectively.',
        examples: [
          {
            igbo: 'Mmàdụ̀ niīlē nà-àchọ̄ ùdò.',
            english: 'All human beings seek peace.'
          }
        ]
      }
    ],
    etymology: 'Proto-Igbo *m-madu.',
    crossReferences: '',
    notes: 'Akwụkwọ Nkọwaokwu Ọkammụta peeji 142.'
  },
  {
    headword: 'mmanyā',
    simplified: 'mmanya',
    partOfSpeech: 'ahà.',
    borrowing: '',
    phonetic: '[m̀.má.ɲáː]',
    dialect: 'Igbo Izugbe / Enuani',
    column: 'left',
    definitions: [
      {
        id: 1,
        meaning: 'Īhē ọ̄ñụ̄ñụ̄ nà-ègbu ēgbu ǹkè e sìrì n\'ōsisī mà ọ̄ bụ̀ n\'ígwè nwetā.',
        meaning_en: 'An intoxicating drink obtained from trees or industrially produced.',
        examples: [
          {
            igbo: 'Hā wètàrà mmanyā ọ̄chā n\'ēmūmē ahụ̀.',
            english: 'They brought palm wine to the ceremony.'
          }
        ]
      }
    ],
    etymology: 'Sitere na mmanya nkwụ / ngwọ.',
    crossReferences: '',
    notes: 'Akwụkwọ Nkọwaokwu Ọkammụta peeji 142.'
  },
  {
    headword: 'mmīri',
    simplified: 'mmiri',
    partOfSpeech: 'ahà.',
    borrowing: '',
    phonetic: '[m̀.míː.ɾì]',
    dialect: 'Igbo Izugbe (General Igbo)',
    column: 'left',
    definitions: [
      {
        id: 1,
        meaning: 'Īfē nā-erū erū ǹkè īfē dị̄ ndụ̀ niīlē nà-àñụ̄ mà tòsị̀ màkà ị̀kị̀ wàdò ndụ̀.',
        meaning_en: 'A flowing liquid that all living things drink and require for sustaining life.',
        examples: [
          {
            igbo: 'Mmīri bụ̀ mkpụ̄rụ̄ ndụ̀.',
            english: 'Water is life.'
          },
          {
            igbo: 'Àhụ̄ mmàdụ̀ tòsị̀ mmīri ijì lụ̄ọ̄ ọ̄lụ̄.',
            english: 'The human body requires water to function.'
          }
        ]
      }
    ],
    etymology: 'Okwu ochie sitere n’ala Igbo maka mmiri na-eru eru.',
    crossReferences: 'mmīli, mmīni, minī, miī',
    notes: 'Akwụkwọ Nkọwaokwu Ọkammụta peeji 142.'
  },
  {
    headword: 'mmụ̄ọ̄',
    simplified: 'mmuo',
    partOfSpeech: 'ahà.',
    borrowing: '',
    phonetic: '[m̀.mʊ́ː.ɔ́ː]',
    dialect: 'Igbo Izugbe (General Igbo)',
    column: 'right',
    definitions: [
      {
        id: 1,
        meaning: 'Īhē à nāghị̀ àhụ̄ anyā mānà ọ̄ nà-àrụ̄ ọ̄rụ̄; ikē kàrị̀rị̀ị̀ ǹkè mmàdụ̀.',
        meaning_en: 'An unseen active force or entity; a spiritual power greater than humankind.',
        examples: [
          {
            igbo: 'Ndị̄ bè anyị̄ nà-àsọ̄pụ̀rụ̀ ndị̄ mmụ̄ọ̄.',
            english: 'Our people venerate spiritual ancestors.'
          }
        ]
      }
    ],
    etymology: 'Proto-Bantu *mù-yòkì (spirit).',
    crossReferences: '',
    notes: 'Akwụkwọ Nkọwaokwu Ọkammụta peeji 142.'
  },
  {
    headword: 'mọtọ̀',
    simplified: 'moto',
    partOfSpeech: 'ahà.',
    borrowing: 'Nbinye: Bekee Motor',
    phonetic: '[mɔ̀.tɔ̀]',
    dialect: 'Igbo Izugbe (General Igbo)',
    column: 'right',
    definitions: [
      {
        id: 1,
        meaning: 'Ụ̄gbọ̄alà e jì ìgwè nà-àkwọ̄ ǹkè nā-agā n\'ōkporō ụ̄zọ̀.',
        meaning_en: 'A motorized carriage on wheels traveling on roads; an automobile.',
        examples: [
          {
            igbo: 'Ọ̄ zụ̀tụ̀àrà mọtọ̀ ọ̄hụ̄rụ̄.',
            english: 'He bought a new car.'
          }
        ]
      }
    ],
    etymology: 'Okwu nbinye sitere na Bekee (Motor car).',
    crossReferences: '',
    notes: 'Akwụkwọ Nkọwaokwu Ọkammụta peeji 142.'
  }
];

const now = new Date().toISOString();

// Update or insert each entry
for (const e of formattingPdfEntries) {
  const existing = db.prepare('SELECT id, document_id FROM entries WHERE headword = ?').get(e.headword);
  const defsJson = JSON.stringify(e.definitions);

  if (existing) {
    db.prepare(`
      UPDATE entries 
      SET simplified = ?, part_of_speech = ?, phonetic = ?, dialect = ?, definitions = ?, etymology = ?, cross_references = ?, notes = ?, updated_at = ?
      WHERE headword = ?
    `).run(e.simplified, e.partOfSpeech, e.phonetic, e.dialect, defsJson, e.etymology, e.crossReferences, e.borrowing ? e.borrowing : e.notes, now, e.headword);
    console.log('Updated existing:', e.headword);
  } else {
    const docId = Math.random().toString(36).substring(2, 26);
    const stmt = db.prepare(`
      INSERT INTO entries (document_id, headword, simplified, part_of_speech, phonetic, dialect, definitions, etymology, cross_references, notes, created_at, updated_at, published_at, locale)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'en')
    `);
    // draft
    stmt.run(docId, e.headword, e.simplified, e.partOfSpeech, e.phonetic, e.dialect, defsJson, e.etymology, e.crossReferences, e.borrowing ? e.borrowing : e.notes, now, now, null);
    // published
    stmt.run(docId, e.headword, e.simplified, e.partOfSpeech, e.phonetic, e.dialect, defsJson, e.etymology, e.crossReferences, e.borrowing ? e.borrowing : e.notes, now, now, now);
    console.log('Inserted new:', e.headword);
  }
}

console.log('Database synced with formatting.pdf entries successfully.');
db.close();
