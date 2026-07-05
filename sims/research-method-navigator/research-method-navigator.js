// Research Question Method Navigator
// CANVAS_HEIGHT: 650
let canvasWidth = 400;
let drawHeight = 560;
let controlHeight = 90;
let canvasHeight = drawHeight + controlHeight;
let margin = 24;
let sliderLeftMargin = 180;
let defaultTextSize = 16;
let methodSelect, submitButton, alternateButton, nextButton;
let scenarioIndex = 0;
let feedback = 'Choose the method that would produce the most useful first evidence.';
let answered = false;
let correctCount = 0;

const methods = ['Customer - Qualitative', 'Customer - Quantitative', 'Market - Qualitative', 'Market - Quantitative'];
const methodColors = ['steelblue', 'teal', 'darkorange', 'mediumpurple'];
const scenarios = [
  ['Why do first-time visitors distrust this pricing page?', 0, 'Interviews or usability sessions reveal the beliefs and cues behind distrust.', 'A short survey can estimate how widespread the concern is after themes are known.'],
  ['What percentage of trial users convert within 30 days?', 1, 'Behavioral or funnel data measures the conversion rate directly.', 'Interviews can explain why users converted or abandoned, but not estimate the percentage.'],
  ['How do buyers describe emerging alternatives to our category?', 2, 'Exploratory market interviews reveal language and category boundaries.', 'A later market survey can quantify how common each description is.'],
  ['How large is the addressable segment for commuter e-bikes?', 3, 'Population, category, and purchase data estimate market size.', 'Qualitative work can test assumptions behind the segment definition.'],
  ['Which checkout step causes the most abandonment?', 1, 'Customer journey analytics compare drop-off rates by step.', 'Observation can explain the friction after the highest-loss step is found.'],
  ['What makes current customers recommend the service?', 0, 'Customer interviews uncover motives, moments, and language behind advocacy.', 'A referral survey can test which motives are most prevalent.'],
  ['Which competitor promise is gaining attention?', 2, 'Qualitative market scanning identifies changing promises and interpretations.', 'Share-of-voice data can quantify the trend after the promise categories are coded.'],
  ['How many category buyers recognize our brand?', 3, 'A representative market survey estimates unaided and aided awareness.', 'Interviews are useful for meaning, not a population estimate.'],
  ['Why do power users ignore the new dashboard?', 0, 'Customer observation and interviews expose workflow mismatch and unmet needs.', 'Usage logs can locate the behavior but cannot establish the reason alone.'],
  ['Which segment has the highest renewal rate?', 1, 'Customer account data compares renewal behavior across defined segments.', 'Qualitative follow-up can explain the strongest and weakest segment patterns.']
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const mainElement = document.querySelector('main');
  mainElement.style.position = 'relative';
  mainElement.style.height = canvasHeight + 'px';
  canvas.parent(mainElement);
  textSize(defaultTextSize);

  methodSelect = createSelect();
  methodSelect.parent(mainElement);
  methods.forEach(method => methodSelect.option(method));
  methodSelect.position(12, drawHeight + 10);
  methodSelect.size(Math.min(245, canvasWidth - 24), 32);

  submitButton = createButton('Check classification');
  submitButton.parent(mainElement);
  submitButton.position(270, drawHeight + 10);
  submitButton.mousePressed(checkAnswer);

  alternateButton = createButton('Show another defensible answer');
  alternateButton.parent(mainElement);
  alternateButton.position(12, drawHeight + 50);
  alternateButton.mousePressed(showAlternate);

  nextButton = createButton('Next question');
  nextButton.parent(mainElement);
  nextButton.position(250, drawHeight + 50);
  nextButton.mousePressed(nextScenario);
  describe('Classify marketing research questions by customer or market focus and qualitative or quantitative evidence.', LABEL);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); stroke('silver'); rect(0, drawHeight, canvasWidth, controlHeight);
  drawTitle();
  drawScenarioCard();
  drawMethodGrid();
  drawFeedback();
  positionControls();
}

function drawTitle() {
  fill('midnightblue'); noStroke(); textAlign(CENTER, TOP); textSize(24);
  text('Research Question Method Navigator', canvasWidth / 2, 14);
  fill('dimgray'); noStroke(); textSize(16);
  text(`Question ${scenarioIndex + 1} of ${scenarios.length}  |  Correct: ${correctCount}`, canvasWidth / 2, 48);
}

function drawScenarioCard() {
  const w = Math.min(canvasWidth - margin * 2, 820);
  fill('white'); stroke('slategray'); rect((canvasWidth - w) / 2, 82, w, 92, 10);
  fill('black'); noStroke(); textAlign(CENTER, CENTER); textSize(19);
  text(scenarios[scenarioIndex][0], (canvasWidth - w) / 2 + 18, 91, w - 36, 74);
}

function drawMethodGrid() {
  const gap = 14;
  const gridW = Math.min(canvasWidth - margin * 2, 820);
  const cellW = (gridW - gap) / 2;
  const startX = (canvasWidth - gridW) / 2;
  for (let i = 0; i < 4; i++) {
    const x = startX + (i % 2) * (cellW + gap);
    const y = 198 + Math.floor(i / 2) * 92;
    fill(methodColors[i]); stroke('white'); rect(x, y, cellW, 76, 10);
    fill('white'); noStroke(); textAlign(CENTER, CENTER); textSize(17);
    text(methods[i], x + 10, y + 8, cellW - 20, 60);
  }
}

function drawFeedback() {
  const w = Math.min(canvasWidth - margin * 2, 820);
  fill(answered ? 'honeydew' : 'whitesmoke'); stroke(answered ? 'seagreen' : 'silver');
  rect((canvasWidth - w) / 2, 398, w, 132, 10);
  fill('black'); noStroke(); textAlign(LEFT, TOP); textSize(16);
  text(feedback, (canvasWidth - w) / 2 + 16, 414, w - 32, 102);
}

function checkAnswer() {
  const selected = methods.indexOf(methodSelect.value());
  const correct = scenarios[scenarioIndex][1];
  answered = true;
  if (selected === correct) {
    correctCount++;
    feedback = `Good classification. ${scenarios[scenarioIndex][2]}`;
  } else {
    feedback = `A stronger first choice is ${methods[correct]}. ${scenarios[scenarioIndex][2]}`;
  }
}

function showAlternate() {
  answered = true;
  feedback = `Mixed-method extension: ${scenarios[scenarioIndex][3]}`;
}

function nextScenario() {
  scenarioIndex = (scenarioIndex + 1) % scenarios.length;
  answered = false;
  feedback = scenarioIndex > 0 && scenarioIndex % 3 === 0
    ? 'Reasoning check: name the evidence you would collect before choosing.'
    : 'Choose the method that would produce the most useful first evidence.';
}

function positionControls() {
  const compact = canvasWidth < 600;
  methodSelect.position(12, drawHeight + 8);
  methodSelect.size(compact ? 175 : 245, 32);
  submitButton.position(compact ? 195 : 270, drawHeight + 10);
  alternateButton.html(compact ? 'Another answer' : 'Show another defensible answer');
  alternateButton.position(12, drawHeight + 50);
  nextButton.html(compact ? 'Next' : 'Next question');
  nextButton.position(compact ? 240 : 250, drawHeight + 50);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  positionControls();
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) canvasWidth = Math.max(380, Math.floor(container.getBoundingClientRect().width));
}
