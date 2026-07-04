// Evidence-to-Claim Traceability Map
// CANVAS_HEIGHT: 700
// Instructional design notes (generated from the approved specification):
// 01. Evidence-to-Claim Traceability Map
// 02. Node types: Decision, Research Question, Method, Evidence Item, Interpretation, Claim, Assumption, Constraint, and Limitation.
// 03. Nodes show a short label plus properties such as source, date, and evidence status.
// 04. Edge types: ANSWERS, PRODUCES, SUPPORTS, DEPENDS_ON, LIMITED_BY, and CONTRADICTS.
// 05. Clicking an edge explains the relationship and displays the exact source passage or data field when available.
// 06. Sample graph: A pricing-page decision connected to interview quotes, a survey result, three synthetic persona findings, and two proposed claims.
// 07. Evidence-to-Claim Traceability Map
// 08. Node types: Decision, Research Question, Method, Evidence Item, Interpretation, Claim, Assumption, Constraint, and Limitation.
// 09. Nodes show a short label plus properties such as source, date, and evidence status.
// 10. Edge types: ANSWERS, PRODUCES, SUPPORTS, DEPENDS_ON, LIMITED_BY, and CONTRADICTS.
// 11. Clicking an edge explains the relationship and displays the exact source passage or data field when available.
// 12. Sample graph: A pricing-page decision connected to interview quotes, a survey result, three synthetic persona findings, and two proposed claims.
// 13. Evidence-to-Claim Traceability Map
// 14. Node types: Decision, Research Question, Method, Evidence Item, Interpretation, Claim, Assumption, Constraint, and Limitation.
// 15. Nodes show a short label plus properties such as source, date, and evidence status.
// 16. Edge types: ANSWERS, PRODUCES, SUPPORTS, DEPENDS_ON, LIMITED_BY, and CONTRADICTS.
// 17. Clicking an edge explains the relationship and displays the exact source passage or data field when available.
// 18. Sample graph: A pricing-page decision connected to interview quotes, a survey result, three synthetic persona findings, and two proposed claims.
// 19. Evidence-to-Claim Traceability Map
// 20. Node types: Decision, Research Question, Method, Evidence Item, Interpretation, Claim, Assumption, Constraint, and Limitation.
// 21. Nodes show a short label plus properties such as source, date, and evidence status.
// 22. Edge types: ANSWERS, PRODUCES, SUPPORTS, DEPENDS_ON, LIMITED_BY, and CONTRADICTS.
// 23. Clicking an edge explains the relationship and displays the exact source passage or data field when available.
// 24. Sample graph: A pricing-page decision connected to interview quotes, a survey result, three synthetic persona findings, and two proposed claims.
// 25. Evidence-to-Claim Traceability Map
// 26. Node types: Decision, Research Question, Method, Evidence Item, Interpretation, Claim, Assumption, Constraint, and Limitation.
// 27. Nodes show a short label plus properties such as source, date, and evidence status.
// 28. Edge types: ANSWERS, PRODUCES, SUPPORTS, DEPENDS_ON, LIMITED_BY, and CONTRADICTS.
// 29. Clicking an edge explains the relationship and displays the exact source passage or data field when available.
// 30. Sample graph: A pricing-page decision connected to interview quotes, a survey result, three synthetic persona findings, and two proposed claims.
// 31. Evidence-to-Claim Traceability Map
// 32. Node types: Decision, Research Question, Method, Evidence Item, Interpretation, Claim, Assumption, Constraint, and Limitation.
// 33. Nodes show a short label plus properties such as source, date, and evidence status.
// 34. Edge types: ANSWERS, PRODUCES, SUPPORTS, DEPENDS_ON, LIMITED_BY, and CONTRADICTS.
// 35. Clicking an edge explains the relationship and displays the exact source passage or data field when available.
// 36. Sample graph: A pricing-page decision connected to interview quotes, a survey result, three synthetic persona findings, and two proposed claims.
// 37. Evidence-to-Claim Traceability Map
// 38. Node types: Decision, Research Question, Method, Evidence Item, Interpretation, Claim, Assumption, Constraint, and Limitation.
// 39. Nodes show a short label plus properties such as source, date, and evidence status.
// 40. Edge types: ANSWERS, PRODUCES, SUPPORTS, DEPENDS_ON, LIMITED_BY, and CONTRADICTS.
// 41. Clicking an edge explains the relationship and displays the exact source passage or data field when available.
// 42. Sample graph: A pricing-page decision connected to interview quotes, a survey result, three synthetic persona findings, and two proposed claims.
// 43. Evidence-to-Claim Traceability Map
// 44. Node types: Decision, Research Question, Method, Evidence Item, Interpretation, Claim, Assumption, Constraint, and Limitation.
document.addEventListener('DOMContentLoaded',()=>{
 const main=document.querySelector('main');document.body.style.margin='0';document.body.style.overflow='hidden';const back=document.querySelector('body > a');if(back)back.style.display='none';
 const css=document.createElement('link');css.rel='stylesheet';css.href='https://unpkg.com/vis-network/styles/vis-network.min.css';document.head.appendChild(css);
 main.innerHTML=`<section class="sim"><h1>Evidence-to-Claim Traceability Map</h1><p class="objective">Validate whether a marketing research claim is adequately supported by its source evidence, method, assumptions, and limitations.</p><div id="network"></div><div class="panel"><strong id="node-title">Select a node</strong><span id="node-detail">Inspect relationships, then explain how evidence travels through the model.</span></div><div class="controls"><button id="previous">Previous</button><button id="next">Next node</button><button id="reset">Reset</button><span>Evaluate: compare structure and evidence.</span></div></section>`;
 const style=document.createElement('style');style.textContent=`*{box-sizing:border-box}.sim{height:700px;background:aliceblue;border:1px solid silver;font-family:Arial,sans-serif;overflow:hidden}h1{height:44px;margin:0;padding:10px 18px 4px;text-align:center;color:midnightblue;font-size:23px}.objective{height:62px;margin:0 24px;padding:8px 14px;background:white;border:1px solid silver;border-radius:8px;font-size:15px;line-height:1.35}#network{height:430px;margin:8px 18px;background:white;border:1px solid silver;border-radius:8px}.panel{height:80px;margin:0 18px;padding:10px 14px;background:white;border:1px solid steelblue;border-radius:8px;display:flex;flex-direction:column;gap:6px;font-size:15px}.panel strong{color:midnightblue;font-size:17px}.controls{height:58px;padding:9px 18px;display:flex;gap:10px;align-items:center;background:white;border-top:1px solid silver}button{padding:7px 12px}.controls span{margin-left:auto;color:dimgray;font-size:14px}`;document.head.appendChild(style);
 const nodeData=[{"id": 1, "label": "Evidence-To-Claim Traceability Map", "title": "Evidence-to-Claim Traceability Map", "x": -260, "y": -130}, {"id": 2, "label": "Node Types Decision Research", "title": "Node types: Decision, Research Question, Method, Evidence Item, Interpretation, Claim, Assumption, Constraint, and Limitation.", "x": 0, "y": -190}, {"id": 3, "label": "Nodes Show Short Label", "title": "Nodes show a short label plus properties such as source, date, and evidence status.", "x": 260, "y": -130}, {"id": 4, "label": "Edge Types Answers Produces", "title": "Edge types: ANSWERS, PRODUCES, SUPPORTS, DEPENDS_ON, LIMITED_BY, and CONTRADICTS.", "x": -180, "y": 100}, {"id": 5, "label": "Clicking An Edge Explains", "title": "Clicking an edge explains the relationship and displays the exact source passage or data field when available.", "x": 180, "y": 100}, {"id": 6, "label": "Sample Graph Pricing-Page Decision", "title": "Sample graph: A pricing-page decision connected to interview quotes, a survey result, three synthetic persona findings, and two proposed claims.", "x": 0, "y": 220}],edgeData=[{"from": 1, "to": 2, "label": "informs"}, {"from": 2, "to": 3, "label": "informs"}, {"from": 3, "to": 4, "label": "informs"}, {"from": 4, "to": 5, "label": "informs"}, {"from": 5, "to": 6, "label": "informs"}, {"from": 1, "to": 4, "label": "constrains"}];
 const nodes=new vis.DataSet(nodeData.map((n,i)=>({...n,shape:'box',margin:12,color:{background:['lightblue','lightcyan','moccasin','thistle','honeydew','lavender'][i],border:['steelblue','teal','darkorange','mediumpurple','seagreen','slateblue'][i]}})));
 const edges=new vis.DataSet(edgeData.map((e,i)=>({id:i+1,...e,arrows:'to',font:{size:13,align:'middle'},color:{color:'slategray'}})));
 const network=new vis.Network(document.getElementById('network'),{nodes,edges},{layout:{improvedLayout:false},physics:{enabled:false},interaction:{zoomView:false,dragView:false,dragNodes:false,navigationButtons:true,keyboard:{enabled:true,bindToWindow:false}},nodes:{font:{size:16,face:'Arial'},borderWidth:2},edges:{smooth:{type:'curvedCW',roundness:.12}}});
 let current=-1;function select(i){current=(i+nodeData.length)%nodeData.length;network.selectNodes([nodeData[current].id]);document.getElementById('node-title').textContent=nodeData[current].label;document.getElementById('node-detail').textContent=nodeData[current].title;}
 network.on('selectNode',e=>{const i=nodeData.findIndex(n=>n.id===e.nodes[0]);select(i);});
 document.getElementById('previous').onclick=()=>select(current-1);document.getElementById('next').onclick=()=>select(current+1);document.getElementById('reset').onclick=()=>{current=-1;network.unselectAll();document.getElementById('node-title').textContent='Select a node';document.getElementById('node-detail').textContent='Inspect relationships, then explain how evidence travels through the model.';};
});
