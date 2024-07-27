class currencyconvertor {
    private readonly dollarToRupeeRate: number;
    private readonly rupeeToDollarRate: number;

    constructor(dollarToRupeeRate: number) {
        this.dollarToRupeeRate = dollarToRupeeRate;
        this.rupeeToDollarRate = 1 / dollarToRupeeRate;
    }

    toRupees(usdAmount: number): number {
        return usdAmount * this.dollarToRupeeRate;
    }

    toDollars(pkrAmount: number): number {
        return pkrAmount * this.rupeeToDollarRate;
    }
}

// Example usage:
const forexConverter = new currencyconvertor(286.5); // Assume 1 USD = 286.5 PKR

const dollars = 100;
const rupees = 28650;

const convertedRupees = forexConverter.toRupees(dollars);
const convertedDollars = forexConverter.toDollars(rupees);

console.log(`${dollars} USD converts to ${convertedRupees} PKR.`);
console.log(`${rupees} PKR converts to ${convertedDollars} USD.`);