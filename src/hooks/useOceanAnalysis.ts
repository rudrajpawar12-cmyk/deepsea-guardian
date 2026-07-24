import { useEffect, useState } from "react";
import {
  analyzeOcean,
  type OceanAnalysis,
} from "../services/oceanEngine";

export function useOceanAnalysis() {
  const [analysis, setAnalysis] =
    useState<OceanAnalysis | null>(null);

  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);

    const result = await analyzeOcean();

    setAnalysis(result);

    setLoading(false);
  }

  useEffect(() => {
    load();

    const interval = setInterval(load, 300000);

    return () => clearInterval(interval);
  }, []);

  return {
    analysis,
    loading,
    refresh: load,
  };
}