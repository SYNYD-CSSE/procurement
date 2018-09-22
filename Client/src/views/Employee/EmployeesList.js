import React, { Component } from 'react';
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  PaginationLink,
  PaginationItem,
  Table,
  Pagination,
  Row,
} from 'reactstrap';

class EmployeesList extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="6">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> List of Employees
                </CardHeader>
                <CardBody>
                  <Table responsive hover>
                    <thead>
                    <tr>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Role</th>
                      <th>Site</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Samith Dilshan</td>
                      <td>Katuawan Rd, Homagama</td>
                      <td>samithdilsh@gmail.com</td>
                      <td>0779955111</td>
                      <td>
                        <Badge color="success">Management</Badge>
                      </td>
                      <td>Kollupitiya</td>
                    </tr>
                    <tr>
                      <td>Kirito Okazaki</td>
                      <td>Kandy Rd, Battaramulla</td>
                      <td>yasirutit1@gmail.com</td>
                      <td>0778855222</td>
                      <td>
                        <Badge color="info">Site Manager</Badge>
                      </td>
                      <td>Battaramulla</td>
                    </tr>
                    <tr>
                      <td>Supun Dileepa</td>
                      <td>Maharagama Rd, Horana</td>
                      <td>supundileepa@gmail.com</td>
                      <td>0772252575</td>
                      <td>
                        <Badge color="warning">Constructor</Badge>
                      </td>
                      <td>Battaramulla</td>
                    </tr>
                    <tr>
                      <td>Vimukthi Thenuka</td>
                      <td>Awissawella Rd, Delgoda</td>
                      <td>vimukthithenuka@gmail.com</td>
                      <td>0772252575</td>
                      <td>
                        <Badge color="warning">Constructor</Badge>
                      </td>
                      <td>Battaramulla</td>
                    </tr>
                    <tr>
                      <td>Bimali</td>
                      <td>Diyathawa Rd, Badulla</td>
                      <td>bimaliyapa@gmail.com</td>
                      <td>0789985584</td>
                      <td>
                        <Badge color="warning">Constructor</Badge>
                      </td>
                      <td>Kollupitiya</td>
                    </tr>
                    <tr>
                      <td>Nirmal Senevirathna</td>
                      <td>Kaduwela Rd, Battaramulla</td>
                      <td>nirmalseneviratna@gmail.com</td>
                      <td>0785774484</td>
                      <td>
                        <Badge color="danger">Accountant</Badge>
                      </td>
                      <td>Battaramulla</td>
                    </tr>
                    </tbody>
                  </Table>
                  <Pagination>
                    <PaginationItem>
                      <PaginationLink previous tag="button"></PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next tag="button"></PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </CardBody>
              </Card>
            </Col>
        </Row>
      </div>
    );
  }
}

export default EmployeesList;
