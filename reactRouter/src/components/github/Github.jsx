import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Github = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/atharva020")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-400 text-white p-4 text-3xl">
      Github:{data.followers}
    </div>
  );
};

export default Github;
