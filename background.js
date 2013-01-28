//extension generated using Peter Legierski's bookmarklet to chrome extension converter
//seehttp://blog.self.li/post/16366939413/how-to-convert-bookmarklet-to-chrome-extension
//cat image courtesty placekitten.com
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {file: "bookmarklet.js"})
});