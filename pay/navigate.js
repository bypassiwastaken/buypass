navigator.serviceWorker.addEventListener("message", (event) => {
    location.replace(event.data.url);
});
