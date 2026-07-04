---
title: Risk-Based Recommendations and Knowledge Graphs
description: Converting findings into risk-based recommendations and organizing personas, assets, goals, pain points, reactions, and evidence in a knowledge graph.
generated_by: claude skill chapter-content-generator
date: 2026-07-03 19:29:03
version: 0.09
---

# Risk-Based Recommendations and Knowledge Graphs

## Summary

Converts findings into rated risks and prioritized recommendations while introducing knowledge graphs containing personas, assets, goals, pain points, and reactions.

Learners will be able to organize evidence and recommendations as connected knowledge that supports decisions.

## Concepts Covered

This chapter covers the following 20 concepts from the learning graph:

1. Risk Assessment
2. Risk Severity
3. Risk Likelihood
4. Recommendation
5. Recommendation Priority
6. Business Impact
7. Implementation Effort
8. Evidence-Based Decision
9. Improvement Hypothesis
10. Iterative Improvement
11. Knowledge Graph
12. Graph Node
13. Graph Edge
14. Graph Relationship
15. Graph-Based Evaluation
16. Persona Node
17. Asset Node
18. Goal Node
19. Pain Point Node
20. Reaction Node

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: AI-Powered Customer Research Foundations](../01-ai-customer-research/index.md)
- [Chapter 5: Building Complete Customer Personas](../05-customer-personas/index.md)
- [Chapter 8: Jobs-to-Be-Done and Customer Journeys](../08-jobs-customer-journeys/index.md)
- [Chapter 12: Prompt Testing and Research Dialogue](../12-prompt-testing-dialogue/index.md)
- [Chapter 15: Moderation Risks and Brand Strategy](../15-moderation-brand-strategy/index.md)
- [Chapter 17: Evaluation Rubrics, Scoring, and Evidence](../17-rubrics-scoring-evidence/index.md)
- [Chapter 18: Marketing Metrics and Pattern Analysis](../18-marketing-metrics-analysis/index.md)

---

## From Finding to Risk

**Risk Assessment** is the structured evaluation of uncertainty and potential consequence. In persona testing, a risk may involve customer harm, misunderstanding, exclusion, privacy, reputation, conversion, compliance, or a poor business decision. Assessment should preserve evidence and uncertainty rather than convert every concern into alarm.

**Risk Severity** is the magnitude of consequence if the event occurs. Consider affected people, duration, reversibility, financial effect, trust, safety, and unequal impact. A low-frequency accessibility barrier can still have high severity.

**Risk Likelihood** is the chance that the event occurs under defined conditions. Synthetic personas can identify plausible mechanisms; they cannot estimate population probability by themselves. Use calibrated categories tied to evidence and label uncertainty.

Keep severity and likelihood separate. Teams often reduce a risk because it seems uncommon before examining consequence, or inflate likelihood because a simulated response sounds vivid.

| Dimension | Questions | Evidence |
|---|---|---|
| Severity | Who is affected, how much, and can harm be reversed? | Customer impact, expert review, operational data |
| Likelihood | Under which conditions could this occur? | Behavioral evidence, tests, validated research |
| Detectability | Would the team notice before harm? | Monitoring and control evidence |
| Confidence | How strong is the assessment? | Source quality, agreement, uncertainty |

#### Diagram: Marketing Risk Assessment Lab

<iframe src="../../sims/marketing-risk-assessment/main.html" width="100%" height="702" scrolling="no"></iframe>

<details markdown="1">
<summary>Marketing Risk Assessment Lab</summary>
Type: microsim
**sim-id:** marketing-risk-assessment<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** assess

**Learning objective:** Assess marketing risks using severity, likelihood, detectability, affected audience, evidence quality, and confidence.

**Interaction:** Learners review persona findings and evidence, assign transparent categories, and place risks on a matrix. Severe accessibility and privacy cases demonstrate why frequency is not the only priority factor.

**Feedback:** The tool flags likelihood estimates based only on synthetic frequency and asks for validation. Sensitivity view shows how uncertainty changes priority.

