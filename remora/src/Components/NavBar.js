import React, {Component} from 'react';

export default class NavBar extends Component {
	render() {
		return (
			<nav class="navbar navbar-expand">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="/">mutually</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="/">Home</a></li>
                        <li><a href="#/requests">Request</a></li>
                        <li><a href="#/contribute">Contribute</a></li>
                        <li><a href="#/vote">Vote</a></li>
                    </ul>
                </div>
            </nav>
		);
	}
}
