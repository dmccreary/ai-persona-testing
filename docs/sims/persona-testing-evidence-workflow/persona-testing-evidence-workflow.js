// AI Persona Testing Evidence Workflow
// CANVAS_HEIGHT: 750
let canvasWidth = 400;
let drawHeight = 660;
let controlHeight = 90;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;
let sliderLeftMargin = 180;
let defaultTextSize = 16;
let scenarioSelect, artifactSelect, stageSelect, placeButton, resetButton;
let selectedStep = 0;
let placed = {};
let feedback = 'Click a workflow step to inspect its input, action, output, and quality check.';
const steps = [
  ['Decision question','Marketing','Define the decision','A bounded question','Can findings change an action?'],
  ['Persona selection','Marketing','Choose relevant perspectives','Persona roster','Coverage and evidence documented?'],
  ['Evidence package','Marketing','Share identical inputs','Controlled context','Same version for every reviewer?'],
  ['Independent reviews','Persona','Collect responses separately','Uncontaminated reviews','No agent saw another answer?'],
  ['Moderated discussion','Persona','Explore disagreement if useful','Dialogue trace','Moderator stayed neutral?'],
  ['Pattern comparison','Persona','Code convergence and variance','Pattern table','Minority views preserved?'],
  ['Limitation review','Marketing','Mark synthetic boundaries','Limitation register','Claims labeled honestly?'],
  ['Validation decision','Human','Choose what needs real evidence','Validation plan','Risk matched to method?'],
  ['Research handoff','Human','Brief real-customer research','Research brief','Owner and next action clear?']
];
const artifacts = [
  ['Landing-page decision question',0], ['Persona evidence cards',1], ['Shared product facts',2], ['Four separate reviews',3], ['Discussion transcript',4], ['Theme comparison table',5], ['Synthetic-evidence warning',6], ['Interview validation plan',7], ['Research team brief',8]
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const mainElement = document.querySelector('main'); mainElement.style.position = 'relative'; mainElement.style.height = canvasHeight + 'px'; canvas.parent(mainElement);
  scenarioSelect = createSelect(); scenarioSelect.parent(mainElement); ['Landing page','Advertisement','New service concept'].forEach(s => scenarioSelect.option(s)); scenarioSelect.changed(resetWorkflow);
  artifactSelect = createSelect(); artifactSelect.parent(mainElement); artifacts.forEach((a,i) => artifactSelect.option(a[0], i));
  stageSelect = createSelect(); stageSelect.parent(mainElement); steps.forEach((s,i) => stageSelect.option(`${i + 1}. ${s[0]}`, i));
  placeButton = createButton('Place artifact'); placeButton.parent(mainElement); placeButton.mousePressed(placeArtifact);
  resetButton = createButton('Reset'); resetButton.parent(mainElement); resetButton.mousePressed(resetWorkflow);
  describe('A three-lane workflow for moving a marketing question through synthetic persona review to explicit real-customer validation.', LABEL);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); stroke('silver'); rect(0, drawHeight, canvasWidth, controlHeight);
  fill('midnightblue'); noStroke(); textAlign(CENTER, TOP); textSize(24); text('AI Persona Testing Evidence Workflow', canvasWidth / 2, 10);
  drawLanes(); drawSteps(); drawDetailPanel(); positionControls();
}

function drawLanes() {
  const top = 56, laneH = 122;
  [['Marketing Team','lightsteelblue'],['Persona System','thistle'],['Human Research','palegreen']].forEach((lane,i) => {
    fill(lane[1]); stroke('silver'); rect(14, top + i * laneH, canvasWidth - 28, laneH - 8, 8);
    fill('black'); noStroke(); textAlign(LEFT, TOP); textSize(15); text(lane[0], 24, top + i * laneH + 8);
  });
}

