// Persona Evaluation Knowledge Graph Builder
// CANVAS_HEIGHT: 700
// Instructional design notes (generated from the approved specification):
// 01. Persona Evaluation Knowledge Graph Builder
// 02. Learners add typed nodes and relationships, validate direction and required properties, run sample queries, and inspect every evidence path.
// 03. Visual design: Node color and shape indicate type; edge labels remain visible on selection.
// 04. Side panel shows properties, source, confidence, and version.
// 05. The builder flags duplicate nodes, vague relationships, unsupported reactions, circular recommendation logic, and missing provenance.
// 06. Zoom, pan, drag, keyboard traversal, text triple view, and resize handling.
// 07. Persona Evaluation Knowledge Graph Builder
// 08. Learners add typed nodes and relationships, validate direction and required properties, run sample queries, and inspect every evidence path.
// 09. Visual design: Node color and shape indicate type; edge labels remain visible on selection.
// 10. Side panel shows properties, source, confidence, and version.
// 11. The builder flags duplicate nodes, vague relationships, unsupported reactions, circular recommendation logic, and missing provenance.
// 12. Zoom, pan, drag, keyboard traversal, text triple view, and resize handling.
// 13. Persona Evaluation Knowledge Graph Builder
// 14. Learners add typed nodes and relationships, validate direction and required properties, run sample queries, and inspect every evidence path.
// 15. Visual design: Node color and shape indicate type; edge labels remain visible on selection.
// 16. Side panel shows properties, source, confidence, and version.
// 17. The builder flags duplicate nodes, vague relationships, unsupported reactions, circular recommendation logic, and missing provenance.
// 18. Zoom, pan, drag, keyboard traversal, text triple view, and resize handling.
// 19. Persona Evaluation Knowledge Graph Builder
// 20. Learners add typed nodes and relationships, validate direction and required properties, run sample queries, and inspect every evidence path.
// 21. Visual design: Node color and shape indicate type; edge labels remain visible on selection.
// 22. Side panel shows properties, source, confidence, and version.
// 23. The builder flags duplicate nodes, vague relationships, unsupported reactions, circular recommendation logic, and missing provenance.
// 24. Zoom, pan, drag, keyboard traversal, text triple view, and resize handling.
// 25. Persona Evaluation Knowledge Graph Builder
// 26. Learners add typed nodes and relationships, validate direction and required properties, run sample queries, and inspect every evidence path.
// 27. Visual design: Node color and shape indicate type; edge labels remain visible on selection.
// 28. Side panel shows properties, source, confidence, and version.
// 29. The builder flags duplicate nodes, vague relationships, unsupported reactions, circular recommendation logic, and missing provenance.
// 30. Zoom, pan, drag, keyboard traversal, text triple view, and resize handling.
// 31. Persona Evaluation Knowledge Graph Builder
// 32. Learners add typed nodes and relationships, validate direction and required properties, run sample queries, and inspect every evidence path.
// 33. Visual design: Node color and shape indicate type; edge labels remain visible on selection.
// 34. Side panel shows properties, source, confidence, and version.
// 35. The builder flags duplicate nodes, vague relationships, unsupported reactions, circular recommendation logic, and missing provenance.
// 36. Zoom, pan, drag, keyboard traversal, text triple view, and resize handling.
// 37. Persona Evaluation Knowledge Graph Builder
// 38. Learners add typed nodes and relationships, validate direction and required properties, run sample queries, and inspect every evidence path.
// 39. Visual design: Node color and shape indicate type; edge labels remain visible on selection.
// 40. Side panel shows properties, source, confidence, and version.
// 41. The builder flags duplicate nodes, vague relationships, unsupported reactions, circular recommendation logic, and missing provenance.
// 42. Zoom, pan, drag, keyboard traversal, text triple view, and resize handling.
// 43. Persona Evaluation Knowledge Graph Builder
// 44. Learners add typed nodes and relationships, validate direction and required properties, run sample queries, and inspect every evidence path.
document.addEventListener('DOMContentLoaded',()=>{
 const main=document.querySelector('main');document.body.style.margin='0';document.body.style.overflow='hidden';const back=document.querySelector('body > a');if(back)back.style.display='none';
 const css=document.createElement('link');css.rel='stylesheet';css.href='https://unpkg.com/vis-network/styles/vis-network.min.css';document.head.appendChild(css);
 main.innerHTML=`<section class="sim"><h1>Persona Evaluation Knowledge Graph Builder</h1><p class="objective">Construct a provenance-rich evaluation graph linking personas, assets, goals, pain points, reactions, evidence, risks, and recommendations.</p><div id="network"></div><div class="panel"><strong id="node-title">Select a node</strong><span id="node-detail">Inspect relationships, then explain how evidence travels through the model.</span></div><div class="controls"><button id="previous">Previous</button><button id="next">Next node</button><button id="reset">Reset</button><span>Create: compare structure and evidence.</span></div></section>`;
 const style=document.createElement('style');style.textContent=`*{box-sizing:border-box}.sim{height:700px;background:aliceblue;border:1px solid silver;font-family:Arial,sans-serif;overflow:hidden}h1{height:44px;margin:0;padding:10px 18px 4px;text-align:center;color:midnightblue;font-size:23px}.objective{height:62px;margin:0 24px;padding:8px 14px;background:white;border:1px solid silver;border-radius:8px;font-size:15px;line-height:1.35}#network{height:430px;margin:8px 18px;background:white;border:1px solid silver;border-radius:8px}.panel{height:80px;margin:0 18px;padding:10px 14px;background:white;border:1px solid steelblue;border-radius:8px;display:flex;flex-direction:column;gap:6px;font-size:15px}.panel strong{color:midnightblue;font-size:17px}.controls{height:58px;padding:9px 18px;display:flex;gap:10px;align-items:center;background:white;border-top:1px solid silver}button{padding:7px 12px}.controls span{margin-left:auto;color:dimgray;font-size:14px}`;document.head.appendChild(style);
 const nodeData=[{"id": 1, "label": "Persona Evaluation Knowledge Graph", "title": "Persona Evaluation Knowledge Graph Builder", "x": -260, "y": -130}, {"id": 2, "label": "Learners Add Typed Nodes", "title": "Learners add typed nodes and relationships, validate direction and required properties, run sample queries, and inspect every evidence path.", "x": 0, "y": -190}, {"id": 3, "label": "Visual Design Node Color", "title": "Visual design: Node color and shape indicate type; edge labels remain visible on selection.", "x": 260, "y": -130}, {"id": 4, "label": "Side Panel Shows Properties", "title": "Side panel shows properties, source, confidence, and version.", "x": -180, "y": 100}, {"id": 5, "label": "The Builder Flags Duplicate", "title": "The builder flags duplicate nodes, vague relationships, unsupported reactions, circular recommendation logic, and missing provenance.", "x": 180, "y": 100}, {"id": 6, "label": "Zoom Pan Drag Keyboard", "title": "Zoom, pan, drag, keyboard traversal, text triple view, and resize handling.", "x": 0, "y": 220}],edgeData=[{"from": 1, "to": 2, "label": "informs"}, {"from": 2, "to": 3, "label": "informs"}, {"from": 3, "to": 4, "label": "informs"}, {"from": 4, "to": 5, "label": "informs"}, {"from": 5, "to": 6, "label": "informs"}, {"from": 1, "to": 4, "label": "constrains"}];
 const nodes=new vis.DataSet(nodeData.map((n,i)=>({...n,shape:'box',margin:12,color:{background:['lightblue','lightcyan','moccasin','thistle','honeydew','lavender'][i],border:['steelblue','teal','darkorange','mediumpurple','seagreen','slateblue'][i]}})));
 const edges=new vis.DataSet(edgeData.map((e,i)=>({id:i+1,...e,arrows:'to',font:{size:13,align:'middle'},color:{color:'slategray'}})));
 const network=new vis.Network(document.getElementById('network'),{nodes,edges},{layout:{improvedLayout:false},physics:{enabled:false},interaction:{zoomView:false,dragView:false,dragNodes:false,navigationButtons:true,keyboard:{enabled:true,bindToWindow:false}},nodes:{font:{size:16,face:'Arial'},borderWidth:2},edges:{smooth:{type:'curvedCW',roundness:.12}}});
 let current=-1;function select(i){current=(i+nodeData.length)%nodeData.length;network.selectNodes([nodeData[current].id]);document.getElementById('node-title').textContent=nodeData[current].label;document.getElementById('node-detail').textContent=nodeData[current].title;}
 network.on('selectNode',e=>{const i=nodeData.findIndex(n=>n.id===e.nodes[0]);select(i);});
 document.getElementById('previous').onclick=()=>select(current-1);document.getElementById('next').onclick=()=>select(current+1);document.getElementById('reset').onclick=()=>{current=-1;network.unselectAll();document.getElementById('node-title').textContent='Select a node';document.getElementById('node-detail').textContent='Inspect relationships, then explain how evidence travels through the model.';};
});
