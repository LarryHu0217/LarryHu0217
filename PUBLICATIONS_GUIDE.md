# 添加与更新论文、会议和报告

网站主页：<https://larryhu0217.github.io/LarryHu0217/>

每个研究条目放在 `docs/_publications/`，每篇一个 Markdown 文件。保存到 `master` 后，现有 GitHub Pages 会自动生成主页列表和独立论文页。期刊论文、会议论文、预印本和研究中稿件共用这个结构。

## 添加一篇论文

1. 选一个稳定英文短名，例如 `mortgage-risk`，创建 `docs/_publications/mortgage-risk.md`。
2. 填入下面的元数据；已有公开 PDF 时，可以上传到 `docs/publications/mortgage-risk/manuscript.pdf`，或填写外部 `pdf_url`。没有公开稿件时只添加条目即可。
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

生成的论文页是 `https://larryhu0217.github.io/LarryHu0217/publications/mortgage-risk/`。主页自动支持标题、作者、主题、会议搜索，以及年份和类型筛选。

## 分类与状态

| 字段 | 值 | 用法 |
| --- | --- | --- |
| `category` | `journal` | 已发表或已录用期刊论文 |
| `category` | `conference` | 已发表或已录用会议论文 |
| `category` | `preprint` | 公开预印本 |
| `category` | `working` | 研究中、已投稿或审稿中的稿件 |
| `status` | `published` | 已核实正式出版记录 |
| `status` | `accepted` | 已有录用通知，可先加入网站；尚未出版时注明 Proceedings pending |
| `status` | `preprint` | 预印本，单独标明版本 |
| `status` | `under-review` | 已核实仍在审稿中 |
| `status` | `submitted` | 已确认投稿，尚无录用结果 |
| `status` | `working` | 工作稿；不代表录用或出版 |

已录用会议条目填写 `event_start`、`event_end` 等字段后，会在会议结束日期之前自动出现在 Upcoming 中。会议结束后，论文仍保留在 Conference papers。报告日期和论文出版状态是不同信息：会议举行并不自动意味着论文集已出版。

## 其他可选字段

| 字段 | 用法 |
| --- | --- |
| `publication_details` | 卷、期、页码或文章编号 |
| `pdf` | 本站 PDF 路径，例如 `/publications/mortgage-risk/manuscript.pdf` |
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
