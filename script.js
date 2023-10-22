function buypass() {
    let afterCallback = () => { 
        setTimeout(function () {
            alert("Window's time limit reached. Please launch another one to continue your session.")
        }, 3.0);
    };
    new PaymentRequest(
        [
            {
                supportedMethods: location.origin + "/pay/main.json",
                data: { url: document.querySelector("input").value },
            },
        ],
        {
            total: {
                label: "_",
                amount: { value: "1", currency: "USD" },
            },
        }
    ).show();
    afterCallback();
}

document.querySelector("button").onclick = buypass;
