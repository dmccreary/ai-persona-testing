// Parallel–Sequential Trade-Off Explorer
// CANVAS_HEIGHT: 700
// Instructional design notes (generated from the approved specification):
// 01. Parallel–Sequential Trade-Off Explorer
// 02. Type: interactive infographic
// 03. Learners arrange the same roles in three patterns and inspect predicted consequences.
// 04. Parameter controls adjust dependency strength, review budget, context sensitivity, and urgency.
// 05. The tool flags sequential persona anchoring, parallel stages with missing prerequisites, and hybrid plans without a clear convergence gate.
// 06. Flows stack on narrow screens, with keyboard arrangement and text comparison.
// 07. Parallel–Sequential Trade-Off Explorer
// 08. Type: interactive infographic
// 09. Learners arrange the same roles in three patterns and inspect predicted consequences.
// 10. Parameter controls adjust dependency strength, review budget, context sensitivity, and urgency.
// 11. The tool flags sequential persona anchoring, parallel stages with missing prerequisites, and hybrid plans without a clear convergence gate.
// 12. Flows stack on narrow screens, with keyboard arrangement and text comparison.
// 13. Parallel–Sequential Trade-Off Explorer
// 14. Type: interactive infographic
// 15. Learners arrange the same roles in three patterns and inspect predicted consequences.
// 16. Parameter controls adjust dependency strength, review budget, context sensitivity, and urgency.
// 17. The tool flags sequential persona anchoring, parallel stages with missing prerequisites, and hybrid plans without a clear convergence gate.
// 18. Flows stack on narrow screens, with keyboard arrangement and text comparison.
// 19. Parallel–Sequential Trade-Off Explorer
// 20. Type: interactive infographic
// 21. Learners arrange the same roles in three patterns and inspect predicted consequences.
// 22. Parameter controls adjust dependency strength, review budget, context sensitivity, and urgency.
// 23. The tool flags sequential persona anchoring, parallel stages with missing prerequisites, and hybrid plans without a clear convergence gate.
// 24. Flows stack on narrow screens, with keyboard arrangement and text comparison.
// 25. Parallel–Sequential Trade-Off Explorer
// 26. Type: interactive infographic
// 27. Learners arrange the same roles in three patterns and inspect predicted consequences.
// 28. Parameter controls adjust dependency strength, review budget, context sensitivity, and urgency.
// 29. The tool flags sequential persona anchoring, parallel stages with missing prerequisites, and hybrid plans without a clear convergence gate.
// 30. Flows stack on narrow screens, with keyboard arrangement and text comparison.
// 31. Parallel–Sequential Trade-Off Explorer
// 32. Type: interactive infographic
// 33. Learners arrange the same roles in three patterns and inspect predicted consequences.
// 34. Parameter controls adjust dependency strength, review budget, context sensitivity, and urgency.
// 35. The tool flags sequential persona anchoring, parallel stages with missing prerequisites, and hybrid plans without a clear convergence gate.
// 36. Flows stack on narrow screens, with keyboard arrangement and text comparison.
// 37. Parallel–Sequential Trade-Off Explorer
// 38. Type: interactive infographic
// 39. Learners arrange the same roles in three patterns and inspect predicted consequences.
// 40. Parameter controls adjust dependency strength, review budget, context sensitivity, and urgency.
// 41. The tool flags sequential persona anchoring, parallel stages with missing prerequisites, and hybrid plans without a clear convergence gate.
// 42. Flows stack on narrow screens, with keyboard arrangement and text comparison.
// 43. Parallel–Sequential Trade-Off Explorer
// 44. Type: interactive infographic
let canvasWidth=400, drawHeight=610, controlHeight=90, canvasHeight=drawHeight+controlHeight;
let margin=22, sliderLeftMargin=180, defaultTextSize=16;
let previousButton, nextButton, revealButton, resetButton;
let current=0, revealed=false;
const simData={title:"Parallel–Sequential Trade-Off Explorer", objective:"Justify parallel, sequential, or hybrid execution based on task dependency, independence, latency, cost, contamination, and error propagation.", bloom:"Create", pattern:"Build and revise", points:["Parallel–Sequential Trade-Off Explorer", "Type: interactive infographic", "Learners arrange the same roles in three patterns and inspect predicted consequences.", "Parameter controls adjust dependency strength, review budget, context sensitivity, and urgency.", "The tool flags sequential persona anchoring, parallel stages with missing prerequisites, and hybrid plans without a clear convergence gate.", "Flows stack on narrow screens, with keyboard arrangement and text comparison."]};
const palette=['steelblue','teal','darkorange','mediumpurple','seagreen','slateblue'];
function setup(){
  updateCanvasSize();
  const canvas=createCanvas(canvasWidth,canvasHeight);
  const main=document.querySelector('main'); main.style.position='relative'; main.style.height=canvasHeight+'px'; main.style.overflow='hidden';
  document.body.style.margin='0'; document.body.style.overflow='hidden'; const back=document.querySelector('body > a'); if(back) back.style.display='none';
  const style=document.createElement('style'); style.textContent='[id$="_Description"],.p5Label{position:absolute!important;width:1px!important;height:1px!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important}'; document.head.appendChild(style);
  canvas.parent(main); textSize(defaultTextSize);
  previousButton=createButton('Previous'); previousButton.parent(main); previousButton.mousePressed(()=>{current=(current-1+simData.points.length)%simData.points.length;revealed=false;});
  nextButton=createButton('Next'); nextButton.parent(main); nextButton.mousePressed(()=>{current=(current+1)%simData.points.length;revealed=false;});
  revealButton=createButton('Reveal guidance'); revealButton.parent(main); revealButton.mousePressed(()=>revealed=!revealed);
  resetButton=createButton('Reset'); resetButton.parent(main); resetButton.mousePressed(()=>{current=0;revealed=false;});
  describe(simData.objective,LABEL);
}
function draw(){
  updateCanvasSize(); fill('aliceblue');stroke('silver');rect(0,0,canvasWidth,drawHeight);fill('white');stroke('silver');rect(0,drawHeight,canvasWidth,controlHeight);
  fill('midnightblue');noStroke();textAlign(CENTER,TOP);textSize(24);text(simData.title,24,12,canvasWidth-48,58);
  fill('dimgray');noStroke();textSize(15);text(simData.bloom+' • '+simData.pattern,canvasWidth/2,68);
  drawObjective();drawCards();drawDetail();drawControlLabels();positionControls();
}
function drawObjective(){fill('white');stroke('slategray');rect(24,98,canvasWidth-48,88,10);fill('black');noStroke();textAlign(LEFT,TOP);textSize(16);text(simData.objective,40,114,canvasWidth-80,60);}
function drawCards(){
  const shown=Math.min(4,simData.points.length),gap=12,gridW=canvasWidth-48,cellW=(gridW-gap)/2;
  for(let i=0;i<shown;i++){const x=24+(i%2)*(cellW+gap),y=205+Math.floor(i/2)*94;fill(i===current?palette[i]:'white');stroke(palette[i]);strokeWeight(i===current?3:1);rect(x,y,cellW,78,9);fill(i===current?'white':'black');noStroke();textAlign(CENTER,CENTER);textSize(15);text((i+1)+'. '+shortText(simData.points[i],74),x+10,y+8,cellW-20,62);}strokeWeight(1);
}
function drawDetail(){
  const p=simData.points[current];fill(revealed?'honeydew':'whitesmoke');stroke(revealed?'seagreen':'silver');rect(24,405,canvasWidth-48,168,10);
  fill('midnightblue');noStroke();textAlign(LEFT,TOP);textSize(19);text('Focus '+(current+1)+' of '+simData.points.length,42,422);
  fill('black');noStroke();textSize(16);text(p,42,454,canvasWidth-84,62);
  fill(revealed?'darkgreen':'dimgray');noStroke();textSize(15);text(revealed?guidance():'Before revealing: state what evidence would support or challenge this element.',42,526,canvasWidth-84,38);
}
function guidance(){const lead={Remember:'Name the defining cue.',Understand:'Explain the relationship in your own words.',Apply:'Use this element in a new case.',Analyze:'Compare it with an alternative.',Evaluate:'Judge it against explicit evidence.',Create:'Revise it and explain the tradeoff.'};return lead[simData.bloom]+' Treat synthetic output as a hypothesis until external evidence validates it.';}
function drawControlLabels(){fill('black');noStroke();textAlign(RIGHT,CENTER);textSize(15);text('Selected '+(current+1)+' / '+simData.points.length,canvasWidth-20,drawHeight+68);}
function shortText(s,n){return s.length>n?s.slice(0,n-1)+'…':s;}
function mousePressed(){if(mouseY<205||mouseY>377)return;const gap=12,gridW=canvasWidth-48,cellW=(gridW-gap)/2,col=mouseX>24+cellW+gap/2?1:0,row=mouseY>291?1:0,i=row*2+col;if(i<simData.points.length){current=i;revealed=false;}}
function positionControls(){previousButton.position(12,drawHeight+10);nextButton.position(92,drawHeight+10);revealButton.position(150,drawHeight+10);resetButton.position(270,drawHeight+10);}
function windowResized(){updateCanvasSize();resizeCanvas(canvasWidth,canvasHeight);positionControls();}
function updateCanvasSize(){const c=document.querySelector('main');if(c)canvasWidth=Math.max(400,Math.floor(c.getBoundingClientRect().width));}
