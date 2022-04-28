const list = document.querySelector('.list');

const currency = [
  "USD",
  "EUR",
  "RUB",
  "UAH",
  "CAD",
  "GBP",
  "UZS",
  "TJS",
  "CNY",
  "IRR",
  "JPY"
];

const run = async () => {
  for(let i = 0; i < currency.length; i++) {
    for (var count = 0; count < currency.length; count++) {
      if(currency[i] == currency[count]) continue;
      const res = await fetch(`https://api.exchangerate.host/convert?from=${currency[i]}&to=${currency[count]}`);
      const {date, result} = await res.json();
      const tr = document.createElement('tr');
      tr.innerHTML = `<td><img src="img/${i}.png"></td><td class="base">${currency[i]}</td> <td class="currency">${currency[count]}</td> <td><img src="img/${count}.png"></td> <td class="result">${result.toFixed(2)}</td> <td class="date">${date}</td>`;
      list.append(tr);
      console.log(currency[i], currency[count], result.toFixed(2), date);
    }
  }
}

run();
