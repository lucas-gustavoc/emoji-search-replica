import "./SearchInput.css";

export default function SearchInput(props) {
    return (
        <div className="component-search-input">
            <div>
                <input onChange={props.handleChange} />
            </div>
        </div>
    )
}