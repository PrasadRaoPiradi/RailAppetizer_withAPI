import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./styles.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// const products = [
//   { id: 321, name: "Item list", price: 1200 , status:"Out for Delivery"},
//   { id: 256, name: "Item list", price: 102 , status:"Delivered"},
//   { id: 2654, name: "Item list", price: 1200 , status:"Preparing"}

// ];

let selectedData = ""




export class OrderStatus extends Component {
  
  constructor() {
    
    super();
    this.state = {      
      show: false,
      isOpen: false,
      
      // For displaying data
      columns: [
        {
          dataField: "id",
          text: "Order Id",
          sort: true
        },
        {
          dataField: "name",
          text: "Name",
          sort: true
        },
        {
          dataField: "price",
          text: "Product Price"
        },
        {
          dataField: "follow",
          text: "View Details",
          formatter: this.linkFollow,
          sort: true
        }
      ],
      isFollow: true
    };

    this.onFollowChanged.bind(this);
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  
  onFollowChanged(row) {
    this.setState({ isFollow: !this.state.isFollow });
    console.log(this.state.isFollow, row);
  }

  linkFollow = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Button
        onClick={(e) => {
          selectedData = JSON.stringify(row);         
         
         this.openModal();
          this.onFollowChanged(row);
        }}
      >
        Confirm Order
      </Button>
    );
  };

  render() {    
  
  
    return (
      <div style={{ padding: "2px" }}>
        <h1 className="h2">Online Orders</h1>
        {sessionStorage.getItem('trackOrder') !== null &&    
          <BootstrapTable
            keyField="id"
            data={[JSON.parse(sessionStorage.getItem('trackOrder'))]}
            columns={this.state.columns}
          />
        }
        {sessionStorage.getItem('trackOrder') === null &&  
                <div> 
                <br></br> 
                <br></br> 
                <br></br> 
                <br></br> 
                <h6>No New Orders</h6>
                </div>
  }
         <>
  
      <Modal
        show={this.state.isOpen}
        onHide={this.closeModal}
        backdrop="static"
        keyboard={false}
        data="mydata"
      >
        <Modal.Header closeButton>
          <Modal.Title>Order Number #1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Order Details will be shown here. 
          <p>{selectedData}</p>
        </Modal.Body>y
        <Modal.Footer>
          <Button variant="success"  onClick={() => {
            this.closeModal()
            let p = JSON.parse(selectedData)
            p.status = "Preparing now"
            console.log(p.status + "SHaan")
           // JSON.parse(selectedData).status = "Preparing"
            sessionStorage.setItem("trackOrder", JSON.stringify(p))
            window.location.reload(false)
    }}
          
          >
            Accept
          </Button>
          <Button variant="primary" onClick={this.closeModal}>Reject</Button>
        </Modal.Footer>
      </Modal>
    </>
      </div>
    );
  }
}

    