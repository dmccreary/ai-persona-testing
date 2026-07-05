# AI Persona Testing

[![MkDocs](https://img.shields.io/badge/Made%20with-MkDocs-526CFE?logo=materialformkdocs)](https://www.mkdocs.org/)
[![Material for MkDocs](https://img.shields.io/badge/Material%20for%20MkDocs-526CFE?logo=materialformkdocs)](https://squidfunk.github.io/mkdocs-material/)
[![GitHub Pages](https://img.shields.io/badge/View%20on-GitHub%20Pages-blue?logo=github)](https://dmccreary.github.io/ai-persona-testing/)
[![Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-DA7857?logo=anthropic)](https://claude.ai/code)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![p5.js](https://img.shields.io/badge/p5.js-ED225D?logo=p5.js&logoColor=white)](https://p5js.org/)

## View the Live Site

Read the interactive textbook at
[https://dmccreary.github.io/ai-persona-testing/](https://dmccreary.github.io/ai-persona-testing/).

## Overview

**AI Persona Testing** is a free, interactive intelligent textbook for marketing professionals, brand strategists,
product marketers, UX researchers, consultants, and business leaders. It teaches readers to build practical,
repeatable systems for testing marketing ideas with AI personas while keeping synthetic reactions distinct from
evidence gathered from real customers. No programming, statistics, or machine-learning background is required.

The book progresses from AI-assisted customer-research foundations through evidence quality, responsible AI,
persona design, prompt testing, multi-agent workflows, evaluation rubrics, knowledge graphs, and automated reporting.
A prerequisite-aware learning graph organizes the curriculum, while browser-based MicroSims, chapter quizzes, a
glossary, and an FAQ support active learning and quick reference.

## Site Status and Metrics

The following totals come from the canonical
[`docs/learning-graph/book-metrics.json`](docs/learning-graph/book-metrics.json) file.

| Metric | Count |
| --- | ---: |
| Concepts in learning graph | 400 |
| Chapters | 20 |
| Interactive MicroSims | 82 |
| Diagrams | 81 |
| Glossary terms | 400 |
| FAQ questions | 82 |
| Chapter quizzes | 20 |
| Quiz questions | 200 |
| Total words | 153,530 |
| Equivalent pages | 675 |
| Mascot images | 7 |

**Development stage:** Not specified in the canonical metrics.

## Getting Started

### Prerequisites

- Git
- Python 3
- `pip`

The published textbook and its MicroSims run in a modern web browser. Python is needed only to build or serve the
MkDocs site locally.

### Clone the Repository

```bash
git clone https://github.com/dmccreary/ai-persona-testing.git
cd ai-persona-testing
```

## Installation

Create and activate a virtual environment, then install Material for MkDocs:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install mkdocs-material
```

### Build and Serve Locally

Build the static site:

```bash
mkdocs build --strict
```

Start the development server with live reload:

```bash
mkdocs serve
```

Open [http://localhost:8000](http://localhost:8000) in a browser.

### Deploy to GitHub Pages

Maintainers can build and publish the current branch with:

```bash
mkdocs gh-deploy
```

## Usage

Use and customize the book as follows:

- Browse chapters in sequence or use full-text search to find a topic.
- Open the MicroSims section to explore interactive exercises in the browser.
- Edit Markdown content under `docs/` and navigation or theme settings in `mkdocs.yml`.
- Add MicroSims under `docs/sims/`, keeping each simulation's source, documentation, metadata, and preview together.
- Follow [`CONTENT-GENERATION-GUIDE.md`](CONTENT-GENERATION-GUIDE.md) before creating student-facing content.

## Repository Structure

```text
ai-persona-testing/
├── docs/                              # MkDocs source content
│   ├── chapters/                      # 20 chapters and chapter quizzes
│   ├── sims/                          # Interactive MicroSims and previews
│   ├── learning-graph/                # Graph data, metrics, reports, and tools
│   ├── img/                           # Cover, author, license, and mascot artwork
│   ├── css/                           # Theme and mascot styles
│   ├── index.md                       # Textbook home page
│   ├── glossary.md                    # Definitions for learning-graph concepts
│   ├── faq.md                         # Frequently asked questions
│   └── license.md                     # Full licensing details
├── plugins/                           # Local MkDocs hooks and extensions
├── AGENTS.md                          # Repository guidance for coding agents
├── CONTENT-GENERATION-GUIDE.md        # Student-content and mascot guidance
├── mkdocs.yml                         # Site configuration and navigation
└── README.md                          # Repository overview and setup guide
```

## Reporting Issues

Found a bug, typo, broken link, or opportunity to improve the material? Open a
[GitHub issue](https://github.com/dmccreary/ai-persona-testing/issues) and include:

- a concise description of the problem or suggestion
- the affected page or MicroSim URL
- steps to reproduce unexpected behavior
- expected and actual behavior
- screenshots and browser details when relevant

## Contributing

Contributions that improve accuracy, accessibility, examples, or interactive learning are welcome:

1. Fork the repository.
2. Create a focused feature branch.
3. Make and validate your changes locally.
4. Commit and push the branch to your fork.
5. Open a pull request describing the change and how it was tested.

Student-facing contributions must follow [`CONTENT-GENERATION-GUIDE.md`](CONTENT-GENERATION-GUIDE.md).

## License

This work is licensed under the
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

You may share and adapt the material for noncommercial purposes when you provide attribution, link to the license,
indicate changes, and distribute adaptations under the same license. Commercial rights are reserved by the copyright
holder. See [`docs/license.md`](docs/license.md) for details.

## Acknowledgements

This project builds on open-source tools and learning communities, including:

- [MkDocs](https://www.mkdocs.org/) and [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
  for site generation and presentation

- [p5.js](https://p5js.org/), [Chart.js](https://www.chartjs.org/), and
  [vis-network](https://visjs.github.io/vis-network/docs/network/) for interactive learning experiences

- [Python](https://www.python.org/) and [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  for content tooling and browser-based simulations

- [Claude AI](https://claude.ai/) for AI-assisted content workflows

- [GitHub Pages](https://pages.github.com/) for public hosting

## How to Cite

Suggested citation:

> McCreary, D. (2026). *AI Persona Testing*. https://dmccreary.github.io/ai-persona-testing/

```bibtex
@book{mccreary2026aipersonatesting,
  title  = {AI Persona Testing},
  author = {McCreary, Dan},
  year   = {2026},
  url    = {https://dmccreary.github.io/ai-persona-testing/},
  note   = {Interactive intelligent textbook}
}
```

## Contact

**Dan McCreary**

- [LinkedIn](https://www.linkedin.com/in/danmccreary/)
- [GitHub](https://github.com/dmccreary)

Questions and suggestions are welcome through LinkedIn or the repository's issue tracker.
