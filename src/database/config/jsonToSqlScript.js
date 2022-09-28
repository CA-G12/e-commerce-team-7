// function to convert json to sql
// const fs = require('fs');
// const { join } = require('path');

// const { products } = require('./seedsData.json');

// let content =
//   'INSERT INTO PRODUCTS(NAME, DESCRIPTION, PRICE, STOCK, CATEGORY, IMAGE, GALARY) VALUES ';

// const filterContent = (item) => {
//   const { title, description, category } = item;

//   const filterdTitle = title.replace(',', '');
//   const filterdDescription = description.replace("'", '');
//   const filterdCategory = category.replace("'", '');
//   const filteredItem = {
//     ...item,
//     description: filterdDescription,
//     title: filterdTitle,
//     category: filterdCategory,
//   };
//   return filteredItem;
// };

// for (let i = 0; i < products.length; i += 1) {
//   let tempValue;
//   const filterdProduct = filterContent(products[i]);
//   if (i < products.length - 1)
//     tempValue = `('${filterdProduct.title}', '${filterdProduct.description}', ${filterdProduct.price}, '${filterdProduct.stock}', '${filterdProduct.category}', '${filterdProduct.thumbnail}', Array['${filterdProduct.images[0]}', '${filterdProduct.images[1]}',  '${filterdProduct.images[2]}']),
//      `;
//   else
//     tempValue = `('${filterdProduct.title}', '${filterdProduct.description}', ${filterdProduct.price}, '${filterdProduct.stock}', '${filterdProduct.category}', '${filterdProduct.thumbnail}', Array['${filterdProduct.images[0]}', '${filterdProduct.images[1]}',  '${filterdProduct.images[2]}']);`;
//   content += tempValue;
// }

// // fs.writeFileSync(join(__dirname, 'jsonToSql.sql'), content, (err) => {
// //   // if (err) console.log(err);
// // });
