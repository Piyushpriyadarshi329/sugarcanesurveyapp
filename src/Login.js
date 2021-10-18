import React,{useState} from 'react'
import { View, Text, ScrollView } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const Login = ({navigation,route}) => {

const [username, setusername] = useState('')
const [password, setpassword] = useState('')



   const {setdum}= route.params 

async function submithandler(){


    var res = await axios.post(
        "https://dev.sutradhar.tech/chitalepop/api/v1/ustodlogin/",
  {
        username : username,
        password : password
    }  
        );


   

console.log('res.data',res.data)



    var newdata=res.data.Message
    AsyncStorage.setItem("Loginid",JSON.stringify(newdata))
    setdum(p=>!p)

// navigation.navigate('Start')


}


    return (
        <View style={{flex:1}}>
            <ScrollView>
                <View style={{flexDirection:'row',marginTop:150,marginHorizontal:50}}>
                <View style={{flex:1}}>
                    <Text style={{fontSize:28}}>User Name</Text>
                </View>
                <TextInput style={{borderWidth:1,borderRadius:5,flex:1}}
                onChangeText={(text)=>{


                    setusername(text)
                }}
                >

                </TextInput>
                </View>


                <View style={{flexDirection:'row',marginTop:40,marginHorizontal:50}}>
                <View style={{flex:1}}>
                    <Text style={{fontSize:28}}>Password</Text>
                </View>
                <TextInput style={{borderWidth:1,borderRadius:5,flex:1}}
                onChangeText={(text)=>{
                    setpassword(text)
                }}
                >

                </TextInput>
                </View>

                <View style={{flexDirection:'row',marginTop:40,flex:1,marginHorizontal:100}}>

              <TouchableOpacity style={{flex:1,backgroundColor:'dodgerblue',borderRadius:5}}
              onPress={submithandler}
              >
                  <Text style={{textAlign:'center',fontSize:28,padding:5
                }}>
                      Submit
                  </Text>
              </TouchableOpacity>

                </View>


            </ScrollView>
        </View>
    )
}

export default Login
