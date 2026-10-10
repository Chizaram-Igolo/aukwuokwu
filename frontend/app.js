/**
 * AKWỤKWỌ NKỌWAOKWU ỌKAMMỤTA — Academic Igbo Dictionary Client Application
 * Handles academic typography, live Strapi CMS synchronization,
 * tone-normalized search, virtual Igbo keyboard, and DOCX/PDF export.
 */

// Embedded fallback entries matching formatting.pdf and Strapi initial seeds
const FALLBACK_ENTRIES = [
  {
    id: 1,
    headword: "mmàdụ̀",
    simplified: "mmadu",
    partOfSpeech: "ahà (noun)",
    phonetic: "[m̀.mà.dʊ̀]",
    dialect: "Igbo Izugbe (General Igbo)",
    definitions: [
      {
        id: 1,
        meaning: "Ònyē nwē ndụ̀ nà ùchè; ònyē ọ̄bụ̀lụ̀à nā-abụghị̀ ànụ̄mànụ̀ mà ọ̄ bụ̀ mmụ̄ọ̄.",
        meaning_en: "A person, human being; anyone who is neither a beast nor a spirit.",
        examples: [
          { igbo: "Mmàdụ̀ niīlē nà-àchọ̄ ùdò.", english: "All human beings seek peace." }
        ]
      },
      {
        id: 2,
        meaning: "Ọ̄tụ̄tụ̄ ndị̄ è kèrè èkè.",
        meaning_en: "Humankind; created people collectively.",
        examples: []
      }
    ],
    etymology: "Proto-Igbo *m-madu.",
    crossReferences: "onye, mmadụ, madu",
    notes: "Akwụkwọ Nkọwaokwu Ọkammụta peeji 142."
  },
  {
    id: 2,
    headword: "mmanyā",
    simplified: "mmanya",
    partOfSpeech: "ahà (noun)",
    phonetic: "[m̀.má.ɲáː]",
    dialect: "Igbo Izugbe / Enuani",
    definitions: [
      {
        id: 1,
        meaning: "Īhē ọ̄ñụ̄ñụ̄ nà-ègbu ēgbu ǹkè e sìrì n’ōsisī mà ọ̄ bụ̀ n’ígwè nwetā.",
        meaning_en: "An alcoholic beverage, wine, or drink tapped from trees or brewed.",
        examples: [
          { igbo: "Hā wètàrà mmanyā ọ̄chā n’ēmūmē ahụ̀.", english: "They brought palm wine to that festival." }
        ]
      }
    ],
    etymology: "Sitere na mmanya nkwụ / ngwọ.",
    crossReferences: "manya, mmanya ngwọ, mmanya ọcha",
    notes: "Akwụkwọ Nkọwaokwu Ọkammụta peeji 142."
  },
  {
    id: 3,
    headword: "mmīri",
    simplified: "mmiri",
    partOfSpeech: "ahà (noun)",
    phonetic: "[m̀.míː.ɾì]",
    dialect: "Igbo Izugbe (General Igbo)",
    definitions: [
      {
        id: 1,
        meaning: "Īfē nā-erū erū ǹkè īfē dị̄ ndụ̀ niīlē nà-àñụ̄ mà tòsị̀ màkà ị̀kị̀ wàdò ndụ̀.",
        meaning_en: "A clear liquid substance essential for all forms of living things; water.",
        examples: [
          { igbo: "Mmīri bụ̀ mkpụ̄rụ̄ ndụ̀.", english: "Water is life." },
          { igbo: "Àhụ̄ mmàdụ̀ tòsị̀ mmīri ijì lụ̄ọ̄ ọ̄lụ̄.", english: "The human body requires water to function." }
        ]
      }
    ],
    etymology: "Okwu ochie sitere n’ala Igbo maka mmiri na-eru eru.",
    crossReferences: "mmīli, mmīni, minī, miī",
    notes: "Academic standard dictionary entry with tone diacritics and academic typography."
  },
  {
    id: 4,
    headword: "mmụ̄ọ̄",
    simplified: "mmuo",
    partOfSpeech: "ahà (noun)",
    phonetic: "[m̀.mʊ́ː.ɔ́ː]",
    dialect: "Igbo Izugbe (General Igbo)",
    definitions: [
      {
        id: 1,
        meaning: "Īhē à nāghị̀ àhụ̄ anyā mānà ọ̄ nà-àrụ̄ ọ̄rụ̄; ikē kàrị̀rị̀ị̀ ǹkè mmàdụ̀.",
        meaning_en: "Spirit, immaterial supernatural entity or deity; a power surpassing humankind.",
        examples: [
          { igbo: "Ndị̄ bè anyị̄ nà-àsọ̄pụ̀rụ̀ ndị̄ mmụ̄ọ̄.", english: "Our people respect the spiritual forces." }
        ]
      }
    ],
    etymology: "Proto-Bantu *mù-yòkì (spirit).",
    crossReferences: "agbara, chi, mmanwụ",
    notes: "Akwụkwọ Nkọwaokwu Ọkammụta peeji 142."
  },
  {
    id: 5,
    headword: "mọtọ̀",
    simplified: "moto",
    partOfSpeech: "ahà (noun)",
    borrowing: "Nbinye: Bekee Motor",
    phonetic: "[mɔ̀.tɔ̀]",
    dialect: "Igbo Izugbe (General Igbo)",
    definitions: [
      {
        id: 1,
        meaning: "Ụ̄gbọ̄alà e jì ìgwè nà-àkwọ̄ ǹkè nā-agā n’ōkporō ụ̄zọ̀.",
        meaning_en: "Automobile, car, motor vehicle driven on roads.",
        examples: [
          { igbo: "Ọ̄ zụ̀tụ̀àrà mọtọ̀ ọ̄hụ̄rụ̄.", english: "He bought a brand-new car." }
        ]
      }
    ],
    etymology: "Okwu nbinye sitere na Bekee (Motor car).",
    crossReferences: "ụgbọala, moto",
    notes: "Akwụkwọ Nkọwaokwu Ọkammụta peeji 142."
  },
  {
    id: 6,
    headword: "akwụ̄kwọ",
    simplified: "akwukwo",
    partOfSpeech: "ahà (noun)",
    phonetic: "[à.kʷʊ́.kʷɔ́]",
    dialect: "Igbo Izugbe (General Igbo)",
    definitions: [
      {
        id: 1,
        meaning: "Ihe a kụkọtara ọnụ e ji ede ma ọ bụ agụ ihe; ma ọ bụ akwụkwọ osisi.",
        meaning_en: "A book, document, paper, or leaf of a plant.",
        examples: [
          { igbo: "Ọ na-agụ akwụ̄kwọ ụtụtụ na abalị.", english: "He reads books morning and night." },
          { igbo: "Ụmụakwụkwọ na-aga n’ụlọ akwụ̄kwọ.", english: "The students are going to school." }
        ]
      }
    ],
    etymology: "Sitere n’aha akwụkwọ osisi e ji emebu ihe odide.",
    crossReferences: "edemede, agụmagụ",
    notes: "Okwu gụnyere akwụkwọ ọgụgụ na akwụkwọ ndụ."
  },
  {
    id: 7,
    headword: "asụ̄sụ̀",
    simplified: "asusu",
    partOfSpeech: "ahà (noun)",
    phonetic: "[à.sʊ́.sʊ̀]",
    dialect: "Igbo Izugbe (General Igbo)",
    definitions: [
      {
        id: 1,
        meaning: "Usoro okwu na ụdaolu nke mmadụ ma ọ bụ agbụrụ na-eji ekwurịta okwu.",
        meaning_en: "Language; organized verbal and tonal communication system.",
        examples: [
          { igbo: "Asụ̄sụ̀ Igbo bụ asụsụ anyị ketara n’aka ndị nna nna anyị.", english: "The Igbo language is our ancestral heritage." }
        ]
      }
    ],
    etymology: "Sitere na mgbọrọgwụ ngwaa “sụ́” (ikwu okwu).",
    crossReferences: "okwu, olumba",
    notes: "Okwu dị mkpa maka ọmụmụ asụsụ Igbo."
  }
];

