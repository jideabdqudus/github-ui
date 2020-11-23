import React, { useEffect, useState } from "react";
import TheTabs from "./components/TheTabs";
import Navbar from "./layout/Navbar";
import "./App.css";
import axios from "axios";

const App = () => {
  const [data, setData] = useState("");
  const [repos, setRepos] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.github.com/users/jideabdqudus");

      const repositories = await axios(
        "https://api.github.com/users/jideabdqudus/repos"
      );

      setData(result.data);
      setRepos(repositories.data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <TheTabs data={data} repos={repos} />
    </div>
  );
};

export default App;
