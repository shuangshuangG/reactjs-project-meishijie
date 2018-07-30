import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

export default class Carousels extends Component {
    
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }

  componentDidMount() {
      // simulate img loading
    setTimeout(() => {
        // console.log(this.props.data)
        this.setState({
            data: this.props.data
        });
    }, 100);
  }
  render() {
    return (
      <WingBlank style={{marginLeft: 0,marginRight: 0,paddingLeft: 15,paddingRight: 15,marginTop: 0,background: "#f5f5f5"}}>
        <Carousel
          autoplay={true}
          infinite
          dotStyle={{marginBottom: 10}}
          dotActiveStyle={{backgroundColor: "red", marginBottom: 10}}
        //   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        //   afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map((val, index) => (
            <div
              key={index}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight,position: 'relative' }}
            >
              <div style={{ width: '100%', height: 140, overflow: 'hidden', marginTop: 46 }}>
                  <img
                    src={val.img}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top', marginTop: -100, overflow: 'hidden' }}
                    onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: 130,
                    left: 20,
                    textAlign: 'left'
                }}>
                    <p style={{fontSize: 20,color: '#fff',margin: 0}}>{val.title}</p>
                    <p style={{fontSize: 12,color: '#fff',marginTop: 5}}>{val.msg}</p>
                </div>
              </div>
              <div style={{ width: '100%', height: 140, overflow: 'hidden',marginTop: 5, marginBottom: 5 }}>
                <img
                    src={val.img1}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top', marginTop: -100, overflow: 'hidden' }}
                    onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: 270,
                    left: 20,
                    textAlign: 'left'
                }}>
                    <p style={{fontSize: 20,color: '#fff',margin: 0}}>{val.title1}</p>
                    <p style={{fontSize: 12,color: '#fff',marginTop: 5}}>{val.msg1}</p>
                </div>
             </div>
             <div style={{ width: '100%', height: 140, overflow: 'hidden' }}>
                <img
                    src={val.img2}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top', marginTop: -100, overflow: 'hidden' }}
                    onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: 410,
                    left: 20,
                    textAlign: 'left'
                }}>
                    <p style={{fontSize: 20,color: '#fff',margin: 0}}>{val.title2}</p>
                    <p style={{fontSize: 12,color: '#fff',marginTop: 5}}>{val.msg2}</p>
                </div>
             </div>
             <div>
                 <p style={{fontSize: 16, marginBottom: 0}}>{val.type}</p>
                 <p style={{marginTop: 5, fontSize: 12, paddingBottom: 22}}>{val.typeMsg}</p>
             </div>
            </div>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}