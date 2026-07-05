// Bias Pathway and Control Map
// CANVAS_HEIGHT: 700
// Instructional design notes (generated from the approved specification):
// 01. Bias Pathway and Control Map
// 02. Node types: Source Data, Model, Persona Set, Prompt, Marketing Asset, Raw Response, Aggregation, Researcher, Dashboard, Decision, Bias Risk, and Control.
// 03. Each node shows owner and review status.
// 04. Edges: INFLUENCES, SELECTS, FRAMES, SUMMARIZES, REVIEWS, and MITIGATES.
// 05. Every edge is clickable and explains how bias can travel along it.
// 06. Learners choose a failure scenario, click the suspicious output, and trace upstream paths.
// 07. Bias Pathway and Control Map
// 08. Node types: Source Data, Model, Persona Set, Prompt, Marketing Asset, Raw Response, Aggregation, Researcher, Dashboard, Decision, Bias Risk, and Control.
// 09. Each node shows owner and review status.
// 10. Edges: INFLUENCES, SELECTS, FRAMES, SUMMARIZES, REVIEWS, and MITIGATES.
// 11. Every edge is clickable and explains how bias can travel along it.
// 12. Learners choose a failure scenario, click the suspicious output, and trace upstream paths.
// 13. Bias Pathway and Control Map
// 14. Node types: Source Data, Model, Persona Set, Prompt, Marketing Asset, Raw Response, Aggregation, Researcher, Dashboard, Decision, Bias Risk, and Control.
// 15. Each node shows owner and review status.
// 16. Edges: INFLUENCES, SELECTS, FRAMES, SUMMARIZES, REVIEWS, and MITIGATES.
// 17. Every edge is clickable and explains how bias can travel along it.
// 18. Learners choose a failure scenario, click the suspicious output, and trace upstream paths.
// 19. Bias Pathway and Control Map
// 20. Node types: Source Data, Model, Persona Set, Prompt, Marketing Asset, Raw Response, Aggregation, Researcher, Dashboard, Decision, Bias Risk, and Control.
// 21. Each node shows owner and review status.
// 22. Edges: INFLUENCES, SELECTS, FRAMES, SUMMARIZES, REVIEWS, and MITIGATES.
// 23. Every edge is clickable and explains how bias can travel along it.
// 24. Learners choose a failure scenario, click the suspicious output, and trace upstream paths.
// 25. Bias Pathway and Control Map
// 26. Node types: Source Data, Model, Persona Set, Prompt, Marketing Asset, Raw Response, Aggregation, Researcher, Dashboard, Decision, Bias Risk, and Control.
// 27. Each node shows owner and review status.
// 28. Edges: INFLUENCES, SELECTS, FRAMES, SUMMARIZES, REVIEWS, and MITIGATES.
// 29. Every edge is clickable and explains how bias can travel along it.
// 30. Learners choose a failure scenario, click the suspicious output, and trace upstream paths.
// 31. Bias Pathway and Control Map
// 32. Node types: Source Data, Model, Persona Set, Prompt, Marketing Asset, Raw Response, Aggregation, Researcher, Dashboard, Decision, Bias Risk, and Control.
// 33. Each node shows owner and review status.
// 34. Edges: INFLUENCES, SELECTS, FRAMES, SUMMARIZES, REVIEWS, and MITIGATES.
// 35. Every edge is clickable and explains how bias can travel along it.
// 36. Learners choose a failure scenario, click the suspicious output, and trace upstream paths.
// 37. Bias Pathway and Control Map
// 38. Node types: Source Data, Model, Persona Set, Prompt, Marketing Asset, Raw Response, Aggregation, Researcher, Dashboard, Decision, Bias Risk, and Control.
// 39. Each node shows owner and review status.
// 40. Edges: INFLUENCES, SELECTS, FRAMES, SUMMARIZES, REVIEWS, and MITIGATES.
// 41. Every edge is clickable and explains how bias can travel along it.
// 42. Learners choose a failure scenario, click the suspicious output, and trace upstream paths.
// 43. Bias Pathway and Control Map
// 44. Node types: Source Data, Model, Persona Set, Prompt, Marketing Asset, Raw Response, Aggregation, Researcher, Dashboard, Decision, Bias Risk, and Control.
document.addEventListener('DOMContentLoaded',()=>{
 const main=document.querySelector('main');document.body.style.margin='0';document.body.style.overflow='hidden';const back=document.querySelector('body > a');if(back)back.style.display='none';
 const css=document.createElement('link');css.rel='stylesheet';css.href='https://unpkg.com/vis-network/styles/vis-network.min.css';document.head.appendChild(css);
 main.innerHTML=`<section class="sim"><h1>Bias Pathway and Control Map</h1><p class="objective">Attribute a biased research outcome to model, persona selection, cultural assumptions, researcher interpretation, or automation design and select an appropriate control.</p><div id="network"></div><div class="panel"><strong id="node-title">Select a node</strong><span id="node-detail">Inspect relationships, then explain how evidence travels through the model.</span></div><div class="controls"><button id="previous">Previous</button><button id="next">Next node</button><button id="reset">Reset</button><span>Create: compare structure and evidence.</span></div></section>`;
 const style=document.createElement('style');style.textContent=`*{box-sizing:border-box}.sim{height:700px;background:aliceblue;border:1px solid silver;font-family:Arial,sans-serif;overflow:hidden}h1{height:44px;margin:0;padding:10px 18px 4px;text-align:center;color:midnightblue;font-size:23px}.objective{height:62px;margin:0 24px;padding:8px 14px;background:white;border:1px solid silver;border-radius:8px;font-size:15px;line-height:1.35}#network{height:430px;margin:8px 18px;background:white;border:1px solid silver;border-radius:8px}.panel{height:80px;margin:0 18px;padding:10px 14px;background:white;border:1px solid steelblue;border-radius:8px;display:flex;flex-direction:column;gap:6px;font-size:15px}.panel strong{color:midnightblue;font-size:17px}.controls{height:58px;padding:9px 18px;display:flex;gap:10px;align-items:center;background:white;border-top:1px solid silver}button{padding:7px 12px}.controls span{margin-left:auto;color:dimgray;font-size:14px}`;document.head.appendChild(style);
 const nodeData=[{"id": 1, "label": "Bias Pathway And Control", "title": "Bias Pathway and Control Map", "x": -260, "y": -130}, {"id": 2, "label": "Node Types Source Data", "title": "Node types: Source Data, Model, Persona Set, Prompt, Marketing Asset, Raw Response, Aggregation, Researcher, Dashboard, Decision, Bias Risk, and Control.", "x": 0, "y": -190}, {"id": 3, "label": "Each Node Shows Owner", "title": "Each node shows owner and review status.", "x": 260, "y": -130}, {"id": 4, "label": "Edges Influences Selects Frames", "title": "Edges: INFLUENCES, SELECTS, FRAMES, SUMMARIZES, REVIEWS, and MITIGATES.", "x": -180, "y": 100}, {"id": 5, "label": "Every Edge Is Clickable", "title": "Every edge is clickable and explains how bias can travel along it.", "x": 180, "y": 100}, {"id": 6, "label": "Learners Choose Failure Scenario", "title": "Learners choose a failure scenario, click the suspicious output, and trace upstream paths.", "x": 0, "y": 220}],edgeData=[{"from": 1, "to": 2, "label": "informs"}, {"from": 2, "to": 3, "label": "informs"}, {"from": 3, "to": 4, "label": "informs"}, {"from": 4, "to": 5, "label": "informs"}, {"from": 5, "to": 6, "label": "informs"}, {"from": 1, "to": 4, "label": "constrains"}];
 const nodes=new vis.DataSet(nodeData.map((n,i)=>({...n,shape:'box',margin:12,color:{background:['lightblue','lightcyan','moccasin','thistle','honeydew','lavender'][i],border:['steelblue','teal','darkorange','mediumpurple','seagreen','slateblue'][i]}})));
 const edges=new vis.DataSet(edgeData.map((e,i)=>({id:i+1,...e,arrows:'to',font:{size:13,align:'middle'},color:{color:'slategray'}})));
 const network=new vis.Network(document.getElementById('network'),{nodes,edges},{layout:{improvedLayout:false},physics:{enabled:false},interaction:{zoomView:false,dragView:false,dragNodes:false,navigationButtons:true,keyboard:{enabled:true,bindToWindow:false}},nodes:{font:{size:16,face:'Arial'},borderWidth:2},edges:{smooth:{type:'curvedCW',roundness:.12}}});
 let current=-1;function select(i){current=(i+nodeData.length)%nodeData.length;network.selectNodes([nodeData[current].id]);document.getElementById('node-title').textContent=nodeData[current].label;document.getElementById('node-detail').textContent=nodeData[current].title;}
 network.on('selectNode',e=>{const i=nodeData.findIndex(n=>n.id===e.nodes[0]);select(i);});
 document.getElementById('previous').onclick=()=>select(current-1);document.getElementById('next').onclick=()=>select(current+1);document.getElementById('reset').onclick=()=>{current=-1;network.unselectAll();document.getElementById('node-title').textContent='Select a node';document.getElementById('node-detail').textContent='Inspect relationships, then explain how evidence travels through the model.';};
});
