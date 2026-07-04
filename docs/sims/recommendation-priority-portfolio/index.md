---
title: Recommendation Priority Portfolio
description: Prioritize recommendations using risk, business impact, implementation effort, evidence confidence, dependencies, equity, and learning value.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Recommendation Priority Portfolio



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 19: Risk-Based Recommendations and Knowledge Graphs](../../chapters/19-risk-knowledge-graphs/index.md).

```text
Type: interactive infographic
**sim-id:** recommendation-priority-portfolio<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** prioritize

**Learning objective:** Prioritize recommendations using risk, business impact, implementation effort, evidence confidence, dependencies, equity, and learning value.

**Interaction:** Learners place recommendations on an Impact versus Effort canvas, then reveal risk and confidence overlays. They can change criteria and inspect ranking stability.

**Feedback:** The tool flags easy but low-value work, severe risks hidden by effort, duplicate recommendations, and actions unsupported by findings.

**Responsive design:** Canvas becomes a sortable accessible list on narrow screens, with keyboard movement and resize handling.

**Instructional rationale:** Multi-criteria ranking and sensitivity support evaluation.

Implementation: Responsive p5.js portfolio with evidence-linked cards.
```

## Related Resources

- [Chapter 19: Risk-Based Recommendations and Knowledge Graphs](../../chapters/19-risk-knowledge-graphs/index.md)
