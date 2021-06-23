import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentComponent from "./CommentComponent";



    function RenderDish({dish}){
        return(
        <div className>
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
                <div>
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
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} />
                            <CommentComponent />
                        </div>
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

