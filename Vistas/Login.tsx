import React, { useState } from 'react';
import { Text,
   TextInput,
   Image,
   ImageBackground,
   SafeAreaView,
   StyleSheet,
   View,
   StatusBar,
   Dimensions, 
   TouchableOpacity,
   ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../types";

const { height } = Dimensions.get("window");
type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const Login:  React.FC<Props> = ({ navigation: { navigate } }) =>  {
  
  const [showPassword, setShowPassword] = useState(false);
  
  const handleLogin = () => {
    console.log("INTENTO DE BOTON ");
  };
  const goregister = () => {
    console.log("REGISTRO INTENTO ");
  };
  const Recoverpass = () => {
    console.log("Recover INTENTO ");
  };


  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.container}>
        <ImageBackground style={{ height: height, marginTop: StatusBar.currentHeight }} resizeMode='cover' source={require('../assets/fondoLog.png')}>
        
          <View style={{ marginTop: StatusBar.currentHeight }}>
            <ImageBackground style={{ height: height / 3.5 }} resizeMode='cover' source={require('../assets/PeopleLog.png')} />
          </View>
          <View style={styles.TextContainer}>
             <Text style={styles.Title}>
                  Welcome back!
             </Text>
             <Text style={styles.Subtitle}>
                  We love to see you again here!
             </Text>
          
          <View style={styles.inputContainer}>
             <Image source={require('../assets/user.png')} style={styles.icon} />
               <TextInput
                   style={styles.input}
                   placeholder="User name"
               />
               
          </View>
          <View style={styles.inputContainer}>
               <Image source={require('../assets/key.png')} style={styles.icon}/>
                   <TextInput
                     style={styles.input}
                     placeholder="Password"
                     secureTextEntry={!showPassword}
               />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  {showPassword ? 
                    <Image 
                      source={require('../assets/show.png')}
                      style={styles.icon}/>
                     :
                    <Image 
                     source={require('../assets/unshow.png')}
                     style={styles.icon}/>
                  }
              </TouchableOpacity>
           </View>
               <Text style={styles.forgot} onPress={Recoverpass}> Forgot password?</Text>
            
             <View style={styles.inline}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.textoBoton}>Login</Text>
                 </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=> navigate("Register")}>
                     <Text style={styles.textoBoton}>Register</Text>
                </TouchableOpacity>
              </View>
               
                  <Text style={styles.text}> Or continue with</Text>
               
               <View style={styles.inline}>
                  <TouchableOpacity style={styles.buttonSocial} onPress={goregister}>
                  <Image 
                     source={require('../assets/google.png')}
                     style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonSocial} onPress={goregister}>
                  <Image 
                     source={require('../assets/facebook.png')}
                     style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonSocial} onPress={goregister}>
                  <Image 
                     source={require('../assets/manzana.png')}
                     style={styles.icon}/>
                  </TouchableOpacity>
              </View>

           </View>
         </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  inline:{
    flexDirection:"row",
    gap:10,
    
  },
  button:{
    width:170,
    height:55,
    borderColor:"transparent",
    borderRadius:18,
    backgroundColor:"black",
    justifyContent:"center",
    top:30,
  },
  buttonSocial:{
    width:60,
    height:55,
    borderColor:"transparent",
    borderRadius:18,
    backgroundColor: "rgba(10, 0, 35, 0.30)",
    alignItems:"center",
    justifyContent:"center",
    top:65,
  },
  textoBoton:{
      color:"white",
      textAlign:"center"
  },

  container: {
    backgroundColor: "white",
    flex: 1,
  },
  icon:{
   width:30,
   height:30,
   opacity: 0.5 
  },
  forgot: {
    top: 10,
    textAlign: "right",
    width: "90%",
    fontWeight: "300"
  },
  text: {
    top: 50,
    fontSize:15,
    textAlign: "center",
    width: "90%",
    fontWeight: "400"
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: "rgba(10, 0, 35, 0.17)",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 27,
  },
  input: {
    flex: 1,
    height: 55,
    color: "white",
    fontSize: 20,
    fontWeight: "400",
    marginLeft: 10,
  },
  TextContainer: {
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    borderRadius: 50,
    height: "100%",
    padding: 25,
    backgroundColor: "rgba(50, 0, 0, 0.3)",
    width: "100%",
  },
  Title: {
    fontSize: 44,
    fontWeight: "700",
  },
  Subtitle: {
    fontSize: 18,
    fontWeight: "400",
  }
});

export default Login;
