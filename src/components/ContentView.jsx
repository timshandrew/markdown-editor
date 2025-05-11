export default function ContentView({ heading, children }) {
  return (
    <section className="flex-1 first:border-300 first:border-e-1">
      <h2 className="bg-200">{heading}</h2>
      {children}
    </section>
  );
}
