# The Buypass

  **WARNING: This is a mid bypass. If you don't like it, cope.**

## How it works
There's an obscure API in most browsers called the [Payment Request API](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API). The use purpose is to provide an easy way for websites to make transactions. In practice, this means opening a small window containing a website. In short, this weird window messes up the filtering of some extensions.

## What it can and can't do
- **This only lasts for 3 minutes!**
- Pages visited in this window will not be saved to your history, but their cookies will be saved.
- You can right-click on the window to go back and forward.
- There's no good way to make the text in the window larger.
- This won't bypass network filters.
- You can't log into non-school accounts.
- It's completely possible that some filters could read and block the data sent within the window.

## How to set it up yourself

You can just clone and host this repo. Don't change anything in `pay` folder unless you know what you're doing.

The base code for opening the `PaymentRequest` looks like this:

```js
new PaymentRequest(
  [
    {
      supportedMethods: location.origin + "/pay/main.json"
    },
  ],
  {
    total: {
      label: "_",
      amount: { value: "1", currency: "USD" },
    },
  }
).show();
```
The code above will load google.com by default. To specify a URL, do the following:
```js
new PaymentRequest(
  [
    {
      supportedMethods: location.origin + "/pay/main.json",
      data: { url: "https://youtube.com" },
    },
  ],
  {
    total: {
      label: "_",
      amount: { value: "1", currency: "USD" },
    },
  }
).show();
```
