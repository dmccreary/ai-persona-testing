---
title: Confidence Calibration Challenge
description: Assess evidence quality and assign a defensible confidence level with a specific uncertainty disclosure.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Confidence Calibration Challenge



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Responsible AI, Privacy, and Governance](../../chapters/04-responsible-ai-governance/index.md).

```text
Type: microsim
**sim-id:** confidence-calibration-challenge<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** assess

**Learning objective:** Assess evidence quality and assign a defensible confidence level with a specific uncertainty disclosure.

**Controls:** Evidence-source toggles, run-stability slider, persona-grounding selector, contradiction indicator, and validation-status selector. Learners set Low, Moderate, or High confidence and write a one-sentence disclosure.

**Scenarios:** Brand clarity, accessibility, purchase intent, cultural interpretation, and competitor fact. Each scenario reveals evidence in stages.

**Feedback:** The tool compares the learner's rating with a criteria-based range, highlights overconfidence or underconfidence, and critiques whether the disclosure names the material uncertainty.

**Visual design:** Evidence cards feed a transparent balance scale rather than a fake precision gauge. Patterns and labels supplement color.

**Responsive behavior:** Cards wrap by available width; controls remain keyboard accessible and re-render on resize.

**Instructional rationale:** Calibration requires repeated judgment against evidence criteria and immediate feedback about the gap between certainty and support.

Implementation: p5.js balance visualization with semantic HTML controls and rubric feedback.
```

## Related Resources

- [Chapter 4: Responsible AI, Privacy, and Governance](../../chapters/04-responsible-ai-governance/index.md)
