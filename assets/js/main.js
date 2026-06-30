/* main.js */

function scaleNewspaper() {
    var np = document.querySelector('.newspaper');
    if (!np) return;

    var fixedWidth = 600;
    var minScale = 0.85;
    var scaleStart = 640; /* αρχίζει να κάνει scale από εδώ */
    var vw = window.innerWidth;

    if (vw < scaleStart) {
        /* linear: 1.0 στα 640px → ~0.85 στα 400px */
        var scale = minScale + (1 - minScale) * ((vw - 380) / (scaleStart - 380));
        scale = Math.max(minScale, Math.min(1, scale));
        np.style.transform = 'scale(' + scale + ')';
        np.style.marginTop = '20px';
        var h = np.offsetHeight * scale;
        np.style.marginBottom = -(np.offsetHeight - h) + 'px';
    } else {
        np.style.transform = '';
        np.style.marginTop = '50px';
        np.style.marginBottom = '';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    scaleNewspaper();
    window.addEventListener('resize', scaleNewspaper);

    // Κλείσιμο modal
    var overlay = document.getElementById('modal');
    if (!overlay) return;
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) window.location.href = 'index.php';
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') window.location.href = 'index.php';
    });
});