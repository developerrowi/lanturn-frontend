import Layout from '../components/Layout';

import Tutor from '../components/Tutor';

const Index = (props) => (
  <Layout>
    <Tutor/>
  </Layout>
);

Index.getInitialProps = async function() {
  return {  };
}

export default Index;