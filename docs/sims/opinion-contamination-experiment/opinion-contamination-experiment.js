// Opinion Contamination Experiment
// CANVAS_HEIGHT: 650
// Instructional design notes (generated from the approved specification):
// 01. Opinion Contamination Experiment
// 02. Chart: Paired response-position plots before and after exposure, with semantic-theme similarity and confidence.
// 03. Values are illustrative teaching data.
// 04. Learners toggle which opinion appears first, moderator wording, anonymity, and required evidence.
// 05. Hover reveals exact response excerpts and change rationale.
// 06. The tool explains that increased agreement can reflect evidence, anchoring, or role pressure and asks learners to classify the cause.
// 07. Opinion Contamination Experiment
// 08. Chart: Paired response-position plots before and after exposure, with semantic-theme similarity and confidence.
// 09. Values are illustrative teaching data.
// 10. Learners toggle which opinion appears first, moderator wording, anonymity, and required evidence.
// 11. Hover reveals exact response excerpts and change rationale.
// 12. The tool explains that increased agreement can reflect evidence, anchoring, or role pressure and asks learners to classify the cause.
// 13. Opinion Contamination Experiment
// 14. Chart: Paired response-position plots before and after exposure, with semantic-theme similarity and confidence.
// 15. Values are illustrative teaching data.
// 16. Learners toggle which opinion appears first, moderator wording, anonymity, and required evidence.
// 17. Hover reveals exact response excerpts and change rationale.
// 18. The tool explains that increased agreement can reflect evidence, anchoring, or role pressure and asks learners to classify the cause.
// 19. Opinion Contamination Experiment
// 20. Chart: Paired response-position plots before and after exposure, with semantic-theme similarity and confidence.
// 21. Values are illustrative teaching data.
// 22. Learners toggle which opinion appears first, moderator wording, anonymity, and required evidence.
// 23. Hover reveals exact response excerpts and change rationale.
// 24. The tool explains that increased agreement can reflect evidence, anchoring, or role pressure and asks learners to classify the cause.
// 25. Opinion Contamination Experiment
// 26. Chart: Paired response-position plots before and after exposure, with semantic-theme similarity and confidence.
// 27. Values are illustrative teaching data.
// 28. Learners toggle which opinion appears first, moderator wording, anonymity, and required evidence.
// 29. Hover reveals exact response excerpts and change rationale.
// 30. The tool explains that increased agreement can reflect evidence, anchoring, or role pressure and asks learners to classify the cause.
// 31. Opinion Contamination Experiment
// 32. Chart: Paired response-position plots before and after exposure, with semantic-theme similarity and confidence.
// 33. Values are illustrative teaching data.
// 34. Learners toggle which opinion appears first, moderator wording, anonymity, and required evidence.
// 35. Hover reveals exact response excerpts and change rationale.
// 36. The tool explains that increased agreement can reflect evidence, anchoring, or role pressure and asks learners to classify the cause.
// 37. Opinion Contamination Experiment
// 38. Chart: Paired response-position plots before and after exposure, with semantic-theme similarity and confidence.
// 39. Values are illustrative teaching data.
// 40. Learners toggle which opinion appears first, moderator wording, anonymity, and required evidence.
// 41. Hover reveals exact response excerpts and change rationale.
// 42. The tool explains that increased agreement can reflect evidence, anchoring, or role pressure and asks learners to classify the cause.
// 43. Opinion Contamination Experiment
// 44. Chart: Paired response-position plots before and after exposure, with semantic-theme similarity and confidence.
document.addEventListener('DOMContentLoaded',()=>{
 const main=document.querySelector('main');document.body.style.margin='0';document.body.style.overflow='hidden';const back=document.querySelector('body > a');if(back)back.style.display='none';
 main.innerHTML=`<section class="sim"><h1>Opinion Contamination Experiment</h1><p class="objective">Compare independent and socially exposed persona responses to identify anchoring, convergence, and preserved disagreement.</p><div class="chart-wrap"><canvas id="chart"></canvas></div><div id="insight">Hover over a bar to inspect the illustrative score and compare conditions.</div><div class="controls"><button id="toggle">Compare alternate condition</button><button id="reset">Reset</button><span>Create: treat these values as teaching data, not empirical findings.</span></div></section>`;
 const style=document.createElement('style');style.textContent=`*{box-sizing:border-box}.sim{height:650px;background:aliceblue;border:1px solid silver;font-family:Arial,sans-serif;overflow:hidden}h1{height:46px;margin:0;padding:11px 18px 3px;text-align:center;color:midnightblue;font-size:23px}.objective{height:72px;margin:0 24px;padding:10px 14px;background:white;border:1px solid silver;border-radius:8px;font-size:15px;line-height:1.35}.chart-wrap{height:410px;margin:9px 20px 5px;padding:10px;background:white;border:1px solid silver;border-radius:8px}#insight{height:52px;margin:0 20px;padding:8px 12px;background:honeydew;border:1px solid seagreen;border-radius:8px;font-size:14px}.controls{height:58px;padding:9px 20px;display:flex;gap:10px;align-items:center;background:white;border-top:1px solid silver}button{padding:7px 12px}.controls span{margin-left:auto;color:dimgray;font-size:13px}`;document.head.appendChild(style);
 const labels=["Opinion Contamination Experiment", "Chart Paired Response-Position Plots", "Values Are Illustrative Teaching", "Learners Toggle Which Opinion", "Hover Reveals Exact Response"],base=[83, 48, 77, 69, 89],alternate=[92, 36, 86, 57, 98];let showingAlt=false;
 const chart=new Chart(document.getElementById('chart'),{type:'bar',data:{labels,datasets:[{label:'Illustrative evidence score',data:base,backgroundColor:['steelblue','teal','darkorange','mediumpurple','seagreen'],borderColor:'slategray',borderWidth:1}]},options:{responsive:true,maintainAspectRatio:false,animation:{duration:0},plugins:{legend:{display:true,position:'top'},tooltip:{enabled:true,callbacks:{afterLabel:c=>["Opinion Contamination Experiment", "Chart: Paired response-position plots before and after exposure, with semantic-theme similarity and confidence.", "Values are illustrative teaching data.", "Learners toggle which opinion appears first, moderator wording, anonymity, and required evidence.", "Hover reveals exact response excerpts and change rationale.", "The tool explains that increased agreement can reflect evidence, anchoring, or role pressure and asks learners to classify the cause."][c.dataIndex]||''}}},scales:{y:{beginAtZero:true,max:100,title:{display:true,text:'Illustrative score (0–100)'}},x:{ticks:{maxRotation:0,minRotation:0}}},onClick:(evt,els)=>{if(!els.length)return;const i=els[0].index;document.getElementById('insight').textContent=(["Opinion Contamination Experiment", "Chart: Paired response-position plots before and after exposure, with semantic-theme similarity and confidence.", "Values are illustrative teaching data.", "Learners toggle which opinion appears first, moderator wording, anonymity, and required evidence.", "Hover reveals exact response excerpts and change rationale.", "The tool explains that increased agreement can reflect evidence, anchoring, or role pressure and asks learners to classify the cause."])[i]||'Compare this result with the evidence conditions.';}}});
 document.getElementById('toggle').onclick=()=>{showingAlt=!showingAlt;chart.data.datasets[0].data=showingAlt?alternate:base;chart.data.datasets[0].label=showingAlt?'Alternate condition':'Illustrative evidence score';chart.update();};
 document.getElementById('reset').onclick=()=>{showingAlt=false;chart.data.datasets[0].data=base;chart.data.datasets[0].label='Illustrative evidence score';chart.update();document.getElementById('insight').textContent='Hover over a bar to inspect the illustrative score and compare conditions.';};
});
