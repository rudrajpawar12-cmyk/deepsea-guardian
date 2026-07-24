import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import OceanMap from "./pages/OceanMap";
import Biodiversity from "./pages/Biodiversity";
import Pollution from "./pages/Pollution";
import Insights from "./pages/Insights";
import Reports from "./pages/Reports";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/ocean-map" component={OceanMap} />
      <Route path="/biodiversity" component={Biodiversity} />
      <Route path="/pollution" component={Pollution} />
      <Route path="/insights" component={Insights} />
      <Route path="/reports" component={Reports} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster
            toastOptions={{
              style: {
                background: "rgba(7, 28, 52, 0.9)",
                border: "1px solid rgba(0, 217, 255, 0.1)",
                color: "#fff",
                backdropFilter: "blur(20px)",
              },
            }}
          />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
