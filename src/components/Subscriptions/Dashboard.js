import React from 'react';

import SubPlaylistPanelContainer from '../Containers/SubPlaylistPanelContainer';

const Dashboard = () => {

	return (
		<div className="row">

			<aside className="col-sm-3 panel-aside">
				<SubPlaylistPanelContainer />
			</aside>

			<div className="col-sm-9 col-12 panel-content">
				content
			</div>

		</div>
	);
}

export default Dashboard;