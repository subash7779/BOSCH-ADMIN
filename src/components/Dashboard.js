import React from 'react';
import { withRouter	} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';


import Header from './Header';
import Navigation from './Navigation';
import Body from './Body';

const dashboard = (props) => {
//	console.log(props);
	return (
		<>
			<div className="wrapper">
				<Header/>
				<div className="container-fluid">
					<Row>
						<Col md={1} id="leftpabel">
							<Navigation/>
						</Col>
						<Col md={11}>
							<Body/>
						</Col>
					</Row>
				</div>
			</div>

			
	    </>
    );
};

export default withRouter(dashboard);