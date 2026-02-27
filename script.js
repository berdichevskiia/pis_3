function showSection(id) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

const kitchens = [
    { name: "Русская", complexity: "low", equipment: 500000, audience: ["families","residential"] },
    { name: "Итальянская", complexity: "medium", equipment: 1200000, audience: ["students","families","tourist"] },
    { name: "Японская", complexity: "high", equipment: 3000000, audience: ["center","evening"] },
    { name: "Средиземноморская", complexity: "medium", equipment: 2000000, audience: ["center","tourist"] }
];

function recommend() {

    const budget = parseInt(document.getElementById("budget").value);
    const area = parseInt(document.getElementById("area").value);
    const location = document.getElementById("location").value;
    const audience = document.getElementById("audience").value;

    let result = [];

    kitchens.forEach(k => {

        if (budget < 2000000 && area < 60 && k.complexity === "low")
            result.push(k.name);

        if (location === "tourist" && k.audience.includes("tourist"))
            result.push(k.name);

        if (k.audience.includes(audience))
            result.push(k.name);

        if (budget < k.equipment)
            result = result.filter(r => r !== k.name);
    });

    result = [...new Set(result)];

    document.getElementById("result").innerHTML =
        result.length ? "Рекомендуем: " + result.join(", ")
        : "Нет подходящих вариантов.";
}
