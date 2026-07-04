---
title: Cross-Channel Campaign Consistency Map
description: Compare campaign assets across channels for message continuity, appropriate adaptation, proof, tone, audience, and action.
status: scaffold
library: vis-network
bloom_level: TBD
---

# Cross-Channel Campaign Consistency Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 16: Evaluating Marketing Assets and Messaging](../../chapters/16-marketing-asset-evaluation/index.md).

```text
Type: graph-model
**sim-id:** campaign-consistency-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** compare

**Learning objective:** Compare campaign assets across channels for message continuity, appropriate adaptation, proof, tone, audience, and action.

**Node types:** Campaign Goal, Persona, Journey Stage, Advertisement, Social Post, Email, Video, Landing Page, Claim, Proof, and Action.

**Edges:** LEADS_TO, EXPRESSES, ADAPTS, SUPPORTS, CONTRADICTS, and TARGETS. Every element reveals evidence and version.

**Interaction:** Select a journey path, compare message changes, and flag intentional adaptation or inconsistency. The system highlights broken promises and missing proof.

**Responsive design:** Zoomable graph with keyboard navigation, side panel, text path alternative, and resize handling.

**Instructional rationale:** Cross-asset relationship comparison supports analysis of campaign systems.

Implementation: vis-network graph with accessible detail and filtering.
```

## Related Resources

- [Chapter 16: Evaluating Marketing Assets and Messaging](../../chapters/16-marketing-asset-evaluation/index.md)
