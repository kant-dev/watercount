import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type CardInfoProps = {
      metrics: string,
      values: string | number,
}

export default function CardInfo({metrics, values}: CardInfoProps) {

      return (
            <View style={styles.container}>
                  <Text style={styles.Title}>{metrics}</Text>
                  <Text style={styles.Values}>{values}</Text>
            </View>
      )
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
      },
      Title: {
            fontSize: 22,
            color: '#46abf5',
            fontWeight: '600',
            marginBottom: 10,
      },
      Values: {
            fontSize: 22,
            color: '#2b538a',
            fontWeight: '800',
      }
})