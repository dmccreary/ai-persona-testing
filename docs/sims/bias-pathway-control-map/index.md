---
title: Bias Pathway and Control Map
description: Attribute a biased research outcome to model, persona selection, cultural assumptions, researcher interpretation, or automation design and select an appropriate control.
status: scaffold
library: vis-network
bloom_level: TBD
---

# Bias Pathway and Control Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: AI Capabilities, Limitations, and Bias](../../chapters/03-ai-limits-bias/index.md).

```text
Type: graph-model
**sim-id:** bias-pathway-control-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** attribute

**Learning objective:** Attribute a biased research outcome to model, persona selection, cultural assumptions, researcher interpretation, or automation design and select an appropriate control.

**Node types:** Source Data, Model, Persona Set, Prompt, Marketing Asset, Raw Response, Aggregation, Researcher, Dashboard, Decision, Bias Risk, and Control. Each node shows owner and review status.

**Edges:** INFLUENCES, SELECTS, FRAMES, SUMMARIZES, REVIEWS, and MITIGATES. Every edge is clickable and explains how bias can travel along it.

**Interaction:** Learners choose a failure scenario, click the suspicious output, and trace upstream paths. They attach controls such as coverage review, prompt neutralization, cultural review, blind scoring, or evidence inspection. The system explains why a control acts at a particular point.

**Visual design:** Force-directed graph with risk nodes in red and control nodes in green. Selection highlights the full causal neighborhood. Include zoom, pan, drag, keyboard traversal, and a text alternative.

**Instructional rationale:** Causal tracing supports analysis because learners locate where a system-level bias entered rather than blaming a single component automatically.

Implementation: vis-network with a responsive side panel and scenario-driven graph states.
```

## Related Resources

- [Chapter 3: AI Capabilities, Limitations, and Bias](../../chapters/03-ai-limits-bias/index.md)
