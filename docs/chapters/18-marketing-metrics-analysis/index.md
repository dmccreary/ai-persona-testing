---
title: Marketing Metrics and Pattern Analysis
description: Measuring marketing criteria and analyzing persona responses through baselines, benchmarks, coding, themes, contradictions, gaps, trust signals, and confusion points.
generated_by: claude skill chapter-content-generator
date: 2026-07-03 19:26:18
version: 0.09
---

# Marketing Metrics and Pattern Analysis

## Summary

Measures resonance, memorability, intent, credibility, relevance, and accessibility before analyzing benchmarks, persona comparisons, themes, contradictions, gaps, and trust signals.

Learners will be able to identify defensible patterns across persona responses and marketing performance criteria.

## Concepts Covered

This chapter covers the following 20 concepts from the learning graph:

1. Emotional Resonance
2. Memorability Score
3. Purchase Intent
4. Credibility Score
5. Relevance Score
6. Differentiation Score
7. Persuasiveness Score
8. Accessibility Score
9. Evaluation Baseline
10. Comparative Benchmark
11. Pattern Detection
12. Cross-Persona Comparison
13. Response Coding
14. Theme Identification
15. Sentiment Pattern
16. Contradiction Detection
17. Messaging Gap
18. Credibility Gap
19. Trust Signal
20. Confusion Point

## Prerequisites

This chapter builds on concepts from:

- [Chapter 2: Research Design and Evidence Quality](../02-research-design-evidence/index.md)
- [Chapter 3: AI Capabilities, Limitations, and Bias](../03-ai-limits-bias/index.md)
- [Chapter 4: Responsible AI, Privacy, and Governance](../04-responsible-ai-governance/index.md)
- [Chapter 6: Persona Motivations, Behaviors, and Evidence](../06-persona-behavior-evidence/index.md)
- [Chapter 11: Structured Prompts and Reliable Outputs](../11-structured-prompts/index.md)
- [Chapter 15: Moderation Risks and Brand Strategy](../15-moderation-brand-strategy/index.md)
- [Chapter 16: Evaluating Marketing Assets and Messaging](../16-marketing-asset-evaluation/index.md)
- [Chapter 17: Evaluation Rubrics, Scoring, and Evidence](../17-rubrics-scoring-evidence/index.md)

---

## Measure a Construct, Not a Mood

Marketing metrics summarize a defined construct under stated conditions. A score is useful only when the construct, evidence, scale, persona, context, and decision are clear. Synthetic scores are structured judgments from a simulation, not measured population outcomes.

**Emotional Resonance** is the degree to which an asset connects with emotions relevant to the customer's situation and goal. Resonance is not simply strong feeling. Fear may be strong and harmful. Evaluate which emotion, why it arises, and whether it supports or obstructs progress.

A **Memorability Score** represents the likelihood that key content can be recognized or recalled under a defined test. A language model cannot measure human memory by claiming it would remember. Use persona review to identify distinctive cues and hypotheses; use human recall or recognition studies for measurement.

**Purchase Intent** is a reported likelihood or willingness to consider, try, or buy. Synthetic purchase intent is especially limited because no real money, risk, or behavior is involved. Treat it as an interpretation of decision conditions, not a sales forecast.

A **Credibility Score** judges whether claims appear believable and supported. A **Relevance Score** judges fit with customer goal and context. A **Differentiation Score** judges meaningful distinction from alternatives. A **Persuasiveness Score** judges whether evidence and framing support movement toward action without manipulation.

An **Accessibility Score** summarizes conformance or task accessibility across defined dimensions. It should never replace technical testing, expert review, and affected-user research. Severe barriers may require gates rather than averaging.

| Construct | Evidence Needed | Claim Boundary |
|---|---|---|
| Emotional resonance | Persona/context link and customer validation | Not proof of population emotion |
| Memorability | Distinctive cues plus human recall test | Not model self-report |
| Purchase intent | Decision criteria and behavioral validation | Not sales forecast |
| Credibility | Claim, proof, source, and trust context | Not factual verification alone |
| Relevance | Customer job, stage, and need | Changes by context |
| Differentiation | Comparable alternatives and valued difference | Difference is not automatically value |
| Persuasiveness | Evidence, clarity, motivation, and autonomy | Must exclude dark patterns |
| Accessibility | Defined technical and user dimensions | Aggregate must not hide blockers |

#### Diagram: Marketing Construct Evidence Lab

<iframe src="../../sims/marketing-construct-evidence/main.html" width="100%" height="530px" scrolling="no"></iframe>

