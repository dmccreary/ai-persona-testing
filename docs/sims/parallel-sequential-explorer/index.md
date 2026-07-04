---
title: Parallel–Sequential Trade-Off Explorer
description: Justify parallel, sequential, or hybrid execution based on task dependency, independence, latency, cost, contamination, and error propagation.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Parallel–Sequential Trade-Off Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 14: Multi-Agent Workflows, Debate, and Consensus](../../chapters/14-multi-agent-orchestration/index.md).

```text
Type: interactive infographic
**sim-id:** parallel-sequential-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** justify

**Learning objective:** Justify parallel, sequential, or hybrid execution based on task dependency, independence, latency, cost, contamination, and error propagation.

**Interaction:** Learners arrange the same roles in three patterns and inspect predicted consequences. Parameter controls adjust dependency strength, review budget, context sensitivity, and urgency.

**Feedback:** The tool flags sequential persona anchoring, parallel stages with missing prerequisites, and hybrid plans without a clear convergence gate.

**Responsive design:** Flows stack on narrow screens, with keyboard arrangement and text comparison.

**Instructional rationale:** Multi-criteria design judgment supports evaluation.

Implementation: Responsive p5.js flow comparison with accessible controls.
```

## Related Resources

- [Chapter 14: Multi-Agent Workflows, Debate, and Consensus](../../chapters/14-multi-agent-orchestration/index.md)
