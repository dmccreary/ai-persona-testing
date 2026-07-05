#!/usr/bin/env python3
"""Generate approved chapter outlines from learning-graph.json."""

import json
from collections import defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
CHAPTERS_DIR = ROOT / "docs" / "chapters"
GRAPH_PATH = ROOT / "docs" / "learning-graph" / "learning-graph.json"

CHAPTERS = [
    ("AI-Powered Customer Research Foundations", "ai-customer-research", "Introduces AI, generative models, synthetic users, persona testing, and traditional methods, establishing the foundation for comparing human and AI-assisted customer research.", "Learners will be able to explain the core technologies and research traditions that support synthetic customer studies."),
    ("Research Design and Evidence Quality", "research-design-evidence", "Examines focus groups, interviews, surveys, research objectives, validity, reliability, repeatability, and evidence so learners can frame credible, appropriately scoped persona-testing studies.", "Learners will be able to define a research scope and distinguish strong evidence from weak or misleading findings."),
    ("AI Capabilities, Limitations, and Bias", "ai-limits-bias", "Explores simulation fidelity, response variability, hallucinations, bias, confidence, and human judgment so learners recognize where synthetic feedback succeeds or fails.", "Learners will be able to diagnose common model limitations and calibrate the credibility of AI-generated feedback."),
    ("Responsible AI, Privacy, and Governance", "responsible-ai-governance", "Establishes responsible practices for consent, privacy, sensitive data, transparency, fairness, oversight, governance, auditing, accountability, and escalation in AI-assisted research.", "Learners will be able to design ethical guardrails and governance controls for a persona-testing program."),
    ("Building Complete Customer Personas", "customer-personas", "Builds persona profiles from identity, context, demographics, psychographics, attitudes, values, goals, motivations, needs, pain points, and frustrations.", "Learners will be able to create detailed personas whose attributes support realistic, purposeful simulations."),
    ("Persona Motivations, Behaviors, and Evidence", "persona-behavior-evidence", "Extends personas with emotional and functional needs, buying behavior, decision criteria, channels, scenarios, evidence bases, specificity, and completeness.", "Learners will be able to connect persona behavior to evidence and concrete purchase or communication contexts."),
    ("Customer Segmentation and Persona Archetypes", "segmentation-archetypes", "Introduces segmentation methods while distinguishing primary, secondary, negative, adversarial, international, accessibility, and customer-state archetypes.", "Learners will be able to assemble a diverse persona portfolio that represents meaningful market differences."),
    ("Jobs-to-Be-Done and Customer Journeys", "jobs-customer-journeys", "Applies Jobs-to-Be-Done, switching forces, customer circumstances, journey stages, touchpoints, moments of truth, friction, and opportunity.", "Learners will be able to situate persona decisions within authentic goals, circumstances, and customer journeys."),
    ("Persona Consistency, Validation, and Reuse", "persona-quality-reuse", "Develops methods for detecting drift, validating fidelity, measuring coverage and diversity, managing versions, and building reusable persona libraries and benchmarks.", "Learners will be able to test, refine, document, and maintain reliable personas across repeated evaluations."),
    ("Prompt Engineering Foundations", "prompt-engineering", "Introduces prompt objectives, structures, roles, persona and reviewer instructions, context management, task definitions, constraints, and output requirements.", "Learners will be able to construct clear prompts that reliably establish role, context, task, and boundaries."),
    ("Structured Prompts and Reliable Outputs", "structured-prompts", "Refines prompts through specificity, grounding, examples, variables, templates, chaining, schemas, structured fields, evidence, confidence, and missing-data handling.", "Learners will be able to build reusable prompt templates that produce consistent, analysis-ready responses."),
    ("Prompt Testing and Research Dialogue", "prompt-testing-dialogue", "Covers prompt benchmarks, iteration, failure modes, instruction conflicts, consistency, neutral questioning, probes, adversarial questions, reflection, and synthesis.", "Learners will be able to evaluate prompts systematically and conduct productive, minimally biased research dialogue."),
    ("Designing AI Agents and Expert Roles", "ai-agents-expert-roles", "Defines agent goals, instructions, context, memory, tools, autonomy, and boundaries before configuring persona, moderator, skeptic, analyst, and expert agents.", "Learners will be able to specify focused agents whose roles and limits support credible evaluation workflows."),
    ("Multi-Agent Workflows, Debate, and Consensus", "multi-agent-orchestration", "Builds multi-agent workflows through orchestration, handoffs, shared contexts, parallel evaluation, moderated discussion, debate, consensus, minority opinions, and disagreement analysis.", "Learners will be able to coordinate multiple agents without erasing meaningful differences among their findings."),
    ("Moderation Risks and Brand Strategy", "moderation-brand-strategy", "Addresses neutrality, groupthink, opinion contamination, aggregation, and conflict resolution before connecting those safeguards to brand identity, positioning, voice, and messaging.", "Learners will be able to moderate agent groups and frame evaluations around coherent brand strategy."),
    ("Evaluating Marketing Assets and Messaging", "marketing-asset-evaluation", "Applies the system to logos, websites, product pages, advertisements, campaigns, social content, email, calls to action, journeys, competitors, and differentiation.", "Learners will be able to conduct structured persona evaluations across a broad portfolio of marketing assets."),
    ("Evaluation Rubrics, Scoring, and Evidence", "rubrics-scoring-evidence", "Creates reusable frameworks with criteria, rubrics, fairness checks, rating scales, weighted scores, normalization, confidence ratings, evidence standards, trust, and clarity measures.", "Learners will be able to design fair, transparent rubrics that connect scores to confidence and supporting evidence."),
    ("Marketing Metrics and Pattern Analysis", "marketing-metrics-analysis", "Measures resonance, memorability, intent, credibility, relevance, and accessibility before analyzing benchmarks, persona comparisons, themes, contradictions, gaps, and trust signals.", "Learners will be able to identify defensible patterns across persona responses and marketing performance criteria."),
    ("Risk-Based Recommendations and Knowledge Graphs", "risk-knowledge-graphs", "Converts findings into rated risks and prioritized recommendations while introducing knowledge graphs containing personas, assets, goals, pain points, and reactions.", "Learners will be able to organize evidence and recommendations as connected knowledge that supports decisions."),
    ("Automation, Reporting, and Capstone Systems", "automation-reporting-capstone", "Completes the graph model, then automates evaluation, summarization, comparisons, reports, dashboards, improvement plans, organizational memory, and the capstone system.", "Learners will be able to assemble a scalable, no-code AI persona testing system and communicate its results to decision-makers."),
]


