"use strict";
(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get("uddg");
    if (redirect === null || params.get("disablenolbang") !== null) {
        return;
    }
    let toCancel = true;
    const wrapper = document.createElement("div");
    wrapper.style.margin = "1rem";
    wrapper.style.fontSize = "1.5rem";
    const initial = document.createTextNode("You will get redirected to ");
    const link = document.createElement("a");
    link.href = redirect;
    link.textContent = redirect;
    link.style.color = "#769dff";
    const last = document.createTextNode(" in about a second.");
    const cancel = document.createElement("button");
    cancel.textContent = "Go back!";
    cancel.style.background = "transparent";
    cancel.style.font = "inherit";
    cancel.style.color = "inherit";
    cancel.style.border = "0";
    cancel.style.padding = "0";
    cancel.style.display = "block";
    cancel.style.cursor = "pointer";
    cancel.style.textDecoration = "underline";
    cancel.addEventListener("click", () => {
        toCancel = false;
        const newUrl = new URL(location.href);
        newUrl.searchParams.set("disablenolbang", "");
        location.href = newUrl.toString();
    });
    wrapper.appendChild(initial);
    wrapper.appendChild(link);
    wrapper.appendChild(last);
    wrapper.appendChild(cancel);
    document.body.style.backgroundColor = "#161616";
    document.body.style.color = "#eeeeee";
    document.body.textContent = "";
    document.body.appendChild(wrapper);
    setTimeout(() => {
        if (toCancel) {
            location.href = redirect;
        }
    }, 1500);
})();
