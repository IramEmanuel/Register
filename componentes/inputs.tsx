import React from 'react';
import { View, TextInput, Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';

interface InputFieldProps {
  placeholder: string;
  secureTextEntry?: boolean;
  showPassword?: boolean;
  onShowPasswordChange?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, secureTextEntry, showPassword, onShowPasswordChange,  }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry && !showPassword}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={onShowPasswordChange}>
          {showPassword ? 
            <Image source={require('../assets/show.png')} style={styles.icon} /> :
            <Image source={require('../assets/unshow.png')} style={styles.icon} />
          }
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  icon: {
    width: 30,
    height: 30,
    opacity: 0.5
  },
});

export default InputField;
