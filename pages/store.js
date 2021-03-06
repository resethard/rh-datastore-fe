import React from 'react';
import Layout from '../components/Layout/Layout';
import {
  Card,
  CardTitle,
  CardText,
} from 'react-md';
import StoreList from '../components/StoreList/StoreList';
import withApollo from '../HOCs/withApollo';

class StorePage extends React.Component {
  render() {
    return (
      <Layout>
        <Card>
          <CardTitle title='Stores' />
          <CardText>
            <StoreList />
          </CardText>
        </Card>
      </Layout>);
  }
};

export default withApollo(StorePage);