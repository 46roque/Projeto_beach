import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();


export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginBox}>
        <Image
          source={require('./assets/logo.png')} // substitua pelo caminho correto da logo
          style={styles.logo}
        />

        <Text style={styles.label}>Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="guissoniJogador"
          placeholderTextColor="#888"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="******"
          secureTextEntry
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={20} color="#DB4437" style={styles.icon} />
          <Text style={styles.socialButtonText}>Entrar com Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={20} color="#1877F2" style={styles.icon} />
          <Text style={styles.socialButtonText}>Entrar com Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={styles.link}>Esqueceu a senha&gt;</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.link}>Primeiro acesso&gt;</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    width: '90%',
    alignItems: 'center',
    elevation: 8,
  },
  logo: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  label: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 5,
  },
  input: {
    borderBottomWidth: 1,
    width: '100%',
    height: 40,
    marginBottom: 10,
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#0D1B4C',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 15,
    elevation: 4,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  socialButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 5,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  socialButtonText: {
    marginLeft: 10,
    fontSize: 15,
  },
  icon: {
    marginRight: 5,
  },
  link: {
    marginTop: 10,
    color: '#000',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
