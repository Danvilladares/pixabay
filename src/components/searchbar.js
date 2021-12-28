import * as React from 'react';
import {
  View,
  TextInput,
} from 'react-native';

import axios from 'axios';
import { API_KEY, API_URL, API_PAGE } from '../pixabay/api.js'
import { Colors } from "react-native/Libraries/NewAppScreen";

function Search({ navigation, route }) {
  state = {
    searchText: '',
    images: []
  }
  onTextChange = (e) => {
    this.setState({ searchText: e }, () => {
      axios.get(`${API_URL}/?key=${API_KEY}&q=${this.state.searchText}&image_type=photo&per_page=${API_PAGE}&safesearch=true`)
        .then(res => this.setState({ images: res.data.hits }))
        .catch(err => console.log(err));
    });
  }
  return (
    <View>
      <TextInput
        name="SearchText"
        value={this.state.searchText}
        onChangeText={this.onTextChange}
        placeholder={'Search'}
        style={{ backgroundColor: Colors.white }}
      ></TextInput>


      {this.state.images.length > 0 ? (
        <ImageResults images={this.state.images} />
      ) : null}
    </View>
  )

}
export default Search;
