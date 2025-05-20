import { ContentContext } from "../contexts/ContentContext";

export default function ContentView({ heading, content, children, className }) {
  return (
    <ContentContext.Provider value={content}>
      <section
        className={`my-dark-theme:first-of-type:border-600 row-span-2000 row-start-1 grid grid-rows-subgrid first-of-type:border-300 first-of-type:border-e-1 ${className}`}
      >
        <h2 className="my-dark-theme:bg-900 bg-200 text-500 my-dark-theme:text-400 text-heading-s p-3 uppercase">
          {heading}
        </h2>
        {children}
      </section>
    </ContentContext.Provider>
  );
}
