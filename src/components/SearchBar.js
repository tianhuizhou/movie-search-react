import { useState } from "react";
import SearchIcon from '../logo.svg'

const SearchBar = (props) => {
    const [query, setQuery] = useState('')
    return (
        <div className="flex justify-center">
            <div className="search">
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search for movies"/>
                <button onClick={() => props.handleSearch(query)} className="">
                    <img className="text-white" src={SearchIcon} alt=""/>
                </button>
            </div>
        </div>
    )
}

export default SearchBar