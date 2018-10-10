import React from 'react';
import { StyleSheet, View, Button} from 'react-native';
import { w } from '../const';
import { AppContext } from '../../App';

const ReturnPageBtn = () => (
    <AppContext.Consumer>
        {context => (
            <View style={styles.btnContainer}>        
               <Button title="Назад" onPress={context.showPhotos} />
            </View>
        )}
    </AppContext.Consumer>
);

const styles = StyleSheet.create({
   btnContainer : {
      position : 'absolute',
      top : 30,
      left : 25,
      width : w/5,
      height : w/5,
      borderRadius : 50,
      zIndex : 100
    }
});

export default ReturnPageBtn;