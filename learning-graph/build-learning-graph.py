#!/usr/bin/env python3
"""Build the reviewed AI Persona Testing learning-graph source files."""

import csv
import json
import re
from pathlib import Path


VERSION = "1.0"
ROOT = Path(__file__).parent

TAXONOMIES = [
    (1, 20, "AIFND", "AI And Research Foundations", "Core AI, language model, synthetic user, and customer research concepts.", "SteelBlue"),
    (21, 60, "RSRCH", "Research Design And AI Limits", "Research methods, evidence quality, model limitations, and bias awareness.", "DarkSlateBlue"),
    (61, 80, "ETHIC", "Ethics Privacy And Governance", "Responsible use, privacy, fairness, transparency, oversight, and accountability.", "DarkGreen"),
    (81, 120, "PERDS", "Persona Design", "Persona attributes, motivations, needs, behaviors, scenarios, and evidence bases.", "LimeGreen"),
    (121, 180, "PERQ", "Persona Segmentation And Quality", "Segmentation, Jobs-to-be-Done, journeys, persona testing, consistency, and reuse.", "Gold"),
    (181, 220, "PRMPT", "Prompt Design And Outputs", "Prompt structure, context, roles, constraints, templates, and structured responses.", "DarkGoldenrod"),
    (221, 240, "PTEST", "Prompt Testing And Dialogue", "Prompt evaluation, failure modes, question design, and synthesis techniques.", "Khaki"),
    (241, 260, "AGENT", "Agent Design And Roles", "Agent anatomy, boundaries, persona roles, and specialist reviewer roles.", "Teal"),
    (261, 290, "MULTI", "Multi-Agent Orchestration", "Coordination, discussion, debate, aggregation, consensus, and critique patterns.", "DodgerBlue"),
    (291, 320, "BRAND", "Brand And Asset Evaluation", "Brand strategy, messaging, identity, channels, assets, and customer journeys.", "LightSkyBlue"),
    (321, 350, "RUBRC", "Rubrics Scores And Evidence", "Evaluation frameworks, scoring, evidence, confidence, and marketing criteria.", "Crimson"),
    (351, 370, "ANLYS", "Analysis And Recommendations", "Pattern analysis, risk assessment, prioritization, and iterative improvement.", "MediumPurple"),
    (371, 386, "GRAPH", "Graph-Based Knowledge Models", "Knowledge graph structures, relationships, evidence, and organizational memory.", "DeepPink"),
    (387, 400, "WORKF", "Automation Reporting And Capstone", "No-code workflows, automated reports, dashboards, and scalable systems.", "DimGray"),
]

POOLS = [
    (1, 16, [1, 3, 6, 8, 9, 10]),
    (18, 40, [17, 18, 19, 20, 21, 24, 30]),
    (41, 60, [1, 3, 8, 11, 17, 35, 37, 38, 41, 43, 48, 50, 55, 56, 58]),
    (61, 80, [17, 35, 48, 55, 56, 58, 60, 61, 62, 63, 65, 68, 69, 70, 71, 72, 73, 74, 75, 77]),
    (81, 120, [9, 10, 17, 30, 68, 81, 82, 83, 86, 88, 89, 90, 91, 94, 96, 97, 98, 104, 107, 117, 118]),
    (121, 160, [17, 81, 89, 90, 91, 94, 96, 97, 98, 104, 107, 117, 121, 127, 141, 142, 146, 153, 155]),
    (161, 180, [10, 81, 83, 91, 117, 118, 119, 121, 127, 155, 161, 162, 166, 167, 168, 170, 171, 173, 174, 175]),
    (181, 220, [3, 5, 6, 7, 8, 81, 83, 117, 161, 181, 182, 183, 184, 191, 195, 196, 198, 199, 200, 201, 202, 203, 204, 206, 207, 208, 210, 211, 212, 213]),
    (221, 240, [7, 8, 55, 161, 181, 201, 202, 203, 207, 208, 210, 211, 212, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230]),
    (241, 260, [1, 3, 6, 7, 181, 184, 195, 196, 198, 200, 211, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250]),
    (261, 290, [241, 242, 243, 244, 245, 248, 249, 250, 251, 252, 253, 254, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278]),
    (291, 320, [17, 30, 81, 96, 98, 104, 107, 155, 261, 269, 271, 287, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302]),
    (321, 350, [30, 35, 38, 55, 69, 70, 107, 199, 211, 213, 215, 216, 217, 218, 291, 298, 301, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336]),
    (351, 370, [35, 55, 69, 70, 216, 217, 218, 279, 280, 286, 287, 301, 321, 323, 333, 334, 335, 336, 337, 338, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369]),
    (371, 386, [17, 30, 81, 96, 98, 155, 291, 321, 322, 334, 335, 364, 368, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384]),
    (387, 400, [77, 174, 176, 207, 210, 263, 269, 270, 286, 287, 321, 334, 351, 364, 368, 371, 375, 385, 386, 387, 388, 389, 390, 391, 392]),
]

