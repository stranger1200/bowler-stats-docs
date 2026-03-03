/**
 * Renders Bowler Stats commands from commands-data.js and provides search.
 * Search ranking: exact command name > keyword match > description match.
 */
(function () {
  var commands = window.BOWLER_COMMANDS || [];
  var container = document.getElementById('commands-container');
  var searchInput = document.getElementById('commands-search');
  if (!container) return;

  function getSearchScore(cmd, query) {
    if (!query || !query.trim()) return 0;
    var q = query.trim().toLowerCase().replace(/^\//, '');
    var name = cmd.name.toLowerCase();
    var desc = (cmd.description || '').toLowerCase();
    var keywords = (cmd.keywords || []).join(' ').toLowerCase();

    if (name === q) return 100;
    if (name.startsWith(q)) return 90;
    if (name.includes(q)) return 80;
    if (keywords.includes(q)) return 60;
    if (desc.includes(q)) return 30;
    return 0;
  }

  function filterAndSortCommands(query) {
    if (!query || !query.trim()) return commands;
    var q = query.trim();
    return commands
      .map(function (c) {
        return { cmd: c, score: getSearchScore(c, q) };
      })
      .filter(function (x) {
        return x.score > 0;
      })
      .sort(function (a, b) {
        return b.score - a.score;
      })
      .map(function (x) {
        return x.cmd;
      });
  }

  function groupByCategory(cmdList) {
    var groups = {};
    for (var i = 0; i < cmdList.length; i++) {
      var c = cmdList[i];
      var cat = c.category || 'Other';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(c);
    }
    return groups;
  }

  function renderCommands(cmdList) {
    var isSearch = cmdList.length !== commands.length || (searchInput && searchInput.value.trim());
    var grouped = isSearch ? { 'Results': cmdList } : groupByCategory(cmdList);
    var html = '';

    for (var cat in grouped) {
      var list = grouped[cat];
      if (list.length === 0) continue;
      html += '<section class="commands-section">';
      html += '<h2>' + escapeHtml(cat) + '</h2>';
      html += '<div class="command-cards">';
      for (var j = 0; j < list.length; j++) {
        var cmd = list[j];
        html += '<article class="command-card" data-command="' + escapeAttr(cmd.name) + '">';
        html += '<div class="command-card__name"><code>/' + escapeHtml(cmd.name) + '</code></div>';
        html += '<div class="command-card__desc">' + cmd.description + '</div>';
        html += '</article>';
      }
      html += '</div></section>';
    }

    if (cmdList.length === 0) {
      html = '<p class="commands-no-results">No commands match your search. Try a command name like <code>progress</code> or <code>profile</code>.</p>';
    }

    container.innerHTML = html;
  }

  function escapeHtml(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function escapeAttr(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function onSearch() {
    var q = searchInput ? searchInput.value : '';
    var filtered = filterAndSortCommands(q);
    if (!q.trim()) {
      filtered = commands;
    }
    renderCommands(filtered);
  }

  renderCommands(commands);

  if (searchInput) {
    searchInput.addEventListener('input', onSearch);
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        searchInput.value = '';
        onSearch();
        searchInput.blur();
      }
    });
  }
})();
