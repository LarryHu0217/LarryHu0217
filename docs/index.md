---
layout: default
title: Research
---
<section id="about" class="intro" aria-labelledby="about-title">
  <p class="eyebrow">Research &amp; engineering</p>
  <h1 id="about-title">Liang Hu</h1>
  <p class="intro-lead">I work on applied machine learning, financial technology, and reliable data systems.</p>
  <p>My research spans financial NLP and time series, institutional portfolio structure, the visibility of online information, and mission-critical voice experiments. I also contribute to open-source infrastructure, observability, and API tooling.</p>
  <p class="intro-links"><a href="https://scholar.google.com/citations?user=2ddJaI4AAAAJ">Google Scholar ↗</a><a href="https://github.com/LarryHu0217#open-source-highlights">Open-source work ↗</a><a href="mailto:lh3057@columbia.edu">Get in touch →</a></p>
</section>

{% assign published = site.publications | where: 'status', 'published' %}
{% assign accepted = site.publications | where: 'status', 'accepted' %}
{% assign preprints = site.publications | where: 'status', 'preprint' %}
{% assign papers = published | concat: accepted | concat: preprints | sort: 'sort_date' | reverse %}
{% assign today = site.time | date: '%Y-%m-%d' %}
{% assign conference_papers = papers | where: 'category', 'conference' | sort: 'event_start' %}
{% assign talks = site.data.talks | sort: 'date' %}
<section id="upcoming" class="upcoming-section" aria-labelledby="upcoming-title">
  <h2 id="upcoming-title">Upcoming conferences &amp; talks</h2>
  <ul class="event-list">
    {% for talk in talks %}{% if talk.date >= today %}<li><span class="event-date">{{ talk.date | date: '%b %-d, %Y' }}</span><div><a href="#talks">{{ talk.short_event | escape }}</a><span class="event-context">Scheduled talk · {{ talk.location | escape }}</span></div></li>{% endif %}{% endfor %}
    {% for paper in conference_papers %}{% if paper.event_end >= today %}{% if paper.status == 'accepted' %}<li><span class="event-date">{{ paper.event_dates_short | escape }}</span><div><a href="{{ paper.url | relative_url }}">{{ paper.event_short | escape }}</a><span class="event-context">Accepted paper · {{ paper.event_location | escape }}</span>{% assign event_venue = site.data.venues[paper.venue_key] %}{% if event_venue.joint_event %}<span class="event-joint">Joint IEEE event · CIC / CogMI / TPS / RISC</span>{% endif %}</div></li>{% endif %}{% endif %}{% endfor %}
  </ul>
</section>

