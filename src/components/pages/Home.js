import { useEffect } from 'react';
import Layout from '../Layout';
// import { useHistory } from 'react-router-dom';
const Home = () => {
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token === undefined || token === null) {
      window.location.replace('/login');
    }
  }, []);

  return <Layout style={{ marginTop: 100 }}>{/* <Profile /> */}</Layout>;
};

export default Home;
