import { QueryClient, QueryClientProvider } from 'react-query';
import PostComponet from './components/PostComponet';

const queryClient = new QueryClient();

function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <PostComponet />
  </QueryClientProvider>
  )
}

export default App
