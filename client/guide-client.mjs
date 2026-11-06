export function createStarterPrompt(entry,rawHost,rawToken){
 const raw=String(rawHost||'').trim().replace(/^https?:\/\//i,'').replace(/^dav-/i,'').replace(/\/$/,''),host=/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.onpagelove\.com$/i.test(raw)?raw.toLowerCase():'[SITE_HOSTNAME]',token=String(rawToken||'').trim()||'[API_TOKEN]';
 return `Help me create ${entry.name==='Blank'?'an app from a blank start':'a '+entry.name} on my Pagelove site.

- Starting code: ${entry.repositoryURL||'No template — help me agree on a useful first version.'}
- Site: ${host}
- Upload address: ${host.startsWith('[')?'[UPLOAD_ADDRESS]':'https://dav-'+host+'/'}
- Private API token: ${JSON.stringify(token)}
- Personalize: ${entry.personalize?'Yes':'No'}
- Build guide: ${entry.manifestURL}
- Downloadable instructions: ${entry.bundleURL}

First, test whether you can read and edit files, run build tools, open the code and guide, inspect a preview, and connect to my site. Start each check as ○ Not tested; show ✅ Working only after a real test, ❌ Unavailable/failed or ○ Waiting, with a short reason. Use harmless checks; never upload/delete as a connection test or send placeholder/demo credentials. Missing publishing access need not stop local work.

Read the guide's required files for ${entry.name}, release ${entry.release}, Personalize ${entry.personalize?'on':'off'}, before building. Follow its design, document-first, testing and publishing instructions. If a required file is missing or cannot be opened, give me the download link so I can attach the matching instructions; do not guess. If this chat lacks tools, show short written and visual directions to the right place in my AI app. Use its current official guide, or the catch-all for other apps; rerun checks after setup.

${entry.personalize?'Use only relevant facts you reliably know. My explicit preferences override template defaults; confirm the audience before publishing private information.':'Do not use personal history or memories. Label fictional examples clearly.'}

Keep me updated: Get ready → Plan → Build → Test → Publish → Check live. Continue without acknowledgement clicks, except when information or permission is genuinely needed. Do not invent progress or test results.

Protect existing content and saved data. Keep my token private; send it only to the exact upload address, never redirects, published files, logs or shared links. Upload access does not prove private app permissions work.

Finish with the verified live-site link, completed checks, anything unfinished, and my dashboard link: https://console.pagelove.com/console/ . Include my site address so I know which site to select.
`;
}
function validPath(p){return typeof p==='string'&&/^[a-zA-Z0-9][a-zA-Z0-9._/-]*$/.test(p)&&!p.split('/').some(s=>['..','.',''].includes(s));}
const hash=async b=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',b))).map(n=>n.toString(16).padStart(2,'0')).join('');
export async function verifyGuide(entry,{fetcher=fetch,cache=new Map()}={}){
 const expected=new URL(entry.manifestURL),prefix=expected.href.slice(0,expected.href.indexOf('/manifests/'))+'/';
 if(expected.origin!=='https://raw.githubusercontent.com'||!/^\/pagelove\/onboarding-build-guides\/[a-f0-9]{40}\/releases\/[0-9]{4}-[0-9]{2}-[0-9]{2}\.[0-9]+\/manifests\/[a-z0-9-]+\.json$/.test(expected.pathname))throw Error('Unrecognized guide address.');
 async function read(url,wanted,max=400000){const key=url+'#'+wanted;if(!cache.has(key))cache.set(key,(async()=>{const r=await fetcher(url,{credentials:'omit',redirect:'error',cache:'force-cache',signal:AbortSignal.timeout(15000)});if(!r.ok)throw Error('A required instruction file could not be opened.');const b=await r.arrayBuffer();if(b.byteLength>max)throw Error('Instruction file is too large.');if(await hash(b)!==wanted)throw Error('Instruction file does not match this release.');return b;})());try{return await cache.get(key);}catch(e){cache.delete(key);throw e;}}
 const bytes=await read(expected.href,entry.manifestSha256,40000);let m;try{m=JSON.parse(new TextDecoder().decode(bytes));}catch{throw Error('Build guide could not be read.');}
 if(m.schemaVersion!==1||m.release!==entry.release||m.item!==entry.name||m.itemKey!==entry.key||m.personalize!==entry.personalize||m.base!=='../'||!Array.isArray(m.required)||m.required.length<8||m.required.length>30)throw Error('Build guide does not match this selection.');
 const seen=new Set();for(const f of m.required){if(!validPath(f.path)||seen.has(f.path)||!Number.isInteger(f.bytes)||f.bytes<1||f.bytes>400000||!/^[a-f0-9]{64}$/.test(f.sha256))throw Error('Build guide contains an invalid file entry.');seen.add(f.path);}
 for(const required of['START.md','shared/readiness.md','shared/progress.md','shared/document-first.md','reference/document-first-development-2.4.md','shared/deployment.md','shared/verification.md','shared/handoff.md','apps/'+entry.key+'.md','shared/personalization-'+(entry.personalize?'on':'off')+'.md'])if(!seen.has(required))throw Error('Build guide is incomplete.');
 for(let i=0;i<m.required.length;i+=4)await Promise.all(m.required.slice(i,i+4).map(async f=>{const url=new URL(f.path,prefix).href;if(!url.startsWith(prefix))throw Error('Guide file escaped this release.');const b=await read(url,f.sha256);if(b.byteLength!==f.bytes)throw Error('Instruction file is incomplete.');}));
 return{release:m.release,item:m.item,personalize:m.personalize,files:m.required.length,verified:true};
}
