import React from "react";
import { View, ScrollView, Image, Text, } from "react-native";

export default  function Screen3() {
    
    
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
					paddingTop: 15,
					paddingBottom: 33,
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
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 27,
						marginHorizontal: 13,
					}}>
					<View 
						style = {{
							width: 44,
							backgroundColor: "#000000",
							borderRadius: 4,
							marginRight: 15,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								height: 15,
								marginTop: 14,
							}}
						/>
					</View>
					<Text 
						style = {{
							color: "#171a1f",
							fontSize: 24,
							fontWeight: "bold",
						}}>
						{"Drinks"}
					</Text>
					<View 
						style = {{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 24,
							height: 24,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#ffffff",
						borderColor: "#bcc1ca",
						borderRadius: 4,
						borderWidth: 1,
						paddingVertical: 2,
						marginBottom: 16,
						marginHorizontal: 20,
					}}>
					<View 
						style = {{
							width: 60,
							backgroundColor: "#d9d9d9",
							borderRadius: 4,
							marginRight: 13,
						}}>
					</View>
					<View 
						style = {{
							flex: 1,
							marginRight: 4,
						}}>
						<Text 
							style = {{
								color: "#171a1f",
								fontSize: 16,
								fontWeight: "bold",
								marginBottom: 25,
							}}>
							{"Milk"}
						</Text>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 8,
									height: 9,
									marginRight: 6,
								}}
							/>
							<Text 
								style = {{
									color: "#565e6c",
									fontSize: 12,
									flex: 1,
								}}>
								{"$20"}
							</Text>
						</View>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 20,
							height: 20,
							marginRight: 42,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 20,
							height: 20,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#ffffff",
						borderColor: "#bcc1ca",
						borderRadius: 4,
						borderWidth: 1,
						paddingVertical: 2,
						marginBottom: 16,
						marginHorizontal: 20,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 4,
							width: 60,
							height: 60,
							marginRight: 12,
						}}
					/>
					<View 
						style = {{
							flex: 1,
							marginRight: 4,
						}}>
						<Text 
							style = {{
								color: "#171a1f",
								fontSize: 16,
								fontWeight: "bold",
								marginBottom: 25,
							}}>
							{"Origin"}
						</Text>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
								marginHorizontal: 1,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 8,
									height: 9,
									marginRight: 6,
								}}
							/>
							<Text 
								style = {{
									color: "#565e6c",
									fontSize: 12,
									flex: 1,
								}}>
								{"$68"}
							</Text>
						</View>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 20,
							height: 20,
							marginRight: 42,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 20,
							height: 20,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#ffffff",
						borderColor: "#bcc1ca",
						borderRadius: 4,
						borderWidth: 1,
						paddingVertical: 2,
						marginBottom: 16,
						marginHorizontal: 20,
					}}>
					<View 
						style = {{
							width: 60,
							backgroundColor: "#d9d9d9",
							borderRadius: 4,
							marginRight: 12,
						}}>
					</View>
					<View 
						style = {{
							flex: 1,
							marginRight: 4,
						}}>
						<Text 
							style = {{
								color: "#171a1f",
								fontSize: 16,
								fontWeight: "bold",
								marginBottom: 10,
							}}>
							{"Salt"}
						</Text>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
								marginHorizontal: 1,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 8,
									height: 9,
									marginRight: 2,
								}}
							/>
							<Text 
								style = {{
									color: "#9095a0",
									fontSize: 12,
									flex: 1,
								}}>
								{"$5"}
							</Text>
						</View>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 20,
							height: 20,
							marginRight: 42,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 20,
							height: 20,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#ffffff",
						borderColor: "#bcc1ca",
						borderRadius: 4,
						borderWidth: 1,
						paddingVertical: 2,
						marginBottom: 16,
						marginHorizontal: 20,
					}}>
					<View 
						style = {{
							width: 60,
							backgroundColor: "#d9d9d9",
							borderRadius: 4,
							marginRight: 13,
						}}>
					</View>
					<View 
						style = {{
							flex: 1,
							marginRight: 4,
						}}>
						<Text 
							style = {{
								color: "#171a1f",
								fontSize: 16,
								fontWeight: "bold",
								marginBottom: 24,
							}}>
							{"Espresso"}
						</Text>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 8,
									height: 9,
									marginRight: 6,
								}}
							/>
							<Text 
								style = {{
									color: "#565e6c",
									fontSize: 12,
									flex: 1,
								}}>
								{"$9"}
							</Text>
						</View>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 20,
							height: 20,
							marginRight: 42,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 20,
							height: 20,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#ffffff",
						borderColor: "#bcc1ca",
						borderRadius: 4,
						borderWidth: 1,
						paddingVertical: 2,
						marginBottom: 16,
						marginHorizontal: 20,
					}}>
					<View 
						style = {{
							width: 60,
							backgroundColor: "#d9d9d9",
							borderRadius: 4,
							marginRight: 12,
						}}>
					</View>
					<View 
						style = {{
							flex: 1,
							marginRight: 4,
						}}>
						<Text 
							style = {{
								color: "#171a1f",
								fontSize: 16,
								fontWeight: "bold",
								marginBottom: 25,
							}}>
							{"Capuchino"}
						</Text>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
								marginHorizontal: 1,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 8,
									height: 9,
									marginRight: 6,
								}}
							/>
							<Text 
								style = {{
									color: "#565e6c",
									fontSize: 12,
									flex: 1,
								}}>
								{"$23"}
							</Text>
						</View>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 20,
							height: 20,
							marginRight: 42,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 20,
							height: 20,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#ffffff",
						borderColor: "#bcc1ca",
						borderRadius: 4,
						borderWidth: 1,
						paddingVertical: 2,
						marginBottom: 16,
						marginHorizontal: 20,
					}}>
					<View 
						style = {{
							width: 60,
							backgroundColor: "#d9d9d9",
							borderRadius: 4,
							marginRight: 12,
						}}>
					</View>
					<View 
						style = {{
							flex: 1,
							marginRight: 4,
						}}>
						<Text 
							style = {{
								color: "#171a1f",
								fontSize: 16,
								fontWeight: "bold",
								marginBottom: 24,
							}}>
							{"Weasel"}
						</Text>
						<Text 
							style = {{
								color: "#565e6c",
								fontSize: 12,
								marginHorizontal: 15,
							}}>
							{"$20"}
						</Text>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 20,
							height: 20,
							marginRight: 42,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 20,
							height: 20,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#ffffff",
						borderColor: "#bcc1ca",
						borderRadius: 4,
						borderWidth: 1,
						paddingVertical: 2,
						marginBottom: 16,
						marginHorizontal: 20,
					}}>
					<View 
						style = {{
							width: 60,
							backgroundColor: "#d9d9d9",
							borderRadius: 4,
							marginRight: 12,
						}}>
					</View>
					<View 
						style = {{
							flex: 1,
							marginRight: 4,
						}}>
						<Text 
							style = {{
								color: "#171a1f",
								fontSize: 16,
								fontWeight: "bold",
								marginBottom: 11,
							}}>
							{"Culi"}
						</Text>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 8,
									height: 9,
									marginRight: 2,
								}}
							/>
							<Text 
								style = {{
									color: "#9095a0",
									fontSize: 14,
									flex: 1,
								}}>
								{"$0"}
							</Text>
						</View>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 20,
							height: 20,
							marginRight: 42,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 20,
							height: 20,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#ffffff",
						borderColor: "#bcc1ca",
						borderRadius: 4,
						borderWidth: 1,
						paddingVertical: 2,
						marginBottom: 57,
						marginHorizontal: 20,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 4,
							width: 60,
							height: 60,
							marginRight: 12,
						}}
					/>
					<View 
						style = {{
							flex: 1,
							marginRight: 4,
						}}>
						<Text 
							style = {{
								color: "#171a1f",
								fontSize: 16,
								fontWeight: "bold",
								marginBottom: 25,
							}}>
							{"Catimor "}
						</Text>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
								marginHorizontal: 1,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 8,
									height: 9,
									marginRight: 6,
								}}
							/>
							<Text 
								style = {{
									color: "#565e6c",
									fontSize: 12,
									flex: 1,
								}}>
								{"$9"}
							</Text>
						</View>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 20,
							height: 20,
							marginRight: 42,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 20,
							height: 20,
						}}
					/>
				</View>
				<View 
					style = {{
						alignItems: "center",
						backgroundColor: "#efb034",
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
				</View>
			</ScrollView>
		</View>
		
    )
}
