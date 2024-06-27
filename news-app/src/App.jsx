import { useEffect, useState } from "react";
import axios from "axios";
import { countries } from "./constants";
import { languages } from "./constants";
import "./App.css"; // Importing CSS file for styles

function App() {
  const apiKey = "998223b3b927d767dc5b53c2750a0288";
  const [language, setLanguage] = useState("");
  const [country, setCountry] = useState("");
  const [search, setSearch] = useState("");
  const [finalResult, setFinalResult] = useState("");

  const getNews = async () => {
    if (!language || !country || !search) return;

    const url = `https://gnews.io/api/v4/search?q=${search}&lang=${language}&country=${country}&max=10&apikey=${apiKey}`;
    const res = await axios.get(url);
    console.log(res.data);
    setFinalResult(res.data);
  };

  return (
    <div className="container">
      <h1 className="title">Short News</h1>

      <div className="controls">
        <select
          className="dropdown"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        >
          <option value="" disabled selected>
            Select your Country
          </option>
          {countries
            ? Object.keys(countries).map((country) => {
                return (
                  <option key={country} value={countries[country]}>
                    {country}
                  </option>
                );
              })
            : null}
        </select>
        <select
          className="dropdown"
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
        >
          <option value="" disabled selected>
            Select your Language
          </option>
          {languages
            ? Object.keys(languages).map((language) => {
                return (
                  <option key={language} value={languages[language]}>
                    {language}
                  </option>
                );
              })
            : null}
        </select>
        <input
          className="input"
          type="text"
          placeholder="Search Here"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="button" onClick={getNews}>
          Get News
        </button>
      </div>

      {finalResult ? (
        <div className="results">
          <p>Total articles found: {finalResult.totalArticles}</p>
          {finalResult.articles.map((article, index) => {
            return (
              <div key={index} className="article">
                <h2 className="article-title">{article.title}</h2>
                <p className="article-content">{article.content}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-link"
                >
                  Read more
                </a>
                {article.image && (
                  <img
                    src={article.image}
                    alt="Article"
                    className="article-image"
                  />
                )}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default App;
