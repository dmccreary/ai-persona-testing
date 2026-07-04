---
title: Persona Purpose Canvas
description: Formulate a bounded persona purpose connecting a customer pattern, use context, evaluation task, decision, and explicit exclusions.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Persona Purpose Canvas



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Building Complete Customer Personas](../../chapters/05-customer-personas/index.md).

```text
Type: interactive infographic
**sim-id:** persona-purpose-canvas<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Create (L6)

**Bloom verb:** formulate

**Learning objective:** Formulate a bounded persona purpose connecting a customer pattern, use context, evaluation task, decision, and explicit exclusions.

**Layout:** Five responsive canvas zones labeled Represents, Situation, Evaluates, Informs, and Does Not Establish. A scenario tray provides evidence and business-decision cards.

**Interaction:** Learners drag relevant cards into zones, discard irrelevant detail, and edit a generated purpose sentence. The system flags purposes that name only demographics, omit a decision, or claim population authority.

**Feedback:** Clicking a card explains its relevance. A “Change the decision” button demonstrates that the same audience may require a different persona design for pricing, accessibility, onboarding, or brand-trust research.

**Accessibility:** Keyboard card controls, visible focus, text export, and stacked layout below 700 pixels. Respond to window resize events.

**Instructional rationale:** A synthesis canvas supports creating because learners combine research and decision constraints into an original persona purpose.

Implementation: Responsive p5.js workspace with semantic HTML card editors.
```

## Related Resources

- [Chapter 5: Building Complete Customer Personas](../../chapters/05-customer-personas/index.md)
