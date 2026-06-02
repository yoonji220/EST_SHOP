//상품 조회
async function fetchProducts() {
  try {
    const res = await fetch("./data/products.json");
    console.log(res);
    const data = await res.json();
    console.log(data.products);
    console.log(data.products.slice(0, 12));
    const products = data.products.slice(0, 12);
    /*
    빈 fragment를 생성 
    products의 마다 할 일 
    빈 요소에 12개의 article을 생성하고, 

    product-grid에 fragmaent 의 내용을 html 태그로 생성 
    */
    const frag = document.createDocumentFragment();

    products.forEach(product => {
      const article = document.createElement("article");
      article.className = "product-card";

      article.innerHTML = `
    <img src="${product.thumbnail}" alt="${product.title}" />
    <div class="product-info">
      <h3>${product.title}</h3>
      <p>${product.brand}</p>
      <div class="product-bottom">
        <strong>${product.price.toLocaleString()}원</strong>
        <button 
          type="button" 
          class="cart-add" 
          aria-label="${product.title} 장바구니 담기"
        ></button>
      </div>
    </div>
  `;

      frag.appendChild(article);
    });

    document.querySelector(".product-grid").appendChild(frag);
  } catch {
  } finally {
  }
}
fetchProducts();
