import React,{useEffect} from 'react'
import { View, Text,Image ,ImageBackground} from 'react-native';
import {Picker} from '@react-native-community/picker';


const SplashScreen = ({navigation}) => {

    useEffect(() => {


        setTimeout(() => {  navigation.navigate("Start",{async:true}) }, 2000);
      
      }, [])

    return (
        <View style={{flex:1}}>
 {/* <Image
        style={{flex:1}}
        source={require('/home/piyush/Repos/sugercanesurveyapp/src/asset/image/photo_2021-09-02_00-46-52.jpg')}
      /> */}


      <ImageBackground 
// source={'/home/piyush/Repos/sugercanesurveyapp/src/asset/image/photo_2021-09-02_01-00-30.jpg'} 
        source={require('/home/piyush/Repos/sugercanesurveyapp/src/asset/image/photo_2021-09-02_00-46-52.jpg')}

resizeMode="cover" 
style={{ flex: 1, justifyContent: "center" }}>

</ImageBackground>
        </View>
    )
}

export default SplashScreen
