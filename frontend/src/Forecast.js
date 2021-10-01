import { useEffect, useState } from "react";

function Forecast({ forecastUrl }) {
  const [forecastArray, setForecastArray] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await window.fetch(forecastUrl);
        const forecast = await response.json();
        setForecastArray(forecast);
      } catch (e) {
        setError(e.toString());
      }
    };

    // On mount, fetch.
    fetchForecast();
  }, [forecastUrl]);

  if (error) {
    return (
      <div>
        Error fetching from {forecastUrl}: <br />
        <pre>{error}</pre>
      </div>
    );
  }

  return (
    <div>
      <p>The forecast is:</p>
      {forecastArray.map((f) => (
        <div key={f.date}>
          {new Date(f.date).toLocaleDateString()}: {f.temperatureC}° (
          {f.summary})
        </div>
      ))}
    </div>
  );
}

export default Forecast;