**Responsive design:** Matrix becomes a ranked card list on narrow screens, with keyboard controls and resize handling.

**Instructional rationale:** Criteria-based risk judgment supports evaluation and explicit uncertainty.

Implementation: p5.js risk workspace with semantic evidence cards.
</details>

## Recommendations and Priority

A **Recommendation** is a proposed action supported by a finding, intended outcome, owner, and validation plan. Recommendations should be specific enough to execute without pretending the first idea is the only solution.

**Recommendation Priority** ranks actions using more than urgency. Consider severity, likelihood, confidence, strategic value, dependency, effort, reversibility, and learning value. High-severity low-confidence issues may require immediate investigation rather than immediate redesign.

**Business Impact** is the expected effect on customer outcome, risk, revenue, cost, trust, strategy, or operations. State which impact and whose perspective. **Implementation Effort** includes time, complexity, coordination, cost, opportunity cost, and new risk.

A priority model can use categories rather than false precision:

- Act now: strong evidence, material impact, feasible correction
- Investigate now: severe or consequential uncertainty
- Plan: valuable change requiring coordination or dependency
- Monitor: plausible lower-impact issue with detection in place
- Decline: unsupported, irrelevant, or disproportionate action

#### Diagram: Recommendation Priority Portfolio

<iframe src="../../sims/recommendation-priority-portfolio/main.html" width="100%" height="702" scrolling="no"></iframe>

<details markdown="1">
<summary>Recommendation Priority Portfolio</summary>
Type: interactive infographic
**sim-id:** recommendation-priority-portfolio<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** prioritize

**Learning objective:** Prioritize recommendations using risk, business impact, implementation effort, evidence confidence, dependencies, equity, and learning value.

**Interaction:** Learners place recommendations on an Impact versus Effort canvas, then reveal risk and confidence overlays. They can change criteria and inspect ranking stability.

**Feedback:** The tool flags easy but low-value work, severe risks hidden by effort, duplicate recommendations, and actions unsupported by findings.

**Responsive design:** Canvas becomes a sortable accessible list on narrow screens, with keyboard movement and resize handling.

**Instructional rationale:** Multi-criteria ranking and sensitivity support evaluation.

Implementation: Responsive p5.js portfolio with evidence-linked cards.
</details>

## Evidence-Based Decisions and Improvement

An **Evidence-Based Decision** integrates the best available evidence with expertise, values, constraints, and accountability. Evidence informs rather than automatically determines action. Decision records should state what was accepted, rejected, deferred, or escalated and why.

An **Improvement Hypothesis** predicts how a specific change will affect a defined customer outcome under stated conditions. “Make the page better” is not a hypothesis. “Moving total cost above the plan comparison will reduce first-time buyers' uncertainty about monthly commitment” is testable.

**Iterative Improvement** cycles through evidence, hypothesis, change, evaluation, and learning. Iteration requires comparable records and willingness to discover that a change did not help.

Use this loop:

1. Select a bounded finding and evidence.
2. State the risk or opportunity.
3. Generate more than one possible response.
4. Choose an action using impact, effort, and constraints.
5. Write the improvement hypothesis and measure.
6. Implement a versioned change.
7. Evaluate against baseline and edge cases.
8. Record learning and choose the next step.

#### Diagram: Evidence-to-Decision Trace

<iframe src="../../sims/evidence-decision-trace/main.html" width="100%" height="702" scrolling="no"></iframe>

<details markdown="1">
<summary>Evidence-to-Decision Trace</summary>
Type: workflow
**sim-id:** evidence-decision-trace<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Apply (L3)

**Bloom verb:** use

**Learning objective:** Use a traceable workflow to convert evidence into risk, alternatives, decision, improvement hypothesis, implementation, validation, and learning.

**Interaction:** Learners move a finding through decision gates, attach evidence, compare alternatives, and define a test. Every stage shows owner and confidence.

**Feedback:** The workflow flags recommendations without findings, actions without owners, hypotheses without measures, and decisions that ignore contradictory evidence.

