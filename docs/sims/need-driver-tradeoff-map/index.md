---
title: Need and Driver Trade-Off Map
description: Organize emotional drivers, functional needs, and social needs into a causal network that explains a persona's competing priorities.
status: scaffold
library: vis-network
bloom_level: TBD
---

# Need and Driver Trade-Off Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Persona Motivations, Behaviors, and Evidence](../../chapters/06-persona-behavior-evidence/index.md).

```text
Type: graph-model
**sim-id:** need-driver-tradeoff-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** organize

**Learning objective:** Organize emotional drivers, functional needs, and social needs into a causal network that explains a persona's competing priorities.

**Node types:** Goal, Emotional Driver, Functional Need, Social Need, Constraint, Marketing Claim, and Evidence. Properties show source and confidence.

**Edges:** SUPPORTS, CONFLICTS_WITH, REQUIRES, CONSTRAINED_BY, ADDRESSED_BY, and GROUNDED_IN. Every node and edge reveals a definition and example when selected.

**Interaction:** Learners build a network for a purchase scenario, then change time pressure or stakeholder involvement. The tool highlights which needs become more important and asks the learner to explain why.

**Feedback:** Disconnected claims and unsupported needs are flagged. A balance panel shows tensions without reducing them to one score.

**Responsive design:** Force-directed network with zoom, drag, keyboard navigation, a text alternative, and resize handling.

**Instructional rationale:** Relationship construction supports analysis because the learner must explain how different need types reinforce or conflict with one another.

Implementation: vis-network model editor with accessible side panel and JSON export.
```

## Related Resources

- [Chapter 6: Persona Motivations, Behaviors, and Evidence](../../chapters/06-persona-behavior-evidence/index.md)
