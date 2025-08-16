export function EmailTemplate({ name, email, message }) {
  return (
    <div>
      <h1>Pesan Baru dari {name}</h1>
      <p>Email: {email}</p>
      <p>Isi Pesan:</p>
      <div
        style={{
          padding: "1rem",
          margin: "1rem 0",
          borderLeft: "4px solid #3b82f6",
          background: "#f8fafc",
        }}
      >
        {message}
      </div>
    </div>
  );
}
