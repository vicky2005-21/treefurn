import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Collections from "@/pages/Collections";
import LoadingScreen from "@/components/LoadingScreen";
import "./styles/animations.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/collections" component={Collections} />
        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </>
  );
}