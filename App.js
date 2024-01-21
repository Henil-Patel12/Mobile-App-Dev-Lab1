import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View ,Button, Image, ScrollView} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text>Welcome to CPRG303D</Text>
      <Text>Hello World !!</Text>
      <Button title = 'Click me!' color='red'/>
      <Text>Hello Dog </Text>
      <Image source={require('./assets/dog-yellow-background.jpg')} style={styles.img}/>
      <Text>Hello Cat </Text>
      <Image source={require('./assets/cat-basket.jpg')} style={styles.img}/>
      <Text>Hello Robot </Text>
      <Image source={require('./assets/robot.jpg')} style={styles.img}/>
      <Text>Hello Node</Text>
      <Image source={require('./assets/favicon.png')} style={styles.img}/>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint omnis dignissimos inventore pariatur nobis non deleniti quod tenetur fugit natus harum fugiat odit dolore, velit voluptatem quo iste adipisci maxime?</Text>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1ee",
    alignItems: "center",
    justifyContent: "center",
  },
  img:{
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 10,
  }
});
