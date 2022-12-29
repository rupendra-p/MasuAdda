const Product = require('../models/productModel');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/MasuAdda_Test';
beforeAll(async () => {
await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
        });
});
afterAll(async () => {
    await mongoose.connection.close();
});
describe('Product Schema test anything', () => {
    it('Add Product testing anything', () => {
        const Productdata = {
            'name': 'Chicken',
            'description': 'Fresh meat',
            'price':200,
            'ratings':2,
            'images':{
            'public_id':"products/wg6ei74p4cptclpbtvyx",
            'url':"https://res.cloudinary.com/dopscegcx/image/upload/v1644473829/products..."},
            'category':'Chicken',
            'stock':20,
            'numOfReviews':1,
            'reviews':{
                'user':'6204ad701ac4b68de5806105',
                'name':'Gauri',
                'rating':2,
                'comment':'Liked the product'
            },
            'user':'6204ad701ac4b68de5806105'




};
return Product.create(Productdata)
    .then((pro_ret) => {
        expect(pro_ret.name).toEqual('Chicken');
    

    
    });
});
    it('to test the delete Product is working or not', async () => {
        const status = await Product.deleteMany();
        expect(status.ok);
    });
});
