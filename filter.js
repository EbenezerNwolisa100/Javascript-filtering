const data = [
    {
        id: 1,
        name: "First watches",
        img: "https://atlas-content-cdn.pixelsquid.com/stock-images/wrist-watch-VaNYBB8-600.jpg",
        price: 400,
        cat: "Rolex",
    },
    {
        id: 2,
        name: "Second watches",
        img: "https://parspng.com/wp-content/uploads/2023/06/watchpng.parspng.com-10.png",
        price: 560,
        cat: "Double Braclet",
    },
    {
        id: 3,
        name: "Third watches",
        img: "https://image.similarpng.com/very-thumbnail/2020/07/Wrist-watch-vector-PNG.png",
        price: 340,
        cat: "Chain",
    },
    {
        id: 4,
        name: "Fourth watches",
        img: "https://w7.pngwing.com/pngs/666/125/png-transparent-classic-wrist-watch.png",
        price: 280,
        cat: "Steel gold",
    },
    {
        id: 5,
        name: "Fifth watches",
        img: "https://png.pngtree.com/png-vector/20200420/ourmid/pngtree-wristwatch-vector-illustration-flat-design-png-image_2190672.jpg",
        price: 350,
        cat: "Rolex",
    },
    {
        id: 6,
        name: "Sixth watches",
        img: "https://img.freepik.com/free-photo/stylish-golden-watch-white-surface_181624-27078.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717286400&semt=ais_user",
        price: 170,
        cat: "Double Braclet",
    },
    {
        id: 7,
        name: "Seventh watches",
        img: "https://purepng.com/public/uploads/large/purepng.com-mens-wrist-band-watchclockbelltimealarmwristbandmens-1421526465709ngqbt.png",
        price: 200,
        cat: "Steel gold",
    },
    {
        id: 8,
        name: "Eight watches",
        img: "https://e7.pngegg.com/pngimages/758/778/png-clipart-pocket-watch-chronograph-watch-watch-accessory-accessories-thumbnail.png",
        price: 420,
        cat: "Chain",
    },
    {
        id: 9,
        name: "Ninth watches",
        img: "https://w7.pngwing.com/pngs/864/418/png-transparent-watch-icon-wristwatch-brown-watch-accessory-candle-thumbnail.png",
        price: 250,
        cat: "Rolex",
    },
    {
        id: 10,
        name: "Tenth watches",
        img: "https://w1.pngwing.com/pngs/835/970/png-transparent-cartoon-airplane-watch-watch-bands-strap-citizen-watch-wrist-clothing-accessories-aeronautics.png",
        price: 520,
        cat: "Chain",
    },
]

let productsContainer = document.querySelector(".products");
let searchInput = document.querySelector(".search");
let categoriesContainer = document.querySelector(".cats");
let priceRange = document.querySelector(".priceRange");
let priceValue = document.querySelector(".priceValue");

let displayProducts = (filtredProducts) => {
    productsContainer.innerHTML = filtredProducts.map(
        (product) =>
        `
        <div class="products">
            <img src=${product.img} alt="">
            <span class="name">${product.name}</span>
            <span class="priceText">$${product.price}</span>
        </div>
        `
    ).join("");
};
displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();

    if (value) {
        displayProducts (
            data.filter((item) => item.name.toLocaleLowerCase().indexOf(value) !== -1)
        );
    } else {
        displayProducts(data);
    }
});

const setCategories = () => {
    const allCats = data.map((item) => item.cat);
    const categories = [
      "All",
      ...allCats.filter((item, i) => {
        return allCats.indexOf(item) === i;
      }),
    ];
  
    categoriesContainer.innerHTML = categories
      .map(
        (cat) =>
          `
        <span class="cat">${cat}</span>
      `
      )
      .join("");
  
    categoriesContainer.addEventListener("click", (e) => {
      const selectedCat = e.target.textContent;
  
      selectedCat === "All"
        ? displayProducts(data)
        : displayProducts(data.filter((item) => item.cat === selectedCat));
    });
  };
  
  const setPrices = () => {
    const priceList = data.map((item) => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
  
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;
  
    priceRange.addEventListener("input", (e) => {
      priceValue.textContent = "$" + e.target.value;
      displayProducts(data.filter((item) => item.price <= e.target.value));
    });
  };
  
  setCategories();
  setPrices();