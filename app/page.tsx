import Counter from "../components/Counter";
export default function Home() {
  return (
    <main style={{ padding: "2rem", textAlign: "center"}}>
      <h1>Next.js Button Counter</h1>
      <Counter />
      <Counter initialCount={5} initialStep={2} />
    </main>
  );
}