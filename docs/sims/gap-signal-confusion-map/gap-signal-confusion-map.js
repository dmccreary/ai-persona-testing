// Gap, Signal, and Confusion Map
// CANVAS_HEIGHT: 700
// Instructional design notes (generated from the approved specification):
// 01. Gap, Signal, and Confusion Map
// 02. Node types: Intended Message, Asset Element, Persona Interpretation, Evidence, Trust Signal, Confusion Point, Messaging Gap, Credibility Gap, and Action.
// 03. Select a gap to highlight its causal path, attach missing proof or revised message, and compare persona responses.
// 04. Every edge reveals rationale.
// 05. The graph flags unsupported fixes and trust signals unrelated to the identified gap.
// 06. Zoomable graph with keyboard traversal, side panel, text path view, and resize handling.
// 07. Gap, Signal, and Confusion Map
// 08. Node types: Intended Message, Asset Element, Persona Interpretation, Evidence, Trust Signal, Confusion Point, Messaging Gap, Credibility Gap, and Action.
// 09. Select a gap to highlight its causal path, attach missing proof or revised message, and compare persona responses.
// 10. Every edge reveals rationale.
// 11. The graph flags unsupported fixes and trust signals unrelated to the identified gap.
// 12. Zoomable graph with keyboard traversal, side panel, text path view, and resize handling.
// 13. Gap, Signal, and Confusion Map
// 14. Node types: Intended Message, Asset Element, Persona Interpretation, Evidence, Trust Signal, Confusion Point, Messaging Gap, Credibility Gap, and Action.
// 15. Select a gap to highlight its causal path, attach missing proof or revised message, and compare persona responses.
// 16. Every edge reveals rationale.
// 17. The graph flags unsupported fixes and trust signals unrelated to the identified gap.
// 18. Zoomable graph with keyboard traversal, side panel, text path view, and resize handling.
// 19. Gap, Signal, and Confusion Map
// 20. Node types: Intended Message, Asset Element, Persona Interpretation, Evidence, Trust Signal, Confusion Point, Messaging Gap, Credibility Gap, and Action.
// 21. Select a gap to highlight its causal path, attach missing proof or revised message, and compare persona responses.
// 22. Every edge reveals rationale.
// 23. The graph flags unsupported fixes and trust signals unrelated to the identified gap.
// 24. Zoomable graph with keyboard traversal, side panel, text path view, and resize handling.
// 25. Gap, Signal, and Confusion Map
// 26. Node types: Intended Message, Asset Element, Persona Interpretation, Evidence, Trust Signal, Confusion Point, Messaging Gap, Credibility Gap, and Action.
// 27. Select a gap to highlight its causal path, attach missing proof or revised message, and compare persona responses.
// 28. Every edge reveals rationale.
// 29. The graph flags unsupported fixes and trust signals unrelated to the identified gap.
// 30. Zoomable graph with keyboard traversal, side panel, text path view, and resize handling.
// 31. Gap, Signal, and Confusion Map
// 32. Node types: Intended Message, Asset Element, Persona Interpretation, Evidence, Trust Signal, Confusion Point, Messaging Gap, Credibility Gap, and Action.
// 33. Select a gap to highlight its causal path, attach missing proof or revised message, and compare persona responses.
// 34. Every edge reveals rationale.
// 35. The graph flags unsupported fixes and trust signals unrelated to the identified gap.
// 36. Zoomable graph with keyboard traversal, side panel, text path view, and resize handling.
// 37. Gap, Signal, and Confusion Map
// 38. Node types: Intended Message, Asset Element, Persona Interpretation, Evidence, Trust Signal, Confusion Point, Messaging Gap, Credibility Gap, and Action.
// 39. Select a gap to highlight its causal path, attach missing proof or revised message, and compare persona responses.
// 40. Every edge reveals rationale.
// 41. The graph flags unsupported fixes and trust signals unrelated to the identified gap.
// 42. Zoomable graph with keyboard traversal, side panel, text path view, and resize handling.
// 43. Gap, Signal, and Confusion Map
// 44. Node types: Intended Message, Asset Element, Persona Interpretation, Evidence, Trust Signal, Confusion Point, Messaging Gap, Credibility Gap, and Action.
document.addEventListener('DOMContentLoaded',()=>{
 const main=document.querySelector('main');document.body.style.margin='0';document.body.style.overflow='hidden';const back=document.querySelector('body > a');if(back)back.style.display='none';
 const css=document.createElement('link');css.rel='stylesheet';css.href='https://unpkg.com/vis-network/styles/vis-network.min.css';document.head.appendChild(css);
 main.innerHTML=`<section class="sim"><h1>Gap, Signal, and Confusion Map</h1><p class="objective">Attribute messaging gaps, credibility gaps, trust signals, and confusion points to specific asset evidence, persona context, and consequences.</p><div id="network"></div><div class="panel"><strong id="node-title">Select a node</strong><span id="node-detail">Inspect relationships, then explain how evidence travels through the model.</span></div><div class="controls"><button id="previous">Previous</button><button id="next">Next node</button><button id="reset">Reset</button><span>Create: compare structure and evidence.</span></div></section>`;
 const style=document.createElement('style');style.textContent=`*{box-sizing:border-box}.sim{height:700px;background:aliceblue;border:1px solid silver;font-family:Arial,sans-serif;overflow:hidden}h1{height:44px;margin:0;padding:10px 18px 4px;text-align:center;color:midnightblue;font-size:23px}.objective{height:62px;margin:0 24px;padding:8px 14px;background:white;border:1px solid silver;border-radius:8px;font-size:15px;line-height:1.35}#network{height:430px;margin:8px 18px;background:white;border:1px solid silver;border-radius:8px}.panel{height:80px;margin:0 18px;padding:10px 14px;background:white;border:1px solid steelblue;border-radius:8px;display:flex;flex-direction:column;gap:6px;font-size:15px}.panel strong{color:midnightblue;font-size:17px}.controls{height:58px;padding:9px 18px;display:flex;gap:10px;align-items:center;background:white;border-top:1px solid silver}button{padding:7px 12px}.controls span{margin-left:auto;color:dimgray;font-size:14px}`;document.head.appendChild(style);
 const nodeData=[{"id": 1, "label": "Gap Signal And Confusion", "title": "Gap, Signal, and Confusion Map", "x": -260, "y": -130}, {"id": 2, "label": "Node Types Intended Message", "title": "Node types: Intended Message, Asset Element, Persona Interpretation, Evidence, Trust Signal, Confusion Point, Messaging Gap, Credibility Gap, and Action.", "x": 0, "y": -190}, {"id": 3, "label": "Select Gap To Highlight", "title": "Select a gap to highlight its causal path, attach missing proof or revised message, and compare persona responses.", "x": 260, "y": -130}, {"id": 4, "label": "Every Edge Reveals Rationale", "title": "Every edge reveals rationale.", "x": -180, "y": 100}, {"id": 5, "label": "The Graph Flags Unsupported", "title": "The graph flags unsupported fixes and trust signals unrelated to the identified gap.", "x": 180, "y": 100}, {"id": 6, "label": "Zoomable Graph With Keyboard", "title": "Zoomable graph with keyboard traversal, side panel, text path view, and resize handling.", "x": 0, "y": 220}],edgeData=[{"from": 1, "to": 2, "label": "informs"}, {"from": 2, "to": 3, "label": "informs"}, {"from": 3, "to": 4, "label": "informs"}, {"from": 4, "to": 5, "label": "informs"}, {"from": 5, "to": 6, "label": "informs"}, {"from": 1, "to": 4, "label": "constrains"}];
 const nodes=new vis.DataSet(nodeData.map((n,i)=>({...n,shape:'box',margin:12,color:{background:['lightblue','lightcyan','moccasin','thistle','honeydew','lavender'][i],border:['steelblue','teal','darkorange','mediumpurple','seagreen','slateblue'][i]}})));
 const edges=new vis.DataSet(edgeData.map((e,i)=>({id:i+1,...e,arrows:'to',font:{size:13,align:'middle'},color:{color:'slategray'}})));
 const network=new vis.Network(document.getElementById('network'),{nodes,edges},{layout:{improvedLayout:false},physics:{enabled:false},interaction:{zoomView:false,dragView:false,dragNodes:false,navigationButtons:true,keyboard:{enabled:true,bindToWindow:false}},nodes:{font:{size:16,face:'Arial'},borderWidth:2},edges:{smooth:{type:'curvedCW',roundness:.12}}});
 let current=-1;function select(i){current=(i+nodeData.length)%nodeData.length;network.selectNodes([nodeData[current].id]);document.getElementById('node-title').textContent=nodeData[current].label;document.getElementById('node-detail').textContent=nodeData[current].title;}
 network.on('selectNode',e=>{const i=nodeData.findIndex(n=>n.id===e.nodes[0]);select(i);});
 document.getElementById('previous').onclick=()=>select(current-1);document.getElementById('next').onclick=()=>select(current+1);document.getElementById('reset').onclick=()=>{current=-1;network.unselectAll();document.getElementById('node-title').textContent='Select a node';document.getElementById('node-detail').textContent='Inspect relationships, then explain how evidence travels through the model.';};
});
