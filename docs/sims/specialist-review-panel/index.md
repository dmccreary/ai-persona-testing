---
title: Specialist Review Panel
description: Use distinct specialist lenses to review one marketing asset while preserving evidence, scope, disagreement, and human authority.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Specialist Review Panel



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 13: Designing AI Agents and Expert Roles](../../chapters/13-ai-agents-expert-roles/index.md).

```text
Type: microsim
**sim-id:** specialist-review-panel<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Apply (L3)

**Bloom verb:** use

**Learning objective:** Use distinct specialist lenses to review one marketing asset while preserving evidence, scope, disagreement, and human authority.

**Interaction:** Learners select specialists for a scenario, inspect each structured review, identify out-of-scope claims, and route findings to Accept, Verify, Revise, or Escalate.

**Asset scenarios:** Pricing page, sustainability advertisement, onboarding flow, and crisis email. Every specialist cites observable evidence and its rubric.

**Feedback:** The panel flags duplicated lenses, unsupported authority, false consensus, and missing consumer-research review. A synthesis view preserves disagreements.

**Responsive design:** Specialist cards form a grid on wide screens and tabs on narrow screens, with keyboard controls and resize handling.

**Instructional rationale:** Applying specialist roles to a shared asset teaches scoped expertise and integration.

Implementation: p5.js review workspace with semantic HTML cards and routing controls.
```

## Related Resources

- [Chapter 13: Designing AI Agents and Expert Roles](../../chapters/13-ai-agents-expert-roles/index.md)
