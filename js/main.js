const renderCard = (products, parentElement) => {
    products.forEach((product) => {
        const {name, price} = product;
        const cardBlock = document.createElement("div");
        cardBlock.classList.add("product-card");

        cardBlock.innerHTML = `
            <h4>${name}</h4>
            <p>${price}</p>
        `;

        parentElement.append(cardBlock);
    });
};

const saladsListWrapper = document.querySelector(".salads");
const soupsListWrapper = document.querySelector(".soups");
const steaksListWrapper = document.querySelector(".steaks");
const kebabsListWrapper = document.querySelector(".kebabs");
const fastFoodsListWrapper = document.querySelector(".fast-foods");
const pizzasListWrapper = document.querySelector(".pizzas");
const sideDishesListWrapper = document.querySelector(".side-dishes");
const drinksListWrapper = document.querySelector(".drinks");
const lemonadesListWrapper = document.querySelector(".lemonades");
const bearsListWrapper = document.querySelector(".bears");
const vodkasListWrapper = document.querySelector(".vodkas");
const champagnesListWrapper = document.querySelector(".champagnes");
const whiskeysListWrapper = document.querySelector(".whiskeys");
const tequilasListWrapper = document.querySelector(".tequilas");
const cognacsListWrapper = document.querySelector(".cognacs");
const lightHookahsListWrapper = document.querySelector(".light-hookahs");
const mediumHookahsListWrapper = document.querySelector(".medium-hookahs");
const highHookahsListWrapper = document.querySelector(".high-hookahs");


