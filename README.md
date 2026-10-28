# Phoebien D. Cañete Portfolio

A responsive portfolio of embedded systems, edge AI and AIoT, IoT research, and software projects by Phoebien D. Cañete, a BS Computer Applications student majoring in Embedded Systems at MSU-IIT.

[GitHub](https://github.com/msyennna) · [LinkedIn](https://www.linkedin.com/in/phoebiencanete/) · [Hackster](https://www.hackster.io/phoebiencanete) · [Email](mailto:phoebiend@gmail.com)

The portfolio includes nine projects, an EUSPN 2026 peer-reviewed conference paper with full author credit, education, work experience, eight leadership and activity entries, honors, training, spoken languages, and a downloadable CV. The latest update follows the supplied `Canete_CV(3).docx`.

## Update MyAcademicPortfolio

Target repository: `msyennna/MyAcademicPortfolio`.

1. Extract this ZIP and open the `phoebien-github-portfolio` folder.
2. Open your existing GitHub repository and choose **Add file → Upload files**.
3. Drag the **dist folder** onto the upload page. It must appear as `dist/index.html` and `dist/assets/...` in the repository. This updates the portfolio and its downloadable CV.
4. Commit the upload to `main`.
5. If this repository is connected to your Vercel project, the commit should start a new deployment. Check **Vercel → your project → Deployments** for its result.

For this content update, only the website files under `dist/` need replacing. Keep your other repository files and hosting settings. Upload the extracted folder contents, not the ZIP as a single repository file.

If you are setting up the repository from scratch, upload all extracted contents so `package.json`, `vercel.json`, `scripts`, `dist`, and `README.md` are at the repository root, without an extra wrapper directory.

## Vercel settings

The included `vercel.json` declares:

| Setting | Value |
| --- | --- |
| Framework preset | Other |
| Root directory | Folder containing `package.json` and `vercel.json` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Environment variables | None required |

Vercel assigns the live URL after a successful deployment. GitHub Pages is optional when Vercel hosts the site.

## Local preview

With Node.js 20 or later installed, run:

```sh
npm run build
npm run dev
```

Open `http://localhost:3000`. No dependencies or API keys are required. The build command validates JavaScript syntax, asset files, and navigation anchors. `dist/` is the complete editable static website.

## Editing guide

| File | Content |
| --- | --- |
| `dist/index.html` | Introduction, education, paper, awards, training, languages, contact links, and metadata |
| `dist/assets/content.js` | Projects, project links, tools, experience, and leadership |
| `dist/assets/app.js` | Illustrations, filters, dialogs, themes, and interactions |
| `dist/assets/styles.css` | Colors, typography, layouts, and responsive styles |
| `dist/assets/phoebien.webp` | Portrait |
| `dist/assets/phoebien-canete-cv.docx` | Latest CV, copied without modification |

The aphid damage detection research is ongoing. Shared work describes individual contributions. The conference paper lists all authors, the conference, its location, and dates. Project illustrations are labeled as concepts rather than screenshots. The contact link opens the visitor's mail application; the site does not send or store messages.

## Optional GitHub Pages

The package retains `.github/workflows/deploy-pages.yml` for GitHub Pages hosting. It deploys `dist/`. Enable **Settings → Pages → Source → GitHub Actions**, then run **Actions → Deploy portfolio to GitHub Pages → Run workflow**. This is separate from Vercel hosting.

For this repository, the expected GitHub Pages address would be `https://msyennna.github.io/MyAcademicPortfolio/` after a successful Pages deployment. All asset paths are relative, so the site also works under that repository path.

## Hosting references

- [Vercel GitHub integration](https://vercel.com/docs/git/vercel-for-github)
- [Vercel configuration](https://vercel.com/docs/project-configuration/vercel-json)
- [GitHub Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
