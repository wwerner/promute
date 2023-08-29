const XPATH_PROMOTED_TWEET_MENU_ACTIVATORS = '//span[text()="Ad"]/../..//div[@aria-haspopup="menu"]'
const XPATH_MUTE_BUTTON = '//div[@role="menuitem"]//descendant::span[contains(text(),"Mute")]'
const XPATH_SURROUNDING_TWEET = '//ancestor::article'

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

            // remove element if it still exists, as is the case in threads and personal timelines
            let promotedTweet = document.evaluate(XPATH_SURROUNDING_TWEET, promotedTweetMenuActivator, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
            promotedTweet?.singleNodeValue?.remove()
        }, 250)
    })
}

debouncedMutePromoters = debounce(mutePromoters, 1000)
document.addEventListener('scroll', debouncedMutePromoters)
