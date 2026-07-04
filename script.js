// SkillForge project script - written simply for beginners.
const schedule = [
  ['Monday','LinkedIn','Thought Leadership','Text / Carousel','Trust'],
  ['Tuesday','Instagram','Behind the Scenes','Reel','Vibe'],
  ['Wednesday','LinkedIn','Data / Infographic','Carousel','Authority'],
  ['Thursday','Instagram','Student Spotlight','Post / Carousel','Social Proof'],
  ['Friday','Both','Engagement Question','Poll / Q&A','Urgency'],
  ['Saturday','Instagram','Motivation / Tip','Quote Reel','Vibe'],
  ['Sunday','LinkedIn','Industry Insight','Long Text','Authority']
];
const tbody = document.getElementById('scheduleRows');
schedule.forEach(row => {
  const tr = document.createElement('tr');
  row.forEach(cell => {
    const td = document.createElement('td');
    td.textContent = cell;
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
});
document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});