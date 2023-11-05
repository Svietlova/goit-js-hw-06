// >>> Items is array like object.

const items = document.getElementsByClassName("item");
const categoriesCount = items.length;
console.log(`Number of categories: ${categoriesCount}`);

// >>> Щоб іттерірувати об'єкт перетворюємо його у масив завдяки Array.from т.я. const items не масив, а об'єкт.

const itemArray = Array.from(items);  
    itemArray.forEach(itemElement => {
        const titleElements = itemElement.getElementsByTagName("h2");
            console.log(`Category: ${titleElements[0].textContent}`);
    const categoriesElements = itemElement.getElementsByTagName("li");
    console.log(`Elements: ${categoriesElements.length}`);
});