---
title: Switching Forces Balance Lab
description: Examine how push, pull, habit, and anxiety forces combine to produce switching, delay, or retention.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Switching Forces Balance Lab



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Jobs-to-Be-Done and Customer Journeys](../../chapters/08-jobs-customer-journeys/index.md).

```text
Type: microsim
**sim-id:** switching-forces-balance<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** examine

**Learning objective:** Examine how push, pull, habit, and anxiety forces combine to produce switching, delay, or retention.

**Controls:** Sliders for each force, evidence toggles, deadline, reversibility, and stakeholder support. Defaults show moderate push and pull with strong habit.

**Visual elements:** A transparent force balance and decision path. Changing a control reveals which evidence or circumstance altered the balance; no conversion probability is claimed.

**Interaction:** Learners predict Switch, Delay, or Stay, adjust a marketing intervention, and receive feedback about whether it strengthens pull, reduces anxiety, or ignores the real barrier.

**Responsive design:** Scale horizontally on wide screens and stack controls below the balance on narrow screens. Include keyboard controls and text summary.

**Instructional rationale:** Manipulating forces and interpreting consequences supports analysis of a multi-causal decision.

Implementation: p5.js force visualization with accessible HTML sliders.
```

## Related Resources

- [Chapter 8: Jobs-to-Be-Done and Customer Journeys](../../chapters/08-jobs-customer-journeys/index.md)
