import React, { Component } from "react";
import twitter from "../assets/twitter.png";
import List from "./List";
import "./twitter.css";

class Twitter extends Component {

  //TODO this component should have the following props:
  // handleSubmit, handleChange and state
  // the state should have the following properties and initial values:
  //loading (false), query (empty string) and userList (empty Array)
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      query:"",
      userList: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSort = this.handleSort.bind(this)
  }

  // TODO complete the handleSubmit handler
  // it should make a get request from http://localhost:4000/api/users/{query}
  handleSubmit() {
    this.setState({loading:true});
    fetch('http://localhost:4000/api/users/' + this.state.query)
      .then((data) => {
        return data.json();
      })
      .then((data)=>{
        this.setState({loading:false, userList: data.data});
        console.log(data.data)
      }).catch((error) => {
        this.setState({loading:false, userList: []});
        console.log(error)
      });
  }


  //TODO implement the handeSort handler
  // for the sort by Name option they should appear in alphabetical order
  // for the sort by tweets option they should appear in descending order (highest number
  // of tweets should appear first)
  // for the sort by followers option they should appear in descending order (highest number
  // of followers should appear first)
  handleSort(sorter) {
    let sortBy = sorter.target.value;
    if(sortBy == "name"){
      let temp = this.state.userList.sort((user1, user2) => {
        if(user1.name > user2.name){
          return 1;
        }else if(user1.name < user2.name){
          return -1;
        }else{
          return 0;
        }
      })
      this.setState({userList:temp});
    } else if(sortBy == "tweets"){
      let temp = this.state.userList.sort((user1, user2) => {
        if(user1.statuses_count > user2.statuses_count){
          return -1;
        }else if(user1.statuses_count < user2.statuses_count){
          return 1;
        }else{
          return 0;
        }
      })
      this.setState({userList:temp});
    } else if(sortBy == "followers"){
      let temp = this.state.userList.sort((user1, user2) => {
        if(user1.followers_count > user2.followers_count){
          return -1;
        }else if(user1.followers_count < user2.followers_count){
          return 1;
        }else{
          return 0;
        }
      })
      this.setState({userList:temp});
    }
  }

  //TODO implement handleChange handler
  handleChange(e) {
    this.setState({query:e.target.value});
  }

  // TODO add the appropriate listeners and handlers to the <input>, <button> and
  // List component
  // Hint - you need to pass props to the List component as well
  render() {
    return (
      <div className="App">
        <article className="App-header">
          <img src={twitter} className="logo" alt="logo" />
          <p>Search for users on Twitter:</p>
          <div className="search-container">
            <input
              type="text"
              name="search"
              id="search"
              className="search-box"
              placeholder="Type text here"
              onChange = {this.handleChange}
            />
            <button className="search-button" onClick = {this.handleSubmit}>
              Search
            </button>
          </div>
          {this.state.loading ? (
            <h3>Loading...</h3>
          ) : this.state.userList === [] ? (
            <h3>No Users Found</h3>
          ) : (
            <>
              <List result={this.state.userList} handleSort = {this.handleSort}/>
            </>
          )}
        </article>
      </div>
    );
  }
}

export default Twitter;
