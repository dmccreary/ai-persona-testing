// Page Task and Evidence Explorer
// CANVAS_HEIGHT: 700
// Instructional design notes (generated from the approved specification):
// 01. Page Task and Evidence Explorer
// 02. Responsive page wireframe beside a task path.
// 03. Selectable regions include headline, navigation, value, proof, terms, form, and action.
// 04. Learners predict where a persona looks next, click regions to reveal content, and mark confusion, missing evidence, or task progress.
// 05. Compare desktop and mobile reading order.
// 06. The tool distinguishes page-level failures from product or source-channel problems and preserves exact evidence.
// 07. Page Task and Evidence Explorer
// 08. Responsive page wireframe beside a task path.
// 09. Selectable regions include headline, navigation, value, proof, terms, form, and action.
// 10. Learners predict where a persona looks next, click regions to reveal content, and mark confusion, missing evidence, or task progress.
// 11. Compare desktop and mobile reading order.
// 12. The tool distinguishes page-level failures from product or source-channel problems and preserves exact evidence.
// 13. Page Task and Evidence Explorer
// 14. Responsive page wireframe beside a task path.
// 15. Selectable regions include headline, navigation, value, proof, terms, form, and action.
// 16. Learners predict where a persona looks next, click regions to reveal content, and mark confusion, missing evidence, or task progress.
// 17. Compare desktop and mobile reading order.
// 18. The tool distinguishes page-level failures from product or source-channel problems and preserves exact evidence.
// 19. Page Task and Evidence Explorer
// 20. Responsive page wireframe beside a task path.
// 21. Selectable regions include headline, navigation, value, proof, terms, form, and action.
// 22. Learners predict where a persona looks next, click regions to reveal content, and mark confusion, missing evidence, or task progress.
// 23. Compare desktop and mobile reading order.
// 24. The tool distinguishes page-level failures from product or source-channel problems and preserves exact evidence.
// 25. Page Task and Evidence Explorer
// 26. Responsive page wireframe beside a task path.
// 27. Selectable regions include headline, navigation, value, proof, terms, form, and action.
// 28. Learners predict where a persona looks next, click regions to reveal content, and mark confusion, missing evidence, or task progress.
// 29. Compare desktop and mobile reading order.
// 30. The tool distinguishes page-level failures from product or source-channel problems and preserves exact evidence.
// 31. Page Task and Evidence Explorer
// 32. Responsive page wireframe beside a task path.
// 33. Selectable regions include headline, navigation, value, proof, terms, form, and action.
// 34. Learners predict where a persona looks next, click regions to reveal content, and mark confusion, missing evidence, or task progress.
// 35. Compare desktop and mobile reading order.
// 36. The tool distinguishes page-level failures from product or source-channel problems and preserves exact evidence.
// 37. Page Task and Evidence Explorer
// 38. Responsive page wireframe beside a task path.
// 39. Selectable regions include headline, navigation, value, proof, terms, form, and action.
// 40. Learners predict where a persona looks next, click regions to reveal content, and mark confusion, missing evidence, or task progress.
// 41. Compare desktop and mobile reading order.
// 42. The tool distinguishes page-level failures from product or source-channel problems and preserves exact evidence.
// 43. Page Task and Evidence Explorer
// 44. Responsive page wireframe beside a task path.
let canvasWidth=400, drawHeight=610, controlHeight=90, canvasHeight=drawHeight+controlHeight;
let margin=22, sliderLeftMargin=180, defaultTextSize=16;
let previousButton, nextButton, revealButton, resetButton;
let current=0, revealed=false;
const simData={title:"Page Task and Evidence Explorer", objective:"Examine how page hierarchy, content, proof, navigation, and friction support or block a persona's task.", bloom:"Create", pattern:"Build and revise", points:["Page Task and Evidence Explorer", "Responsive page wireframe beside a task path.", "Selectable regions include headline, navigation, value, proof, terms, form, and action.", "Learners predict where a persona looks next, click regions to reveal content, and mark confusion, missing evidence, or task progress.", "Compare desktop and mobile reading order.", "The tool distinguishes page-level failures from product or source-channel problems and preserves exact evidence."]};
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
