import React from 'react'

import Navbar from './Navbar';
import Footer from './Footer';

function Layout(props) {
	return (
		<React.Fragment>
		  <Navbar></Navbar>
		  {props.children};
		  <Footer></Footer>
		</React.Fragment>
	)
}

export default Layout;
