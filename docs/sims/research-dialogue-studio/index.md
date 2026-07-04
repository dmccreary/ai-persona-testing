---
title: Research Dialogue Practice Studio
description: Practice selecting neutral, open, probing, adversarial, and follow-up questions while maintaining persona fidelity and evidence boundaries.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Research Dialogue Practice Studio



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 12: Prompt Testing and Research Dialogue](../../chapters/12-prompt-testing-dialogue/index.md).

```text
Type: microsim
**sim-id:** research-dialogue-studio<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Apply (L3)

**Bloom verb:** practice

**Learning objective:** Practice selecting neutral, open, probing, adversarial, and follow-up questions while maintaining persona fidelity and evidence boundaries.

**Interaction:** A persona produces a short response to a marketing asset. Learners select or write the next question. The dialogue branches and displays feedback on leading assumptions, depth, evidence, and role pressure.

**Controls:** Question-type filter, Neutrality Check, Persona Fidelity meter, Evidence Trace, Undo, and Compare Path. No score rewards agreement with the marketer.

**Feedback:** The system explains how each question shaped the next response and offers a more neutral alternative when needed.

**Responsive design:** Conversation and coaching panel become tabs on narrow screens, with keyboard input and resize handling.

**Instructional rationale:** Guided dialogue practice with immediate feedback supports applying question-design principles.

Implementation: p5.js conversation map with semantic HTML chat and coaching controls.
```

## Related Resources

- [Chapter 12: Prompt Testing and Research Dialogue](../../chapters/12-prompt-testing-dialogue/index.md)
