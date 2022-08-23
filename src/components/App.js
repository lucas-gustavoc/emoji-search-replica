import { useState } from 'react'
import './App.css';
import Header from './Header'
import SearchInput from './SearchInput'
import EmojiResults from './EmojiResults'
import filterEmoji from "../logics/filterEmoji"

function App() {

  const [filteredEmoji, setFilteredEmoji] = useState(filterEmoji("", 20))
  
  const handleChange = event => {
    setFilteredEmoji(filterEmoji(event.target.value, 20))
  }

  return (
    <div>
      <Header />
      <SearchInput {...{handleChange}} />
      <EmojiResults {...{emojiData: filteredEmoji}} />
    </div>
  );
}

export default App;
