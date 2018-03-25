/*
 * Sending request to content script
 */
function requestChangeChar() {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "changechar"}, function (response) {
            if (response.status === 1) console.log('change char OK!');
        });
    });
}

function requestChangeBackground() {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "changebackground"}, function (response) {
            if (response.status === 1) console.log('change background OK!')
        });
    });
}

/*
 * Handler event's button
 */
$(document).ready(function () {
    $("#btnChangeChar").click(requestChangeChar);

    $("#btnchangeBackground").click(requestChangeBackground);
});

