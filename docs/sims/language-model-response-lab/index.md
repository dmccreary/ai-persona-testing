---
title: Language Model Response Laboratory
description: Step through a simplified language-model response process from instruction and tokens to context and variable output.
status: deployed
image: /sims/language-model-response-lab/language-model-response-lab.png
og:image: /sims/language-model-response-lab/language-model-response-lab.png
twitter:image: /sims/language-model-response-lab/language-model-response-lab.png
social:
   cards: false
quality_score: 98
---

# Language Model Response Laboratory

<iframe src="main.html" height="717" width="100%" scrolling="no"></iframe>

[Run the Language Model Response Laboratory MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
<br/>
[Edit in the p5.js Editor](https://editor.p5js.org/)

## About This MicroSim

This worked example makes four otherwise abstract ideas visible: instructional roles, simplified tokens, finite context, and illustrative next-phrase probabilities. It explicitly distinguishes stable meaning from variable wording without claiming access to proprietary model internals.

## How to Use

Make a prediction, then use **Next** and **Previous** to inspect each stage. At the context stage, add irrelevant material; at the probability stage, vary the illustrative distribution and compare the two final responses.

## Iframe Embed Code

You can add this MicroSim to any web page by adding this to your HTML:

```html
<iframe src="https://dmccreary.github.io/ai-persona-testing/sims/language-model-response-lab/main.html"
        height="717"
        width="100%"
        scrolling="no"></iframe>
```

## Lesson Plan

### Grade Level
High school, undergraduate, and professional AI literacy

### Duration
10-15 minutes

### Prerequisites
No programming experience is required; learners should understand that language models generate text from prompts.

### Activities

1. **Predict** (3 min): Choose which input will most influence the response.
2. **Step through** (7 min): Explain what changes at each processing stage.
3. **Compare** (5 min): Identify stable meaning and variable wording across two runs.

### Assessment
Learners can explain the role of instructions, tokenization, context limits, and probabilistic selection without treating the teaching probabilities as actual internal model values.

## References

1. [Attention Is All You Need](https://arxiv.org/abs/1706.03762) - Foundational transformer architecture paper.
2. [p5.js Reference](https://p5js.org/reference/) - Documentation for the interactive rendering library.
