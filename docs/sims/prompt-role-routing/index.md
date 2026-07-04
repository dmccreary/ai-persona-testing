---
title: Prompt Role Routing Lab
description: Classify instructions by persona, moderator, reviewer, skeptic, or evaluation role and repair conflicting authority.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Prompt Role Routing Lab



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 10: Prompt Engineering Foundations](../../chapters/10-prompt-engineering/index.md).

```text
Type: interactive infographic
**sim-id:** prompt-role-routing<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Apply (L3)

**Bloom verb:** classify

**Learning objective:** Classify instructions by persona, moderator, reviewer, skeptic, or evaluation role and repair conflicting authority.

**Interaction:** Learners route instruction cards to role panels, inspect conflicts, and rewrite misplaced instructions. Scenarios include a moderator scoring participants, a persona writing executive recommendations, and a skeptic refusing valid evidence.

**Feedback:** Every card explains why it belongs to a role and what failure occurs when roles are blended. A combined workflow view shows message handoffs.

**Responsive design:** Role panels become tabs on narrow screens, with keyboard routing and resize handling.

**Instructional rationale:** Sorting and repairing role instructions supports applying a separation-of-responsibilities model.

Implementation: Responsive p5.js card lab with semantic HTML editors.
```

## Related Resources

- [Chapter 10: Prompt Engineering Foundations](../../chapters/10-prompt-engineering/index.md)
