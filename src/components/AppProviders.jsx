import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "../context/AuthContext";
import GlobalStyle from "../styles/GlobalStyle";
import { darkTheme } from "../styles/theme";
import ErrorFallback from "./ErrorFallback";

export const queryClient = new QueryClient({
  defaultOptions: {
    // take all of the requests that we make within the supabase file that will give us a hook called useQuery to performantly make the request
    // this response will be cached and then updated later on.
    // React query can be though of as an internal state management system.
    // it accomplishes this with different keys. So whenever we got to the Home video, a key will be associated with that video
    // This is beneficial, because when we are going from one page to another, we are not making the same request repeatedly
    // If there is no new data on the page the user is navigating to, the the QueryClient will merely render that data that exists exists in the cache
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            {children}
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default AppProviders;