class AcademicDictionaryApp {
  constructor() {
    this.entries = [];
    this.filteredEntries = [];
    this.cmsOnline = false;
    this.activeView = 'book'; // 'book' or 'cards'
    
    // DOM Elements
    this.searchInput = document.getElementById('dictionarySearchInput');
    this.clearSearchBtn = document.getElementById('clearSearchBtn');
    this.posFilter = document.getElementById('posFilterSelect');
    this.toggleKeyboardBtn = document.getElementById('toggleKeyboardBtn');
    this.virtualKeyboard = document.getElementById('virtualKeyboard');
    this.cmsStatusBadge = document.getElementById('cmsStatusBadge');
    this.cmsStatusLabel = document.getElementById('cmsStatusLabel');
    this.refreshDataBtn = document.getElementById('refreshDataBtn');
    
    this.viewBookBtn = document.getElementById('viewBookBtn');
    this.viewCardsBtn = document.getElementById('viewCardsBtn');
    this.academicSheet = document.getElementById('academicSheet');
    this.cardsGrid = document.getElementById('cardsGrid');
    this.colLeft = document.getElementById('academicColLeft');
    this.colRight = document.getElementById('academicColRight');
    this.runningHeaderLeft = document.getElementById('runningHeaderLeft');
    
    this.exportDocxBtn = document.getElementById('exportDocxBtn');
    this.exportPdfBtn = document.getElementById('exportPdfBtn');
    this.exportJsonBtn = document.getElementById('exportJsonBtn');
    this.themeToggleBtn = document.getElementById('themeToggleBtn');
    this.toast = document.getElementById('toastNotification');

    // Modals
    this.wordDetailModal = document.getElementById('wordDetailModal');
    this.jsonApiModal = document.getElementById('jsonApiModal');

    this.init();
  }

