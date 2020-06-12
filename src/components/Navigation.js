import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const navigation = (props) => {
	//console.log(props);
	return (
	    <ListGroup>
			<ListGroup.Item><NavLink exact to="/user-list" ><i className="fa fa-leaf"></i></NavLink></ListGroup.Item>
			<ListGroup.Item><NavLink exact to="/user-list" ><i className="fa fa-eye"></i></NavLink></ListGroup.Item>
			<ListGroup.Item><NavLink exact to="/userprofile" ><i className="fa fa-id-card"></i></NavLink></ListGroup.Item>
		</ListGroup>
    );
};

export default navigation;