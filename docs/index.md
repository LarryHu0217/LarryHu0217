---
layout: default
title: Publications
---
<section class="hero">
  <p class="eyebrow">Liang Hu · Research collection</p>
  <h1>Research,<br>in the open.</h1>
  <p class="hero-description">Publications, author manuscripts, and research materials across machine learning, finance, and data systems.</p>
  <p class="hero-note">Computer science at Columbia University</p>
</section>

{% assign papers = site.publications | sort: 'sort_date' | reverse %}
<section id="publications" class="publications-section" aria-labelledby="publications-title">
  <div class="section-heading"><h2 id="publications-title">Publications <span class="collection-count">{{ papers.size }}</span></h2><span class="section-note">Most recent first</span></div>
  <div class="filters" hidden data-paper-filters>
    <label class="search-label">Search publications<input type="search" id="paper-search" placeholder="Search title, author, or topic" autocomplete="off"></label>
    <label class="year-label">Year<select id="paper-year"><option value="">All years</option>{% assign years = papers | map: 'year' | uniq | sort | reverse %}{% for year in years %}<option value="{{ year }}">{{ year }}</option>{% endfor %}</select></label>
  </div>
  <div class="publication-list">
    {% for paper in papers %}
    <article class="publication-row" data-publication data-year="{{ paper.year }}" data-search="{{ paper.title | append: ' ' | append: paper.venue | append: ' ' | escape }} {{ paper.authors | join: ' ' | escape }} {{ paper.tags | join: ' ' | escape }}">
      <div class="publication-year">{{ paper.year }}</div>
      <div class="publication-content"><div class="publication-topline"><span class="venue">{{ paper.venue | escape }}</span><span class="status status-{{ paper.status | escape }}">{{ paper.status_label | default: paper.status | capitalize | escape }}</span></div>
        <h3><a href="{{ paper.url | relative_url }}">{{ paper.title | escape }}</a></h3>
        <p class="authors">{{ paper.authors | join: ', ' | escape }}</p>
        <p class="publication-summary">{{ paper.summary | escape }}</p>
        <div class="publication-links"><a href="{{ paper.url | relative_url }}">Paper details <span aria-hidden="true">→</span></a>{% if paper.pdf %}<a href="{{ paper.pdf | relative_url }}">{{ paper.version | default: 'Manuscript' | escape }} PDF ↗</a>{% endif %}{% if paper.doi %}<a href="https://doi.org/{{ paper.doi | escape }}">DOI ↗</a>{% endif %}{% if paper.code_url %}<a href="{{ paper.code_url | escape }}">Code ↗</a>{% endif %}</div>
      </div>
    </article>
    {% endfor %}
  </div>
  <p class="empty-state" hidden data-empty-state>No publications match this search. Try another title, topic, or year.</p>
  <p class="filter-result" aria-live="polite" data-filter-result></p>
</section>