  async init() {
    this.setupEventListeners();
    this.setupTheme();
    await this.fetchData();
    this.render();
  }

  setupEventListeners() {
    // Search input
    this.searchInput.addEventListener('input', () => {
      this.clearSearchBtn.classList.toggle('visible', this.searchInput.value.length > 0);
      this.filterEntries();
    });

    this.clearSearchBtn.addEventListener('click', () => {
      this.searchInput.value = '';
      this.clearSearchBtn.classList.remove('visible');
      this.searchInput.focus();
      this.filterEntries();
    });

    // Part of speech filter
    this.posFilter.addEventListener('change', () => this.filterEntries());

    // Virtual keyboard toggle
    this.toggleKeyboardBtn.addEventListener('click', () => {
      this.virtualKeyboard.classList.toggle('open');
    });

    // Virtual keyboard key clicks
    this.virtualKeyboard.addEventListener('click', (e) => {
      const key = e.target.closest('.vk-key');
      if (!key) return;
      const char = key.dataset.char;
      this.insertCharIntoSearch(char);
    });

    // View toggles
    this.viewBookBtn.addEventListener('click', () => this.switchView('book'));
    this.viewCardsBtn.addEventListener('click', () => this.switchView('cards'));

    // Export buttons
    this.exportDocxBtn.addEventListener('click', () => this.exportToDocx());
    this.exportPdfBtn.addEventListener('click', () => this.exportToPdf());
    this.exportJsonBtn.addEventListener('click', () => this.openJsonModal());

    // Refresh button
    this.refreshDataBtn.addEventListener('click', async () => {
      this.showToast('Na-adọta data ọhụrụ site na Strapi...');
      await this.fetchData();
      this.render();
      this.showToast('Data ọhụrụ abịala!');
    });

    // Theme toggle
    this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());

