import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </Provider>
}
