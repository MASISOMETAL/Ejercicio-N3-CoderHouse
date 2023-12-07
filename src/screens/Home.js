import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../contants/Color'

const Home = ({email, handleLogout}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Pantalla Principal</Text>
            </View>
            <View style={styles.containerCard}>
                <Text style={styles.text}>Bienvenido</Text>
                <Text>{email}</Text>
                <TouchableOpacity style={styles.btn} onPress={handleLogout}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: "100%"
    },
    header: {
        backgroundColor: COLORS.secondary,
        width: "100%",
        alignItems: 'center',
        paddingVertical: 25,
    },
    containerCard: {
        marginTop: 10,
        gap: 15,
        width: "100%",
        alignItems: 'center',
    },
    btn: {
        borderWidth: 1,
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 10,
        width: "80%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHeader: {
        fontFamily: "Lato-Regular",
        fontSize: 30,
    },
    text: {
        fontFamily: "Lato-Regular",
        fontSize: 16
    }
})