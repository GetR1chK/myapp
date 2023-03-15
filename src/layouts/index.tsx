import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'umi';
import type { MenuProps } from 'antd';

const { Sider, Header, Content, Footer } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  childern?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    childern,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Home', '1', <Link to="/"></Link>),
  getItem('Docs', '2', <Link to="/docs"></Link>),
];

export default function BasicLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        ></Menu>
      </Sider>
      <Layout>
        <Header></Header>
        <Content>
          <Outlet />
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
}
