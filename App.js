
import Weather from './components/Weather';
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';


class App extends Component {
  constructor() {
    super();

    this.state = {
      city: 'Anchorage',
    }

    this.updateCity = this.updateCity.bind(this);

  }

  updateCity(city) {
    if (city !== "") {
      this.setState({ city: city.substring(0, city.indexOf(',')) }, () => this.refs.weather.ChangeCity(city))
    }
  }

  render() {


    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <TextInput
              style={styles.searchBox}
              placeholder="Enter city as 'Example,EX'"
              placeholderTextColor="grey"
              onSubmitEditing={(event) => this.updateCity(event.nativeEvent.text)}
            />
            <Text style={styles.cityName}>{this.state.city}</Text>
            <Weather ref="weather"></Weather>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4798c5"
  },

  searchBox: {
    height: 40,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    backgroundColor: "white",
    borderColor: 'gray',
    borderWidth: 1,
  },

  scrollView: {
    // backgroundColor: '#6699cc',
  },

  cityName: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '400',
    fontSize: 40,
    marginTop: 40,
  },
});

export default App;