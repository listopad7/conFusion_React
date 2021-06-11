import React, { Component } from 'react';
import '../index.css';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, ListGroup, ListGroupItem
} from 'reactstrap';


class DishDetail extends Component{

    constructor(props) {
        super(props);
    }

    renderComments(dish){
        const comments = dish.comments.map((comment) => {
            let commentDate = (new Date(comment.date)).toDateString();
            return(<div>
                        <li className='no_bullet text-center text-md-left'>{comment.comment}</li>
                        <li className='disc text-center text-md-left'>{comment.author}, {commentDate}</li>
                    </div>);
        });

        if (dish != null) {
            return(<ul>
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
                        <h2>Comments</h2>
                            {this.renderComments(dish)}


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

