// 1.Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// >>>"items is array like object"

const items = document.getElementsByClassName("item");
const categoriesCount = items.length;
console.log(categoriesCount);

// 2.Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) і
// кількість елементів в категорії(усіх < li >, вкладених в нього).

// >>>Щоб іттеріровати об'єкт перетворюємо його у масив завдяки Array.from т.я. items не масив, а об'єкт.

const itemArray = Array.from(items);  
    itemArray.forEach(itemElement => {
        const titleElements = itemElement.getElementsByTagName("h2");
            console.dir(titleElements[0].textContent);
    const categoriesElements = itemElement.getElementsByTagName("li");
    console.dir(`Number of categories: ${categoriesElements.length}`);
});

const j = `Number of categories: ${categoriesElements.length}`