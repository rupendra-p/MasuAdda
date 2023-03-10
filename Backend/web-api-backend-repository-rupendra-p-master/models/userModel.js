const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name."],
        maxlength: [30, "Name Cannot Exceed 30 character"],
        minlength: [3, "Name Should be minimum 3 character long."],
    },
    email: {
        type: String,
        required: [true, "Please Enter Email."],
        unique: true,
        validate: [validator.isEmail, "Please Enter a Valid Email"]
    },
    password: {
        type: String,
        required: [true, "Please Enter Password."],
        minlength: [8, "Password Should be minimum 8 character long."],
        select: false,
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: "user",
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,

});
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE})
}

//Compare Password with inbuilt functions
userSchema.methods.comparePassword = async function(enteredPassword){
    return bcrypt.compare(enteredPassword, this.password);
}


userSchema.methods.getResetPasswordToken = function(){
    
    //Genrating Token of 20 hex character
    const resetToken = crypto.randomBytes(20).toString("hex");

    //Hasing and adding ResetPassword Token to userSchema
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    
    this.resetPasswordExpire = Date.now() + 15*60*1000;
    return resetToken;
}


module.exports = mongoose.model("User", userSchema);
