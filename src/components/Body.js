import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


import Userslist from './Userlist';
import Userprofile from './Userprofile';


const Body = (props) => {
	const [activeTab, setActiveTab] = useState('1');

	const toggle = tab => {
	    if(activeTab !== tab) setActiveTab(tab);
	}

	return (
		<>
		<Nav variant="tabs" defaultActiveKey="/user-list" onSelect={(selectedKey) => toggle(selectedKey) }>
		  <Nav.Item>
		    <Nav.Link eventKey="user-list" href="/user-list">Users List</Nav.Link>
		  </Nav.Item>
		  <Nav.Item>
		    <Nav.Link eventKey="userprofile" href="/userprofile">User Profile</Nav.Link>
		  </Nav.Item>
		</Nav>
	    <div className="card">
	    <div className="card-body table-responsive">
		    <Switch>
				<Route path="/userprofile" exact component={Userprofile} />
				<Route path="/" exact component={Userslist} />
				<Route path="/user-list" exact component={Userslist} />
				<Route render={() => <h1>Page not foung</h1>} />
			</Switch>
		</div>
		</div>
		</>
    );
};

export default Body;