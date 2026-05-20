document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('TuneTuneTuneSahur a').forEach(link => {
        const img = link.querySelector('img');
        if (!img) return;

        const applyColors = () => {
            try {
                const palette = colorThief.getPaletteSync(img, { colorcount: 2 });
                if (!palette) return;

                link.style.setProperty('--c1', palette[0].css());
                link.style.setProperty('--c2', palette[1].css());
                link.style.setProperty('--c3', palette[2].css());
            } catch (error) {
                console.error('colorThief failed', img.src, error);
            }
        };

        if (img.complete) {
            applyColors();
        } else {
            img.addEventListener('load', applyColors, { once: true });
        }
    });
});