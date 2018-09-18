import employee from "../models/employee";
class generate {
    

    public static lastEmployeeID : string;

    constructor(){
        generate.initilize();
    }

    public * newID(lastID:String) {

        let id:number = parseInt( lastID.substring(1));
        let letter:string = lastID.charAt(0);

        while (1) {
            id++;
            yield (id/100>1)? `${letter}${id}`: (id/10>1)? `${letter}0${id}` : `${letter}00${id}`  ;
        }
        
    };

    public static initilize = () =>{
        generate.initilizeLastEmployeeID();
    }

    public static initilizeLastEmployeeID = () =>{

        employee.findOne({}).sort({id:-1}).limit(1).then((data)=>{
            generate.lastEmployeeID =  (data==null)? null : data.id;
        });

    }

}


export default generate;

