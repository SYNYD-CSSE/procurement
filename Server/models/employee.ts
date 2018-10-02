import { model , Schema} from "mongoose";

const employeeSchema :Schema  = new Schema({
    
    id :{
        type     : String,
        default  : 'E000',
        required : true,
        unique   : true
     }, 

    firstName :{
        type     : String,
        default  : '',
        required : true
     }, 

    lastName :{
        type     : String,
        default  : '',
        required : true
     }, 

    address :{
        type     : String,
        default  : ''
     }, 

    email :{
        type     : String,
        default  : ''
     }, 

    phone :{
        type     : String,
        default  : ''
     },
     role :{
        type: String,
        enum : ['Regular','Constructor','SiteManager','Management','Accountant'],
        default: 'Regular'
         
     },
     siteID : {
         type : Number,
         default : 0
     }

});

const employee = model("employee",employeeSchema);

export default employee;