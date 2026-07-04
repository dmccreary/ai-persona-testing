---
title: Evidence-Grounded Journey Mapper
description: Construct a customer journey connecting stages, jobs, outcomes, contexts, touchpoints, forces, evidence, and alternative paths.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Evidence-Grounded Journey Mapper



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Jobs-to-Be-Done and Customer Journeys](../../chapters/08-jobs-customer-journeys/index.md).

```text
Type: workflow
**sim-id:** evidence-grounded-journey<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Create (L6)

**Bloom verb:** construct

**Learning objective:** Construct a customer journey connecting stages, jobs, outcomes, contexts, touchpoints, forces, evidence, and alternative paths.

**Layout:** Responsive journey lanes with stages as columns and rows for Job, Outcome, Context, Action, Touchpoint, Evidence, Emotion, and Barrier.

**Interaction:** Learners drag research notes into cells, create branches, and click a connector to explain why movement occurs. Unsupported cells remain visibly marked as assumptions.

**Feedback:** The mapper flags company-centered stages, missing customer outcomes, unsupported linearity, and touchpoints without evidence. Compare mode overlays two personas.

**Accessibility:** Keyboard editing, text export, collapsible rows, and vertical stage cards on narrow screens.

**Instructional rationale:** Building and revising a journey model supports creating by integrating many evidence types into a coherent path.

Implementation: Responsive p5.js journey canvas with semantic HTML editors.
```

## Related Resources

- [Chapter 8: Jobs-to-Be-Done and Customer Journeys](../../chapters/08-jobs-customer-journeys/index.md)