**Responsive design:** Swimlane flow stacks on narrow screens, with keyboard controls and text audit trail.

**Instructional rationale:** Executing the complete decision loop supports applying evidence-based improvement.

Implementation: Responsive p5.js workflow with semantic artifacts.
</details>

## Why a Knowledge Graph?

A **Knowledge Graph** represents entities and their relationships as connected data. In persona evaluation, it can connect personas, assets, goals, pain points, reactions, criteria, evidence, findings, risks, and recommendations. The graph preserves context that a flat report can lose.

A **Graph Node** represents an entity or concept with an identifier, type, label, properties, and provenance. A **Graph Edge** connects two nodes. A **Graph Relationship** is the meaning of that connection, such as HAS_GOAL, EXPERIENCES_PAIN, REACTS_TO, SUPPORTED_BY, or LEADS_TO.

An edge should not be a vague line. Direction and meaning matter. “Persona EXPERIENCES Pain Point” differs from “Asset ADDRESSES Pain Point.” Relationships may carry properties such as confidence, source, date, or scenario.

The table summarizes the graph grammar.

| Element | Example | Required Quality |
|---|---|---|
| Node | Persona P-014 | Stable identity, type, source, version |
| Edge | P-014 REACTS_TO Asset A-22 | Direction, relationship type, context |
| Property | confidence = moderate | Definition, source, and date |
| Provenance | Finding F-7 from Run R-31 | Trace to evidence and method |

## Graph-Based Evaluation

**Graph-Based Evaluation** stores and analyzes evaluation findings through connected entities. Instead of reading twenty reports manually, a team can ask which assets trigger a credibility gap among personas sharing a particular goal, or which recommendations are supported by multiple evidence types.

Graph-based evaluation should not encourage unsupported inference. Queries return relationships present in the graph; they do not prove causation or customer prevalence. Preserve source type and confidence on every path.

Useful graph queries include:

- Which personas reacted to this asset and why?
- Which pain points block a particular goal?
- Which findings lack customer validation?
- Which risks depend on one low-quality source?
- Which recommendations address several related findings?
- Which assets express a promise contradicted by experience evidence?

#### Diagram: Persona Evaluation Knowledge Graph Builder

<iframe src="../../sims/persona-evaluation-graph-builder/main.html" width="100%" height="702" scrolling="no"></iframe>

<details markdown="1">
<summary>Persona Evaluation Knowledge Graph Builder</summary>
Type: graph-model
**sim-id:** persona-evaluation-graph-builder<br/>
**Library:** vis-network<br/>
**Status:** Specified

**Bloom level:** Create (L6)

**Bloom verb:** construct

**Learning objective:** Construct a provenance-rich evaluation graph linking personas, assets, goals, pain points, reactions, evidence, risks, and recommendations.

**Interaction:** Learners add typed nodes and relationships, validate direction and required properties, run sample queries, and inspect every evidence path.

**Visual design:** Node color and shape indicate type; edge labels remain visible on selection. Side panel shows properties, source, confidence, and version.

**Feedback:** The builder flags duplicate nodes, vague relationships, unsupported reactions, circular recommendation logic, and missing provenance.

**Responsive design:** Zoom, pan, drag, keyboard traversal, text triple view, and resize handling.

**Instructional rationale:** Building a typed relationship model supports creating and makes evidence structure explicit.

Implementation: vis-network model editor with JSON export and schema validation.
</details>

## Core Evaluation Nodes

A **Persona Node** represents an approved persona version, not a real individual. Properties can include purpose, segment, evidence status, owner, and version. Sensitive source material should remain protected outside the graph where appropriate.

An **Asset Node** represents a specific marketing asset version. Properties include type, channel, audience, journey stage, owner, date, and content reference. Version specificity prevents findings from attaching to the wrong revision.

A **Goal Node** represents customer progress or desired outcome. It can connect to several personas and assets. A **Pain Point Node** represents a recurring obstacle with evidence and context.

