import employee from "../models/employee";
class generate {
    
    
   public static employeeID :IterableIterator<string>;

    constructor(){
        //let lastEmployeeID : string = employee.find({}).sort({x:1}).limit(1);
        //generate.employeeID = this.newID('E001');
    }
    
     public static * newID(lastID:String) {

        let id:number = parseInt( lastID.substring(1));
        let letter:string = lastID.charAt(0);

        while (1) {
            id++;
            yield (id/100>1)? `${letter}${id}`: (id/10>1)? `${letter}0${id}` : `${letter}00${id}`  ;
        }
        
    };

    public static initilizedLastEmployeeID = () =>{
        let lastEmployeeID : string ;
        employee.findOne({}).sort({id:-1}).limit(1).then((data)=>{
            lastEmployeeID = JSON.stringify(data);
            console.log(lastEmployeeID);
        });

    }

}


export default generate;