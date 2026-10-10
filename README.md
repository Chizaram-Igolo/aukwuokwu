# Akwụkwọ Nkọwaokwu Ọkammụta — Academic Igbo Dictionary

An open-source academic lexicography platform and web dictionary for the Igbo language, engineered with university-grade typography, complete orthographic diacritics, headless CMS management (Strapi 5), real-time tone-normalized search, and document export capabilities.

Repository: [https://github.com/Chizaram-Igolo/aukwuokwu.git](https://github.com/Chizaram-Igolo/aukwuokwu.git)

---

## 🌟 Key Features

1. **Academic Typography & Print Layout:**
   - Designed around the **Noto Serif** typeface to ensure flawless rendering of Igbo diacritics: macrons (`ā`, `ē`, `ī`, `ō`, `ū`), acutes (`á`, `é`, `í`, `ó`, `ú`), graves (`à`, `è`, `ì`, `ò`, `ù`), sub-dots (`ị`, `ọ`, `ụ`), and the voiced velar nasal `ṅ`.
   - Formatted in a classical two-column academic dictionary book layout with hanging indents, bold headwords, and italicized parts of speech.

2. **Tone-Normalized Real-Time Search:**
   - Allows users to search with or without diacritical marks (e.g. searching `udo`, `moto`, or `ala` matches `ùdò`, `motò`, and `àlà` respectively).

3. **Interactive Virtual Igbo Keyboard:**
   - On-screen diacritics palette for effortless input of mid tones (macron), high tones (acute), low tones (grave), and sub-dots.

4. **Multi-Format Export & Document Generation:**
   - **Microsoft Word (.docx):** Direct client-side `.docx` generation preserving academic hanging indents and styling.
   - **PDF Printing (.pdf):** High-fidelity stylesheet formatted for standard A4/Letter print sheets.
   - **JSON Export & API Viewer:** Built-in modal for copying live JSON structures.

5. **Headless CMS Backend (Strapi 5):**
   - Headless content management system powered by Strapi 5 and SQLite.
   - Self-hosted admin dashboard for lexicographers and editors to add, edit, and publish definitions, examples, and etymologies.

6. **Automated Bulk Data Ingestion Pipeline:**
   - CLI script (`backend/scripts/import-entries.js`) to ingest batches of vocabulary from JSON/CSV files with automated tone stripping and draft/published state management.

---

## 🏗️ Project Architecture

```
Ife_ndï_özö/
├── frontend/                     # Academic Web Application
│   ├── index.html                # Semantic HTML5 academic dictionary layout
│   ├── style.css                 # Custom CSS design system (Noto Serif typography)
│   ├── app.js                    # Client-side state, Strapi synchronization & docx export
│   └── server.js                 # Lightweight Node.js static web server
├── backend/                      # Strapi 5 CMS & Headless API
│   ├── config/                   # Database & server configuration
│   ├── data/
│   │   └── igbo-lexicon.json     # Curated Igbo lexicon dataset
│   ├── scripts/
│   │   ├── import-entries.js     # Bulk data ingestion script
│   │   └── seed-all.js           # Initial database seeding script
│   └── src/api/entry/            # Dictionary Entry Content Type definition
├── API_DOCUMENTATION.md          # Complete REST API reference and developer guide
├── Oru_Antigravity_Handoff.md    # Original Igbo specification and handoff document
└── README.md                     # Project overview and setup instructions
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 20.0.0
- npm >= 6.0.0

### 1. Start the Strapi CMS Backend
```bash
cd backend
npm install
npm run develop
```
- API Base URL: `http://localhost:1337/api/entries`
- Admin Dashboard: `http://localhost:1337/admin`

### 2. Start the Frontend Web Application
```bash
# In another terminal window from the project root:
node frontend/server.js
```
- Frontend Web App: `http://localhost:3000/`

---

## 📥 Ingesting Vocabulary in Bulk

To import new vocabulary entries into the dictionary database:
```bash
node backend/scripts/import-entries.js backend/data/igbo-lexicon.json
```

See [API_DOCUMENTATION.md](API_DOCUMENTATION.md) for full endpoint specifications, query filters, and Python/JavaScript code integration examples.

---

## 📜 License
This project is open-source under the MIT License.
