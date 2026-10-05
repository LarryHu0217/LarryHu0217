(() => {
  const expandCitation = () => {
    const citation = document.getElementById('citation');
    if (citation && window.location.hash === '#citation') citation.open = true;
  };
  expandCitation();
  window.addEventListener('hashchange', expandCitation);
  const filterPanel = document.querySelector('[data-paper-filters]');
  if (!filterPanel) return;
  const search = document.getElementById('paper-search');
  const year = document.getElementById('paper-year');
  const category = document.getElementById('paper-category');
  const rows = [...document.querySelectorAll('[data-publication]')];
  const groups = [...document.querySelectorAll('[data-publication-group]')];
  const empty = document.querySelector('[data-empty-state]');
  const result = document.querySelector('[data-filter-result]');
  const normalize = value => value.normalize('NFKC').toLocaleLowerCase().trim();
  function filter() {
    const terms = normalize(search.value).split(/\s+/).filter(Boolean);
    let visible = 0;
    rows.forEach(row => {
      const text = normalize(row.dataset.search || '');
      const matches = (!year.value || row.dataset.year === year.value)
        && (!category.value || row.dataset.category === category.value)
        && terms.every(term => text.includes(term));
      row.hidden = !matches;
      if (matches) visible += 1;
    });
    groups.forEach(group => {
      group.hidden = ![...group.querySelectorAll('[data-publication]')].some(row => !row.hidden);
    });
    empty.hidden = visible !== 0;
    result.textContent = terms.length || year.value || category.value ? `${visible} of ${rows.length} research records shown` : '';
  }
  filterPanel.hidden = false;
  search.addEventListener('input', filter);
  year.addEventListener('change', filter);
  category.addEventListener('change', filter);
  filter();
})();
