function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
    const budget = {};
    const currentYearIncome = `income-${getCurrentYear()}`;
    const currentYearGdp= `dgp-${getCurrentYear()}`;
    const currentYearCapita= `capita-${getCurrentYear()}`;

    budget[currentYearIncome] = income;
    budget[currentYearGdp] = gdp;
    budget[currentYearCapita] = capita;

    return budget;
}
console.log(getBudgetForCurrentYear(2100, 5200, 1090));