<section id="publications" class="publications-section" aria-labelledby="publications-title">
  <div class="section-heading"><h2 id="publications-title">Publications &amp; research</h2><span class="collection-count">{{ papers.size }} research records</span></div>
  <p class="section-note">Published articles, accepted papers, and public preprints. Venue rankings and citation metrics link to their sources.</p>
  <div class="filters" hidden data-paper-filters>
    <label class="search-label">Search<input type="search" id="paper-search" placeholder="Title, topic, venue, or ranking" autocomplete="off"></label>
    <label>Year<select id="paper-year"><option value="">All years</option>{% assign years = papers | map: 'year' | uniq | sort | reverse %}{% for year in years %}<option value="{{ year }}">{{ year }}</option>{% endfor %}</select></label>
    <label>Type<select id="paper-category"><option value="">All types</option>{% for group in site.data.publication_groups %}<option value="{{ group.id }}">{{ group.title | escape }}</option>{% endfor %}</select></label>
  </div>
  {% for group in site.data.publication_groups %}
  {% assign group_papers = papers | where: 'category', group.id %}
  {% if group_papers.size > 0 %}
  <section id="{{ group.id }}" class="publication-group" data-publication-group aria-labelledby="{{ group.id }}-title">
    <h3 id="{{ group.id }}-title" class="group-title">{{ group.title | escape }} <span>{{ group_papers.size }}</span></h3>
    {% if group.note %}<p class="group-note">{{ group.note | escape }}</p>{% endif %}
    {% for paper in group_papers %}
    {% assign venue = site.data.venues[paper.venue_key] %}
    <article class="publication-row" data-publication data-year="{{ paper.year }}" data-category="{{ paper.category }}" data-search="{{ paper.title | escape }} {{ paper.venue | escape }} {{ paper.authors | join: ' ' | escape }} {{ paper.authors_display | escape }} {{ paper.tags | join: ' ' | escape }} {{ paper.status_label | escape }} {{ venue.name | escape }} {% for metric in venue.metrics %}{{ metric.label | escape }} {{ metric.value | escape }} {% endfor %}{% if venue.joint_event %}CIC CogMI TPS RISC{% endif %}">
      <span class="publication-year">{{ paper.year }}</span>
      <div class="publication-content">
        <h4><a href="{{ paper.url | relative_url }}">{{ paper.title | escape }}</a></h4>
        <p class="authors">{% if paper.authors_display %}{{ paper.authors_display | escape }}{% else %}{% for author in paper.authors %}{% if author == 'Liang Hu' %}<strong>{{ author | escape }}</strong>{% else %}{{ author | escape }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}{% endif %}</p>
        <p class="publication-venue">{{ venue.name | default: paper.venue | escape }}{% if paper.publication_details %} · {{ paper.publication_details | escape }}{% endif %}</p>
        {% include venue_badges.html venue=venue %}
        {% if venue.joint_event %}<p class="conference-context"><a href="{{ paper.url | relative_url }}#joint-conferences"><strong>Joint IEEE conference event</strong> · CIC · CogMI · TPS · RISC ↗</a></p>{% endif %}
        <div class="publication-topline"><span class="status status-{{ paper.status | escape }}">{{ paper.status_label | default: paper.status | capitalize | escape }}</span>{% if paper.event_dates %}<span class="publication-event">{{ paper.event_dates | escape }} · {{ paper.event_location | escape }}</span>{% endif %}</div>
        <p class="publication-summary">{{ paper.summary | escape }}</p>
        <div class="publication-links"><a href="{{ paper.url | relative_url }}">Details →</a>{% if paper.pdf %}<a href="{{ paper.pdf | relative_url }}">{{ paper.pdf_label | default: 'Author manuscript PDF' | escape }} ↗</a>{% endif %}{% if paper.pdf_url %}<a href="{{ paper.pdf_url | escape }}">{{ paper.pdf_label | default: 'PDF' | escape }} ↗</a>{% endif %}{% if paper.doi %}<a href="https://doi.org/{{ paper.doi | escape }}">DOI ↗</a>{% endif %}{% if paper.preprint_url %}<a href="{{ paper.preprint_url | escape }}">{% if paper.earlier_preprint %}Earlier preprint{% else %}Preprint{% endif %} ↗</a>{% endif %}{% if paper.event_url %}<a href="{{ paper.event_url | escape }}">Conference ↗</a>{% endif %}{% if paper.code_url %}<a href="{{ paper.code_url | escape }}">Code ↗</a>{% endif %}{% if paper.bibtex %}<a href="{{ paper.url | relative_url }}#citation">Cite</a>{% endif %}</div>
      </div>
    </article>
    {% endfor %}
  </section>
  {% endif %}{% endfor %}
  <details id="venue-metrics" class="ranking-legend"><summary>About venue rankings &amp; citation metrics</summary><p>SJR quartiles use SCImago subject categories and are distinct from JCR quartiles. CCF and ICORE classify conference venues. Labels identify the dataset year; “publisher display” marks a current publisher value whose metric year is not stated. These are venue-level measures, separate from a paper’s acceptance or publication status.</p><p>Sources checked October 5, 2026. Each paper page provides metric details and source links.</p></details>
  <p class="empty-state" hidden data-empty-state>No records match this search. Try another title, topic, or year.</p>
  <p class="filter-result" aria-live="polite" data-filter-result></p>
</section>

<section id="talks" class="talks-section" aria-labelledby="talks-title">
  <h2 id="talks-title">Talks &amp; presentations</h2>
  {% for talk in talks %}<article class="talk-row"><p class="eyebrow">{{ talk.date | date: '%B %-d, %Y' }} · {{ talk.location | escape }}</p><h3>{{ talk.title | escape }}</h3><p>{{ talk.presenter | escape }} · {{ talk.event | escape }}</p><p><span class="status status-scheduled">{{ talk.status_label | escape }}</span>{% if talk.time_label %}<span class="talk-time">{{ talk.time_label | escape }}</span>{% endif %}</p><p class="talk-note">{{ talk.note | escape }}</p>{% if talk.event_url %}<a href="{{ talk.event_url | escape }}">Conference website ↗</a>{% endif %}</article>{% endfor %}
</section>
