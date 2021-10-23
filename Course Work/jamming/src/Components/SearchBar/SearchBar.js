import './SearchBar.css';
import {useState} from 'react';

export default function SearchBar({onSearch}) { 
    const [searchTerm, setSearchTerm] = useState('');

    const handleTermChange = (e)=> {
        setSearchTerm(e.target.value)
    }

    const handleClick = ()=> {
        onSearch(searchTerm)
    }

    return (
        <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" value={searchTerm} onChange={handleTermChange} />
        <button className="SearchButton" onClick={handleClick}>SEARCH</button>
</div>
    )
}