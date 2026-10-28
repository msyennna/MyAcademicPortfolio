# Phoebien D. Cañete Portfolio

A personal portfolio featuring my embedded systems projects, edge AI and IoT research, desktop applications, education, experience, and student leadership at MSU-IIT.

Built with HTML, CSS, and JavaScript. Includes project filters and detail views, responsive layouts, light and dark themes, a downloadable CV, and contact links. All website assets are included locally.

[GitHub](https://github.com/msyennna) · [LinkedIn](https://www.linkedin.com/in/phoebiencanete/) · [Hackster](https://www.hackster.io/phoebiencanete) · [Email](mailto:phoebiend@gmail.com)

## Publish with GitHub Pages

The GitHub username used in the supplied CV is `msyennna`. For a personal site, name the repository **`msyennna.github.io`**. If you are using a different account, replace `msyennna` with that account's username.

1. Create a public GitHub repository named `msyennna.github.io`, with `main` as its default branch. Add a README when creating it so the branch exists.
2. Extract this ZIP on your computer. Open the extracted `phoebien-github-portfolio` folder.
3. In the repository, choose **Add file → Upload files**. Drag all the files and folders from INSIDE `phoebien-github-portfolio` onto the upload page, including the `.github` folder. Commit the upload to `main`. Replace the starter README with the README in this package.
4. Open **Settings → Pages**. Under **Build and deployment → Source**, select **GitHub Actions**. The workflow is already included, so skip choosing or creating another workflow.
5. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow**. Choose `main`, then run it. The initial upload can trigger a failed run if Pages was not enabled yet; run it again after step 4.
6. After the workflow succeeds, the deployment link appears in the workflow summary and **Settings → Pages**. For the repository name above, the expected address is `https://msyennna.github.io/`.

The workflow deploys only `dist/`. Repository documentation and local development scripts are not part of the published site. Future commits to `main` automatically publish updates.

**Upload the extracted contents, not the ZIP itself.** Your repository should contain `.github`, `dist`, `scripts`, `README.md`, `package.json`, and `vercel.json` at the top level. Do not put the entire `phoebien-github-portfolio` wrapper folder inside the repository.

You can also use a repository named `portfolio` instead of a user-site repository. Its expected address would be `https://msyennna.github.io/portfolio/`. Website assets use relative paths, so both address formats work.

## Deploy the same repository to Vercel

Import this GitHub repository into Vercel as a new project. The included `vercel.json` sets:

| Setting | Value |
| --- | --- |
| Framework preset | Other |
| Root directory | Repository root |
| Build command | `npm run build` |
| Output directory | `dist` |

No environment variables or API keys are required. Vercel assigns a deployment URL after a successful deployment. Hosting with Vercel does not require enabling GitHub Pages.

## Run locally

With Node.js 20 or later installed, run these commands from the repository folder:

```sh
npm run build
npm run dev
```

Open `http://localhost:3000`. There are no dependencies to install. The build command checks JavaScript syntax, asset files, and navigation anchors; `dist/` is already the complete editable website.

## Update the portfolio

| File | What to edit |
| --- | --- |
| `dist/assets/content.js` | Projects, project links, tools, experience, and leadership |
| `dist/index.html` | Introduction, education, awards, training, contact details, and page metadata |
| `dist/assets/styles.css` | Colors, typography, and layout |
| `dist/assets/phoebien.webp` | Portrait |
| `dist/assets/phoebien-canete-cv.docx` | Downloadable CV |
| `.github/workflows/deploy-pages.yml` | GitHub Pages deployment workflow |
| `vercel.json` | Vercel deployment settings |

Commit your changes to `main` to update the published GitHub Pages site. If you change the default branch name, update the `branches` value in the deployment workflow.

The aphid damage detection research is ongoing. Shared projects describe my individual contributions. Project artwork is labeled as a concept illustration, not a screenshot. The portrait comes from my linked research page, and the CV is the supplied document. The contact link opens the visitor's mail app; this static site does not send or store messages.

## Hosting references

- [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart)
- [Configure the publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Use a custom GitHub Pages workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Vercel configuration](https://vercel.com/docs/project-configuration/vercel-json)
