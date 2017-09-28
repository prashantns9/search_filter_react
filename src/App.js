import React, { Component } from 'react';

import './App.css';
import Data from './data/data.js';



class App extends Component {


	
	render(){

	
		return (
			<div className="App">

				<div className="container">
					
					<div className="row">
						<div className="col s8">
							<br/><br/><br/>
							<Data></Data>
						</div>

						<div className="col s3 offset-s1">
							<br/>
							<br/>
							<h5>Prashant Shinde</h5>
							<h6>Web Developer, Pune.</h6>
							<p><b>Projects:</b> <a href="http://www.github.com/prashantns9" target="_new">github.com/prashantns9</a></p>
							<p><b>Portfolio:</b> <a href="http://www.prashantshinde.info" target="_new">www.prashantshinde.info</a></p>
						</div>

					</div>
				</div>
			</div>
		);
		
	
	}
}




export default App;
