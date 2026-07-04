---
title: Customer State Transition Explorer
description: Explain how experience, value, trust, price, changing needs, and service recovery can move customers among new, loyal, lapsed, budget, and premium states.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Customer State Transition Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Customer Segmentation and Persona Archetypes](../../chapters/07-segmentation-archetypes/index.md).

```text
Type: microsim
**sim-id:** customer-state-transition<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Understand (L2)

**Bloom verb:** explain

**Learning objective:** Explain how experience, value, trust, price, changing needs, and service recovery can move customers among new, loyal, lapsed, budget, and premium states.

**Data visibility requirements:** Show a customer timeline, the current relationship state, triggering event, evidence considered, and resulting state. Learners predict the transition before revealing it.

**Controls:** Next/Previous, scenario selector, service-recovery toggle, value change, price change, and trust event. States are treated as overlapping lenses rather than mutually exclusive boxes.

**Feedback:** The simulator explains why the same event can produce different transitions under different needs and risk. It rejects deterministic demographic rules.

**Responsive design:** Timeline becomes vertical on narrow screens, with keyboard controls, text alternative, and resize response.

**Instructional rationale:** Worked transitions support understanding by making state changes and their evidence visible step by step.

Implementation: p5.js step-through timeline with accessible controls and scenario data.
```

## Related Resources

- [Chapter 7: Customer Segmentation and Persona Archetypes](../../chapters/07-segmentation-archetypes/index.md)
