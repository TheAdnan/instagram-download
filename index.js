browser.browserAction.onClicked.addListener(function(tab){
	var executing = browser.tabs.executeScript({
	  file: "downloader.js"
	});
	executing.then(onExecuted, onError);
	 

});

function onStartedDownload(id) {
  console.log("Downloading...");
}

function onFailed(error) {
  console.log("Download failed");
}

function onExecuted(result) {
  var downloading = browser.downloads.download({
      url : result[0] + "",
      saveAs : true
    });

    downloading.then(onStartedDownload, onFailed);
}

function onError(error) {
  console.log("Cant open downloader.js");
}


