// Language Model Response Laboratory
// CANVAS_HEIGHT: 715
let canvasWidth = 400;
let drawHeight = 590;
let controlHeight = 125;
let canvasHeight = drawHeight + controlHeight;
let margin = 24;
let sliderLeftMargin = 210;
let defaultTextSize = 16;
let previousButton, nextButton, contextButton, predictionSelect, variabilitySlider;
let stage = 0;
let irrelevantContext = 0;
const stageNames = ['Predict', 'Instruction', 'Tokens', 'Context Window', 'Possible Phrases', 'Response Comparison'];
const tokens = [
  ['Act as', 'role', 'steelblue'], ['budget-conscious commuter', 'role', 'steelblue'],
  ['evaluate', 'task', 'darkorange'], ['this e-bike headline', 'asset', 'seagreen']
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const mainElement = document.querySelector('main');
  mainElement.style.position = 'relative';
  mainElement.style.height = canvasHeight + 'px';
  canvas.parent(mainElement);
  textSize(defaultTextSize);

  previousButton = createButton('Previous'); previousButton.parent(mainElement); previousButton.mousePressed(() => stage = max(0, stage - 1));
  nextButton = createButton('Next'); nextButton.parent(mainElement); nextButton.mousePressed(nextStage);
  contextButton = createButton('Add irrelevant context'); contextButton.parent(mainElement); contextButton.mousePressed(() => irrelevantContext = min(5, irrelevantContext + 1));
  predictionSelect = createSelect(); predictionSelect.parent(mainElement);
  predictionSelect.option('Prediction: instructions matter most'); predictionSelect.option('Prediction: irrelevant context matters most'); predictionSelect.option('Prediction: wording is always identical');
  variabilitySlider = createSlider(0, 2, 1, 1); variabilitySlider.parent(mainElement);
  describe('A six-stage worked example showing how instructions, tokens, context limits, and probabilistic selection shape a language-model response.', LABEL);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); stroke('silver'); rect(0, drawHeight, canvasWidth, controlHeight);
  drawHeader();
  drawProgress();
  drawStage();
  drawControlsLabel();
  positionControls();
}

function drawHeader() {
  fill('midnightblue'); noStroke(); textAlign(CENTER, TOP); textSize(24);
  text('Language Model Response Laboratory', canvasWidth / 2, 12);
  fill('dimgray'); noStroke(); textSize(16);
  text(`Stage ${stage + 1}: ${stageNames[stage]}`, canvasWidth / 2, 46);
}

function drawProgress() {
  const w = min(canvasWidth - 48, 820), x = (canvasWidth - w) / 2, y = 76;
  for (let i = 0; i < stageNames.length; i++) {
    const cx = x + (w * i) / (stageNames.length - 1);
    if (i < stageNames.length - 1) { stroke(i < stage ? 'seagreen' : 'silver'); strokeWeight(4); line(cx, y, x + (w * (i + 1)) / (stageNames.length - 1), y); }
    fill(i <= stage ? 'seagreen' : 'white'); stroke('slategray'); circle(cx, y, 22);
  }
  strokeWeight(1);
}

function panel(title, body) {
  const w = min(canvasWidth - 48, 820), x = (canvasWidth - w) / 2;
  fill('white'); stroke('slategray'); rect(x, 112, w, 438, 12);
  fill('midnightblue'); noStroke(); textAlign(LEFT, TOP); textSize(21); text(title, x + 20, 132);
  fill('black'); noStroke(); textSize(17); text(body, x + 20, 174, w - 40, 350);
}

function drawStage() {
  if (stage === 0) {
    panel('Predict before revealing', 'Which information will most influence the response? Make a prediction below, then select Next.\n\nPrompt: “Act as a budget-conscious commuter and evaluate this e-bike headline.”');
  } else if (stage === 1) {
    panel('Raw instruction', 'ROLE\nAct as a budget-conscious commuter\n\nTASK\nEvaluate\n\nASSET\nThis e-bike headline\n\nThe model receives text instructions, not a fully formed persona or a guaranteed opinion.');
  } else if (stage === 2) {
    drawTokenStage();
  } else if (stage === 3) {
    drawContextStage();
  } else if (stage === 4) {
    drawProbabilityStage();
  } else {
    panel('Compare two plausible runs', 'RUN A\n“The savings claim is appealing, but I need battery-life and maintenance evidence.”\n\nRUN B\n“The price catches my attention; proof of range and repair costs would earn my trust.”\n\nStable meaning: value matters, and evidence is required.\nVariable wording: “savings” vs. “price,” and different evidence examples.');
  }
}

