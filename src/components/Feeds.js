import React, { Component } from "react";
import { uuid } from "uuidv4";

import Comments from "../Pages/Comments";
import "./Feeds.css";

class Feeds extends Component {
    state = {
        comments: []
    }


    addComment = (e) => {
        if (e.key  === "Enter") {
            const newComment = {
                id: uuid(),
                name: "Heejun_sh",
                content: e.target.value
            };
    
            this.setState({
                comments: [...this.state.comments, newComment]
            });

            e.target.value = "";
            console.log(this.state.comments);
        }
    }

    delComment = (id) => {
        this.setState({
            comments: [...this.state.comments.filter( comment =>
                comment.id !== id )]
        });
    }

    render() {        
        return (
            <div className="Feeds">
                <article>
                    <div className="user-info">
                        <img className="user-icon" alt="" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=pMFzm___by4AX_UwKzj&amp;oh=1f43052b988a743dcec0a426718bc3d0&amp;oe=5EAD3CF0"/>
                        <div className="name-wrapper">
                            <div className="name">wecode_bootcamp</div>
                            <div className="place">WeCode - 위코드</div>
                        </div>
                    </div>
                    <img className="post-img" sizes="614px" srcSet="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/91377248_241942573517354_6919474882519895636_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_cat=102&amp;_nc_ohc=kMVTseS-vgUAX_qCDrm&amp;oh=dcb9f1e0f6af8617f501b4459b852299&amp;oe=5EAFC854 640w,https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/91377248_241942573517354_6919474882519895636_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_cat=102&amp;_nc_ohc=kMVTseS-vgUAX_qCDrm&amp;oh=64c9ceb437f305ca20783934ce47055f&amp;oe=5EAFA3D4 750w,https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/91377248_241942573517354_6919474882519895636_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_cat=102&amp;_nc_ohc=kMVTseS-vgUAX_qCDrm&amp;oh=e8eb09262f1f0303bd6fe89f1e95c1aa&amp;oe=5EAD0B37 1080w" alt="" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/91377248_241942573517354_6919474882519895636_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_cat=102&amp;_nc_ohc=kMVTseS-vgUAX_qCDrm&amp;oh=e8eb09262f1f0303bd6fe89f1e95c1aa&amp;oe=5EAD0B37" /* style={{object-fit: "cover"}} */ />
                    <div className="functions">
                        <button><img alt="" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/></button>
                        <button><img alt="" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comments.png"/></button>
                        <button><img alt="" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"/></button>
                        <button><img alt="" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"/></button>
                    </div>
                    <div className="comments">
                        <div className="who-like">
                            <img className="user-icon" alt="" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/79032451_1024247761261668_6529838955649564672_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=80po79CpBeAAX-SvcO7&amp;oh=c74fda79df0a70f6ff5caea8bcfc7242&amp;oe=5EAF0756"/>
                            <div className="text">
                                <span className="name">rampart81</span>님
                                <span className="like-num">외 44명</span>이 좋아합니다.
                            </div>
                        </div>
                        <Comments style={{marginTop:"10px"}}
                            comments={this.state.comments} 
                            delComment={this.delComment} />
                    </div>
                    <div className="input-comments">
                        <input className="input" onKeyUp={this.addComment} type="text" placeholder="댓글 달기..."/>
                        <button className="input-button" onClick={this.addComment} disabled>게시</button>
                    </div>
                </article>
            </div>
        );
    }
}

export default Feeds;
