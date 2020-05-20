
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
  FlatList,
  TouchableHighlight,
} from 'react-native';
import { googleKey } from './config';


class App extends Component {
  constructor() {
    super();

    this.state = {
      city: 'Anchorage',
      url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json?',
      predict_data: [],
    }

    this.updateCity = this.updateCity.bind(this);
    this.PredictCity = this.PredictCity.bind(this);

  }

  updateCity(city) {
    if (city !== "") {
      city = city.slice(0, city.indexOf('USA')-2).replace(' ', '');
      this.setState({ city: city.substring(0, city.indexOf(',')) }, () => this.refs.weather.ChangeCity(city))
    }    
  }

  PredictCity(search) {
    fetch(`${this.state.url}input=${search}&types=(cities)&key=${googleKey}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({predict_data: result.predictions});
                },
                (error) => {
                    this.setState({error});
                }
            )
  }

  render() {


    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          {this.state.predict_data.length === 0 && (
            <TextInput
              style={styles.searchBoxBeforeSearch}
              placeholder="Enter city"
              placeholderTextColor="grey"
              onChangeText={(search) => this.PredictCity(search)}
            />
          )}
          {this.state.predict_data.length !== 0 && (
            <>
              <TextInput
                style={styles.searchBoxAfterSearch}
                placeholder="Enter city"
                placeholderTextColor="grey"
                onChangeText={(search) => this.PredictCity(search)}
              />
              <FlatList
              data={this.state.predict_data}
              renderItem={({item, index, separators}) => (
                <TouchableHighlight
                  style={styles.searchList}
                  onPress={() => this.updateCity(item.description)}
                  onShowUnderlay={separators.highlight}
                  onHideUnderlay={separators.unhighlight}
                >
                  <Text style={styles.searchItem}>
                    {item.description}
                  </Text>
                </TouchableHighlight>
              )}
              />
            </>
          )}
          <Text style={styles.cityName}>{this.state.city}</Text>
          <ScrollView style={styles.scrollView}>
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

  searchList: {
    marginLeft: 41,
    marginRight: 41,
  },

  searchItem: {
    backgroundColor: 'whitesmoke',
    color: 'black',
    padding: 10,
  },

  searchBoxAfterSearch: {
    height: 40,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "whitesmoke",
    borderColor: 'gray',
    borderWidth: 1,
  },

  searchBoxBeforeSearch: {
    height: 40,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
    borderRadius: 20,
    backgroundColor: "whitesmoke",
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