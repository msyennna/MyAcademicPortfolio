(() => {
  'use strict';
  const data = window.portfolio;
  const total = String(data.projects.length).padStart(2,'0');
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const escape = (value) => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const svg = (content) => `<svg class="visual-svg" viewBox="0 0 400 235" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke-linecap="round" stroke-linejoin="round">${content}</g></svg>`;
  const text = (x,y,label,size=9,color='#47634d') => `<text x="${x}" y="${y}" fill="${color}" stroke="none" font-family="monospace" font-size="${size}" letter-spacing="1">${label}</text>`;
  const visuals = {
    plant: svg(`<circle cx="194" cy="115" r="85" stroke="#b9caaa" stroke-width=".7"/><circle cx="194" cy="115" r="66" stroke="#b9caaa" stroke-width=".7" stroke-dasharray="2 5"/><path d="M194 183V64m0 78c-29-2-52-23-48-47 27 0 47 20 48 47Zm0-28c29 0 50-20 46-44-27 1-46 20-46 44Zm0 47c27-1 42-15 43-34-23-1-40 15-43 34Z" stroke="#56714c" stroke-width="2" fill="#b4c799"/><path d="m151 100 43 42m42-67-42 39m37 18-37 29" stroke="#708b5f" stroke-width="1"/><path d="M194 80c-19-6-26-20-18-31 15 4 22 16 18 31Z" fill="#74925e" stroke="#56714c" stroke-width="1.5"/><rect x="125" y="69" width="131" height="106" rx="3" stroke="#608456" stroke-width=".8" stroke-dasharray="4 4"/><path d="M125 87V69h18m95 0h18v18m0 70v18h-18m-95 0h-18v-18" stroke="#56714c" stroke-width="2"/><path d="M256 104h46V63" stroke="#8ba478" stroke-width="1"/><circle cx="302" cy="63" r="3" fill="#6d8a58" stroke="none"/><rect x="271" y="34" width="86" height="25" rx="4" fill="#f6f8f0" stroke="#b7c8a8"/>${text(282,50,'YOLOv8n',9)}<path d="M125 151H79v26" stroke="#8ba478" stroke-width="1"/><rect x="35" y="177" width="110" height="25" rx="4" fill="#f6f8f0" stroke="#b7c8a8"/>${text(46,193,'RASPBERRY Pi 5',8)}${text(143,219,'CAPTURE → DETECT → VIEW',7)}`),
    wave: svg(`<rect x="51" y="35" width="298" height="156" rx="7" fill="#f4f7ee" stroke="#bacbb1"/><path d="M68 71h262M68 100h262M68 129h262M68 158h262M103 61v113m47-113v113m47-113v113m47-113v113m47-113v113" stroke="#dfe6d7" stroke-width=".6"/>${text(67,53,'SIX-AXIS MOTION / RT-SPARK',7)}<path d="m69 105 11-4 8 12 10-37 10 53 10-34 11 12 9-1 10 6 10-42 10 61 9-29 11 5 10-8 11 20 11-48 10 50 10-25 11 9 11-4 11 13 10-41 10 50 9-28 11 9 11-3 10 7" stroke="#6c8957" stroke-width="1.7"/><path d="m69 141 11 2 8-9 10 7 10-16 10 22 11-6 9 3 10-5 10 4 10-11 9 15 11-6 10 4 11-9 11 7 10-14 10 20 11-7 11 4 11-6 10 2 10-11 9 19 11-8 11 4 10-1" stroke="#ad9775" stroke-width="1.4"/><circle cx="73" cy="176" r="2" fill="#6c8957" stroke="none"/>${text(81,179,'ACCELEROMETER',6)}<circle cx="207" cy="176" r="2" fill="#ad9775" stroke="none"/>${text(215,179,'GYROSCOPE',6)}`),
    monitor: svg(`<path d="M60 83h58m-58 36h58m-58 36h58m164-72h58m-58 36h58m-58 36h58" stroke="#aabb99" stroke-width="1.5"/><g stroke="#78936b" stroke-width="1">${Array.from({length:8},(_,i)=>`<path d="M${135+i*18} 44v17m0 108v17"/>`).join('')}</g><rect x="119" y="59" width="162" height="111" rx="8" fill="#58754b" stroke="#375439"/><rect x="136" y="75" width="128" height="79" rx="4" fill="#243c2e" stroke="#81936f"/>${text(148,94,'FreeRTOS',8,'#d5e5b9')}${text(148,116,'5 TASKS',13,'#e2efd0')}${text(148,137,'SENSE · DISPLAY · ALARM',5,'#b4c997')}<circle cx="58" cy="83" r="4" fill="#c9d8b4" stroke="#87a375"/><circle cx="58" cy="119" r="4" fill="#c9d8b4" stroke="#87a375"/><circle cx="58" cy="155" r="4" fill="#c9d8b4" stroke="#87a375"/><circle cx="342" cy="83" r="4" fill="#c9d8b4" stroke="#87a375"/><circle cx="342" cy="119" r="4" fill="#c9d8b4" stroke="#87a375"/><circle cx="342" cy="155" r="4" fill="#c9d8b4" stroke="#87a375"/>${text(157,207,'STM32 BLUE PILL',8)}`),
    inventory: svg(`<rect x="61" y="31" width="278" height="168" rx="7" fill="#fafbf5" stroke="#c1cbb6"/><path d="M61 54h278M111 54v145" stroke="#d9e0d0"/><circle cx="74" cy="43" r="2" fill="#8c9e7b" stroke="none"/><circle cx="82" cy="43" r="2" fill="#c1cbb6" stroke="none"/><circle cx="90" cy="43" r="2" fill="#dce2d2" stroke="none"/>${text(125,74,'WAREHOUSE ZONES',7)}<rect x="71" y="68" width="30" height="6" rx="2" fill="#d1dcc5" stroke="none"/><rect x="71" y="88" width="25" height="4" rx="1" fill="#e4e9db" stroke="none"/><rect x="71" y="104" width="21" height="4" rx="1" fill="#e4e9db" stroke="none"/><rect x="71" y="120" width="27" height="4" rx="1" fill="#e4e9db" stroke="none"/>${Array.from({length:12},(_,i)=>{const x=125+(i%4)*49,y=85+Math.floor(i/4)*29;return `<rect x="${x}" y="${y}" width="41" height="22" rx="3" fill="${i%3===0?'#e0e9d5':'#f0f3e9'}" stroke="#cbd7be"/>${text(x+12,y+14,String(i+1).padStart(2,'0'),7)}`;}).join('')}${text(125,186,'12 AREAS · MANUAL UPDATES',6)}`),
    water: svg(`<path d="M66 116h72V67h48v97h64v-48h84" stroke="#b9d0c9" stroke-width="21"/><path d="M66 116h72V67h48v97h64v-48h84" stroke="#7faaa0" stroke-width="1.5" stroke-dasharray="3 6"/><path d="m88 112 6 4-6 4m184-8 6 4-6 4m33-8 6 4-6 4" stroke="#658e82" stroke-width="1.5"/><circle cx="162" cy="67" r="22" fill="#e7efdf" stroke="#819e75"/><path d="m153 65 6-7 9 5-3 10-10-1-2-7Z" fill="#bdcfad" stroke="#78946c"/><rect x="165" y="151" width="72" height="42" rx="4" fill="#6c8c71" stroke="#517058"/><rect x="175" y="160" width="24" height="22" rx="2" fill="#37553f" stroke="none"/><path d="M205 164h20m-20 7h12m-12 7h20" stroke="#c8d8bb"/>${text(123,219,'SENSOR PULSES → FLOW ESTIMATE',7)}`),
    oven: svg(`<rect x="99" y="41" width="157" height="153" rx="7" fill="#e2e6d5" stroke="#8f9e7c"/><rect x="112" y="62" width="130" height="101" rx="4" fill="#f3f2e6" stroke="#a7b493"/><path d="M124 143h104m-104-61h104" stroke="#c4c8a9"/><path d="M146 131c-11-12 12-16 0-30m29 30c-11-12 12-16 0-30m29 30c-11-12 12-16 0-30" stroke="#b99b71" stroke-width="2"/><circle cx="143" cy="180" r="3" fill="#94aa77" stroke="none"/><path d="M163 180h57" stroke="#8b9e75" stroke-width="2"/><rect x="275" y="68" width="49" height="89" rx="5" fill="#f6f7ed" stroke="#b7c4a7"/>${text(284,86,'HMI',8)}<path d="M284 99h31m-31 11h20" stroke="#a5b98f"/><rect x="290" y="130" width="15" height="12" rx="2" fill="#d1dfc1" stroke="#8fa278"/><path d="M293 130v-4a4.5 4.5 0 0 1 9 0v4M256 109h19" stroke="#8fa278"/>${text(116,217,'TEMPERATURE · INTERLOCKS · SAFETY',6)}`),
    coin: svg(`<rect x="79" y="70" width="243" height="111" rx="11" fill="#dbe5cd" stroke="#9eb68c"/><path d="M104 93h44v30h64m-97 38v-20h83m25-48h66v57h-34m-99 12h55v-17h35" stroke="#9cb48a" stroke-width="1.5"/><g fill="#b0c69b" stroke="none"><circle cx="104" cy="93" r="3"/><circle cx="115" cy="161" r="3"/><circle cx="289" cy="150" r="3"/></g><rect x="167" y="99" width="61" height="32" rx="3" fill="#425d3f" stroke="#2c462f"/><path d="M177 92v7m12-7v7m12-7v7m12-7v7m-36 32v7m12-7v7m12-7v7m12-7v7" stroke="#8b9b76"/><circle cx="125" cy="121" r="9" fill="#c7b887" stroke="#ac9868"/><circle cx="267" cy="121" r="9" fill="#aec594" stroke="#809b67"/><circle cx="199" cy="49" r="26" fill="#f0e4c9" stroke="#bba574"/><circle cx="199" cy="49" r="20" stroke="#c7b384"/>${text(190,56,'?',21,'#9b8559')}${text(142,211,'TOUCH → CIRCUIT → OUTCOME',7)}`)
  };
  const illustration = (project,index,modal=false) => `<div class="project-visual ${modal?'dialog-visual':''}">${visuals[project.visual] || visuals.monitor}<span class="visual-caption">Concept illustration</span>${modal?'':`<span class="project-number">${String(index+1).padStart(2,'0')} / ${total}</span>`}</div>`;
  const tags = (values) => `<div class="project-tags">${values.map(tag=>`<span class="project-tag">${escape(tag)}</span>`).join('')}</div>`;
  function renderProjects(filter='all') {
    const selected = data.projects.filter(project => filter === 'all' || project.category === filter);
    $('#project-grid').innerHTML = selected.map(project => {
      const index = data.projects.indexOf(project);
      return `<article class="project-card ${project.featured?'featured':''}"><button class="project-open" type="button" data-project="${project.id}" aria-label="View ${escape(project.title)} project details">${illustration(project,index)}<div class="project-content">${project.featured?`<span class="status-pill">${escape(project.status)}</span>`:''}<p class="project-kind">${escape(project.kind)}</p><h3>${escape(project.title)}</h3>${project.featured?`<p class="project-subtitle">${escape(project.subtitle)}</p>`:''}<p class="project-description">${escape(project.description)}</p>${tags(project.tags)}<div class="project-bottom"><span>${project.featured?'Explore the research':'View project'}${project.status==='Simulated prototype'?' · Simulation':''}</span>${icon('up-right')}</div></div></button></article>`;
    }).join('');
    $('#project-count').textContent = `${String(selected.length).padStart(2,'0')} PROJECT${selected.length===1?'':'S'}`;
  }
  $('.filter[data-filter=all] span').textContent=total;
  renderProjects();
  $$('.filter').forEach(button => button.addEventListener('click', () => {
    $$('.filter').forEach(other => {other.classList.toggle('active',other===button); other.setAttribute('aria-pressed',String(other===button));});
    renderProjects(button.dataset.filter);
  }));
  const dialog = $('#project-dialog');
  let projectTrigger;
  $('#project-grid').addEventListener('click',event => {
    const button = event.target.closest('[data-project]');
    if (!button) return;
    const project = data.projects.find(item=>item.id===button.dataset.project);
    if (!project) return;
    projectTrigger = button;
    $('#dialog-body').innerHTML = `${illustration(project,0,true)}<div class="dialog-content"><span class="status-pill">${escape(project.status)}</span><h2 id="dialog-title">${escape(project.title)}</h2><p class="dialog-role">${escape(project.role)}</p><p class="dialog-overview">${escape(project.overview)}</p><h3>My contribution</h3><ul class="contribution-list">${project.contributions.map(item=>`<li>${escape(item)}</li>`).join('')}</ul>${tags(project.tags)}<div class="dialog-links">${project.links.map((link,index)=>`<a class="${index?'text-link':'button primary'}" href="${escape(link.url)}" target="_blank" rel="noopener noreferrer">${escape(link.label)} ${icon('up-right')}</a>`).join('')}</div></div>`;
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
  $('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event => {
    if(event.target !== dialog) return;
    const rect=dialog.getBoundingClientRect();
    if(event.clientX<rect.left || event.clientX>rect.right || event.clientY<rect.top || event.clientY>rect.bottom) dialog.close();
  });
  dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open'); if(projectTrigger?.isConnected) projectTrigger.focus({preventScroll:true});});

  $('#toolkit-grid').innerHTML=data.toolkit.map(item=>`<article class="toolkit-item"><div class="toolkit-top">${icon(item.icon)}<span class="mono">${item.index}</span></div><h3>${escape(item.title)}</h3><ul>${item.tools.map(tool=>`<li>${escape(tool)}</li>`).join('')}</ul></article>`).join('');
  function renderJourney(category) {
    $('#journey-panel').innerHTML=data[category].map(item=>`<article class="timeline-item"><p class="timeline-date mono">${escape(item.date)}</p><h3>${escape(item.title)}</h3><p class="timeline-org">${escape(item.org)}</p><p class="timeline-description">${escape(item.text)}</p></article>`).join('');
    $('#journey-panel').setAttribute('aria-labelledby',`tab-${category}`);
  }
  renderJourney('experience');
  const journeyTabs=$$('[data-journey]');
  journeyTabs.forEach((button,index)=>{
    button.addEventListener('click',()=>{
      journeyTabs.forEach(other=>{other.setAttribute('aria-selected',String(other===button));other.tabIndex=other===button?0:-1;});
      renderJourney(button.dataset.journey);
    });
    button.addEventListener('keydown',event=>{
      const keys=['ArrowRight','ArrowLeft','Home','End'];if(!keys.includes(event.key))return;
      event.preventDefault();
      const next=event.key==='Home'?0:event.key==='End'?journeyTabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+journeyTabs.length)%journeyTabs.length;
      journeyTabs[next].click();journeyTabs[next].focus();
    });
  });
  function applyTheme(theme) {
    document.documentElement.dataset.theme=theme;
    $('.theme-toggle').setAttribute('aria-label',`Switch to ${theme==='dark'?'light':'dark'} theme`);
    $('.theme-toggle').innerHTML=icon(theme==='dark'?'sun':'moon');
    $('meta[name="theme-color"]').content=theme==='dark'?'#17221b':'#f6f7f2';
  }
  let savedTheme;try{savedTheme=localStorage.getItem('phoebien-theme');}catch{}
  applyTheme(savedTheme==='dark'?'dark':'light');
  $('.theme-toggle').addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';applyTheme(next);try{localStorage.setItem('phoebien-theme',next);}catch{}});
  const menu=$('.menu-toggle');
  function closeMenu(){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');$('#mobile-nav').hidden=true;}
  menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(expanded));menu.setAttribute('aria-label',expanded?'Close navigation':'Open navigation');$('#mobile-nav').hidden=!expanded;});
  $$('#mobile-nav a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
  const wideScreen=matchMedia('(min-width:701px)');wideScreen.addEventListener('change',event=>{if(event.matches)closeMenu();});
  let toastTimer;
  function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3500);}
  $('.copy-email').addEventListener('click',async()=>{try{await navigator.clipboard.writeText('phoebiend@gmail.com');toast('Email copied. Say hello!');}catch{toast('Email: phoebiend@gmail.com');}});
  $('#year').textContent=String(new Date().getFullYear());
  if('IntersectionObserver' in window){
    const navObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){$$('.desktop-nav a').forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`));}});},{rootMargin:'-15% 0px -65% 0px',threshold:0});
    $$('main section[id]').forEach(section=>navObserver.observe(section));
  }
})();
