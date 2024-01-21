//    ** ** ** ** ** **   Lab 1   ** ** ** ** ** **
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View ,Button, Image, ScrollView} from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <ScrollView>
//       <Text>Welcome to CPRG303D</Text>
//       <Text>Hello World !!</Text>
//       <Button title = 'Click me!' color='red'/>
//       <Text>Hello Dog </Text>
//       <Image source={require('./assets/dog-yellow-background.jpg')} style={styles.img}/>
//       <Text>Hello Cat </Text>
//       <Image source={require('./assets/cat-basket.jpg')} style={styles.img}/>
//       <Text>Hello Robot </Text>
//       <Image source={require('./assets/robot.jpg')} style={styles.img}/>
//       <Text>Hello Node</Text>
//       <Image source={require('./assets/favicon.png')} style={styles.img}/>
//       <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint omnis dignissimos inventore pariatur nobis non deleniti quod tenetur fugit natus harum fugiat odit dolore, velit voluptatem quo iste adipisci maxime?</Text>
//       </ScrollView>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#e1ee",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   img:{
//     width: 200,
//     height: 200,
//     margin: 10,
//     borderRadius: 10,
//   }
// });

//    ** ** ** ** ** **   Lab 2   ** ** ** ** ** **

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View ,ImageBackground} from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <ImageBackground source={require('./assets/robot.jpg')}style={{flex:1}}>
//       <Text style={{padding:133, color:'white', fontSize:30}}>Hello World</Text>
//       </ImageBackground>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#e1ee",
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
// }
// );

//    ** ** ** ** ** **   Lab 3   ** ** ** ** ** **
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View ,Switch, ActivityIndicator, TextInput} from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Switch />
//       <ActivityIndicator size='extralarge' color='black'/>
      
//       <TextInput multiline placeholder="Enter Your Name!!" style={styles.input}/>
//       <StatusBar backgroundColor="skyblue" barstyle='light-content' />
    
//     </View>
//   );
// }
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "skyblue",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   input:{
//     borderWidth:3,
//     borderColor:'gray',
//     padding:20,
//     margin:20,
//     width:200,
//     borderRadius:50,
//   },
// }
// );