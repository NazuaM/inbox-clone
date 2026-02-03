import React, { useState} from "react";

function App() {
  const [emails, setEmails] = useState([
    { id: 1, sender: "ali@example.com", subject: "Meeting Tomorrow", date: "2025-08-28", status: "sent" },
    { id: 2, sender: "fatima@example.com", subject: "Invoice", date: "2025-08-27", status: "sent" },
    { id: 3, sender: "rafay@example.com", subject: "Project Update", date: "2025-08-26", status: "failed" },
  ]);

const [subject, setSubject] = useState("");
const [sender, setSender] = useState("");
const [status, setStatus] = useState("sent"); // default

function handleSubmit(e) {
   e.preventDefault(); // prevent page reload

     const newEmail = {
    id: emails.length + 1,
    sender,
    subject,
    date: new Date().toISOString().slice(0, 10),
    status,
  };

  setEmails([...emails, newEmail]);
   // Clear the form
    setSender("");
    setSubject("");
    setStatus("sent");
}

  return (
    <div>
      <h2>Inbox 📩</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Sender" value={sender} onChange={(e) => setSender(e.target.value)} required />
        <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="sent">Sent</option>
          <option value="failed">Failed</option>
        </select>
        <button type="submit">Add Email</button>
      </form>
     
      <ul>
        {
          emails.map((email) => {
            return (
              <li key={email.id}>
                <strong>{email.subject}</strong> - {email.sender} - {email.date} - {email.status}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default App;
