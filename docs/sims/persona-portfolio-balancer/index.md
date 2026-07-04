---
title: Persona Portfolio Balancer
description: Design a persona portfolio that balances primary, secondary, negative, edge-case, adversarial, international, accessibility, and customer-state perspectives.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Persona Portfolio Balancer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Customer Segmentation and Persona Archetypes](../../chapters/07-segmentation-archetypes/index.md).

```text
Type: microsim
**sim-id:** persona-portfolio-balancer<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Create (L6)

**Bloom verb:** design

**Learning objective:** Design a persona portfolio that balances primary, secondary, negative, edge-case, adversarial, international, accessibility, and customer-state perspectives.

**Controls:** Marketing decision selector, portfolio size from three to twelve, evidence coverage toggles, and role assignment. Persona candidate cards show needs, behaviors, context, source quality, and uncertainty.

**Visual elements:** A coverage matrix compares selected personas across research roles, needs, channels, geography, access conditions, and lifecycle state. No demographic score is treated as diversity by itself.

**Feedback:** The tool flags redundant personas, unsupported roles, missing critical perspectives, unfair negative-persona criteria, and token diversity that does not change behavior. Learners justify every inclusion.

**Responsive and accessible design:** Matrix becomes stacked role cards below 750 pixels; provide keyboard selection, patterns, text report, and resize handling.

**Instructional rationale:** Portfolio construction supports creating because learners synthesize evidence and testing goals into a bounded system.

Implementation: p5.js portfolio workspace with semantic controls and exportable coverage report.
```

## Related Resources

- [Chapter 7: Customer Segmentation and Persona Archetypes](../../chapters/07-segmentation-archetypes/index.md)
