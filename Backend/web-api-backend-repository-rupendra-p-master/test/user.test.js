const User = require('../models/userModel');
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
describe('User Schema test anything', () => {
    it('Add User testing anything', () => {
        const Userdata = {
            'name': 'Gauri',
            'email': 'gauri@gmail.com',
            'password':'gauri@123',
            'avatar':{
            'public_id':"avatars/cby15nvciwchbymvciug",
            'url':"https://res.cloudinary.com/dopscegcx/image/upload/v1644477499/avatars/..."},
            'role':'user'



};
return User.create(Userdata)
    .then((pro_ret) => {
    expect(pro_ret.name).toEqual('Gauri');
    expect(pro_ret.email).toEqual('gauri@gmail.com');
    //expect(pro_ret.password).toEqual('gauri@123');
    expect(pro_ret.avatar.public_id).toEqual(
        "avatars/cby15nvciwchbymvciug"
        
        );
    expect(pro_ret.avatar.url).toEqual(
        "https://res.cloudinary.com/dopscegcx/image/upload/v1644477499/avatars/..."
        );
    expect(pro_ret.role).toEqual('user');

    
    });
});
    it('to test the delete User is working or not', async () => {
        const status = await User.deleteMany();
        expect(status.ok);
    });
    
});
