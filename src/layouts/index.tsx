import { Breadcrumb, Layout, Menu, theme } from 'antd';
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
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255,255,255,0.2)',
          }}
        ></div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        ></Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 16, background: colorBgContainer }}>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content style={{ margin: 16 }}>
          <div
            style={{
              padding: 24,
              minHeight: '50vh',
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
}