<details markdown="1">
<summary>Marketing Construct Evidence Lab</summary>
Type: interactive infographic
**sim-id:** marketing-construct-evidence<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** judge

**Learning objective:** Judge whether evidence supports a score for resonance, memorability, intent, credibility, relevance, differentiation, persuasion, or accessibility.

**Interaction:** Learners pair findings and sources with constructs, identify overclaims, and rewrite score interpretations. Some evidence supports several constructs with different limits.

**Feedback:** The tool distinguishes synthetic hypothesis, expert check, customer report, behavioral measure, and experiment.

**Responsive design:** Construct zones become tabs on narrow screens, with keyboard sorting and resize handling.

**Instructional rationale:** Evidence-to-construct judgment supports evaluation and prevents metric laundering.

Implementation: Responsive p5.js evidence sorting workspace.
</details>

## Baselines and Benchmarks

An **Evaluation Baseline** is a reference measurement collected before a change or under a control condition. It helps the team ask whether a revision improved the intended criterion. Baselines must use comparable personas, assets, context, prompts, rubrics, and settings.

A **Comparative Benchmark** is a reference used to compare performance across versions, alternatives, competitors, standards, or time. It should be relevant, current, and measured comparably. A competitor benchmark based on different audience or pricing scope can mislead.

Use several reference types where appropriate:

- Current asset versus proposed revision
- Version A versus version B under counterbalanced order
- Asset versus approved standard or rubric threshold
- Current campaign versus past campaign with matched context
- Brand versus verified alternatives
- Synthetic pattern versus human validation result

Preserve raw measures and conditions. If the rubric changes, create a new baseline or explain the transformation. Do not compare scores across incompatible versions as if they were one trend.

#### Diagram: Baseline and Benchmark Comparison Explorer

<iframe src="../../sims/baseline-benchmark-explorer/main.html" width="100%" height="520px" scrolling="no"></iframe>

<details markdown="1">
<summary>Baseline and Benchmark Comparison Explorer</summary>
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
</details>

## Detecting Patterns Across Personas

**Pattern Detection** identifies recurring or structured relationships in responses. A pattern may be a repeated concern, a criterion associated with a context, a disagreement between segments, or a change after evidence. Frequency is one signal, not the definition.

**Cross-Persona Comparison** examines similarities and differences among persona responses under controlled conditions. Compare interpretation, evidence, criteria, rating, confidence, and action. Preserve persona context so differences can be explained rather than averaged.

Patterns can include:

- Shared interpretation across distinct personas
- One concern tied to a particular need or stage
- Opposite reactions explained by different criteria
- A high-severity issue raised by one persona
- Stable finding across prompt and model versions
- Response change after evidence is supplied

Do not count near-duplicate personas as independent support. Do not hide a severe minority concern. Report the number and type of synthetic agents involved, not a percentage that resembles market prevalence.

## Coding and Themes

**Response Coding** assigns labels to meaningful passages so findings can be organized and compared. Codes can be predefined from the rubric, developed from responses, or combined. Each code needs a definition, inclusion and exclusion rules, examples, and version.

**Theme Identification** groups codes into broader patterns that answer the research question. A theme is not merely a frequent word. It connects meaning across evidence. “Trust” is too broad; “absolute claims trigger demand for proof among risk-sensitive personas” is an interpretable theme.

Use a coding process:

1. Preserve the original response and citation.
2. Mark a meaningful passage.
3. Apply one or more defined codes.
4. Add a memo explaining interpretation.
5. Compare coding across reviewers.
6. Group codes into candidate themes.
7. Search for counterexamples and negative cases.
8. Revise definitions and preserve versions.

#### Diagram: Response Coding and Theme Workbench

<iframe src="../../sims/response-coding-theme-workbench/main.html" width="100%" height="540px" scrolling="no"></iframe>

<details markdown="1">
<summary>Response Coding and Theme Workbench</summary>
Type: interactive infographic
**sim-id:** response-coding-theme-workbench<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** organize

**Learning objective:** Organize persona response excerpts into evidence-linked codes and themes while preserving counterexamples and reviewer disagreement.

**Interaction:** Learners highlight excerpts, apply code definitions, write memos, compare another reviewer's coding, and assemble themes. Source links remain visible.

**Feedback:** The workbench flags vague themes, unsupported grouping, missing negative cases, and code drift. Agreement is shown by code, not one total.

**Responsive design:** Source, codebook, and theme panels become tabs on narrow screens, with keyboard annotation and resize handling.

**Instructional rationale:** Evidence coding and relationship grouping directly support analysis.

Implementation: p5.js annotation workspace with semantic text panels.
</details>

## Sentiment and Contradiction

