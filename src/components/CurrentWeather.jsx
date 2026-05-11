import "./CurrentWeather.css";

function CurrentWeather({ city, weather }) {
    const now = new Date();

    // 和風日付
    const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const weekday = weekdays[now.getDay()];
    const dateString = `${month}月${day}日（${weekday}）`;

    // 時刻
    const timeString = now.toLocaleTimeString("ja-JP", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <div className="weather-card">
            <h2>{city}</h2>

            {/* 日付 + 時刻 */}
            <p className="datetime">
                現在：{dateString} {timeString}
            </p>

            <img
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt="weather icon"
            />

            <p className="temp">{Math.round(weather.temp)}°C</p>
            <p className="desc">{weather.description}</p>
        </div>
    );
}

export default CurrentWeather;
