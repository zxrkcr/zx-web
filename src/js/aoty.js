async function getAOTY() {
    try {
        const response = await fetch('/src/data/aoty.json');
        if (!response.ok) return;
        const aotyData = await response.json();
        const profile = aotyData.profile;
        const stats = aotyData.stats;
        const latestReview = aotyData.latest;
        const albumElement = document.getElementById('album');
        const artistElement = document.getElementById('artist');

        if (profile && profile.avatar) {
            document.getElementById('aoty-pfp').src = profile.avatar;
        }

        if (stats) {
            document.getElementById('aoty-ratings').textContent = `${stats.reviews} reviews | ${stats.ratings} ratings | ${stats.followers} followers`;
        }
        if (!latestReview) return; 

        document.getElementById('cover').src = latestReview.cover
        document.getElementById('aoty').href = latestReview.url || 'https://www.albumoftheyear.org/user/zxrkcr/reviews/';
        document.getElementById('score') .textContent = latestReview.rating || '';
        document.getElementById('reviews').innerHTML = (latestReview.review || '').replace(/\\n|\n/g, '<br>'); 

        albumElement.textContent = latestReview.album || '';
        artistElement.textContent = latestReview.artist ||  '';
        } catch (error) {
            console.log('aoty failed', error); 
        }
}

getAOTY();