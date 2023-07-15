"use strict";
(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get("uddg");
    if (redirect === null) {
        console.warn('NoLBang: Got a search for "l" without a parameter');
        return;
    }
    const wrapper = document.createElement("div");
    wrapper.style.margin = "1rem";
    wrapper.style.fontSize = "1.5rem";
    const initial = document.createTextNode("Redirecting to ");
    const link = document.createElement("a");
    link.href = redirect;
    link.textContent = redirect;
    link.style.color = "#769dff";
    const last = document.createTextNode("...");
    wrapper.appendChild(initial);
    wrapper.appendChild(link);
    wrapper.appendChild(last);
    document.body.style.backgroundColor = "#161616";
    document.body.style.color = "#eeeeee";
    document.body.textContent = "";
    document.body.appendChild(wrapper);
    location.href = redirect;
})();
