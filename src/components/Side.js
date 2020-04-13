import React, { Component } from 'react'

import "./Side.css";

export class Side extends Component {
    render() {
        return (
            <div className="Side">
                <div className="user-info">
                    <img className="user-icon" alt="" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/84228473_191866755253655_2108532692671791104_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=UsCKVvza9EQAX_ggveD&amp;oh=aa0ea4333daafffa8ebeef3c58a88b99&amp;oe=5EAF69F0"/>
                    <div className="name-wrapper">
                        <div className="name">heejun_sh</div>
                        <div className="full-name">Heejun Shon</div>
                    </div>
                </div>
                <div className="story container">
                    <header>
                        <span>스토리</span>
                        <span>모두 보기</span>
                    </header>
                    <div className="story-wrapper">
                        <div className="user-info">
                            <img className="user-icon" alt="" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=pMFzm___by4AX_UwKzj&amp;oh=1f43052b988a743dcec0a426718bc3d0&amp;oe=5EAD3CF0"/>
                            <div className="name-wrapper">
                                <div className="name">wecode_bootcamp</div>
                                <div className="time">2시간 전</div>
                            </div>
                        </div>    
                        <div className="user-info">
                            <img className="user-icon" alt="" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=pMFzm___by4AX_UwKzj&amp;oh=1f43052b988a743dcec0a426718bc3d0&amp;oe=5EAD3CF0"/>
                            <div className="name-wrapper">
                                <div className="name">wecode_bootcamp</div>
                                <div className="time">2시간 전</div>
                            </div>
                        </div>    
                        <div className="user-info">
                            <img className="user-icon" alt="" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=pMFzm___by4AX_UwKzj&amp;oh=1f43052b988a743dcec0a426718bc3d0&amp;oe=5EAD3CF0"/>
                            <div className="name-wrapper">
                                <div className="name">wecode_bootcamp</div>
                                <div className="time">2시간 전</div>
                            </div>
                        </div>    
                        <div className="user-info">
                            <img className="user-icon" alt="" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=pMFzm___by4AX_UwKzj&amp;oh=1f43052b988a743dcec0a426718bc3d0&amp;oe=5EAD3CF0"/>
                            <div className="name-wrapper">
                                <div className="name">wecode_bootcamp</div>
                                <div className="time">2시간 전</div>
                            </div>
                        </div>    
                    </div>
                </div>

                <div className="recommendation container">
                    <header>
                        <span>회원님을 위한 추천</span>
                        <span>모두 보기</span>
                    </header>
                    <div className="user-info">
                        <img className="user-icon" alt="" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=pMFzm___by4AX_UwKzj&amp;oh=1f43052b988a743dcec0a426718bc3d0&amp;oe=5EAD3CF0"/>
                        <div className="name-wrapper">
                            <div className="name">wecode_bootcamp</div>
                            <div className="time">2시간 전</div>
                        </div>
                    </div>    
                </div>

                <footer>
                    <nav>
                        <ul>
                            <li>소개</li>
                            <li>도움말</li>
                            <li>홍보 센터</li>
                            <li>API</li>
                            <li>채용 정보</li>
                            <li>개인정보처리방침</li>
                            <li>약관</li>
                            <li>위치</li>
                            <li>인기 계정</li>
                            <li>해시태그</li>
                            <li>언어</li>
                        </ul>
                    </nav>
                    <span>© 2020 INSTAGRAM FROM FACEBOOK</span>
                </footer>
            </div>
        );
    }
}

export default Side;
