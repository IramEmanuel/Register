import React, { useState } from 'react';
import { Text, ImageBackground, SafeAreaView, StyleSheet, View, StatusBar, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import InputField from '../componentes/inputs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../types";


const { height } = Dimensions.get("window");
type Props = NativeStackScreenProps<RootStackParamList, "Register">;
const Register:  React.FC<Props> = ({ navigation: { navigate } })  => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = () => {
    console.log("Registro Exitoso");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.container}>
        <ImageBackground style={{ height: height, marginTop: StatusBar.currentHeight }} resizeMode='cover' source={require('../assets/fondoLog.png')}>
        <ImageBackground style={{ height: height / 3.5 }} resizeMode='cover' source={require('../assets/PeopleLog.png')} />
        
          <View style={styles.TextContainer}>
          
            <Text style={styles.Title}>Get started FREE</Text>
            <Text style={styles.Subtitle}>no credit card. Forever</Text>
             <InputField placeholder="Nombre"  />
             <InputField placeholder="Correo Electrónico"  />
             <InputField
               placeholder="Contraseña"
               secureTextEntry={true}
               showPassword={showPassword}
               onShowPasswordChange={handleShowPasswordChange}
              />
            <InputField
              placeholder="Confirmación de Contraseña"
              secureTextEntry={true}
              showPassword={showPassword}
              onShowPasswordChange={handleShowPasswordChange}
            />
            
            <Text style={styles.text} onPress={()=> navigate("Login")} >Login</Text>
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.textoBoton}>Register</Text>
            </TouchableOpacity>
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
  button: {
    width: 320,
    height: 55,
    borderColor: "transparent",
    borderRadius: 18,
    backgroundColor: "black",
    justifyContent: "center",
    top: 30,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
    text: {
    top: 10,
    fontSize:18,
    textAlign: "right",
    width: "90%",
    fontWeight: "300"
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
    textAlign:"center"
  },
  Subtitle: {
    fontSize: 18,
    fontWeight: "400",
  },
  textoBoton: {
    color: "white",
    textAlign: "center",
  },
});

export default Register;