A **Sentiment Pattern** is a recurring positive, negative, mixed, or changing emotional orientation in responses. Sentiment labels can be useful, but they lose meaning without object and reason. “Negative” should become “anxious about hidden renewal terms” or “frustrated by repeated data entry.”

Sentiment can change within one response. A persona may like the value and distrust the proof. Preserve mixed and conditional reactions rather than forcing one label.

**Contradiction Detection** identifies incompatible facts, interpretations, ratings, or recommendations. Contradiction may reveal error, different context, changed evidence, or genuine ambivalence. Detection begins investigation; it does not decide which statement is correct.

Classify contradiction:

- Within one response
- Across repeated runs
- Across personas
- Between persona and expert review
- Between claim and source evidence
- Between current and earlier version

Then verify facts, compare contexts, inspect prompts, and preserve rational disagreement.

## Messaging and Credibility Gaps

A **Messaging Gap** is a difference between what the organization intends to communicate and what the audience can understand or use. Gaps may involve audience, value, terms, proof, sequence, or action.

A **Credibility Gap** is the distance between a claim and the evidence or trust conditions required for belief. The claim may be true but unsupported in the asset. Alternatively, the asset may contain proof that the customer cannot interpret.

The two gaps can interact. A vague claim creates a messaging gap; an absolute claim without evidence creates a credibility gap. Correcting grammar alone will not close either.

Ask:

- What message did the team intend?
- What did each persona interpret?
- Which asset elements produced that interpretation?
- Which evidence is needed for belief?
- Is the missing element message, proof, product, policy, or experience?

## Trust Signals and Confusion Points

A **Trust Signal** is an observable element that supports confidence, such as transparent terms, credible proof, clear ownership, independent certification, secure behavior, customer control, or consistent service. A badge is not a trust signal if its meaning is unknown or unverifiable.

A **Confusion Point** is a specific moment where understanding breaks, branches, or requires unsupported inference. Record asset location, persona, context, expected meaning, actual interpretation, consequence, and confidence.

Trust signals can reduce confusion, but clutter can create more. Match the signal to the question. A security certification may support data trust; it does not explain pricing.

#### Diagram: Gap, Signal, and Confusion Map

<iframe src="../../sims/gap-signal-confusion-map/main.html" width="100%" height="530px" scrolling="no"></iframe>

<details markdown="1">
<summary>Gap, Signal, and Confusion Map</summary>
Type: graph-model
**sim-id:** gap-signal-confusion-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** attribute

**Learning objective:** Attribute messaging gaps, credibility gaps, trust signals, and confusion points to specific asset evidence, persona context, and consequences.

**Node types:** Intended Message, Asset Element, Persona Interpretation, Evidence, Trust Signal, Confusion Point, Messaging Gap, Credibility Gap, and Action.

**Interaction:** Select a gap to highlight its causal path, attach missing proof or revised message, and compare persona responses. Every edge reveals rationale.

**Feedback:** The graph flags unsupported fixes and trust signals unrelated to the identified gap.

**Responsive design:** Zoomable graph with keyboard traversal, side panel, text path view, and resize handling.

**Instructional rationale:** Causal attribution across evidence supports analysis and targeted correction.

Implementation: vis-network with editable evidence relationships.
</details>

## Analysis Quality Controls

Preserve traceability from theme to code, excerpt, response, persona, asset, prompt, and source. Reviewers should be able to challenge any pattern.

Use negative-case analysis: actively search for evidence that contradicts the theme. Compare coding across people or methods. Examine whether prompt wording or persona overlap produced the pattern. Report synthetic findings separately from customer and behavioral evidence.

Avoid common traps:

- Counting agents as customers
- Treating sentiment as explanation
- Selecting only vivid excerpts
- Averaging incompatible personas
- Ignoring missing or failed runs
- Confusing repeated model bias with customer pattern
- Turning a theme into a causal claim

## Reproducible Analysis and Reporting

Create an analysis plan before coding the complete dataset. State the research question, units of analysis, planned comparison groups, initial codebook, construct definitions, missing-data rules, and evidence required for each claim. Allow discovery, but distinguish planned analysis from themes developed after seeing results.

Version the codebook. For every code, record name, definition, inclusion, exclusion, examples, author, and effective date. When a definition changes, decide whether earlier responses must be recoded. Otherwise one label can silently mean different things across the study.

Sample-check automated coding. A model can organize responses quickly but may miss irony, context, minority language, or contradictory passages. Human reviewers should inspect routine, ambiguous, high-severity, and low-confidence cases. Record overrides and use recurring errors to improve prompts or guidance.

Use an analysis matrix with one row per finding and fields for:

