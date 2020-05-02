import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 15 / 16);
const imageWidth = dimensions.width;

export default class RenderProfile extends React.Component{

    render() {
        return(<View style={{ flex: 1 }}>
            <View style = {styles.userBar}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image
                source={require('../../assets/profile.jpg')}
                style={styles.userPic}
            />
            <Text>Youssef</Text>
            <TouchableOpacity onPress= {()=>{console.log('click it !!!!!')}}>
            <Text style={{marginLeft: 220,   fontSize:20 }}>....</Text>
            </TouchableOpacity>
            </View>
            </View>
            <Image
                source={require('../../assets/youssef.jpg')}
                style={{ height: imageHeight, width: imageWidth }}
            />
        </View>
        );
    }
} 
const styles = StyleSheet.create({
    tempNav: { 
        width: '100%', 
        height: 75,
        marginTop:20, 
        backgroundColor: 'rgb(250, 250, 250)',
        borderBottomColor:'rgb(233,233,233)',
        borderBottomWidth : StyleSheet.hairlineWidth, 
        justifyContent:'center',
        flexDirection:'row',
    },
    userBar:{
        width:'100%',
        height:50,
        backgroundColor:'white',
        flexDirection : 'row',
        marginHorizontal:10,
    },
    userPic :{
        width:40,
        height:40,
        borderRadius:20,
    },
});


