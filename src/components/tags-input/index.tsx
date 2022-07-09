import * as React from "react";
import styles from "./styles.module.css";

type Props = {
  tags: string[];
  onAdd: (tag: string) => void;
  onRemove: (tag: string) => void;
};

export const TagsInput: React.FC<Props> = (props) => {
  const { tags, onAdd, onRemove } = props;

  const [value, setValue] = React.useState("");

  const handleAddTag = (tag: string) => {
    if (tags.includes(tag)) {
      return;
    }

    onAdd(tag);
  };

  const handleRemoveTag = (tag: string) => {
    onRemove(tag);
  };

  return (
    <div className={styles.tagsContainer}>
      {tags.map((tag) => (
        <span className={"badge"} key={tag}>
          {tag} <button onClick={() => handleRemoveTag(tag)}>x</button>
        </span>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTag(value);
          setValue("");
        }}
      >
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </form>
    </div>
  );
};

export const useTags = () => {
  const [tags, setTags] = React.useState<string[]>([]);

  const handleAddTag = (tag: string) => {
    setTags([...tags, tag]);
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return { tags, handleAddTag, handleRemoveTag };
};
