import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

interface Props {
  isMobile: boolean;
  pathname: string;
  onMenuClick?: Function;
}

// config menus
const menuItems = [
  {
    id: '/home',
    label: 'Home',
    icon: 'home',
    path: '/home'
  },
  {
    id: 'users',
    label: '用户管理',
    icon: 'user',
    path: '/users',
    sub: [
      { id: '/users/customer', label: '前台用户', path: '/users/customer' },
      { id: '/users/admin', label: '后台用户', path: '/users/admin' }
    ]
  }
];

const getDefaultSelectedKey = (pathname: string) => {
  const initStr = '/home';

  const arr = pathname.split('/');
  if (arr.length > 1) {
    const k = arr[1];
    return k ? pathname : initStr;
  }
  return pathname;
};

const getDefaultOpenedKey = (s: string) => {
  let str = '';
  const k = s.split('/')[1] || null;
  if (k) {
    try {
      menuItems.forEach(m => {
        if (m.id === k && m.sub) {
          str = m.id;
          throw new Error('exit-forEach');
        }
      });
    } catch (e) {
      if (e.message !== 'exit-forEach') {
        throw e;
      }
    }
  }
  return str;
};

class MenusComponent extends React.Component<Props, {}> {

  handleMenuClick = () => {
    const { onMenuClick } = this.props;
    if (onMenuClick) {
      onMenuClick();
    }
  }

  render() {
    const { isMobile } = this.props;
    const defaultSelectKey = getDefaultSelectedKey(this.props.pathname);
    const defaultOpenKey = getDefaultOpenedKey(defaultSelectKey);

    return (
      <Menu
        theme={isMobile ? 'light' : 'dark'}
        mode="inline"
        defaultOpenKeys={[defaultOpenKey]}
        selectedKeys={[defaultSelectKey]}
      >
        {menuItems.map(i => (
          i.sub ?
            <Menu.SubMenu
              key={i.id}
              title={<span><Icon type={i.icon} /><span>{i.label}</span></span>}
            >
              {i.sub.map(sub => (
                <Menu.Item key={sub.id}>
                  <Link to={sub.path} onClick={this.handleMenuClick}>
                    {sub.label}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
            :
            <Menu.Item key={i.id}>
              <Link to={i.path} onClick={this.handleMenuClick}>
                <Icon type={i.icon} />
                <span>{i.label}</span>
              </Link>
            </Menu.Item>))}
      </Menu>
    );
  }
}

export default MenusComponent; 
