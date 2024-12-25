import React from "react";

import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-400 text-white p-4 text-3xl">
      Github:{data.followers}
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/atharva020");
  return res.json();
};
