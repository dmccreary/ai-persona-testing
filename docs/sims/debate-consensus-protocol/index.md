---
title: Debate and Consensus Protocol Simulator
description: Execute a debate protocol that preserves evidence, balanced turns, rational updating, minority positions, and unresolved disagreement.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Debate and Consensus Protocol Simulator



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 14: Multi-Agent Workflows, Debate, and Consensus](../../chapters/14-multi-agent-orchestration/index.md).

```text
Type: microsim
**sim-id:** debate-consensus-protocol<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Apply (L3)

**Bloom verb:** execute

**Learning objective:** Execute a debate protocol that preserves evidence, balanced turns, rational updating, minority positions, and unresolved disagreement.

**Interaction:** Learners moderate three agents reviewing a claim. They select speakers, request evidence, flag repetition, introduce verified information, and decide whether to continue, synthesize, or stop.

**Feedback:** The simulator identifies anchoring, unequal turns, unsupported certainty, false consensus, and changes made only under social pressure.

**Responsive design:** Debate timeline and evidence panel become tabs on narrow screens, with keyboard controls and resize handling.

**Instructional rationale:** Guided protocol execution supports applying fair discussion controls.

Implementation: p5.js debate timeline with semantic transcript and evidence controls.
```

## Related Resources

- [Chapter 14: Multi-Agent Workflows, Debate, and Consensus](../../chapters/14-multi-agent-orchestration/index.md)
