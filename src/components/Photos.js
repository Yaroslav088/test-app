import React, { Component } from 'react';
import { View, Image} from 'react-native';
import { h, w } from '../const';
import { getImageUrl } from '../containers/Photos';

class Photos extends Component {

 state = {
     url : ''
 }

 componentDidMount = () => {

    getImageUrl(this)

 }

 render() {
    const {numOfColumns} = this.props;

    return (
      <View style={{ paddingLeft : 10, paddingTop : 20, width : w / numOfColumns,}}>
          <Image 
              source={{uri: this.state.url}}
              style ={{width: w/numOfColumns-20, height: w/numOfColumns-20}} 
          />
      </View>
    );
 }
}

export default Photos;