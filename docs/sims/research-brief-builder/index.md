---
title: Research Brief Builder
description: Formulate a coherent research brief that connects a marketing decision to questions, objectives, scope, assumptions, constraints, and evidence criteria.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Research Brief Builder



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Research Design and Evidence Quality](../../chapters/02-research-design-evidence/index.md).

```text
Type: workflow
**sim-id:** research-brief-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Create (L6)

**Bloom verb:** formulate

**Learning objective:** Formulate a coherent research brief that connects a marketing decision to questions, objectives, scope, assumptions, constraints, and evidence criteria.

**Layout:** A responsive left-to-right workflow with cards for Decision, Question, Objectives, Scope, Assumptions, Constraints, Method, and Evidence Standard. On narrow screens, cards stack vertically.

**Interaction:** Learners choose one of three marketing scenarios or enter their own. They drag statement cards into the appropriate stage, edit weak statements, and click connectors to see why each output becomes the next stage's input. The tool flags objectives that cannot answer the question and scope statements that conflict with constraints.

**Feedback:** A completeness meter explains missing connections. “Stress-test brief” introduces a new constraint and asks the learner to revise the design. Export produces a plain-text brief.

**Accessibility:** All drag actions have keyboard alternatives; cards use text labels in addition to color. Layout and connectors respond to window resize events.

**Instructional rationale:** Building and revising a brief supports creating because learners combine design elements into an original research plan.

Implementation: p5.js workflow canvas with semantic HTML editors and rule-based feedback.
```

## Related Resources

- [Chapter 2: Research Design and Evidence Quality](../../chapters/02-research-design-evidence/index.md)
