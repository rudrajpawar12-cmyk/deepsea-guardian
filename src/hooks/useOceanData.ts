import { useEffect, useState } from "react";
import {
  getOceanData,
  type OceanMetrics,
} from "../services/oceanApi";

export function useOceanData() {
  const [data, setData] = useState<OceanMetrics>({
    temperature: 0,
    waveHeight: 0,
    windSpeed: 0,
  });

  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);

    const result = await getOceanData();

    setData(result);

    setLoading(false);
  }

  useEffect(() => {
    load();

    const interval = setInterval(load, 300000);

    return () => clearInterval(interval);
  }, []);

  return {
    data,
    loading,
    refresh: load,
  };
}