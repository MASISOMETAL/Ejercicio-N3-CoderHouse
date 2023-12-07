import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Home, Login } from "./src/screens"
import { useFonts } from 'expo-font';

const App = () => {

    const [user, setUser] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [fontsLoaded] = useFonts({
        "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
        "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf")
    });

    if (!fontsLoaded) {
        return null;
    }

    const handleLogout = () => {
        setEmail("")
        setPassword("")
        setUser(false)
    }

    return (
        <View style={styles.container}>
            {user ? (
                <Home email={email} handleLogout={handleLogout} />
            ) : (
                <Login
                    setUser={setUser}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                />
            )}

        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    }
})