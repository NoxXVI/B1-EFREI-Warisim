"use strict";

function createFooter() {
    // Création des éléments principaux
    const wrapper = document.createElement("div");
    const input = document.createElement("input");
    const labelToggle = document.createElement("label");
    const chevronIcon = document.createElement("img");
    const footerContainer = document.createElement("div");

    // Configuration des attributs et classes
    wrapper.className = "footer-wrapper";
    input.type = "checkbox";
    input.id = "footer-toggle";
    labelToggle.htmlFor = "footer-toggle";
    labelToggle.className = "toggle-footer";
    chevronIcon.src = "../assets/icons/chevron-down.svg";
    footerContainer.className = "footer";
    footerContainer.id = "footer-container";

    // Assemblage des éléments
    labelToggle.appendChild(chevronIcon);
    wrapper.append(input, labelToggle, footerContainer);

    return wrapper;
}

function createFooterSection(sectionName, sectionClass = "") {
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

function createScrollFooterSection(sectionName, sectionClass = "") {
    const footerSection = createFooterSection(sectionName, sectionClass);
    const scrollContent = document.createElement("div");

    // Configuration des classes
    scrollContent.className = "scroll-content";

    // Assemblage
    footerSection.appendChild(scrollContent);

    return footerSection;
}

// Ajout du footer dans le DOM
document.body.appendChild(createFooter());

// Ajout de sections dans le footer
const footerContainer = document.querySelector("#footer-container");
footerContainer.appendChild(createScrollFooterSection("Une description", "description"));
