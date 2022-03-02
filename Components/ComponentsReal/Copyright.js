import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Copyright() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>
                جميع الحقوق محفوظة لحنان العابد
            </Text>
            <Text style={styles.text}>All rights Reserved | Hanan Alabed</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        display: 'flex',
    },
    text: {
        textAlign: 'center',
        color: "black",
        fontFamily: 'Lateef',
        fontSize: 20
        
    }
});

export default Copyright
