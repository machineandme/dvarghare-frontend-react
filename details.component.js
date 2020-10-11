import React from 'react';
import { SafeAreaView } from 'react-native';
import { Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { CardAccessoriesShowcase } from './card.component';


const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const DetailsScreen = ({ navigation }) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Details' alignment='center' accessoryLeft={BackAction} />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Layout>
          <CardAccessoriesShowcase></CardAccessoriesShowcase>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};