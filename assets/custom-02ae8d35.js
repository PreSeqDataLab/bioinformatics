var DEFAULT_PAGE_TOC_WIDTH = 200;
var MIN_PAGE_TOC_WIDTH = 160;
var MAX_PAGE_TOC_WIDTH = 420;
var PAGE_TOC_WIDTH_STORAGE_KEY = "mdbook-page-toc-width";
var PAGE_TOC_HANDLE_WIDTH = 12;

var clampPageTocWidth = function (width) {
    return Math.max(MIN_PAGE_TOC_WIDTH, Math.min(MAX_PAGE_TOC_WIDTH, width));
};

var readPageTocWidth = function () {
    try {
        var storedWidth = parseInt(localStorage.getItem(PAGE_TOC_WIDTH_STORAGE_KEY), 10);
        if (!isNaN(storedWidth)) {
            return clampPageTocWidth(storedWidth);
        }
    } catch (error) {
    }

    return DEFAULT_PAGE_TOC_WIDTH;
};

var persistPageTocWidth = function (width) {
    try {
        localStorage.setItem(PAGE_TOC_WIDTH_STORAGE_KEY, String(width));
    } catch (error) {
    }
};

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
            var resizeHandle = document.createElement('div');
            resizeHandle.className = 'pagetoc-resize-handle';
            resizeHandle.setAttribute('title', 'Drag to resize page table of contents');
            resizeHandle.setAttribute('aria-hidden', 'true');
            var resizeIndicator = document.createElement('div');
            resizeIndicator.className = 'pagetoc-resize-indicator';
            resizeHandle.appendChild(resizeIndicator);
            sidetoc.appendChild(resizeHandle);
            sidetoc.appendChild(pagetoc);
            content.insertBefore(sidetoc, content.firstChild);
        }
    }

    var sidetoc = document.getElementsByClassName("sidetoc")[0];
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
    var resizeHandle = document.getElementsByClassName("pagetoc-resize-handle")[0];
    if (!sidetoc || !pagetoc || !resizeHandle) {
        return;
    }

    var main = document.getElementsByTagName("main")[0];
    var pageTocWidth = readPageTocWidth();

    var syncPageTocLayout = function () {
        var boundedWidth = clampPageTocWidth(pageTocWidth);
        pageTocWidth = boundedWidth;
        sidetoc.style.left = 'calc(100% - ' + boundedWidth + 'px)';
        pagetoc.style.width = boundedWidth + 'px';
        if (main) {
            main.style.paddingRight = Math.max(180, boundedWidth + 24) + 'px';
        }

        var pagetocRect = pagetoc.getBoundingClientRect();
        resizeHandle.style.left = (pagetocRect.left - PAGE_TOC_HANDLE_WIDTH / 2) + 'px';
        resizeHandle.style.top = pagetocRect.top + 'px';
        resizeHandle.style.height = pagetocRect.height + 'px';
    };

    syncPageTocLayout();

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
    window.addEventListener("resize", syncPageTocLayout);

    resizeHandle.addEventListener("mousedown", function (event) {
        event.preventDefault();
        var pageTocRect = pagetoc.getBoundingClientRect();
        var rightEdge = pageTocRect.right;
        document.body.classList.add("page-toc-resizing");

        var onMouseMove = function (moveEvent) {
            pageTocWidth = clampPageTocWidth(rightEdge - moveEvent.clientX);
            syncPageTocLayout();
        };

        var onMouseUp = function () {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
            document.body.classList.remove("page-toc-resizing");
            persistPageTocWidth(pageTocWidth);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    });
};

window.addEventListener('load', initAll);
