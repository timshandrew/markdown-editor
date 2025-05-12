export default function ContentView({ heading, children }) {
  return (
    <section className="row-span-2 grid grid-rows-subgrid first:border-300 first:border-e-1">
      <h2 className="bg-200 text-500 text-heading-s uppercase">{heading}</h2>
      {children}
    </section>
  );
}
