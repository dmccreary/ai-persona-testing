---
title: Context Budget Laboratory
description: Prioritize and compress prompt context while preserving instructions, verified facts, persona fidelity, criteria, uncertainty, and source traceability.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Context Budget Laboratory



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 10: Prompt Engineering Foundations](../../chapters/10-prompt-engineering/index.md).

```text
Type: microsim
**sim-id:** context-budget-lab<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** prioritize

**Learning objective:** Prioritize and compress prompt context while preserving instructions, verified facts, persona fidelity, criteria, uncertainty, and source traceability.

**Controls:** Context-window budget, item cards with token costs, priority, sensitivity, age, and source status; Compress, Reference, Exclude, and Restore actions.

**Visual elements:** A context meter and quality indicators for Role Fidelity, Evidence, Criteria, Safety, and Traceability. Learners must fit a scenario within the budget.

**Feedback:** Removing essential context triggers a specific predicted failure. Compression choices reveal what was preserved or lost. Decorative persona detail competes with decision-relevant evidence.

**Responsive design:** Cards wrap, meter remains visible, keyboard actions are supported, and layout updates on resize.

**Instructional rationale:** Resource-constrained prioritization supports analysis of information value and loss.

Implementation: p5.js budget visualization with accessible context cards.
```

## Related Resources

- [Chapter 10: Prompt Engineering Foundations](../../chapters/10-prompt-engineering/index.md)
