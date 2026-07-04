// Beginner-friendly JavaScript: this file loads keyword data and fills the table.
const rows = [
  {keyword:'remote data science internship 2026', volume:320, kgr:0.14, intent:'Transactional', content:'Internship landing page'},
  {keyword:'python internship for btech students', volume:590, kgr:0.20, intent:'Commercial', content:'Comparison blog + CTA'},
  {keyword:'best digital marketing internship 2026', volume:480, kgr:0.23, intent:'Commercial', content:'Program landing page'},
  {keyword:'seo basics for beginners internship', volume:170, kgr:0.16, intent:'Informational', content:'Educational blog'},
  {keyword:'keyword research project example', volume:210, kgr:0.17, intent:'Informational', content:'Portfolio article'},
  {keyword:'full stack internship with projects', volume:390, kgr:0.22, intent:'Commercial', content:'Service page'},
  {keyword:'ai ml internship for beginners', volume:720, kgr:0.22, intent:'Commercial', content:'Cluster landing page'},
  {keyword:'how to do keyword research for a website', volume:880, kgr:0.22, intent:'Informational', content:'How-to guide'},
  {keyword:'decodelabs internship login', volume:90, kgr:0.09, intent:'Navigational', content:'Support page'},
  {keyword:'apply for seo internship online', volume:260, kgr:0.19, intent:'Transactional', content:'Application page'},
  {keyword:'technical seo checklist for students', volume:140, kgr:0.16, intent:'Informational', content:'Checklist post'},
  {keyword:'remote python sql internship', volume:150, kgr:0.20, intent:'Transactional', content:'Landing page'}
];
const tbody = document.querySelector('#keywordTable tbody');
const searchBox = document.querySelector('#searchBox');
function renderTable(filter = '') {
  const q = filter.toLowerCase();
  tbody.innerHTML = rows.filter(row => Object.values(row).join(' ').toLowerCase().includes(q)).map(row => `
    <tr><td>${row.keyword}</td><td>${row.volume}</td><td>${row.kgr}</td><td>${row.intent}</td><td>${row.content}</td></tr>`).join('');
}
searchBox.addEventListener('input', e => renderTable(e.target.value));
renderTable();