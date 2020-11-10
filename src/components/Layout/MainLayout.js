import React from 'react';

import SubscriptionDashboard from '../Subscriptions/Dashboard';
import NavBarContainer from '../Containers/NavBarContainer';

const MainLayout = () => {

	return (
		<div className="container">
			<div className="row flex-row-reverse">

				<header className="col-sm-2 panel-header">
					<NavBarContainer />
				</header>

				<div className="col-sm-10">
					<SubscriptionDashboard />
				</div>
			</div>
		</div>
	);
}

export default MainLayout;