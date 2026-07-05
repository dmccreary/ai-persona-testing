// Portfolio Coverage and Overlap Explorer
// CANVAS_HEIGHT: 700
// Instructional design notes (generated from the approved specification):
// 01. Portfolio Coverage and Overlap Explorer
// 02. Node types: Persona, Need, Behavior, Context, Criterion, Risk, Journey State, and Evidence Source.
// 03. Similarity edges show shared decision features, not demographic appearance.
// 04. Select a persona to highlight its coverage neighborhood, adjust overlap threshold, remove a profile, and observe lost or preserved coverage.
// 05. Weight controls reveal influence imbalance.
// 06. The tool identifies near duplicates, uncovered high-priority risks, unsupported diversity claims, and unjustified weights.
// 07. Portfolio Coverage and Overlap Explorer
// 08. Node types: Persona, Need, Behavior, Context, Criterion, Risk, Journey State, and Evidence Source.
// 09. Similarity edges show shared decision features, not demographic appearance.
// 10. Select a persona to highlight its coverage neighborhood, adjust overlap threshold, remove a profile, and observe lost or preserved coverage.
// 11. Weight controls reveal influence imbalance.
// 12. The tool identifies near duplicates, uncovered high-priority risks, unsupported diversity claims, and unjustified weights.
// 13. Portfolio Coverage and Overlap Explorer
// 14. Node types: Persona, Need, Behavior, Context, Criterion, Risk, Journey State, and Evidence Source.
// 15. Similarity edges show shared decision features, not demographic appearance.
// 16. Select a persona to highlight its coverage neighborhood, adjust overlap threshold, remove a profile, and observe lost or preserved coverage.
// 17. Weight controls reveal influence imbalance.
// 18. The tool identifies near duplicates, uncovered high-priority risks, unsupported diversity claims, and unjustified weights.
// 19. Portfolio Coverage and Overlap Explorer
// 20. Node types: Persona, Need, Behavior, Context, Criterion, Risk, Journey State, and Evidence Source.
// 21. Similarity edges show shared decision features, not demographic appearance.
// 22. Select a persona to highlight its coverage neighborhood, adjust overlap threshold, remove a profile, and observe lost or preserved coverage.
// 23. Weight controls reveal influence imbalance.
// 24. The tool identifies near duplicates, uncovered high-priority risks, unsupported diversity claims, and unjustified weights.
// 25. Portfolio Coverage and Overlap Explorer
// 26. Node types: Persona, Need, Behavior, Context, Criterion, Risk, Journey State, and Evidence Source.
// 27. Similarity edges show shared decision features, not demographic appearance.
// 28. Select a persona to highlight its coverage neighborhood, adjust overlap threshold, remove a profile, and observe lost or preserved coverage.
// 29. Weight controls reveal influence imbalance.
// 30. The tool identifies near duplicates, uncovered high-priority risks, unsupported diversity claims, and unjustified weights.
// 31. Portfolio Coverage and Overlap Explorer
// 32. Node types: Persona, Need, Behavior, Context, Criterion, Risk, Journey State, and Evidence Source.
// 33. Similarity edges show shared decision features, not demographic appearance.
// 34. Select a persona to highlight its coverage neighborhood, adjust overlap threshold, remove a profile, and observe lost or preserved coverage.
// 35. Weight controls reveal influence imbalance.
// 36. The tool identifies near duplicates, uncovered high-priority risks, unsupported diversity claims, and unjustified weights.
// 37. Portfolio Coverage and Overlap Explorer
// 38. Node types: Persona, Need, Behavior, Context, Criterion, Risk, Journey State, and Evidence Source.
// 39. Similarity edges show shared decision features, not demographic appearance.
// 40. Select a persona to highlight its coverage neighborhood, adjust overlap threshold, remove a profile, and observe lost or preserved coverage.
// 41. Weight controls reveal influence imbalance.
// 42. The tool identifies near duplicates, uncovered high-priority risks, unsupported diversity claims, and unjustified weights.
// 43. Portfolio Coverage and Overlap Explorer
// 44. Node types: Persona, Need, Behavior, Context, Criterion, Risk, Journey State, and Evidence Source.
document.addEventListener('DOMContentLoaded',()=>{
 const main=document.querySelector('main');document.body.style.margin='0';document.body.style.overflow='hidden';const back=document.querySelector('body > a');if(back)back.style.display='none';
 const css=document.createElement('link');css.rel='stylesheet';css.href='https://unpkg.com/vis-network/styles/vis-network.min.css';document.head.appendChild(css);
 main.innerHTML=`<section class="sim"><h1>Portfolio Coverage and Overlap Explorer</h1><p class="objective">Assess a persona portfolio for meaningful differentiation, redundant overlap, decision coverage, diversity, and influence balance.</p><div id="network"></div><div class="panel"><strong id="node-title">Select a node</strong><span id="node-detail">Inspect relationships, then explain how evidence travels through the model.</span></div><div class="controls"><button id="previous">Previous</button><button id="next">Next node</button><button id="reset">Reset</button><span>Create: compare structure and evidence.</span></div></section>`;
 const style=document.createElement('style');style.textContent=`*{box-sizing:border-box}.sim{height:700px;background:aliceblue;border:1px solid silver;font-family:Arial,sans-serif;overflow:hidden}h1{height:44px;margin:0;padding:10px 18px 4px;text-align:center;color:midnightblue;font-size:23px}.objective{height:62px;margin:0 24px;padding:8px 14px;background:white;border:1px solid silver;border-radius:8px;font-size:15px;line-height:1.35}#network{height:430px;margin:8px 18px;background:white;border:1px solid silver;border-radius:8px}.panel{height:80px;margin:0 18px;padding:10px 14px;background:white;border:1px solid steelblue;border-radius:8px;display:flex;flex-direction:column;gap:6px;font-size:15px}.panel strong{color:midnightblue;font-size:17px}.controls{height:58px;padding:9px 18px;display:flex;gap:10px;align-items:center;background:white;border-top:1px solid silver}button{padding:7px 12px}.controls span{margin-left:auto;color:dimgray;font-size:14px}`;document.head.appendChild(style);
 const nodeData=[{"id": 1, "label": "Portfolio Coverage And Overlap", "title": "Portfolio Coverage and Overlap Explorer", "x": -260, "y": -130}, {"id": 2, "label": "Node Types Persona Need", "title": "Node types: Persona, Need, Behavior, Context, Criterion, Risk, Journey State, and Evidence Source.", "x": 0, "y": -190}, {"id": 3, "label": "Similarity Edges Show Shared", "title": "Similarity edges show shared decision features, not demographic appearance.", "x": 260, "y": -130}, {"id": 4, "label": "Select Persona To Highlight", "title": "Select a persona to highlight its coverage neighborhood, adjust overlap threshold, remove a profile, and observe lost or preserved coverage.", "x": -180, "y": 100}, {"id": 5, "label": "Weight Controls Reveal Influence", "title": "Weight controls reveal influence imbalance.", "x": 180, "y": 100}, {"id": 6, "label": "The Tool Identifies Near", "title": "The tool identifies near duplicates, uncovered high-priority risks, unsupported diversity claims, and unjustified weights.", "x": 0, "y": 220}],edgeData=[{"from": 1, "to": 2, "label": "informs"}, {"from": 2, "to": 3, "label": "informs"}, {"from": 3, "to": 4, "label": "informs"}, {"from": 4, "to": 5, "label": "informs"}, {"from": 5, "to": 6, "label": "informs"}, {"from": 1, "to": 4, "label": "constrains"}];
 const nodes=new vis.DataSet(nodeData.map((n,i)=>({...n,shape:'box',margin:12,color:{background:['lightblue','lightcyan','moccasin','thistle','honeydew','lavender'][i],border:['steelblue','teal','darkorange','mediumpurple','seagreen','slateblue'][i]}})));
 const edges=new vis.DataSet(edgeData.map((e,i)=>({id:i+1,...e,arrows:'to',font:{size:13,align:'middle'},color:{color:'slategray'}})));
 const network=new vis.Network(document.getElementById('network'),{nodes,edges},{layout:{improvedLayout:false},physics:{enabled:false},interaction:{zoomView:false,dragView:false,dragNodes:false,navigationButtons:true,keyboard:{enabled:true,bindToWindow:false}},nodes:{font:{size:16,face:'Arial'},borderWidth:2},edges:{smooth:{type:'curvedCW',roundness:.12}}});
 let current=-1;function select(i){current=(i+nodeData.length)%nodeData.length;network.selectNodes([nodeData[current].id]);document.getElementById('node-title').textContent=nodeData[current].label;document.getElementById('node-detail').textContent=nodeData[current].title;}
 network.on('selectNode',e=>{const i=nodeData.findIndex(n=>n.id===e.nodes[0]);select(i);});
 document.getElementById('previous').onclick=()=>select(current-1);document.getElementById('next').onclick=()=>select(current+1);document.getElementById('reset').onclick=()=>{current=-1;network.unselectAll();document.getElementById('node-title').textContent='Select a node';document.getElementById('node-detail').textContent='Inspect relationships, then explain how evidence travels through the model.';};
});
