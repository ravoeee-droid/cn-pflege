const $=(s,c=document)=>c.querySelector(s);const $$=(s,c=document)=>[...c.querySelectorAll(s)];

$$('.faq-q').forEach(btn=>btn.addEventListener('click',()=>btn.closest('.faq-item').classList.toggle('open')));

const assistantFab=$('#assistantFab'),assistantPanel=$('#assistantPanel'),assistantClose=$('#assistantClose'),assistantBody=$('#assistantBody');
if(assistantFab&&assistantPanel){
  const toggle=(state)=>{assistantPanel.classList.toggle('open',state);assistantFab.setAttribute('aria-expanded',String(state));};
  assistantFab.addEventListener('click',()=>toggle(!assistantPanel.classList.contains('open')));
  assistantClose?.addEventListener('click',()=>toggle(false));
  $$('.quick-replies button').forEach(btn=>btn.addEventListener('click',()=>{
    const text=btn.textContent.trim();assistantBody.insertAdjacentHTML('beforeend',`<div class="bubble user">${text}</div>`);
    let response='Gerne. Für eine persönliche Klärung erreichen Sie CN direkt unter 069 96237272 oder per E-Mail.';
    if(text.includes('Pflege'))response='Der Demo-Kompass kann den Bedarf grob strukturieren. Für eine konkrete Versorgung empfiehlt sich anschließend das persönliche Gespräch mit CN.';
    if(text.includes('Bewerben'))response='Aktuell ist eine Pflegefachkraft (m/w/d) in Vollzeit und unbefristet ausgeschrieben. Der 60-Sekunden-Job-Match führt Sie durch die wichtigsten Eckpunkte.';
    if(text.includes('Kontakt'))response='CN – Der Pflegedienst: Mörfelder Landstraße 64, 60598 Frankfurt · 069 96237272 · info@cn-derpflegedienst.de';
    setTimeout(()=>{assistantBody.insertAdjacentHTML('beforeend',`<div class="bubble bot">${response}</div>`);assistantBody.scrollTop=assistantBody.scrollHeight;},250);
  }));
}

const questions=$$('.question');let qIndex=0;const progress=$('#compassProgress');
function renderQ(){if(!questions.length)return;questions.forEach((q,i)=>q.classList.toggle('active',i===qIndex));$$('.step-mini').forEach((s,i)=>s.classList.toggle('active',i===Math.min(qIndex,2)));if(progress)progress.style.width=`${Math.min(((qIndex+1)/3)*100,100)}%`;}
$$('.choice').forEach(btn=>btn.addEventListener('click',()=>{btn.parentElement.querySelectorAll('.choice').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');}));
$('#compassNext')?.addEventListener('click',()=>{if(qIndex<questions.length-1){qIndex++;renderQ();}});$('#compassBack')?.addEventListener('click',()=>{if(qIndex>0){qIndex--;renderQ();}});renderQ();

const jobSteps=$$('.job-step');let jIndex=0;let jobAnswers=[];
function renderJob(){jobSteps.forEach((s,i)=>s.classList.toggle('active',i===jIndex));}
$$('.job-option').forEach(btn=>btn.addEventListener('click',()=>{btn.parentElement.querySelectorAll('.job-option').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');jobAnswers[jIndex]=btn.dataset.value||btn.textContent.trim();setTimeout(()=>{if(jIndex<jobSteps.length-1){jIndex++;renderJob();}},180);}));renderJob();

$$('[data-admin-view]').forEach(btn=>btn.addEventListener('click',()=>{const id=btn.dataset.adminView;$$('[data-admin-view]').forEach(b=>b.classList.toggle('active',b===btn));$$('.admin-view').forEach(v=>v.classList.toggle('active',v.id===id));const title=$('#adminTitle');if(title)title.textContent=btn.textContent.trim();}));
