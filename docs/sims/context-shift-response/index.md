---
title: Context Shift Response Explorer
description: Explain how changing task, device, time pressure, journey stage, and decision stakes can change a persona's evaluation without changing its core profile.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Context Shift Response Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Building Complete Customer Personas](../../chapters/05-customer-personas/index.md).

```text
Type: microsim
**sim-id:** context-shift-response<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Understand (L2)

**Bloom verb:** explain

**Learning objective:** Explain how changing task, device, time pressure, journey stage, and decision stakes can change a persona's evaluation without changing its core profile.

**Data visibility requirements:** Stage 1 shows a fixed persona profile and marketing message. Stage 2 displays baseline context fields. Stage 3 lets the learner change one field. Stage 4 shows a side-by-side response with changed phrases highlighted. Final stage asks which change plausibly caused each difference.

**Controls:** Device, time available, journey stage, social setting, decision authority, and consequence severity. Next, Previous, Predict, Reveal, and Reset buttons support step-through learning.

**Feedback:** The simulation distinguishes evidence-grounded contextual effects from unsupported claims. Learners must explain a change before revealing the worked interpretation.

**Responsive design:** Side-by-side comparison becomes stacked cards on narrow screens; all controls are semantic HTML and update on resize.

**Instructional rationale:** Concrete before-and-after data supports understanding better than continuous animation because learners can predict and trace each contextual change.

Implementation: p5.js comparison view with accessible HTML selectors and fixed worked examples.
```

## Related Resources

- [Chapter 5: Building Complete Customer Personas](../../chapters/05-customer-personas/index.md)
