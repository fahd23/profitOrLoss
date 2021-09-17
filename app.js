const initialPrice = document.querySelector("#initial-price");
const quantityOfStocks = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

submitBtn.addEventListener("click",calculateProfitAndLoss);

function calculateProfitAndLoss(){
    const costPrice = Number(initialPrice.value)
    const noOfQty = Number(quantityOfStocks.value);
    const sellingPrice = Number(currentPrice.value);

    if (costPrice > sellingPrice) {
        const loss = (costPrice - sellingPrice) * noOfQty;
        const lossPercentage = ((costPrice - sellingPrice) / costPrice) * 100;
        showOutput(`Hey, the loss is ${loss.toFixed(2)} and the percent is ${lossPercentage.toFixed(2)}% 😥`);
      } 
      else if (sellingPrice > costPrice) {
        const profit = (sellingPrice - costPrice) * noOfQty;
        const profitPercentage = ((sellingPrice - costPrice) / costPrice) * 100;
        if (profitPercentage > 50){
            showOutput(`Hey, the profit is ${profit.toFixed(2)} and the percent is ${profitPercentage.toFixed(2)}% 🤑`);
        }else{
            showOutput(`Hey, the profit is ${profit.toFixed(2)} and the percent is ${profitPercentage.toFixed(2)}% 💰`);        }
        
      }
      else {
        showOutput(`No pain no gain and no gain no pain 😶`);
      }

}

function showOutput(msg){
    output.innerText = msg;
}