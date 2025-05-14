import { ContentContext } from "../contexts/ContentContext";

export default function ContentView({ heading, content, children }) {
  return (
    <ContentContext.Provider value={content}>
      <section className="row-span-2000 row-start-1 grid grid-rows-subgrid first-of-type:border-300 first-of-type:border-e-1 last-of-type:col-span-2 last-of-type:col-start-[-3] last-of-type:grid-flow-col last-of-type:grid-cols-subgrid">
        <h2 className="bg-200 text-500 text-heading-s p-3 uppercase">
          {heading}
        </h2>
        {children}
      </section>
    </ContentContext.Provider>
  );
}
