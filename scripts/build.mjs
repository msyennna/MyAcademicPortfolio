import { readFile, stat } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const required=['dist/index.html','dist/assets/styles.css','dist/assets/content.js','dist/assets/app.js','dist/assets/phoebien.webp','dist/assets/phoebien-canete-cv.docx','dist/assets/favicon.svg'];
for(const path of required){const info=await stat(resolve(root,path));if(!info.size)throw new Error(`Empty file: ${path}`);}
for(const path of ['dist/assets/content.js','dist/assets/app.js'])execFileSync(process.execPath,['--check',resolve(root,path)],{stdio:'inherit'});
const html=await readFile(resolve(root,'dist/index.html'),'utf8');
const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]));
for(const [,id] of html.matchAll(/\bhref="#([^"]+)"/g))if(!ids.has(id))throw new Error(`Missing anchor target: ${id}`);
for(const [,file] of html.matchAll(/(?:src|href)="(assets\/[^"]+)"/g))await stat(resolve(root,'dist',file));
console.log('Portfolio validated. Static output is ready in dist/.');
