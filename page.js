"use client";

import { useState } from "react";

export default function Home() {

  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  async function sendData() {
    setLoading(true);
    setError(null);
    setResponseData(null);

    try {
      const response = await fetch("http://localhost:5678/webhook/cdss-intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          patient: "52 year old male chest discomfort while walking",
          notes: "BP 150/95",
          genes: "{}"
        })
      });

      const data = await response.json();
      setResponseData(data);
    } catch (err) {
      setError("Something went wrong connecting to n8n.");
    }

    setLoading(false);
  }

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>CDSS App 🚀</h1>

      <button 
        onClick={sendData}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        {loading ? "Sending..." : "Send to n8n"}
      </button>

      {error && (
        <div style={{ color: "red" }}>
          {error}
        </div>
      )}

      {responseData && (
        <pre style={{
          background: "#f4f4f4",
          padding: "15px",
          borderRadius: "8px",
          overflowX: "auto"
        }}>
          {JSON.stringify(responseData, null, 2)}
        </pre>
      )}
    </div>
  );
}
