import React,{useEffect,useState} from 'react';
import {View, Text, Image, ImageBackground,Button, TouchableOpacity} from 'react-native';
import { AsyncStorage } from 'react-native';


const Start = ({navigation,route}) => {
  // console.log('props',route)

  const [logindata, setlogindata] = useState()
  const [dum, setdum] = useState(false)

useEffect(()=>{


  getasync()
},[dum])

// getasync()

async function getasync(){



  var asyncdata=await AsyncStorage.getItem("Loginid")
  console.log("asyncdata",JSON.parse(asyncdata))
  setlogindata(JSON.parse(asyncdata))

  

}

async function logout(){
  AsyncStorage.removeItem('Loginid');
  
setlogindata(null)
}


  return (
    <View style={{flex: 1}}>


<ImageBackground 
// source={'/home/piyush/Repos/sugercanesurveyapp/src/asset/image/photo_2021-09-02_01-00-30.jpg'} 
source={require('/home/piyush/Repos/sugercanesurveyapp/src/asset/image/photo_2021-09-02_01-00-30.jpg')}

resizeMode="cover" 
style={{ flex: 1, justifyContent: "center" }}>
  <View style={{flex:6}}>



    {logindata? (
      <View style={{flexDirection:'row', alignSelf:'flex-end'}} >


<View style={{}}>
<Text style={{textAlign:'right',marginRight:20,marginTop:30,fontSize:20}}>
            {logindata.descn}
        </Text>
        </View>


        <View style={{}}>


        <TouchableOpacity
        style={{marginRight:20,marginTop:30}}
        onPress={logout}
        >
          <Text style={{fontSize:20}}>Logout</Text>
        </TouchableOpacity>
        </View>
        </View>
    ):(
  <TouchableOpacity
  onPress={()=>{navigation.navigate('Login',{setdum:setdum})}}
  >
    <View>
      <Text style={{textAlign:'right',marginRight:20,marginTop:30,fontSize:20}}>Login</Text>
    </View>
  </TouchableOpacity>

    )}
  

  </View>


  <TouchableOpacity
   style={{flex:1,marginHorizontal:100}}
   onPress={() => {
    navigation.navigate('Step1');
  }}
   >

  </TouchableOpacity>
  <View style={{flex:2.3}}>

</View>
   
{/* <Button
        title="start"
        onPress={() => {
          navigation.navigate('QuestionPage');
        }}></Button> */}
    </ImageBackground>
      {/* <Image
        style={{flex: 1}}
        source={require(' /home/piyush/Repos/sugercanesurveyapp/src/asset/image/photo_2021-09-02_01-00-30.jpg ')}
      /> */}
   
    </View>
  );
};

export default Start;
