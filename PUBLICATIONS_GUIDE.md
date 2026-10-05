# 添加与更新论文、会议和报告

网站主页：<https://larryhu0217.github.io/LarryHu0217/>

每个研究条目放在 `docs/_publications/`，每篇一个 Markdown 文件。保存到 `master` 后，现有 GitHub Pages 会自动生成主页列表和独立论文页。公开网站收录已发表论文、已录用论文和公开预印本。未录用的投稿、审稿中稿件和私人工作稿不加入此目录。

## 添加一篇论文

1. 选一个稳定英文短名，例如 `new-paper`，创建 `docs/_publications/new-paper.md`。
2. 填入下面的元数据；已有公开 PDF 时，可以上传到 `docs/publications/new-paper/manuscript.pdf`，或填写外部 `pdf_url`。没有公开稿件时只添加条目即可。
3. 保存到 `master`；在 README 的相应分类补一条独立论文页链接。

```yaml
---
title: "论文完整标题"
authors:
  - Liang Hu
  - 第二位作者
year: 2027
category: conference
sort_date: "2027-01-15"
venue: "会议完整名称"
status: accepted
status_label: "Accepted · Proceedings pending"
accepted_date: "2027-01-15"
version: Accepted conference paper
event_short: "会议简称 2027"
event_start: "2027-05-10"
event_end: "2027-05-12"
event_dates: "May 10–12, 2027"
event_dates_short: "May 10–12, 2027"
event_location: "城市、国家"
event_url: "https://example.org/conference/"
tags: [machine learning, finance]
summary: "一两句准确的研究简介。"
version_note: "已录用；论文集出版和 DOI 尚待补充。"
---
```

生成的论文页是 `https://larryhu0217.github.io/LarryHu0217/publications/new-paper/`。主页自动支持标题、作者、主题、会议搜索，以及年份和类型筛选。

## 分类与状态

| 字段 | 值 | 用法 |
| --- | --- | --- |
| `category` | `journal` | 已发表或已录用期刊论文 |
| `category` | `conference` | 已发表或已录用会议论文 |
| `category` | `preprint` | 公开预印本 |
| `status` | `published` | 已核实正式出版记录 |
| `status` | `accepted` | 已有录用通知，可先加入网站；尚未出版时注明 Proceedings pending |
| `status` | `preprint` | 预印本，单独标明版本 |

已录用会议条目填写 `event_start`、`event_end` 等字段后，会在会议结束日期之前自动出现在 Upcoming 中。会议结束后，论文仍保留在 Conference papers。报告日期和论文出版状态是不同信息：会议举行并不自动意味着论文集已出版。

## 其他可选字段

| 字段 | 用法 |
| --- | --- |
| `venue_key` | 对应 `docs/_data/venues.yml` 中的期刊或会议；复用其完整名称、排名与来源 |
| `publication_details` | 卷、期、页码、文章编号，或已核实的论文轨道 |
| `pdf` | 本站 PDF 路径，例如 `/publications/new-paper/manuscript.pdf` |
| `pdf_url` / `pdf_label` | 外部公开 PDF 地址 / 按钮文字 |
| `doi` | DOI 编号，不加 `https://doi.org/` |
| `publisher_url` | 正式出版页面 |
| `preprint_url` / `earlier_preprint` | 预印本地址；属于较早版本时将后一字段设为 `true` |
| `code_url` | 代码仓库或复现材料 |
| `abstract` | 可公开的正式摘要；没有时页面使用 `summary` 作为研究简介 |
| `license` / `license_url` | 这一具体稿件版本的许可和许可链接 |
| `bibtex` | 用 YAML 多行字符串 `|` 填入引用；主页会显示 Cite 按钮 |
| `authors_display` | 作者信息尚未齐全时，明确显示待确认说明；确认后换成正式 `authors` 列表 |

同一研究的预印本和正式发表版本通常保留在同一条目，注明版本和旧标题即可；不同论文使用各自独立条目。标题、作者顺序、DOI 和状态以论文或正式通知为准。

## 维护期刊指标与会议背景

期刊和会议资料统一放在 `docs/_data/venues.yml`。论文元数据填写 `venue_key` 后，主页和独立页自动显示该期刊或会议的信息。已有 key 包括 `finance_research_letters`、`ieee_access`、`decision_analytics_journal`、`ictai`、`cic`、`isaia`、`icaisf`、`conf_seml` 和 `arxiv`。

添加新期刊时，只录入已在官方出版商、SCImago 或评价机构确认的指标：

```yaml
example_journal:
  name: "期刊完整名称"
  url: "https://example.org/journal/"
  method_note: "分区所属分类和评价体系；需要时补充指标的口径。"
  metrics:
    - label: SJR
      value: Q1
      year: 2026
      kind: quartile
      detail: "此处写核实的 SCImago 学科分类。"
      source_label: "SCImago · 期刊名"
      source_url: "https://example.org/verified-source/"
```

示例中的数字和 URL 是占位符，核实后再使用。排名与引用指标是期刊或会议层面的信息，不是单篇论文的评级。SJR Q1 不写成 JCR Q1 或中科院一区。引用指标必须注明数据年份；官方可读页面没有年份时，用 `year_label: publisher display`，在 `detail` 中写明查询日期。核实更新后，同步模板中的来源查询日期和 README。

会议没有可核实的 CCF/ICORE 排名时，直接使用完整会议名称、届数、IEEE 等正式标识、轨道和录用状态。联合举办信息使用 `joint_event.conferences`，逐个填写名称、届数和官网；它是会议背景，不增加论文数量或录用记录。CIC 2026 已配置四个同期 IEEE 会议。

头像文件是 `docs/assets/liang-hu.jpg`，来自已确认的 LinkedIn 公开帖子作者头像：<https://www.linkedin.com/posts/liang-hu_nyc-barclays-activity-7088895539043254272-pMVY>。更换时使用本人提供或已核实的原图，保留此文件名即可同时更新网站与 README。

## 添加报告或演讲

在 `docs/_data/talks.yml` 追加：

```yaml
- title: "报告标题"
  presenter: Liang Hu
  event: "会议名称"
  short_event: "简短会议名称"
  date: "2027-05-10"
  location: Online
  status_label: Scheduled presentation
  time_label: "10:00–10:30 EDT"
  note: "报告形式或可公开的补充说明。"
  event_url: "https://example.org/conference/"
```

报告出现在 Talks & presentations；未到日期的报告也会出现在 Upcoming。日期过去后，确认完成情况再将状态改为 Presented。报告、演讲和正式论文分别记录。

## 保持已发送链接有效

FRL 论文的以下地址继续使用，更新样式或增加新论文时不要改名：

- 论文页：`/publications/diversified-but-crowded/`
- PDF：`/publications/diversified-but-crowded/accepted-manuscript.pdf`
- 原 PDF 兼容地址：`/Diversified_but_Crowded_Accepted_Manuscript.pdf`
- 原手稿页入口：`/manuscript.html`

将来更新 FRL 作者稿时，两个 PDF 路径保持一致，并在 Markdown 中注明新版本和日期。不要覆盖作者稿为不同论文；正式出版 DOI 可以直接添加到原条目。

以后可以把论文标题、作者顺序、期刊或会议、当前状态、PDF、DOI 和报告时间发给助手，要求“加到我的 GitHub 学术主页并同步 README”。新论文的独立页和列表由现有结构自动生成。
