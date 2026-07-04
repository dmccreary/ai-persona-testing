---
title: Evidence-to-Decision Trace
description: Use a traceable workflow to convert evidence into risk, alternatives, decision, improvement hypothesis, implementation, validation, and learning.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Evidence-to-Decision Trace



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 19: Risk-Based Recommendations and Knowledge Graphs](../../chapters/19-risk-knowledge-graphs/index.md).

```text
Type: workflow
**sim-id:** evidence-decision-trace<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Apply (L3)

**Bloom verb:** use

**Learning objective:** Use a traceable workflow to convert evidence into risk, alternatives, decision, improvement hypothesis, implementation, validation, and learning.

**Interaction:** Learners move a finding through decision gates, attach evidence, compare alternatives, and define a test. Every stage shows owner and confidence.

**Feedback:** The workflow flags recommendations without findings, actions without owners, hypotheses without measures, and decisions that ignore contradictory evidence.

**Responsive design:** Swimlane flow stacks on narrow screens, with keyboard controls and text audit trail.

**Instructional rationale:** Executing the complete decision loop supports applying evidence-based improvement.

Implementation: Responsive p5.js workflow with semantic artifacts.
```

## Related Resources

- [Chapter 19: Risk-Based Recommendations and Knowledge Graphs](../../chapters/19-risk-knowledge-graphs/index.md)
