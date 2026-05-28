async function getStatus() {
    const res = await fetch('/src/data/status.json');
    const data = await res.json();
    const current = data[0];

    document.getElementById('stat-message').textContent = current.status;
    document.getElementById('stat-date').textContent = 'last updated: ' + current.updated;
}


async function loadStatus() {
    const res = await fetch('/src/data/status.json');
    const data = await res.json();
    const list = document.getElementById('stat-list')

    if(!list) return;
    data.forEach(entry => {
        list.innerHTML += `
            <div style="border-bottom: 1px solid #333; padding: 12px 0;">
                <p style="margin:0;">${entry.status}</p>
                <small style="color: gray;">last updated: ${entry.updated}</small>
            </div>`;
    });
}

getStatus();
loadStatus();