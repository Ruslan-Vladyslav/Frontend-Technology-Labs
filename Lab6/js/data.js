const btn = document.getElementById('btn');
const result = document.getElementById('result');
const clearBtn = document.getElementById('clearBtn');

btn.addEventListener('click', () => {
  result.className = "loading";
  result.innerHTML = 'Loading...';

  fetch('https://randomuser.me/api/?results=5')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      if (!data || !data.results || data.results.length === 0) {
        throw new Error('No user data returned');
      }

      let html = `<p style="color: green; font-weight: bold; font-size: 25px;">Success</p>`;
      html += `<div class="users">`;

      data.results.forEach((user) => {
        const picture = user.picture?.large || '';
        const cell = user.cell || '';
        const country = user.location?.country || '';
        const email = user.email || '';
        const coords = user.location?.coordinates
          ? `lat=${user.location.coordinates.latitude}, lon=${user.location.coordinates.longitude}`
          : '';

        html += `
          <div class="user-card">
            <img src="${escapeHtml(picture)}" alt="avatar" />
            <ul style="list-style:none; padding:0; margin:0;">
              <li><b>1.</b> picture ↑</li>
              <li><b>3.</b> cell: ${escapeHtml(cell)}</li>
              <li><b>5.</b> country: ${escapeHtml(country)}</li>
              <li><b>7.</b> email: ${escapeHtml(email)}</li>
              <li><b>9.</b> coordinates: <span class="coords">${escapeHtml(coords)}</span></li>
            </ul>
          </div>
        `;
      });

      html += `</div>`;

      result.className = "";
      result.innerHTML = html;
    })
    .catch(err => {
      result.innerHTML = `<p style="color:red;">Error: ${escapeHtml(err.message)}</p>`;
      console.error(err);
    });
});

clearBtn.addEventListener('click', () => {
  result.innerHTML = '';
});

function escapeHtml(str) {
  if (!str && str !== 0) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
