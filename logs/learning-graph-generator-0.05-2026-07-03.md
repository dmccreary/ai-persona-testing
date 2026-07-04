# Learning Graph Generator Session Log

## Session Metadata

- **Skill:** Learning Graph Generator
- **Skill Version:** 0.05
- **Date:** 2026-07-03
- **Course:** AI Persona Testing for Marketing Professionals
- **Python Environment:** Conda environment `mkdocs`
- **Python Version:** 3.13.0

## Inputs And Decisions

- Used `docs/course-description.md` as the source document.
- Reused its existing 100/100 quality assessment and skipped reassessment as permitted by v0.05.
- Generated and received user approval for 400 concepts.
- Organized the concepts into 14 taxonomy categories.
- Used Artificial Intelligence and Customer Research as the two foundational concepts.

## Programs Used

- `build-learning-graph.py` v1.0 — generated the dependency CSV, taxonomy files, colors, and metadata.
- `analyze-graph.py` — bundled with skill v0.05; the program declares no independent version.
- `taxonomy-distribution.py` — bundled with skill v0.05; the program declares no independent version.
- `csv-to-json.py` v0.04 — generated the complete vis-network JSON graph.
- `validate-learning-graph.py` — bundled with skill v0.05; the program declares no independent version.
- `jsonschema` v4.25.1 — validated the generated graph in the `mkdocs` Conda environment.

## Validation Results

- **Concepts:** 400
- **Taxonomy Groups:** 14
- **Dependency Edges:** 958
- **Foundational Concepts:** 2
- **Concepts With Dependencies:** 398
- **Average Dependencies:** 2.41
- **Terminal Nodes:** 140 (35.0%)
- **Orphaned Nodes:** 0
- **Connected Components:** 1
- **Cycles:** 0
- **Maximum Dependency Chain:** 26 concepts
- **Graph Quality Score:** 94/100
- **JSON Schema Validation:** Passed

## Compatibility Note

The project-local schema copy was reconciled with the v0.05 skill contract so taxonomy `color` values validate as named CSS color strings, matching `csv-to-json.py` v0.04 output.
