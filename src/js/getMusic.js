async function getSong(lasturl) {
    const artElem = document.getElementById('songArt');
    const nameElem = document.getElementById('songName');
    const artistElem = document.getElementById('songArtist');
    const timeElem = document.getElementById('songTime');
    const songBox = document.getElementById('songBox');

    const url = 'https://tunetunetunesahur.zxrkcr.workers.dev/';

    let data = await fetch(url)

    .then((res) => {
        if (res.status == 429) return false;
        else return res.json();
    })
    .then((json) => {
        if (!json) return false;
        return json;
    });

    if (data != false) {
        if (data.url != lasturl) {
            nameElem.innerHTML = '';
            artistElem.innerHTML = '';
            artElem.src = data.image[3]['#text'] || data.image[2]['#text'];
            songBox.href = data.url;

            scrollText(data.name, 15, nameElem);
            scrollText(data.artist['#text'], 15, artistElem);

            if (data['@attr'] && data['@attr'].nowplaying === 'true') {
                timeElem.innerHTML = 'Now listening!';
            } else if (data.date && data.date.uts) {
                timeElem.innerHTML = timeAgo(parseInt(data.date.uts));
            } else {
                timeElem.innerHTML = '';
            }
            
            // Music Player //
            const audio = document.getElementById('audio-player');
            const audioStatus = document.getElementById('audio-status');

            audio.removeAttribute('src');
            audio.controls = false;
            audio.style.display = 'block';
            audioStatus.innerHTML = 'loading track...';

            try {
                const artistName = data.artist['#text'];
                const songName = data.name;
                const audioRes = await fetch(
                    '/api/audio?q=' + encodeURIComponent(artistName + ' ' + songName)
                );
                const audioData = await audioRes.json();

                if (audioData.url) {
                    audio.src = audioData.url;
                    audio.load();

                    audio.addEventListener('canplay', () => {
                        audio.controls = true;
                        audioStatus.innerHTML = '';
                    }, { once: true });

                    audio.addEventListener('error', () => {
                        audio.controls = false;
                        audio.style.display = 'none';
                        audioStatus.innerHTML = 'track unavailable';
                    }, { once: true });
                } else {
                    audio.controls = false;
                    audio.style.display = 'none';
                    audioStatus.innerHTML = audioData.error || 'track unavailable';
                }
            } catch (error) {
                console.error('audio failed', error);
                audio.controls = false;
                audio.style.display = 'none';
                audioStatus.innerHTML = 'audio failed';
            }

            lasturl = data.url;
        }

        setTimeout(() => getSong(lasturl), 10000);
    } else {
        console.log('rate limited, retrying...');
        setTimeout(() => getSong(lasturl), 10000);
    }
}


function timeAgo(uts) {
    let diff = Date.now() - (uts * 1000);
    let seconds = Math.floor(diff / 1000);
    if (seconds < 60) return seconds + 's ago';
    let mins = Math.floor(seconds / 60);
    if (mins < 60) return mins + 'm ago';
    let hours = Math.floor(mins / 60);
    if (hours < 24) return hours + 'h ago';
    return Math.floor(hours / 24) + 'd ago';
}


function scrollText(string, length, parent) {
    if (string.length >= length)  {
        let mq = document.createElement('marquee');
        mq.innerHTML = string;
        mq.scrollAmount = 3;
        parent.appendChild(mq);
    } else {
        parent.innerHTML = string;
    }
}

getSong("")