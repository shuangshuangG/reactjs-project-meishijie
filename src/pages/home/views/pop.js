import { Popover, NavBar } from 'antd-mobile';
import React from 'react';
import Head from './header'

const Item = Popover.Item;

const myImg = src => <img src={src} className="am-icon am-icon-xs" alt="" />;
class App extends React.Component {
  state = {
    visible: false,
    selected: '',
  };
  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  render() {
    return (<div>
      <NavBar
        mode="light"
        rightContent={
          <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            overlay={[
              (<Item key="4" value="scan" icon={myImg('https://static.meishij.net/wap7/images/sys_pic@3x.png')} style={{ whiteSpace: 'nowrap', backgroundColor: '#333', color: '#fff' }} data-seed="logId">晒作品</Item>),
              (<Item key="5" value="special" icon={myImg('https://static.meishij.net/wap7/images/sys_sc@3x.png')} style={{ whiteSpace: 'nowrap', backgroundColor: '#333', color: '#fff' }}>传菜谱</Item>)
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [-20, 0],
            }}
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect}
            placement='bottomLeft'
          >
            <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center',
            }}
            >
              {/* <Icon type="ellipsis" /> */}
              <img src="https://s1.c.meishij.net/wap7/images/index_icon_photo@3x.png" alt="" style={{
                    position: 'absolute', top: 0, right: 0, height: 46, width: 55
                  }}/>
            </div>
          </Popover>
        }
      >
        {<Head/>}
        {/* NavBar */}
      </NavBar>
    </div>);
  }
}

export default App