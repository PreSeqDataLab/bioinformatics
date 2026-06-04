var initAll = function () {
    var path = window.location.pathname;
    if (path.endsWith("/print.html")) {
        return;
    }

    // Create sidetoc container if it doesn't exist
    if (!document.querySelector('.sidetoc')) {
        var content = document.querySelector('#mdbook-content') || document.querySelector('#content');
        if (content) {
            var sidetoc = document.createElement('div');
            sidetoc.className = 'sidetoc';
            var pagetoc = document.createElement('nav');
            pagetoc.className = 'pagetoc';
            sidetoc.appendChild(pagetoc);
            content.insertBefore(sidetoc, content.firstChild);
        }
    }

    var updateFunction = function () {
        var id = null;
        var elements = document.getElementsByClassName("header");
        Array.prototype.forEach.call(elements, function (el) {
            if (window.pageYOffset >= el.offsetTop) {
                id = el;
            }
        });

        Array.prototype.forEach.call(document.getElementsByClassName("pagetoc")[0].children, function (el) {
            el.classList.remove("active");
        });

        Array.prototype.forEach.call(document.getElementsByClassName("pagetoc")[0].children, function (el) {
            if (id == null) {
                return;
            }
            if (id.href && el.href && id.href.localeCompare(el.href) == 0) {
                el.classList.add("active");
            }
        });
    };

    var pagetoc = document.getElementsByClassName("pagetoc")[0];
    if (!pagetoc) {
        return;
    }

    var elements = document.getElementsByClassName("header");
    Array.prototype.forEach.call(elements, function (el) {
        var link = document.createElement("a");

        var indent = "";
        switch (el.parentElement.tagName) {
            case "H1":
                return;
            case "H3":
                indent = "20px";
                break;
            case "H4":
                indent = "40px";
                break;
            default:
                break;
        }

        link.appendChild(document.createTextNode(el.text));
        link.style.paddingLeft = indent;
        link.href = el.href;
        pagetoc.appendChild(link);
    });
    updateFunction.call();

    window.addEventListener("scroll", updateFunction);
};

window.addEventListener('load', initAll);
