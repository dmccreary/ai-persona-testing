---
title: Agent Role and Responsibility Map
description: Differentiate persona, moderator, skeptic, expert reviewer, and synthesis responsibilities and detect conflicting authority.
status: scaffold
library: vis-network
bloom_level: TBD
---

# Agent Role and Responsibility Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 13: Designing AI Agents and Expert Roles](../../chapters/13-ai-agents-expert-roles/index.md).

```text
Type: graph-model
**sim-id:** agent-role-responsibility<br/>
**Library:** vis-network<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** differentiate

**Learning objective:** Differentiate persona, moderator, skeptic, expert reviewer, and synthesis responsibilities and detect conflicting authority.

**Node types:** Agent Role, Goal, Input, Tool, Output, Decision, Human Owner, and Boundary. Edges show RECEIVES, PERFORMS, PRODUCES, REVIEWS, APPROVES, and ESCALATES_TO.

**Interaction:** Learners assign responsibilities in a workflow. The graph flags missing owners, two roles controlling one decision, persona-to-recommendation shortcuts, and outputs without reviewers.

**Responsive design:** Selectable graph with zoom, drag, keyboard traversal, side panel, text matrix, and resize handling.

**Instructional rationale:** Mapping authority relationships supports analysis of role separation.

Implementation: vis-network responsibility graph with rule-based conflict checks.
```

## Related Resources

- [Chapter 13: Designing AI Agents and Expert Roles](../../chapters/13-ai-agents-expert-roles/index.md)
