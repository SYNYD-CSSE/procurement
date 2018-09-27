import React,{Component} from 'react';
import { Link } from "react-router-dom";
import { Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane ,Card ,Table , CardBody , CardHeader} from 'reactstrap';
import classnames from 'classnames';
import SupplierItems from './SupplierItems';
import NewSupplierRating from './NewSupplierRating';
import BlacklistedSuppliers from './BlacklistedSuppliers';



class SupplierRating extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1',
          suppliers:[]
        };
      }
    
      componentWillMount(){

        // fetch(`/api/prescriptions/${this.state.user.pid}/${this.state.user.bht}`)
   
        fetch(`/suppliers`)
   
           .then(res=>res.json())
            .then(suppliers=> this.setState({suppliers},()=> console.log(suppliers)));
   
     }

      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab,
          });
          this.forceUpdate()
        }
      }
      
  
    render(){
      
      var supplierItems = this.state.suppliers.map((suppliers,i)=>{

        return(
          <SupplierItems key={suppliers.id} item={suppliers}/>
        )
      });

      var ratesupplierItems = this.state.suppliers.map((suppliers,i)=>{

        return(
          <NewSupplierRating key={suppliers.id} item={suppliers}/>
        )
      });

      var blacklistedsupplierItems = this.state.suppliers.map((suppliers,i)=>{

        return(
          <BlacklistedSuppliers key={suppliers.id} item={suppliers}/>
        )
      });
      
        return(
  
            <div className="animated fadeIn">
     
            <Nav tabs>
            <NavItem>
            <NavLink 
            className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() => { this.toggle('1'); }}>
            Suppliers Rating</NavLink>
            </NavItem>
            <NavItem>
            <NavLink 
             className={classnames({ active: this.state.activeTab === '2' })}
            onClick={() => { this.toggle('2'); }}>
            Rate Suppliers</NavLink>
            </NavItem>
            <NavItem>
            <NavLink 
            className={classnames({ active: this.state.activeTab === '3' })}
            onClick={() => { this.toggle('3'); }}
            >Black-Listed Suppliers</NavLink>
            </NavItem>
            </Nav>

            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
              <Card>
              {/* <CardHeader>
                <i className="fa fa-align-justify"></i> Simple Table
              </CardHeader> */}
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>Supplier ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Rating</th>
                  </tr>
                  </thead>
                  <tbody>
                    {supplierItems}
                  </tbody>
                </Table>
                </CardBody>
                </Card>
              </TabPane>


              <TabPane tabId="2">
              <Card>
              {/* <CardHeader>
                <i className="fa fa-align-justify"></i> Simple Table
              </CardHeader> */}
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>Supplier ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Rating</th>
                  </tr>
                  </thead>
                  <tbody>
                    {ratesupplierItems}
                  </tbody>
                </Table>
                </CardBody>
                </Card>
              </TabPane>


              <TabPane tabId="3">
              <Card>
              {/* <CardHeader>
                <i className="fa fa-align-justify"></i> Simple Table
              </CardHeader> */}
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>Supplier ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Rating</th>
                  </tr>
                  </thead>
                  <tbody>
                    {blacklistedsupplierItems}
                  </tbody>
                </Table>
                </CardBody>
                </Card>
              </TabPane>
            </TabContent>
          

                
          
              </div>
            );
       }
  }
  
  
  export default SupplierRating; 	
  