import React,{Component} from 'react';
import { Link } from "react-router-dom";
import { Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane ,Card ,Table , CardBody , CardHeader} from 'reactstrap';
import classnames from 'classnames';
import ChangeItems from './ChangeItems';

const user = JSON.parse(localStorage.getItem('user'));
const token = JSON.parse(localStorage.getItem('token'));



class Changes extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          orders:[],
          items:[]
        };

      }
    
      componentDidMount(){

        // fetch(`/api/prescriptions/${this.state.user.pid}/${this.state.user.bht}`)

        const {orderId} =this.props.match.params;
   
        fetch(`/orders/${orderId}`,{
          headers: {
            'Authorization': token
          }
        })
           .then(res=>res.json())
            .then(orders=> this.setState({items:orders.items},()=> console.log(orders)));
            
          //console.log('order mapped');
          //this.setState({this.state.items})) 
         // this.setState({items:this.state.orders.items});
         // console.log(this.state.items);
      
     }


      
  
    render(){
      // //this.setState({items:this.state.orders.items})
      
      var changeItems = this.state.items.map((items,i)=>{

        return(
          <ChangeItems key={i} item={items}/>
        )
      });
      // let recipesCopy = JSON.parse(JSON.stringify(this.state.items))
       console.log(this.state.items);

      
        return(
  
            <div className="animated fadeIn">
     
     
              <Card>
              {/* <CardHeader>
                <i className="fa fa-align-justify"></i> Simple Table
              </CardHeader> */}
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>Item ID</th>
                    <th>Item Name</th>
                    <th>Unit</th>
                    <th>Quantity</th>
                  </tr>
                  </thead>
                  <tbody>
                  {changeItems}
                  </tbody>
                </Table>
                </CardBody>
                </Card>
          
              </div>
            );
       }
  }
  
  
  export default Changes; 	
  