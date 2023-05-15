// Create observer with callback function
const callback = function (mutations, observer) {
    // Iterate over every DOM mutation
    for (let mutation of mutations) {
        // Iterate over all added nodes in a mutation
        for (let node of mutation.addedNodes) {
            // Click on node if it
            if (node.matches('.playback-controls__skip--button')) {
                node.firstChild.click();
                console.log(`PEACOCKTV: Skip Button Pressed!`)
            }
        }
    }
};
const mutationObserver = new MutationObserver(callback);

// Start oberserving every change in the DOM
const element = document.documentElement;
const config = { attributes: true, childList: true, subtree: true };
mutationObserver.observe(element, config);