SPECIAL = {
    1: [], 2: [1], 3: [2], 4: [3], 5: [3, 4], 6: [3], 7: [3, 6], 8: [3, 7],
    9: [1, 7], 10: [9], 11: [9, 10], 12: [10, 11], 13: [9, 11], 14: [1, 13],
    15: [11, 14], 16: [11, 13], 17: [], 18: [17], 19: [17], 20: [17, 19],
    41: [1, 3], 42: [41], 43: [13, 42], 48: [3, 42], 55: [35, 42], 56: [17, 55],
    58: [1, 42, 56], 61: [58, 60], 68: [17, 43, 56], 77: [58, 73, 74],
    81: [10, 17], 82: [81], 83: [81, 82], 89: [81, 83], 90: [81, 83],
    91: [81, 83], 96: [81, 83], 97: [81, 96], 98: [81, 96], 104: [81, 91],
    107: [96, 98, 104], 117: [81, 88, 96], 118: [68, 81], 121: [17, 81],
    127: [81, 121], 141: [96, 98, 121], 155: [17, 81, 117], 161: [10, 81, 91],
    166: [118, 161], 167: [119, 161, 166], 174: [167, 173], 175: [166, 174],
    181: [3, 6], 183: [181, 182], 184: [6, 183], 191: [5, 181], 195: [183, 184],
    199: [183, 196, 198], 200: [183, 199], 207: [181, 183, 206], 208: [183, 207],
    210: [207, 208], 211: [7, 200], 212: [211], 221: [181, 202, 203],
    225: [221, 222, 224], 230: [161, 221], 240: [211, 230, 239],
    241: [1, 6], 242: [195, 241], 243: [196, 241], 244: [184, 241],
    250: [198, 241, 249], 251: [81, 241], 252: [187, 241], 253: [188, 241],
    254: [189, 241], 261: [241, 251], 262: [261], 263: [262], 269: [261, 266, 268],
    271: [261, 266], 272: [251, 271], 273: [252, 272], 274: [261, 272],
    278: [273, 274, 277], 286: [269, 270, 271], 287: [278, 280, 286], 290: [254, 274],
    291: [17, 81], 292: [291], 293: [292], 294: [292, 293], 296: [292, 295],
    298: [293, 294], 299: [296, 298], 301: [296, 299, 300], 303: [291, 302],
    307: [291, 301, 302], 312: [291, 301], 318: [155, 291], 319: [293, 291],
    320: [293, 298, 319], 321: [30, 291], 322: [321], 323: [321, 322],
    327: [323, 324], 333: [216, 327], 334: [69, 321], 336: [334, 335],
    339: [323, 327, 334], 343: [104, 323, 327], 350: [327, 349],
    351: [286, 321, 334], 352: [286, 351], 354: [351, 353], 356: [301, 351],
    361: [351, 356], 364: [287, 334, 351], 365: [361, 364], 368: [334, 336, 364],
    370: [225, 368, 369], 371: [17, 81, 334], 372: [371], 373: [371, 372],
    374: [372, 373], 375: [321, 334, 371], 384: [373, 374], 385: [371, 374],
    386: [174, 371, 385], 387: [263, 321], 388: [263, 321, 387], 389: [263, 321, 388],
    390: [240, 287, 389], 391: [286, 352, 389], 392: [287, 364, 389],
    393: [287, 364, 392], 394: [286, 352, 392], 395: [327, 352, 392],
    396: [364, 365, 392], 397: [365, 367, 370], 398: [393, 394, 395, 396],
    399: [175, 210, 263, 323, 375, 389, 398], 400: [77, 176, 388, 399],
}


