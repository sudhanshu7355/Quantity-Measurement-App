import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Screen = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/background.jpg')}
            blurRadius={6}
        >
            <View style={{ height: '100%' }}>

                <View style={styles.Container}>
                    <View style={{marginTop:40}}>
                        <Image source={require('../assets/absneww.png')}
                            style={{
                                width: 500,
                                height: 300,
                            }}
                        >
                        </Image>

                    </View>

                    <View style={{ marginTop:-70, height:60}}>
                        <Text style={{ fontSize: 30, textTransform: 'uppercase', color: 'grey', fontWeight: 'bold' }}>
                            unit conversion
                        </Text>
                    </View>

                    <View style={{ width: '90%',marginTop:100}}>
                        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Length')}>
                            <Text style={styles.text1}>Length</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Temperature')}>
                            <Text style={styles.text1}>Temperature</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('Weight')}>
                            <Text style={styles.text1}>Weight</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </ImageBackground>




    );
};


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    button1: {
        width: '100%',
        borderRadius: 25,
        marginBottom: 11,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: '#4ecdc4',
        borderColor: 'white',
    },
    button2: {
        width: '100%',
        borderRadius: 25,
        marginBottom: 11,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
         backgroundColor: '#fc5c65',
        borderColor: 'white',
    },
    button3: {
        width: '100%',
        borderRadius: 25,
        marginBottom: 11,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: '#faab23',
        borderColor: 'white',
    },
    text1: {
        color: 'white',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    logotext: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },

});
export default Screen;