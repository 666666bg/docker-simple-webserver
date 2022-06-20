
document.getElementById("calc").addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = await
        fetch(`/gs_calc/${document.getElementById("count").value}`);
    const json = await data.json();
    document.getElementById("res").innerHTML = json.calculated;
});