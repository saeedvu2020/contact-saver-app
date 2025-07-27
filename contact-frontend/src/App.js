import { useState, useEffect } from "react";

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const fetchContacts = async () => {
    const res = await fetch("http://localhost:5000/api/contacts");
    const data = await res.json();
    setContacts(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    setName("");
    setEmail("");
    fetchContacts();
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Contact Saver</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <button type="submit">Save</button>
      </form>
      <ul>
        {contacts.map((c, i) => (
          <li key={i}>{c.name} – {c.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
