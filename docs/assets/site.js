(() => {
  const filterPanel = document.querySelector('[data-paper-filters]');
  if (!filterPanel) return;
  const search = document.getElementById('paper-search');
  const year = document.getElementById('paper-year');
  const rows = [...document.querySelectorAll('[data-publication]')];
  const empty = document.querySelector('[data-empty-state]');
  const result = document.querySelector('[data-filter-result]');
  const normalize = value => value.normalize('NFKC').toLocaleLowerCase().trim();
  function filter() {
    const terms = normalize(search.value).split(/\s+/).filter(Boolean);
    let visible = 0;
    rows.forEach(row => {
      const text = normalize(row.dataset.search || '');
      const matches = (!year.value || row.dataset.year === year.value) && terms.every(term => text.includes(term));
      row.hidden = !matches;
      if (matches) visible += 1;
    });
    empty.hidden = visible !== 0;
    result.textContent = terms.length || year.value ? `${visible} of ${rows.length} publications shown` : '';
  }
  filterPanel.hidden = false;
  search.addEventListener('input', filter);
  year.addEventListener('change', filter);
})();

