# SEO Improvements

Prioritized list of actions to improve Google ranking for ekkeramik.dk.

## Already implemented

- Structured data (LocalBusiness JSON-LD)
- Open Graph meta tags
- Canonical URL
- Sitemap + robots.txt
- Descriptive alt texts on images
- sr-only H1 with keywords

---

## High priority

### 1. Register with Google Search Console
- Create account: https://search.google.com/search-console
- Verify ownership of ekkeramik.dk (DNS TXT record or HTML file)
- Submit sitemap: https://ekkeramik.dk/sitemap.xml
- Use it to see which queries drive traffic

### 2. Create a Google Business Profile
- Create profile: https://business.google.com
- Link to ekkeramik.dk
- Add photos, opening hours ("open by appointment"), categories (ceramicist, crafts)
- Critical for local searches ("keramik Fyn", "keramiker Assens")

### 3. Add more textual content
- Expand the about section with more about Eva's process, materials, philosophy
- Consider a blog/news section (Jekyll supports this natively):
  - Posts about exhibitions, new work, workshop experiences
  - Each post is a new indexable page for Google
- Use natural Danish keywords: "handlavet keramik Fyn", "keramikkursus Assens", "dansk kunsthandvaerk", "keramik vaerksted"

### 4. Improve page speed
- Add `loading="lazy"` to portfolio images (ek1-ek4)
- Add explicit `width`/`height` attributes to images (improves Core Web Vitals / CLS)
- Preload hero background image: `<link rel="preload" href="img/bg.jpg" as="image">`
- Preconnect to Google Fonts: `<link rel="preconnect" href="https://fonts.googleapis.com">`
- Consider whether all of Bootstrap 3 + jQuery + Font Awesome is needed, or if it can be replaced with lightweight CSS

---

## Medium priority

### 5. Technical on-page improvements
- Add `<meta name="robots" content="index, follow">` in head.html
- Add `<link rel="alternate" hreflang="da" href="https://ekkeramik.dk/">` (signals the language)
- Add `changefreq` and `lastmod` to sitemap.xml
- Consider adding Twitter Card meta tags

### 6. Get backlinks
- Get links from exhibition/market websites (Sanderumgaard, Clausholm, Langeso)
- Verninge Husflid should link back to ekkeramik.dk
- Register with Danish business directories: Krak, Eniro, De Gule Sider
- Register with craft directories: Dansk Kunsthandvaerk, Danish Crafts
- Contact local media/blogs about feature articles

### 7. Social media signals
- Post regularly on Instagram with links to the website
- Create/maintain a Facebook page linking to ekkeramik.dk
- Share blog posts (if created) on social media

---

## Low priority / nice-to-have

### 8. Additional structured data
- Add `Event` schema for upcoming markets/exhibitions
- Add `Course` schema for ceramic courses
- Add `Product` schema if individual products are shown

### 9. Image optimizations
- Use descriptive filenames (e.g. `handmade-ceramic-bowl.jpg` instead of `ek1.jpg`)
- Generate WebP versions of images for better compression
- Consider adding an image sitemap
