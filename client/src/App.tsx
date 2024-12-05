import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import "./App.css";
import AppRouter from "./routes/AppRouter";
export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <AppRouter />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
