// Context Shift Response Explorer
// CANVAS_HEIGHT: 700
// Instructional design notes (generated from the approved specification):
// 01. Context Shift Response Explorer
// 02. Stage 1 shows a fixed persona profile and marketing message.
// 03. Stage 2 displays baseline context fields.
// 04. Stage 3 lets the learner change one field.
// 05. Stage 4 shows a side-by-side response with changed phrases highlighted.
// 06. Final stage asks which change plausibly caused each difference.
// 07. Context Shift Response Explorer
// 08. Stage 1 shows a fixed persona profile and marketing message.
// 09. Stage 2 displays baseline context fields.
// 10. Stage 3 lets the learner change one field.
// 11. Stage 4 shows a side-by-side response with changed phrases highlighted.
// 12. Final stage asks which change plausibly caused each difference.
// 13. Context Shift Response Explorer
// 14. Stage 1 shows a fixed persona profile and marketing message.
// 15. Stage 2 displays baseline context fields.
// 16. Stage 3 lets the learner change one field.
// 17. Stage 4 shows a side-by-side response with changed phrases highlighted.
// 18. Final stage asks which change plausibly caused each difference.
// 19. Context Shift Response Explorer
// 20. Stage 1 shows a fixed persona profile and marketing message.
// 21. Stage 2 displays baseline context fields.
// 22. Stage 3 lets the learner change one field.
// 23. Stage 4 shows a side-by-side response with changed phrases highlighted.
// 24. Final stage asks which change plausibly caused each difference.
// 25. Context Shift Response Explorer
// 26. Stage 1 shows a fixed persona profile and marketing message.
// 27. Stage 2 displays baseline context fields.
// 28. Stage 3 lets the learner change one field.
// 29. Stage 4 shows a side-by-side response with changed phrases highlighted.
// 30. Final stage asks which change plausibly caused each difference.
// 31. Context Shift Response Explorer
// 32. Stage 1 shows a fixed persona profile and marketing message.
// 33. Stage 2 displays baseline context fields.
// 34. Stage 3 lets the learner change one field.
// 35. Stage 4 shows a side-by-side response with changed phrases highlighted.
// 36. Final stage asks which change plausibly caused each difference.
// 37. Context Shift Response Explorer
// 38. Stage 1 shows a fixed persona profile and marketing message.
// 39. Stage 2 displays baseline context fields.
// 40. Stage 3 lets the learner change one field.
// 41. Stage 4 shows a side-by-side response with changed phrases highlighted.
// 42. Final stage asks which change plausibly caused each difference.
// 43. Context Shift Response Explorer
// 44. Stage 1 shows a fixed persona profile and marketing message.
let canvasWidth=400, drawHeight=610, controlHeight=90, canvasHeight=drawHeight+controlHeight;
let margin=22, sliderLeftMargin=180, defaultTextSize=16;
let previousButton, nextButton, revealButton, resetButton;
let current=0, revealed=false;
const simData={title:"Context Shift Response Explorer", objective:"Explain how changing task, device, time pressure, journey stage, and decision stakes can change a persona's evaluation without changing its core profile.", bloom:"Create", pattern:"Build and revise", points:["Context Shift Response Explorer", "Stage 1 shows a fixed persona profile and marketing message.", "Stage 2 displays baseline context fields.", "Stage 3 lets the learner change one field.", "Stage 4 shows a side-by-side response with changed phrases highlighted.", "Final stage asks which change plausibly caused each difference."]};
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
