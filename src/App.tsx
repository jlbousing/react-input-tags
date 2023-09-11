import React, {useState, useEffect} from 'react';
import { InputTags } from './TagsInput/InputTags';

function App() {
  
  
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const firstData = ["tag1","tag2","tag3"];

    setTags(firstData);

  },[]);
  
  return (
    <div className="App">
      <div className='app-container'>
        <div className='app-input-container'>
        <InputTags
          tags={tags} 
          updateTags={setTags}
        />
        </div>
      </div>

    </div>
  );
}

export default App;