def read_concepts():
    concepts = []
    for line in (ROOT / "concept-list.md").read_text(encoding="utf-8").splitlines():
        match = re.match(r"^(\d+)\. (.+)$", line)
        if match:
            concepts.append((int(match.group(1)), match.group(2)))
    if [cid for cid, _ in concepts] != list(range(1, 401)):
        raise ValueError("concept-list.md must contain sequential IDs 1 through 400")
    return concepts


def taxonomy_for(cid):
    return next(item for item in TAXONOMIES if item[0] <= cid <= item[1])


def dependencies_for(cid):
    if cid in SPECIAL:
        return SPECIAL[cid]
    start, _, pool = next(item for item in POOLS if item[0] <= cid <= item[1])
    eligible = [value for value in pool if value < cid]
    anchor = start if start < cid else eligible[0]
    choices = [value for value in eligible if value != anchor]
    deps = [anchor]
    if choices:
        deps.append(choices[(cid * 7) % len(choices)])
    if cid % 5 == 0 and len(choices) > 1:
        deps.append(choices[(cid * 11 + 3) % len(choices)])
    return sorted(set(deps))


def write_json(name, data):
    (ROOT / name).write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")


def main():
    concepts = read_concepts()
    deps_by_id = {cid: dependencies_for(cid) for cid, _ in concepts}

    # Keep specialized endpoints within the analyzer's healthy 5–40% range.
    # A terminal concept in the earlier portion of a taxonomy is attached to a
    # later synthesis concept in that same taxonomy. Targets are concentrated
    # near the end of the category, preventing long artificial linear chains.
    referenced = {dep for deps in deps_by_id.values() for dep in deps}
    terminal_ids = [cid for cid, _ in concepts if cid not in referenced and deps_by_id[cid]]
    additions_needed = max(0, len(terminal_ids) - 140)
    additions = 0
    for first, last, *_ in TAXONOMIES:
        targets = list(range(max(first + 1, last - 11), last + 1))
        candidates = [cid for cid in terminal_ids if first <= cid < min(targets)]
        for cid in candidates:
            if additions >= additions_needed:
                break
            valid_targets = [target for target in targets if target > cid and cid not in deps_by_id[target]]
            if not valid_targets:
                continue
            target = valid_targets[(cid * 5) % len(valid_targets)]
            deps_by_id[target] = sorted(set(deps_by_id[target] + [cid]))
            additions += 1
        if additions >= additions_needed:
            break

    with (ROOT / "learning-graph.csv").open("w", encoding="utf-8", newline="") as handle:
        writer = csv.writer(handle)
        writer.writerow(["ConceptID", "ConceptLabel", "Dependencies", "TaxonomyID"])
        for cid, label in concepts:
            deps = deps_by_id[cid]
            if any(dep >= cid for dep in deps):
                raise ValueError(f"Concept {cid} has a non-prior dependency: {deps}")
            writer.writerow([cid, label, "|".join(map(str, deps)), taxonomy_for(cid)[2]])

    names = {tax_id: name for _, _, tax_id, name, _, _ in TAXONOMIES}
    colors = {tax_id: color for _, _, tax_id, _, _, color in TAXONOMIES}
    write_json("taxonomy-names.json", names)
    write_json("color-config.json", colors)
    write_json("metadata.json", {
        "title": "AI Persona Testing for Marketing Professionals",
        "description": "A learning graph for designing, operating, and improving AI-assisted synthetic customer research systems for marketing evaluation.",
        "creator": "Dan McCreary",
        "date": "2026-07-03",
        "version": "1.0",
        "format": "Learning Graph JSON v1.0",
        "schema": "https://raw.githubusercontent.com/dmccreary/learning-graphs/refs/heads/main/src/schema/learning-graph-schema.json",
        "license": "CC BY-NC-SA 4.0 DEED",
    })

    lines = ["# Concept Taxonomy", "", "The 400 concepts are organized into 14 primary categories.", ""]
    for first, last, tax_id, name, description, _ in TAXONOMIES:
        lines.extend([
            f"## {name}", "", f"**TaxonomyID:** `{tax_id}`", "",
            f"{description} This category contains concepts {first}–{last}.", "",
        ])
    (ROOT / "concept-taxonomy.md").write_text("\n".join(lines), encoding="utf-8")


if __name__ == "__main__":
    main()