A **Reaction Node** stores a bounded interpretation, emotion, concern, rating, or proposed action produced under a scenario. It should connect to persona, asset, evidence, criterion, run, and confidence. Reactions are not customer testimony.

Example relationships include:

- Persona HAS_GOAL Goal
- Persona EXPERIENCES Pain Point
- Asset ADDRESSES Goal
- Asset TRIGGERS Reaction
- Reaction EXPRESSED_BY Persona
- Reaction ABOUT Asset
- Reaction SUPPORTED_BY Evidence
- Pain Point INCREASES Risk
- Recommendation ADDRESSES Finding

## Graph Quality and Governance

Use stable identifiers, controlled node and relationship types, required properties, provenance, and version rules. Validate that every relationship points to existing nodes and every finding traces to evidence.

Access control may differ by node and property. A broad team can see aggregated goals while only researchers can access sensitive source references. Deletion and correction must propagate without leaving misleading orphaned findings.

Avoid graph sprawl. Create a node when an entity needs identity, reuse, properties, or connections. Use a property for simple descriptive values. Review duplicates and merge only when identity truly matches.

## Writing Recommendations That Can Be Tested

Write recommendations as actions, not hopes. “Improve trust” names an outcome but no intervention. A stronger recommendation is: “Add the cancellation term beside the annual-price selector, using plain language, then test whether first-time buyers can explain the commitment before checkout.”

Include these fields:

- Recommendation identifier and statement
- Findings and evidence addressed
- Risk or opportunity
- Intended customer and business outcome
- Owner and collaborators
- Scope and affected assets
- Dependencies and constraints
- Estimated effort and impact
- Improvement hypothesis
- Validation method and success criteria
- Deadline, status, and decision record

Generate alternatives before prioritizing. A credibility gap might be addressed by narrowing the claim, adding proof, changing product behavior, training staff, or choosing not to make the claim. The cheapest copy edit may not solve the underlying issue.

Recommendations can conflict. One may improve brevity while another requires qualification. Link each to the criteria and persona contexts it serves. The decision owner can then make a visible trade-off instead of allowing one recommendation to overwrite another.

## Decision Records and Learning

A decision record captures the question, alternatives, evidence, risks, assumptions, constraints, decision, owner, date, and review trigger. It should explain why an option was selected and why others were not. This context prevents future teams from treating an old decision as timeless truth.

Define a review trigger such as new customer evidence, changed regulation, model update, product redesign, market shift, or failed outcome measure. Link the trigger to the graph so affected decisions can be found.

After implementation, record the result. The improvement hypothesis may be supported, contradicted, or inconclusive. Link new evidence without deleting the original finding. Iterative improvement depends on seeing how understanding changed.

An evidence-based decision can still be wrong because evidence is incomplete and the future is uncertain. Quality means the reasoning was proportionate, transparent, and revisable—not that every outcome was predicted.

## Designing Useful Graph Queries

Begin a graph query with a decision question. “Show everything connected to this asset” may produce noise. “Which unresolved high-severity credibility findings affect checkout assets and lack customer validation?” specifies types, relationships, status, severity, and evidence condition.

Useful query patterns include:

1. **Neighborhood query:** Find directly connected personas, findings, and evidence for one asset.
2. **Path query:** Trace a recommendation back through risk and finding to source evidence.
3. **Coverage query:** Find goals or pain points not addressed by any current asset.
4. **Contradiction query:** Find reactions or evidence with incompatible claims.
5. **Staleness query:** Find nodes depending on expired sources or deprecated personas.
6. **Impact query:** Find assets and decisions affected by a changed brand promise.
7. **Validation query:** Find synthetic findings without independent customer evidence.

Every result should show provenance and confidence. A path with more edges is not stronger evidence. Avoid ranking nodes solely by connection count; a widely linked unsupported claim can spread error faster.

## Knowledge Graph Lifecycle

Define creation, review, update, merge, correction, deprecation, retention, and deletion rules. Assign owners to schemas, source data, persona nodes, asset nodes, and findings. Automated imports should enter a review state rather than becoming trusted immediately.

