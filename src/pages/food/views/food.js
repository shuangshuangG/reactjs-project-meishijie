import React, { Component, Fragment } from 'react'
import { Carousel, WingBlank, Grid, PullToRefresh } from 'antd-mobile'
import ReactDOM from 'react-dom'


class food extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgHeight: 176,
            data: [1,2,3],
            refreshing: false,
            down: false,
            height: document.documentElement.clientHeight
        }
    }

    render() {
        console.log(this.props)
        return (
            <Fragment>
                <PullToRefresh
                    damping={60}
                    ref={el => this.ptr = el}
                    style={{
                        height: this.state.height,
                        overflow: 'auto',
                    }}
                    indicator={this.state.down ? {} : { deactivate: '上拉加载更多' }}
                    direction={this.state.down ? 'down' : 'up'}
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                        this.setState({ refreshing: true });
                        setTimeout(() => {
                            this.props.data.listData.push(
                                ...this.props.data.listData.slice(0,10)
                            )
                            this.setState({ refreshing: false });
                        }, 100);
                    }}
                >
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                        style={{marginBottom: 20}}
                        dotStyle={{top: 15, position: 'relative'}}
                        dotActiveStyle={{backgroundColor: "red", top: 15, position: 'relative'}}
                        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        // afterChange={index => console.log('slide to', index)}
                        >
                        {this.state.data.map((val, index) => (
                            <a
                            key={index}
                            href=""
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                            <img
                                src={val}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>

                <Grid
                  data={this.props.data.itemData}
                  columnNum={4}
                  hasLine={false}
                  itemStyle={{padding: 0}}
                />

                <div style={{width: '100%', background: '#fefefe'}}>
                    <div className="foodSwitch">
                        <span>最新</span>
                        <span>最热</span>
                    </div>
                </div>

                <ul className="foodList">

                {
                    this.props.data.listData.map((val, index) => (
                        <li key={index}>
                            <div className="left">
                                <img src={val.icon} alt=""/>
                            </div>
                            <div className="right">
                                <h3>{val.name}</h3>
                                <p className="lip">{val.time}<span>餐桌食光</span></p>
                                <p className="msg">{val.msg}</p>
                                <div className="imgList">
                                {
                                    val.imgs.map((value, index) => (
                                        <img key={index} src={value} alt=""/>
                                    ))
                                }
                                </div>
                                <div className="zan">
                                    <img src="https://static.meishij.net/wap5/images/comment24@3x.png" alt=""/><span>{val.num1}</span>
                                    <img src="https://static.meishij.net/wap5/images/heart24@3x.png" alt=""/><em>{val.num2}</em>
                                </div>
                            </div>
                        </li>
                    ))

                }
                </ul>

                </PullToRefresh>
            </Fragment>
        )
    }

    componentDidMount() {
        this.props.getBannerData()

        setTimeout(() => {
            // console.log(this.props.data)
            this.setState({
                ...this.state,
                data: this.props.data.bannerData,
                height: this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop
            });
        }, 10);

    }
}

export default food