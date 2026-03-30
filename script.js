const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('#site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const year = document.querySelector('#year');
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const maps = [
  {
    name: 'Byzantine Thessaloniki (Google My Maps)',
    embedUrl: 'https://www.google.com/maps/d/embed?mid=1T3fQcPUZY3dlTmFR_hFKEMNJ0gw',
    sourceUrl: 'https://www.google.com/maps/d/viewer?mid=1T3fQcPUZY3dlTmFR_hFKEMNJ0gw',
  },
  {
    name: 'Byzantine Constantinople (Istanbul)',
    embedUrl: 'https://www.google.com/maps?q=41.0082,28.9784&z=12&output=embed',
    sourceUrl: 'https://www.google.com/maps?q=41.0082,28.9784&z=12',
  },
  {
    name: 'Byzantine Ephesus (Selçuk)',
    embedUrl: 'https://www.google.com/maps?q=37.9497,27.3639&z=13&output=embed',
    sourceUrl: 'https://www.google.com/maps?q=37.9497,27.3639&z=13',
  },
];

const mapPicker = document.querySelector('#map-picker');
const mapEmbed = document.querySelector('#map-embed');
const mapSource = document.querySelector('#map-source');

if (mapPicker && mapEmbed && mapSource) {
  maps.forEach((map, index) => {
    const option = document.createElement('option');
    option.value = String(index);
    option.textContent = map.name;
    mapPicker.append(option);
  });

  const renderMap = (index) => {
    const selectedMap = maps[index];
    if (!selectedMap) {
      return;
    }

    mapEmbed.src = selectedMap.embedUrl;
    mapEmbed.title = selectedMap.name;
    mapSource.innerHTML = `Source: <a href="${selectedMap.sourceUrl}" target="_blank" rel="noopener noreferrer">open map in a new tab</a>`;
  };

  mapPicker.addEventListener('change', (event) => {
    const selectedIndex = Number(event.target.value);
    renderMap(selectedIndex);
  });

  renderMap(0);
}
