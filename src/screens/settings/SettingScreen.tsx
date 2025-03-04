import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {StackActions, useNavigation} from '@react-navigation/native';

export const SettingScreen = () => {
  const navigator = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10}}>SettingScreen</Text>

      <PrimaryButton label="Regresar" onPress={() => navigator.goBack()} />
      <PrimaryButton label="Regresar al Home" 
      onPress={() => navigator.dispatch(StackActions.popToTop())} />
    </View>
  );
};


//tomamos el navigator.y tenemos una opcion de hacer el dispach 
//en el dispach tenemos ciertas opciones especificas que estan 
//en nuestro stackaction.popToTop osea regrea al root al home 


