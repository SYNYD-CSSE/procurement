import React, { Component } from "react";
import EmptyCart from "../Order/empty-states/EmptyCart";
class SentQuatation extends Component {
    constructor(props) {
        super(props);
        this.state = {manufacturer :'',
             category :'', 
             unitprice : 0, totalprice:0, ckboxValue : ''  ,
             localStorageItems : []
            }
            this.inputHandler = this.inputHandler.bind(this);
    }
  
    inputHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
      
      }

      checkboxClickHandler(){
        const { manufacturer, category, unitprice, totalprice } = this.state;

        const{ quantity, name} = this.props;

        // totalprice = unitprice*quantity;
        // this.setState({
        //     totalprice : totalprice 
        // })

        var arr = "{item : "+name+", unitprice:"+unitprice+", manufacturer:"+manufacturer+", category:"+category+", quantity:"+quantity+", totalValue:"+totalprice+"}";
        this.setState({
            ckboxValue : arr
        })
        localStorage.setItem("quoteitem",arr);
      }
      handleLangChange = () => {
        const { manufacturer, category, unitprice, totalprice } = this.state;

        const{ quantity, name} = this.props;

        var larr = localStorage.getItem("quoteitem");
        var temparr = [];
        if(larr !== ""){
            temparr.push(larr);
        }     
        

        var arr = "{item : "+name+", unitprice:"+unitprice+", manufacturer:"+manufacturer+", category:"+category+", quantity:"+quantity+", totalValue:"+totalprice+"}";
   temparr.push(arr);
   localStorage.setItem("quoteitem",temparr);
          
    }
    
      render() {
      //    console.log(this.state.localStorageItems);
  //      localStorage.setItem("quoteitem",this.state.localStorageItems);
        return (
            <tr>
                <td>
                    <input type="checkbox" name="checkbox" onClick={this.handleLangChange} value={this.state.ckboxValue} />
                </td>
             <td>
             {this.props.name} 
             <input type="hidden" text={this.props.name}  name="name" value=  {this.props.name} onChange={this.inputHandler}/>
            </td>
            <td>
            {this.props.quantity}
            <input type="hidden" text=  {this.props.quantity} name="quantity" value=  {this.props.quantity} onChange={this.inputHandler}/>
            </td>
  <td>
      <div className="form-group">
          <input type="text" className="form-control" name="manufacturer"  value={this.state.manufacturer} onChange={this.inputHandler} required/>
      </div>
  </td>
  <td>
      <div className="form-group">
          <input type="text" className="form-control" name="category"  value={this.state.category} onChange={this.inputHandler} required/>
      </div>
  </td>
  <td>
      <div className="form-group">
          <input type="number" className="form-control" name="unitprice" value={this.state.unitprice} onChange={this.inputHandler} required/>
      </div>
  </td>
  <td>
      <div className="form-group">
          <input type="number" className="form-control" name="totalprice" value={this.state.totalprice} onChange={this.inputHandler} required/>
      </div>
  </td>
            </tr>
          );
        
      }
}
 
export default SentQuatation;

