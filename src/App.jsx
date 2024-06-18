import {useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [ip, setIp] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://api-v1.com/v1/sV3.php?key=PI6");
      const jsonData = await data.json();
      console.log(jsonData);
      setIp(jsonData);

      
    };
    fetchData();
  }, []);

  return (
  <>
  
 <h1>{ip.A}</h1>
 <h1>{ip.B}</h1>
 <h1>{ip.F}</h1>
 <h1>{ip.L}</h1>
 <h1>{ip.M}</h1>
 <h1>{ip.R}</h1>
 <h1>{ip.S}</h1>
 <h1>{ip.a}</h1>
 <h1>{ip.ats}</h1>
 <h1>{ip.b}</h1>
 <h1>{ip.c}</h1>
 <h1>{ip.cb}</h1>
 <h1>{ip.ce}</h1>
 <h1>{ip.d}</h1>
 <h1>{ip.e}</h1>
 <h1>{ip.f}</h1>
 <h1>{ip.g}</h1>
 <h1>{ip.h}</h1>
 <h1>{ip.i}</h1>
 <h1>{ip.j}</h1>
 <h1>{ip.k}</h1>
 <h1>{ip.l}</h1>
 <h1>{ip.m}</h1>
 <h1>{ip.ms}</h1>
 <h1>{ip.n}</h1>
 <h1>{ip.n1}</h1>
 
  </>
  );
}

export default App;
