import React, {Component} from "react";
import './index.scss';
import {Row, Col, Table, Tabs, Tab, Button, Modal, Form} from 'react-bootstrap'


class App extends Component {
    /*** ================================================================================
     *          Main
     * ================================================================================*/
    constructor(props, context) {
        super(props, context);
        this.state = {
            addNew: false,
        };
    }
    componentDidMount() {

    }
    /*** ================================================================================
     *          HANDLE
     * ================================================================================*/
    handleAddNew = (e) => {
        console.log(this.state)
        this.setState({addNew: !this.state.addNew});
    };
    render() {
        return (
            <div className={"LandingContainer"}>

                <Tabs defaultActiveKey="prod" id="uncontrolled-tab-example">
                    <Tab eventKey="prod" title="Товары">
                        <div className={"tabAdmin"}>
                            <div>
                                <Button variant="warning" onClick={() => this.handleAddNew()}>Добавить</Button>
                            </div>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Tab>
                    <Tab eventKey="cat" title="Категории">

                    </Tab>
                </Tabs>

                <Modal show={this.state.addNew} onHide={() => this.handleAddNew} size="lg">
                    <Modal.Header>
                        <Modal.Title>Добавить товар</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>ASDasd</Form.Label>
                            <Form.Control type="text" placeholder="Password" />
                        </Form.Group>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => this.handleAddNew()}>Закрыть</Button>
                        <Button variant="warning">Сохранить</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}
export default App