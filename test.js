const XPATH_PROMOTED_TWEET_MENU_ACTIVATORS = '//span[text()="Promoted"]/../../../..//div[@data-testid="caret"]'
const XPATH_MUTE_BUTTON = '//*[@role="menuitem"]//span[starts-with(text(),"Mute")]'

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
            console.log('foo')
    let promotedTweetActivators = document.evaluate(XPATH_PROMOTED_TWEET_MENU_ACTIVATORS, document.body, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null)
    if (promotedTweetActivators){
        var promotedTweetActivator = promotedTweetActivators.iterateNext();
        while(promotedTweetActivator) {
            console.log('bar')
            promotedTweetActivator.click();
            setTimeout(() => {
                let muteButton = document.evaluate(XPATH_MUTE_BUTTON,document.body, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null)[0];
                console.log(muteButton.innerText);
                muteButton.click()
            }, 250)
            promotedTweetActivator = promotedTweetActivators.iterateNext();
        }
    }
}

debouncedMutePromoters = debounce(mutePromoters, 1000)
document.addEventListener('scroll', debouncedMutePromoters)