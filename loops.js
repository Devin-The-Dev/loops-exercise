//Print your name 3 times in a loop
for (i = 0; i < 3; i++) {
    console.log('Devin');
}


// Create an array named brands with 4 of your favorite name brands, then choose
// whatever loop you like to print all 4 brands

var brand = ['Nike', 'Adidas', 'Banana Republic', 'Express'];

for (j = 0; j < brand.length; j++) {
    console.log(brand[j]);
}

// Create an array with objects inside that contain information of each brand. It must
// have a name, product, and a price inside. Then print a sentence that says
// "(brandname)'s (product) cost (price)"

var brandStuff = [
    {
        name: 'Nike',
        product: 'hat',
        price: '19.99'
    },
    {
        name: 'Adidas',
        product: 'shoes',
        price: '49.99'
    },
    {
        name: 'Banana Republic',
        product: 'shirt',
        price: '49.99'
    },
    {
        name: 'Express',
        product: 'pants',
        price: '29.99'
    }
];
// let print it in a for loop
for (k = 0; k < brandStuff.length; k++) {
    console.log(brandStuff[k].name + "'s " + brandStuff[k].product + " costs $" + brandStuff[k].price + ".");
}
// much better

