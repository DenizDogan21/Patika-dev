const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    country: "Korea",
    category:"Main Course",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    country: "Japan",
    category:"Main Course",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    country: "Korea",
    category:"Main Course",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    country: "China",
    category:"Main Course",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    country: "China",
    category:"Main Course",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    country: "Japan",
    category:"Main Course",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    country: "Korea",
    category:"Main Course",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    country: "China",
    category:"Main Course",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    country: "Japan",
    category:"Main Course",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// Select the button container 
const button = document.querySelector(".btn-container");


// Add buttons to the DOM
button.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand All" href="#">All</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link Korea" href="#">Korea <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link Japan" href="#">Japan</a>
      </li>
      <li class="nav-item">
        <a class="nav-link China" href="#">China</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Side Plates
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item Dessert" href="#">Desserts</a>
          <a class="dropdown-item Snack" href="#">Snacks</a>
          <a class="dropdown-item Drink" href="#">Drinks</a>
        </div>
      </li>
    </ul>
  </div>
</nav>`;


// Select the menu container
const menuContainer = document.querySelector(".section-center");


// Create the menu items
const createObject = (x) => {
  return `<div class="menu-items col-lg-6 col-sm-12">
  <img src="${x.img}" alt="${x.title}" class="photo" />
  <div class="menu-info">
      <div class="menu-title">
      <h4>${x.title}</h4>
      <h5 class="country">${x.country}</h5>
      <h5 class="category">${x.category}</h5>
      <h4 class="price">${x.price}</h4>
      </div>
      <div class="menu-text">
      <p>En- ${x.desc}</p>
      </div>
  </div>
  </div>`;
}

// List the menu items
const listAllFoods = () => {
  let allMenu = "";
  menu.map((x) => {
      allMenu += createObject(x);
  });
  menuContainer.innerHTML = allMenu;
}

// List the Korean menu items
const listKoreanFoods = () => {
  let allMenu = "";
  menu.map((x) => {
      if (x.country == "Korea") {
          allMenu += createObject(x);
      }
  });
  menuContainer.innerHTML = allMenu;
}

// List the Japanese menu items
const listJapaneseFoods = () => {
  let allMenu = "";
  menu.map((x) => {
      if (x.country == "Japan") {
          allMenu += createObject(x);
      }
  });
  menuContainer.innerHTML = allMenu;
}

// List the Chinese menu items
const listChineseFoods = () => {
  let allMenu = "";
  menu.map((x) => {
      if (x.country == "China") {
          allMenu += createObject(x);
      }
  });
  menuContainer.innerHTML = allMenu;
}

// List the Dessert menu items
const listDessertFoods = () => {
  let allMenu = "";
  menu.map((x) => {
      if (x.category == "Dessert") {
          allMenu += createObject(x);
      }
  });
  menuContainer.innerHTML = allMenu;
}

// List the Dessert menu items
const listSnackFoods = () => {
  let allMenu = "";
  menu.map((x) => {
      if (x.category == "Snack") {
          allMenu += createObject(x);
      }
  });
  menuContainer.innerHTML = allMenu;
}

// List the Dessert menu items
const listDrinkFoods = () => {
  let allMenu = "";
  menu.map((x) => {
      if (x.category == "Drink") {
          allMenu += createObject(x);
      }
  });
  menuContainer.innerHTML = allMenu;
}

// Add event listeners to the buttons
document.querySelector(".All").addEventListener("click", listAllFoods);

document.querySelector(".Korea").addEventListener("click", listKoreanFoods);

document.querySelector(".Japan").addEventListener("click", listJapaneseFoods);

document.querySelector(".China").addEventListener("click", listChineseFoods);

document.querySelector(".Dessert").addEventListener("click", listDessertFoods);

document.querySelector(".Snack").addEventListener("click", listSnackFoods);

document.querySelector(".Drink").addEventListener("click", listDrinkFoods);
