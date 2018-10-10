import React from 'react';
import { StyleSheet, View, Button} from 'react-native';
import { w } from '../const';
import { AppContext } from '../../App';

const SelectColumnBtn = () => (

        <View style={styles.btnContainer}>
          <AppContext.Consumer>
             {context => (
              <Button title="Показати зображення" onPress={context.showPhotos}/>
             )}
          </AppContext.Consumer>
        </View>
    
    );

const styles = StyleSheet.create({
    btnContainer : {
     width : w/2,
     height : w/3
    }
});

export default SelectColumnBtn;