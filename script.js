const yearsElement = document.getElementById("years")
window.onload = () => {
    const startYear = 2023
    const currentYear = new Date().getFullYear()
    const yearsInProgramation = currentYear-startYear
    yearsElement.textContent = `${yearsInProgramation} anos na área`
}