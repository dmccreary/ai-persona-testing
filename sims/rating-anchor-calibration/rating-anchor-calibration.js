// Rating Anchor Calibration Lab
// CANVAS_HEIGHT: 700
// Instructional design notes (generated from the approved specification):
// 01. Rating Anchor Calibration Lab
// 02. Learners rate asset excerpts on a five-level clarity scale, attach evidence, and compare with two reviewer ratings.
// 03. Borderline cases require written rationale.
// 04. The tool reveals which anchor conditions were met, distinguishes missing evidence from poor performance, and shows whether disagreement comes from evidence or anchor interpretation.
// 05. Evidence and anchor panels become tabs on narrow screens, with keyboard ratings and resize handling.
// 06. Repeated anchored judgment with feedback supports applying and calibration.
// 07. Rating Anchor Calibration Lab
// 08. Learners rate asset excerpts on a five-level clarity scale, attach evidence, and compare with two reviewer ratings.
// 09. Borderline cases require written rationale.
// 10. The tool reveals which anchor conditions were met, distinguishes missing evidence from poor performance, and shows whether disagreement comes from evidence or anchor interpretation.
// 11. Evidence and anchor panels become tabs on narrow screens, with keyboard ratings and resize handling.
// 12. Repeated anchored judgment with feedback supports applying and calibration.
// 13. Rating Anchor Calibration Lab
// 14. Learners rate asset excerpts on a five-level clarity scale, attach evidence, and compare with two reviewer ratings.
// 15. Borderline cases require written rationale.
// 16. The tool reveals which anchor conditions were met, distinguishes missing evidence from poor performance, and shows whether disagreement comes from evidence or anchor interpretation.
// 17. Evidence and anchor panels become tabs on narrow screens, with keyboard ratings and resize handling.
// 18. Repeated anchored judgment with feedback supports applying and calibration.
// 19. Rating Anchor Calibration Lab
// 20. Learners rate asset excerpts on a five-level clarity scale, attach evidence, and compare with two reviewer ratings.
// 21. Borderline cases require written rationale.
// 22. The tool reveals which anchor conditions were met, distinguishes missing evidence from poor performance, and shows whether disagreement comes from evidence or anchor interpretation.
// 23. Evidence and anchor panels become tabs on narrow screens, with keyboard ratings and resize handling.
// 24. Repeated anchored judgment with feedback supports applying and calibration.
// 25. Rating Anchor Calibration Lab
// 26. Learners rate asset excerpts on a five-level clarity scale, attach evidence, and compare with two reviewer ratings.
// 27. Borderline cases require written rationale.
// 28. The tool reveals which anchor conditions were met, distinguishes missing evidence from poor performance, and shows whether disagreement comes from evidence or anchor interpretation.
// 29. Evidence and anchor panels become tabs on narrow screens, with keyboard ratings and resize handling.
// 30. Repeated anchored judgment with feedback supports applying and calibration.
// 31. Rating Anchor Calibration Lab
// 32. Learners rate asset excerpts on a five-level clarity scale, attach evidence, and compare with two reviewer ratings.
// 33. Borderline cases require written rationale.
// 34. The tool reveals which anchor conditions were met, distinguishes missing evidence from poor performance, and shows whether disagreement comes from evidence or anchor interpretation.
// 35. Evidence and anchor panels become tabs on narrow screens, with keyboard ratings and resize handling.
// 36. Repeated anchored judgment with feedback supports applying and calibration.
// 37. Rating Anchor Calibration Lab
// 38. Learners rate asset excerpts on a five-level clarity scale, attach evidence, and compare with two reviewer ratings.
// 39. Borderline cases require written rationale.
// 40. The tool reveals which anchor conditions were met, distinguishes missing evidence from poor performance, and shows whether disagreement comes from evidence or anchor interpretation.
// 41. Evidence and anchor panels become tabs on narrow screens, with keyboard ratings and resize handling.
// 42. Repeated anchored judgment with feedback supports applying and calibration.
// 43. Rating Anchor Calibration Lab
// 44. Learners rate asset excerpts on a five-level clarity scale, attach evidence, and compare with two reviewer ratings.
let canvasWidth=400, drawHeight=610, controlHeight=90, canvasHeight=drawHeight+controlHeight;
let margin=22, sliderLeftMargin=180, defaultTextSize=16;
let previousButton, nextButton, revealButton, resetButton;
let current=0, revealed=false;
const simData={title:"Rating Anchor Calibration Lab", objective:"Apply anchored rating guidance to marketing evidence and calibrate disagreements among reviewers.", bloom:"Create", pattern:"Build and revise", points:["Rating Anchor Calibration Lab", "Learners rate asset excerpts on a five-level clarity scale, attach evidence, and compare with two reviewer ratings.", "Borderline cases require written rationale.", "The tool reveals which anchor conditions were met, distinguishes missing evidence from poor performance, and shows whether disagreement comes from evidence or anchor interpretation.", "Evidence and anchor panels become tabs on narrow screens, with keyboard ratings and resize handling.", "Repeated anchored judgment with feedback supports applying and calibration."]};
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