    // Modal close buttons
    document.getElementById('closeModalBtn')?.addEventListener('click', () => this.wordDetailModal.close());
    document.getElementById('closeJsonModalBtn')?.addEventListener('click', () => this.jsonApiModal.close());
    document.getElementById('copyJsonBtn')?.addEventListener('click', () => this.copyJsonData());
    document.getElementById('copyCitationBtn')?.addEventListener('click', () => this.copyCitation());
    document.getElementById('speakHeadwordBtn')?.addEventListener('click', () => this.speakCurrentWord());

    // Close modal on click outside
    this.wordDetailModal.addEventListener('click', (e) => {
      if (e.target === this.wordDetailModal) this.wordDetailModal.close();
    });
    this.jsonApiModal.addEventListener('click', (e) => {
      if (e.target === this.jsonApiModal) this.jsonApiModal.close();
    });
  }

  insertCharIntoSearch(char) {
    const input = this.searchInput;
    const start = input.selectionStart || input.value.length;
    const end = input.selectionEnd || input.value.length;
    const text = input.value;
    input.value = text.substring(0, start) + char + text.substring(end);
    input.selectionStart = input.selectionEnd = start + char.length;
    input.focus();
    this.clearSearchBtn.classList.add('visible');
    this.filterEntries();
  }

  switchView(viewName) {
    this.activeView = viewName;
    if (viewName === 'book') {
      this.viewBookBtn.classList.add('active');
      this.viewCardsBtn.classList.remove('active');
      this.academicSheet.style.display = 'block';
      this.cardsGrid.classList.add('hidden');
    } else {
      this.viewCardsBtn.classList.add('active');
      this.viewBookBtn.classList.remove('active');
      this.academicSheet.style.display = 'none';
      this.cardsGrid.classList.remove('hidden');
    }
  }

  setupTheme() {
    const saved = localStorage.getItem('dictionary_theme');
    if (saved === 'dark') {
      document.body.classList.add('theme-dark');
      document.getElementById('themeIcon').textContent = '☀️';
    }
  }

  toggleTheme() {
    const isDark = document.body.classList.toggle('theme-dark');
    document.getElementById('themeIcon').textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('dictionary_theme', isDark ? 'dark' : 'light');
  }

  /**
   * Fetches entries from Strapi REST API (http://localhost:1337/api/entries).
   * Falls back seamlessly to embedded academic entries if Strapi is not running.
   */
  async fetchData() {
    try {
      const response = await fetch('http://localhost:1337/api/entries?pagination[pageSize]=250', {
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        const json = await response.json();
        if (json.data && Array.isArray(json.data) && json.data.length > 0) {
          this.entries = json.data
            .map(item => this.normalizeEntry(item))
            .sort((a, b) => (a.simplified || a.headword).localeCompare(b.simplified || b.headword, 'ig'));
          this.updateCmsStatus(true, `Jikọrọ na Strapi (${this.entries.length} Okwu)`);
          this.filteredEntries = [...this.entries];
          return;
        }
      }
      throw new Error('API returned empty or non-200');
    } catch (err) {
      console.warn('Could not reach Strapi CMS API, using academic dataset:', err);
      this.entries = [...FALLBACK_ENTRIES].sort((a, b) => (a.simplified || a.headword).localeCompare(b.simplified || b.headword, 'ig'));
      this.filteredEntries = [...this.entries];
      this.updateCmsStatus(false, 'Strapi anọghị n’ọrụ (Data Obodo)');
    }
  }

  normalizeEntry(raw) {
    let defs = [];
    if (Array.isArray(raw.definitions)) {
      defs = raw.definitions;
    } else if (typeof raw.definitions === 'string') {
      try { defs = JSON.parse(raw.definitions); } catch { defs = []; }
    }

    return {
      id: raw.id || raw.documentId,
      headword: raw.headword || '',
      simplified: raw.simplified || this.stripTones(raw.headword || ''),
      partOfSpeech: raw.partOfSpeech || 'ahà (noun)',
      borrowing: raw.borrowing || (raw.notes && raw.notes.includes('Nbinye') ? raw.notes : ''),
      phonetic: raw.phonetic || '',
      dialect: raw.dialect || 'Igbo Izugbe',
      definitions: defs,
      etymology: raw.etymology || '',
      crossReferences: raw.crossReferences || raw.cross_references || '',
      notes: raw.notes || ''
    };
  }

  updateCmsStatus(online, label) {
    this.cmsOnline = online;
    const dot = this.cmsStatusBadge.querySelector('.status-dot');
    dot.className = `status-dot ${online ? 'online' : 'offline'}`;
    this.cmsStatusLabel.textContent = label;
  }

  /**
   * Tone normalization for robust diacritic-insensitive search.
   * Strips tones (macron, acute, grave, sub-dot) so "mmiri" finds "mmīri".
   */
  stripTones(str) {
    if (!str) return '';
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[āáàǎ]/gi, 'a')
      .replace(/[ēéèě]/gi, 'e')
      .replace(/[īíìǐ]/gi, 'i')
      .replace(/[ōóòǒ]/gi, 'o')
      .replace(/[ūúùǔ]/gi, 'u')
      .replace(/[ịị̄ị́ị̀]/gi, 'i')
      .replace(/[ọọ̄ọ́ọ̀]/gi, 'o')
      .replace(/[ụụ̄ụ́ụ̀]/gi, 'u')
      .replace(/[ṅ]/gi, 'n')
      .toLowerCase();
  }

  filterEntries() {
    const query = this.stripTones(this.searchInput.value.trim());
    const rawQuery = this.searchInput.value.trim().toLowerCase();
    const posFilter = this.posFilter.value.toLowerCase();

    this.filteredEntries = this.entries.filter(entry => {
      // POS check
      if (posFilter !== 'all') {
        const entryPos = (entry.partOfSpeech || '').toLowerCase();
        if (!entryPos.includes(posFilter)) return false;
      }

      // Query check
      if (!query) return true;

      const normHeadword = this.stripTones(entry.headword);
      const exactHeadword = (entry.headword || '').toLowerCase();
      const normSimplified = this.stripTones(entry.simplified || '');
      const meanings = JSON.stringify(entry.definitions || '').toLowerCase();
      const normMeanings = this.stripTones(meanings);

      return (
        normHeadword.includes(query) ||
        exactHeadword.includes(rawQuery) ||
        normSimplified.includes(query) ||
        normMeanings.includes(query) ||
        (entry.crossReferences && this.stripTones(entry.crossReferences).includes(query))
      );
    });

    this.render();
  }

  render() {
    this.renderBookView();
    this.renderCardsView();
  }

  renderBookView() {
    this.colLeft.innerHTML = '';
    this.colRight.innerHTML = '';

    if (this.filteredEntries.length === 0) {
      this.colLeft.innerHTML = `
        <div style="font-family: var(--font-sans); color: var(--text-muted); padding: 1.5rem 0;">
          Enweghị mkpụrụokwu kwekọrọ n’ọchụchọ gị. Nwaa iji mkpụrụokwu ọzọ ma ọ bụ hichapụ ihe ị dere.
        </div>
      `;
      return;
    }

    // Update running header
    const firstWord = this.filteredEntries[0].headword.toUpperCase();
    const lastWord = this.filteredEntries[this.filteredEntries.length - 1].headword.toUpperCase();
    this.runningHeaderLeft.textContent = `${firstWord} — ${lastWord}`;

    // Update dynamic letter heading
    const letterHeading = document.getElementById('currentLetterHeading');
    if (letterHeading) {
      const firstChar = this.stripTones(this.filteredEntries[0].headword).charAt(0).toUpperCase();
      const lastChar = this.stripTones(this.filteredEntries[this.filteredEntries.length - 1].headword).charAt(0).toUpperCase();
      if (firstChar === lastChar) {
        letterHeading.textContent = `${firstChar}, ${firstChar.toLowerCase()}`;
      } else {
        letterHeading.textContent = `${firstChar} — ${lastChar}`;
      }
    }

    // Split entries into two balanced columns
    const midPoint = Math.ceil(this.filteredEntries.length / 2);
    const leftEntries = this.filteredEntries.slice(0, midPoint);
    const rightEntries = this.filteredEntries.slice(midPoint);

    leftEntries.forEach(entry => this.colLeft.appendChild(this.createAcademicEntryElement(entry)));
    rightEntries.forEach(entry => this.colRight.appendChild(this.createAcademicEntryElement(entry)));
  }

  createAcademicEntryElement(entry) {
    const div = document.createElement('div');
    div.className = 'academic-entry';
    div.title = 'Pịa ka ị hụ nkọwa zuru ezu';
    div.addEventListener('click', () => this.openWordModal(entry));

    // Part of speech formatting (extracting abbreviation, e.g. "ahà.")
    const posAbbr = entry.partOfSpeech ? entry.partOfSpeech.split(' ')[0] + '.' : 'ahà.';
    const borrowingHtml = entry.borrowing ? `<span class="entry-borrowing">[${entry.borrowing}]</span> ` : '';

    // Definitions formatting
    let defsHtml = '';
    if (Array.isArray(entry.definitions) && entry.definitions.length > 0) {
      defsHtml = entry.definitions.map((def, idx) => {
        const num = `<span class="sense-number">${idx + 1}</span>`;
        const meaning = `<span class="entry-meaning">${def.meaning || ''}</span>`;
        let examplesHtml = '';
        if (Array.isArray(def.examples) && def.examples.length > 0) {
          const exItems = def.examples.map(ex => ex.igbo).join(' • ');
          examplesHtml = ` <span class="entry-examples">• ${exItems}</span>`;
        }
        return `${num} ${meaning}${examplesHtml}`;
      }).join(' ');
    } else {
      defsHtml = `<span class="entry-meaning">${entry.notes || 'Nkọwa dị na nkwadebe.'}</span>`;
    }

    // Cross references
    let seeAlsoHtml = '';
    if (entry.crossReferences) {
      seeAlsoHtml = `<div class="entry-see-also"><span class="see-arrow">▶</span> Lèe mà ${entry.crossReferences}.</div>`;
    }

    div.innerHTML = `
      <span class="entry-headword">${entry.headword}</span>
      <span class="entry-pos">${posAbbr}</span>
      ${borrowingHtml}
      ${defsHtml}
      ${seeAlsoHtml}
    `;

    return div;
  }

  renderCardsView() {
    this.cardsGrid.innerHTML = '';
    this.filteredEntries.forEach(entry => {
      const card = document.createElement('div');
      card.className = 'entry-card';
      card.addEventListener('click', () => this.openWordModal(entry));

      const firstMeaning = (entry.definitions && entry.definitions[0]?.meaning) || 'Nkọwa okwu';
      const example = (entry.definitions && entry.definitions[0]?.examples?.[0]?.igbo) || '';

      card.innerHTML = `
        <div class="card-header">
          <span class="card-headword">${entry.headword}</span>
          <div class="card-badges">
            <span class="badge-pos">${entry.partOfSpeech || 'ahà'}</span>
            ${entry.phonetic ? `<span class="badge-phonetic">${entry.phonetic}</span>` : ''}
          </div>
        </div>
        <div class="card-body">
          <p>${firstMeaning}</p>
          ${example ? `<p style="font-style: italic; color: var(--text-secondary); margin-top: 0.5rem;">“${example}”</p>` : ''}
        </div>
        <div class="card-footer">
          <span>Olumba: ${entry.dialect || 'Izugbe'}</span>
          <span>Pịa maka nkọwa &rarr;</span>
        </div>
      `;
      this.cardsGrid.appendChild(card);
    });
  }

  openWordModal(entry) {
    this.currentModalEntry = entry;
    document.getElementById('modalHeadword').textContent = entry.headword;
    document.getElementById('modalPos').textContent = entry.partOfSpeech || 'ahà.';
    document.getElementById('modalPhonetic').textContent = entry.phonetic || '';

    const modalBody = document.getElementById('modalBody');
    let defsHtml = '';
    if (Array.isArray(entry.definitions) && entry.definitions.length > 0) {
      defsHtml = entry.definitions.map((def, idx) => {
        let examplesList = '';
        if (Array.isArray(def.examples) && def.examples.length > 0) {
          examplesList = `
            <div class="detail-examples-box">
              ${def.examples.map(ex => `<div><strong>• ${ex.igbo}</strong> ${ex.english ? `<span style="opacity: 0.8">— ${ex.english}</span>` : ''}</div>`).join('')}
            </div>
          `;
        }
        return `
          <div class="detail-def-item">
            <span class="detail-def-num">${idx + 1}.</span>
            <div>
              <p><strong>${def.meaning || ''}</strong></p>
              ${def.meaning_en ? `<p style="color: var(--text-secondary); font-size: 0.9rem;">${def.meaning_en}</p>` : ''}
              ${examplesList}
            </div>
          </div>
        `;
      }).join('');
    }

    modalBody.innerHTML = `
      <div>
        <h4 class="detail-section-title">Nkọwa na Ahịrịokwu Atụ (Definitions &amp; Examples)</h4>
        ${defsHtml}
      </div>

      <div class="detail-meta-grid">
        <div>
          <span style="font-weight: 600; color: var(--text-secondary);">Mmalite Okwu (Etymology):</span>
          <p>${entry.etymology || 'Enweghị nkọwa mmalite okwu.'}</p>
        </div>
        <div>
          <span style="font-weight: 600; color: var(--text-secondary);">Olumba (Dialect):</span>
          <p>${entry.dialect || 'Igbo Izugbe'}</p>
        </div>
        <div style="grid-column: span 2;">
          <span style="font-weight: 600; color: var(--text-secondary);">Okwu Ndị Yiri Ya (Cross References):</span>
          <p>${entry.crossReferences ? `Lèe mà: ${entry.crossReferences}` : 'Enweghị okwu ọzọ edere.'}</p>
        </div>
      </div>
    `;

    this.wordDetailModal.showModal();
  }

  speakCurrentWord() {
    if (!this.currentModalEntry) return;
    const text = this.currentModalEntry.headword;
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ig-NG';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    } else {
      this.showToast('Ihe nkwuputa olu adịghị na braụza a.');
    }
  }

  copyCitation() {
    if (!this.currentModalEntry) return;
    const e = this.currentModalEntry;
    const def = e.definitions?.[0]?.meaning || '';
    const citation = `${e.headword} (${e.partOfSpeech}). ${def} — Akwụkwọ Nkọwaokwu Ọkammụta (Igbo Lexicography Project).`;
    navigator.clipboard.writeText(citation);
    this.showToast('Depụtaghachiri nkọwa okwu nke ọma!');
  }

  openJsonModal() {
    const jsonOutput = document.getElementById('jsonCodeOutput');
    jsonOutput.textContent = JSON.stringify({
      status: "success",
      endpoint: "http://localhost:1337/api/entries",
      timestamp: new Date().toISOString(),
      total_count: this.filteredEntries.length,
      data: this.filteredEntries
    }, null, 2);
    this.jsonApiModal.showModal();
  }

  copyJsonData() {
    const jsonText = document.getElementById('jsonCodeOutput').textContent;
    navigator.clipboard.writeText(jsonText);
    this.showToast('E depụtaghachiri JSON!');
  }

  /**
   * Generates and downloads a real, formatted academic Microsoft Word (.docx) file
   * using docx.js, preserving Noto Serif, bold headwords, italic POS, and hanging indents!
   */
  async exportToDocx() {
    try {
      this.showToast('Na-akwadebe faịlụ Word (.docx)...');

      if (typeof docx === 'undefined') {
        throw new Error('docx library not loaded');
      }

      const { Document, Paragraph, TextRun, HeadingLevel, AlignmentType, convertInchesToTwip, Packer } = docx;

      const children = [];

      // Dynamic letter heading for Word document
      let docHeadingText = "M, m";
      if (this.filteredEntries.length > 0) {
        const firstC = this.stripTones(this.filteredEntries[0].headword).charAt(0).toUpperCase();
        const lastC = this.stripTones(this.filteredEntries[this.filteredEntries.length - 1].headword).charAt(0).toUpperCase();
        docHeadingText = firstC === lastC ? `${firstC}, ${firstC.toLowerCase()}` : `${firstC} — ${lastC}`;
      }

      // Academic Document Title Header
      children.push(
        new Paragraph({
          text: "AKWỤKWỌ NKỌWAOKWU ỌKAMMỤTA (IGBO LEXICOGRAPHY PROJECT)",
          heading: HeadingLevel.HEADING_2,
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 }
        }),
        new Paragraph({
          text: docHeadingText,
          heading: HeadingLevel.HEADING_1,
          alignment: AlignmentType.LEFT,
          spacing: { before: 200, after: 240 }
        })
      );

      // Entries with hanging indent
      this.filteredEntries.forEach(entry => {
        const runs = [];

        // Headword in bold
        runs.push(new TextRun({
          text: entry.headword + " ",
          bold: true,
          font: "Noto Serif",
          size: 22
        }));

        // POS in italics
        const pos = (entry.partOfSpeech ? entry.partOfSpeech.split(' ')[0] : 'ahà') + ". ";
        runs.push(new TextRun({
          text: pos,
          italics: true,
          font: "Noto Serif",
          size: 22
        }));

        // Borrowing if any
        if (entry.borrowing) {
          runs.push(new TextRun({
            text: `[${entry.borrowing}] `,
            font: "Noto Serif",
            size: 22
          }));
        }

        // Definitions
        if (Array.isArray(entry.definitions)) {
          entry.definitions.forEach((def, idx) => {
            runs.push(new TextRun({
              text: `${idx + 1} `,
              bold: true,
              font: "Noto Serif",
              size: 22
            }));
            runs.push(new TextRun({
              text: `${def.meaning || ''} `,
              font: "Noto Serif",
              size: 22
            }));

            if (Array.isArray(def.examples) && def.examples.length > 0) {
              const exText = def.examples.map(ex => ex.igbo).join(' • ');
              runs.push(new TextRun({
                text: `• ${exText} `,
                italics: true,
                font: "Noto Serif",
                size: 22
              }));
            }
          });
        }

        // Cross references
        if (entry.crossReferences) {
          runs.push(new TextRun({
            text: `▶ Lèe mà ${entry.crossReferences}.`,
            font: "Noto Serif",
            size: 20
          }));
        }

        children.push(
          new Paragraph({
            children: runs,
            spacing: { after: 180 },
            indent: {
              left: 480,
              hanging: 480
            }
          })
        );
      });

      const doc = new Document({
        sections: [{
          properties: {
            page: {
              margin: {
                top: convertInchesToTwip(1),
                bottom: convertInchesToTwip(1),
                left: convertInchesToTwip(1),
                right: convertInchesToTwip(1)
              }
            }
          },
          children: children
        }]
      });

      const blob = await Packer.toBlob(doc);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Akwukwo_Nkowaokwu_Igbo_${Date.now()}.docx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      this.showToast('E budatara faịlụ Word (.docx) nke ọma!');
    } catch (err) {
      console.error('Word export error:', err);
      this.showToast('Nsogbu mere n’ibudata Word. Braụza gị na-akwado PDF.');
    }
  }

  exportToPdf() {
    this.switchView('book');
    setTimeout(() => {
      window.print();
    }, 200);
  }

  showToast(message) {
    this.toast.textContent = message;
    this.toast.classList.add('show');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.toast.classList.remove('show');
    }, 3200);
  }
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.dictionaryApp = new AcademicDictionaryApp();
});
