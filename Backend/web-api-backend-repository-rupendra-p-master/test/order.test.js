const Order = require('../models/orderModel');
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
describe('Order Schema test anything', () => {
    it('Add Order testing anything', () => {
        const Orderdata = {
            'shippingInfo':{
                'address':'Kathmandu',
                'city':'New Baneshwor',
                'state':'Bagmati',
                'country':'Nepal',
                'pinCode':44600,
                'phoneNo':9876543210
            },
            'orderItems':{
                'name':'Chicken',
                'price':200,
                'quantity':1,
                'image':'product.jpg',
                'product':'6204adf71ac4b68de580611c'
            },
            'user':'6204ad701ac4b68de5806105',
            'paymentInfo':{
                'id':'1',
                'status':'suceed'
            },
            'paidAt':'2022-02-10T07:20:08.984+00:00',
            'itemPrice':200,
            'taxPrice':50,
            'shippingPrice':20,
            'totalPrice':270,
            'orderStatus':'Delivered',

};
return Order.create(Orderdata)
    .then((pro_ret) => {
        expect(pro_ret.shippingInfo.address).toEqual(
            "Kathmandu"
            );
        expect(pro_ret.shippingInfo.city).toEqual(
            "New Baneshwor"
            );
        expect(pro_ret.shippingInfo.state).toEqual(
            "Bagmati"
            );
        expect(pro_ret.shippingInfo.country).toEqual(
            "Nepal"
            );
        expect(pro_ret.shippingInfo.pinCode).toEqual(
            44600
            );
        expect(pro_ret.shippingInfo.phoneNo).toEqual(
            9876543210
            );

        // expect(pro_ret.orderItems.name).toEqual(
        //     "Chicken"
        //     );
        // expect(pro_ret.orderItems.price).toEqual(
        //     200
        //     );
        // expect(pro_ret.orderItems.quantity).toEqual(
        //     1
        //     );
        // expect(pro_ret.orderItems.image).toEqual(
        //     'product.jpg'
        //     );
        // expect(pro_ret.orderItems.product).toEqual(
        //     '6204adf71ac4b68de580611c'
        //     );
        
        // expect(pro_ret.user).toEqual('6204ad701ac4b68de5806105');
        // expect(pro_ret.paymentInfo.id).toEqual(
        //     "1"
            
        //     );
        // expect(pro_ret.paymentInfo.status).toEqual(
        //     "suceed"
            
        //     );
        // expect(pro_ret.paidAt).toEqual('2022-02-10T07:20:08.984+00:00');
        // expect(pro_ret.itemPrice).toEqual(200);
        // expect(pro_ret.taxPrice).toEqual(50);
        // expect(pro_ret.shippingPrice).toEqual(20);
        // expect(pro_ret.totalPrice).toEqual(270);
        // expect(pro_ret.orderStatus).toEqual('Delivered');
    

    
    });
});
    it('to test the delete order is working or not', async () => {
        const status = await Order.deleteMany();
        expect(status.ok);
    });
});