function drawTokenStage() {
  panel('Simplified token view', 'Tokens are colored by instructional function. This is a teaching simplification, not a display of proprietary model internals.');
  let x = max(42, (canvasWidth - min(canvasWidth - 80, 780)) / 2), y = 260;
  tokens.forEach(([value, role, shade]) => {
    const w = min(220, textWidth(value) + 34);
    if (x + w > canvasWidth - 40) { x = 42; y += 74; }
    fill(shade); stroke('white'); rect(x, y, w, 54, 9);
    fill('white'); noStroke(); textAlign(CENTER, CENTER); textSize(16); text(value, x + w / 2, y + 19);
    textSize(13); text(role, x + w / 2, y + 40);
    x += w + 12;
  });
}

function drawContextStage() {
  panel('Context-window meter', 'Relevant instructions share a finite context window with background text. Add irrelevant context below and observe what becomes crowded.');
  const w = min(canvasWidth - 110, 720), x = (canvasWidth - w) / 2, y = 284;
  const used = 45 + irrelevantContext * 10;
  fill('white'); stroke('slategray'); rect(x, y, w, 62, 8);
  fill(used > 80 ? 'darkorange' : 'steelblue'); noStroke(); rect(x + 4, y + 4, (w - 8) * used / 100, 54, 5);
  fill('black'); noStroke(); textAlign(CENTER, TOP); textSize(18); text(`${used}% context utilized`, canvasWidth / 2, y + 82);
  textSize(16); text(used > 80 ? 'Relevant instructions may receive less effective attention.' : 'The key instruction remains prominent.', canvasWidth / 2, y + 116);
}

function drawProbabilityStage() {
  panel('Illustrative next-phrase probabilities', 'These values illustrate probabilistic selection; they are not actual model internals. The variability control changes how concentrated the teaching distribution appears.');
  const labels = ['The value claim', 'I would need', 'As a commuter', 'The headline', 'My first concern'];
  const sets = [[42, 28, 15, 10, 5], [31, 25, 19, 15, 10], [24, 22, 20, 18, 16]];
  const values = sets[variabilitySlider.value()];
  const x = max(44, canvasWidth * 0.18), maxW = min(430, canvasWidth * 0.48);
  labels.forEach((labelText, i) => {
    const y = 272 + i * 48;
    fill('steelblue'); noStroke(); rect(x + 160, y, maxW * values[i] / 45, 28, 5);
    fill('black'); noStroke(); textAlign(RIGHT, CENTER); textSize(15); text(labelText, x + 150, y + 14);
    textAlign(LEFT, CENTER); text(`${values[i]}%`, x + 170 + maxW * values[i] / 45, y + 14);
  });
}

function drawControlsLabel() {
  fill('black'); noStroke(); textAlign(LEFT, CENTER); textSize(15);
  text('Variability: ' + ['Low', 'Medium', 'High'][variabilitySlider.value()], sliderLeftMargin - 125, drawHeight + 103);
}

function nextStage() { stage = stage === stageNames.length - 1 ? 0 : stage + 1; if (stage === 0) irrelevantContext = 0; }

function positionControls() {
  previousButton.position(12, drawHeight + 8); nextButton.position(92, drawHeight + 8);
  contextButton.position(154, drawHeight + 8);
  predictionSelect.position(12, drawHeight + 47); predictionSelect.size(max(260, canvasWidth - 24), 30);
  variabilitySlider.position(sliderLeftMargin, drawHeight + 91); variabilitySlider.size(max(120, canvasWidth - sliderLeftMargin - margin));
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const container = document.querySelector('main'); if (container) canvasWidth = max(400, floor(container.getBoundingClientRect().width)); }
