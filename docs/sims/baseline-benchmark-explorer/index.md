---
title: Baseline and Benchmark Comparison Explorer
description: Compare an asset with valid baselines and benchmarks while detecting incompatible conditions and unstable differences.
status: scaffold
library: Chart.js
bloom_level: TBD
---

# Baseline and Benchmark Comparison Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 18: Marketing Metrics and Pattern Analysis](../../chapters/18-marketing-metrics-analysis/index.md).

```text
Type: chart
**sim-id:** baseline-benchmark-explorer<br/>
**Library:** Chart.js<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** compare

**Learning objective:** Compare an asset with valid baselines and benchmarks while detecting incompatible conditions and unstable differences.

**Chart:** Interactive grouped bars and interval markers by criterion and persona. Hover reveals asset, version, context, rubric, run count, confidence, and evidence.

**Controls:** Reference type, persona, criterion, version, and compatible-only filter. Sensitivity view shows whether conclusions survive plausible variation.

**Feedback:** The tool blocks comparisons with mismatched criteria or contexts until the learner explains and corrects them.

**Responsive design:** Charts stack on narrow screens with keyboard access and table alternative.

**Instructional rationale:** Conditional comparison supports analysis rather than superficial ranking.

Implementation: Responsive Chart.js visualization with metadata validation.
```

## Related Resources

- [Chapter 18: Marketing Metrics and Pattern Analysis](../../chapters/18-marketing-metrics-analysis/index.md)
