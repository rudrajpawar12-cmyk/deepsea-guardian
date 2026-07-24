export interface OceanMetrics {
  temperature: number;
  waveHeight: number;
  windSpeed: number;
}

export async function getOceanData() {
  try {
    const response = await fetch(
      "https://marine-api.open-meteo.com/v1/marine?latitude=15.5&longitude=73.8&hourly=wave_height&current=wave_height&timezone=auto"
    );

    const marine = await response.json();

    const weatherResponse = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=15.5&longitude=73.8&current=temperature_2m,wind_speed_10m"
    );

    const weather = await weatherResponse.json();

    return {
      temperature:
        weather.current?.temperature_2m ?? 0,

      windSpeed:
        weather.current?.wind_speed_10m ?? 0,

      waveHeight:
        marine.current?.wave_height ?? 0,
    };
  } catch (error) {
    console.error(error);

    return {
      temperature: 0,
      windSpeed: 0,
      waveHeight: 0,
    };
  }
}