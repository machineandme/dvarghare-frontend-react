import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MainScreen></MainScreen>
    </View>
  )
}

class MainScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View>
        <Text style={styles.title}>Hello bro</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});