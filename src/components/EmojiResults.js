import { useEffect } from 'react'
import Clipboard from 'clipboard'
import EmojiResultRow from './EmojiResultRow'
import "./EmojiResults.css";

export default function EmojiResults(props) {

    useEffect(() => {
        const clipboard = new Clipboard(".copy-to-clipboard")
        return () => {
            // Clean-up
            clipboard.destroy()
        }
    })

    return (
        <div className="component-emoji-results">
          {props.emojiData.map(emojiData => (
            <EmojiResultRow
              key={emojiData.title}
              symbol={emojiData.symbol}
              title={emojiData.title}
            />
          ))}
        </div>
      );
}