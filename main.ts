import inquirer from 'inquirer'

const currency:{[key:string]:number} = {
  USD: 1, //base currency
  PKR: 280,
  INR: 100,
  GBP: 0.5,
  Euro: 0.25,
  SAR: 90
};

let userinput = await inquirer.prompt([
  {name:"FromCurrency",
  message: "Please Select the Currency From which you want to convert",
  type: "list",
  choices: ['USD', 'PKR', 'INR', 'GBP', 'SAR', 'Euro']

},
{
  name: "ToCurrency",
  message: "Please Select the Currency you want to convert into",
  type:"list",
  choices: ['USD', 'PKR', 'INR', 'GBP', 'SAR', 'Euro'],
},
{
  name: "useramount",
  message: "Please enter your amount",
  type: "number",
  validate:(answer:number) => {
    if (isNaN(answer)) {
      return "Please Enter a Valid Number";
    }
    return true
  }
}

]

)
let fromamount = currency [userinput.FromCurrency] 
let toamount = currency [userinput.ToCurrency]
let amount:number = userinput.useramount
let baseamount = amount / fromamount   //usd
let convertedamount = baseamount * toamount
let convertedamountstring = convertedamount.toFixed(2)
console.log(`${amount} ${userinput.FromCurrency} is equal to ${convertedamountstring} ${userinput.ToCurrency}`)