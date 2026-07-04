---
title: Weighting and Normalization Explorer
description: Examine how weighting, normalization, missing data, and noncompensatory gates affect an evaluation result.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Weighting and Normalization Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 17: Evaluation Rubrics, Scoring, and Evidence](../../chapters/17-rubrics-scoring-evidence/index.md).

```text
Type: microsim
**sim-id:** weighting-normalization-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** examine

**Learning objective:** Examine how weighting, normalization, missing data, and noncompensatory gates affect an evaluation result.

**Controls:** Criterion weights, raw ratings, scale ranges, missing-data policy, and mandatory gates. Defaults compare two campaign concepts.

**Visual elements:** Original ratings, normalized values, weighted contribution, final score, and decision stability. Every transformation is visible.

**Interaction:** Learners adjust weights, predict the effect, and run sensitivity analysis. Feedback flags hidden compensation and unstable ranking.

**Responsive design:** Contribution chart and controls stack on narrow screens, with keyboard sliders and table alternative.

**Instructional rationale:** Parameter manipulation supports analysis of score construction and sensitivity.

Implementation: p5.js transparent calculation view with accessible controls.
```

## Related Resources

- [Chapter 17: Evaluation Rubrics, Scoring, and Evidence](../../chapters/17-rubrics-scoring-evidence/index.md)
