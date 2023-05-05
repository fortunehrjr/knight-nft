const apiKey = "uYO4uNXTFkKpFDG5KdDXGVnS1SvBUrDI";
const container = document.querySelector(".section");

async function initialNfts() {
  const dataFetch = await fetch(
    `https://api.blockspan.com/v1/nfts?chain=eth-main&include_current_owners=true&include_recent_price=true&page_size=25`,
    //"https://api.blockspan.com/v1/collections?chain=eth-main"
    //"https://api.blockspan.com/v1/nfts/contract/0x41f56b000fffe17943fb4c182c123767af71d005?chain=eth-main&include_current_owners=true&include_recent_price=true&page_size=25",
    {
      method: "GET",
      headers: {
        Accept: "application/json ",
        "X-API-KEY": "uYO4uNXTFkKpFDG5KdDXGVnS1SvBUrDI",
      },
    }
  );

  const data = await dataFetch.json();
  //console.log(data.results);

  data.results.forEach((result) => {
    const metadata = result.metadata;

    console.log(metadata.image);
    console.log(result.token_name);

    const nftImg = document.createElement("div");
    nftImg.classList.add("nft-img");
    nftImg.innerHTML = `
      <img class="pic" src=${metadata.image}></img>
      <h3>${result.token_name}</h3>
      `;

    container.appendChild(nftImg);
  });
}

initialNfts();
