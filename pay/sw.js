self.addEventListener("canmakepayment", (e) => e.respondWith(true));

self.addEventListener("paymentrequest", async (event) => {
    let reject;
    let promise = new Promise((_, reject_) => {
        reject = reject_;
    });

    event.respondWith(promise);

    let client = await event.openWindow("./navigate.html");
    if (!client) {
        return reject("Failed to open window.");
    }

    let data = event.methodData[0].data;
    let urlToOpen = data ? data.url : "https://google.com";

    if (!urlToOpen.startsWith("http")) {
        return reject("Not a valid URL to open.")
    }

    client.postMessage({ url: urlToOpen });
});
