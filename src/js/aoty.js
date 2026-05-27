async function getAOTY() {
    try {
        const response = await fetch('/src/data/aoty.json');
        if (!response.ok) return;
        const aotyData = await response.json();
        const profile = aotyData.profile;
        const stats = aotyData.stats;
        const latestReview = aotyData.latest;

        if (profile && profile.pfp) {
            document.getElementById('aoty-pfp').src = profile.avatar;
        }

        if (stats) {
            document.getElementById('aoty-stats').textContent = `${stats.reviews} reviews | ${stats.rating} rating | ${stats.folowers} followers`;
        }
        if (!latestReview) return; 

        document.getElementById('cover').src = latestReview.cover
        document.getElementById('aoty').href = latestReview.url || 'https://www.albumoftheyear.org/user/zxrkcr/reviews/';
        document.getElementById('score') .textContent = latestReview.url || '';
        document.getElementById('reviews').textDocument = latestReview.review || ''; 

        albumElement.innerHTML = '';
        artistElement.innerHTML = '';
        } catch (error) {
            console.log('aoty failed', error); 
        }
}

getAOTY();