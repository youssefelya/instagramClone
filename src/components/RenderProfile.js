import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Dimensions,
	Modal,
	FlatList,
} from 'react-native';
import { Icon, Card ,ListItem, Input} from 'react-native-elements';
import Moment from 'moment';
import { COMMENTS } from '../../shared/comments';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 15) / 16);
const imageWidth = dimensions.width;
import * as Animatable from 'react-native-animatable';
const iconSize = 17;

function RenderComments(props) {
	const comments = props.comments;
	const renderCommentItem = ({ item, index }) => {
        Moment.locale('en');
		return (
            <View>
             <ListItem 
           roundAvatar 
           key = {index}
           title = {item.author}
           subtitle = {item.comment}
           hideChevron = {true}
           // @ts-ignore
           leftAvatar = {{source : require('../../assets/personne.jpg')}}
           rightIcon = {{ name: 'close', style: { color: 'red' } }}
          // badge={{ value: 3, textStyle: { color: 'orange' }, containerStyle: { marginTop: -20 } }}
           />
         
               </View>
		);
	};
	return (
		<Animatable.View animation='fadeInUp' duration={2000} delay={1000}>
            <ListItem 
           leftIcon = {{ name: 'close', style: { color: 'red' } }}
           onPress = {()=> props.goBack()}
          // badge={{ value: 3, textStyle: { color: 'orange' }, containerStyle: { marginTop: -20 } }}
           />
           <Input
               placeholder="Add a comment..."
           //  leftIcon={{ type: 'font-awesome', name: 'comment' }}
             // style={styles}
             rightIcon = {{name : 'comment' }}
              onChangeText={comment =>{}}
               />
				<FlatList
					data={comments}
					renderItem={renderCommentItem}
					keyExtractor={(item) => item.id.toString()}
				/>
			
		</Animatable.View>
	);
}

export default class RenderProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			like: false,
			showcomment: false,
			numberLikes: 1,
			comments: COMMENTS,
		};
	}
	handlerLike() {
		if (this.state.like) {
			this.setState({
				like: !this.state.like,
				numberLikes: this.state.numberLikes - 1,
			});
		} else {
			this.setState({
				like: !this.state.like,
				numberLikes: this.state.numberLikes + 1,
			});
		}
    }
    toggleCommentFormModal(){
        this.setState({showcomment: !this.state.showcomment});
   
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
				<TouchableOpacity onPress={() => this.handlerLike()}>
					<Image
						source={require('../../assets/youssef.jpg')}
						style={{ height: imageHeight, width: imageWidth }}
					/>
				</TouchableOpacity>
				<View style={{ flexDirection: 'row', marginRight: 20 }}>
					<View style={{ flexDirection: 'column' }}>
						<Icon
							raised
							reverse
							name={this.state.like ? 'heart' : 'heart-o'}
							type='font-awesome'
							// color='#f50'
							size={iconSize}
							onPress={() => {
								this.handlerLike();
							}}
						/>
						<Text style={{ fontSize: 16, fontWeight: 'bold' }}>
							{this.state.numberLikes > 0
								? this.state.numberLikes + ' Likes'
								: null}
						</Text>
					</View>
					<Icon
						raised
						reverse
						name='comment-o'
						type='font-awesome'
						size={iconSize}
						//color='#f90'
						onPress={() =>
							this.toggleCommentFormModal()
						}
					/>
					<Icon
						raised
						reverse
						name='share'
						type='font-awesome'
						size={iconSize}
						//color='#f90'
						onPress={() => console.log('Already favorite ')}
					/>
				</View>
				<Modal
					animationType={'slide'}
					transparent={false}
					visible={this.state.showcomment}
					onDismiss={() => {this.toggleCommentFormModal()}}
					onRequestClose={() => {this.toggleCommentFormModal()}}
				>
					<RenderComments comments={this.state.comments} goBack={()=>{this.toggleCommentFormModal()}}  />
				</Modal>
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
	icon: {},
	modal: {
		justifyContent: 'center',
		margin: 20,
	},
});
