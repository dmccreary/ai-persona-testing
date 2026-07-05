// Cross-Channel Campaign Consistency Map
// CANVAS_HEIGHT: 700
// Instructional design notes (generated from the approved specification):
// 01. Cross-Channel Campaign Consistency Map
// 02. Node types: Campaign Goal, Persona, Journey Stage, Advertisement, Social Post, Email, Video, Landing Page, Claim, Proof, and Action.
// 03. Edges: LEADS_TO, EXPRESSES, ADAPTS, SUPPORTS, CONTRADICTS, and TARGETS.
// 04. Every element reveals evidence and version.
// 05. Select a journey path, compare message changes, and flag intentional adaptation or inconsistency.
// 06. The system highlights broken promises and missing proof.
// 07. Cross-Channel Campaign Consistency Map
// 08. Node types: Campaign Goal, Persona, Journey Stage, Advertisement, Social Post, Email, Video, Landing Page, Claim, Proof, and Action.
// 09. Edges: LEADS_TO, EXPRESSES, ADAPTS, SUPPORTS, CONTRADICTS, and TARGETS.
// 10. Every element reveals evidence and version.
// 11. Select a journey path, compare message changes, and flag intentional adaptation or inconsistency.
// 12. The system highlights broken promises and missing proof.
// 13. Cross-Channel Campaign Consistency Map
// 14. Node types: Campaign Goal, Persona, Journey Stage, Advertisement, Social Post, Email, Video, Landing Page, Claim, Proof, and Action.
// 15. Edges: LEADS_TO, EXPRESSES, ADAPTS, SUPPORTS, CONTRADICTS, and TARGETS.
// 16. Every element reveals evidence and version.
// 17. Select a journey path, compare message changes, and flag intentional adaptation or inconsistency.
// 18. The system highlights broken promises and missing proof.
// 19. Cross-Channel Campaign Consistency Map
// 20. Node types: Campaign Goal, Persona, Journey Stage, Advertisement, Social Post, Email, Video, Landing Page, Claim, Proof, and Action.
// 21. Edges: LEADS_TO, EXPRESSES, ADAPTS, SUPPORTS, CONTRADICTS, and TARGETS.
// 22. Every element reveals evidence and version.
// 23. Select a journey path, compare message changes, and flag intentional adaptation or inconsistency.
// 24. The system highlights broken promises and missing proof.
// 25. Cross-Channel Campaign Consistency Map
// 26. Node types: Campaign Goal, Persona, Journey Stage, Advertisement, Social Post, Email, Video, Landing Page, Claim, Proof, and Action.
// 27. Edges: LEADS_TO, EXPRESSES, ADAPTS, SUPPORTS, CONTRADICTS, and TARGETS.
// 28. Every element reveals evidence and version.
// 29. Select a journey path, compare message changes, and flag intentional adaptation or inconsistency.
// 30. The system highlights broken promises and missing proof.
// 31. Cross-Channel Campaign Consistency Map
// 32. Node types: Campaign Goal, Persona, Journey Stage, Advertisement, Social Post, Email, Video, Landing Page, Claim, Proof, and Action.
// 33. Edges: LEADS_TO, EXPRESSES, ADAPTS, SUPPORTS, CONTRADICTS, and TARGETS.
// 34. Every element reveals evidence and version.
// 35. Select a journey path, compare message changes, and flag intentional adaptation or inconsistency.
// 36. The system highlights broken promises and missing proof.
// 37. Cross-Channel Campaign Consistency Map
// 38. Node types: Campaign Goal, Persona, Journey Stage, Advertisement, Social Post, Email, Video, Landing Page, Claim, Proof, and Action.
// 39. Edges: LEADS_TO, EXPRESSES, ADAPTS, SUPPORTS, CONTRADICTS, and TARGETS.
// 40. Every element reveals evidence and version.
// 41. Select a journey path, compare message changes, and flag intentional adaptation or inconsistency.
// 42. The system highlights broken promises and missing proof.
// 43. Cross-Channel Campaign Consistency Map
// 44. Node types: Campaign Goal, Persona, Journey Stage, Advertisement, Social Post, Email, Video, Landing Page, Claim, Proof, and Action.
document.addEventListener('DOMContentLoaded',()=>{
 const main=document.querySelector('main');document.body.style.margin='0';document.body.style.overflow='hidden';const back=document.querySelector('body > a');if(back)back.style.display='none';
 const css=document.createElement('link');css.rel='stylesheet';css.href='https://unpkg.com/vis-network/styles/vis-network.min.css';document.head.appendChild(css);
 main.innerHTML=`<section class="sim"><h1>Cross-Channel Campaign Consistency Map</h1><p class="objective">Compare campaign assets across channels for message continuity, appropriate adaptation, proof, tone, audience, and action.</p><div id="network"></div><div class="panel"><strong id="node-title">Select a node</strong><span id="node-detail">Inspect relationships, then explain how evidence travels through the model.</span></div><div class="controls"><button id="previous">Previous</button><button id="next">Next node</button><button id="reset">Reset</button><span>Create: compare structure and evidence.</span></div></section>`;
 const style=document.createElement('style');style.textContent=`*{box-sizing:border-box}.sim{height:700px;background:aliceblue;border:1px solid silver;font-family:Arial,sans-serif;overflow:hidden}h1{height:44px;margin:0;padding:10px 18px 4px;text-align:center;color:midnightblue;font-size:23px}.objective{height:62px;margin:0 24px;padding:8px 14px;background:white;border:1px solid silver;border-radius:8px;font-size:15px;line-height:1.35}#network{height:430px;margin:8px 18px;background:white;border:1px solid silver;border-radius:8px}.panel{height:80px;margin:0 18px;padding:10px 14px;background:white;border:1px solid steelblue;border-radius:8px;display:flex;flex-direction:column;gap:6px;font-size:15px}.panel strong{color:midnightblue;font-size:17px}.controls{height:58px;padding:9px 18px;display:flex;gap:10px;align-items:center;background:white;border-top:1px solid silver}button{padding:7px 12px}.controls span{margin-left:auto;color:dimgray;font-size:14px}`;document.head.appendChild(style);
 const nodeData=[{"id": 1, "label": "Cross-Channel Campaign Consistency Map", "title": "Cross-Channel Campaign Consistency Map", "x": -260, "y": -130}, {"id": 2, "label": "Node Types Campaign Goal", "title": "Node types: Campaign Goal, Persona, Journey Stage, Advertisement, Social Post, Email, Video, Landing Page, Claim, Proof, and Action.", "x": 0, "y": -190}, {"id": 3, "label": "Edges Leads To Expresses", "title": "Edges: LEADS_TO, EXPRESSES, ADAPTS, SUPPORTS, CONTRADICTS, and TARGETS.", "x": 260, "y": -130}, {"id": 4, "label": "Every Element Reveals Evidence", "title": "Every element reveals evidence and version.", "x": -180, "y": 100}, {"id": 5, "label": "Select Journey Path Compare", "title": "Select a journey path, compare message changes, and flag intentional adaptation or inconsistency.", "x": 180, "y": 100}, {"id": 6, "label": "The System Highlights Broken", "title": "The system highlights broken promises and missing proof.", "x": 0, "y": 220}],edgeData=[{"from": 1, "to": 2, "label": "informs"}, {"from": 2, "to": 3, "label": "informs"}, {"from": 3, "to": 4, "label": "informs"}, {"from": 4, "to": 5, "label": "informs"}, {"from": 5, "to": 6, "label": "informs"}, {"from": 1, "to": 4, "label": "constrains"}];
 const nodes=new vis.DataSet(nodeData.map((n,i)=>({...n,shape:'box',margin:12,color:{background:['lightblue','lightcyan','moccasin','thistle','honeydew','lavender'][i],border:['steelblue','teal','darkorange','mediumpurple','seagreen','slateblue'][i]}})));
 const edges=new vis.DataSet(edgeData.map((e,i)=>({id:i+1,...e,arrows:'to',font:{size:13,align:'middle'},color:{color:'slategray'}})));
 const network=new vis.Network(document.getElementById('network'),{nodes,edges},{layout:{improvedLayout:false},physics:{enabled:false},interaction:{zoomView:false,dragView:false,dragNodes:false,navigationButtons:true,keyboard:{enabled:true,bindToWindow:false}},nodes:{font:{size:16,face:'Arial'},borderWidth:2},edges:{smooth:{type:'curvedCW',roundness:.12}}});
 let current=-1;function select(i){current=(i+nodeData.length)%nodeData.length;network.selectNodes([nodeData[current].id]);document.getElementById('node-title').textContent=nodeData[current].label;document.getElementById('node-detail').textContent=nodeData[current].title;}
 network.on('selectNode',e=>{const i=nodeData.findIndex(n=>n.id===e.nodes[0]);select(i);});
 document.getElementById('previous').onclick=()=>select(current-1);document.getElementById('next').onclick=()=>select(current+1);document.getElementById('reset').onclick=()=>{current=-1;network.unselectAll();document.getElementById('node-title').textContent='Select a node';document.getElementById('node-detail').textContent='Inspect relationships, then explain how evidence travels through the model.';};
});
