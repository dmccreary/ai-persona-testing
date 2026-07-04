---
title: Stress-Testing Role Lab
description: Differentiate negative, edge-case, adversarial, and skeptical persona roles and select the correct role for a research risk.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Stress-Testing Role Lab



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Customer Segmentation and Persona Archetypes](../../chapters/07-segmentation-archetypes/index.md).

```text
Type: interactive infographic
**sim-id:** stress-testing-role-lab<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** differentiate

**Learning objective:** Differentiate negative, edge-case, adversarial, and skeptical persona roles and select the correct role for a research risk.

**Interaction:** Scenario cards describe a customer, condition, or test goal. Learners assign the appropriate role, identify the evidence required, and write a fair prompt.

**Feedback:** The tool flags insulting negative personas, implausible edge cases, adversarial prompts that manufacture failure, and skeptics who cannot be persuaded by evidence.

**Scenarios:** Free-trial misuse, low-bandwidth checkout, exaggerated sustainability claim, hidden renewal term, and unsupported medical claim.

**Responsive design:** Cards and role zones stack on narrow screens, with keyboard controls and resize events.

**Instructional rationale:** Comparing closely related testing roles requires analysis of purpose, conditions, and fair behavior.

Implementation: Responsive p5.js classification lab with editable prompt feedback.
```

## Related Resources

- [Chapter 7: Customer Segmentation and Persona Archetypes](../../chapters/07-segmentation-archetypes/index.md)
