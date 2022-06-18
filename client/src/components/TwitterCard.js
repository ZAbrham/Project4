import React from "react";

const styles = {
  cardOuter: {
    width: 200,
    borderRadius: 15,
    height: 250,
    backgroundColor: "pink",
    color: "grey",
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "",
    textAlign: "center",
    overflow: "hidden",
    cursor: "pointer",
  },
  cardInnerTop: {
    display: "flex",
    height: "70%",
    flexDirection: "column",
    justifyContent: "flex-end",
    fontSize: "0.8rem",
    padding: "0 5px",
    color: "white",
  },
  cardInnerBottom: {
    display: "flex",
    height: "30%",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: "0.8rem",
    backgroundColor: "white",
    padding: "0 5px",
  },
};

const TwitterCard = ({
  handle,
  name,
  tweets,
  following,
  followers,
  profile,
}) => {
  return (
    <a href={`https://twitter.com/${handle}`} target="__blank">
      <div style={styles.cardOuter}>
        <div
          style={Object.assign({}, styles.cardInnerTop, {
            backgroundImage: `url(${profile})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
          })}
        >
          <h4>{name}</h4>
          <h5>@{handle}</h5>
        </div>
        <div style={styles.cardInnerBottom}>
          <p>
            Tweets
            <br />
            {tweets}
          </p>
          <p>
            Following
            <br />
            {following}
          </p>
          <p>
            Followers
            <br />
            {followers}
          </p>
        </div>
      </div>
    </a>
  );
};

export default TwitterCard;
