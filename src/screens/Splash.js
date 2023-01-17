import React, { useEffect } from "react";
import { View, Image } from "react-native";
import styles from "../../src/screens/styles";


export default function SplashScreen(props) {
    const navigation = props.navigation
    setTimeout(async () => {
        navigation.navigate('Login');
    }, 3000);

    return (
        <View style={styles.splashContainer}>
            <Image
                style={styles.avatarStyle}
                source={require('../../assets/reddit.png')}

            />
        </View>
    );
}


