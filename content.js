setInterval(function () {
    let btn = document.getElementsByClassName("ytp-ad-skip-button ytp-button");
    if (btn.length > 0) {
        btn[0].click();
    }
}, 5000);