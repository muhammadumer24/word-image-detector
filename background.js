chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "showPopupMenu",
    title: "Show Popup",
    contexts: ["selection"],
  })
})
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  chrome.storage.local.set({ selectedText: message.selectedText })
})
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "showPopupMenu") {
    chrome.windows.create({
      url: chrome.runtime.getURL("popup.html"),
      type: "popup",
      width: 300,
      height: 350,
    })
  }
})
