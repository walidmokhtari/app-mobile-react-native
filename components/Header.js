import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAnt from 'react-native-vector-icons/AntDesign';

function Header(props) {
    const [value, setValue] = useState("");
    const [tab, setTab] = useState([]);

    function handleClick () {
      setTab([...tab, value]);
    }
   
    return (
      <View >
        <View style={styles.view}>
            <TextInput style={styles.input} placeholder="Enter your task" placeholderTextColor="#55efc4" onChangeText={text => setValue(text)}></TextInput>
            <Icon style={styles.buttonAdd} name="add" size={40} color="#55efc4" onPress={handleClick}></Icon>
        </View>
        {
          tab.map((text) => (
            <View style={styles.view2}>
              <Text key={text} style={styles.text}>{text}</Text>
              <IconAnt style={styles.buttonDelete} name="delete" size={30} color="red"></IconAnt>
            </View>
          ))
        }
        
      </View>
    );
}

const styles = StyleSheet.create({
    view: {
      display: "flex",
      flexDirection: "row"  
    },
    view2: {
      display: "flex",
      flexDirection: "row", 
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
      padding: 10,
      borderRadius: 5,
      backgroundColor: "#55efc4",
      color: "#2d3436"
    },
    input: {
      height: 40,
      width: 250,
      margin: 12,
      padding: 10,
      borderBottomWidth: 1,
      borderColor: "#55efc4",
      color: "white"
      
    },
    buttonAdd: {
      marginTop: 10,
    },
    text: {
      fontSize: 20,
      color: "black"
    }

  });

export default Header;