# Academic Igbo Dictionary — API Documentation & Developer Guide

The Academic Igbo Dictionary REST API allows developers to retrieve Igbo headwords, diacritics/tone marks, phonetic transcriptions (IPA), dialect variants, definitions, etymologies, and contextual example sentences directly from the **Strapi CMS Backend**.

---

## 1. Overview & Base URL
* **Base URL (Local):** `http://localhost:1337/api`
* **Content Type:** `entries`
* **Format:** JSON (UTF-8 encoded with full tone marks: macrons, acutes, graves, and sub-dots)
* **Authentication:** Public Read (`GET` requests do not require an API token)

---

## 2. Key Endpoints

### A. Retrieve All Entries (Paginated & Sorted)
```http
GET /api/entries?pagination[pageSize]=100&sort=headword:asc
```

#### Sample Response:
```json
{
  "data": [
    {
      "id": 24,
      "documentId": "oifkhf925lp",
      "headword": "àlà",
      "simplified": "ala",
      "partOfSpeech": "ahà (noun)",
      "phonetic": "[à.là]",
      "dialect": "Igbo Izugbe / Owerri (ana/ani)",
      "definitions": [
        {
          "id": 1,
          "meaning": "Ebe mmadụ na-azọ ụkwụ; akụkụ ụwa nke akọrọ na-enweghị mmiri.",
          "meaning_en": "Earth, land, ground, soil.",
          "examples": [
            {
              "igbo": "Ala Igbo bụ ala na-amị mkpụrụ.",
              "english": "Igboland is a fertile land."
            }
          ]
        },
        {
          "id": 2,
          "meaning": "Chi nne na-echebe ụkpụrụ na omume ọma n’omenala Igbo.",
          "meaning_en": "Earth goddess; moral deity of fertility and societal ethics in Igbo cosmology.",
          "examples": [
            {
              "igbo": "Imerụ àlà bụ nnukwu ihe arụ.",
              "english": "Desecrating the earth goddess is an abomination."
            }
          ]
        }
      ],
      "etymology": "Proto-Igboid *à-là.",
      "crossReferences": "ana, ani, elo",
      "notes": "Dialect variants include 'ana' (Anambra) and 'ani' (Enugu)."
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 100,
      "pageCount": 1,
      "total": 17
    }
  }
}
```

---

### B. Search & Filtering

#### 1. Search with Tone-Insensitive Normalized Query (`simplified`):
Enables users typing without diacritics (e.g. `"mmiri"`, `"udo"`, `"ala"`) to retrieve entries with full tone marks:
```http
GET /api/entries?filters[simplified][$containsi]=udo
```

#### 2. Exact Headword Match:
```http
GET /api/entries?filters[headword][$eq]=ùdò
```

#### 3. Filter by Part of Speech:
```http
GET /api/entries?filters[partOfSpeech][$containsi]=ahà
```

---

## 3. Code Integration Examples

### JavaScript / Node.js
```javascript
async function searchIgboDictionary(query) {
  // Normalize tones for flexible search
  const normalized = query
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  const url = `http://localhost:1337/api/entries?filters[simplified][$containsi]=${encodeURIComponent(normalized)}`;
  
  const response = await fetch(url, { headers: { 'Accept': 'application/json' } });
  const result = await response.json();
  return result.data;
}

// Example usage
searchIgboDictionary('mmiri').then(entries => {
  entries.forEach(entry => {
    console.log(`${entry.headword} (${entry.partOfSpeech}) - ${entry.definitions[0]?.meaning}`);
  });
});
```

### Python (for NLP, LLM Pipelines, Subtitling & Localization)
```python
import requests

BASE_URL = "http://localhost:1337/api/entries"

def lookup_igbo_word(word: str):
    params = {
        "filters[simplified][$containsi]": word.lower(),
        "pagination[pageSize]": 10
    }
    response = requests.get(BASE_URL, params=params)
    if response.status_code == 200:
        return response.json().get("data", [])
    return []

# Example: Look up "udo"
results = lookup_igbo_word("udo")
for entry in results:
    print(f"Headword: {entry['headword']}")
    print(f"Phonetic: {entry.get('phonetic', 'N/A')}")
    for idx, d in enumerate(entry.get('definitions', []), 1):
        print(f"  {idx}. Igbo:    {d['meaning']}")
        print(f"     English: {d.get('meaning_en', 'N/A')}")
```

### cURL
```bash
curl -X GET "http://localhost:1337/api/entries?filters[simplified][$containsi]=mmiri" \
     -H "Accept: application/json"
```

---

## 4. Bulk Word Ingestion

To import large batches of Igbo vocabulary without entering them manually via the Admin Panel:
1. Prepare entries in [backend/data/igbo-lexicon.json](file:///c:/Users/chiza/Documents/Ife_ndï_özö/backend/data/igbo-lexicon.json).
2. Run the ingestion pipeline from the project root:
   ```bash
   node backend/scripts/import-entries.js backend/data/igbo-lexicon.json
   ```
3. The script automatically creates both draft and published records so entries are instantly queryable in both the web app and the REST API.
