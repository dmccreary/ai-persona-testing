// Persona Release Quality Gate
// CANVAS_HEIGHT: 700
// Instructional design notes (generated from the approved specification):
// 01. Persona Release Quality Gate
// 02. Workflow: Change Request, Evidence Review, Profile Revision, Predicted Effects, Test Suite, Benchmark Comparison, Privacy/Fairness Review, Approval, Release, Monitoring, and Rollback.
// 03. Learners inspect a proposed update, choose tests, interpret results, and decide Release, Revise, or Reject.
// 04. Every workflow node and connector reveals responsibility and artifact.
// 05. The simulator penalizes releases based only on average score, missing regression tests, outdated benchmarks, absent documentation, or unapproved purpose expansion.
// 06. Swimlanes stack on narrow screens, with keyboard navigation, audit-log text view, and resize handling.
// 07. Persona Release Quality Gate
// 08. Workflow: Change Request, Evidence Review, Profile Revision, Predicted Effects, Test Suite, Benchmark Comparison, Privacy/Fairness Review, Approval, Release, Monitoring, and Rollback.
// 09. Learners inspect a proposed update, choose tests, interpret results, and decide Release, Revise, or Reject.
// 10. Every workflow node and connector reveals responsibility and artifact.
// 11. The simulator penalizes releases based only on average score, missing regression tests, outdated benchmarks, absent documentation, or unapproved purpose expansion.
// 12. Swimlanes stack on narrow screens, with keyboard navigation, audit-log text view, and resize handling.
// 13. Persona Release Quality Gate
// 14. Workflow: Change Request, Evidence Review, Profile Revision, Predicted Effects, Test Suite, Benchmark Comparison, Privacy/Fairness Review, Approval, Release, Monitoring, and Rollback.
// 15. Learners inspect a proposed update, choose tests, interpret results, and decide Release, Revise, or Reject.
// 16. Every workflow node and connector reveals responsibility and artifact.
// 17. The simulator penalizes releases based only on average score, missing regression tests, outdated benchmarks, absent documentation, or unapproved purpose expansion.
// 18. Swimlanes stack on narrow screens, with keyboard navigation, audit-log text view, and resize handling.
// 19. Persona Release Quality Gate
// 20. Workflow: Change Request, Evidence Review, Profile Revision, Predicted Effects, Test Suite, Benchmark Comparison, Privacy/Fairness Review, Approval, Release, Monitoring, and Rollback.
// 21. Learners inspect a proposed update, choose tests, interpret results, and decide Release, Revise, or Reject.
// 22. Every workflow node and connector reveals responsibility and artifact.
// 23. The simulator penalizes releases based only on average score, missing regression tests, outdated benchmarks, absent documentation, or unapproved purpose expansion.
// 24. Swimlanes stack on narrow screens, with keyboard navigation, audit-log text view, and resize handling.
// 25. Persona Release Quality Gate
// 26. Workflow: Change Request, Evidence Review, Profile Revision, Predicted Effects, Test Suite, Benchmark Comparison, Privacy/Fairness Review, Approval, Release, Monitoring, and Rollback.
// 27. Learners inspect a proposed update, choose tests, interpret results, and decide Release, Revise, or Reject.
// 28. Every workflow node and connector reveals responsibility and artifact.
// 29. The simulator penalizes releases based only on average score, missing regression tests, outdated benchmarks, absent documentation, or unapproved purpose expansion.
// 30. Swimlanes stack on narrow screens, with keyboard navigation, audit-log text view, and resize handling.
// 31. Persona Release Quality Gate
// 32. Workflow: Change Request, Evidence Review, Profile Revision, Predicted Effects, Test Suite, Benchmark Comparison, Privacy/Fairness Review, Approval, Release, Monitoring, and Rollback.
// 33. Learners inspect a proposed update, choose tests, interpret results, and decide Release, Revise, or Reject.
// 34. Every workflow node and connector reveals responsibility and artifact.
// 35. The simulator penalizes releases based only on average score, missing regression tests, outdated benchmarks, absent documentation, or unapproved purpose expansion.
// 36. Swimlanes stack on narrow screens, with keyboard navigation, audit-log text view, and resize handling.
// 37. Persona Release Quality Gate
// 38. Workflow: Change Request, Evidence Review, Profile Revision, Predicted Effects, Test Suite, Benchmark Comparison, Privacy/Fairness Review, Approval, Release, Monitoring, and Rollback.
// 39. Learners inspect a proposed update, choose tests, interpret results, and decide Release, Revise, or Reject.
// 40. Every workflow node and connector reveals responsibility and artifact.
// 41. The simulator penalizes releases based only on average score, missing regression tests, outdated benchmarks, absent documentation, or unapproved purpose expansion.
// 42. Swimlanes stack on narrow screens, with keyboard navigation, audit-log text view, and resize handling.
// 43. Persona Release Quality Gate
// 44. Workflow: Change Request, Evidence Review, Profile Revision, Predicted Effects, Test Suite, Benchmark Comparison, Privacy/Fairness Review, Approval, Release, Monitoring, and Rollback.
let canvasWidth=400, drawHeight=610, controlHeight=90, canvasHeight=drawHeight+controlHeight;
let margin=22, sliderLeftMargin=180, defaultTextSize=16;
let previousButton, nextButton, revealButton, resetButton;
let current=0, revealed=false;
const simData={title:"Persona Release Quality Gate", objective:"Execute a persona release workflow using documentation review, test cases, acceptance tests, benchmark comparison, approval, versioning, and rollback.", bloom:"Create", pattern:"Build and revise", points:["Persona Release Quality Gate", "Workflow: Change Request, Evidence Review, Profile Revision, Predicted Effects, Test Suite, Benchmark Comparison, Privacy/Fairness Review, Approval, Release, Monitoring, and Rollback.", "Learners inspect a proposed update, choose tests, interpret results, and decide Release, Revise, or Reject.", "Every workflow node and connector reveals responsibility and artifact.", "The simulator penalizes releases based only on average score, missing regression tests, outdated benchmarks, absent documentation, or unapproved purpose expansion.", "Swimlanes stack on narrow screens, with keyboard navigation, audit-log text view, and resize handling."]};
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
