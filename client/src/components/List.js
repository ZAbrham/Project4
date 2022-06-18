import React from "react";
import TwitterCard from "./TwitterCard";
import "./list.css";

class List extends React.Component {
  //TODO add an appropriate event and handler to the select tag
  //Also inside of the div that has a className of "output" you need
  // to map over the result variable defined inside of the render method
  // and have it render a TwitterCard component for each object in the result
  // collection. You will need to pass in the following properties from each object:
  // handle, name, tweets, following, followers and profile.
  // NOTE: you will need to assign a key prop to each instance of the TwitterCard component 
  // that is unique. To accomplish this, recall that the map method on a collection can take a second 
  // parameter that is the index into the collection
 
  render() {
    let { result } = this.props;
    if(result != undefined){
      if(result.length != 0){
        let list = result.map( (item, index) => {
          return (
            <TwitterCard key = {index}
              handle = {item.screen_name}
              name ={item.name}
              tweets = {item.statuses_count}
              followings = {item.friends_count}
              followers = {item.followers_count}
              profile = {item.profile_image_url_https}
            />
          )
        })
        return (
          <>
            {result.length > 0 ? (
              <div>
                <label htmlFor="sortby">Sort By: </label>
                <select
                  name="sortby"
                  id="sortby"
                  onChange = {this.props.handleSort}
                >
                  <option value="select">Select...</option>
                  <option value="name">Name</option>
                  <option value="followers">Followers</option>
                  <option value="tweets">Tweets</option>
                </select>
              </div>
            ) : null}
            <div className="output">
              {list}
            </div>
          </>
        );

      }else{
        return (<h3>No Users Found</h3>)
      }
      
    }else{
      return (<h3>Invalid Search</h3>)
    }
  }
}

export default List;
