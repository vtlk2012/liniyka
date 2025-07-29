function writeSize() {
    const rulerHor = document.querySelector('.ruler--horizontal .size');
    const rulerVer = document.querySelector('.ruler--vertical .size');
    const redLines = document.querySelector('.red-lines');

    if (!rulerHor || !rulerVer || !redLines) {
        return;
    }

    const width = redLines.clientWidth;
    const height = redLines.clientHeight;

    rulerHor.innerHTML = String(width);
    rulerVer.innerHTML = String(height);
}

function clickThrough() {
    const el = document.getElementById('clickThroughElement');

    if (!el) { return; }

    el.addEventListener('mouseenter', window.electronAPI.setIgnoreMouseEventsTrue);

    el.addEventListener('mouseleave', window.electronAPI.setIgnoreMouseEventsFalse);
}

window.addEventListener('resize', writeSize);

window.addEventListener('DOMContentLoaded', () => {
    writeSize();

    clickThrough();
});
