"use strict";

export function createFooter() {
    const footerContainer = document.createElement("div");

    footerContainer.className = "footer";
    footerContainer.id = "footer-container";

    return footerContainer;
}

export function createFooterSection(sectionName, sectionClass = "") {
    const footerSection = document.createElement("div");
    const label = document.createElement("label");

    // Configuration des classes et contenu
    label.className = "section_name";
    label.innerText = sectionName;
    footerSection.classList.add("footer-section", sectionClass);

    // Assemblage des éléments
    footerSection.appendChild(label);

    return footerSection;
}

export function createScrollContent() {
    const scrollDiv = document.createElement("div")
    scrollDiv.className = "scroll-content"
    return scrollDiv
}
