/*
 * Translate to tieqViet
 */
function translate() {
    $("p, a, span, td, i, option, h1, h2, h3, h4, h5, h6").each(function() {
        let currentText = $(this).text();
        let newText = currentText.replace(/CH/gi, "C").replace(/Đ/gi, "D")
                                 .replace(/PH/gi, "F").replace(/KH/gi, "X");
        $(this).text(newText);

        console.log('translated !!!');
    });
}

/*
 * Change background color of body tag
 */
function changeBackground () {
    $("body").css("background-color", "red");
}

/*
 * Listen request from popup
 */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "changechar") {
        translate();
        sendResponse({status: 1});
    }

    if (request.action === "changebackground") {
        changeBackground();
        sendResponse({status: 1});
    }
});