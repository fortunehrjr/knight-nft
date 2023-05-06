const apiKey = "uYO4uNXTFkKpFDG5KdDXGVnS1SvBUrDI";
const container = document.querySelector(".section");

async function initialNfts() {
  const dataFetch = await fetch(
    `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20`,
    {
      method: "GET",
      headers: {
        Accept: "application/json ",
        "X-API-KEY": "uYO4uNXTFkKpFDG5KdDXGVnS1SvBUrDI",
      },
    }
  );

  const data = await dataFetch.json();
  console.log(data);

  // data.results.forEach((result) => {
  //   console.log(result.token_name);
  //   const metadata = result.metadata;
  //   console.log(metadata.image);
  //   console.log(result.token_name);
  //   const nftImg = document.createElement("div");
  //   nftImg.classList.add("nft-img");
  //   nftImg.innerHTML = `
  //     <h3>${result}</h3>
  //     `;
  //   container.appendChild(nftImg);
  // });
}

initialNfts();

// <img class="pic" src=${metadata.image}></img>
