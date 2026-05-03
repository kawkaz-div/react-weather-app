function CurrentWeather({ city, weather }) {
    return (
        <div
            style={{
                padding: "20px",
                borderRadius: "10px",
                background: "#f5f5f5",
                marginBottom: "20px",
            }}
        >
            <h2>{city} の現在の天気</h2>

            {/* 天気アイコン */}
            <img
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt=""
            />

            {/* 気温 */}
            <p style={{ fontSize: "32px", margin: "10px 0" }}>
                {weather.temp}°C
            </p>

            {/* 説明 */}
            <p>{weather.description}</p>
        </div>
    );
}

export default CurrentWeather;
