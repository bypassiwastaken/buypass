function buypass() {
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
}

document.querySelector("button").onclick = buypass;
