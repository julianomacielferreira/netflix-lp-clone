// Get the list of all tab item and content item elements
const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content item
function selectItem(e) {

    // Remove the border from all tab items
    removeBorder();

    // Remove the show from all tab content items
    removeShow();

    // Add border to current tab
    this.classList.add("tab-border");

    // Grab content item from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add("show");
}

function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove("tab-border");
    });
}

function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.remove("show");
    });
}

// Listen for tab click
tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
});
