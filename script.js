const SDGs = [
    
  { 
    number: 1, 
    title: "No Poverty", 
    description: "End poverty in all its forms everywhere", 
    color: "#e5243b",
    details: "This goal aims to eradicate extreme poverty, implement social protection systems, and ensure equal rights to economic resources."
  },
  { 
    number: 2, 
    title: "Zero Hunger", 
    description: "End hunger, achieve food security and improved nutrition", 
    color: "#DDA63A",
    details: "This goal seeks to end all forms of malnutrition, double agricultural productivity, and ensure sustainable food production systems."
  },
  { 
    number: 3, 
    title: "Good Health and Well-being", 
    description: "Ensure healthy lives and promote well-being for all", 
    color: "#4C9F38",
    details: "This goal aims to reduce maternal mortality, end epidemics of communicable diseases, and achieve universal health coverage."
  },
  { 
    number: 4, 
    title: "Quality Education", 
    description: "Ensure inclusive and equitable quality education", 
    color: "#C5192D",
    details: "This goal seeks to ensure that all girls and boys complete free, equitable and quality primary and secondary education."
  },
  { 
    number: 5, 
    title: "Gender Equality", 
    description: "Achieve gender equality and empower all women and girls", 
    color: "#FF3A21",
    details: "This goal aims to end all forms of discrimination against women and girls everywhere and ensure women's full participation in leadership and decision-making."
  },
  { 
    number: 6, 
    title: "Clean Water and Sanitation", 
    description: "Ensure availability and sustainable management of water", 
    color: "#26BDE2",
    details: "This goal focuses on achieving universal and equitable access to safe and affordable drinking water, sanitation, and hygiene for all."
  },
  { 
    number: 7, 
    title: "Affordable and Clean Energy", 
    description: "Ensure access to affordable, reliable, sustainable energy", 
    color: "#FCC30B",
    details: "This goal aims to ensure universal access to affordable, reliable, and modern energy services, and substantially increase the share of renewable energy."
  },
  { 
    number: 8, 
    title: "Decent Work and Economic Growth", 
    description: "Promote sustained, inclusive and sustainable economic growth", 
    color: "#A21942",
    details: "This goal promotes sustained economic growth, higher levels of productivity, and technological innovation. It encourages entrepreneurship and job creation."
  },
  { 
    number: 9, 
    title: "Industry, Innovation and Infrastructure", 
    description: "Build resilient infrastructure, promote inclusive industrialization", 
    color: "#FD6925",
    details: "This goal aims to build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation."
  },
  { 
    number: 10, 
    title: "Reduced Inequalities", 
    description: "Reduce inequality within and among countries", 
    color: "#DD1367",
    details: "This goal seeks to reduce inequalities in income as well as those based on age, sex, disability, race, ethnicity, origin, religion or economic or other status."
  },
  { 
    number: 11, 
    title: "Sustainable Cities and Communities", 
    description: "Make cities inclusive, safe, resilient and sustainable", 
    color: "#FD9D24",
    details: "This goal aims to make cities and human settlements inclusive, safe, resilient, and sustainable through better urban planning and management."
  },
  { 
    number: 12, 
    title: "Responsible Consumption and Production", 
    description: "Ensure sustainable consumption and production patterns", 
    color: "#BF8B2E",
    details: "This goal seeks to promote resource and energy efficiency, sustainable infrastructure, and providing access to basic services, green and decent jobs and a better quality of life for all."
  },
  { 
    number: 13, 
    title: "Climate Action", 
    description: "Take urgent action to combat climate change and its impacts", 
    color: "#3F7E44",
    details: "This goal aims to integrate climate change measures into national policies, strategies and planning, and improve education and awareness on climate change."
  },
  { 
    number: 14, 
    title: "Life Below Water", 
    description: "Conserve and sustainably use the oceans, seas and marine resources", 
    color: "#0A97D9",
    details: "This goal focuses on reducing marine pollution, protecting marine and coastal ecosystems, and regulating harvesting and ending overfishing."
  },
  { 
    number: 15, 
    title: "Life on Land", 
    description: "Protect, restore and promote sustainable use of terrestrial ecosystems", 
    color: "#56C02B",
    details: "This goal aims to sustainably manage forests, combat desertification, halt and reverse land degradation, and halt biodiversity loss."
  },
  { 
    number: 16, 
    title: "Peace, Justice and Strong Institutions", 
    description: "Promote peaceful and inclusive societies for sustainable development", 
    color: "#00689D",
    details: "This goal seeks to promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels."
  },
  { 
    number: 17, 
    title: "Partnerships for the Goals", 
    description: "Strengthen the means of implementation and revitalize the global partnership", 
    color: "#19486A",
    details: "This goal aims to strengthen global partnerships to support and achieve the ambitious targets of the 2030 Agenda, bringing together national governments, the international community, civil society, the private sector and other actors."
  },
];


document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector(".card-container");
    let expandedIndex = null;

    SDGs.forEach((sdg, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.backgroundColor = sdg.color;

        const cardHeader = document.createElement("div");
        cardHeader.className = "card-header";
        cardHeader.innerHTML = `
            <div class="card-title">
                <span><strong>${sdg.number}.</strong> ${sdg.title}</span>
                <div class="chevron">${index === expandedIndex ? "▲" : "▼"}</div>
            </div>
        `;
        cardHeader.addEventListener("click", () => {
            expandedIndex = expandedIndex === index ? null : index;
            updateCards();
        });

        const cardContent = document.createElement("div");
        cardContent.className = "card-content";
        cardContent.classList.add(index === expandedIndex ? "visible" : "hidden");
        cardContent.innerHTML = `
            <p>${sdg.description}</p>
            ${index === expandedIndex ? `<p>${sdg.details}</p>` : ""}
        `;

        card.appendChild(cardHeader);
        card.appendChild(cardContent);
        cardContainer.appendChild(card);
    });

    function updateCards() {
        document.querySelectorAll(".card").forEach((card, index) => {
            const content = card.querySelector(".card-content");
            content.classList.toggle("hidden", index !== expandedIndex);
            content.classList.toggle("visible", index === expandedIndex);
            card.querySelector(".chevron").innerText = index === expandedIndex ? "▲" : "▼";
        });
    }
});
