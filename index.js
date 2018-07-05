browser.contextMenus.create({
    id: "download-ig-photo",
    title: "Download photo from Instagram",
    contexts: ["page"]
});

browser.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "download-ig-photo") {
        browser.tabs.executeScript({
            file: "downloader.js"
        }).then((results) => {
            onExecuted(results);
        }).catch((error) => {
            return false;
        });
    }
});

browser.browserAction.onClicked.addListener(function(tab){
    var executing = browser.tabs.executeScript({
        file: "downloader-menu.js"
    });
    executing.then(onExecutedTab, function () {
        return false;
    });
});

function onExecutedTab(result) {
    console.log(result);
    var downloading = browser.downloads.download({
        url : result[0] + "",
        saveAs : true
    });
    downloading.then(onStartedDownload, function () {
        return false;
    });
}

function onExecuted(result) {
  var downloading = browser.downloads.download({
      url : result[0],
      saveAs : true
    });
    downloading.then(onStartedDownload, function () {
        return false;
    });
}

function onStartedDownload(id) {
    return true;
}