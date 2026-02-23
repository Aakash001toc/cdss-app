"use client";

export default function Home() {

  async function sendData() {
    const response = await fetch("PASTE_YOUR_N8N_WEBHOOK_URL_HERE", {
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

    const result = await response.json();
    console.log(result);
    alert("Sent to n8n 🚀");
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>CDSS App 🚀</h1>
      <button onClick={sendData}>
        Send to n8n
      </button>
    </div>
  );
}
