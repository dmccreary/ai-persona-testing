// Baseline and Benchmark Comparison Explorer
// CANVAS_HEIGHT: 650
// Instructional design notes (generated from the approved specification):
// 01. Baseline and Benchmark Comparison Explorer
// 02. Chart: Interactive grouped bars and interval markers by criterion and persona.
// 03. Hover reveals asset, version, context, rubric, run count, confidence, and evidence.
// 04. Reference type, persona, criterion, version, and compatible-only filter.
// 05. Sensitivity view shows whether conclusions survive plausible variation.
// 06. The tool blocks comparisons with mismatched criteria or contexts until the learner explains and corrects them.
// 07. Baseline and Benchmark Comparison Explorer
// 08. Chart: Interactive grouped bars and interval markers by criterion and persona.
// 09. Hover reveals asset, version, context, rubric, run count, confidence, and evidence.
// 10. Reference type, persona, criterion, version, and compatible-only filter.
// 11. Sensitivity view shows whether conclusions survive plausible variation.
// 12. The tool blocks comparisons with mismatched criteria or contexts until the learner explains and corrects them.
// 13. Baseline and Benchmark Comparison Explorer
// 14. Chart: Interactive grouped bars and interval markers by criterion and persona.
// 15. Hover reveals asset, version, context, rubric, run count, confidence, and evidence.
// 16. Reference type, persona, criterion, version, and compatible-only filter.
// 17. Sensitivity view shows whether conclusions survive plausible variation.
// 18. The tool blocks comparisons with mismatched criteria or contexts until the learner explains and corrects them.
// 19. Baseline and Benchmark Comparison Explorer
// 20. Chart: Interactive grouped bars and interval markers by criterion and persona.
// 21. Hover reveals asset, version, context, rubric, run count, confidence, and evidence.
// 22. Reference type, persona, criterion, version, and compatible-only filter.
// 23. Sensitivity view shows whether conclusions survive plausible variation.
// 24. The tool blocks comparisons with mismatched criteria or contexts until the learner explains and corrects them.
// 25. Baseline and Benchmark Comparison Explorer
// 26. Chart: Interactive grouped bars and interval markers by criterion and persona.
// 27. Hover reveals asset, version, context, rubric, run count, confidence, and evidence.
// 28. Reference type, persona, criterion, version, and compatible-only filter.
// 29. Sensitivity view shows whether conclusions survive plausible variation.
// 30. The tool blocks comparisons with mismatched criteria or contexts until the learner explains and corrects them.
// 31. Baseline and Benchmark Comparison Explorer
// 32. Chart: Interactive grouped bars and interval markers by criterion and persona.
// 33. Hover reveals asset, version, context, rubric, run count, confidence, and evidence.
// 34. Reference type, persona, criterion, version, and compatible-only filter.
// 35. Sensitivity view shows whether conclusions survive plausible variation.
// 36. The tool blocks comparisons with mismatched criteria or contexts until the learner explains and corrects them.
// 37. Baseline and Benchmark Comparison Explorer
// 38. Chart: Interactive grouped bars and interval markers by criterion and persona.
// 39. Hover reveals asset, version, context, rubric, run count, confidence, and evidence.
// 40. Reference type, persona, criterion, version, and compatible-only filter.
// 41. Sensitivity view shows whether conclusions survive plausible variation.
// 42. The tool blocks comparisons with mismatched criteria or contexts until the learner explains and corrects them.
// 43. Baseline and Benchmark Comparison Explorer
// 44. Chart: Interactive grouped bars and interval markers by criterion and persona.
document.addEventListener('DOMContentLoaded',()=>{
 const main=document.querySelector('main');document.body.style.margin='0';document.body.style.overflow='hidden';const back=document.querySelector('body > a');if(back)back.style.display='none';
 main.innerHTML=`<section class="sim"><h1>Baseline and Benchmark Comparison Explorer</h1><p class="objective">Compare an asset with valid baselines and benchmarks while detecting incompatible conditions and unstable differences.</p><div class="chart-wrap"><canvas id="chart"></canvas></div><div id="insight">Hover over a bar to inspect the illustrative score and compare conditions.</div><div class="controls"><button id="toggle">Compare alternate condition</button><button id="reset">Reset</button><span>Create: treat these values as teaching data, not empirical findings.</span></div></section>`;
 const style=document.createElement('style');style.textContent=`*{box-sizing:border-box}.sim{height:650px;background:aliceblue;border:1px solid silver;font-family:Arial,sans-serif;overflow:hidden}h1{height:46px;margin:0;padding:11px 18px 3px;text-align:center;color:midnightblue;font-size:23px}.objective{height:72px;margin:0 24px;padding:10px 14px;background:white;border:1px solid silver;border-radius:8px;font-size:15px;line-height:1.35}.chart-wrap{height:410px;margin:9px 20px 5px;padding:10px;background:white;border:1px solid silver;border-radius:8px}#insight{height:52px;margin:0 20px;padding:8px 12px;background:honeydew;border:1px solid seagreen;border-radius:8px;font-size:14px}.controls{height:58px;padding:9px 20px;display:flex;gap:10px;align-items:center;background:white;border-top:1px solid silver}button{padding:7px 12px}.controls span{margin-left:auto;color:dimgray;font-size:13px}`;document.head.appendChild(style);
 const labels=["Baseline And Benchmark Comparison", "Chart Interactive Grouped Bars", "Hover Reveals Asset Version", "Reference Type Persona Criterion", "Sensitivity View Shows Whether"],base=[84, 89, 90, 56, 67],alternate=[93, 77, 98, 44, 76];let showingAlt=false;
 const chart=new Chart(document.getElementById('chart'),{type:'bar',data:{labels,datasets:[{label:'Illustrative evidence score',data:base,backgroundColor:['steelblue','teal','darkorange','mediumpurple','seagreen'],borderColor:'slategray',borderWidth:1}]},options:{responsive:true,maintainAspectRatio:false,animation:{duration:0},plugins:{legend:{display:true,position:'top'},tooltip:{enabled:true,callbacks:{afterLabel:c=>["Baseline and Benchmark Comparison Explorer", "Chart: Interactive grouped bars and interval markers by criterion and persona.", "Hover reveals asset, version, context, rubric, run count, confidence, and evidence.", "Reference type, persona, criterion, version, and compatible-only filter.", "Sensitivity view shows whether conclusions survive plausible variation.", "The tool blocks comparisons with mismatched criteria or contexts until the learner explains and corrects them."][c.dataIndex]||''}}},scales:{y:{beginAtZero:true,max:100,title:{display:true,text:'Illustrative score (0–100)'}},x:{ticks:{maxRotation:0,minRotation:0}}},onClick:(evt,els)=>{if(!els.length)return;const i=els[0].index;document.getElementById('insight').textContent=(["Baseline and Benchmark Comparison Explorer", "Chart: Interactive grouped bars and interval markers by criterion and persona.", "Hover reveals asset, version, context, rubric, run count, confidence, and evidence.", "Reference type, persona, criterion, version, and compatible-only filter.", "Sensitivity view shows whether conclusions survive plausible variation.", "The tool blocks comparisons with mismatched criteria or contexts until the learner explains and corrects them."])[i]||'Compare this result with the evidence conditions.';}}});
 document.getElementById('toggle').onclick=()=>{showingAlt=!showingAlt;chart.data.datasets[0].data=showingAlt?alternate:base;chart.data.datasets[0].label=showingAlt?'Alternate condition':'Illustrative evidence score';chart.update();};
 document.getElementById('reset').onclick=()=>{showingAlt=false;chart.data.datasets[0].data=base;chart.data.datasets[0].label='Illustrative evidence score';chart.update();document.getElementById('insight').textContent='Hover over a bar to inspect the illustrative score and compare conditions.';};
});
