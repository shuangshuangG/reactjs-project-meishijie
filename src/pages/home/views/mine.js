import React, { Component } from 'react'

export default class test extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="mine">
                <p className="mineHead">
                    <img onClick={this.handelBanck.bind(this)} src="https://static.meishij.net/wap6/images/back_icon.png" alt="" style={{
                        position: 'absolute', top: 2, left: 10, height: 46, width: 20
                    }}/><span onClick={this.handelBanck.bind(this)} style={{fontSize: 16, color: '#ff5151', position: 'absolute', left: 32}}>返回</span>
                    登录美食杰
                    <span style={{fontSize: 16, color: '#ff5151', position: 'absolute', right: 10}}>注册</span>
                </p>
                
                <form className="mineInp">
                    <input type="text" placeholder="手机号/邮箱/用户名"/>
                    <input type="password" placeholder="密码" />
                </form>

                <div className="mineLogin">
                    <button>登录</button>
                    <p>忘记密码？</p>
                </div>

                <div className="mineLink">
                    <a>
                        <img src="https://static.meishij.net/wap6/images/QQ_login@3x.png" alt=""/>
                        <span>QQ登录</span>
                    </a>
                    <a>
                        <img src="https://static.meishij.net/wap6/images/weibo_login@3x.png" alt=""/>
                        <span>微信登录</span>
                    </a>
                </div>
            </div>
        )
    }

    handelBanck() {
        this.props.history.goBack()
    }
}