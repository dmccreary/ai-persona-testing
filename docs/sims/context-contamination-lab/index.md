---
title: Context Contamination Laboratory
description: Examine how shared opinions, hidden role instructions, and prior summaries alter agent independence and the interpretation of agreement.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Context Contamination Laboratory



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 14: Multi-Agent Workflows, Debate, and Consensus](../../chapters/14-multi-agent-orchestration/index.md).

```text
Type: microsim
**sim-id:** context-contamination-lab<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** examine

**Learning objective:** Examine how shared opinions, hidden role instructions, and prior summaries alter agent independence and the interpretation of agreement.

**Data visibility requirements:** Show three agents' role-specific context, shared factual context, initial responses, and responses after one agent's opinion is shared.

**Interaction:** Learners toggle context items and predict whether agreement, anchoring, role drift, or privacy exposure will change. A provenance view traces every item.

**Feedback:** The simulator distinguishes legitimate shared facts from contaminating opinions and shows that increased consensus can reduce evidentiary value.

**Responsive design:** Agent panels become tabs on narrow screens, with keyboard toggles and resize handling.

**Instructional rationale:** Controlled before-and-after comparison supports analysis of causal contamination.

Implementation: p5.js context panels with semantic controls and fixed examples.
```

## Related Resources

- [Chapter 14: Multi-Agent Workflows, Debate, and Consensus](../../chapters/14-multi-agent-orchestration/index.md)
