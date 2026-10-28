import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {resolve,extname,sep} from 'node:path';

const root=fileURLToPath(new URL('../dist/',import.meta.url));
const portIndex=process.argv.indexOf('--port');
const port=Number(portIndex>=0?process.argv[portIndex+1]:(process.env.PORT||3000));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.docx':'application/vnd.openxmlformats-officedocument.wordprocessingml.document'};
createServer(async(req,res)=>{
  try{
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    let path=resolve(root,'.'+pathname);
    if(path!==root.slice(0,-1)&&!path.startsWith(root.endsWith(sep)?root:root+sep)){res.writeHead(403).end('Forbidden');return;}
    if((await stat(path)).isDirectory())path=resolve(path,'index.html');
    const body=await readFile(path);
    res.writeHead(200,{'Content-Type':types[extname(path)]||'application/octet-stream','X-Content-Type-Options':'nosniff'});
    if(req.method==='HEAD')res.end();else res.end(body);
  }catch{res.writeHead(404,{'Content-Type':'text/plain'}).end('Page not found');}
}).listen(port,'0.0.0.0',()=>console.log(`Portfolio ready at http://localhost:${port}`));
