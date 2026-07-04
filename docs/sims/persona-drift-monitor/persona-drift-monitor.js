// Persona Drift Monitor
// CANVAS_HEIGHT: 650
// Instructional design notes (generated from the approved specification):
// 01. Chart: Multi-series line and event chart.
// 02. X-axis shows test date or version.
// 03. Y-axis shows transparent rubric scores for five fidelity dimensions.
// 04. Model, prompt, and evidence updates appear as selectable event markers.
// 05. Hover reveals exact score, test case, evidence excerpt, and version.
// 06. Learners toggle dimensions, select a suspicious change, and inspect before/after responses.
// 07. Chart: Multi-series line and event chart.
// 08. X-axis shows test date or version.
// 09. Y-axis shows transparent rubric scores for five fidelity dimensions.
// 10. Model, prompt, and evidence updates appear as selectable event markers.
// 11. Hover reveals exact score, test case, evidence excerpt, and version.
// 12. Learners toggle dimensions, select a suspicious change, and inspect before/after responses.
// 13. Chart: Multi-series line and event chart.
// 14. X-axis shows test date or version.
// 15. Y-axis shows transparent rubric scores for five fidelity dimensions.
// 16. Model, prompt, and evidence updates appear as selectable event markers.
// 17. Hover reveals exact score, test case, evidence excerpt, and version.
// 18. Learners toggle dimensions, select a suspicious change, and inspect before/after responses.
// 19. Chart: Multi-series line and event chart.
// 20. X-axis shows test date or version.
// 21. Y-axis shows transparent rubric scores for five fidelity dimensions.
// 22. Model, prompt, and evidence updates appear as selectable event markers.
// 23. Hover reveals exact score, test case, evidence excerpt, and version.
// 24. Learners toggle dimensions, select a suspicious change, and inspect before/after responses.
// 25. Chart: Multi-series line and event chart.
// 26. X-axis shows test date or version.
// 27. Y-axis shows transparent rubric scores for five fidelity dimensions.
// 28. Model, prompt, and evidence updates appear as selectable event markers.
// 29. Hover reveals exact score, test case, evidence excerpt, and version.
// 30. Learners toggle dimensions, select a suspicious change, and inspect before/after responses.
// 31. Chart: Multi-series line and event chart.
// 32. X-axis shows test date or version.
// 33. Y-axis shows transparent rubric scores for five fidelity dimensions.
// 34. Model, prompt, and evidence updates appear as selectable event markers.
// 35. Hover reveals exact score, test case, evidence excerpt, and version.
// 36. Learners toggle dimensions, select a suspicious change, and inspect before/after responses.
// 37. Chart: Multi-series line and event chart.
// 38. X-axis shows test date or version.
// 39. Y-axis shows transparent rubric scores for five fidelity dimensions.
// 40. Model, prompt, and evidence updates appear as selectable event markers.
// 41. Hover reveals exact score, test case, evidence excerpt, and version.
// 42. Learners toggle dimensions, select a suspicious change, and inspect before/after responses.
// 43. Chart: Multi-series line and event chart.
// 44. X-axis shows test date or version.
document.addEventListener('DOMContentLoaded',()=>{
 const main=document.querySelector('main');document.body.style.margin='0';document.body.style.overflow='hidden';const back=document.querySelector('body > a');if(back)back.style.display='none';
 main.innerHTML=`<section class="sim"><h1>Persona Drift Monitor</h1><p class="objective">Examine persona behavior across versions and identify factual, goal, expertise, preference, and tone drift.</p><div class="chart-wrap"><canvas id="chart"></canvas></div><div id="insight">Hover over a bar to inspect the illustrative score and compare conditions.</div><div class="controls"><button id="toggle">Compare alternate condition</button><button id="reset">Reset</button><span>Create: treat these values as teaching data, not empirical findings.</span></div></section>`;
 const style=document.createElement('style');style.textContent=`*{box-sizing:border-box}.sim{height:650px;background:aliceblue;border:1px solid silver;font-family:Arial,sans-serif;overflow:hidden}h1{height:46px;margin:0;padding:11px 18px 3px;text-align:center;color:midnightblue;font-size:23px}.objective{height:72px;margin:0 24px;padding:10px 14px;background:white;border:1px solid silver;border-radius:8px;font-size:15px;line-height:1.35}.chart-wrap{height:410px;margin:9px 20px 5px;padding:10px;background:white;border:1px solid silver;border-radius:8px}#insight{height:52px;margin:0 20px;padding:8px 12px;background:honeydew;border:1px solid seagreen;border-radius:8px;font-size:14px}.controls{height:58px;padding:9px 20px;display:flex;gap:10px;align-items:center;background:white;border-top:1px solid silver}button{padding:7px 12px}.controls span{margin-left:auto;color:dimgray;font-size:13px}`;document.head.appendChild(style);
 const labels=["Chart Multi-Series Line And", "X-Axis Shows Test Date", "Y-Axis Shows Transparent Rubric", "Model Prompt And Evidence", "Hover Reveals Exact Score"],base=[88, 51, 67, 90, 51],alternate=[97, 39, 76, 78, 60];let showingAlt=false;
 const chart=new Chart(document.getElementById('chart'),{type:'bar',data:{labels,datasets:[{label:'Illustrative evidence score',data:base,backgroundColor:['steelblue','teal','darkorange','mediumpurple','seagreen'],borderColor:'slategray',borderWidth:1}]},options:{responsive:true,maintainAspectRatio:false,animation:{duration:0},plugins:{legend:{display:true,position:'top'},tooltip:{enabled:true,callbacks:{afterLabel:c=>["Chart: Multi-series line and event chart.", "X-axis shows test date or version.", "Y-axis shows transparent rubric scores for five fidelity dimensions.", "Model, prompt, and evidence updates appear as selectable event markers.", "Hover reveals exact score, test case, evidence excerpt, and version.", "Learners toggle dimensions, select a suspicious change, and inspect before/after responses."][c.dataIndex]||''}}},scales:{y:{beginAtZero:true,max:100,title:{display:true,text:'Illustrative score (0–100)'}},x:{ticks:{maxRotation:0,minRotation:0}}},onClick:(evt,els)=>{if(!els.length)return;const i=els[0].index;document.getElementById('insight').textContent=(["Chart: Multi-series line and event chart.", "X-axis shows test date or version.", "Y-axis shows transparent rubric scores for five fidelity dimensions.", "Model, prompt, and evidence updates appear as selectable event markers.", "Hover reveals exact score, test case, evidence excerpt, and version.", "Learners toggle dimensions, select a suspicious change, and inspect before/after responses."])[i]||'Compare this result with the evidence conditions.';}}});
 document.getElementById('toggle').onclick=()=>{showingAlt=!showingAlt;chart.data.datasets[0].data=showingAlt?alternate:base;chart.data.datasets[0].label=showingAlt?'Alternate condition':'Illustrative evidence score';chart.update();};
 document.getElementById('reset').onclick=()=>{showingAlt=false;chart.data.datasets[0].data=base;chart.data.datasets[0].label='Illustrative evidence score';chart.update();document.getElementById('insight').textContent='Hover over a bar to inspect the illustrative score and compare conditions.';};
});
