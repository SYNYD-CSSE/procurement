import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import alertify from "alertifyjs";

class Supplier extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state= {
       supplierStatus : this.props.status,
       isActive : false
      } ;

    this.deleteSupplier = this.deleteSupplier.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.inactiveButton = this.inactiveButton.bind(this);
    this.activeButton = this.activeButton.bind(this);
  }

  deleteSupplier(event) {
    event.preventDefault();
    axios
      .delete("http://localhost:5000/suppliers/" + this.props.supplierId)
      .then(res => {
        alertify.notify("Supplier Deleted!", "success", 5, function() {
          console.log("dismissed");
        });
      })
      .catch(err => console.log(err));
  }

  updateStatus(event){
    event.preventDefault();
    let status ;
    if(this.state.supplierStatus === 'Active'){
        status = 'Inactive';
    }else{
        status = 'Active';
    }
    axios.put("http://localhost:5000/suppliers/supplier/status/"+this.props.supplierId, {
      status
    }).then(result => {
      console.log(result);
      alertify.notify(" Supplier Updated!", "success", 5, function() {
        console.log("dismissed");
        window.location.reload();

      });
    });
   // this.props.history.push("/viewSupplier");
  }

  activeButton(props){
    return <div>
      <form onSubmit={this.updateStatus}><input type="submit" value="Active" className="btn btn-success" /></form>
    </div>;
  }

  inactiveButton(props){

    return <div><form onSubmit={this.updateStatus}>
    <input type="submit" value="Inactive" className="btn btn-danger" />
  </form></div>
   ;
  }

  render() {
   // const supplierStatus = this.props.status;
    
    if(this.state.supplierStatus === 'Active'){
   //   console.log('isactive '+ this.state.supplierStatus);
      this.state.isActive = true;
    }else{
  //    console.log('isactive '+ this.state.supplierStatus);
      this.state.isActive =false;
    }
//console.log('isActive'+this.state.isActive); 
    return (
      <tr>
        <td>{this.props.supplierId}</td>
        <td>{this.props.name}</td>
        <td>{this.props.address}</td>
        <td>{this.props.email}</td>
        <td>
          {this.state.isActive  ? (
              <this.activeButton/>
          ) : ( 
              <this.inactiveButton/>
          )
          }
        </td>
        <td>

          <Link
            to={"/updateSupplier/" + this.props.supplierId}
            className="btn btn-primary">
            Edit
          </Link>
        </td>
        <td>
          <form onSubmit={this.deleteSupplier}>
            <input type="submit" value="Delete" className="btn btn-danger" />
          </form>
        </td>
      </tr>
    );
  }
}

export default Supplier;