When correcting a node, preserve the correction event and identify affected relationships. If a product fact changes, old evaluation runs may remain historically valid for the earlier asset but should not appear current. Temporal properties such as valid-from, valid-to, and observed-at help.

Use controlled vocabularies for relationship types. If teams create `HAS_PAIN`, `EXPERIENCES_PAIN`, and `SUFFERS_FROM` independently, queries become unreliable. Maintain definitions and migration rules.

Audit graph health:

- Nodes without identifiers, owners, or provenance
- Relationships without defined direction
- Duplicate personas or assets
- Findings disconnected from source evidence
- Recommendations disconnected from decisions
- Deprecated nodes still used in new runs
- Sensitive properties visible to broad roles
- Orphaned nodes after deletion
- Cycles that imply unsupported reasoning

Graph interfaces should let users challenge data. Provide a correction request, show source and confidence, and distinguish verified evidence from synthetic or inferred content. A visually compelling network can make weak relationships appear authoritative, so design transparency into every interaction.

## Graphs and Reports Serve Different Needs

The graph is a reusable organizational memory; the report is a bounded communication for a particular decision. Reports select a relevant subgraph, explain findings in prose, and present limitations. They should link back to graph records for audit.

Do not require executives to explore a network to understand a decision. Do not flatten the graph into a report and discard its relationships. Use each representation for its strength: graphs for connected retrieval and change impact, reports for guided reasoning and accountability.

Together, they preserve both navigable evidence and a clear decision narrative for future reviewers, researchers, operators, and accountable leaders.

## Worked Example: Pricing Transparency

Personas evaluate a subscription page. Several reactions cite uncertainty about annual cost, but their reasons differ. The graph connects each reaction to persona criteria, exact asset text, prompt run, and evidence.

A risk node represents misleading cost expectations. Severity is moderate to high; likelihood remains uncertain until customer testing. Recommendations include revising price hierarchy, adding a worked example, and testing comprehension.

The team selects the worked example based on impact and effort, writes an improvement hypothesis, and versions the asset. Human task testing supports the confusion finding. New evidence attaches to the same graph paths, raising confidence without rewriting history.

A query later shows another asset using the same annual-cost claim. The team can address a systemic messaging issue rather than treating each page as unrelated.

## Practice: Build a Risk and Graph Model

1. Select one finding and assess severity, likelihood, and confidence.
2. Write at least two recommendations.
3. Prioritize using impact, effort, risk, and evidence.
4. Record an evidence-based decision.
5. Write an improvement hypothesis and test plan.
6. Create persona, asset, goal, pain-point, and reaction nodes.
7. Define directed graph relationships.
8. Attach evidence, versions, confidence, and provenance.
9. Run one graph-based evaluation query.
10. Audit duplicates, access, and unsupported paths.

??? question "Does a graph relationship prove causation?"
    No. A graph records a defined relationship supported by stated evidence. Causal claims require an appropriate research design and should be represented explicitly with their evidence and uncertainty.

## Key Takeaways

- Risk assessment separates severity, likelihood, detectability, and confidence.
- Recommendations need evidence, owner, intended outcome, and validation.
- Priority combines impact, effort, risk, equity, dependencies, and learning value.
- Evidence-based decisions preserve alternatives, values, constraints, and accountability.
- Improvement hypotheses make iteration testable.
- Knowledge graphs represent typed nodes, edges, relationships, properties, and provenance.
- Persona, asset, goal, pain-point, and reaction nodes create a reusable evaluation memory.
- Graph queries reveal connected evidence but do not prove prevalence or causation.

Provenance matters.

## Review Questions

1. Why should severity and likelihood remain separate?
2. When should a high-severity uncertain risk trigger investigation?
3. What makes a recommendation actionable and traceable?
4. How does an improvement hypothesis support iteration?
5. What is the difference among a graph node, edge, and relationship?
6. Which properties should a reaction node preserve?
7. What governance controls prevent a knowledge graph from spreading unsupported claims?
