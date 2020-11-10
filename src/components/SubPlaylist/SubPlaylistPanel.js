import React from 'react';
//import { Link } from 'react-router-dom';

import SubPlaylistListItem from './SubPlaylistListItem';

const SubPlaylistPanel = ({ subPlaylists, isLoading = false }) => {
	//console.log('SubPlaylistPanel:subPlaylists', subPlaylists);
	
	return (
		<section>
			<h4>Youtube Playlists</h4>

			{ isLoading && <div>loading...</div> }

			<ul>
				{ subPlaylists && Array.from(subPlaylists).map(subPlaylist => {

					return (<li key={subPlaylist.id}>
						<SubPlaylistListItem subPlaylist={subPlaylist} />
					</li>)

				})}
			</ul>
		</section>
	);
}

export default SubPlaylistPanel;