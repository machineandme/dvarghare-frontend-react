import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation.component';
import { StatusBar } from 'expo-status-bar'

export default () => (
  <>
    <StatusBar style="dark"/>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppNavigator/>
    </ApplicationProvider>
  </>
);
