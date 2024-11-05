import { Feather } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type ButtonProps = {
      onPress: () => void,
      label: string,
}

export default function ButtonPress({onPress, label} : ButtonProps) {
      return ( 
            <TouchableOpacity onPress={onPress} style={styles.button}>
                  <Feather name='plus' size={40} color={'#2b538a'}/>
                  <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
      )
}

const styles = StyleSheet.create({
      button: {
            backgroundColor: '#FEFEFE',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 15,
            borderRadius: 5,
            gap: 10,
            width: '50%',
            marginBottom: 40,
      },
      label: {
            fontSize: 28,
            fontWeight: 'bold',
            color: '#2b538a',
      },
})