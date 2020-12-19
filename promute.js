var xPathEvaluator = $x

function debounce(func, wait = 100) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

mutePromoters = () => {
    xPathEvaluator()
        .forEach(promotedTweetMenuActivator => {
            promotedTweetMenuActivator.click();
            setTimeout(() => {
                let muteButton = xPathEvaluator('//*[@role="menuitem"]//span[starts-with(text(),"Mute")]')[0];
                console.log(muteButton.innerText);
                muteButton.click()
            }, 250)
        })
}

debouncedMutePromoters = debounce(mutePromoters, 1000)
document.addEventListener('scroll', debouncedMutePromoters)