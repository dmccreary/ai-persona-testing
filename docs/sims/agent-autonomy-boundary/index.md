---
title: Agent Autonomy and Boundary Simulator
description: Assess an agent action by consequence, reversibility, data sensitivity, tool scope, and required human approval.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Agent Autonomy and Boundary Simulator



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 13: Designing AI Agents and Expert Roles](../../chapters/13-ai-agents-expert-roles/index.md).

```text
Type: microsim
**sim-id:** agent-autonomy-boundary<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** assess

**Learning objective:** Assess an agent action by consequence, reversibility, data sensitivity, tool scope, and required human approval.

**Controls:** Action selector, consequence, reversibility, sensitivity, external communication, cost limit, and evidence quality. Learners assign Allow, Allow with Log, Require Approval, Escalate, or Prohibit.

**Feedback:** The simulator explains why a harmless drafting action differs from publishing, exporting data, or changing a decision record. It exposes boundaries missed by one-dimensional risk scores.

**Responsive design:** Controls and decision path stack on narrow screens, with keyboard access and text summary.

**Instructional rationale:** Scenario judgment against explicit criteria supports evaluation of autonomy.

Implementation: p5.js decision visualization with accessible controls.
```

## Related Resources

- [Chapter 13: Designing AI Agents and Expert Roles](../../chapters/13-ai-agents-expert-roles/index.md)
