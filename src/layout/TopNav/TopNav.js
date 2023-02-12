import { SettingFilled } from "@ant-design/icons";
import { Button, Col, Modal, Row, Slider } from "antd";
import React from "react";
import { PlayerContext } from "../../context/PlayerContextProvider";

const TopNav = () => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);

	const { slowedAmount, reverbAmount, setSlowedAmount, setReverbAmount } =
		React.useContext(PlayerContext);

	return (
		<>
			<div className="flex justify-between items-center">
				<h1 className="m-0">Slow + Reverb</h1>

				<Button
					type="text"
					shape="circle"
					onClick={() => setIsModalOpen(true)}
					size="large"
					className="flex justify-center items-center"
				>
					<SettingFilled />
				</Button>
			</div>
			<Modal
				title="Effects Settings"
				open={isModalOpen}
				onCancel={() => setIsModalOpen(false)}
				footer={null}
				closable
			>
				<Row>
					<Col span={4}>Slowed</Col>
					<Col span={20}>
						<Slider
							min={0}
							max={1}
							onChange={(value) => {
								setSlowedAmount(value);
							}}
							value={slowedAmount}
							step={0.05}
						/>
					</Col>
					<Col span={4}>Reverb</Col>
					<Col span={20}>
						<Slider
							min={0.01}
							max={5}
							onChange={(value) => {
								setReverbAmount(value);
							}}
							value={reverbAmount}
							step={0.05}
						/>
					</Col>
				</Row>
			</Modal>
		</>
	);
};

export default TopNav;