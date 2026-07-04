---
title: Sample, Time, Cost, and Claim Explorer
description: Justify a research design by balancing sample size, turnaround time, cost, audience access, and the strength of the intended claim.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Sample, Time, Cost, and Claim Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Research Design and Evidence Quality](../../chapters/02-research-design-evidence/index.md).

```text
Type: microsim
**sim-id:** research-tradeoff-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** justify

**Learning objective:** Justify a research design by balancing sample size, turnaround time, cost, audience access, and the strength of the intended claim.

**Controls:** Sliders for participants, days, and budget; selectors for method, decision reversibility, audience accessibility, and intended claim. Defaults show eight interviews, ten days, and a moderate budget.

**Visual elements:** A four-axis trade-off display, a claim-strength meter, and a risk panel. Changing a control recalculates illustrative feasibility and highlights mismatches, such as choosing six interviews while claiming a population percentage.

**Interaction and feedback:** Learners configure a study for three scenarios. The tool never provides a single “optimal” number; it explains trade-offs and asks for a written justification. Clicking an axis reveals its definition and limitations.

**Accessibility and responsiveness:** Use labeled HTML controls, a tabular text alternative, high-contrast patterns, and a layout that stacks below 700 pixels. Re-render on resize.

**Instructional rationale:** Parameter exploration with scenario feedback supports evaluation because learners must defend a design against explicit criteria.

Implementation: p5.js visualization with HTML sliders and rule-based scenario feedback; all numbers labeled illustrative.
```

## Related Resources

- [Chapter 2: Research Design and Evidence Quality](../../chapters/02-research-design-evidence/index.md)
