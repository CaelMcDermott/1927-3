import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
        style={{
          flexDirection: 'row',
          justifyContent: "space-around",
          height: 150,
          padding: 20,
        }}>
        <View style={{ backgroundColor: 'blue', flex: 5 }} >
        <Button
  onPress={() => {
    alert ('Move forward, robot!');
    fetch('https://bot3.seattleacademy.software/drive?left=100&right=100')
  }}
  title="Press Me"
/>

        </View>
        <View style={{ backgroundColor: 'red', flex: 5 }} >
        
<Button
  onPress={() => {
    alert ('Move forward, robot!');
    fetch('https://bot3.seattleacademy.software/drive?left=50&right=50')
  }}
  title="Press Me"
/>
<Button
  onPress={() => {
    alert ('Move forward, robot!');
    fetch('https://bot3.seattleacademy.software/drive?left=20&right=80')
  }}
  title="Press Me"
/>
        </View>
        
        <Text>Hello World!</Text>
        
      </View>


      
    
        <Text style={styles.paragraph}>
          Change code in the editor and watch it change on your phone!!! Save to get a shareable url.
        </Text>
        <Card>
          <AssetExample />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .8,
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
