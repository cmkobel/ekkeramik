# SEO Forbedringer / SEO Improvements

Prioriteret liste over tiltag for at forbedre Google-placeringen af ekkeramik.dk.

## Allerede implementeret

- Structured data (LocalBusiness JSON-LD)
- Open Graph meta tags
- Canonical URL
- Sitemap + robots.txt
- Beskrivende alt-tekster på billeder
- sr-only H1 med keywords

---

## Hoj prioritet

### 1. Google Search Console
- Opret konto: https://search.google.com/search-console
- Verificer ejerskab af ekkeramik.dk (DNS TXT-record eller HTML-fil)
- Indsend sitemap: https://ekkeramik.dk/sitemap.xml
- Brug til at se hvilke sogeord der driver trafik

### 2. Google Business Profile
- Opret profil: https://business.google.com
- Tilknyt ekkeramik.dk
- Tilf billeder, abningstider ("abent efter aftale"), kategorier (keramiker, kunsthandvaerk)
- Kritisk for lokale sogninger ("keramik Fyn", "keramiker Assens")

### 3. Mere tekstindhold
- Udvid om-sektionen med mere om Evas proces, materialer, filosofi
- Overvej en blog/nyheds-sektion (Jekyll understotter dette nativt):
  - Indlaeg om udstillinger, nyt vaerk, vaerksted-oplevelser
  - Hvert indlaeg er en ny side Google kan indeksere
- Brug naturlige danske sogeord: "handlavet keramik Fyn", "keramikkursus Assens", "dansk kunsthandvaerk", "keramik vaerksted"

### 4. Forbedre sidehastighed
- Tilf `loading="lazy"` til portfolio-billeder (ek1-ek4)
- Tilf eksplicitte `width`/`height`-attributter til billeder (forbedrer Core Web Vitals / CLS)
- Preload hero-baggrundsbilledet: `<link rel="preload" href="img/bg.jpg" as="image">`
- Preconnect til Google Fonts: `<link rel="preconnect" href="https://fonts.googleapis.com">`
- Overvej om alt Bootstrap 3 + jQuery + Font Awesome er nodvendigt, eller om det kan erstattes med letvagts-CSS

---

## Middel prioritet

### 5. Tekniske on-page forbedringer
- Tilf `<meta name="robots" content="index, follow">` i head.html
- Tilf `<link rel="alternate" hreflang="da" href="https://ekkeramik.dk/">` (signalerer sproget)
- Tilf `changefreq` og `lastmod` til sitemap.xml
- Overvej at tilf Twitter Card meta tags

### 6. Backlinks
- Fa links fra udstillings-/markedshjemmesider (Sanderumgaard, Clausholm, Langeso)
- Verninge Husflid bor linke tilbage til ekkeramik.dk
- Tilmeld til danske erhvervs-kataloger: Krak, Eniro, De Gule Sider
- Tilmeld til kunsthandvaerks-kataloger: Dansk Kunsthandvaerk, Danish Crafts
- Kontakt lokale medier/blogs om feature-artikler

### 7. Sociale medier
- Post regelmaessigt pa Instagram med link til hjemmesiden
- Opret/vedligehold en Facebook-side der linker til ekkeramik.dk
- Del blogindlaeg (hvis oprettet) pa sociale medier

---

## Lav prioritet / nice-to-have

### 8. Yderligere strukturerede data
- Tilf `Event` schema for kommende markeder/udstillinger
- Tilf `Course` schema for keramikkurser
- Tilf `Product` schema hvis enkeltprodukter vises

### 9. Billeder
- Tilf beskrivende filnavne (fx `handlavet-keramik-skal.jpg` i stedet for `ek1.jpg`)
- Generer WebP-versioner af billeder for bedre komprimering
- Overvej at tilf en image sitemap
