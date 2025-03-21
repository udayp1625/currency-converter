async function convertCurrency() {
    const apiKey = "YOUR_API_KEY"; // Replace with your ExchangeRate-API key
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (!amount) {
        alert("Please enter an amount");
        return;
    }

    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.result === "error") {
            document.getElementById("result").innerHTML = `<p>Error fetching exchange rates</p>`;
        } else {
            const exchangeRate = data.conversion_rates[toCurrency];
            const convertedAmount = (amount * exchangeRate).toFixed(2);
            document.getElementById("result").innerHTML = `<p>${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}</p>`;
        }
    } catch (error) {
        console.error("Error fetching currency data:", error);
    }
}