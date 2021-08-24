import { useEffect } from 'react';
import '../assets/styles/index.css';
import '../assets/styles/chrome-bug.css';

import Layout from '../components/layout';
// import { UserContextProvider } from '../utils/useUser';
const UserContextProvider = (props) => <div {...props} />;

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <div className="bg-primary">
      <UserContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContextProvider>
    </div>
  );
}
