# Diversified but Crowded: Evidence from 13F Holdings

**Liang Hu** and **Yinru Shen**

**Accepted Manuscript** — accepted for publication in *Finance Research Letters* on October 5, 2026. The final typeset version and DOI are forthcoming.

© 2026. This manuscript version is made available under the CC BY-NC-ND 4.0 license.

## Abstract

This paper examines whether diversification within institutional portfolios is associated with greater portfolio distinctiveness or greater overlap across managers. Using quarterly SEC 13F holdings for the 500 largest institutional managers from 2018Q1 to 2025Q4, the analysis constructs pairwise portfolio overlap and a manager-level measure of crowding. Institutional crowding rises substantially over the sample period, from 0.140 to 0.231. Within-quarter sorts show that average crowding increases from 0.051 in the lowest entropy quintile to 0.248 in the highest. Regression estimates show that more diversified portfolios are more crowded after controlling for portfolio characteristics and quarter fixed effects. Holdings-based crowding is also associated with stronger next-quarter common movement between manager portfolios and leave-one-out peer portfolios, including after adjusting for broad market and Fama–French factor exposure. This association remains stable after excluding the Big Three and other large managers. Overall, the results show that diversification within individual portfolios does not necessarily imply distinctiveness across institutional investors.

**Keywords:** Institutional investors; SEC 13F filings; Portfolio crowding; Portfolio diversification; Portfolio overlap; Common ownership.

## 1. Introduction

Diversification is a central principle of portfolio choice because spreading wealth across securities can reduce exposure to firm-specific risk (Markowitz, 1952). This conventional argument, however, concerns diversification within an individual portfolio. It does not imply that the portfolios of different investors are distinct from one another. Institutional managers may each hold a broad and individually diversified portfolio while concentrating collectively in the same liquid, index-relevant, or benchmark-compatible securities. This distinction has become increasingly important as index investing, benchmark-sensitive asset management, and the concentration of institutional assets have reshaped portfolio demand (Coles et al., 2022; Chinco and Sammon, 2024; Haddad et al., 2021; Jiang et al., 2025). Diversification at the manager level may therefore coexist with, rather than prevent, similarity across managers.

A large literature shows why such similarity may have economic consequences. Institutional investors frequently trade in the same direction (Sias, 2004), while flow-induced purchases and sales can generate price pressure in securities held by multiple funds (Coval and Stafford, 2007). Common ownership can expose securities to correlated non-fundamental demand shocks and greater price fragility (Greenwood and Thesmar, 2011). Stocks connected through shared institutional owners also exhibit stronger return comovement (Anton and Polk, 2014). More recent evidence shows that large institutional investors can exert substantial price effects when investment decisions are correlated across organizational units and benchmarks (Ben-David et al., 2021; Buffa and Hodor, 2023). Together, these studies show that common institutional positions can matter for prices, comovement, and financial fragility. They do not, however, directly answer whether managers that are more diversified within their own portfolios are also more similar to other institutional managers.

Several recent studies are more directly related to this question. Diversification requirements in the leveraged-loan market can induce institutional portfolios to become more similar (Elkamhi and Nozawa, 2022). Benchmarking can likewise affect institutional demand and asset prices (Pavlova and Sikorskaya, 2023). At the fund level, holdings overlap has been used to measure international mutual-fund crowding (Gonzalez et al., 2024), while entropy-based measures have recently been proposed to identify investor crowding (Perras and Wagner, 2026).

This paper is related to these studies but focuses on a narrower cross-manager question: whether broader diversification among U.S. institutional equity managers is systematically associated with greater portfolio overlap. The contribution is therefore not a new model of crowding or a causal estimate of shock transmission. It is a short empirical regularity: portfolios that are more diversified within managers can also be less distinct across managers.

## 2. Data and methodology

The sample comes from quarterly SEC 13F holdings from 2018Q1 to 2025Q4. In each quarter, the analysis retains the top 500 managers by reported portfolio value and recomputes portfolio weights within that manager universe. After cleaning, duplicate removal, and quarter-level consistency checks, the manager-level panel contains 16,000 manager-quarter observations. The holdings panel contains 17,147,528 manager-stock-quarter observations, the pairwise overlap panel contains 3,787,710 manager-pair-quarter observations, and the stock-level panel contains 400,564 stock-quarter observations.

