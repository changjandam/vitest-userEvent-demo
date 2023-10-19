import './App.css';

import { useState } from 'react';

function App({ mockFn }: { mockFn: () => void }) {
  const [val, setVal] = useState(false);

  return (
    <div>
      <input
        id='input-id'
        hidden
        type='checkbox'
        onChange={(e) => {
            mockFn();
          console.log('onChange', e.target.checked);
          setVal(e.target.checked);
        }}
        checked={val}
      />
      <label htmlFor='input-id'>label</label>
      <p>{val ? 'checked' : 'unchecked'}</p>
    </div>
  );
}

export default App;
