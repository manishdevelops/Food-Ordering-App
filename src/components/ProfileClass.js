import React from 'react';
import UserContext from '../utils/UserContext';

class ProfileClass extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h2>Profile Class Component</h2>
				<h3>{this.props.name}</h3>
				<UserContext.Consumer>
					{(value) => console.log(value)}
				</UserContext.Consumer>
			</div>
		);
	}
}

export default ProfileClass;