def chapter_dir(number, slug):
    return f"{number:02d}-{slug}"


def main():
    data = json.loads(GRAPH_PATH.read_text(encoding="utf-8"))
    nodes = {node["id"]: node["label"] for node in data["nodes"]}
    if set(nodes) != set(range(1, 401)):
        raise ValueError("Expected exactly 400 sequential concept IDs")

    assignments = {cid: (cid - 1) // 20 + 1 for cid in nodes}
    prereq_chapters = defaultdict(set)
    for edge in data["edges"]:
        dependent_chapter = assignments[edge["from"]]
        prerequisite_chapter = assignments[edge["to"]]
        if prerequisite_chapter > dependent_chapter:
            raise ValueError(f"Dependency violation: {edge}")
        if prerequisite_chapter < dependent_chapter:
            prereq_chapters[dependent_chapter].add(prerequisite_chapter)

    CHAPTERS_DIR.mkdir(parents=True, exist_ok=True)
    overview = [
        "# Chapters", "",
        "This textbook is organized into 20 chapters covering 400 concepts.", "",
        "## Chapter Overview", "",
    ]

    for number, (title, slug, summary, outcome) in enumerate(CHAPTERS, 1):
        dirname = chapter_dir(number, slug)
        overview.append(f"{number}. [{title}]({dirname}/index.md) — {summary}")

        chapter_path = CHAPTERS_DIR / dirname
        chapter_path.mkdir(parents=True, exist_ok=True)
        first = (number - 1) * 20 + 1
        concept_lines = [f"{index}. {nodes[cid]}" for index, cid in enumerate(range(first, first + 20), 1)]
        lines = [
            f"# {title}", "", "## Summary", "", summary, "", outcome, "",
            "## Concepts Covered", "",
            "This chapter covers the following 20 concepts from the learning graph:", "",
            *concept_lines, "", "## Prerequisites", "",
        ]
        required = sorted(prereq_chapters[number])
        if required:
            lines.extend(["This chapter builds on concepts from:", ""])
            for prior in required:
                prior_title, prior_slug, _, _ = CHAPTERS[prior - 1]
                prior_dir = chapter_dir(prior, prior_slug)
                lines.append(f"- [Chapter {prior}: {prior_title}](../{prior_dir}/index.md)")
        else:
            lines.append("This chapter assumes only the prerequisites listed in the [course description](../../course-description.md).")
        lines.extend(["", "---", "", "TODO: Generate Chapter Content", ""])
        (chapter_path / "index.md").write_text("\n".join(lines), encoding="utf-8")

    overview.extend([
        "", "## How to Use This Textbook", "",
        "Work through the chapters in order because each chapter is placed only after all concepts it depends on have been introduced. Learners with prior experience may use the prerequisite links in each outline to identify the shortest safe path to a later topic.", "",
        "---", "",
        "**Note:** Each chapter includes a list of concepts covered. Complete the listed prerequisites before moving to advanced chapters.", "",
    ])
    (CHAPTERS_DIR / "index.md").write_text("\n".join(overview), encoding="utf-8")


if __name__ == "__main__":
    main()
