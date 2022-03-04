import React, { useState, useEffect } from "react";
import axios from "axios";

export const Context = React.createContext();

export function ContextController({ children }) {
  let intialState = {
    track_list: [],
    heading: "",
  };

  const [state, setState] = useState(intialState);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=US&f_has_lyrics=1&apikey=ccbd5850fa5229291c6f6572d9fad3dd`
      )
      .then((res) => {
          console.log(res);
        setState({
          track_list: res.data.message.body.track_list,
          heading: "Top 10 tracks",
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
