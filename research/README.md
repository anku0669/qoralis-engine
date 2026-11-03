# Qoralis Engine research paper

**Qoralis Engine: A System Characterization of Sparse-Expert Inference Across GPU, RAM, and NVMe Tiers**

A nine-page, two-column systems research report examining the Qoralis Engine v2.1.0 downstream distribution and its upstream Colibri lineage.

## Paper package

- The generated PDF is supplied separately in this conversation; the repository stores the rebuildable LaTeX source and bibliography.
- `qoralis_engine_system_paper.tex` - complete LaTeX source, including the architecture figure and mathematical model.
- `references.bib` - full BibLaTeX bibliography (38 cited sources).

## What the paper covers

1. Sparse MoE inference and related systems: MoE-Infinity, PowerInfer, FlexGen, and PagedAttention/vLLM.
2. Qoralis software organization: native C inference engines, Python control plane, model-family registry, setup, resource planning, and hardware detection.
3. Three-tier expert placement across accelerator memory, host RAM, and local storage; expert-store lease semantics, cache history, prefetch, and pipeline overlap.
4. CPU, Vulkan, CUDA, Metal, HIP-related, and platform-specific backend considerations, including correctness requirements.
5. GGUF/model-family support, API serving, System One typed decisions, MCP setup tools, desktop integration, and optional worker-cluster execution.
6. An evidence audit of repository-published measurements, a reproducibility protocol, and security/operational limits.

## Scope, attribution, and evidence standard

This is an implementation and evidence review, not a claim of a new model architecture or a newly conducted benchmark campaign. The repository's `UPSTREAM.md` identifies Qoralis as a downstream distribution of Colibri, originally created by Vincenzo Fornaro (JustVugg). The paper retains that attribution and does not claim inherited engine algorithms, kernels, or historical benchmark results as original Qoralis inventions.

Performance values are labelled as repository-reported historical or community measurements. They may predate v2.1.0 and span different machines, source revisions, model files, and runtime options. They are not a controlled cross-system comparison. In particular, the paper calls out quality-affecting options and does not present them as default exact-execution results.

The audit covered release `v2.1.0` and the repository main-branch state on 3 November 2026. No new model execution, timing run, quality test, penetration test, or formal verification was performed for the paper. The report is not peer reviewed and is not an official IEEE/ACM publisher template.

## Rebuild

From this directory, with `pdflatex`, `latexmk`, `biber`, `biblatex`, and `biblatex-ieee` installed:

```bash
latexmk -pdf -bibtex -interaction=nonstopmode qoralis_engine_system_paper.tex
```

`latexmk` detects Biber from the generated BibLaTeX control file. The `-bibtex` option enables the bibliography pass; Biber is selected automatically.

## Suggested citation

Qoralis Engine Contributors. *Qoralis Engine: A System Characterization of Sparse-Expert Inference Across GPU, RAM, and NVMe Tiers: An Implementation and Evidence Review of the Qoralis v2.1.0 Downstream Distribution*. Technical research report, 3 November 2026.