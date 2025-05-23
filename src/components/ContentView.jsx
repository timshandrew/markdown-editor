import { ContentContext } from "../contexts/ContentContext";

export default function ContentView({ heading, content, children, className }) {
  return (
    <ContentContext.Provider value={content}>
      <section
        className={`bg-background first-of-type:border-border row-span-2000 row-start-1 grid grid-rows-subgrid first-of-type:border-e-1 ${className}`}
      >
        <h2 className="bg-background-header text-text-secondary text-heading-s p-3 uppercase">
          {heading}
        </h2>
        {children}
      </section>
    </ContentContext.Provider>
  );
}
