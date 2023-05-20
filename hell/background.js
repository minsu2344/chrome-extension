chrome.webNavigation.onHistoryStateUpdated.addListener((e) => {
  if (e.url.includes('https://www.youtube.com/shorts')) {
    const newURL = 'https://www.youtube.com/shorts/SpdbMfUmm-8';

    chrome.tabs.update(e.tabId, { url: newURL });
  }
});


