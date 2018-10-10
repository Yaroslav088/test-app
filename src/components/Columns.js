import React from 'react';
import { View, Picker, StyleSheet, Text } from 'react-native';
import { h, w } from '../const';
import { AppContext } from '../../App';

const Columns = () => {
 
 const {picker, text} = styles;
    return (
       <AppContext.Consumer>
         {context => (
            <View>
                <Text style={text}>Виберіть у скільки стовпців будуть показані зображення</Text>
                    <Picker 
                         onValueChange={(val)=>{context.setNumOfColumns(val)}}
                         style={picker}
                         selectedValue={context.numOfColumns}>
                         <Picker.Item label="1" value="1" />
                         <Picker.Item label="2" value="2" />
                         <Picker.Item label="3" value="3" />
                         <Picker.Item label="4" value="4" />
                         <Picker.Item label="5" value="5" />
                         <Picker.Item label="6" value="6" />
                    </Picker>
                   
            </View>      
         )}
      </AppContext.Consumer> 
    )
}

const styles = StyleSheet.create({
    picker : {
        height : h/10,
        width : w/2,
        paddingLeft : w/5
    },
    text : {
        height : h/8,
        width : w/2,
        marginTop : h/4
    }
})

export default Columns;