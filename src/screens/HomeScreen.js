import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
    console.log(navigation);
  return (
    
    <View>
      <Text style={styles.text}>Hello There</Text>
    
    <Button
      onPress={()=> navigation.navigate('Components')}
      title="Components "
    />
    <Button
      onPress={()=>navigation.navigate('Image')}
      title="Image"
    />

    <Button
      onPress={()=>navigation.navigate('Color')}
      title="Color"
    />


    <Button
      onPress={()=>navigation.navigate('Counter')}
      title="Counter Screen"
    />

    <Button
      onPress={()=>navigation.navigate('Square')}
      title="SquareScreen"
    />

    <Button
      onPress={()=>navigation.navigate('Text')}
      title="TextScreen"
    />  

    <Button
      onPress={()=>navigation.navigate('Box')}
      title="BoxScreen"
    />  



    <TouchableOpacity onPress={()=>  navigation.navigate('List')}>
      <Text>List Demos</Text>



    </TouchableOpacity>
    </View>
  
    ) ;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
