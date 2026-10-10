# Academic Igbo Dictionary: Specification & Handoff Document
*(Ọrụ Antigravity: Akwụkwọ Nkọwapụta na Nnyefe)*

## 1. Project Overview (Nchịkọta Ọrụ)
The goal of this project is to create an online academic dictionary for the Igbo language (*Akwụkwọ Nkọwaokwu Ọkammụta*) that combines university-grade lexicographical standards with modern web technology. The primary objective is to establish an autonomous, robust lexical database that serves linguistic research, creative writing, educational applications, and technology localization across multiple platforms.

---

## 2. Core Features & Functionalities (Njirimara na Ọrụ Pụtara Ìhè)
* **Multi-Format Export & Document Conversion (Nbudata na Ngbanwe Faịlụ):**
  The platform allows users to export and download individual words, curated word lists, or entire academic sheets directly in multiple file formats:
  - **Microsoft Word (`.docx`):** Rendered client-side using `docx.js`, preserving academic hanging indents, bold headwords, and italicized parts of speech.
  - **PDF (`.pdf`):** Standard print-ready layout tailored for academic publication sheets.
  - **JSON (`.json`):** Direct export for developers and API consumers.
* **Extensibility & Automated Bulk Ingestion (Ohere Mgbakwunye na Mbubata Data):**
  The system includes an automated CLI bulk ingestion pipeline ([backend/scripts/import-entries.js](file:///c:/Users/chiza/Documents/Ife_ndï_özö/backend/scripts/import-entries.js)) to import batches of vocabulary from external JSON/CSV files without disrupting existing entries or requiring manual individual entry in the admin interface.
* **Comprehensive REST API (Njikọ API Zuru Ezu):**
  A headless API documented in [API_DOCUMENTATION.md](file:///c:/Users/chiza/Documents/Ife_ndï_özö/API_DOCUMENTATION.md) allows third-party developers to query Igbo words and diacritics to power:
  - Writing applications and word processors.
  - Video subtitling and closed captioning tools.
  - Software localization, NLP, and machine translation pipelines.

---

## 3. UI/UX & Formatting (Ọdịdị na Nhazi)
* **Academic Two-Column Print Layout (Nhazi Mahadum):**
  Both the web application and exported documents replicate genuine university dictionary formatting: bold headwords, italicized parts of speech, phonetic transcriptions (IPA), sub-senses, and strict hanging indents.
* **Noto Serif Typography (Ụdị Mkpụrụedemede):**
  The interface exclusively employs **Noto Serif** to ensure all Igbo tone marks (macron `ā`, acute `á`, grave `à`), sub-dots (`ị`, `ọ`, `ụ`), and nasal `ṅ` render cleanly across all browsers and operating systems.
* **Tone-Normalized Real-Time Search (Ọchụchọ Mara Ihe):**
  Users can type words without diacritics (e.g., searching `moto`, `udo`, `ala`) and the search engine instantly matches their tone-marked equivalents (`motò`, `ùdò`, `àlà`).
* **Virtual Diacritics Keyboard (Ahụigodo Ụdaolu):**
  An on-screen keyboard palette allows users to type all Igbo tone marks and special characters with a single click.

---

## 4. Content Management System & Backend (Nchịkwa Ọdịnaya)
* **Headless CMS (Strapi 5):**
  Configured with SQLite in `backend/` using the `Dictionary Entry` content type (`api::entry.entry`).
* **Editorial Capabilities:**
  Provides lexicographers and editors with an admin interface to:
  - Add new vocabulary entries directly via the Admin Panel.
  - Edit definitions, dialects, cross-references, etymology, and example sentences.
  - Run bulk ingestion scripts for mass ingestion.

---

## 5. Live Implementation Status & Milestones (Ọganihu Ọrụ Dị Ugbu A)

* **GitHub Repository:**
  - Remote: [https://github.com/Chizaram-Igolo/aukwuokwu.git](https://github.com/Chizaram-Igolo/aukwuokwu.git)
  - Active Branch: `feature/lexicon-expansion-and-api-docs` (tracking `main`)

* **Strapi CMS Backend:**
  - Directory: [backend](file:///c:/Users/chiza/Documents/Ife_ndï_özö/backend)
  - Content Type: `Dictionary Entry` (`api::entry.entry`)
  - Status: Admin registered (`hasAdmin: true`)
  - **Database Count:** 17 fully documented academic entries with tone marks, IPA, etymologies, and bilingual examples
  - **Server API URL:** `http://localhost:1337/api/entries`
  - **Admin Panel URL:** `http://localhost:1337/admin`

* **Frontend Web Application:**
  - Directory: [frontend](file:///c:/Users/chiza/Documents/Ife_ndï_özö/frontend)
  - Views: **Book View (Two-Column Academic Sheet)** & **Cards Explorer**
  - Exports: Direct `.docx`, `.pdf` print, `.json` viewer
  - **Frontend URL:** `http://localhost:3000/`

* **Supporting Tools & Documentation:**
  - **Bulk Ingestion Script:** [backend/scripts/import-entries.js](file:///c:/Users/chiza/Documents/Ife_ndï_özö/backend/scripts/import-entries.js)
  - **Curated Dataset:** [backend/data/igbo-lexicon.json](file:///c:/Users/chiza/Documents/Ife_ndï_özö/backend/data/igbo-lexicon.json)
  - **Developer API Guide:** [API_DOCUMENTATION.md](file:///c:/Users/chiza/Documents/Ife_ndï_özö/API_DOCUMENTATION.md)
  - **Project Readme:** [README.md](file:///c:/Users/chiza/Documents/Ife_ndï_özö/README.md)
