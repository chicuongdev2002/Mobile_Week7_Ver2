import React from "react";
import { View, ScrollView,Text,Image,TouchableOpacity,Pressable } from "react-native";
import image from '../image/Image1.png';
import image2 from '../image/Image2.png';
import Screen2 from "./API_Screen_02";
import Screen3  from "./API_Screen_03";
export default  function Screen1 ({navigation}){
    return (
        <View 
			style = {{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style = {{
					flex: 1,
					backgroundColor: "#dee1e6",
					shadowColor: "#120f281C",
					shadowOpacity: 0.11999999731779099,
					shadowOffset: {
					    width: 0,
					    height: 3
					},
					shadowRadius: 6,
					elevation: 6,
				}}>
				<View 
					style = {{
						alignContent: "center",
						justifyContent: "center",
						alignItems: "center",
						flex:1
					}}>
						<Text style={{
							color:'#171A1F',
							fontFamily:'Inter',
							fontSize:24,
							fontStyle:'normal',
							fontWeight:700,

						}}>Welcome to Cafe world</Text>
				</View>
				<View style={{alignContent:'center',justifyContent:'center',alignItems:'center',flex:6}}>
					<View style={{marginTop:100}}>
					<Image source={image} style={{height:50,width:200}}/>
					</View>
					<View style={{marginTop:100}}>
					<Image source={image2} style={{height:50,width:200}}/>
					</View>
				</View>
				<View style={{flex:3,marginTop:200}}>
				<TouchableOpacity 
				onPress={() => navigation.navigate('Screen2')}
					style = {{
						alignItems: "center",
						backgroundColor: "#00BDD6",
						borderRadius: 6,
						paddingVertical: 16,
						marginHorizontal: 19,
					}}>
					<Text 
						style = {{
							color: "#ffffff",
							fontSize: 16,
						}}>
						{"GO TO CART"}
					</Text>
				</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
		
    );
}
