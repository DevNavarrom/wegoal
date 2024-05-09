import React from 'react';
import { View } from 'tamagui';
import ToggleGroupComponent from '../../components/ToggleGroupCustom';
import { CardComponent } from '../../components/CardCustom';

const HomeScreen = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
        <ToggleGroupComponent type="single" size="$5" orientation="horizontal" />
        <CardComponent />
    </View>
  )
}

export default HomeScreen;