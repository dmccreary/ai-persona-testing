---
title: Gap, Signal, and Confusion Map
description: Attribute messaging gaps, credibility gaps, trust signals, and confusion points to specific asset evidence, persona context, and consequences.
status: scaffold
library: vis-network
bloom_level: TBD
---

# Gap, Signal, and Confusion Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 18: Marketing Metrics and Pattern Analysis](../../chapters/18-marketing-metrics-analysis/index.md).

```text
Type: graph-model
**sim-id:** gap-signal-confusion-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** attribute

**Learning objective:** Attribute messaging gaps, credibility gaps, trust signals, and confusion points to specific asset evidence, persona context, and consequences.

**Node types:** Intended Message, Asset Element, Persona Interpretation, Evidence, Trust Signal, Confusion Point, Messaging Gap, Credibility Gap, and Action.

**Interaction:** Select a gap to highlight its causal path, attach missing proof or revised message, and compare persona responses. Every edge reveals rationale.

**Feedback:** The graph flags unsupported fixes and trust signals unrelated to the identified gap.

**Responsive design:** Zoomable graph with keyboard traversal, side panel, text path view, and resize handling.

**Instructional rationale:** Causal attribution across evidence supports analysis and targeted correction.

Implementation: vis-network with editable evidence relationships.
```

## Related Resources

- [Chapter 18: Marketing Metrics and Pattern Analysis](../../chapters/18-marketing-metrics-analysis/index.md)
