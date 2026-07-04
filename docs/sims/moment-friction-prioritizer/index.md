---
title: Moment and Friction Prioritizer
description: Prioritize journey opportunities by customer impact, frequency, severity, equity, evidence strength, and implementation risk.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Moment and Friction Prioritizer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Jobs-to-Be-Done and Customer Journeys](../../chapters/08-jobs-customer-journeys/index.md).

```text
Type: interactive infographic
**sim-id:** moment-friction-prioritizer<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** prioritize

**Learning objective:** Prioritize journey opportunities by customer impact, frequency, severity, equity, evidence strength, and implementation risk.

**Layout:** Touchpoint cards plot on an Impact versus Evidence matrix. Additional badges show frequency, affected persona, and whether friction is necessary.

**Interaction:** Learners inspect evidence, adjust criteria weights, compare two personas, and move proposed opportunities into Now, Investigate, or Later. Feedback warns when frequency hides severe accessibility harm.

**Responsive design:** Matrix becomes a ranked card list on narrow screens, with keyboard controls, patterns, and resize handling.

**Instructional rationale:** Ranking opportunities against explicit criteria supports evaluation and justified recommendation.

Implementation: Responsive p5.js matrix with accessible control panel.
```

## Related Resources

- [Chapter 8: Jobs-to-Be-Done and Customer Journeys](../../chapters/08-jobs-customer-journeys/index.md)
