import React, { Component } from 'react';
import '../index.css';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, ListGroup, ListGroupItem
} from 'reactstrap';


class DishDetail extends Component{

    /*constructor(props) {
        super(props);
    }*/

    renderComments(dish){
        const comments = dish.comments.map((comment) => {
            let commentDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)));
            return(<div>
                        <li className='no_bullet text-center text-md-left'>{comment.comment}</li>
                        <li className='no_bullet text-center text-md-left'>--{comment.author}, {commentDate}</li>
                        <br></br>
                    </div>);
        });

        if (dish != null) {
            return(<ul className="list-unstyled">
                    {comments}
                    </ul>)
        } else
            return(
                <div></div>
            );
        }


    render() {
        const dish = this.props.selectedDish;
        if (dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={dish.image} alt={dish.name}/>
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h2 className={"text-md-left"}>Comments</h2>
                            <br></br>
                                {this.renderComments(dish)}


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
}

export default DishDetail;

