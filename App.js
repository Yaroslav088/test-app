import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Photos from './src/components/Photos';
import Columns from './src/components/Columns';
import SelectColumnBtn from './src/components/SelectColumnBtn';
import ReturnPageBtn from './src/components/ReturnPageBtn';

const AppContext = React.createContext();

export default class App extends Component {

  state = {
     numOfColumns : 2,
     allImages : [1,2,3,4,5,6,7,8,9,10],
     isNumOfColumn : false,
     scrollCords : 30
  }
  
  render() {
    if(this.state.isNumOfColumn){
    return (

     <AppContext.Provider value={{
        setNumOfColumns : (columns) => {
              this.setState({ numOfColumns : columns }) 
        },
        showPhotos : () => {
          this.setState({ isNumOfColumn : !this.state.isNumOfColumn })
        } 
      }}>

     
     <ScrollView onScroll={this.handleScroll}>
       
       <View style={styles.container}>
       <ReturnPageBtn />
          {this.state.allImages.map(id => {
              return (
                <Photos numOfColumns={this.state.numOfColumns} key={id} />
              )
          })}
       </View>
    </ScrollView>

    </AppContext.Provider>
    );
    }else{
      return (

        <View style={styles.columnContainer}>
        <AppContext.Provider value={{
                             numOfColumns : this.state.numOfColumns,
                             setNumOfColumns : (columns) => {
                                  this.setState({ numOfColumns : columns }) 
                             },
                             showPhotos : () => {
                                  this.setState({ isNumOfColumn : !this.state.isNumOfColumn })
                              } 
        }}>
        
          <Columns />
          <SelectColumnBtn />
        
        </AppContext.Provider>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : 'row',
    flexWrap : 'wrap',
    backgroundColor: '#F5FCFF',
  },
  columnContainer: {
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center'
  },
});

export {AppContext};