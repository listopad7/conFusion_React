import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


    function RenderDish({dish}){
        return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>);
    }



    function RenderComments({comments}){
            const comment = comments.map((comment) => {
            let commentDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)));
            return(<div>
                        <li className='no_bullet text-center text-md-left'>{comment.comment}</li>
                        <li className='no_bullet text-center text-md-left'>--{comment.author}, {commentDate}</li>
                        <br></br>
                    </div>);
            });

            return(
                <div className="col-12 col-md-5 m-1">
                    <h2 className={"text-md-left"}>Comments</h2>
                    <br></br>
                    <ul className="list-unstyled">
                        {comment}
                    </ul>
                </div>);
        }


    const DishDetail = (props) => {
        if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderDish dish = {props.dish} />
                        <RenderComments comments = {props.dish.comments} />

                    </div>
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }


export default DishDetail;

