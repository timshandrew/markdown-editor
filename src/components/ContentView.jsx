import { ContentContext } from "../contexts/ContentContext";

export default function ContentView({ heading, content, children }) {
  return (
    <ContentContext.Provider value={content}>
      <section className="row-span-2000 grid grid-rows-subgrid first-of-type:border-300 first-of-type:border-e-1">
        <h2 className="bg-200 text-500 text-heading-s p-3 uppercase">
          {heading}
        </h2>
        {children}
      </section>
    </ContentContext.Provider>
  );
}
