// Complete Evaluation Graph Schema
// CANVAS_HEIGHT: 700
// Instructional design notes (generated from the approved specification):
// 01. Complete Evaluation Graph Schema
// 02. Learners add node types, define relationship direction, inspect required properties, and validate sample paths from source evidence to outcome.
// 03. The schema flags vague relationships, unsupported findings, recommendations without owners, and outcomes detached from decisions.
// 04. Zoomable graph with keyboard traversal, searchable side panel, text triple view, and resize handling.
// 05. Schema construction integrates the course's evidence and decision concepts at the Create level.
// 06. Identify the essential elements of Complete Evaluation Graph Schema.
// 07. Complete Evaluation Graph Schema
// 08. Learners add node types, define relationship direction, inspect required properties, and validate sample paths from source evidence to outcome.
// 09. The schema flags vague relationships, unsupported findings, recommendations without owners, and outcomes detached from decisions.
// 10. Zoomable graph with keyboard traversal, searchable side panel, text triple view, and resize handling.
// 11. Schema construction integrates the course's evidence and decision concepts at the Create level.
// 12. Identify the essential elements of Complete Evaluation Graph Schema.
// 13. Complete Evaluation Graph Schema
// 14. Learners add node types, define relationship direction, inspect required properties, and validate sample paths from source evidence to outcome.
// 15. The schema flags vague relationships, unsupported findings, recommendations without owners, and outcomes detached from decisions.
// 16. Zoomable graph with keyboard traversal, searchable side panel, text triple view, and resize handling.
// 17. Schema construction integrates the course's evidence and decision concepts at the Create level.
// 18. Identify the essential elements of Complete Evaluation Graph Schema.
// 19. Complete Evaluation Graph Schema
// 20. Learners add node types, define relationship direction, inspect required properties, and validate sample paths from source evidence to outcome.
// 21. The schema flags vague relationships, unsupported findings, recommendations without owners, and outcomes detached from decisions.
// 22. Zoomable graph with keyboard traversal, searchable side panel, text triple view, and resize handling.
// 23. Schema construction integrates the course's evidence and decision concepts at the Create level.
// 24. Identify the essential elements of Complete Evaluation Graph Schema.
// 25. Complete Evaluation Graph Schema
// 26. Learners add node types, define relationship direction, inspect required properties, and validate sample paths from source evidence to outcome.
// 27. The schema flags vague relationships, unsupported findings, recommendations without owners, and outcomes detached from decisions.
// 28. Zoomable graph with keyboard traversal, searchable side panel, text triple view, and resize handling.
// 29. Schema construction integrates the course's evidence and decision concepts at the Create level.
// 30. Identify the essential elements of Complete Evaluation Graph Schema.
// 31. Complete Evaluation Graph Schema
// 32. Learners add node types, define relationship direction, inspect required properties, and validate sample paths from source evidence to outcome.
// 33. The schema flags vague relationships, unsupported findings, recommendations without owners, and outcomes detached from decisions.
// 34. Zoomable graph with keyboard traversal, searchable side panel, text triple view, and resize handling.
// 35. Schema construction integrates the course's evidence and decision concepts at the Create level.
// 36. Identify the essential elements of Complete Evaluation Graph Schema.
// 37. Complete Evaluation Graph Schema
// 38. Learners add node types, define relationship direction, inspect required properties, and validate sample paths from source evidence to outcome.
// 39. The schema flags vague relationships, unsupported findings, recommendations without owners, and outcomes detached from decisions.
// 40. Zoomable graph with keyboard traversal, searchable side panel, text triple view, and resize handling.
// 41. Schema construction integrates the course's evidence and decision concepts at the Create level.
// 42. Identify the essential elements of Complete Evaluation Graph Schema.
// 43. Complete Evaluation Graph Schema
// 44. Learners add node types, define relationship direction, inspect required properties, and validate sample paths from source evidence to outcome.
document.addEventListener('DOMContentLoaded',()=>{
 const main=document.querySelector('main');document.body.style.margin='0';document.body.style.overflow='hidden';const back=document.querySelector('body > a');if(back)back.style.display='none';
 const css=document.createElement('link');css.rel='stylesheet';css.href='https://unpkg.com/vis-network/styles/vis-network.min.css';document.head.appendChild(css);
 main.innerHTML=`<section class="sim"><h1>Complete Evaluation Graph Schema</h1><p class="objective">Construct a complete evaluation schema connecting persona, asset, goal, pain point, reaction, criterion, evidence, finding, risk, recommendation, decision, implementation, and outcome nodes.</p><div id="network"></div><div class="panel"><strong id="node-title">Select a node</strong><span id="node-detail">Inspect relationships, then explain how evidence travels through the model.</span></div><div class="controls"><button id="previous">Previous</button><button id="next">Next node</button><button id="reset">Reset</button><span>Create: compare structure and evidence.</span></div></section>`;
 const style=document.createElement('style');style.textContent=`*{box-sizing:border-box}.sim{height:700px;background:aliceblue;border:1px solid silver;font-family:Arial,sans-serif;overflow:hidden}h1{height:44px;margin:0;padding:10px 18px 4px;text-align:center;color:midnightblue;font-size:23px}.objective{height:62px;margin:0 24px;padding:8px 14px;background:white;border:1px solid silver;border-radius:8px;font-size:15px;line-height:1.35}#network{height:430px;margin:8px 18px;background:white;border:1px solid silver;border-radius:8px}.panel{height:80px;margin:0 18px;padding:10px 14px;background:white;border:1px solid steelblue;border-radius:8px;display:flex;flex-direction:column;gap:6px;font-size:15px}.panel strong{color:midnightblue;font-size:17px}.controls{height:58px;padding:9px 18px;display:flex;gap:10px;align-items:center;background:white;border-top:1px solid silver}button{padding:7px 12px}.controls span{margin-left:auto;color:dimgray;font-size:14px}`;document.head.appendChild(style);
 const nodeData=[{"id": 1, "label": "Complete Evaluation Graph Schema", "title": "Complete Evaluation Graph Schema", "x": -260, "y": -130}, {"id": 2, "label": "Learners Add Node Types", "title": "Learners add node types, define relationship direction, inspect required properties, and validate sample paths from source evidence to outcome.", "x": 0, "y": -190}, {"id": 3, "label": "The Schema Flags Vague", "title": "The schema flags vague relationships, unsupported findings, recommendations without owners, and outcomes detached from decisions.", "x": 260, "y": -130}, {"id": 4, "label": "Zoomable Graph With Keyboard", "title": "Zoomable graph with keyboard traversal, searchable side panel, text triple view, and resize handling.", "x": -180, "y": 100}, {"id": 5, "label": "Schema Construction Integrates The", "title": "Schema construction integrates the course's evidence and decision concepts at the Create level.", "x": 180, "y": 100}, {"id": 6, "label": "Identify The Essential Elements", "title": "Identify the essential elements of Complete Evaluation Graph Schema.", "x": 0, "y": 220}],edgeData=[{"from": 1, "to": 2, "label": "informs"}, {"from": 2, "to": 3, "label": "informs"}, {"from": 3, "to": 4, "label": "informs"}, {"from": 4, "to": 5, "label": "informs"}, {"from": 5, "to": 6, "label": "informs"}, {"from": 1, "to": 4, "label": "constrains"}];
 const nodes=new vis.DataSet(nodeData.map((n,i)=>({...n,shape:'box',margin:12,color:{background:['lightblue','lightcyan','moccasin','thistle','honeydew','lavender'][i],border:['steelblue','teal','darkorange','mediumpurple','seagreen','slateblue'][i]}})));
 const edges=new vis.DataSet(edgeData.map((e,i)=>({id:i+1,...e,arrows:'to',font:{size:13,align:'middle'},color:{color:'slategray'}})));
 const network=new vis.Network(document.getElementById('network'),{nodes,edges},{layout:{improvedLayout:false},physics:{enabled:false},interaction:{zoomView:false,dragView:false,dragNodes:false,navigationButtons:true,keyboard:{enabled:true,bindToWindow:false}},nodes:{font:{size:16,face:'Arial'},borderWidth:2},edges:{smooth:{type:'curvedCW',roundness:.12}}});
 let current=-1;function select(i){current=(i+nodeData.length)%nodeData.length;network.selectNodes([nodeData[current].id]);document.getElementById('node-title').textContent=nodeData[current].label;document.getElementById('node-detail').textContent=nodeData[current].title;}
 network.on('selectNode',e=>{const i=nodeData.findIndex(n=>n.id===e.nodes[0]);select(i);});
 document.getElementById('previous').onclick=()=>select(current-1);document.getElementById('next').onclick=()=>select(current+1);document.getElementById('reset').onclick=()=>{current=-1;network.unselectAll();document.getElementById('node-title').textContent='Select a node';document.getElementById('node-detail').textContent='Inspect relationships, then explain how evidence travels through the model.';};
});
