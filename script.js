let cryptoData = [];

function fetchData() {
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  )
    .then((response) => response.json())
    .then((data) => {
      cryptoData = data;
      dataRender(data);
    })
    .catch((err) => console.erorr("Error fetching data", err));
}

function dataRender(data) {
  const tbody = document.querySelector(".cryptoTable tbody");
  tbody.innerHML = "";
  data.forEach((coin) => {
    const row = `<tr>
    <td><img src="${coin.image}" alt="${coin.name}" width="25"</td>
    <td>${coin.name}<td>
    <td>${coin.symbol.toUpperCase()}</td>
    <td>${coin.current_price}<td>
    <td>${coin.total_volume}<td>
    <td>${coin.price_change_percentage_24h}<td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

fetchData();