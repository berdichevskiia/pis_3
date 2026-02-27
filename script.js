const kitchens = [
    {
        name: "Русская",
        complexity: "low",
        equipmentCost: 500000,
        audience: ["families", "residential"],
        check: "econom"
    },
    {
        name: "Итальянская",
        complexity: "medium",
        equipmentCost: 1200000,
        audience: ["students", "families", "tourist"],
        check: "medium"
    },
    {
        name: "Японская",
        complexity: "high",
        equipmentCost: 3000000,
        audience: ["center", "evening"],
        check: "premium"
    },
    {
        name: "Средиземноморская",
        complexity: "medium",
        equipmentCost: 2000000,
        audience: ["center", "tourist"],
        check: "medium"
    }
];

function recommend() {

    const budget = parseInt(document.getElementById("budget").value);
    const area = parseInt(document.getElementById("area").value);
    const location = document.getElementById("location").value;
    const audience = document.getElementById("audience").value;

    let recommendations = [];

    kitchens.forEach(kitchen => {

        if (budget < 2000000 && area < 60) {
            if (kitchen.complexity === "low" && kitchen.equipmentCost < 1000000) {
                recommendations.push(kitchen.name);
            }
        }

        if (location === "tourist") {
            if (kitchen.audience.includes("tourist")) {
                recommendations.push(kitchen.name);
            }
        }

        if (kitchen.audience.includes(audience)) {
            recommendations.push(kitchen.name);
        }

        if (budget < kitchen.equipmentCost) {
            recommendations = recommendations.filter(k => k !== kitchen.name);
        }

    });

    recommendations = [...new Set(recommendations)];

    if (recommendations.length === 0) {
        document.getElementById("result").innerHTML =
            "⚠ Нет подходящих вариантов. Попробуйте изменить параметры.";
    } else {
        document.getElementById("result").innerHTML =
            "Рекомендуемая кухня: " + recommendations.join(", ");
    }
}
