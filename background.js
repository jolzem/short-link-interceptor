function redirect(requestDetails) {
  const targetUrl = `https://unshorten.link/check?url=${requestDetails.url}`;
  if (requestDetails.url === targetUrl) {
    return;
  }
  return {
    redirectUrl: targetUrl
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[
    "*://bit.ly/*",
    "*://t.ly/*",
    "*://tiny.cc/*",
    "*://tiny.one/*",
    "*://tinyurl.com/*",
    "*://is.gd/*",
    "*://urlz.fr/*",
    "*://snip.ly/*",
    "*://rb.gy/*",
    "*://cutt.ly/*",
    "*://t.ly/*"
  ]},
  ["blocking"]
);
