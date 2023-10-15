/*======================================
    PRODUCTS
======================================*/
const products = [
    {
        id: 1,
        productName: "Картофель с курицей",
        image: "https://s1.1zoom.me/big0/147/The_second_dishes_Meat_products_French_fries_545676_1280x853.jpg",
        desc: "Помидор, лимон, саленые огурцы, грибы",
        category: "блюда",
        price: 35
    },
    {
        id: 2,
        productName: "Cалат Осенний",
        image: "https://kartinki.pics/uploads/posts/2021-03/1617180919_30-p-yeda-na-belom-fone-krasivo-42.jpg",
        desc: "Помидор, лимон, саленые огурцы, грибы",
        category: "салаты",
        price: 45
    },
    {
        id: 3,
        productName: "Картофель с Мясом",
        image: "https://s1.1zoom.me/big0/648/The_second_dishes_Potato_Meat_products_Vegetables_563131_1280x853.jpg",
        desc: "Помидор, лимон, саленые огурцы, грибы",
        category: "блюда",
        price: 55
    },
    {
        id: 4,
        productName: "Салат Французкий",
        image: "https://avatars.mds.yandex.net/i?id=0e79eb255af439f584fd05b9d65e43918990185b-8168927-images-thumbs&n=13",
        desc: "Помидор, лимон, саленые огурцы, грибы",
        category: "салаты",
        price: 15
    },
    {
        id: 5,
        productName: "Люля Кебаб",
        image: "https://img.freepik.com/premium-photo/delicious-dishes-with-meat-on-white-background_446633-4842.jpg",
        desc: "Помидор, лимон, саленые огурцы, грибы",
        category: "блюда",
        price: 25
    },
    {
        id: 6,
        productName: "Итальяно",
        image: "https://amiel.club/uploads/posts/2022-03/1647707176_18-amiel-club-p-kartinki-blyud-dlya-menyu-23.jpg",
        desc: "Помидор, лимон, саленые огурцы, грибы",
        category: "блюда",
        price: 35
    },
    {
        id: 7,
        productName: "Сырный Суп",
        image: "https://img.freepik.com/premium-photo/homemade-vegetable-cheese-soup-with-bread-crumbs-and-greens-on-a-white-background-isolated-object_223622-1211.jpg",
        desc: "Помидор, лимон, саленые огурцы, грибы",
        category: 'супы',
        price: 25
    },
    {
        id: 8,
        productName: "Чечевичный Суп",
        image: "https://food.pibig.info/uploads/posts/2023-04/1681336345_food-pibig-info-p-sup-pyure-iz-ptitsi-vkontakte-4.jpg",
        desc: "Помидор, лимон, саленые огурцы, грибы",
        category: 'супы',
        price: 40
    },
    {
        id: 9,
        productName: "Томатный Суп",
        image: "https://img.freepik.com/premium-photo/tomato-soup-in-a-white-bowl-with-parsley-on-a-plate-isolated-on-white-background_423299-1256.jpg",
        desc: "Помидор, лимон, саленые огурцы, грибы",
        category: 'супы',
        price: 50
    }
];




/*======================================
    APPEAR WHILE SCROLLING
======================================*/
// Observer
let option = {
    root: null,
    rootMargin: "5px",
    threshold: .5
}

let callback = function(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log('find', entry);

            entry.target.setAttribute('class', 'menu-items appear');
        }
    });
}

let observer = new IntersectionObserver(callback, option);



// Second Animation
const secondAnimation = () => {

    let option = {
        root: null,
        rootMargin: "5px",
        threshold: 1
    }
    
    let callback = function(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log('find', entry);
    
                entry.target.classList.add('animated');
            }
        });
    }
    
    let observer = new IntersectionObserver(callback, option);
    
    
    const animateItems = document.querySelectorAll('.animate');
    animateItems.forEach((item) => {
        observer.observe(item);
    })

}
secondAnimation()






/*======================================
    CLOSE SIDEBAR AFTER NAV LINK
======================================*/
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar');
        const openBtn = document.querySelector('#toggle-btn');

        navbar.classList.toggle('open')
        openBtn.classList.toggle('fa-xmark');
        openBtn.classList.toggle('fa-bars');
    })
})





/*======================================
    DISPLAY PRODUCTS
======================================*/
const displayProducts = (array) => {
    
    const itemContainer = document.querySelector('.menu-item-container');
    itemContainer.innerHTML = "";

    // New Array Inside New Element
    const display = array.map((item) => {
        
        // New Element
        const menuItems = document.createElement("div");
        menuItems.setAttribute('class', 'menu-items')

        menuItems.innerHTML = `
            <div class="menu-item-image-container" id="${item.id}">
                <img src="${item.image}" alt="${item.productName}">
            </div>

            <h1 class="menu-item-title">
                ${item.productName}
            </h1>

            <h2 class="menu-item-sub-title">
                ${item.desc}
            </h2>

            <h2 class="menu-item-price">
                TJS ${item.price}
            </h2>
        `;

        return item = menuItems;

    })

    
    display.forEach((card) => {
        observer.observe(card);
    })

    // *********************


    // Append Them Into The Item Container
    display.forEach(item => {
        itemContainer.appendChild(item);
    });
}
displayProducts(products);





/*======================================
    CLEAR ACTIVE
======================================*/
const clearActive = (string) => {
    
    filterBtns.forEach((btn) => {
        if (btn.textContent === string) {
            btn.classList.add('active');
            console.log('added to: ' + btn);
        } else {
            btn.classList.remove('active');
            console.log('removed from: ' + btn);
        }
    })

}





/*======================================
    FILTER DATA
======================================*/
const filterBtns = document.querySelectorAll('.menu-section-filter button');
filterBtns.forEach((item) => {

    item.addEventListener('click', (e) => {
        if (e.target.textContent === "Блюда" || e.target.textContent === "Супы" || e.target.textContent === "Салаты") {
            let filteredData = products.filter((menuItem) => menuItem.category === e.target.textContent.toLowerCase());
            displayProducts(filteredData);

            // Clear Active
            clearActive(e.target.textContent);

        } else if (e.target.textContent === 'Все') {
            displayProducts(products);

            // Clear Active
            clearActive(e.target.textContent);

        }
    })

})




/*======================================
    TOGGLE BTN - SIDEBAR
======================================*/
toggleBtn = () => {
    
    const navbar = document.querySelector('.navbar');
    const openBtn = document.querySelector('#toggle-btn');

    openBtn.addEventListener('click', () => {
        navbar.classList.toggle('open')
        openBtn.classList.toggle('fa-xmark');
        openBtn.classList.toggle('fa-bars');
    })

}
toggleBtn();





/*======================================
    HEADER SCROLL DARK THEME
======================================*/
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 100) {
        header.classList.add('dark');
    } else {
        header.classList.remove('dark');
    }
})
