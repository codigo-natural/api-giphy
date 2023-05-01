import { useEffect, useState } from "react";
// const API_CAT = "https://catfact.ninja/fact";
// const GIPHY_API_KEY = "z1cPPAsMkKWSfcaPS2Xax95xLDUrWjsg";
// const GIPHY_API = `https://api.giphy.com/v1/gifs/search?q=${string}&api_key=${GIPHY_API_KEY}`;

export const App = () => {
  const GIPHY_API_KEY = "z1cPPAsMkKWSfcaPS2Xax95xLDUrWjsg";
  const [catFact, setCatFact] = useState("");
  const [catGif, setCatGif] = useState("");
  const CALL_GIPHY_API = (string) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${string}&api_key=${GIPHY_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("gif", data.data[0].images.original.url);
        setCatGif(data.data[0].images.original.url);
      });
  };

  const CALL_API_CAT = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        setCatFact(data.fact || "No fact");
        CALL_GIPHY_API(data?.fact?.split(" ", 3).join(" "));
        console.log(data.fact);
      });
  };
  useEffect(CALL_API_CAT, []);

  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <h1>{catFact}</h1>
      <img src={catGif} alt="" style={{objectFit: "contain", width: "200px", height: "200px"}} />
    </div>
  );
};
