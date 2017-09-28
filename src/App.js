import React, { Component } from 'react';

import './App.css';

var people = require('./people.json'); 
var showList;
var current = people;
var temp = people;

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			femalesOnly:false,
			searchResults: false
			
		};
		this.getPeople = this.getPeople.bind(this);
		this.getFemales = this.getFemales.bind(this);
		this.changeState = this.changeState.bind(this);
		this.doSearch = this.doSearch.bind(this);
		
		
	}
	changeState(){
		this.setState({femalesOnly:!(this.state.femalesOnly)})

		if(!this.state.femalesOnly){
			this.getFemales();
		}
		else{
			this.getPeople();
		}
	}
	doSearch(event){



		this.setState({searchResults:true});
		var updatedList = temp;
		var queryText = event.target.value;		

		console.clear();
		console.log("Query Text Value:" + queryText);

		updatedList = updatedList.filter(function(person){
			if(person.name.first.toLowerCase().indexOf(queryText)!==-1){
				return person;
			}				
			else{
				return null;
			}
		});
		current = updatedList;

	}
	getFemales(){
		var updatedList = current;
		updatedList = updatedList.filter(function(person){
			if(person.gender === "female"){
				return person;
			}
			else{
				return null;
				
			}
		});

		temp = current = updatedList;
	
		
	}
	getPeople(){
		temp = current = people;
	
	}
	render() {
	
	
		showList = current.map(function(person,i){
			return <tr key={i}><td>{person.name.first}</td><td>{person.name.last}</td></tr> ;
		})
	
		return (
			<div className="App">

				<div className="container">
					
					<div className="row">
						<div className="col s8">
							<br/><br/><br/>
							<div className="row">
								
								<input className="col s6 offset-s3" type="text" ref="searchInput" placeholder="Search Name" value={this.state.queryText} onKeyUp={this.doSearch}/>
								<i class="material-icons valign-wrapper">search</i>

							</div>
							<div className="row">
								<form className="col s6 offset-s4 amber-accent-4">
									<p>
									<input type="checkbox" onChange = {this.changeState} id="test5" />
									<label for="test5">Show Females Only</label>
									</p>
								</form>
							</div>
							
							<br/>

							<table className="striped">
								<thead>
									<tr>
									<th><b>First Name</b></th>
									<th><b>Last Name</b></th>
									</tr>
								</thead>
								<tbody>
									{showList}
								</tbody>
							</table>
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
