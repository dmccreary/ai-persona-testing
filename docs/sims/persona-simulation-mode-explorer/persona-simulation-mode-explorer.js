// Persona Simulation Mode Explorer
// CANVAS_HEIGHT: 710
let canvasWidth = 400;
let drawHeight = 620;
let controlHeight = 90;
let canvasHeight = drawHeight + controlHeight;
let margin = 24;
let sliderLeftMargin = 190;
let defaultTextSize = 16;
let modeSelect, pinButton, scenarioSelect, checkButton;
let selectedMode = 0;
let pinned = [];
let feedback = 'Select a mode to inspect its structure and expected evidence.';
const modes = [
  {name:'Customer Simulation', purpose:'Explore one customer perspective', agents:'1 persona', pattern:'Independent response', evidence:'Hypotheses and language cues', color:'steelblue'},
  {name:'Agent-Based Simulation', purpose:'Compare heterogeneous responses', agents:'Several agents', pattern:'Independent or rule-based', evidence:'Pattern variation and segments', color:'teal'},
  {name:'AI Focus Group', purpose:'Observe discussion and disagreement', agents:'Several + moderator', pattern:'Moderated round table', evidence:'Arguments, reactions, consensus', color:'mediumpurple'},
  {name:'Brand Stress Testing', purpose:'Probe weak claims and failure modes', agents:'Adversarial reviewers', pattern:'Challenge and rebuttal', evidence:'Risks and boundary conditions', color:'darkorange'}
];
const scenarios = [
  ['Find unclear claims', 3], ['Observe disagreement', 2], ['Hear one budget commuter', 0], ['Compare several customer types', 1]
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const mainElement = document.querySelector('main'); mainElement.style.position = 'relative'; mainElement.style.height = canvasHeight + 'px'; canvas.parent(mainElement);
  modeSelect = createSelect(); modeSelect.parent(mainElement); modes.forEach((m, i) => modeSelect.option(m.name, i)); modeSelect.changed(() => { selectedMode = Number(modeSelect.value()); feedback = modes[selectedMode].purpose; });
  pinButton = createButton('Pin for comparison'); pinButton.parent(mainElement); pinButton.mousePressed(pinMode);
  scenarioSelect = createSelect(); scenarioSelect.parent(mainElement); scenarios.forEach((s, i) => scenarioSelect.option(s[0], i));
  checkButton = createButton('Check scenario'); checkButton.parent(mainElement); checkButton.mousePressed(checkScenario);
  describe('Compare four AI persona simulation modes by purpose, participant structure, interaction pattern, and evidence.', LABEL);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); stroke('silver'); rect(0, drawHeight, canvasWidth, controlHeight);
  fill('midnightblue'); noStroke(); textAlign(CENTER, TOP); textSize(24); text('Persona Simulation Mode Explorer', canvasWidth / 2, 12);
  drawModeCards(); drawAssetAndParticipants(); drawComparison(); drawFeedback(); positionControls();
}

function drawModeCards() {
  const gap = 10, totalW = min(canvasWidth - 32, 920), cardW = (totalW - gap * 3) / 4, x0 = (canvasWidth - totalW) / 2;
  modes.forEach((mode, i) => {
    const x = x0 + i * (cardW + gap), selected = i === selectedMode;
    fill(selected ? mode.color : 'white'); stroke(mode.color); strokeWeight(selected ? 3 : 1); rect(x, 58, cardW, 82, 9);
    fill(selected ? 'white' : 'black'); noStroke(); textAlign(CENTER, CENTER); textSize(15); text(mode.name, x + 8, 66, cardW - 16, 64);
  }); strokeWeight(1);
}

function drawAssetAndParticipants() {
  const mode = modes[selectedMode], cx = canvasWidth / 2, cy = 292;
  fill('white'); stroke('slategray'); rect(cx - 105, cy - 48, 210, 96, 12);
  fill('black'); noStroke(); textAlign(CENTER, CENTER); textSize(19); text('Marketing Asset', cx, cy - 12); textSize(15); text('Headline • Ad • Service concept', cx, cy + 22);
  const count = [1, 5, 5, 4][selectedMode];
  for (let i = 0; i < count; i++) {
    const angle = -PI * 0.9 + (count === 1 ? PI * 0.9 : i * PI * 1.8 / (count - 1));
    const px = cx + cos(angle) * min(250, canvasWidth * 0.3), py = cy + sin(angle) * 112;
    stroke(mode.color); strokeWeight(selectedMode === 3 ? 3 : 2); line(px, py, cx, cy);
    fill(mode.color); stroke('white'); circle(px, py, 48);
    fill('white'); noStroke(); textAlign(CENTER, CENTER); textSize(13); text(selectedMode === 2 && i === 0 ? 'MOD' : selectedMode === 3 ? 'PROBE' : `A${i + 1}`, px, py);
  } strokeWeight(1);
  fill('white'); stroke(mode.color); rect(24, 425, canvasWidth - 48, 106, 10);
  fill('black'); noStroke(); textAlign(LEFT, TOP); textSize(16);
  text(`Purpose: ${mode.purpose}\nParticipants: ${mode.agents}\nInteraction: ${mode.pattern}\nExpected evidence: ${mode.evidence}`, 42, 442, canvasWidth - 84, 82);
}

function drawComparison() {
  if (pinned.length !== 2) return;
  const a = modes[pinned[0]], b = modes[pinned[1]];
  fill('lavender'); stroke('mediumpurple'); rect(24, 540, canvasWidth - 48, 50, 8);
  fill('black'); noStroke(); textAlign(CENTER, CENTER); textSize(14);
  text(`${a.name}: ${a.agents}  ↔  ${b.name}: ${b.agents}`, canvasWidth / 2, 565);
}

function drawFeedback() { fill('midnightblue'); noStroke(); textAlign(CENTER, CENTER); textSize(15); text(feedback, 24, 590, canvasWidth - 48, 28); }
function pinMode() { if (!pinned.includes(selectedMode)) pinned.push(selectedMode); if (pinned.length > 2) pinned.shift(); feedback = pinned.length === 2 ? 'Two modes pinned. Compare participant count and evidence.' : 'Pin one more mode to compare.'; }
function checkScenario() { const item = scenarios[Number(scenarioSelect.value())]; feedback = item[1] === selectedMode ? `Correct: ${modes[selectedMode].purpose}.` : `Try ${modes[item[1]].name}: ${modes[item[1]].purpose}.`; }
function positionControls() { modeSelect.position(12, drawHeight + 8); modeSelect.size(220, 30); pinButton.position(242, drawHeight + 8); scenarioSelect.position(12, drawHeight + 50); scenarioSelect.size(220, 30); checkButton.position(242, drawHeight + 50); }
function mousePressed() { if (mouseY >= 58 && mouseY <= 140) { const totalW = min(canvasWidth - 32, 920), cardW = (totalW - 30) / 4, x0 = (canvasWidth - totalW) / 2; const i = floor((mouseX - x0) / (cardW + 10)); if (i >= 0 && i < 4) { selectedMode = i; modeSelect.selected(String(i)); feedback = modes[i].purpose; } } }
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const container = document.querySelector('main'); if (container) canvasWidth = max(420, floor(container.getBoundingClientRect().width)); }