The measurement pipeline is: 13F holdings → manager-stock weights → pairwise overlap → manager-level crowding → diversification measures → regressions and common portfolio movement validation.

For manager *m*, stock *s*, and quarter *t*, let (w_{m,s,t}) denote the portfolio weight. Pairwise overlap is

[
Overlap_{mn,t} = sum_{s in S_t} min(w_{m,s,t}, w_{n,s,t}).
]

This is a holdings-based measure of cross-manager portfolio similarity. Manager-level crowding is the average leave-one-out overlap with peer managers:

[
Crowding_{m,t} = rac{1}{N_t - 1}sum_{n=1}^{N_t} 1\{n \ne m\}Overlap_{mn,t}.
]

The baseline diversification measure is entropy,

[
Entropy_{m,t} = -sum_s w_{m,s,t}ln(w_{m,s,t}),
]

where higher values indicate broader diversification. Alternative measures are the Herfindahl–Hirschman index, (HHI_{m,t}=sum_s w^2_{m,s,t}), and effective holdings, (EffectiveN_{m,t}=1/HHI_{m,t}).

The analysis also uses abnormal crowding as a mechanical-breadth diagnostic: observed crowding minus expected random overlap for portfolios with the same number of holdings in the same quarter.

The baseline regression estimates the association between manager-level crowding and portfolio diversification:

[
Crowding_{m,t} = \alpha + \beta Diversification_{m,t} + X'_{m,t}\gamma + \delta_t + \varepsilon_{m,t}.
]

The control vector includes number of holdings, log portfolio value, and maximum position. All baseline specifications include quarter fixed effects, and standard errors are clustered by manager. The regression sample excludes manager-quarters with five or fewer holdings, effective holdings above 400, or a maximum portfolio position of at least 95%. These screens remove small or mechanically unusual portfolios. The resulting baseline regression sample contains 15,576 manager-quarter observations.

To assess economic relevance, approximate next-quarter daily manager returns are constructed from the top 300 value-ranked securities with available daily prices. The peer portfolio return is leave-one-out: for each manager, it is the equal-weighted average return of other managers in the same quarter, so the manager’s own return cannot mechanically enter its peer benchmark.

## 3. Empirical results

### 3.1 Diversification and crowding

Manager-level crowding rises from 0.140 in 2018Q1 to 0.231 in 2025Q4.

### Table 1. Within-quarter quintile sorts by portfolio entropy

| Entropy quintile | Crowding mean | Holdings | Entropy | Effective N | HHI |
|---|---:|---:|---:|---:|---:|
| 1 | 0.0515 | 95.1 | 2.336 | 10.58 | 0.2306 |
| 2 | 0.1136 | 325.8 | 3.867 | 32.02 | 0.0388 |
| 3 | 0.1782 | 667.0 | 4.732 | 61.65 | 0.0191 |
| 4 | 0.2353 | 1344.4 | 5.445 | 103.52 | 0.0110 |
| 5 | 0.2476 | 2926.2 | 6.116 | 181.49 | 0.0066 |

The average manager holds 1,072 securities, has entropy of 4.499, and has portfolio overlap of 0.165 with peer managers. Managers are sorted into entropy quintiles separately within each quarter. Average crowding rises from 0.051 in the lowest entropy quintile to 0.248 in the highest entropy quintile. Thus, managers with broader and less concentrated portfolios are also more similar to other institutional managers.

### Table 2. Diversification regressions and mega-manager robustness

**Panel A: Diversification regressions**

|  | (1) | (2) | (3) |
|---|---:|---:|---:|
| Dependent variable | Crowding mean | Crowding mean | Crowding mean |
| Focal variable | Entropy | Effective N | HHI |
| Entropy | 0.0657*** (0.0031) |  |  |
| Effective N |  | 0.0001*** (0.0001) |  |
| HHI |  |  | -0.2002** (0.0833) |
| Portfolio controls | Yes | Yes | Yes |
| Quarter fixed effects | Yes | Yes | Yes |
| Manager-clustered SE | Yes | Yes | Yes |
| Observations | 15,576 | 15,576 | 15,576 |
| R² | 0.645 | 0.489 | 0.486 |

**Panel B: Big Three and mega-manager robustness**

