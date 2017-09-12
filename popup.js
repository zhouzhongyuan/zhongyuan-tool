function click(e) {
    chrome.tabs.query({
        active: true,
        currentWindow: true,
    }, function (tabs) {
        var currentTab = tabs[0];
        executeCopy(`- [${currentTab.title}](${currentTab.url})`)
    })

    function executeCopy(text) {
        var input = document.createElement('textarea');
        document.body.appendChild(input);
        input.value = text;
        input.focus();
        input.select();
        document.execCommand('Copy');
        input.remove();
    };
    chrome.tabs.executeScript();

    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', click);
    }
});
