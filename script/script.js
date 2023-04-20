// data Base

dataBase = [
   {
      isAvailable: true,
      type: 'с фуа-гра',
      quanityNnumber: 10,
      quanity: ' порций мышь в подарок',
      portion: 0.5,
      classType: 'list-item__buy_foie-gras'
   },
   {
      isAvailable: true,
      type: 'с рыбой',
      quanityNnumber: 10,
      portion: 2,
      classType: 'list-item__buy_fish'
   },
   {
      isAvailable: true,
      type: 'с курой',
      quanityNnumber: 100,
      portion: 5,
      classType: 'list-item__buy_chicken'
   }
];



// create Element
// create Block Template
let makeDiv = function (tagName, className1, className2) { 
   let div = document.createElement(tagName);

   div.classList.add(className1, className2)

   return div;
};

// create element in block Tamplate
let makeElement = function (tagName, className, text) { 
   let element = document.createElement(tagName);
   element.classList.add(className);
   if (text) { 
      element.textContent = text;
   }
   return element;
};

// create Item
let createItem = function (product) { 
   let itemList = makeDiv('li', 'feed-list__item', 'list-item');

   let container = makeDiv('div', 'list-item__container', 'item');
   itemList.appendChild(container);

   let infoBlock = makeDiv('div', 'item__text-block', 'info-block');
   container.appendChild(infoBlock);

   let infoText = makeElement('p', 'info-block__text', 'Сказочное заморское яство');
   infoBlock.appendChild(infoText);

   let infoName = makeElement('h2', 'info-block__header-name', 'Нямушка');
   infoBlock.appendChild(infoName);

   let infoType = makeElement('h3', 'info-block__feed-type-header', product.type);
   infoBlock.appendChild(infoType);

   let infoQuanity = makeElement('p', 'info-block__quanity', product.quanity);
   infoBlock.appendChild(infoQuanity);

   let infoQuanityNumber = makeElement('b', 'info-block__quanity-number', product.quanityNnumber);
   infoQuanity.prepend(infoQuanityNumber);

   let picture = makeElement('img', 'item__img');
   picture.src = 'img/card/Cat.png';
   picture.alt = 'Ваш кот будет доволен';
   container.appendChild(picture);

   let veightBlock = makeDiv('div', 'item__veight', 'veight-block');
   container.appendChild(veightBlock);

   let veightWrapper = makeElement('div', 'veight-block__wrapper');
   veightBlock.appendChild(veightWrapper);

   let veightNumber = makeElement('span', 'veight-block__number', product.portion);
   veightWrapper.appendChild(veightNumber);

   let veightUnit = makeElement('span', 'veight-block__unit', 'кг');
   veightWrapper.appendChild(veightUnit);

   let buy = makeElement('p', 'list-item__buy', 'Чего сидишь? Порадуй котэ,\n');
   buy.classList.add(product.classType);
   itemList.appendChild(buy);

   let link = makeElement('a', 'list-item__link', 'купи.');
   link.href = '#';
   buy.appendChild(link);

   return itemList;
};


// create list
let feedList = document.querySelector('.feed-list');

for (let i = 0; i < dataBase.length; i++) { 
   let product = createItem(dataBase[i]);
   feedList.appendChild(product);
}




// dataBase settings popup
let popup = document.querySelector('.data-block');
let openPopupBtn = document.querySelector('.open-popup-btn');
let closePopupBtn = document.querySelector('.data-block__close-popup-btn');

openPopupBtn.addEventListener('click', function () { 
   popup.classList.remove('data-block-unvisable');
   popup.classList.add('data-block-visable');
});

closePopupBtn.addEventListener('click', function () { 
   popup.classList.remove('data-block-visable');
   popup.classList.add('data-block-unvisable');
});

document.addEventListener('keydown', function (evt) {
   if (evt.keyCode === 27) {
      popup.classList.remove('data-block-visable');
      popup.classList.add('data-block-unvisable')
   }
 });



// itemChecked & itemAvailable
let listItem = document.querySelectorAll('.item');
let itemVeightList = document.querySelectorAll('.veight-block')
let buyList = document.querySelectorAll('.list-item__buy');
let infoTexts = document.querySelectorAll('.info-block__text');
let infoBlocks = document.querySelectorAll('.info-block');
let imgs = document.querySelectorAll('.item__img');

for (let i = 0; i < listItem.length; i++) { 
   let item = listItem[i];
   let itemVeight = itemVeightList[i];
   let buy = buyList[i];
   let infoText = infoTexts[i];
   let infoBlock = infoBlocks[i];
   let img = imgs[i];

   // available item
   let inStockMassive = document.querySelectorAll('.data-item__checkbox');

      let inStock = inStockMassive[i];
      inStock.addEventListener('click', function () {   
         if (dataBase[i].isAvailable) {
            dataBase[i].isAvailable = false;
         } else {
            dataBase[i].isAvailable = true;
         }

         if (!dataBase[i].isAvailable) {
            infoBlock.classList.add('_unavailable');
            img.classList.add('_unavailable');
            item.classList.add('item_unavailable');
            itemVeight.classList.add('veight-block_unavailable');
         } else { 
            infoBlock.classList.remove('_unavailable');
            img.classList.remove('_unavailable');
            item.classList.remove('item_unavailable');
            itemVeight.classList.remove('veight-block_unavailable');
         }
      });
   
   
   
   // item chacker
   item.addEventListener('click', function () {
      item.classList.toggle('item_checked');
      itemVeight.classList.toggle('veight-block_checked');

      //buy-label changer
      if (buy.classList.contains('list-item__buy_foie-gras')) {
         buy.innerHTML =
            (buy.innerHTML === 'Печень утки разварная с артишоками.') ? buy.innerHTML = 'Чего сидишь? Порадуй котэ,&nbsp;<a href="#" class="list-item__link"> купи.</a>' : buy.innerHTML = 'Печень утки разварная с артишоками.';
      }
      if (buy.classList.contains('list-item__buy_fish')) {
         buy.innerHTML =
            (buy.innerHTML === 'Головы щучьи с чесноком да свежайшая сёмгушка.') ? buy.innerHTML = 'Чего сидишь? Порадуй котэ,&nbsp;<a href="#" class="list-item__link"> купи.</a>' : buy.innerHTML = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
      }
      if (buy.classList.contains('list-item__buy_chicken')) {
         buy.innerHTML =
            (buy.innerHTML === 'Филе из цыплят с трюфелями в бульоне.') ? buy.innerHTML = 'Чего сидишь? Порадуй котэ,&nbsp;<a href="#" class="list-item__link"> купи.</a>' : buy.innerHTML = 'Филе из цыплят с трюфелями в бульоне.';
      }

      //hover effect
      item.addEventListener('mouseover', function () {
         infoText.innerHTML = 'Котэ не одобряет?';
      });
      item.addEventListener('mouseout', function () {
         infoText.innerHTML = 'Сказочное заморское яство';
      });
   });
}






