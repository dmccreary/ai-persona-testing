---
title: Capability and Claim Boundary Explorer
description: Judge whether an AI persona task supports brainstorming, directional insight, or a validated customer claim.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Capability and Claim Boundary Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: AI Capabilities, Limitations, and Bias](../../chapters/03-ai-limits-bias/index.md).

```text
Type: interactive infographic
**sim-id:** capability-claim-boundary<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** judge

**Learning objective:** Judge whether an AI persona task supports brainstorming, directional insight, or a validated customer claim.

**Layout:** A responsive three-zone board labeled Generate, Investigate, and Validate. Marketing claim cards appear beside evidence cards describing model outputs, analytics, interviews, surveys, or verified sources.

**Interaction:** Learners pair a claim with available evidence and place it in a zone. Feedback explains whether the wording exceeds the evidence. A rewrite control asks the learner to narrow an unsupported claim rather than merely marking it wrong.

**Scenarios:** Include a tagline review, accessibility concern, pricing reaction, international launch, and demand estimate. Each scenario has at least one ambiguous answer that requires a written justification.

**Accessibility:** Keyboard card movement, high-contrast patterns, and a text list alternative. Reflow zones vertically below 700 pixels and respond to resize events.

**Instructional rationale:** Evaluating claim boundaries requires applying evidence criteria to consequential marketing statements.

Implementation: Responsive p5.js board with semantic HTML cards and rule-based feedback.
```

## Related Resources

- [Chapter 3: AI Capabilities, Limitations, and Bias](../../chapters/03-ai-limits-bias/index.md)
