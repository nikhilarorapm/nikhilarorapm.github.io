# Nikhil Arora – portfolio site

A portfolio site in plain HTML and CSS: a home page plus five case-study pages. Nothing to install or build. Everything in this folder goes online as it is.

Web address: **https://nikhilarorapm.github.io/**

To review it on your computer, double-click `index.html`. Every link, PDF and page works offline.

## What's in the folder

| Path | What it is |
|---|---|
| `index.html` | The home page: summary of every project, education, skills, experience, contact |
| `case-studies/` | One page each for Porter, PhonePe, X, Zepto and Zomato, each with its own search title, description and preview card |
| `404.html` | The page people see if they open a link that doesn't exist |
| `robots.txt`, `sitemap.xml` | Tell Google what to crawl: the home page, the five case studies and the PDFs |
| `og-image.jpg` | The preview card for the home page when the link is shared |
| `favicon.*`, `apple-touch-icon.png`, `icon-*.png`, `site.webmanifest` | Browser tab and home-screen icons |
| `assets/css/site.css` | The styles every page shares |
| `assets/js/copy-email.js` | The "Copy email" button |
| `assets/fonts/`, `assets/img/` | Fonts, your photo, project images and one preview card per case study |
| `docs/` | The case-study PDFs, renamed and titled for search. PhonePe and the Porter supporting artifacts have personal names redacted |
| `prototype/porter/` | The Porter prototype, hosted on your own site (hidden from Google on purpose) |
| `.nojekyll` | Tells GitHub Pages to serve files as they are |

## Put it online with GitHub Pages (free)

Your GitHub username, `nikhilarorapm`, is already filled in everywhere it's needed.

1. **Create the repository.** On github.com click **+** (top right), then **New repository**. Name it exactly `nikhilarorapm.github.io`, keep it **Public**, leave "Add a README" unticked, and click **Create repository**. That exact name makes GitHub serve the site at the root address, which `robots.txt` and the 404 page rely on.
2. **Upload the files.** On the repository page click **uploading an existing file**. Open this `portfolio-site` folder, select everything inside it (Ctrl+A) and drag it onto the page. Drag the contents, not the folder itself, so `index.html` ends up at the top level. Wait until every file is listed, then click **Commit changes**.
3. **Check Pages is on.** Go to **Settings → Pages**. Under "Build and deployment", Source should be **Deploy from a branch**, with branch **main** and folder **/ (root)**. If not, set it and click **Save**.
4. **Open the site** at https://nikhilarorapm.github.io/ after a minute or two.

If `.nojekyll` doesn't show up in the upload, ignore it. The site works without it.

## Get it into Google

5. Open Google Search Console (search.google.com/search-console), click **Add property**, choose **URL prefix** and enter `https://nikhilarorapm.github.io/`.
6. Choose the **HTML file** verification method. Download the file Google gives you, upload it to your repository the same way as step 2, then click **Verify**.
7. In Search Console open **Sitemaps**, type `sitemap.xml` and click **Submit**. Then open **URL inspection** and request indexing for your home page and each case-study page.

Indexing usually takes a few days to a few weeks.

## Point LinkedIn and your resume here

8. On LinkedIn open your profile, then **Contact info → Website**, add `https://nikhilarorapm.github.io/` and pick "Portfolio". Add the home page and your Porter case study to your Featured section.
9. Paste the URL into LinkedIn's Post Inspector (linkedin.com/post-inspector) to check the preview card. Each case-study page has its own card, so you can share them one by one.
10. Put the URL in your resume header, and point the resume's "Live Demo" links at:
    - Porter: https://nikhilarorapm.github.io/prototype/porter/
    - PhonePe: https://nikhilarorapm.github.io/case-studies/phonepe-ux-audit.html

## Updating later

Edit the file on your computer, then upload it to the repository again with the same drag-and-drop. GitHub replaces files that have the same name. The change goes live in a minute or two. Styles for every page live in `assets/css/site.css`, so a change there applies everywhere.

If you ever change your GitHub username, the web address changes with it and old links stop working. Every page, `sitemap.xml` and `robots.txt` would then need the new address.
