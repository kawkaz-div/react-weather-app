// App.jsx
import { useEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import ForecastList from "./components/ForecastList";
import SearchBar from "./components/SearchBar";

// .env の環境変数を読み込む
const API_KEY = import.meta.env.VITE_API_KEY;

// 現在の天気を取得する関数
async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ja`;

  const res = await fetch(url);
  const data = await res.json();

  // エラー時（例：city not found）
  if (res.status !== 200) {
    return null;
  }

  return {
    temp: data.main.temp,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
  };
}

// 予報を取得する関数（3つだけ抜き出す）
async function fetchForecast(city) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=ja`;

  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    return null;
  }

  return data.list.slice(0, 3).map((item) => ({
    time: item.dt_txt.slice(11, 16),
    temp: item.main.temp,
    icon: item.weather[0].icon,
  }));
}

function App() {
  const [city, setCity] = useState("Tokyo");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  // 都市名が変わったら API を呼ぶ
  useEffect(() => {
    setError(null); // 新しい検索のたびにエラーをリセット

    fetchWeather(city).then((data) => {
      if (!data) {
        setError("都市が見つかりませんでした");
        setWeather(null);
        return;
      }
      setWeather(data);
    });

    fetchForecast(city).then((data) => {
      if (!data) {
        setForecast([]);
        return;
      }
      setForecast(data);
    });
  }, [city]);

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <SearchBar onSearch={setCity} />

      {/* エラーメッセージ */}
      {error && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          {error}
        </p>
      )}

      {/* weather が取得できたら表示 */}
      {weather && <CurrentWeather city={city} weather={weather} />}

      {/* forecast が取得できたら表示 */}
      {forecast.length > 0 && <ForecastList forecast={forecast} />}
    </div>
  );
}

export default App;
