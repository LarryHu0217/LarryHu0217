# Liang Hu

Computer science at Columbia University. I build backend infrastructure, observability,
reliability, and data systems, with recent work across telemetry SDKs, MCP/agent tooling,
data engines, API conformance, and CI.

[LinkedIn](https://www.linkedin.com/in/liang-hu/) |
[Google Scholar](https://scholar.google.com/citations?user=2ddJaI4AAAAJ) |
[ORCID](https://orcid.org/0009-0005-6930-236X)

## Open-source highlights

53 external pull requests merged since July 2026.

| Project | Merged work | Impact |
| --- | --- | --- |
| [OpenTelemetry](https://github.com/open-telemetry) | [Twelve JavaScript, Java, and documentation contributions](https://github.com/search?q=is%3Apr+author%3ALarryHu0217+is%3Amerged+org%3Aopen-telemetry&type=pullrequests) | Corrects sampling and flush behavior, adds per-call timeout controls, documents exporter and .NET provider behavior, stabilizes benchmark CI, deprecates the OpenCensus shim API, and marks logger configuration experimental |
| [Parallel Code](https://github.com/johannesjo/parallel-code) | [Sixteen merged improvements](https://github.com/johannesjo/parallel-code/pulls?q=is%3Apr+author%3ALarryHu0217+is%3Amerged) | Improves accessibility, review workflows, task coverage, UI reliability, and migration behavior |
| [FINOS FDC3](https://github.com/finos/FDC3) | [Eight conformance, documentation, and runtime fixes](https://github.com/finos/FDC3/pulls?q=is%3Apr+author%3ALarryHu0217+is%3Amerged) | Improves channel lifecycle behavior, error coverage, discovery reliability, and normal-scenario logging |
| [CAMARA](https://github.com/camaraproject) | [Six API tooling and specification fixes](https://github.com/search?q=is%3Apr+author%3ALarryHu0217+is%3Amerged+org%3Acamaraproject&type=pullrequests) | Strengthens OpenAPI linting, discriminator handling, notification conformance, access-token error guidance, version placeholders, and generated artifact stability |
| [Polars](https://github.com/pola-rs/polars) | [Two merged Rust fixes](https://github.com/pola-rs/polars/pulls?q=is%3Apr+author%3ALarryHu0217+is%3Amerged) | Propagates the `bigidx` feature correctly and prevents a union-slice panic |
| [Perspective](https://github.com/perspective-dev/perspective) | [Persist datagrid column widths](https://github.com/perspective-dev/perspective/pull/3215) | Preserves plugin-owned column configuration across workspace save and first restore |
| [FastMCP](https://github.com/PrefectHQ/fastmcp) | [Preserve raw `CallToolResult` returns](https://github.com/PrefectHQ/fastmcp/pull/4587) | Protects protocol-level metadata and structured tool-result semantics |
| [Apache Arrow](https://github.com/apache/arrow) | [Modernize Archery version handling](https://github.com/apache/arrow/pull/50669) | Removes reliance on a private `setuptools_scm` API and preserves release tooling compatibility |
| [OpenInference](https://github.com/Arize-ai/openinference) | [Four merged JavaScript and AWS SDK fixes](https://github.com/search?q=is%3Apr+author%3ALarryHu0217+is%3Amerged+repo%3AArize-ai%2Fopeninference&type=pullrequests) | Enforces type-aware lint rules and prevents AWS SDK type-only imports from becoming runtime ESM dependencies |

## Recent merges

- [CAMARA Commonalities #704](https://github.com/camaraproject/Commonalities/pull/704) - corrected the initial public API version placeholder guidance.
- [CAMARA Commonalities #689](https://github.com/camaraproject/Commonalities/pull/689) - clarified missing-identifier error descriptions for access tokens.
- [Perspective #3215](https://github.com/perspective-dev/perspective/pull/3215) - persisted datagrid column widths through workspace save and first restore.
- [OpenTelemetry.io #11404](https://github.com/open-telemetry/opentelemetry.io/pull/11404) - clarified how .NET `ActivitySource` registration connects instrumentation to a provider.
- [OpenTelemetry.io #11403](https://github.com/open-telemetry/opentelemetry.io/pull/11403) - clarified the intended application-lifetime ownership of .NET `TracerProvider` instances.
- [Parallel Code #263](https://github.com/johannesjo/parallel-code/pull/263) - added local ESLint quality findings to the review workflow with actionable error handling and an explicit refresh control.
- [OpenTelemetry JS #6996](https://github.com/open-telemetry/opentelemetry-js/pull/6996) - marked logger configuration experimental and closed the related API-stability issue.
- [OpenTelemetry JS #6997](https://github.com/open-telemetry/opentelemetry-js/pull/6997) - incorporated and extended my `headers_list` exporter work from [#6955](https://github.com/open-telemetry/opentelemetry-js/pull/6955) across all log, metric, and trace exporter paths.
- [OpenTelemetry Java #8674](https://github.com/open-telemetry/opentelemetry-java/pull/8674) - deprecated the OpenCensus shim public API.
- [OpenTelemetry.io #10713](https://github.com/open-telemetry/opentelemetry.io/pull/10713) - documented Java exporter self-monitoring metrics.
- [OpenInference #3463](https://github.com/Arize-ai/openinference/pull/3463) - fixed Bedrock ESM runtime imports.
- [OpenInference #3532](https://github.com/Arize-ai/openinference/pull/3532) - enforced the remaining type-aware JavaScript lint rules.
- [OpenInference #3566](https://github.com/Arize-ai/openinference/pull/3566) - enforced safe type assertions across the JavaScript packages.
- [OpenInference #3561](https://github.com/Arize-ai/openinference/pull/3561) - enforced promise and method lint rules across the JavaScript packages.
- [Parallel Code #257](https://github.com/johannesjo/parallel-code/pull/257) - increased terminal wheel-scroll sensitivity across desktop and remote terminals.
- [Parallel Code #245](https://github.com/johannesjo/parallel-code/pull/245) - added an opt-in terminal screen-reader mode.

## Engineering focus

- OpenTelemetry SDK correctness and telemetry pipelines
- Python and TypeScript backend infrastructure
- API validation, CI reliability, and regression testing
- Financial technology interoperability and data systems

[View all merged pull requests](https://github.com/search?q=is%3Apr+author%3ALarryHu0217+is%3Amerged&type=pullrequests)
