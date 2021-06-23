import React, { Component } from 'react';
import {
    Button, Row, Col, Label, ModalHeader, ModalBody, Form, FormGroup, Input, Modal
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentComponent extends Component{

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            rating:'',
            yourname:'',
            comment:'',
            touched: {
                rating: false,
                yourname: false,
                comment: false
            }
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        alert('Current State is: ' + JSON.stringify(values));
        //event.preventDefault();

    }



    render(){

        return(
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody className="m-3">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating"
                                                placeholder="Rating"
                                                className="form-control">
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </Control.select>

                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="yourname">Your Name</Label>
                                <Control.text model=".yourname" id="yourname" name="yourname"
                                              placeholder="First Name"
                                              className="form-control"
                                              validators={{
                                                  minLength: minLength(3), maxLength: maxLength(15)
                                              }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".yourname"
                                    show="touched"
                                    messages={{
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                                  rows="6"
                                                  className="form-control" />
                            </Row>

                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>

                    </ModalBody>
                </Modal>
            </div>
        )
    }



}

export default CommentComponent;

