import React from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={{color: "white", fontSize: 20}}>Kalaman Hikima</Text>
            <TouchableOpacity style={styles.btn} 
            onPress={()=>alert("Wannan Application zai gabatar maka da kalamai masu cike da hikima kuma zaka iya share a kowane irin social media")}>
                <Entypo name="dots-three-vertical" size={22} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    btn:{
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    header:{
        marginTop: 10,
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 20,
        marginBottom: 20,
        alignItems: 'center',
        fontFamily: 'Lato',
        justifyContent: 'space-between'
    }
})
