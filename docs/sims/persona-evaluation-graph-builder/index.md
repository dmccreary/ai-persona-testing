---
title: Persona Evaluation Knowledge Graph Builder
description: Construct a provenance-rich evaluation graph linking personas, assets, goals, pain points, reactions, evidence, risks, and recommendations.
status: scaffold
library: vis-network
bloom_level: TBD
---

# Persona Evaluation Knowledge Graph Builder



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 19: Risk-Based Recommendations and Knowledge Graphs](../../chapters/19-risk-knowledge-graphs/index.md).

```text
Type: graph-model
**sim-id:** persona-evaluation-graph-builder<br/>
**Library:** vis-network<br/>
**Status:** Specified

**Bloom level:** Create (L6)

**Bloom verb:** construct

**Learning objective:** Construct a provenance-rich evaluation graph linking personas, assets, goals, pain points, reactions, evidence, risks, and recommendations.

**Interaction:** Learners add typed nodes and relationships, validate direction and required properties, run sample queries, and inspect every evidence path.

**Visual design:** Node color and shape indicate type; edge labels remain visible on selection. Side panel shows properties, source, confidence, and version.

**Feedback:** The builder flags duplicate nodes, vague relationships, unsupported reactions, circular recommendation logic, and missing provenance.

**Responsive design:** Zoom, pan, drag, keyboard traversal, text triple view, and resize handling.

**Instructional rationale:** Building a typed relationship model supports creating and makes evidence structure explicit.

Implementation: vis-network model editor with JSON export and schema validation.
```

## Related Resources

- [Chapter 19: Risk-Based Recommendations and Knowledge Graphs](../../chapters/19-risk-knowledge-graphs/index.md)
