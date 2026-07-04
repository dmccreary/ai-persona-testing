// Controlled Prompt Comparison Lab
// CANVAS_HEIGHT: 650
// Instructional design notes (generated from the approved specification):
// 01. Controlled Prompt Comparison Lab
// 02. Chart: Interactive small multiples for grounding, completeness, fidelity, consistency, and review effort, plus a failure-event strip.
// 03. Hover shows exact case, run, reviewer note, and prompt version.
// 04. Prompt version, test category, persona, model, run count, and metric.
// 05. A blind-review mode hides version labels until judgment is recorded.
// 06. The tool prevents declaring a winner when cases or settings differ and highlights severe regressions hidden by averages.
// 07. Controlled Prompt Comparison Lab
// 08. Chart: Interactive small multiples for grounding, completeness, fidelity, consistency, and review effort, plus a failure-event strip.
// 09. Hover shows exact case, run, reviewer note, and prompt version.
// 10. Prompt version, test category, persona, model, run count, and metric.
// 11. A blind-review mode hides version labels until judgment is recorded.
// 12. The tool prevents declaring a winner when cases or settings differ and highlights severe regressions hidden by averages.
// 13. Controlled Prompt Comparison Lab
// 14. Chart: Interactive small multiples for grounding, completeness, fidelity, consistency, and review effort, plus a failure-event strip.
// 15. Hover shows exact case, run, reviewer note, and prompt version.
// 16. Prompt version, test category, persona, model, run count, and metric.
// 17. A blind-review mode hides version labels until judgment is recorded.
// 18. The tool prevents declaring a winner when cases or settings differ and highlights severe regressions hidden by averages.
// 19. Controlled Prompt Comparison Lab
// 20. Chart: Interactive small multiples for grounding, completeness, fidelity, consistency, and review effort, plus a failure-event strip.
// 21. Hover shows exact case, run, reviewer note, and prompt version.
// 22. Prompt version, test category, persona, model, run count, and metric.
// 23. A blind-review mode hides version labels until judgment is recorded.
// 24. The tool prevents declaring a winner when cases or settings differ and highlights severe regressions hidden by averages.
// 25. Controlled Prompt Comparison Lab
// 26. Chart: Interactive small multiples for grounding, completeness, fidelity, consistency, and review effort, plus a failure-event strip.
// 27. Hover shows exact case, run, reviewer note, and prompt version.
// 28. Prompt version, test category, persona, model, run count, and metric.
// 29. A blind-review mode hides version labels until judgment is recorded.
// 30. The tool prevents declaring a winner when cases or settings differ and highlights severe regressions hidden by averages.
// 31. Controlled Prompt Comparison Lab
// 32. Chart: Interactive small multiples for grounding, completeness, fidelity, consistency, and review effort, plus a failure-event strip.
// 33. Hover shows exact case, run, reviewer note, and prompt version.
// 34. Prompt version, test category, persona, model, run count, and metric.
// 35. A blind-review mode hides version labels until judgment is recorded.
// 36. The tool prevents declaring a winner when cases or settings differ and highlights severe regressions hidden by averages.
// 37. Controlled Prompt Comparison Lab
// 38. Chart: Interactive small multiples for grounding, completeness, fidelity, consistency, and review effort, plus a failure-event strip.
// 39. Hover shows exact case, run, reviewer note, and prompt version.
// 40. Prompt version, test category, persona, model, run count, and metric.
// 41. A blind-review mode hides version labels until judgment is recorded.
// 42. The tool prevents declaring a winner when cases or settings differ and highlights severe regressions hidden by averages.
// 43. Controlled Prompt Comparison Lab
// 44. Chart: Interactive small multiples for grounding, completeness, fidelity, consistency, and review effort, plus a failure-event strip.
document.addEventListener('DOMContentLoaded',()=>{
 const main=document.querySelector('main');document.body.style.margin='0';document.body.style.overflow='hidden';const back=document.querySelector('body > a');if(back)back.style.display='none';
 main.innerHTML=`<section class="sim"><h1>Controlled Prompt Comparison Lab</h1><p class="objective">Compare two prompt versions across quality dimensions, repeated runs, and failure severity, then justify a release decision.</p><div class="chart-wrap"><canvas id="chart"></canvas></div><div id="insight">Hover over a bar to inspect the illustrative score and compare conditions.</div><div class="controls"><button id="toggle">Compare alternate condition</button><button id="reset">Reset</button><span>Create: treat these values as teaching data, not empirical findings.</span></div></section>`;
 const style=document.createElement('style');style.textContent=`*{box-sizing:border-box}.sim{height:650px;background:aliceblue;border:1px solid silver;font-family:Arial,sans-serif;overflow:hidden}h1{height:46px;margin:0;padding:11px 18px 3px;text-align:center;color:midnightblue;font-size:23px}.objective{height:72px;margin:0 24px;padding:10px 14px;background:white;border:1px solid silver;border-radius:8px;font-size:15px;line-height:1.35}.chart-wrap{height:410px;margin:9px 20px 5px;padding:10px;background:white;border:1px solid silver;border-radius:8px}#insight{height:52px;margin:0 20px;padding:8px 12px;background:honeydew;border:1px solid seagreen;border-radius:8px;font-size:14px}.controls{height:58px;padding:9px 20px;display:flex;gap:10px;align-items:center;background:white;border-top:1px solid silver}button{padding:7px 12px}.controls span{margin-left:auto;color:dimgray;font-size:13px}`;document.head.appendChild(style);
 const labels=["Controlled Prompt Comparison Lab", "Chart Interactive Small Multiples", "Hover Shows Exact Case", "Prompt Version Test Category", "Blind-Review Mode Hides Version"],base=[58, 48, 86, 73, 72],alternate=[67, 36, 95, 61, 81];let showingAlt=false;
 const chart=new Chart(document.getElementById('chart'),{type:'bar',data:{labels,datasets:[{label:'Illustrative evidence score',data:base,backgroundColor:['steelblue','teal','darkorange','mediumpurple','seagreen'],borderColor:'slategray',borderWidth:1}]},options:{responsive:true,maintainAspectRatio:false,animation:{duration:0},plugins:{legend:{display:true,position:'top'},tooltip:{enabled:true,callbacks:{afterLabel:c=>["Controlled Prompt Comparison Lab", "Chart: Interactive small multiples for grounding, completeness, fidelity, consistency, and review effort, plus a failure-event strip.", "Hover shows exact case, run, reviewer note, and prompt version.", "Prompt version, test category, persona, model, run count, and metric.", "A blind-review mode hides version labels until judgment is recorded.", "The tool prevents declaring a winner when cases or settings differ and highlights severe regressions hidden by averages."][c.dataIndex]||''}}},scales:{y:{beginAtZero:true,max:100,title:{display:true,text:'Illustrative score (0–100)'}},x:{ticks:{maxRotation:0,minRotation:0}}},onClick:(evt,els)=>{if(!els.length)return;const i=els[0].index;document.getElementById('insight').textContent=(["Controlled Prompt Comparison Lab", "Chart: Interactive small multiples for grounding, completeness, fidelity, consistency, and review effort, plus a failure-event strip.", "Hover shows exact case, run, reviewer note, and prompt version.", "Prompt version, test category, persona, model, run count, and metric.", "A blind-review mode hides version labels until judgment is recorded.", "The tool prevents declaring a winner when cases or settings differ and highlights severe regressions hidden by averages."])[i]||'Compare this result with the evidence conditions.';}}});
 document.getElementById('toggle').onclick=()=>{showingAlt=!showingAlt;chart.data.datasets[0].data=showingAlt?alternate:base;chart.data.datasets[0].label=showingAlt?'Alternate condition':'Illustrative evidence score';chart.update();};
 document.getElementById('reset').onclick=()=>{showingAlt=false;chart.data.datasets[0].data=base;chart.data.datasets[0].label='Illustrative evidence score';chart.update();document.getElementById('insight').textContent='Hover over a bar to inspect the illustrative score and compare conditions.';};
});
