import React from "react";
import { View, ScrollView, } from "react-native";

export default (props) => {
    
    
    return (
        <View 
			style = {{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
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
				<View 
					style = {{
						backgroundColor: "#dee1e6",
						borderColor: "#bcc1ca",
						borderWidth: 1,
						marginTop: 4,
					}}>
				</View>
			</ScrollView>
		</View>
		
    )
}
