import { Layout } from "antd";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Player from "../../components/Player";
import SplashScreen from "../../pages/SplashScreen/SplashScreen";
import BottomNav from "../BottomNav";
import SideNav from "../SideNav";

const { Header, Footer, Sider, Content } = Layout;

const AppLayout = () => {
	return (
		<Layout className="h-screen">
			<Header>Header</Header>
			<Layout>
				<Sider
				// breakpoint="sm" collapsedWidth="0"
				>
					<SideNav />
				</Sider>
				<Content>
					<Suspense fallback={<SplashScreen />}>
						<Outlet />
					</Suspense>
				</Content>
			</Layout>
			<Footer>
				<Player />
				<BottomNav />
			</Footer>
		</Layout>
	);
};

export default AppLayout;
