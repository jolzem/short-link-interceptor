pattern = [
  "https://bit.ly/*",
  "https://t.ly/*",
  "https://tiny.cc/*",
  "https://tiny.one/*",
  "https://tinyurl.com/*",
  "https://is.gd/*",
  "https://urlz.fr/*",
  "https://snip.ly/*",
  "https://rb.gy/*",
  "https://cutt.ly/*",
  "https://t.ly/*"
]

// source: https://stackoverflow.com/questions/36063233/redirecting-to-extension-resource-in-firefox
function redirect(requestDetails) {
  let { tabId } = requestDetails;
  let redirectUrl = browser.runtime.getURL('index.html?url=' + requestDetails.url);
  if(navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      chrome.tabs.update(tabId, {
          url: redirectUrl
      })
      return {
          cancel: true
      }
  } else return { redirectUrl }
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: pattern },
  ["blocking"]
);

