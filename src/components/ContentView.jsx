import { ContentContext } from "../contexts/ContentContext";

export default function ContentView({
  heading,
  content,
  children,
  fullWidthPreview,
  className,
}) {
  if (heading == "Preview" && fullWidthPreview) {
    className = "col-start-1 col-end-[-1]";
  } else if (heading == "Markdown" && fullWidthPreview) {
    className = "hidden";
  }

  return (
    <ContentContext.Provider value={content}>
      <section
        className={`col-span-2 row-span-2000 row-start-1 grid grid-rows-subgrid first-of-type:border-300 first-of-type:border-e-1 ${className}`}
      >
        <h2 className="bg-200 text-500 text-heading-s p-3 uppercase">
          {heading}
        </h2>
        {children}
      </section>
    </ContentContext.Provider>
  );
}
