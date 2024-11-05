import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import CardInfo from './components/CardInfo';
import ButtonPress from './components/ButtonPress';
import { useState } from 'react';



export default function App() {
  const [meta, setMeta] = useState(2500)
  const [total, setTotal] = useState(0)
  const [status, setStatus] = useState('Ruim')

  const [statusMeta, setStatusMeta] = useState(0)

  const handleUpdateTotal = (value: number) => {
    const newTotal = total + value;
    setTotal(newTotal);
  
    // Calcula o percentual da meta atingido e atualiza o estado
    const percentageOfMeta = parseFloat(((newTotal / meta) * 100).toFixed(2));
    setStatusMeta(percentageOfMeta);
  
    // Atualiza o status com base nos intervalos de consumo
    if (newTotal < 1000) {
      setStatus('Ruim');
    } else if (newTotal < 1500) {
      setStatus('Regular');
    } else if (newTotal < 2500) {
      setStatus('Bom');
    } else {
      setStatus('Meta Atingida');
    }
  };

  const handleReset = () => {
    setTotal(0);
    setStatus('Ruim');
    setStatusMeta(0);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../watercount/images/waterbg.png")}
        resizeMode='cover'
        resizeMethod='scale'
        style={styles.image}
      />

      <View style={styles.content}>
        <View style={styles.header}>
          <CardInfo metrics='Meta' values={`${meta}ml`} />
          <CardInfo metrics='Consumido' values={`${total}ml`} />
          <CardInfo metrics='Status' values={status} />
        </View>

        <View style={styles.btn}>
          
            <Text  style={styles.statusMeta}>
              {`${statusMeta}%`}
            </Text>
        

          <ButtonPress label='250ml' onPress={() => handleUpdateTotal(250)} />
      
          <Pressable onPress={handleReset}>
            <Text style={styles.Reset}>Resetar</Text>
          </Pressable>
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    position: 'absolute',
    top: 50,
    width: '100%',
    height: '94.6%',
    alignItems: 'center',
    rowGap: 250,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 100,
  },
  btn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  statusMeta: {
    fontSize: 54,
    fontWeight: 'bold',
    color: '#FEFEFE',
    marginBottom: 20,
    marginTop: 100,
  },
  Reset:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FEFEFE',
  }
})
