import React, { useState } from "react";

export default function SportsFestivalApp() {
  const [tab, setTab] = useState("fixtures");

  const fixtures = [
    { id: 1, sport: "Rugby", teams: "Team A vs Team B", time: "10:00 AM" },
    { id: 2, sport: "Netball", teams: "Team C vs Team D", time: "11:00 AM" },
  ];

  const results = [
    { id: 1, sport: "Rugby", teams: "Team A vs Team B", score: "15 - 10" },
    { id: 2, sport: "Netball", teams: "Team C vs Team D", score: "20 - 18" },
  ];

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        color: "#fff",
        backgroundColor: "#1a1a1a",
        minHeight: "100vh",
      }}
    >
      <h1>Penryn Rugby & Netball Festival</h1>
      <div>
        <button onClick={() => setTab("fixtures")}>Fixtures</button>
        <button onClick={() => setTab("results")}>Results</button>
      </div>
      {tab === "fixtures" &&
        fixtures.map((match) => (
          <div
            key={match.id}
            style={{
              border: "1px solid white",
              padding: "10px",
              margin: "10px",
            }}
          >
            <p>{match.sport}</p>
            <p>{match.teams}</p>
            <p>{match.time}</p>
          </div>
        ))}
      {tab === "results" &&
        results.map((match) => (
          <div
            key={match.id}
            style={{
              border: "1px solid white",
              padding: "10px",
              margin: "10px",
            }}
          >
            <p>{match.sport}</p>
            <p>{match.teams}</p>
            <p>Score: {match.score}</p>
          </div>
        ))}
    </div>
  );
}
