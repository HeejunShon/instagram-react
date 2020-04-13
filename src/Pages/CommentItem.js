import React, { Component } from 'react'

class CommentItem extends Component {
    divStyle = () => {
        return {
            margin: "0",
        }
    }

    btnStyle = () => {
        return {
            background: "gray",
            color: "#fff",
            border: "none",
            margin: "2px 3px",
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            cursor: "pointer",
            float: "right"
        }
    }


    render() {
        const { id, name, content } = this.props.comment;

        return (  
            <div style={this.divStyle()}>
                <p>
                    <span>{ name }</span> { content }
                    <button onClick={this.props.delComment.bind(this, id)} style={this.btnStyle()}>x</button>
                </p>
            </div>
        )
    }
}

export default CommentItem
