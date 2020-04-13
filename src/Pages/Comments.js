import React, { Component } from 'react'

import CommentItem from "./CommentItem";

class Comments extends Component {
    render() {        
        return this.props.comments.map((comment) => (
            <CommentItem comment={comment}
                delComment={this.props.delComment} />
        ));
    }
}

export default Comments
