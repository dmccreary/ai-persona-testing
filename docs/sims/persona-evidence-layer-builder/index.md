---
title: Persona Evidence Layer Builder
description: Classify research statements as behavior, preference, attitude, value, belief, demographic, psychographic, background, or context and connect each statement to evidence.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Persona Evidence Layer Builder



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Building Complete Customer Personas](../../chapters/05-customer-personas/index.md).

```text
Type: interactive infographic
**sim-id:** persona-evidence-layer-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** classify

**Learning objective:** Classify research statements as behavior, preference, attitude, value, belief, demographic, psychographic, background, or context and connect each statement to evidence.

**Layout:** A layered profile silhouette beside an evidence tray. Layers represent observable action, expressed choice, evaluation, guiding principle, accepted proposition, identity context, and situation.

**Interaction:** Learners drag statements from interview notes and analytics into layers. They then attach a source and set evidence status to Observed, Reported, Inferred, or Assumed.

**Feedback:** Misclassified cards receive explanations. Contradictory evidence remains visible instead of being averaged away. A profile-quality panel rewards traceability and penalizes unsupported certainty.

**Accessibility and responsiveness:** Provide keyboard sorting, text labels, a nonvisual table view, and layout changes on window resize.

**Instructional rationale:** Sorting authentic evidence and preserving its status supports analysis of closely related persona fields.

Implementation: Responsive p5.js layered canvas with semantic evidence cards.
```

## Related Resources

- [Chapter 5: Building Complete Customer Personas](../../chapters/05-customer-personas/index.md)
