// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const apikey = "fca_live_K22CefQ5LtHG0dxxqSDmnvPqf9NmF5y1rRYgZhjZ";
//   const [inputCurrencyType, setInputCurrencyType] = useState("");
//   const [inputcurrencyvalue, setInputcurrencyvalue] = useState("");
//   const [outputcurrency, setOutputcurrency] = useState("");
//   const [convertedcurrency, setConvertedcurrency] = useState("");

//   const getAvailableCurrencies = async () => {
//     const url = `https://api.freecurrencyapi.com/v1/currencies?apikey=${apikey}`;
//     const result = await axios.get(url);
//     console.log(result.data.data);
//     setInputCurrencyType(result.data.data);
//     setConvertedcurrency(result.data.data);
//     setOutputcurrency(result.data.data);
//   };

//   const exchangeAmount = async () => {
//     const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${apikey}&currencies=${outputcurrency}&base_currency=${inputCurrencyType}`;
//     const result = await axios.get(url);
//     console.log(result.data.data);

//     const convertedAmount = setInputcurrencyvalue * exchangerate;
//     setConvertedcurrency(convertedAmount);
//   };
//   useEffect(() => {
//     getAvailableCurrencies();
//   }, []);

//   return (
//     <>
//       <div>
//         <h1>Currency Converter</h1>
//         <select>
//           {inputCurrencyType
//             ? Object.keys(inputCurrencyType).map((currency) => {
//                 return (
//                   <option key={currency} value={currency}>
//                     {currency}
//                   </option>
//                 );
//               })
//             : null}
//         </select>
//         <input
//           type="number"
//           placeholder="Amount"
//           onChange={(e) => {
//             setInputcurrencyvalue(e.target.value);
//           }}
//         />

//         <select>
//           {outputcurrency
//             ? Object.keys(outputcurrency).map((currency) => {
//                 return (
//                   <option key={currency} value={currency}>
//                     {currency}
//                   </option>
//                 );
//               })
//             : null}
//         </select>
//       </div>
//       <button onClick={exchangeAmount}>Convert</button>

//       <p>Amount is :{setConvertedcurrency}</p>
//     </>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const api = "095dfb1d9488452abbf1d459cc15c2c5";
  // const apikey = "fca_live_K22CefQ5LtHG0dxxqSDmnvPqf9NmF5y1rRYgZhjZ";

  const [countryList, setCountryList] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [finalResult, setFinalResult] = useState("");

  const getCurrency = async () => {
    const url = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${api}`;
    // const url = `https://api.freecurrencyapi.com/v1/currencies?apikey=${apikey}`;

    const result = await axios.get(url);

    console.log(result.data.rates);
    setCountryList(result.data.rates);
  };

  const returnValue = async () => {
    const url = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${api}&symbols=${toCurrency}&base=${fromCurrency}`;
    const result = await axios.get(url);
    setFinalResult(result.data.rates * inputValue);
  };

  useEffect(() => {
    getCurrency();
  }, []);

  return (
    <>
      <div>
        <h3>From</h3>
        <select
          onChange={(e) => {
            setFromCurrency(e.target.value);
          }}
        >
          {countryList
            ? Object.keys(countryList).map((currency) => {
                return (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                );
              })
            : null}
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder="Amount"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <div>
        <h3>To</h3>
        <select
          onChange={(e) => {
            setToCurrency(e.target.value);
          }}
        >
          {countryList
            ? Object.keys(countryList).map((currency) => {
                return (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                );
              })
            : null}
        </select>
      </div>
      <button onClick={returnValue}>Convert</button>
      <p>Amount is :{finalResult}</p>
    </>
  );
}
export default App;
