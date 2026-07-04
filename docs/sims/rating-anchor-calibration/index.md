---
title: Rating Anchor Calibration Lab
description: Apply anchored rating guidance to marketing evidence and calibrate disagreements among reviewers.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Rating Anchor Calibration Lab



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 17: Evaluation Rubrics, Scoring, and Evidence](../../chapters/17-rubrics-scoring-evidence/index.md).

```text
Type: microsim
**sim-id:** rating-anchor-calibration<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Apply (L3)

**Bloom verb:** apply

**Learning objective:** Apply anchored rating guidance to marketing evidence and calibrate disagreements among reviewers.

**Interaction:** Learners rate asset excerpts on a five-level clarity scale, attach evidence, and compare with two reviewer ratings. Borderline cases require written rationale.

**Feedback:** The tool reveals which anchor conditions were met, distinguishes missing evidence from poor performance, and shows whether disagreement comes from evidence or anchor interpretation.

**Responsive design:** Evidence and anchor panels become tabs on narrow screens, with keyboard ratings and resize handling.

**Instructional rationale:** Repeated anchored judgment with feedback supports applying and calibration.

Implementation: p5.js rating interface with semantic HTML evidence controls.
```

## Related Resources

- [Chapter 17: Evaluation Rubrics, Scoring, and Evidence](../../chapters/17-rubrics-scoring-evidence/index.md)
