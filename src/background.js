chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // there are other status stages you may prefer to inject after
  if (changeInfo.status === 'complete' && tab.active) {
      const url = new URL(tab.url);
      if (url.hostname === 'www.dns-shop.ru') {
        chrome.tabs.executeScript(tabId,{
            file: 'js/content-script.js',
            allFrames: true
        })
      }
  }
});