| Sample | Entropy coef. | SE | Observations | R² |
|---|---:|---:|---:|---:|
| Baseline | 0.0657*** | 0.0031 | 15,576 | 0.645 |
| Exclude Big Three | 0.0652*** | 0.0031 | 15,476 | 0.641 |
| Exclude top 5 managers | 0.0629*** | 0.0031 | 15,067 | 0.635 |
| Exclude top 10 managers | 0.0614*** | 0.0032 | 14,609 | 0.629 |

Panel A reports OLS estimates with portfolio controls, quarter fixed effects, and manager-clustered standard errors. Effective N = 1/HHI. Panel B reconstructs the portfolio-overlap network after each manager exclusion before re-estimating the baseline entropy specification.

*** p < 0.01, ** p < 0.05, * p < 0.1.

### 3.2 Common portfolio movement

Manager-level crowding has economic relevance if overlapping institutional portfolios subsequently move together. Future common return correlation rises from 0.737 in the lowest crowding quintile to 0.991 in the highest crowding quintile.

### Table 3. Crowding and subsequent common portfolio movement

| Outcome | Focal variable | Coef. | SE | Observations |
|---|---|---:|---:|---:|
| **Panel A: Raw common portfolio movement** |||||
| Common corr. | Crowding mean | 0.682*** | 0.049 | 6,395 |
| Common corr. | Abnormal crowding | 0.672*** | 0.052 | 6,395 |
| **Panel B: SPY-residual common portfolio movement** |||||
| SPY residual corr. | Crowding mean | 0.960*** | 0.067 | 6,395 |
| SPY residual corr. | Abnormal crowding | 0.983*** | 0.069 | 6,395 |
| **Panel C: Fama-French residual common portfolio movement** |||||
| FF3 residual corr. | Crowding mean | 0.822*** | 0.074 | 6,407 |
| FF3 residual corr. | Abnormal crowding | 0.835*** | 0.076 | 6,407 |

Outcomes are next-quarter correlations between manager returns and leave-one-out peer returns. All models include entropy, log portfolio value, max position, number of holdings, and quarter fixed effects; standard errors are clustered by manager.

Abnormal crowding subtracts a same-quarter random holding-count benchmark from observed crowding. Panels B and C use SPY- and Fama–French three-factor residualized returns. These specifications are diagnostic, not causal.

### 3.3 Robustness

A central concern is that the diversification–crowding relation may reflect index giants or other mega managers. Table 2, Panel B addresses this concern by recomputing the portfolio-overlap network after excluding the Big Three and the largest managers, then re-estimating the baseline entropy specification. The entropy coefficient remains positive and close to the baseline estimate, including after excluding the top 10 managers. This stability indicates that the main association is not solely driven by the largest institutions in the 13F universe.

A second concern is mechanical overlap from broader portfolios. The main regressions control for number of holdings, while Table 3 also uses abnormal crowding, which subtracts a same-quarter random holding-count benchmark from observed crowding. Appendix Table A.2 shows that the raw common portfolio movement estimates are stable across priced-security universes. These tests support the descriptive interpretation: diversification is systematically related to portfolio overlap and common portfolio movement, but the design does not establish a causal effect.

## 4. Conclusion

This paper documents that diversification within institutional portfolios need not imply distinctiveness across institutional investors. Using SEC 13F holdings from 2018Q1 to 2025Q4, the evidence shows that managers with broader and less concentrated portfolios tend to hold portfolios that overlap more strongly with those of their peers. This relationship is consistent across alternative diversification measures and remains positive after excluding the largest institutional managers.

Portfolio crowding is also economically informative. Managers with more overlapping holdings exhibit stronger subsequent common portfolio movement with leave-one-out peer portfolios, including after accounting for broad market and factor exposures. These results suggest that conventional measures of portfolio diversification provide an incomplete view of institutional exposure because they capture concentration within a portfolio but not similarity across portfolios.

The analysis is descriptive and does not identify a causal effect of diversification on crowding or of crowding on returns. Nevertheless, the findings show that individually diversified portfolios can coexist with substantial collective overlap, making cross-manager similarity relevant for institutional portfolio monitoring and crowding-risk assessment.

## References

Anton, M., Polk, C., 2014. Connected stocks. *The Journal of Finance* 69, 1099–1127. doi:10.1111/jofi.12149.

Ben-David, I., Franzoni, F., Moussawi, R., Sedunov, J., 2021. The granular nature of large institutional investors. *Management Science* 67, 6629–6659.

