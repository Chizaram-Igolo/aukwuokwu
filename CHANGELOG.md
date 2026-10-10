# Pull Request Changelog

**Branch:** `feature/lexicon-expansion-and-api-docs`  
**Commit:** `09ff2cb` — `feat: Add bulk ingestion pipeline, expand lexicon to 17 entries, add English API documentation and README`  
**GitHub PR Link:** [Create Pull Request on GitHub](https://github.com/Chizaram-Igolo/aukwuokwu/pull/new/feature/lexicon-expansion-and-api-docs)

---

## 📌 Overview
This update introduces an automated bulk ingestion pipeline, expands the dictionary database from 7 to 17 academic Igbo entries, adds a comprehensive REST API developer guide, and makes the academic book presentation header dynamic. All documentation files have been translated and standardized in English.

---

## 🚀 Added

### 1. Automated Bulk Data Ingestion Pipeline
* **`backend/scripts/import-entries.js`**
  * Automated script to ingest vocabulary batches from JSON/CSV files directly into Strapi 5's SQLite database.
  * Generates tone-stripped indices (`simplified`) automatically for fast, diacritic-insensitive search.
  * Implements upsert logic to update existing records or insert new ones without duplicating entries.
  * Inserts both draft and published rows to ensure immediate availability in both the REST API and the web app.

### 2. Curated Igbo Lexicon Dataset
* **`backend/data/igbo-lexicon.json`**
  * Added 10 new university-grade Igbo entries (bringing total published entries to 17):
    1. **`ùdò`** — Peace, harmony, tranquility
    2. **`anyānwụ̄`** — The sun (celestial body / eye of the sky)
    3. **`ezinụ̄lọ̀`** — Family, household
    4. **`àlà`** — Earth, land, soil, earth deity
    5. **`ọ́mụ̀mà`** — Knowledge, comprehension, understanding
    6. **`àkụ́kọ́`** — Story, history, narrative, news
    7. **`ọ̄nụ̄`** — Mouth, speech organ / price, cost
    8. **`égwú`** — Music, song, dance
    9. **`ànụ̄mànụ̀`** — Animal, creature
    10. **`ọ̄chị̄chị̄`** — Leadership, governance, rule
  * Each entry includes IPA phonetic transcriptions, dialect variants, etymology notes, Igbo definitions, English translations, and contextual example sentences.

### 3. REST API Documentation & Developer Guide
* **`API_DOCUMENTATION.md`**
  * Full specification of the `GET /api/entries` endpoint.
  * Guidance on filtering with `filters[simplified][$containsi]=...` for tone-insensitive search.
  * Copy-paste ready integration examples in **JavaScript (Fetch)**, **Python (Requests)** (for NLP, subtitle tooling, and software localization), and **cURL**.

### 4. Root Project Documentation
* **`README.md`**
  * Standard project README covering features, typography choices, system architecture, setup commands, and ingestion usage.

---

## 🛠️ Changed

### 1. Frontend Client Application
* **`frontend/app.js` & `frontend/index.html` & `frontend/style.css`**
  * **API Pagination:** Updated API request to `?pagination[pageSize]=250` so entries beyond the default limit of 25 are loaded seamlessly.
  * **Collation & Sorting:** Entries are sorted alphabetically using locale-aware comparison (`a.localeCompare(b, 'ig')`).
  * **Dynamic Letter Divider:** The book view letter heading (`currentLetterHeading`) now adapts dynamically to the active search or page range (e.g., displaying **`A — U`** or **`M, m`**).
  * **Dynamic Word Export (.docx):** The letter heading in downloaded `.docx` documents now matches the dynamic letter range of exported entries.
  * **Interactive API Explorer Modal:** Upgraded the JSON viewer modal into a multi-language integration hub with 4 switchable snippet tabs (**JSON Response**, **JavaScript Fetch**, **Python Requests**, and **cURL**) plus quick one-click code copy.
  * **Offline Resilience:** Synchronized all 17 lexicon entries into the client fallback cache, ensuring full dictionary browsing even when Strapi is offline.

### 2. Project Specification & Handoff Document
* **`Oru_Antigravity_Handoff.md`**
  * Translated all sections into English while retaining bilingual section headers.
  * Updated live system status with the GitHub repository link, Strapi admin verification, and total entry count (17).

---

## 🧪 Verification & Testing Results

| Test Scenario | Expected Outcome | Result |
| :--- | :--- | :--- |
| **Strapi Backend (`:1337`)** | `GET /api/entries?pagination[pageSize]=50` returns `HTTP 200` with 17 items | **Passed** |
| **Frontend Web App (`:3000`)** | Displays `Jikọrọ na Strapi (17 Okwu)` with two-column Noto Serif layout | **Passed** |
| **Tone Search** | Searching `"udo"` matches `"ùdò"`, `"ala"` matches `"àlà"` | **Passed** |
| **Detail Modal** | Displays IPA, etymology, bilingual definitions, and example sentences | **Passed** |
| **Word Export (.DOCX)** | Generates and downloads `.docx` document with academic styling | **Passed** |
| **Git Push** | Branch `feature/lexicon-expansion-and-api-docs` pushed to remote repository | **Passed** |
