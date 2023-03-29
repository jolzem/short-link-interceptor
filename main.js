const url = new URL(window.location.href).searchParams.get("url");
let httpResponse = "";

addEventListener("DOMContentLoaded", (event) => {
  console.log(url);
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "text/plain",
      'User-Agent': 'ShortLinkInterceptor/1.0.0'
    },
    redirect: "error"
  })
    .then(response => {
      if(response.ok) {
        return response.text();
      } throw new Error('Request failed.');
    })
    .then(data => document.getElementById("content").innerHTML = data)
    .catch(error => console.error(error));
});
