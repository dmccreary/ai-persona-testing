---
title: Goal–Motivation–Need Network
description: Construct a traceable network connecting persona goals to motivations, needs, context, behaviors, and marketing evidence.
status: scaffold
library: vis-network
bloom_level: TBD
---

# Goal–Motivation–Need Network



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Building Complete Customer Personas](../../chapters/05-customer-personas/index.md).

```text
Type: graph-model
**sim-id:** goal-motivation-need-network<br/>
**Library:** vis-network<br/>
**Status:** Specified

**Bloom level:** Create (L6)

**Bloom verb:** construct

**Learning objective:** Construct a traceable network connecting persona goals to motivations, needs, context, behaviors, and marketing evidence.

**Node types:** Goal, Motivation, Need, Context, Behavior, Asset Claim, and Evidence. Node properties show source and confidence.

**Edges:** MOTIVATED_BY, REQUIRES, OCCURS_IN, EXPRESSED_AS, ADDRESSED_BY, and SUPPORTED_BY. Every node and edge is clickable and explains the relationship.

**Interaction:** Learners build a network for a scenario, test whether each asset claim addresses a need, and highlight disconnected decorative persona details. The tool flags circular reasoning and unsupported motivations.

**Visual design:** Hierarchical layout from goals to evidence, with zoom, pan, drag, neighborhood highlighting, accessible side panel, and responsive resizing.

**Instructional rationale:** Building a relationship model supports creating and makes the persona's decision logic inspectable.

Implementation: vis-network model editor with keyboard navigation and JSON export.
```

## Related Resources

- [Chapter 5: Building Complete Customer Personas](../../chapters/05-customer-personas/index.md)
