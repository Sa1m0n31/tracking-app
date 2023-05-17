import React, {useEffect, useState} from 'react';
import {
    StyleSheet, View, SafeAreaView, Text, Dimensions, PermissionsAndroid
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigation from "./components/BottomTabsNavigation";
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import styled from 'styled-components'; // ten import powoduje błąd

function App() {
    const [lat, setLat] = useState(37);
    const [lng, setLng] = useState(-122);

    const requestLocationPermission = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Udostępnij',
                message: 'Czy moge Cie sledzic?',
                buttonNeutral: 'Ask me later',
                buttonNegative: 'Nie',
                buttonPositive: 'Tak'
            }
        );

        if(granted === PermissionsAndroid.RESULTS.GRANTED) {
            displayMyLocation();
        }
    }

    const displayMyLocation = () => {
        Geolocation.getCurrentPosition(info => {
            console.log(info);

            setLat(info.coords.latitude);
            setLng(info.coords.longitude);
        });
    }

    useEffect(() => {
        requestLocationPermission();
    }, []);

    return <NavigationContainer>
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text}>
                    abc
                </Text>
                <MapView
                    style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
                    initialRegion={{
                        latitude: lat,
                        longitude: lng,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
                <BottomTabsNavigation />
            </View>
        </SafeAreaView>
    </NavigationContainer>
}

// const AppContainer = styled(View)`
//   width: 100%;
//   height: 100%;
// `;

const styles = StyleSheet.create({
    container: {
        // height: 500
    },

    text: {
        color: 'red'
    }
});

export default App;
