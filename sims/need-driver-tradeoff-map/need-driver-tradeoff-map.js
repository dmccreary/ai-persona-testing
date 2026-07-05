// Need and Driver Trade-Off Map
// CANVAS_HEIGHT: 700
// Instructional design notes (generated from the approved specification):
// 01. Need and Driver Trade-Off Map
// 02. Node types: Goal, Emotional Driver, Functional Need, Social Need, Constraint, Marketing Claim, and Evidence.
// 03. Properties show source and confidence.
// 04. Edges: SUPPORTS, CONFLICTS_WITH, REQUIRES, CONSTRAINED_BY, ADDRESSED_BY, and GROUNDED_IN.
// 05. Every node and edge reveals a definition and example when selected.
// 06. Learners build a network for a purchase scenario, then change time pressure or stakeholder involvement.
// 07. Need and Driver Trade-Off Map
// 08. Node types: Goal, Emotional Driver, Functional Need, Social Need, Constraint, Marketing Claim, and Evidence.
// 09. Properties show source and confidence.
// 10. Edges: SUPPORTS, CONFLICTS_WITH, REQUIRES, CONSTRAINED_BY, ADDRESSED_BY, and GROUNDED_IN.
// 11. Every node and edge reveals a definition and example when selected.
// 12. Learners build a network for a purchase scenario, then change time pressure or stakeholder involvement.
// 13. Need and Driver Trade-Off Map
// 14. Node types: Goal, Emotional Driver, Functional Need, Social Need, Constraint, Marketing Claim, and Evidence.
// 15. Properties show source and confidence.
// 16. Edges: SUPPORTS, CONFLICTS_WITH, REQUIRES, CONSTRAINED_BY, ADDRESSED_BY, and GROUNDED_IN.
// 17. Every node and edge reveals a definition and example when selected.
// 18. Learners build a network for a purchase scenario, then change time pressure or stakeholder involvement.
// 19. Need and Driver Trade-Off Map
// 20. Node types: Goal, Emotional Driver, Functional Need, Social Need, Constraint, Marketing Claim, and Evidence.
// 21. Properties show source and confidence.
// 22. Edges: SUPPORTS, CONFLICTS_WITH, REQUIRES, CONSTRAINED_BY, ADDRESSED_BY, and GROUNDED_IN.
// 23. Every node and edge reveals a definition and example when selected.
// 24. Learners build a network for a purchase scenario, then change time pressure or stakeholder involvement.
// 25. Need and Driver Trade-Off Map
// 26. Node types: Goal, Emotional Driver, Functional Need, Social Need, Constraint, Marketing Claim, and Evidence.
// 27. Properties show source and confidence.
// 28. Edges: SUPPORTS, CONFLICTS_WITH, REQUIRES, CONSTRAINED_BY, ADDRESSED_BY, and GROUNDED_IN.
// 29. Every node and edge reveals a definition and example when selected.
// 30. Learners build a network for a purchase scenario, then change time pressure or stakeholder involvement.
// 31. Need and Driver Trade-Off Map
// 32. Node types: Goal, Emotional Driver, Functional Need, Social Need, Constraint, Marketing Claim, and Evidence.
// 33. Properties show source and confidence.
// 34. Edges: SUPPORTS, CONFLICTS_WITH, REQUIRES, CONSTRAINED_BY, ADDRESSED_BY, and GROUNDED_IN.
// 35. Every node and edge reveals a definition and example when selected.
// 36. Learners build a network for a purchase scenario, then change time pressure or stakeholder involvement.
// 37. Need and Driver Trade-Off Map
// 38. Node types: Goal, Emotional Driver, Functional Need, Social Need, Constraint, Marketing Claim, and Evidence.
// 39. Properties show source and confidence.
// 40. Edges: SUPPORTS, CONFLICTS_WITH, REQUIRES, CONSTRAINED_BY, ADDRESSED_BY, and GROUNDED_IN.
// 41. Every node and edge reveals a definition and example when selected.
// 42. Learners build a network for a purchase scenario, then change time pressure or stakeholder involvement.
// 43. Need and Driver Trade-Off Map
// 44. Node types: Goal, Emotional Driver, Functional Need, Social Need, Constraint, Marketing Claim, and Evidence.
document.addEventListener('DOMContentLoaded',()=>{
 const main=document.querySelector('main');document.body.style.margin='0';document.body.style.overflow='hidden';const back=document.querySelector('body > a');if(back)back.style.display='none';
 const css=document.createElement('link');css.rel='stylesheet';css.href='https://unpkg.com/vis-network/styles/vis-network.min.css';document.head.appendChild(css);
 main.innerHTML=`<section class="sim"><h1>Need and Driver Trade-Off Map</h1><p class="objective">Organize emotional drivers, functional needs, and social needs into a causal network that explains a persona's competing priorities.</p><div id="network"></div><div class="panel"><strong id="node-title">Select a node</strong><span id="node-detail">Inspect relationships, then explain how evidence travels through the model.</span></div><div class="controls"><button id="previous">Previous</button><button id="next">Next node</button><button id="reset">Reset</button><span>Create: compare structure and evidence.</span></div></section>`;
 const style=document.createElement('style');style.textContent=`*{box-sizing:border-box}.sim{height:700px;background:aliceblue;border:1px solid silver;font-family:Arial,sans-serif;overflow:hidden}h1{height:44px;margin:0;padding:10px 18px 4px;text-align:center;color:midnightblue;font-size:23px}.objective{height:62px;margin:0 24px;padding:8px 14px;background:white;border:1px solid silver;border-radius:8px;font-size:15px;line-height:1.35}#network{height:430px;margin:8px 18px;background:white;border:1px solid silver;border-radius:8px}.panel{height:80px;margin:0 18px;padding:10px 14px;background:white;border:1px solid steelblue;border-radius:8px;display:flex;flex-direction:column;gap:6px;font-size:15px}.panel strong{color:midnightblue;font-size:17px}.controls{height:58px;padding:9px 18px;display:flex;gap:10px;align-items:center;background:white;border-top:1px solid silver}button{padding:7px 12px}.controls span{margin-left:auto;color:dimgray;font-size:14px}`;document.head.appendChild(style);
 const nodeData=[{"id": 1, "label": "Need And Driver Trade-Off", "title": "Need and Driver Trade-Off Map", "x": -260, "y": -130}, {"id": 2, "label": "Node Types Goal Emotional", "title": "Node types: Goal, Emotional Driver, Functional Need, Social Need, Constraint, Marketing Claim, and Evidence.", "x": 0, "y": -190}, {"id": 3, "label": "Properties Show Source And", "title": "Properties show source and confidence.", "x": 260, "y": -130}, {"id": 4, "label": "Edges Supports Conflicts With", "title": "Edges: SUPPORTS, CONFLICTS_WITH, REQUIRES, CONSTRAINED_BY, ADDRESSED_BY, and GROUNDED_IN.", "x": -180, "y": 100}, {"id": 5, "label": "Every Node And Edge", "title": "Every node and edge reveals a definition and example when selected.", "x": 180, "y": 100}, {"id": 6, "label": "Learners Build Network For", "title": "Learners build a network for a purchase scenario, then change time pressure or stakeholder involvement.", "x": 0, "y": 220}],edgeData=[{"from": 1, "to": 2, "label": "informs"}, {"from": 2, "to": 3, "label": "informs"}, {"from": 3, "to": 4, "label": "informs"}, {"from": 4, "to": 5, "label": "informs"}, {"from": 5, "to": 6, "label": "informs"}, {"from": 1, "to": 4, "label": "constrains"}];
 const nodes=new vis.DataSet(nodeData.map((n,i)=>({...n,shape:'box',margin:12,color:{background:['lightblue','lightcyan','moccasin','thistle','honeydew','lavender'][i],border:['steelblue','teal','darkorange','mediumpurple','seagreen','slateblue'][i]}})));
 const edges=new vis.DataSet(edgeData.map((e,i)=>({id:i+1,...e,arrows:'to',font:{size:13,align:'middle'},color:{color:'slategray'}})));
 const network=new vis.Network(document.getElementById('network'),{nodes,edges},{layout:{improvedLayout:false},physics:{enabled:false},interaction:{zoomView:false,dragView:false,dragNodes:false,navigationButtons:true,keyboard:{enabled:true,bindToWindow:false}},nodes:{font:{size:16,face:'Arial'},borderWidth:2},edges:{smooth:{type:'curvedCW',roundness:.12}}});
 let current=-1;function select(i){current=(i+nodeData.length)%nodeData.length;network.selectNodes([nodeData[current].id]);document.getElementById('node-title').textContent=nodeData[current].label;document.getElementById('node-detail').textContent=nodeData[current].title;}
 network.on('selectNode',e=>{const i=nodeData.findIndex(n=>n.id===e.nodes[0]);select(i);});
 document.getElementById('previous').onclick=()=>select(current-1);document.getElementById('next').onclick=()=>select(current+1);document.getElementById('reset').onclick=()=>{current=-1;network.unselectAll();document.getElementById('node-title').textContent='Select a node';document.getElementById('node-detail').textContent='Inspect relationships, then explain how evidence travels through the model.';};
});
