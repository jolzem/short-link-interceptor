const url = new URL(window.location.href).searchParams.get("url");

addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("content").innerHTML = url;
});
