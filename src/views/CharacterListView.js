import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
// import actions
import { getCharacters } from '../actions';

class CharacterListView extends React.Component {
	componentDidMount() {
		this.props.getCharacters();
		// call our action
	}

	render() {
		if (this.props.fetching) {
			return <h1>Your data is being fetched!</h1>;
			// return something here to indicate that you are fetching data
		}
		return (
			<div className='CharactersList_wrapper'>
				<CharacterList characters={this.props.characters} />
			</div>
		);
	}
}
const mapStateToProps = state => ({
	error      : state.charsReducer.error,
	fetching   : state.charsReducer.fetching,
	characters : state.charsReducer.characters,
});
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps /* mapStateToProps replaces null here */, {
	getCharacters /* action creators go here */,
})(CharacterListView);
