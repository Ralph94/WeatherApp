import react, { useCallback } from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios';
import LottieView from 'lottie-react-native';


function MainScreen(props, navigation, route) {
    const [input, setInput] = react.useState(parseFloat(''));
    const [loading, setLoading] = react.useState(false);
    // use parsefloat for data to convert string to number
    const [data, setData] = react.useState(null);
    

    const api = {
        key: "43b64cd29946cbe5329e7a3643dcb93e",
        base: "https://api.openweathermap.org/data/2.5/"
    };




    const fetchDataHandler = useCallback(() => { 
        setLoading(true);
        setInput('');
        axios({
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api.key}`,

        })
            .then((res) => {
                console.log(res.data);
                setData(res.data);
                
            })
            .catch(e => console.dir(e))
            .finally(() => setLoading(false));
    }, [api.key, input]);

       


    return (
        <View style={styles.container}>
            <Image source={require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_WeatherApp/WeatherApp1/weatherapp1/weatherapp1/components/assets/imgs/weather2.jpg')} style={styles.img} />
            <View style={{ position: 'absolute', bottom: 50, left: 0, right: 0, alignItems: 'center', marginHorizontal: 10, padding: 10, height: 100, }}>
                <TextInput
                    placeholder="Enter City"
                    onChangeText={(text) => setInput(text)}
                    value={input}
                    onSubmitEditing={fetchDataHandler}
                    placeholderTextColor="white"
                    style={styles.TextInput} />
            </View>
          
            {loading && (
                <View>
                    <ActivityIndicator size="large" color="white" />
                </View>
            )}
            {data && (
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
                    <Text style={styles.ForcastText}>{`${data?.name}, ${data?.sys?.country}`}</Text>
                    <Text style={styles.ForcastText2}>{new Date().toLocaleDateString()}</Text>
                    <Text style={styles.ForcastText3}>{`${Math.round(data?.main?.temp_min)}°C - ${Math.round(data?.main?.temp_max)}°C`}</Text>
                </View>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
        
    },


    img: {
        width: '100%',
        height: '100%',
        
    },

    TextInput: {
        color: 'white',
        fontSize: 20.5,
        fontFamily: 'Macondo-Regular',
        textAlign: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,0,0,0.5)',
     
    },

    ForcastText: {
        color: '#000100',
        fontSize: 30.5,
        fontFamily: 'Macondo-Regular',
        textAlign: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',

        
    },

    ForcastText2: {
        color: '#000100',
        fontSize: 30.5,
        fontFamily: 'Macondo-Regular',
        textAlign: 'center',
        position: 'absolute',
        top: 100,
        left: 0,
        right: 0,
        overflow: 'hidden',

    },

    ForcastText3: {
        color: '#000100',
         fontSize: 30.5,
        fontFamily: 'Macondo-Regular',
        textAlign: 'center',
        position: 'absolute',
        top: 200,
        left: 0,
        right: 0,
        overflow: 'hidden',

    },




})


export default MainScreen;