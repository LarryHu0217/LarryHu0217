# 添加与更新论文

网站主页：<https://larryhu0217.github.io/LarryHu0217/>

论文目录：`docs/_publications/`。每篇论文是一个 Markdown 文件，PDF 放在 `docs/publications/<论文短名>/`。保存到 `master` 后，现有 GitHub Pages 会自动更新。

## 添加一篇新论文

1. 给论文选一个稳定英文短名，例如 `mortgage-risk`。
2. 上传 PDF 到 `docs/publications/mortgage-risk/manuscript.pdf`。
3. 创建 `docs/_publications/mortgage-risk.md`，填写下面模板。这样主页和独立论文页面都会自动生成。

```yaml
---
title: "论文完整标题"
authors:
  - Liang Hu
  - 第二位作者
year: 2027
sort_date: "2027-01-15"
venue: "期刊或会议名称"
status: preprint
status_label: Preprint
version: Preprint
pdf: /publications/mortgage-risk/manuscript.pdf
tags: [machine learning, finance]
summary: "一两句准确的研究简介。"
abstract: >-
  粘贴正式摘要。
version_note: "说明当前公开版本和日期。"
---

可选的补充说明、研究材料或链接。
```

生成的论文页是 `https://larryhu0217.github.io/LarryHu0217/publications/mortgage-risk/`。主页自动列出论文，并支持标题、作者、主题关键词搜索和年份筛选。

## 常用字段

| 字段 | 用法 |
| --- | --- |
| `status` | `preprint`、`accepted` 或 `published` |
| `status_label` | 显示给读者的文字，例如 `Accepted` |
| `accepted_date` | 可选，日期格式 `2026-10-05` |
| `version` | PDF 链接旁的版本名称，例如 `Author manuscript` |
| `doi` | 可选，只写 DOI 编号，不加 `https://doi.org/` |
| `preprint_url` | 可选，arXiv 等预印本链接 |
| `code_url` | 可选，代码仓库链接 |
| `license` / `license_url` | 可选，这一具体版本的许可文字和链接 |
| `bibtex` | 可选，用 YAML 多行字符串 `|` 填入引用 |

## 更新已有论文

替换同一个 PDF 路径，并更新该论文 Markdown 中的版本、日期、摘要、状态和 DOI。保持论文短名稳定，已有的论文页面链接就会继续可用。

`Diversified but Crowded` 的主页入口在 `docs/_publications/diversified-but-crowded.md`，PDF 在 `docs/publications/diversified-but-crowded/accepted-manuscript.pdf`。原来的 `docs/Diversified_but_Crowded_Accepted_Manuscript.pdf` 是同一内容的兼容路径；更新这篇时，两份 PDF 应同时替换。

以后也可以直接把论文 PDF、标题、作者、期刊/会议、版本和 DOI 发给助手，要求“加到我的 GitHub Publications 主页”。
