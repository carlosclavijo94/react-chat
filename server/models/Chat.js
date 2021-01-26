const mongoose = require('mongoose');
const md5 = require('md5');
const Schema = mongoose.Schema;

const chatSchema = mongoose.Schema({
    message: {
        type: String
        },
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User' 
    },
    type: {
        type: String
    },
}, { timestamps: true });


chatSchema.pre('save', function( next ) {
    var chat = this;
    
    if(chat.isModified('message')){    
        chat.message=md5(chat.message)

        next()
        
    }else{
        next()
    }

});



const Chat = mongoose.model('Chat', chatSchema);
module.exports = { Chat }