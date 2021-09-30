import React from 'react';
import Layout from '../layout/layout';

const withLayout = (Component, className) =>
  function wrapper(props) {
    return (
      <Layout className={className}>
        <Component {...props} />
      </Layout>
    );
  };

withLayout.displayName = 'withLayout';

export default withLayout;
