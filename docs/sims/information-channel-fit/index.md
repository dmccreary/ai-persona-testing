---
title: Information and Channel Fit Lab
description: Use persona information needs, media habits, channel preferences, technology comfort, context, and accessibility requirements to choose an appropriate communication path.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Information and Channel Fit Lab



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Persona Motivations, Behaviors, and Evidence](../../chapters/06-persona-behavior-evidence/index.md).

```text
Type: interactive infographic
**sim-id:** information-channel-fit<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Apply (L3)

**Bloom verb:** use

**Learning objective:** Use persona information needs, media habits, channel preferences, technology comfort, context, and accessibility requirements to choose an appropriate communication path.

**Layout:** A matrix with journey stages as columns and information tasks as rows. Message cards and channel cards sit in a tray.

**Interaction:** Learners place a message and channel at each stage for a selected persona. Feedback explains mismatches, such as using a public social channel for a private account issue or a long video for an urgent factual check.

**Controls:** Persona selector, journey stage, urgency, privacy level, device, and accessibility need. Compare mode shows two defensible channel plans.

**Responsive design:** Matrix becomes an accordion on narrow displays, with keyboard placement and resize handling.

**Instructional rationale:** Scenario-based placement supports applying because channel fit must be reasoned from context rather than memorized.

Implementation: Responsive p5.js matrix with accessible DOM cards.
```

## Related Resources

- [Chapter 6: Persona Motivations, Behaviors, and Evidence](../../chapters/06-persona-behavior-evidence/index.md)
