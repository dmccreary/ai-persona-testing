---
title: Persona Fidelity Tuning Lab
description: Differentiate task-relevant persona evidence from decorative realism, unsupported assumptions, and stereotype risk.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Persona Fidelity Tuning Lab



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: AI Capabilities, Limitations, and Bias](../../chapters/03-ai-limits-bias/index.md).

```text
Type: microsim
**sim-id:** persona-fidelity-tuning<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** differentiate

**Learning objective:** Differentiate task-relevant persona evidence from decorative realism, unsupported assumptions, and stereotype risk.

**Interaction pattern:** Learners receive a research question and a stack of persona attributes. They classify each attribute as Essential, Helpful, Irrelevant, Unsupported, or Sensitive. The persona's fidelity meter changes according to task relevance, not profile length.

**Worked scenarios:** Evaluate a banking reminder, commuter campaign, health-service appointment page, and business software trial. Each scenario changes which attributes are relevant.

**Feedback:** Clicking an attribute reveals its source and asks how it could affect behavior. Unsupported sensitive attributes trigger a warning and require a replacement grounded in goals or circumstances.

**Controls:** Scenario selector, evidence-source filter, Reset, Compare Profiles, and Explain Score. The comparison view shows that a shorter evidence-based profile can outrank a vivid fictional one.

**Responsive design:** Cards use two columns on wide screens and one column on narrow screens; all sorting has a keyboard mode and updates on resize.

**Instructional rationale:** Classification across changing tasks supports analysis by showing that fidelity depends on purpose while realism can remain superficial.

Implementation: p5.js card workspace with accessible DOM controls and scenario JSON.
```

## Related Resources

- [Chapter 3: AI Capabilities, Limitations, and Bias](../../chapters/03-ai-limits-bias/index.md)
