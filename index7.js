const fs = require('fs');

const xml2js = require('xml2js');

const builder = new xml2js.Builder();
const product = {
    id_cat: {
        id: 2587,
        category: "chocolate"
    },
    name: "Galaxy Cookie",
    price: 199,
    stock: 11
};

const xmlData = builder.buildObject(product);

console.log(xmlData);

fs.writeFileSync("product.xml", xmlData);

console.log("XML file created: product.xml");