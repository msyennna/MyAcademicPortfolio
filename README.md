# Phoebien D. Cañete Portfolio

A simple, text-only academic portfolio with an introduction, background, nine projects, a conference paper, contact links, and a downloadable CV. Longer education, experience, training, and leadership information appears in expandable sections.

The page uses HTML and CSS. Content and expandable sections work without JavaScript. There are no photos, project illustrations, pop-ups, filters, or external font dependencies.

## Update an existing repository

1. Extract this ZIP.
2. Upload its contents into your portfolio repository. Keep `package.json`, `vercel.json`, `src`, `scripts`, and `dist` at the repository root.
3. Commit the changes. If the repository is connected to Vercel, its usual deployment will run.

To update only an already-built website, replace its complete `dist` folder with the one included here. Upload the extracted files, rather than uploading the ZIP as a single file.

## Vercel settings

| Setting | Value |
| --- | --- |
| Framework preset | Other |
| Build command | `npm run build` |
| Output directory | `dist` |
| Root directory | Folder containing `package.json` |
| Environment variables | None |

The included `vercel.json` preserves these build settings. Asset paths are relative, so the output also works under a GitHub Pages repository path.

## Edit and preview

With Node.js 20 or later:

```sh
npm run build
npm run dev
```

The preview normally opens at `http://localhost:3000`. No dependency installation is needed.

| File | What to edit |
| --- | --- |
| `src/index.html` | Introduction, education, research paper, recognition, training, and contact details |
| `src/content.json` | Projects, tools, work experience, and leadership |
| `src/styles.css` | Colors, typography, spacing, and responsive styles |
| `dist/assets/phoebien-canete-cv.docx` | Downloadable CV |

Run `npm run build` after editing. It generates `dist/index.html`, copies the stylesheet, and checks local assets, navigation targets, duplicate IDs, and text-only output.

Descriptions and individual roles come from the supplied portfolio. Aphid research remains labeled ongoing; simulations and prototypes keep their stated status. The conference paper retains its full title, all five authors, conference name, location, and dates. The original CV is included without modification.
