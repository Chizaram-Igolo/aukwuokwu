# Ọrụ Antigravity: Akwụkwọ Nkọwapụta na Nnyefe (Handoff Document)

## 1. Nchịkọta Ọrụ (Project Overview)
Ọrụ Antigravity bụ imepụta akwụkwọ nkọwaokwu asụsụ Igbo n'ịntanetị (web-based dictionary) nke ga-ejikọta ịdị mma na ndokwa nke akwụkwọ mahadum yana teknụzụ ọgbara ọhụrụ. Ebumnuche bụ isi bụ ịmepụta ebe nchekwa okwu (database) siri ike, nke kwụụrụ onwe ya, nke a ga-eji mee nyocha, ide ihe, na ịkwalite asụsụ Igbo na ngwaọrụ dị iche iche.

## 2. Njirimara na Ọrụ Pụtara Ìhè (Core Features & Functionalities)
* **Nbudata na Ngbanwe Faịlụ (Export & Conversion):** Ikpo okwu a ga-enye ndị ọrụ ohere ibudata (download) mkpụrụokwu, ndepụta, ma ọ bụ ibe akwụkwọ niile. A ga-enwe ike ịgbanwe edemede ndị a ozugbo gaa n'ụdị faịlụ dị iche iche dịka `.docx`, `.pdf`, na *document extensions* ndị ọzọ dị mkpa.
* **Ohere Mgbakwunye (Extendibility):** Sistemụ a ga-adị njikere ịnabata data na njikọ site na ebe ndị ọzọ (external sources). Nke a pụtara na a pụrụ ibubata nnukwu data ọhụrụ ngwa ngwa n'enweghị nsogbu na nhazi mbụ ya.
* **Njikọ API (Comprehensive API):** Ọ ga-enwe njikọ API nke ya ebe ndị mmepụta ngwaọrụ kọmputa (developers) nwere ike isi dọrọ mkpụrụokwu Igbo iji kwado ọrụ ndị ọzọ. A ga-eji API a mee ihe maka:
  * Akụrụngwa na ngwa edemede (Writing applications).
  * Nkọwa okwu vidiyo na ihe nkiri (Closed captions).
  * Ntụgharị na nhazi asụsụ na kọmputa maka ngwaọrụ ọhụrụ (Localization).

## 3. Ọdịdị na Nhazi (UI/UX & Formatting)
* **Nhazi Mahadum (Academic Formatting):** A ga-ahazi ibe weebụsaịtị yana faịlụ ndị a na-ebudata ka ha nwee ugwu ma dị kpọmkwem ka ezigbo akwụkwọ nkọwaokwu a na-agụ na Mahadum. Okwu mbụ ga-agba ọkpụrụkpụ, ụdị okwu (part of speech) ga-adị n'italics, yana iji usoro mbata n'ime (hanging indent).
* **Ụdị Mkpụrụedemede (Typography):** Akara font a ga-eji rụọ ọrụ a site na mbido ruo ngwụcha bụ **Noto Serif**. Nke a ga-ahụ na akara ụdaolu (tone marks) na ntụpọ okpuru (sub-dots) niile na-apụta nke ọma, n'usoro kwesịrị ekwesị, ma n'elu ntanetị ma na nbudata PDF.

## 4. Nchịkwa Ọdịnaya (Backend & CMS)
* **Sistemụ Nchịkwa (CMS):** A ga-ekepụta sistemụ nchịkwa ọdịnaya (CMS) pụrụ iche, ma ọ bụ jiri 'frameworks' ndị dị adị (dịka Django, Laravel, ma ọ bụ Strapi) kwadebe ya kpọmkwem maka ọrụ asụsụ.
* **Ọrụ CMS:** Ọ ga-enye ndị nchịkwa na ndị ọkammụta ohere dị mfe maka:
  * Ịgbakwunye mkpụrụokwu ọhụrụ ozugbo.
  * Ime ndelite na ndezi (editing/updating) okwu, nkọwa, na ahịrịokwu atụ n'ụzọ dị nchebe.

## 5. Ọganihu Ọrụ na Nhazi Dị Ugbu a (Implementation Milestones & Live Status)
* **Strapi CMS Backend:**
  * E wụnyere ma hazie Strapi 5 n'ime folda [backend](file:///c:/Users/chiza/Documents/Ife_ndï_özö/backend).
  * Emepụtara Content Type: `Dictionary Entry` (`api::entry.entry`) nwere njirimara dịka: `headword`, `simplified`, `partOfSpeech`, `phonetic`, `dialect`, `definitions` (JSON array nwere meanings na examples), `etymology`, `crossReferences`, na `notes`.
  * E debere usoro `bootstrap` na-enye ọha ikike ịgụ data (`GET /api/entries`) ozugbo.
  * E tinyechara mkpụrụokwu izizi (seeds) sitere na [formatting.pdf](file:///c:/Users/chiza/Documents/Ife_ndï_özö/formatting.pdf) na [mmīri ahà.docx](file:///c:/Users/chiza/Documents/Ife_ndï_özö/mmīri%20ahà.docx) (`mmàdụ̀`, `mmanyā`, `mmīri`, `mmụ̄ọ̄`, `mọtọ̀`, `akwụ̄kwọ`, `asụ̄sụ̀`).
  * **URL Server API:** `http://localhost:1337/api/entries`
  * **URL Admin Panel:** `http://localhost:1337/admin`

* **Ihu Weebụsaịtị (Frontend Web App):**
  * E wuru ya n'ime folda [frontend](file:///c:/Users/chiza/Documents/Ife_ndï_özö/frontend) nwere usoro agụmakwụkwọ kacha elu.
  * Ejiri **Noto Serif** na usoro kọlụm abụọ (two-column academic print sheet) na *hanging indent* dozie ya kpọmkwem dịka [formatting.pdf](file:///c:/Users/chiza/Documents/Ife_ndï_özö/formatting.pdf).
  * Nwere **Ahụigodo Ụdaolu (Virtual Keyboard)** maka ide akara ụdaolu (macrons, acutes, graves, sub-dots).
  * Nwere usoro ọchụchọ mara ihe (Tone-normalized real-time search: d.k. ịchọ 'moto' na-achọpụta 'mọtọ̀').
  * Nwere ngwa nbudata Word (**`.docx`**) na nbipụta PDF (**`.pdf`**).
  * **URL Frontend:** `http://localhost:3000/`

