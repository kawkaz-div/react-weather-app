function ForecastList({ forecast }) {
    return (
        <div>
            <h3>予報</h3>

            {forecast.map((f, i) => (
                <div
                    key={i}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px 0",
                        borderBottom: "1px solid #ddd",
                    }}
                >
                    <span style={{ width: "80px" }}>{f.time}</span>
                    <img
                        src={`https://openweathermap.org/img/wn/${f.icon}.png`}
                        alt=""
                    />
                    <span style={{ marginLeft: "10px" }}>{f.temp}°C</span>
                </div>
            ))}
        </div>
    );
}

export default ForecastList;
