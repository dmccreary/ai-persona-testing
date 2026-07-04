---
title: Segmentation Basis Classifier
description: Classify customer evidence by segmentation basis and judge whether the proposed difference is decision-relevant and actionable.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Segmentation Basis Classifier



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Customer Segmentation and Persona Archetypes](../../chapters/07-segmentation-archetypes/index.md).

```text
Type: interactive infographic
**sim-id:** segmentation-basis-classifier<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Apply (L3)

**Bloom verb:** classify

**Learning objective:** Classify customer evidence by segmentation basis and judge whether the proposed difference is decision-relevant and actionable.

**Interaction:** Learners sort evidence cards into Behavioral, Demographic, Psychographic, Needs-Based, or Value-Based zones. They then select the marketing decision each distinction could inform.

**Feedback:** Cards can fit more than one basis; feedback explains the strongest interpretation and why mixed bases must remain explicit. Weak cards such as “modern customers” are rejected until operationalized.

**Scenarios:** Subscription renewal, nonprofit donation, commuter service, and business software. Include contradictory and missing evidence.

**Responsive design:** Five zones wrap into an accordion on narrow displays. Provide keyboard sorting, text alternatives, and resize handling.

**Instructional rationale:** Sorting evidence and connecting it to action supports applying rather than merely recalling category names.

Implementation: Responsive p5.js sorting canvas with semantic HTML cards.
```

## Related Resources

- [Chapter 7: Customer Segmentation and Persona Archetypes](../../chapters/07-segmentation-archetypes/index.md)
