---
title: Trigger-to-Decision Journey Simulator
description: Demonstrate how purchase triggers, barriers, decision criteria, evidence, and stakeholder approval alter a buying path.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Trigger-to-Decision Journey Simulator



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Persona Motivations, Behaviors, and Evidence](../../chapters/06-persona-behavior-evidence/index.md).

```text
Type: microsim
**sim-id:** trigger-decision-journey<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Apply (L3)

**Bloom verb:** demonstrate

**Learning objective:** Demonstrate how purchase triggers, barriers, decision criteria, evidence, and stakeholder approval alter a buying path.

**Controls:** Trigger selector, barrier-strength sliders, criterion-priority controls, available evidence toggles, and stakeholder approval status. Defaults model a moderate-risk software purchase.

**Visual elements:** A branching journey from inactive need to research, shortlist, trial, approval, purchase, defer, or reject. The current path is highlighted and every branch displays the condition that caused it.

**Interaction:** Learners predict the next state before changing a parameter. The simulator explains why a barrier blocks progress or why evidence satisfies a criterion. It avoids claiming to predict real conversion rates.

**Accessibility and responsiveness:** Use HTML controls, a text path summary, patterned states, keyboard access, and vertical layout on narrow screens.

**Instructional rationale:** Parameter exploration supports applying by requiring learners to use decision concepts in unfamiliar scenarios.

Implementation: p5.js state diagram with deterministic teaching rules and scenario JSON.
```

## Related Resources

- [Chapter 6: Persona Motivations, Behaviors, and Evidence](../../chapters/06-persona-behavior-evidence/index.md)
