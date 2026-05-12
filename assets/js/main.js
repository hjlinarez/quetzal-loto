document.addEventListener("DOMContentLoaded", () => {
    const navCollapseElement = document.querySelector("#mainNav");

    if (!navCollapseElement || typeof bootstrap === "undefined") {
        return;
    }

    const navCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapseElement, {
        toggle: false,
    });

    document.querySelectorAll("#mainNav .nav-link, #mainNav .btn").forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 992) {
                navCollapse.hide();
            }
        });
    });
});