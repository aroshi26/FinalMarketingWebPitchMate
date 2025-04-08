let tabs = document.querySelectorAll(".tab");
let tabContent = document.querySelectorAll(".content");
let line = document.querySelector(".line");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
        // Remove active class from all tabs and contents
        tabs.forEach(tab => tab.classList.remove("active"));
        tabContent.forEach(content => content.classList.remove("active"));

        // Add active class to clicked tab and corresponding content
        tab.classList.add("active");
        tabContent[index].classList.add("active");

        // Move the line indicator
        line.style.width = tab.offsetWidth + "px";
        line.style.left = tab.offsetLeft + "px";
    });
});

// Set default position of the line on first load
window.addEventListener("load", () => {
    let activeTab = document.querySelector(".tab.active");
    if (activeTab) {
        line.style.width = activeTab.offsetWidth + "px";
        line.style.left = activeTab.offsetLeft + "px";
    }
});
