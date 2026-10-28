import { readFile, writeFile, copyFile, stat } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const content = JSON.parse(await readFile(resolve(root, 'src/content.json'), 'utf8'));
const escape = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[character]));
const project = item => `<article class="project" id="${escape(item.id)}">
  <p class="meta">${escape(item.status)}</p>
  <h3>${escape(item.title)}</h3>
  <p>${escape(item.description)}</p>
  <p class="project-role">My role: ${escape(item.role)}</p>
  <p class="project-tools">Tools: ${item.tags.map(escape).join(', ')}</p>
  <p class="project-links">${item.links.map(link => `<a href="${escape(link.url)}">${escape(link.label)}</a>`).join('')}</p>
</article>`;
const entry = item => `<article class="entry">
  <p class="meta">${escape(item.date)}</p>
  <h4>${escape(item.title)}</h4>
  <p>${escape(item.org)}</p>
  ${item.text ? `<p class="muted">${escape(item.text)}</p>` : ''}
</article>`;
let html = await readFile(resolve(root, 'src/index.html'), 'utf8');
const replacements = {
  FEATURED_PROJECTS: content.projects.slice(0, 3).map(project).join('\n'),
  MORE_PROJECTS: content.projects.slice(3).map(project).join('\n'),
  EXPERIENCE: content.experience.map(entry).join('\n'),
  LEADERSHIP: content.leadership.map(entry).join('\n'),
  TOOLKIT: content.toolkit.map(item => `<p class="tool-entry"><strong>${escape(item.title)}:</strong> ${item.tools.map(escape).join(', ')}.</p>`).join('\n')
};
for (const [key, value] of Object.entries(replacements)) {
  const marker = `<!-- ${key} -->`;
  if (!html.includes(marker)) throw new Error(`Missing template marker: ${key}`);
  html = html.replace(marker, value);
}
await writeFile(resolve(root, 'dist/index.html'), html);
await copyFile(resolve(root, 'src/styles.css'), resolve(root, 'dist/assets/styles.css'));

// Validate generated output and local links before deployment.
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
if (new Set(ids).size !== ids.length) throw new Error('Duplicate HTML id');
for (const [, id] of html.matchAll(/\bhref="#([^"]+)"/g)) {
  if (!ids.includes(id)) throw new Error(`Missing anchor target: ${id}`);
}
for (const [, file] of html.matchAll(/(?:src|href)="(assets\/[^"#?]+)"/g)) {
  const info = await stat(resolve(root, 'dist', file));
  if (!info.size) throw new Error(`Empty asset: ${file}`);
}
if (/<(?:img|svg|canvas|video|dialog)\b/i.test(html)) throw new Error('The portfolio must remain text-only');
console.log(`Portfolio built and validated: ${content.projects.length} projects, ${content.experience.length} experience entries, ${content.leadership.length} leadership entries. No browser JavaScript required.`);
