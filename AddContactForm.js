import React from "react";
import { Button, TextInput, StyleSheet, View } from "react-native";


export default class AddContactForm extends React.Component{
    state = {
        name: '',
        phone: ''
    }

    handleNameChange = name => {
        this.setState({name})
    }

    handlePhoneChange = phone => {
        this.setState({phone})
    }

    render(){
        return (
            <View style={{padding: 70}}>
                <TextInput value={this.state.name} 
                style={styles.input} 
                onChangeText={this.handleNameChange}/>
                <TextInput value={this.state.phone} 
                style={styles.input} 
                onChangeText={this.handlePhoneChange} 
                keyboardType="numeric"/>
                <Button title='Add Contact' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 5,
        borderWidth: 1,
        borderColor: 'black'
    }
})