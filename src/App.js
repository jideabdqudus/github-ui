import React, { useEffect, useState } from "react";
import TheTabs from "./components/TheTabs";
import Navbar from "./layout/Navbar";
import "./App.css";
import axios from "axios";

const App = () => {
  const [data, setData] = useState("");
  const [repos, setRepos] = useState("");
  const [loading, setLoading] = useState(false);
  //const [alert, setAlert] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios("https://api.github.com/users/jideabdqudus");

      const repositories = await axios(
        "https://api.github.com/users/jideabdqudus/repos"
      );

      setData(result.data);
      setRepos(repositories.data);
      setLoading(false);
    };

    fetchData();
  }, []);
  //Set Alert
  // const showAlert = (msg, type) => {
  //   setAlert({ msg, type });

  //   setTimeout(() => setAlert(null), 3000);
  // };

  return (
    <div>
      <Navbar />
      <TheTabs data={data} repos={repos} loading={loading} />
    </div>
  );
};

export default App;
