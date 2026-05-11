import "./SearchBar.css";

function SearchBar({ onSearch }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.elements.city.value;
        if (value) {
            onSearch(value);
            e.target.reset();
        }
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input name="city" placeholder="都市名を入力" />
            <button type="submit">検索</button>
        </form>
    );
}

export default SearchBar;
