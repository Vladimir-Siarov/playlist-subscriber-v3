import { connect } from 'react-redux';

import SubPlaylistPanel from '../SubPlaylist/SubPlaylistPanel';


const mapStateToProps = (state) => {
	return {
		subPlaylists: state.subPlaylist.playlists,
		isLoading: state.subPlaylist.isLoading
	}
}

export default connect(mapStateToProps, null)(SubPlaylistPanel);