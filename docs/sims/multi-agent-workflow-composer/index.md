---
title: Multi-Agent Workflow Composer
description: Construct a multi-agent workflow with bounded roles, validated handoffs, human review, exception paths, and an accountable final decision.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Multi-Agent Workflow Composer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 14: Multi-Agent Workflows, Debate, and Consensus](../../chapters/14-multi-agent-orchestration/index.md).

```text
Type: workflow
**sim-id:** multi-agent-workflow-composer<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Create (L6)

**Bloom verb:** construct

**Learning objective:** Construct a multi-agent workflow with bounded roles, validated handoffs, human review, exception paths, and an accountable final decision.

**Interaction:** Learners drag persona, moderator, specialist, skeptic, validator, synthesis, and human-review stages onto a canvas. They connect typed outputs to compatible inputs and define stop conditions.

**Feedback:** The composer flags redundant roles, cycles, missing validation, persona-to-decision shortcuts, and outputs with no consumer or owner.

**Responsive design:** Canvas becomes an ordered stage list on narrow screens, with keyboard editing, text export, and resize handling.

**Instructional rationale:** Workflow construction supports creating by integrating roles, evidence, and controls into a functioning system.

Implementation: Responsive p5.js workflow builder with semantic stage forms.
```

## Related Resources

- [Chapter 14: Multi-Agent Workflows, Debate, and Consensus](../../chapters/14-multi-agent-orchestration/index.md)