- Finding identifier and statement
- Construct, code, and theme
- Source response and exact excerpt
- Persona, scenario, asset, and versions
- Supporting and contradictory evidence
- Frequency within the synthetic run set
- Severity and business consequence
- Confidence and limitation
- Human-validation status
- Recommendation and owner

This matrix prevents a polished report from separating themes from their evidence. It also allows updated evidence to revise one finding without recreating the entire report.

Report counts carefully. “Eight of ten configured persona runs mentioned price” describes the run set. It does not estimate the proportion of customers concerned about price. Include the persona composition and repeated-run design so readers can judge overlap and independence.

Use layered reporting. The executive summary states bounded findings, decisions, and important uncertainty. The main analysis presents themes, disagreements, personas, metrics, and evidence. An appendix preserves codebook, prompts, versions, exclusions, and audit records. Authorized reviewers can access sensitive source material under the appropriate controls.

Visualize uncertainty and missingness. Do not omit failed runs or replace missing ratings with zero. Show intervals, ranges, counts, and confidence categories where meaningful. Place high-severity minority findings beside common patterns rather than burying them in a footnote.

Finally, schedule reanalysis when the asset, persona library, prompt, rubric, model, market, or validation evidence changes materially. Preserve prior reports and explain why findings moved. A changed pattern may reflect a better asset, a different measurement system, or model drift; the audit trail helps distinguish them.

## Turning Analysis Into Research Questions

Every synthetic pattern should end with a decision or a question. A messaging gap can lead to a revised asset and comprehension test. A credibility gap can lead to proof development and trust research. A confusion point can become a usability task. A sentiment pattern can prompt an interview probe about its cause.

Prioritize questions using consequence, uncertainty, evidence weakness, affected audience, and cost of being wrong. This keeps analysis from producing a long list of interesting observations with no path to learning.

Close the loop by recording what later customer research showed. Mark each synthetic hypothesis as supported, contradicted, reframed, or still unresolved. Over many studies, this comparison can improve persona tests and help the organization understand where simulation is useful. It still does not turn earlier synthetic responses into customer data; it creates evidence about the research tool's performance.

Use those lessons to revise prompts, personas, rubrics, validation plans, and the boundaries of future claims.

Each revision should remain versioned, tested, and reviewable.

This discipline matters.

## Worked Example: Comparing Two Headlines

A team compares “Run Your Business, Not Your Software” with “One Workspace for Every Client Request.” Personas evaluate relevance, clarity, credibility, differentiation, persuasion, and trust. Memorability and purchase-intent outputs are explicitly labeled synthetic hypotheses.

The first headline creates emotional resonance around relief but a messaging gap because the product category is unclear. The second is clearer and more relevant to operations personas but creates a credibility gap around “every.” Risk-sensitive personas request integration evidence.

Coding identifies themes of control, consolidation, and proof. Sentiment is mixed rather than simply positive. Contradiction detection finds one persona rating the first headline highly persuasive and low credibility, a coherent tension rather than an error.

The team revises the claim, adds a trust signal linked to supported integrations, and runs human comprehension and recall tests. It does not claim the synthetic memorability score predicts recall.

## Practice: Analyze Persona Findings

1. Define and bound eight marketing constructs.
2. Select a compatible baseline and benchmark.
3. Compare personas using evidence and context.
4. Create a codebook and code response excerpts.
5. Build themes and search for negative cases.
6. Analyze sentiment with object and cause.
7. Investigate contradictions rather than deleting them.
8. Identify messaging and credibility gaps.
9. Link trust signals to specific questions.
10. Record confusion points and consequences.

??? question "Does a repeated synthetic pattern show what customers think?"
    No. It shows what the configured system produced repeatedly. It can guide hypotheses and research design, but claims about customers require appropriate customer evidence.

## Key Takeaways

- Marketing scores require construct definitions, evidence, context, anchors, and claim boundaries.
- Baselines and benchmarks must be comparable and versioned.
- Pattern detection and cross-persona comparison preserve differences and severity.
- Coding organizes excerpts; themes explain meaningful patterns.
- Sentiment needs object and reason; contradiction needs investigation.
- Messaging gaps concern intended versus interpreted meaning; credibility gaps concern claim versus required proof.
- Trust signals and confusion points must connect to specific customer questions and asset evidence.

## Review Questions

1. Why can a model not measure memorability through self-report?
2. What makes a baseline comparable?
3. How does a theme differ from a frequent code?
4. Why should sentiment include an object and reason?
5. Which contradiction types require prompt review rather than customer research?
6. How do messaging and credibility gaps differ?
7. What makes an element a meaningful trust signal?
