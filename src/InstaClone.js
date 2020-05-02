import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import RenderProfile from './components/RenderProfile';


export default class InstaClone extends React.Component {

	render() {
		return (<View style={{ flex: 1 }}>
			    <View style={styles.tempNav}>
                <Text>Instagram</Text>
            </View>
            <RenderProfile />
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
