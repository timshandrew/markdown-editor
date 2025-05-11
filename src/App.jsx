import ContentView from "./components/ContentView";
import Header from "./components/Header";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from "./components/MarkdownPreview";
import PreviewToggle from "./components/PreviewToggle";

function App() {
  return (
    <div>
      <Header />

      <main className="flex">
        <PreviewToggle />

        <ContentView heading="Markdown">
          <MarkdownEditor />
        </ContentView>

        <ContentView heading="Preview">
          <MarkdownPreview />
        </ContentView>
      </main>
    </div>
  );
}

export default App;
