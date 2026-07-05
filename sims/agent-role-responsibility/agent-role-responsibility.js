// Agent Role and Responsibility Map
// CANVAS_HEIGHT: 700
// Instructional design notes (generated from the approved specification):
// 01. Agent Role and Responsibility Map
// 02. Node types: Agent Role, Goal, Input, Tool, Output, Decision, Human Owner, and Boundary.
// 03. Edges show RECEIVES, PERFORMS, PRODUCES, REVIEWS, APPROVES, and ESCALATES_TO.
// 04. Learners assign responsibilities in a workflow.
// 05. The graph flags missing owners, two roles controlling one decision, persona-to-recommendation shortcuts, and outputs without reviewers.
// 06. Selectable graph with zoom, drag, keyboard traversal, side panel, text matrix, and resize handling.
// 07. Agent Role and Responsibility Map
// 08. Node types: Agent Role, Goal, Input, Tool, Output, Decision, Human Owner, and Boundary.
// 09. Edges show RECEIVES, PERFORMS, PRODUCES, REVIEWS, APPROVES, and ESCALATES_TO.
// 10. Learners assign responsibilities in a workflow.
// 11. The graph flags missing owners, two roles controlling one decision, persona-to-recommendation shortcuts, and outputs without reviewers.
// 12. Selectable graph with zoom, drag, keyboard traversal, side panel, text matrix, and resize handling.
// 13. Agent Role and Responsibility Map
// 14. Node types: Agent Role, Goal, Input, Tool, Output, Decision, Human Owner, and Boundary.
// 15. Edges show RECEIVES, PERFORMS, PRODUCES, REVIEWS, APPROVES, and ESCALATES_TO.
// 16. Learners assign responsibilities in a workflow.
// 17. The graph flags missing owners, two roles controlling one decision, persona-to-recommendation shortcuts, and outputs without reviewers.
// 18. Selectable graph with zoom, drag, keyboard traversal, side panel, text matrix, and resize handling.
// 19. Agent Role and Responsibility Map
// 20. Node types: Agent Role, Goal, Input, Tool, Output, Decision, Human Owner, and Boundary.
// 21. Edges show RECEIVES, PERFORMS, PRODUCES, REVIEWS, APPROVES, and ESCALATES_TO.
// 22. Learners assign responsibilities in a workflow.
// 23. The graph flags missing owners, two roles controlling one decision, persona-to-recommendation shortcuts, and outputs without reviewers.
// 24. Selectable graph with zoom, drag, keyboard traversal, side panel, text matrix, and resize handling.
// 25. Agent Role and Responsibility Map
// 26. Node types: Agent Role, Goal, Input, Tool, Output, Decision, Human Owner, and Boundary.
// 27. Edges show RECEIVES, PERFORMS, PRODUCES, REVIEWS, APPROVES, and ESCALATES_TO.
// 28. Learners assign responsibilities in a workflow.
// 29. The graph flags missing owners, two roles controlling one decision, persona-to-recommendation shortcuts, and outputs without reviewers.
// 30. Selectable graph with zoom, drag, keyboard traversal, side panel, text matrix, and resize handling.
// 31. Agent Role and Responsibility Map
// 32. Node types: Agent Role, Goal, Input, Tool, Output, Decision, Human Owner, and Boundary.
// 33. Edges show RECEIVES, PERFORMS, PRODUCES, REVIEWS, APPROVES, and ESCALATES_TO.
// 34. Learners assign responsibilities in a workflow.
// 35. The graph flags missing owners, two roles controlling one decision, persona-to-recommendation shortcuts, and outputs without reviewers.
// 36. Selectable graph with zoom, drag, keyboard traversal, side panel, text matrix, and resize handling.
// 37. Agent Role and Responsibility Map
// 38. Node types: Agent Role, Goal, Input, Tool, Output, Decision, Human Owner, and Boundary.
// 39. Edges show RECEIVES, PERFORMS, PRODUCES, REVIEWS, APPROVES, and ESCALATES_TO.
// 40. Learners assign responsibilities in a workflow.
// 41. The graph flags missing owners, two roles controlling one decision, persona-to-recommendation shortcuts, and outputs without reviewers.
// 42. Selectable graph with zoom, drag, keyboard traversal, side panel, text matrix, and resize handling.
// 43. Agent Role and Responsibility Map
// 44. Node types: Agent Role, Goal, Input, Tool, Output, Decision, Human Owner, and Boundary.
document.addEventListener('DOMContentLoaded',()=>{
 const main=document.querySelector('main');document.body.style.margin='0';document.body.style.overflow='hidden';const back=document.querySelector('body > a');if(back)back.style.display='none';
 const css=document.createElement('link');css.rel='stylesheet';css.href='https://unpkg.com/vis-network/styles/vis-network.min.css';document.head.appendChild(css);
 main.innerHTML=`<section class="sim"><h1>Agent Role and Responsibility Map</h1><p class="objective">Differentiate persona, moderator, skeptic, expert reviewer, and synthesis responsibilities and detect conflicting authority.</p><div id="network"></div><div class="panel"><strong id="node-title">Select a node</strong><span id="node-detail">Inspect relationships, then explain how evidence travels through the model.</span></div><div class="controls"><button id="previous">Previous</button><button id="next">Next node</button><button id="reset">Reset</button><span>Create: compare structure and evidence.</span></div></section>`;
 const style=document.createElement('style');style.textContent=`*{box-sizing:border-box}.sim{height:700px;background:aliceblue;border:1px solid silver;font-family:Arial,sans-serif;overflow:hidden}h1{height:44px;margin:0;padding:10px 18px 4px;text-align:center;color:midnightblue;font-size:23px}.objective{height:62px;margin:0 24px;padding:8px 14px;background:white;border:1px solid silver;border-radius:8px;font-size:15px;line-height:1.35}#network{height:430px;margin:8px 18px;background:white;border:1px solid silver;border-radius:8px}.panel{height:80px;margin:0 18px;padding:10px 14px;background:white;border:1px solid steelblue;border-radius:8px;display:flex;flex-direction:column;gap:6px;font-size:15px}.panel strong{color:midnightblue;font-size:17px}.controls{height:58px;padding:9px 18px;display:flex;gap:10px;align-items:center;background:white;border-top:1px solid silver}button{padding:7px 12px}.controls span{margin-left:auto;color:dimgray;font-size:14px}`;document.head.appendChild(style);
 const nodeData=[{"id": 1, "label": "Agent Role And Responsibility", "title": "Agent Role and Responsibility Map", "x": -260, "y": -130}, {"id": 2, "label": "Node Types Agent Role", "title": "Node types: Agent Role, Goal, Input, Tool, Output, Decision, Human Owner, and Boundary.", "x": 0, "y": -190}, {"id": 3, "label": "Edges Show Receives Performs", "title": "Edges show RECEIVES, PERFORMS, PRODUCES, REVIEWS, APPROVES, and ESCALATES_TO.", "x": 260, "y": -130}, {"id": 4, "label": "Learners Assign Responsibilities In", "title": "Learners assign responsibilities in a workflow.", "x": -180, "y": 100}, {"id": 5, "label": "The Graph Flags Missing", "title": "The graph flags missing owners, two roles controlling one decision, persona-to-recommendation shortcuts, and outputs without reviewers.", "x": 180, "y": 100}, {"id": 6, "label": "Selectable Graph With Zoom", "title": "Selectable graph with zoom, drag, keyboard traversal, side panel, text matrix, and resize handling.", "x": 0, "y": 220}],edgeData=[{"from": 1, "to": 2, "label": "informs"}, {"from": 2, "to": 3, "label": "informs"}, {"from": 3, "to": 4, "label": "informs"}, {"from": 4, "to": 5, "label": "informs"}, {"from": 5, "to": 6, "label": "informs"}, {"from": 1, "to": 4, "label": "constrains"}];
 const nodes=new vis.DataSet(nodeData.map((n,i)=>({...n,shape:'box',margin:12,color:{background:['lightblue','lightcyan','moccasin','thistle','honeydew','lavender'][i],border:['steelblue','teal','darkorange','mediumpurple','seagreen','slateblue'][i]}})));
 const edges=new vis.DataSet(edgeData.map((e,i)=>({id:i+1,...e,arrows:'to',font:{size:13,align:'middle'},color:{color:'slategray'}})));
 const network=new vis.Network(document.getElementById('network'),{nodes,edges},{layout:{improvedLayout:false},physics:{enabled:false},interaction:{zoomView:false,dragView:false,dragNodes:false,navigationButtons:true,keyboard:{enabled:true,bindToWindow:false}},nodes:{font:{size:16,face:'Arial'},borderWidth:2},edges:{smooth:{type:'curvedCW',roundness:.12}}});
 let current=-1;function select(i){current=(i+nodeData.length)%nodeData.length;network.selectNodes([nodeData[current].id]);document.getElementById('node-title').textContent=nodeData[current].label;document.getElementById('node-detail').textContent=nodeData[current].title;}
 network.on('selectNode',e=>{const i=nodeData.findIndex(n=>n.id===e.nodes[0]);select(i);});
 document.getElementById('previous').onclick=()=>select(current-1);document.getElementById('next').onclick=()=>select(current+1);document.getElementById('reset').onclick=()=>{current=-1;network.unselectAll();document.getElementById('node-title').textContent='Select a node';document.getElementById('node-detail').textContent='Inspect relationships, then explain how evidence travels through the model.';};
});
