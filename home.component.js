import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Layout, TopNavigation } from '@ui-kitten/components';

export const HomeScreen = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Main' alignment='center' />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout>
    </SafeAreaView>
  );
};