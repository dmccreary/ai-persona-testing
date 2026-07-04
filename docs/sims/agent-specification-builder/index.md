---
title: Agent Specification Builder
description: Design a bounded AI agent specification connecting role, goal, instructions, context, memory, tools, output, autonomy, and boundaries.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Agent Specification Builder



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 13: Designing AI Agents and Expert Roles](../../chapters/13-ai-agents-expert-roles/index.md).

```text
Type: interactive infographic
**sim-id:** agent-specification-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Create (L6)

**Bloom verb:** design

**Learning objective:** Design a bounded AI agent specification connecting role, goal, instructions, context, memory, tools, output, autonomy, and boundaries.

**Interaction:** Learners assemble specification cards for a marketing scenario. The tool flags goals outside the role, tools without purpose, memory without retention rules, outputs without consumers, and autonomy without escalation.

**Feedback:** Clicking a component reveals its contract and one failure caused by omission. Export produces a reviewable agent card.

**Responsive design:** Component canvas becomes a vertical form on narrow screens with keyboard control and resize handling.

**Instructional rationale:** Constructing a complete agent contract supports creating and systems thinking.

Implementation: Responsive p5.js block builder with semantic HTML fields.
```

## Related Resources

- [Chapter 13: Designing AI Agents and Expert Roles](../../chapters/13-ai-agents-expert-roles/index.md)
