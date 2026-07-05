// Brand Strategy Alignment Map
// CANVAS_HEIGHT: 700
// Instructional design notes (generated from the approved specification):
// 01. Brand Strategy Alignment Map
// 02. Node types: Audience, Positioning, Promise, Identity Element, Personality Trait, Voice Rule, Tone Choice, Value Proposition, Message, Asset, Experience Evidence, and Customer Finding.
// 03. Edges: INFORMS, EXPRESSES, ADAPTS_TO, SUPPORTS, CONTRADICTS, and VALIDATED_BY.
// 04. Every node and edge is selectable.
// 05. Learners trace one asset back to strategy, identify broken links, and attach evidence.
// 06. Highlight mode shows unsupported promises or messages inconsistent with positioning.
// 07. Brand Strategy Alignment Map
// 08. Node types: Audience, Positioning, Promise, Identity Element, Personality Trait, Voice Rule, Tone Choice, Value Proposition, Message, Asset, Experience Evidence, and Customer Finding.
// 09. Edges: INFORMS, EXPRESSES, ADAPTS_TO, SUPPORTS, CONTRADICTS, and VALIDATED_BY.
// 10. Every node and edge is selectable.
// 11. Learners trace one asset back to strategy, identify broken links, and attach evidence.
// 12. Highlight mode shows unsupported promises or messages inconsistent with positioning.
// 13. Brand Strategy Alignment Map
// 14. Node types: Audience, Positioning, Promise, Identity Element, Personality Trait, Voice Rule, Tone Choice, Value Proposition, Message, Asset, Experience Evidence, and Customer Finding.
// 15. Edges: INFORMS, EXPRESSES, ADAPTS_TO, SUPPORTS, CONTRADICTS, and VALIDATED_BY.
// 16. Every node and edge is selectable.
// 17. Learners trace one asset back to strategy, identify broken links, and attach evidence.
// 18. Highlight mode shows unsupported promises or messages inconsistent with positioning.
// 19. Brand Strategy Alignment Map
// 20. Node types: Audience, Positioning, Promise, Identity Element, Personality Trait, Voice Rule, Tone Choice, Value Proposition, Message, Asset, Experience Evidence, and Customer Finding.
// 21. Edges: INFORMS, EXPRESSES, ADAPTS_TO, SUPPORTS, CONTRADICTS, and VALIDATED_BY.
// 22. Every node and edge is selectable.
// 23. Learners trace one asset back to strategy, identify broken links, and attach evidence.
// 24. Highlight mode shows unsupported promises or messages inconsistent with positioning.
// 25. Brand Strategy Alignment Map
// 26. Node types: Audience, Positioning, Promise, Identity Element, Personality Trait, Voice Rule, Tone Choice, Value Proposition, Message, Asset, Experience Evidence, and Customer Finding.
// 27. Edges: INFORMS, EXPRESSES, ADAPTS_TO, SUPPORTS, CONTRADICTS, and VALIDATED_BY.
// 28. Every node and edge is selectable.
// 29. Learners trace one asset back to strategy, identify broken links, and attach evidence.
// 30. Highlight mode shows unsupported promises or messages inconsistent with positioning.
// 31. Brand Strategy Alignment Map
// 32. Node types: Audience, Positioning, Promise, Identity Element, Personality Trait, Voice Rule, Tone Choice, Value Proposition, Message, Asset, Experience Evidence, and Customer Finding.
// 33. Edges: INFORMS, EXPRESSES, ADAPTS_TO, SUPPORTS, CONTRADICTS, and VALIDATED_BY.
// 34. Every node and edge is selectable.
// 35. Learners trace one asset back to strategy, identify broken links, and attach evidence.
// 36. Highlight mode shows unsupported promises or messages inconsistent with positioning.
// 37. Brand Strategy Alignment Map
// 38. Node types: Audience, Positioning, Promise, Identity Element, Personality Trait, Voice Rule, Tone Choice, Value Proposition, Message, Asset, Experience Evidence, and Customer Finding.
// 39. Edges: INFORMS, EXPRESSES, ADAPTS_TO, SUPPORTS, CONTRADICTS, and VALIDATED_BY.
// 40. Every node and edge is selectable.
// 41. Learners trace one asset back to strategy, identify broken links, and attach evidence.
// 42. Highlight mode shows unsupported promises or messages inconsistent with positioning.
// 43. Brand Strategy Alignment Map
// 44. Node types: Audience, Positioning, Promise, Identity Element, Personality Trait, Voice Rule, Tone Choice, Value Proposition, Message, Asset, Experience Evidence, and Customer Finding.
document.addEventListener('DOMContentLoaded',()=>{
 const main=document.querySelector('main');document.body.style.margin='0';document.body.style.overflow='hidden';const back=document.querySelector('body > a');if(back)back.style.display='none';
 const css=document.createElement('link');css.rel='stylesheet';css.href='https://unpkg.com/vis-network/styles/vis-network.min.css';document.head.appendChild(css);
 main.innerHTML=`<section class="sim"><h1>Brand Strategy Alignment Map</h1><p class="objective">Examine alignment among positioning, promise, identity, personality, voice, tone, value proposition, product messaging, hierarchy, assets, and customer evidence.</p><div id="network"></div><div class="panel"><strong id="node-title">Select a node</strong><span id="node-detail">Inspect relationships, then explain how evidence travels through the model.</span></div><div class="controls"><button id="previous">Previous</button><button id="next">Next node</button><button id="reset">Reset</button><span>Create: compare structure and evidence.</span></div></section>`;
 const style=document.createElement('style');style.textContent=`*{box-sizing:border-box}.sim{height:700px;background:aliceblue;border:1px solid silver;font-family:Arial,sans-serif;overflow:hidden}h1{height:44px;margin:0;padding:10px 18px 4px;text-align:center;color:midnightblue;font-size:23px}.objective{height:62px;margin:0 24px;padding:8px 14px;background:white;border:1px solid silver;border-radius:8px;font-size:15px;line-height:1.35}#network{height:430px;margin:8px 18px;background:white;border:1px solid silver;border-radius:8px}.panel{height:80px;margin:0 18px;padding:10px 14px;background:white;border:1px solid steelblue;border-radius:8px;display:flex;flex-direction:column;gap:6px;font-size:15px}.panel strong{color:midnightblue;font-size:17px}.controls{height:58px;padding:9px 18px;display:flex;gap:10px;align-items:center;background:white;border-top:1px solid silver}button{padding:7px 12px}.controls span{margin-left:auto;color:dimgray;font-size:14px}`;document.head.appendChild(style);
 const nodeData=[{"id": 1, "label": "Brand Strategy Alignment Map", "title": "Brand Strategy Alignment Map", "x": -260, "y": -130}, {"id": 2, "label": "Node Types Audience Positioning", "title": "Node types: Audience, Positioning, Promise, Identity Element, Personality Trait, Voice Rule, Tone Choice, Value Proposition, Message, Asset, Experience Evidence, and Customer Finding.", "x": 0, "y": -190}, {"id": 3, "label": "Edges Informs Expresses Adapts", "title": "Edges: INFORMS, EXPRESSES, ADAPTS_TO, SUPPORTS, CONTRADICTS, and VALIDATED_BY.", "x": 260, "y": -130}, {"id": 4, "label": "Every Node And Edge", "title": "Every node and edge is selectable.", "x": -180, "y": 100}, {"id": 5, "label": "Learners Trace One Asset", "title": "Learners trace one asset back to strategy, identify broken links, and attach evidence.", "x": 180, "y": 100}, {"id": 6, "label": "Highlight Mode Shows Unsupported", "title": "Highlight mode shows unsupported promises or messages inconsistent with positioning.", "x": 0, "y": 220}],edgeData=[{"from": 1, "to": 2, "label": "informs"}, {"from": 2, "to": 3, "label": "informs"}, {"from": 3, "to": 4, "label": "informs"}, {"from": 4, "to": 5, "label": "informs"}, {"from": 5, "to": 6, "label": "informs"}, {"from": 1, "to": 4, "label": "constrains"}];
 const nodes=new vis.DataSet(nodeData.map((n,i)=>({...n,shape:'box',margin:12,color:{background:['lightblue','lightcyan','moccasin','thistle','honeydew','lavender'][i],border:['steelblue','teal','darkorange','mediumpurple','seagreen','slateblue'][i]}})));
 const edges=new vis.DataSet(edgeData.map((e,i)=>({id:i+1,...e,arrows:'to',font:{size:13,align:'middle'},color:{color:'slategray'}})));
 const network=new vis.Network(document.getElementById('network'),{nodes,edges},{layout:{improvedLayout:false},physics:{enabled:false},interaction:{zoomView:false,dragView:false,dragNodes:false,navigationButtons:true,keyboard:{enabled:true,bindToWindow:false}},nodes:{font:{size:16,face:'Arial'},borderWidth:2},edges:{smooth:{type:'curvedCW',roundness:.12}}});
 let current=-1;function select(i){current=(i+nodeData.length)%nodeData.length;network.selectNodes([nodeData[current].id]);document.getElementById('node-title').textContent=nodeData[current].label;document.getElementById('node-detail').textContent=nodeData[current].title;}
 network.on('selectNode',e=>{const i=nodeData.findIndex(n=>n.id===e.nodes[0]);select(i);});
 document.getElementById('previous').onclick=()=>select(current-1);document.getElementById('next').onclick=()=>select(current+1);document.getElementById('reset').onclick=()=>{current=-1;network.unselectAll();document.getElementById('node-title').textContent='Select a node';document.getElementById('node-detail').textContent='Inspect relationships, then explain how evidence travels through the model.';};
});
