import React from 'react';
import { Link } from 'react-router-dom';

const SubPlaylistListItem = ({ subPlaylist }) => {
	//console.log('SubPlaylistListItem:subPlaylist', subPlaylist);

	return (
		<Link to={`/subPlaylist/${subPlaylist.id}`} className="nav-link">
			{subPlaylist.title}
		</Link>
	);
}

export default SubPlaylistListItem;