const saladsList = [
    {name: "Баклажан в кисло-сладком соусе", price: "325"},
    {name: "Цезарь с курицей", price: "370"},
    {name: "Греческий", price: "290"},
    {name: "Свежий салат", price: "270"},
    {name: "Китайский салат", price: "320"},
];
const soupsList = [
    {name: "Чечевичный", price: "240"},
    {name: "Суп с фрикадельками", price: "240"},
    {name: "Куриный суп", price: "240"}
]
const steaksList = [
    {name: "Бон филе на гриле", price: "600"},
    {name: "Отбивная говядина на гриле", price: "600"},
    {name: "Отбивная курица на гриле", price: "600"}
]
const kebabsList = [
    {name: "Ассорти кебаб", price: "610"},
    {name: "Адана урфа", price: "450"},
    {name: "Кебаб из баранины", price: "480"},
    {name: "Кебаб из курицы", price: "440"},
    {name: "Крылышки на мангале", price: "440"},
    {name: "Бейти сарма", price: "540"},
]
const fastFoodsList = [
    {name: "Шаурма crazy chicken", price: "250"},
    {name: "Шаурма дюна beef", price: "260"},
    {name: "Шаурма от Алладина", price: "380"},
    {name: "Crazy chicken burger", price: "220"},
    {name: "Дюна bееf burger", price: "240"},
    {name: "Ritchie burger", price: "260"},
]
const pizzasList = [
    {name: "Маргарита 30/40", price: "440/520"},
    {name: "Мексиканская 30/40", price: "440/750"},
    {name: "Пепперони 30/40", price: "440/740"},
    {name: "Мясная 30/40", price: "450/760"},
    {name: "Куриная 30/40", price: "440/740"},
]
const sideDishesList = [
    {name: "Картофель фри", price: "160"},
    {name: "Картофельные дольки", price: "195"},
    {name: "Радиоактивные сосиски с фри", price: "250"},
    {name: "Крокеты", price: "195"},
    {name: "Адские перчики", price: "60"},
]
const drinksList = [
    {name: 'Cola/Fanta/Sprite', price: '150'},
    {name: 'Натуральные соки', price: '200'},
    {name: 'Fuse tea', price: '150'},
    {name: 'Вода', price: '80'}
]
const lemonadesList = [
    {name: 'Dark forest', price: '280'},
    {name: 'Fresh lime', price: '280'},
    {name: 'Клубника бомба', price: '280'},
    {name: 'Экзотик', price: '280'},
    {name: 'Манго маракуйа', price: '280'},
]
const bearsList = [
    {name: 'Bud', price: '200'},
    {name: 'Essa', price: '180'},
]
const vodkasList = [
    {name: 'Органик', price: '800/1200'},
    {name: 'Настроение', price: '800/1200'},
    {name: 'Талка', price: '800/1200'},
]
const champagnesList = [
    {name: 'Santo Stefano', price: '1200'},
]
const whiskeysList = [
    {name: 'Jack Daniels 1 л.', price: '3900'},
    {name: 'Jameson 0,7/1 л.', price: '3000/3700'},
    {name: 'William Lawsons 0,7 л.', price: '2500'},
    {name: 'Black Velvet 1 л.', price: '2000'},
    {name: 'Triple Wood 1л.', price: '2500'},
]
const tequilasList = [
    {name: 'Sierra', price: '3700'},
    {name: 'Olmeca', price: '3700'},
]
const cognacsList = [
    {name: 'Кыргызстан 0.7 л.', price: '1000'},
]
const lightHookahsList = [
    {name: 'Emirates Grape (grape, orange mint, Christmas memories)', price: '550'},
    {name: 'Escobar (escobar, cola lemon maracuja)', price: '550'},
    {name: 'Lem chill (escobar, lem chill)', price: '550'},
    {name: 'Christmas memories ( cola maracuja, Christmas, moloko)', price: '550'}
]
const mediumHookahsList = [
    {name: 'Wild Berries ( земляника, ягодный сорбет)', price: '750'},
    {name: 'Melon (вкус сочной мякоти спелой дыни)', price: '750'},
    {name: 'Клубничный мильфей ( французский десерт со вкусом клубники, с долей сливочного сыра маскарпоне с десертным после вкусием)', price: '750'}
]
const highHookahsList = [
    {name: 'Pinkman ( кисло-сладкое сочетание розового грейпфрута и клубники с добавлением малинового сиропа)', price: '950'},
    {name: 'Rocketman ( яркий, освежающий вкус клубничной содовой, сдобренной дольками киви и грейпфрута)', price: '950'},
    {name: 'Space flavour ( космическое сочетание манго, маракуйя и личи, приправленное лепестками роз, покрытых утренней прохладной росой)', price: '950'},
    {name: 'Melonade ( яркий вкус лимонада на основе арбузного сока, долек сочной спелой дыни и барбарисового сиропа)', price: '950'},
    {name: 'Flying Dutchman ( бархатная композиция свежих лесных ягод с ярко выраженными оттенками ежевики во вкусе)', price: '950'}
]

const productBlocks = [
    {list: saladsList, element: saladsListWrapper},
    {list: soupsList, element: soupsListWrapper},
    {list: steaksList, element: steaksListWrapper},
    {list: kebabsList, element: kebabsListWrapper},
    {list: fastFoodsList, element: fastFoodsListWrapper},
    {list: pizzasList, element: pizzasListWrapper},
    {list: sideDishesList, element: sideDishesListWrapper},
    {list: drinksList, element: drinksListWrapper},
    {list: lemonadesList, element: lemonadesListWrapper},
    {list: bearsList, element: bearsListWrapper},
    {list: vodkasList, element: vodkasListWrapper},
    {list: champagnesList, element: champagnesListWrapper},
    {list: whiskeysList, element: whiskeysListWrapper},
    {list: tequilasList, element: tequilasListWrapper},
    {list: cognacsList, element: cognacsListWrapper},
    {list: lightHookahsList, element: lightHookahsListWrapper},
    {list: mediumHookahsList, element: mediumHookahsListWrapper},
    {list: highHookahsList, element: highHookahsListWrapper},
]

productBlocks.forEach((item) => renderCard(item.list, item.element))