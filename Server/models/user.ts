import { model , Schema} from "mongoose";

const userSchema :Schema  = new Schema({
    
    id :{
        type     : String,
        default  : 'E000',
        required : true
     }, 

    username :{
        type     : String,
        default  : '',
        required : true
     }, 

    password :{
        type     : String,
        default  : '',
        required : true
     }, 
     role :{
        type: String,
        enum : ['Regular','Constructor','SiteManager','Management','Accountant','Supplier'],
        default: 'Regular'
         
     }

});

const user = model("user",userSchema);

export default user;