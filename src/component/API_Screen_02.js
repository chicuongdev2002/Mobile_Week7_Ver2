import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, ScrollView, Image,Text } from "react-native";
import image1 from '../image/Image1.png';
import image2 from '../image/Image2.png';
import image3 from '../image/Image3.png';
export default function Screen2 () {    
const [data, setData] = useState([]);

	useEffect(() => {
	  fetch('https://6549e483e182221f8d52155d.mockapi.io/shops')
		.then(response => response.json())
		.then(json => {
		  setData(json);
		  console.log(json);
		})
	}, []);
    return (
			<ScrollView  
				style = {{
					flex: 1,
					backgroundColor: "#f3f4f6",
					shadowColor: "#120f281C",
					shadowOpacity: 0.11999999731779099,
					shadowOffset: {
					    width: 0,
					    height: 3
					},
					shadowRadius: 6,
					elevation: 6,
				}}>
					<View>
						<Text style={{
							color:'#171A1F',
							fontFamily:'Inter',
							fontSize:24,
							fontStyle:'normal',
							fontWeight:700,
						}}>Shops Near Me</Text>
					</View>
					{data.map((item) => (
        <View style={{backgroundColor:'#9095A0',borderRadius:10,weight:200,height:50}}
        key={item.id}>
			<Image source={image1}/>
          <Text>{item.nameShop}</Text>
		  <Text>{item.street}</Text>
		  <Text>{item.timeShip}</Text>
        </View>
      ))}
			</ScrollView>
    )
}
