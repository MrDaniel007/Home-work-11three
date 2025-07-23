 let box = document.querySelector(".box")


 let cards = [{
      id: 1,
      title: "Product 1",
      image: "https://picsum.photos/640/640?r=9418",
      description: "Lorem ipsum dolor sit amet, consectetur edit.",
      discount: true,
      discountedPrice: 49.99,
      price: 69.99,
      viewCount: 320,
      rating: 4.5,
      images: [
        "https://picsum.photos/640/640?r=4971",
        "https://picsum.photos/640/640?r=9418",
        "https://picsum.photos/640/640?r=3038",
      ],
    },
    {
      id: 2,
      title: "Product 2",
      image: "https://picsum.photos/640/640?r=4971",
      description: "Aenean volutpat vestibulum est.",
      discount: false,
      discountedPrice: null,
      price: 29.99,
      viewCount: 120,
      rating: 3.2,
      images: [
        "https://picsum.photos/640/640?r=4971",
        "https://picsum.photos/640/640?r=9418",
        "https://picsum.photos/640/640?r=3038",
      ],
    },
    {
      id: 3,
      title: "Product 3",
      image: "https://picsum.photos/640/640?r=4971",
      description: "Sed quis malesuada eros.",
      discount: true,
      discountedPrice: 79.99,
      price: 99.99,
      viewCount: 180,
      rating: 4.0,
      images: [
        "https://picsum.photos/640/640?r=4971",
        "https://picsum.photos/640/640?r=9418",
        "https://picsum.photos/640/640?r=3038",
      ],
    },
    {
      id: 4,
      title: "Product 4",
      image: "https://picsum.photos/640/640?r=4971",
      description: "In tincidunt arcu a scelerisque.",
      discount: false,
      discountedPrice: null,
      price: 39.99,
      viewCount: 250,
      rating: 3.7,
      images: [
        "https://picsum.photos/640/640?r=4971",
        "https://picsum.photos/640/640?r=9418",
        "https://picsum.photos/640/640?r=3038",
      ],
    },
    {
      id: 5,
      title: "Product 5",
      image: "https://picsum.photos/640/640?r=4971",
      description: "Nunc pellentesque viverra metus.",
      discount: true,
      discountedPrice: 54.99,
      price: 79.99,
      viewCount: 420,
      rating: 4.8,
      images: [
        "https://picsum.photos/640/640?r=4971",
        "https://picsum.photos/640/640?r=9418",
        "https://picsum.photos/640/640?r=3038",
      ],
    },
    {
      id: 6,
      title: "Product 6",
      image: "https://picsum.photos/640/640?r=7879",
      description: "Quisque id dapibus justo.",
      discount: false,
      discountedPrice: null,
      price: 19.99,
      viewCount: 80,
      rating: 2.5,
      images: [
        "https://picsum.photos/640/640?r=7879",
        "https://picsum.photos/640/640?r=8879",
        "https://picsum.photos/640/640?r=6055",
      ],
    }
  ]




box.innerHTML = cards.map((item) => {
    let priceProduct = "";
    if(item.discount == true) {
    return`
    <div class="card">
    <p class="id">${item.id}</p>
    <img class="img1" src = "${item.image}"/>
    <h3>${item.title}</h3>
    <p class="description">${item.description}</p>
    <p class="rating">${item.rating} stars</p>
    <div class="info">
    <div>
    <p class="price">${item.price}</p>
    <p class="discountedPrice">${item.discountedPrice}</p>
    </div>
    <p class="count">${item.viewCount} views</p>
    </div>
    <img class="img2" src = "${item.images}"/>
    </div>
    `
    } else if(item.discount == false) {
        return`
    <div class="card">
    <p class="id">${item.id}</p>
    <img class="img1" src = "${item.image}"/>
    <h3>${item.title}</h3>
    <p class="description">${item.description}</p>
    <p class="rating">${item.rating} stars</p>
    <div class="info">
    <div>
    <p class="price1">${item.price}</p>
    </div>
    <p class="count">${item.viewCount} views</p>
    </div>
    <img class="img2" src = "${item.images}"/>
    </div>
    `
    }
}).join("")