import Chat from "@/components/Chat";

export default function Home() {
  return (
    <main className="app">
      <header className="header">
        <h1>
          <span className="dot" /> Claude Chat
        </h1>
        <p>A full-stack chat UI powered by the Anthropic Claude API.</p>
      </header>
      <Chat />
    </main>
  );
}
