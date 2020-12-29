const XPATH_PROMOTED_TWEET_MENU_ACTIVATORS = '//div[@role="group"]/following-sibling::div/../..//div[@data-testid="caret"]'
const XPATH_MUTE_BUTTON = '//div[@role="menu"]//div[@data-testid="block"]/preceding-sibling::div[@role="menuitem"][1]'

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
    let promotedTweetActivators = document.evaluate(XPATH_PROMOTED_TWEET_MENU_ACTIVATORS, document.body, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null)
    let activators = []
    if (promotedTweetActivators){
        let promotedTweetActivator = promotedTweetActivators.iterateNext();
        while(promotedTweetActivator) {
            activators.push(promotedTweetActivator)
            promotedTweetActivator = promotedTweetActivators.iterateNext();
        }
    }

    activators.forEach(promotedTweetMenuActivator => {
        promotedTweetMenuActivator.click();
        setTimeout(() => {
            let muteButton = document.evaluate(XPATH_MUTE_BUTTON, document.body, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            if(muteButton) {
                muteButton = muteButton.singleNodeValue
            }
            muteButton.click()
        }, 250)
    })
}

debouncedMutePromoters = debounce(mutePromoters, 1000)
document.addEventListener('scroll', debouncedMutePromoters)