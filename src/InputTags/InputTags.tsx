import React, {useState, useEffect} from 'react'
import '../syles/style.css';

interface ITagsProps {
    tags: string[];
    updateTags: (tags: string[]) => void;

};

export const InputTags = (props: ITagsProps) => {

  const [input, setInput] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [isKeyReleased, setIsKeyReleased] = useState(false);

  useEffect(() => {
    setTags(props.tags);
  },[]);

  useEffect(() => {
    console.log("mostrando tags ",tags);
  },[tags]);

  const onChange = (e: { target: HTMLInputElement; }) => {
    const { value } = e.target as HTMLInputElement;
    setInput(value);
  };

  const onKeyDown = (e: { preventDefault?: any; key?: any; }) => {
    const { key } = e;
    const trimmedInput = input.trim();
  
    if (key === ',' || key === 'Enter'  && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      setTags(prevState => [...prevState, trimmedInput]);
      setInput('');
    }
  
    if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      e.preventDefault();
      setTags(tagsCopy);
      setInput(poppedTag as string);
    }
  
    setIsKeyReleased(false);
  };
  
  const onKeyUp = () => {
    setIsKeyReleased(true);
  }

  const deleteTag = (index: number) => {
    setTags(prevState => prevState.filter((tag, i) => i !== index))
  }

  return (
    <div className="container">  
        {tags.map((tag: string, index: number) => (
            <div className="tag" key={tag}>
                {tag}
                <button onClick={() => deleteTag(index)}>x</button>
            </div>
        ))}
        <input
            value={input}
            placeholder="Enter a tag"
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onChange={onChange}
        />
</div>
  )
}
