import YOUR_API_KEY from "./API_CONSTANTS.js";

const tableBody = document.querySelector("crypto-table");
const generateQueryParam = new URLSearchParams({
    key: YOUR_API_KEY,
});

console.log(generateQueryParam);

fetch(generateQueryParam)
    .then((res) => res.json)
    .then((coin) => {
        console.log(coin)
        coin.items.forEach(element => {
            
        });
        innerHTML.row = `
            <tr>
                    <td><img src="${coin.image}" width="30"></td>
                    <td>"${coin.id}"</td>
                    <td>"${coin.symbol}"</td>
                    <td>"${coin.current_price}"</td>
                    <td>"${coin.market_cap_change_24h}"</td>
                    <td>"${coin.price_change_percentage_24h}"</td>
                    <td>"${coin.market_cap}"</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    }

fetchCryptoData();