function drawSteps() {
  const laneMap = {Marketing:0, Persona:1, Human:2};
  const laneCounts = {Marketing:0, Persona:0, Human:0};
  steps.forEach((step,i) => {
    const lane = laneMap[step[1]], pos = laneCounts[step[1]]++, count = step[1] === 'Marketing' ? 4 : step[1] === 'Persona' ? 3 : 2;
    const usable = canvasWidth - 110, w = max(65, (usable - (count - 1) * 8) / count);
    const x = 86 + pos * (w + 8), y = 84 + lane * 122;
    if (pos > 0) { stroke('slategray'); strokeWeight(2); line(x - 10, y + 31, x, y + 31); }
    fill(i === selectedStep ? 'gold' : placed[i] ? 'seagreen' : step[1] === 'Persona' ? 'mediumpurple' : step[1] === 'Human' ? 'forestgreen' : 'steelblue');
    stroke('white'); rect(x, y, w, 62, 8);
    fill('white'); noStroke(); textAlign(CENTER, CENTER); textSize(13); text(`${i + 1}. ${step[0]}`, x + 5, y + 5, w - 10, 52);
  }); strokeWeight(1);
}

function drawDetailPanel() {
  const step = steps[selectedStep], y = 430;
  fill('white'); stroke('slategray'); rect(20, y, canvasWidth - 40, 188, 10);
  fill('midnightblue'); noStroke(); textAlign(LEFT, TOP); textSize(20); text(`${selectedStep + 1}. ${step[0]}`, 38, y + 16);
  fill('black'); noStroke(); textSize(15);
  text(`INPUT: ${selectedStep === 0 ? scenarioSelect.value() + ' decision need' : 'Output from the previous stage'}\nACTION: ${step[2]}\nOUTPUT: ${step[3]}\nQUALITY CHECK: ${step[4]}\n\n${feedback}`, 38, y + 52, canvasWidth - 76, 124);
}

function mousePressed() {
  if (mouseY < 76 || mouseY > 390) return;
  const laneMap = {Marketing:0, Persona:1, Human:2}, laneCounts = {Marketing:0, Persona:0, Human:0};
  steps.forEach((step,i) => {
    const lane = laneMap[step[1]], pos = laneCounts[step[1]]++, count = step[1] === 'Marketing' ? 4 : step[1] === 'Persona' ? 3 : 2;
    const usable = canvasWidth - 110, w = max(65, (usable - (count - 1) * 8) / count), x = 86 + pos * (w + 8), y = 84 + lane * 122;
    if (mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + 62) { selectedStep = i; stageSelect.selected(String(i)); feedback = 'Inspect this stage, then place its matching artifact.'; }
  });
}

function placeArtifact() {
  const artifact = Number(artifactSelect.value()), target = Number(stageSelect.value()); selectedStep = target;
  if (artifacts[artifact][1] === target) { placed[target] = true; feedback = 'Correct placement. The artifact is the expected output or evidence for this stage.'; }
  else { feedback = `Not yet. “${artifacts[artifact][0]}” belongs at stage ${artifacts[artifact][1] + 1}: ${steps[artifacts[artifact][1]][0]}.`; }
}
function resetWorkflow() { placed = {}; selectedStep = 0; feedback = 'Workflow reset. Separate synthetic hypotheses from externally validated evidence.'; }
function positionControls() {
  const compact = canvasWidth < 620;
  scenarioSelect.position(12, drawHeight + 8); scenarioSelect.size(compact ? 135 : 170, 30);
  artifactSelect.position(compact ? 155 : 190, drawHeight + 8); artifactSelect.size(compact ? canvasWidth - 167 : max(180, canvasWidth - 202), 30);
  stageSelect.position(12, drawHeight + 50); stageSelect.size(compact ? 170 : 230, 30);
  placeButton.position(compact ? 190 : 250, drawHeight + 50);
  resetButton.position(compact ? 292 : 350, drawHeight + 50);
}
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const container = document.querySelector('main'); if (container) canvasWidth = max(400, floor(container.getBoundingClientRect().width)); }
