import React, { Component,Fragment } from 'react';
import { TabBar, Grid } from 'antd-mobile';
import { BrowserRouter as Router} from 'react-router-dom';

import Carouser from './carousel'
import Pop from './pop'
// import Food from '../../food/views/food';

import { Ui as Food } from '../../food/'

export default class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab'
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: '#f5f5f5', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 0 }}>{pageText}</div>
      </div>
    );
  }

  render() {
    console.log(this.props)
    return (
      <Router>
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0, backgroundColor: '#fff' }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={false}
        >
          <TabBar.Item
            title="推荐"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://static.meishij.net/wap7/images/tabbar_01@3x.png) center center /  26px 26px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://static.meishij.net/wap7/images/tabbar_01ed@3x.png) center center /  26px 26px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            {this.renderContent(
              <Fragment>
                <div style={{position: 'fixed',width: '100%',zIndex: 4, backgroundColor: '#f5f5f5'}}>
                  <img src="https://s1.c.meishij.net/wap7/images/ms_mail2@3x.png" alt="" style={{
                    position: 'absolute', top: 0, right: 0, height: 46, width: 55
                  }}/>
                  <Pop></Pop>
                </div>

                <Carouser data={this.props.data.bannerData}/>

                <Grid
                  data={this.props.data.itemData}
                  columnNum={4}
                  hasLine={false}
                  itemStyle={{padding: 0}}
                />

                <div style={{padding: 15}}>
                  <p style={{fontSize: 18}}>今日推荐</p>
                  <img src="http://s1.ig.meishij.net/p/20180118/cbce1ba0d1a50c644f85529544c655d6.jpg" alt=""  style={{width: '100%'}}/>
                  <img src="http://s1.st.meishij.net/p2/20180117/20180117120526_397.jpg" alt=""  style={{width: '100%', marginTop: 8, marginBottom: 8}}/>
                  <img src="http://s1.st.meishij.net/p2/20180117/20180117134928_194.jpg" alt=""  style={{width: '100%'}}/>
                </div>

                <div style={{overflow: 'hidden',paddingLeft: '50%', marginBottom: 10}}>
                  <div style={{overflow: 'hidden', width: 130, transform: 'translate(-50%)', textAlign: 'center'}}>
                    <img src="https://static.meishij.net/wap7/images/home_title_love@3x.png" style={{width: 35, height: 35,float: 'left'}} alt=""/>
                    <div style={{float: 'left', marginLeft: 10}}>
                      <span style={{fontSize: 18}}>猜你喜欢</span><br/>
                      <em style={{fontStyle: 'normal', fontSize: 10, color: '#999'}}>09:56为您更新</em>
                    </div>
                  </div>
                </div>

                <ul className="list">
                  <li>
                    <img src="https://s1.st.meishij.net/r/72/43/4073322/a4073322_153233753656428.jpg" alt=""/>
                    <span>傣味酸笋炒木耳</span>
                  </li>
                  <li>
                    <img src="https://s1.st.meishij.net/r/216/197/6174466/a6174466_153115065804909.jpg" alt=""/>
                    <span>辣椒炒茄子</span>
                  </li>
                  {this.props.data.recommedData.map((val, index) => (
                    <li key={index}>
                      <img src={val.img} alt=""/>
                      <span>{val.title}</span>
                    </li>
                  ))}
                </ul>
              </Fragment>
            )}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://static.meishij.net/wap7/images/tabbar_02@3x.png) center center /  26px 26px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://static.meishij.net/wap7/images/tabbar_02ed@3x.png) center center /  26px 26px no-repeat' }}
              />
            }
            title="发现"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent(
              <Fragment>
                <p
                   style={{position: 'fixed',width: '100%',zIndex: 4, backgroundColor: '#fefefe', margin: 0, height: 44, lineHeight: 2.5, fontSize: 18}}
                >发现最热门<img src="https://s1.c.meishij.net/wap7/images/ms_mail2@3x.png" alt=""
                  style={{position: 'absolute', top: 0, right: 0, height: 46, width: 55}}
                /></p>

                <div className="findSmallPic">
                  <img src="https://static.meishij.net/wap7/images/ms_home_find_shicai@3x.png" alt=""/>
                  <img src="https://static.meishij.net/wap7/images/ms_home_find_caidan@3x.png" alt=""/>
                  <img src="https://static.meishij.net/wap7/images/ms_home_find_zhuanti@3x.png" alt=""/>
                  <img src="https://static.meishij.net/wap7/images/ms_home_find_wenzhang@3x.png" alt=""/>
                </div>

                <ul className="findList">
                  {
                    this.props.data.findData.map((val, index) => (
                      val.class === "type1" ? (
                        <li className="type1" key={index}>
                          <p>{val.title}<br/><span>{val.lip}</span></p>
                          <img src={val.img} alt=""/>
                        </li>
                      ) : (
                        <li className="type2" key={index}>
                          <p>{val.title}<br/><span>{val.lip}</span></p>
                          <img src={val.img} alt=""/>
                          <div className="findListMsg">
                            <h3>{val.msg}</h3>
                            <div className="start">
                            {
                              Array.from(new Array(val.start)).map((val, index) => (
                                <img key={index} src="https://static.meishij.net/wap7/images/all_star_h@3x.png" alt=""/>
                              ))
                            }
                            </div>
                            <p><img src="https://static.meishij.net/wap7/images/cp_con_icon_sj@3x.png" alt=""/>{val.stap}</p>
                            <p><img src="https://static.meishij.net/wap7/images/cp_con_icon_kw@3x.png" alt=""/>{val.type}</p>
                          </div>
                        </li>
                      )
                    ))
                  }
                </ul>
              </Fragment>
            )}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://static.meishij.net/wap7/images/tabbar_04@3x.png) center center /  26px 26px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://static.meishij.net/wap7/images/tabbar_04ed@3x.png) center center /  26px 26px no-repeat' }}
              />
            }
            title="食话"
            key="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
          
          <div style={{position: 'relative',width: '100%',zIndex: 4, backgroundColor: '#fefefe'}}>
              <img src="https://s1.c.meishij.net/wap7/images/index_icon_photo@3x.png" alt="" style={{
                position: 'absolute', top: 0, left: 0, height: 44, width: 55
              }}/>
              <p style={{fontSize: 18, color: '#000', margin: 0, lineHeight: 2.5, height: 44, textAlign: 'center'}}>食话</p>
              <img src="https://s1.c.meishij.net/wap7/images/search_topbar@3x.png" alt="" style={{
                position: 'absolute', top: 0, right: 45, height: 44, width: 55
              }}/>
              <img src="https://s1.c.meishij.net/wap7/images/home_talk_attention@3x.png" alt="" style={{
                position: 'absolute', top: 0, right: 10, height: 44, width: 38
              }}/>
          </div>

          <div style={{ backgroundColor: '#f5f5f5', height: '100%', textAlign: 'center', position: 'absolute', paddingTop: 94, bottom: 50, width: '100%' }}>
            <div style={{ paddingTop: 0 }}>{<Food/>}</div>
          </div>

          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://static.meishij.net/wap7/images/tabbar_05@3x.png' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              console.log(this.props)
              this.props.history.push("/user")
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
            >
          </TabBar.Item>
        </TabBar>
            
      </div>
            </Router>
    );
  }

  componentDidMount() {
    // console.log(this.props)
    this.props.getData()
    this.props.getFind()
  }
};
