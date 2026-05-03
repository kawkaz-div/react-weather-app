// SearchBar.jsx
function SearchBar({ onSearch }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.elements.city.value; // ← ここが重要！
        if (value) {
            onSearch(value);
            e.target.reset(); // 入力欄をクリア（任意）
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input
                name="city"
                placeholder="都市名を入力"
                style={{
                    padding: "10px",
                    width: "70%",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                }}
            />
            <button
                type="submit"
                style={{
                    padding: "10px 15px",
                    marginLeft: "10px",
                    borderRadius: "6px",
                    border: "none",
                    background: "#007bff",
                    color: "white",
                }}
            >
                検索
            </button>
        </form>
    );
}

export default SearchBar;

