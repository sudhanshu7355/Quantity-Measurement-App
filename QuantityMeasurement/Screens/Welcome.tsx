import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Welcome = ({navigation}) => {
    return (
        <ImageBackground source={require('../assets/background.jpg')}
            style={styles.background}
            blurRadius={7}
        >
            <View style={styles.logocontainer}>
                <Image source={require('../assets/removebg.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.appname}>
                <Text style={styles.apptext}>QUANTITY MEASUREMENT APP</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.login} onPress={()=>navigation.navigate('Login')}>
                    <Text style={styles.logintext}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.login, {backgroundColor:'#4ecdc4'}]} onPress={()=>navigation.navigate('Signup')}>
                    <Text style={styles.logintext}>SIGNUP</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    );
};


const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
    },
    logocontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },
    logo: {
        width: 230,
        height: 230,
    },
    appname: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom:105,
    },
    apptext: {
        fontSize: 25,
        fontWeight: '500',
        color: '#4d4c4c',
    },
    login:{
        flexDirection:'row',
        justifyContent:'center',
        width:'80%',
        borderRadius:50,
        marginBottom: 10,
        padding: 14,
        marginVertical: 10,
        backgroundColor: '#fc5c65',
        borderColor: 'white',
        marginLeft:37,
    },
    logintext:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },


});
export default Welcome;