import "./App.css";
import { TagsInput, useTags } from "./components/tags-input";

function App() {
  const { tags, handleAddTag, handleRemoveTag } = useTags();

  return (
    <div className="App">
      <TagsInput onAdd={handleAddTag} onRemove={handleRemoveTag} tags={tags} />
    </div>
  );
}

export default App;
