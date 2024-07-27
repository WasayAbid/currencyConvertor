var currencyconvertor = /** @class */ (function () {
    function currencyconvertor(dollarToRupeeRate) {
        this.dollarToRupeeRate = dollarToRupeeRate;
        this.rupeeToDollarRate = 1 / dollarToRupeeRate;
    }
    currencyconvertor.prototype.toRupees = function (usdAmount) {
        return usdAmount * this.dollarToRupeeRate;
    };
    currencyconvertor.prototype.toDollars = function (pkrAmount) {
        return pkrAmount * this.rupeeToDollarRate;
    };
    return currencyconvertor;
}());
// Example usage:
var forexConverter = new currencyconvertor(286.5); // Assume 1 USD = 286.5 PKR
var dollars = 100;
var rupees = 28650;
var convertedRupees = forexConverter.toRupees(dollars);
var convertedDollars = forexConverter.toDollars(rupees);
console.log("".concat(dollars, " USD converts to ").concat(convertedRupees, " PKR."));
console.log("".concat(rupees, " PKR converts to ").concat(convertedDollars, " USD."));
