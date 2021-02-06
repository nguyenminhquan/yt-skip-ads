setInterval(function () {
    let btn = document.querySelectorAll(".ytp-ad-skip-button.ytp-button, .ytp-ad-overlay-close-button");
    if (btn.length > 0) {
        btn[0].click();
    }
}, 5000);