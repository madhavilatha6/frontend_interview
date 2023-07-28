async function fetchData(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
}

async function alldata() {
    let response = await fetchData(`https://fakestoreapi.com/products`);
    console.log(response);  
    const dataContainer = document.getElementById("dataContainer");
    const productListHTML = response.map((item) => {
        return `<div><img src="${item.image}">,Id:${item.id}, Product: ${item.title},Price: ${item.price}</div>`;
    });
    dataContainer.innerHTML = productListHTML;
}

alldata();