Buffa, A.M., Hodor, I., 2023. Institutional investors, heterogeneous benchmarks and the comovement of asset prices. *Journal of Financial Economics* 147, 352–381.

Chinco, A., Sammon, M., 2024. The passive ownership share is double what you think it is. *Journal of Financial Economics* 157, 103860.

Coles, J.L., Heath, D., Ringgenberg, M.C., 2022. On index investing. *Journal of Financial Economics* 145, 665–683.

Coval, J., Stafford, E., 2007. Asset fire sales (and purchases) in equity markets. *Journal of Financial Economics* 86, 479–512. doi:10.1016/j.jfineco.2006.09.007.

Elkamhi, R., Nozawa, Y., 2022. Fire-sale risk in the leveraged loan market. *Journal of Financial Economics* 146, 1120–1147.

Gonzalez, T.A., Dyakov, T., Inhoffen, J., Wipplinger, E., 2024. Crowding of international mutual funds. *Journal of Banking & Finance* 164, 107202.

Greenwood, R., Thesmar, D., 2011. Stock price fragility. *Journal of Financial Economics* 102, 471–490. doi:10.1016/j.jfineco.2011.06.003.

Haddad, V., Huebner, P., Loualiche, E., 2021. How competitive is the stock market? Theory, evidence from portfolios, and implications for the rise of passive investing.

Jiang, H., Vayanos, D., Zheng, L., 2025. Passive investing and the rise of mega-firms. *The Review of Financial Studies* 38, 3461–3496.

Markowitz, H., 1952. Portfolio selection. *The Journal of Finance* 7, 77–91. doi:10.1111/j.1540-6261.1952.tb01525.x.

Pavlova, A., Sikorskaya, T., 2023. Benchmarking intensity. *The Review of Financial Studies* 36, 859–903.

Perras, P., Wagner, N., 2026. Investor crowding. *Finance Research Letters* 102, 110052. doi:10.1016/j.frl.2026.110052.

Sias, R.W., 2004. Institutional herding. *The Review of Financial Studies* 17, 165–206. doi:10.1093/rfs/hhg035.

## Appendix A. Additional descriptive and robustness evidence

### Table A.1. Summary statistics: 2018Q1–2025Q4

| Variable | Mean | Std. Dev. | P25 | Median | P75 | N |
|---|---:|---:|---:|---:|---:|---:|
| Crowding mean | 0.1652 | 0.1019 | 0.0796 | 0.1647 | 0.2457 | 16,000 |
| Entropy | 4.4990 | 1.4152 | 3.5975 | 4.7746 | 5.6089 | 16,000 |
| HHI | 0.0612 | 0.1457 | 0.0091 | 0.0173 | 0.0427 | 16,000 |
| Effective N | 77.85 | 74.10 | 23.39 | 57.86 | 110.41 | 16,000 |
| Number of holdings | 1071.7 | 1344.4 | 102.0 | 553.0 | 1519.0 | 16,000 |
| Log portfolio value | 27.3574 | 3.2287 | 24.3029 | 26.6477 | 30.1537 | 16,000 |
| Max position | 0.1151 | 0.1662 | 0.0395 | 0.0602 | 0.1039 | 16,000 |

Manager-level statistics for the top 500 13F managers by portfolio value each quarter. P25 and P75 denote the 25th and 75th percentiles.

### Table A.2. Price-universe sensitivity for common portfolio movement

| Priced-security universe | Focal variable | Coef. | SE | Observations |
|---|---|---:|---:|---:|
| Top 100 | Crowding mean | 0.816*** | 0.072 | 6,282 |
| Top 100 | Abnormal crowding | 0.800*** | 0.074 | 6,282 |
| Top 300 | Crowding mean | 0.682*** | 0.049 | 6,395 |
| Top 300 | Abnormal crowding | 0.672*** | 0.052 | 6,395 |
| Top 500 | Crowding mean | 0.624*** | 0.044 | 6,427 |
| Top 500 | Abnormal crowding | 0.614*** | 0.046 | 6,427 |

Raw common-correlation regressions using top-N priced securities each quarter. Peer returns are leave-one-out averages; residualized tests are diagnostic and more universe-sensitive.

*** p < 0.01, ** p < 0.05, * p < 0.1.
