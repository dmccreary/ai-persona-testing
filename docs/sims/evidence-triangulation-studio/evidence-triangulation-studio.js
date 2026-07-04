// Evidence Triangulation Studio
// CANVAS_HEIGHT: 700
// Instructional design notes (generated from the approved specification):
// 01. Evidence Triangulation Studio
// 02. Node types: Claim, Synthetic Finding, Interview Theme, Survey Result, Behavioral Metric, Market Source, Expert Review, Assumption, and Limitation.
// 03. Node properties show owner, date, method, and independence group.
// 04. Edges: SUPPORTS, CONTRADICTS, SHARES_SOURCE_WITH, LIMITED_BY, and REQUIRES_VALIDATION.
// 05. Clicking an edge explains its evidentiary meaning.
// 06. Learners build a support network for one of four claims.
// 07. Evidence Triangulation Studio
// 08. Node types: Claim, Synthetic Finding, Interview Theme, Survey Result, Behavioral Metric, Market Source, Expert Review, Assumption, and Limitation.
// 09. Node properties show owner, date, method, and independence group.
// 10. Edges: SUPPORTS, CONTRADICTS, SHARES_SOURCE_WITH, LIMITED_BY, and REQUIRES_VALIDATION.
// 11. Clicking an edge explains its evidentiary meaning.
// 12. Learners build a support network for one of four claims.
// 13. Evidence Triangulation Studio
// 14. Node types: Claim, Synthetic Finding, Interview Theme, Survey Result, Behavioral Metric, Market Source, Expert Review, Assumption, and Limitation.
// 15. Node properties show owner, date, method, and independence group.
// 16. Edges: SUPPORTS, CONTRADICTS, SHARES_SOURCE_WITH, LIMITED_BY, and REQUIRES_VALIDATION.
// 17. Clicking an edge explains its evidentiary meaning.
// 18. Learners build a support network for one of four claims.
// 19. Evidence Triangulation Studio
// 20. Node types: Claim, Synthetic Finding, Interview Theme, Survey Result, Behavioral Metric, Market Source, Expert Review, Assumption, and Limitation.
// 21. Node properties show owner, date, method, and independence group.
// 22. Edges: SUPPORTS, CONTRADICTS, SHARES_SOURCE_WITH, LIMITED_BY, and REQUIRES_VALIDATION.
// 23. Clicking an edge explains its evidentiary meaning.
// 24. Learners build a support network for one of four claims.
// 25. Evidence Triangulation Studio
// 26. Node types: Claim, Synthetic Finding, Interview Theme, Survey Result, Behavioral Metric, Market Source, Expert Review, Assumption, and Limitation.
// 27. Node properties show owner, date, method, and independence group.
// 28. Edges: SUPPORTS, CONTRADICTS, SHARES_SOURCE_WITH, LIMITED_BY, and REQUIRES_VALIDATION.
// 29. Clicking an edge explains its evidentiary meaning.
// 30. Learners build a support network for one of four claims.
// 31. Evidence Triangulation Studio
// 32. Node types: Claim, Synthetic Finding, Interview Theme, Survey Result, Behavioral Metric, Market Source, Expert Review, Assumption, and Limitation.
// 33. Node properties show owner, date, method, and independence group.
// 34. Edges: SUPPORTS, CONTRADICTS, SHARES_SOURCE_WITH, LIMITED_BY, and REQUIRES_VALIDATION.
// 35. Clicking an edge explains its evidentiary meaning.
// 36. Learners build a support network for one of four claims.
// 37. Evidence Triangulation Studio
// 38. Node types: Claim, Synthetic Finding, Interview Theme, Survey Result, Behavioral Metric, Market Source, Expert Review, Assumption, and Limitation.
// 39. Node properties show owner, date, method, and independence group.
// 40. Edges: SUPPORTS, CONTRADICTS, SHARES_SOURCE_WITH, LIMITED_BY, and REQUIRES_VALIDATION.
// 41. Clicking an edge explains its evidentiary meaning.
// 42. Learners build a support network for one of four claims.
// 43. Evidence Triangulation Studio
// 44. Node types: Claim, Synthetic Finding, Interview Theme, Survey Result, Behavioral Metric, Market Source, Expert Review, Assumption, and Limitation.
document.addEventListener('DOMContentLoaded',()=>{
 const main=document.querySelector('main');document.body.style.margin='0';document.body.style.overflow='hidden';const back=document.querySelector('body > a');if(back)back.style.display='none';
 const css=document.createElement('link');css.rel='stylesheet';css.href='https://unpkg.com/vis-network/styles/vis-network.min.css';document.head.appendChild(css);
 main.innerHTML=`<section class="sim"><h1>Evidence Triangulation Studio</h1><p class="objective">Validate a marketing claim by combining appropriately independent synthetic, behavioral, qualitative, quantitative, and expert evidence.</p><div id="network"></div><div class="panel"><strong id="node-title">Select a node</strong><span id="node-detail">Inspect relationships, then explain how evidence travels through the model.</span></div><div class="controls"><button id="previous">Previous</button><button id="next">Next node</button><button id="reset">Reset</button><span>Create: compare structure and evidence.</span></div></section>`;
 const style=document.createElement('style');style.textContent=`*{box-sizing:border-box}.sim{height:700px;background:aliceblue;border:1px solid silver;font-family:Arial,sans-serif;overflow:hidden}h1{height:44px;margin:0;padding:10px 18px 4px;text-align:center;color:midnightblue;font-size:23px}.objective{height:62px;margin:0 24px;padding:8px 14px;background:white;border:1px solid silver;border-radius:8px;font-size:15px;line-height:1.35}#network{height:430px;margin:8px 18px;background:white;border:1px solid silver;border-radius:8px}.panel{height:80px;margin:0 18px;padding:10px 14px;background:white;border:1px solid steelblue;border-radius:8px;display:flex;flex-direction:column;gap:6px;font-size:15px}.panel strong{color:midnightblue;font-size:17px}.controls{height:58px;padding:9px 18px;display:flex;gap:10px;align-items:center;background:white;border-top:1px solid silver}button{padding:7px 12px}.controls span{margin-left:auto;color:dimgray;font-size:14px}`;document.head.appendChild(style);
 const nodeData=[{"id": 1, "label": "Evidence Triangulation Studio", "title": "Evidence Triangulation Studio", "x": -260, "y": -130}, {"id": 2, "label": "Node Types Claim Synthetic", "title": "Node types: Claim, Synthetic Finding, Interview Theme, Survey Result, Behavioral Metric, Market Source, Expert Review, Assumption, and Limitation.", "x": 0, "y": -190}, {"id": 3, "label": "Node Properties Show Owner", "title": "Node properties show owner, date, method, and independence group.", "x": 260, "y": -130}, {"id": 4, "label": "Edges Supports Contradicts Shares", "title": "Edges: SUPPORTS, CONTRADICTS, SHARES_SOURCE_WITH, LIMITED_BY, and REQUIRES_VALIDATION.", "x": -180, "y": 100}, {"id": 5, "label": "Clicking An Edge Explains", "title": "Clicking an edge explains its evidentiary meaning.", "x": 180, "y": 100}, {"id": 6, "label": "Learners Build Support Network", "title": "Learners build a support network for one of four claims.", "x": 0, "y": 220}],edgeData=[{"from": 1, "to": 2, "label": "informs"}, {"from": 2, "to": 3, "label": "informs"}, {"from": 3, "to": 4, "label": "informs"}, {"from": 4, "to": 5, "label": "informs"}, {"from": 5, "to": 6, "label": "informs"}, {"from": 1, "to": 4, "label": "constrains"}];
 const nodes=new vis.DataSet(nodeData.map((n,i)=>({...n,shape:'box',margin:12,color:{background:['lightblue','lightcyan','moccasin','thistle','honeydew','lavender'][i],border:['steelblue','teal','darkorange','mediumpurple','seagreen','slateblue'][i]}})));
 const edges=new vis.DataSet(edgeData.map((e,i)=>({id:i+1,...e,arrows:'to',font:{size:13,align:'middle'},color:{color:'slategray'}})));
 const network=new vis.Network(document.getElementById('network'),{nodes,edges},{layout:{improvedLayout:false},physics:{enabled:false},interaction:{zoomView:false,dragView:false,dragNodes:false,navigationButtons:true,keyboard:{enabled:true,bindToWindow:false}},nodes:{font:{size:16,face:'Arial'},borderWidth:2},edges:{smooth:{type:'curvedCW',roundness:.12}}});
 let current=-1;function select(i){current=(i+nodeData.length)%nodeData.length;network.selectNodes([nodeData[current].id]);document.getElementById('node-title').textContent=nodeData[current].label;document.getElementById('node-detail').textContent=nodeData[current].title;}
 network.on('selectNode',e=>{const i=nodeData.findIndex(n=>n.id===e.nodes[0]);select(i);});
 document.getElementById('previous').onclick=()=>select(current-1);document.getElementById('next').onclick=()=>select(current+1);document.getElementById('reset').onclick=()=>{current=-1;network.unselectAll();document.getElementById('node-title').textContent='Select a node';document.getElementById('node-detail').textContent='Inspect relationships, then explain how evidence travels through the model.';};
});
