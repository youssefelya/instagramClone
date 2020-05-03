import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
    Dimensions,
    Modal,
} from 'react-native';
import { Icon,} from 'react-native-elements';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 15) / 16);
const imageWidth = dimensions.width;

const iconSize = 17;
export default class RenderProfile extends React.Component {

    constructor(props){
        super(props);
        this.state={
            like : false,
            showcomment : false,
            numberLikes : 1,
        }
    }
    handlerLike(){
        this.setState({like : !this.state.like, numberLikes: this.state.numberLikes+1});
    }

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.userBar}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    
						<Image
							source={require('../../assets/profile.jpg')}
							style={styles.userPic}
						/>
                      
						<Text>Youssef</Text>
						<TouchableOpacity
							onPress={() => {
								console.log('click it !!!!!');
							}}
						>
							<Text style={{ marginLeft: 220, fontSize: 20 }}>....</Text>
						</TouchableOpacity>
					</View>
				</View>
                <TouchableOpacity onPress={()=>this.handlerLike() } >
				<Image
					source={require('../../assets/youssef.jpg')}
					style={{ height: imageHeight, width: imageWidth }}
				/>
                </TouchableOpacity>
                <View style={{flexDirection:'row',marginRight:20, }}>
                 <View style ={{flexDirection:'column'}}>
                <Icon 
                   raised 
                   reverse 
                   name={this.state.like? 'heart': 'heart-o'}
                   type='font-awesome'
                  // color='#f50'
                  size={iconSize}
                   onPress = {()=>{this.handlerLike()}}
                   />
                   <Text style={{fontSize:16,fontWeight: 'bold'}}>
                       {this.state.numberLikes >0 ?this.state.numberLikes+' Likes' : null}
                       </Text>
                   </View>
                   <Icon 
                   raised 
                   reverse 
                   name='comment-o'
                   type='font-awesome'
                   size={iconSize}
                   //color='#f90'
                   onPress = {()=>this.setState({showcomment:!this.state.showcomment})}
                   />
                   <Icon 
                   raised 
                   reverse 
                   name='share'
                   type='font-awesome'
                   size={iconSize}
                   //color='#f90'
                   onPress = {()=>console.log('Already favorite ')}
                   />
                   </View>
                   <Modal animationType = {"slide"} transparent = {false}
                    visible = {this.state.showcomment}
                    onDismiss = {() => {}}
                    onRequestClose = {() =>{} }
                    ></Modal>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	tempNav: {
		width: '100%',
		height: 75,
		marginTop: 20,
		backgroundColor: 'rgb(250, 250, 250)',
		borderBottomColor: 'rgb(233,233,233)',
		borderBottomWidth: StyleSheet.hairlineWidth,
		justifyContent: 'center',
		flexDirection: 'row',
	},
	userBar: {
		width: '100%',
		height: 50,
		backgroundColor: 'white',
		flexDirection: 'row',
		marginHorizontal: 10,
	},
	userPic: {
		width: 40,
		height: 40,
		borderRadius: 20,
    },
    icon :{

    },
    modal: {
         justifyContent: 'center',
         margin: 20
      },
});
