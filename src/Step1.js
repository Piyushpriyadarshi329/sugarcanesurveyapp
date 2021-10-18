import React,{useState} from 'react';
import {View, Text, ScrollView, TextInput,Button,Modal,StyleSheet,Pressable,Image} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {RadioButton} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs';



const Step1 = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false)




    const [formValues1, setFormValues1] = useState({
      workerimage:'',

      WorkerName:'',

      WorkerAddress1:'',
      WorkerAddress2:'',

      WorkerVillage:'',
      WorkerDistict:'',
      WorkerTahsil:'',
      WorkerState:'',
      WorkerDOB:'',
      WorkerAge:'',



      WorkerCountry:'India',
      WorkerEducation:'',
      WorkerCast:'',
      WorkerContact:'',
      WorkerAdharNo:'',

      WorkerBank_Ac_NO:'',
      WorkerBank_IFSC:'',
      WorkerAnuualIncome:'',
      WorkerIncomeFrom:'',
      WorkerFamily:[],

      




      //for step2
      IsCastCertificate:'',


      Worker_RationCard_No:'',
      RationCardType:'',

      WorkerMainBusiness:'',

      WorkerHaveFarm:'',

      WorkerFarmTotal:'',
      WorkerYearsOfstart_work:'',
      WorkerLastWorkingFActory:'',
      isbathroom:""

    });



const [family, setfamily] = useState({
name:'',
aadhar:'',
age:'',
relation:"",
education:'',
schoolname:'',
canecutter:''
})

  const [familydetails, setfamilydetails] = useState([{

    name:'',
    aadhar:'',
    age:'',
    relation:"",
    education:'',
    schoolname:'',
    canecutter:''
    
    
    },{

      name:'',
      aadhar:'',
      age:'',
      relation:"",
      education:'',
      schoolname:'',
      canecutter:''
      
      
      }])


      function remove(num){
        console.log("num",num)
  var newdata=[]
      familydetails.map((item,index)=>{
        if(num==index){
            return
        }else{
  
          newdata.push(item)
  
        }
  
  
      })
  
  
      setfamilydetails(newdata)
  
    }

    const onCamara = () => {
        ImagePicker.openCamera({
          width: 600,
          height: 800,
          cropping: true,
        }).then((image) => {
          // setimage(image.path);


          setFormValues1(prev=>{
prev.workerimage=image.path
return{...prev}

          })
          setModalVisible(false)
        });
      };
    
    
    
      const openLibrary = () => {
        ImagePicker.openPicker({
          width: 600,
          height: 800,
          cropping: true,
        }).then((image) => {

          setFormValues1(prev=>{
            prev.workerimage=image.path
            return{...prev}
            
                      })     
                           setModalVisible(false)

        });
      };



    function navigationnext(){


      setFormValues1(prev=>{

        var newdata=prev
        newdata.WorkerFamily=familydetails
        return{...newdata}
        
                  })








        console.log("navigation fun")
        navigation.navigate("Step2",
        {

          formValues1:formValues1,
        }
        )
    }
  return (





    <View  style={{flex:1,marginTop:20}}>


<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      
      >
        <View style={styles.centeredView}>

          <View style={styles.modalView}>
          <View style={{flexDirection: 'row'}}>
              <View style={{marginTop: 20, marginHorizontal: 10}}>
            <Button title="Image From Camara" onPress={onCamara} />
          </View>
              <View style={{marginTop: 20, marginHorizontal: 10}}>
                <Button title="Image From Gallary" onPress={openLibrary} />
              </View>
            </View>
            
          </View>



        </View>
      </Modal>



      <View style={{height:80}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
        महाराष्ट्र शासन

        </Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
सामाजिक न्याय व जवशेष सहाय्य जवभाग
        </Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
      
ऊसतोड कामगार सव्हे िर्/ आवेदन पत्र नमुना
        </Text>
      </View>


    <ScrollView>



<View style={{flexDirection:'row'}}>
  <View style={{flex:1}}>




  <View
        style={{
            height:80,
         flexDirection: 'row',
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 0.7, marginTop: 30, fontSize: 20}}>
        अिण क्र.
        </Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}></TextInput>
      </View>



      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 0.7, marginTop: 40, fontSize: 20}}>गाव :</Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}
          value={formValues1.WorkerVillage}
          onChangeText={(text)=>{
            setFormValues1(prev=>{
              prev.WorkerVillage=text
              return{...prev}
              
                        })  
  
  
          }}
        ></TextInput>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 0.7, marginTop: 40, fontSize: 20}}>तालुका : </Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}
          value={formValues1.WorkerTahsil}
          onChangeText={(text)=>{
            setFormValues1(prev=>{
              prev.WorkerTahsil=text
              return{...prev}
              
                        })  
  
  
          }}
        ></TextInput>
      </View>


      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 0.7, marginTop: 40, fontSize: 20}}>जिल्हा : </Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}
          value={formValues1.WorkerDistict}
          onChangeText={(text)=>{
            setFormValues1(prev=>{
              prev.WorkerDistict=text
              return{...prev}
              
                        })  
  
  
          }}
        ></TextInput>
      </View>
    
    
    </View>


    <View style={{flex:0.6}}>

    <View
        style={{
          flexDirection: 'row',
          height: 200,
          marginVertical:20,
          borderWidth:1,
          margin:5,
          borderRadius:5
        }}>

  {formValues1.workerimage!=''?(
    <Image
        style={{height:200,width:160}}
        source={{
        //   uri: 'https://reactnative.dev/img/tiny_logo.png',
          uri: formValues1.workerimage,

        }}
      />

  ):null}          



      </View>
      <Button
      title="upload"
      onPress={()=>{setModalVisible(true)}}
      >
          </Button>



    </View>




  </View>



  <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1.5, marginTop: 40, fontSize: 20}}>ऊसतोड कामगाराचे नाांव :-</Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}
        value={formValues1.WorkerName}
        onChangeText={(text)=>{
          setFormValues1(prev=>{
            prev.WorkerName=text
            return{...prev}
            
                      })  


        }}
        ></TextInput>
      </View>

    

      {/*  पत्ता :- सध्याचा :- ------------------------------------------
कायमचा :- ------------------------------------------

 */}


<View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1.5, marginTop: 40, fontSize: 20}}>पत्ता :-</Text>
      </View>



      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1.5, marginTop: 10,marginLeft:50, fontSize: 20}}>सध्याचा :-</Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1,marginBottom:30}}
        
        value={formValues1.WorkerAddress1}
        onChangeText={(text)=>{
          setFormValues1(prev=>{
            prev.WorkerAddress1=text
            return{...prev}
            
                      })  


        }}
        ></TextInput>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1.5, marginTop: 10,marginLeft:50, fontSize: 20}}>कायमचा :-</Text>
        <TextInput style={{borderBottomWidth: 1,marginBottom:30, flex: 1}}
        
        value={formValues1.WorkerAddress2}
        onChangeText={(text)=>{
          setFormValues1(prev=>{
            prev.WorkerAddress2=text
            return{...prev}
            
                      })  


        }}
        ></TextInput>
      </View>




      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1.5, marginTop: 40, fontSize: 20}}>जन्म दिन:</Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}
        
        value={formValues1.WorkerDOB}
        onChangeText={(text)=>{
          setFormValues1(prev=>{
            prev.WorkerDOB=text
            return{...prev}
            
                      })  


        }}
        ></TextInput>
      </View>



    
    
  
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20}}>वय वर्ष : </Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}
         value={formValues1.WorkerAge}
         onChangeText={(text)=>{
           setFormValues1(prev=>{
             prev.WorkerAge=text
             return{...prev}
             
                       })  
 
 
         }}
        ></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20}}>शिक्षण :</Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}
         value={formValues1.WorkerEducation}
         onChangeText={(text)=>{
           setFormValues1(prev=>{
             prev.WorkerEducation=text
             return{...prev}
             
                       })  
 
 
         }}
        ></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20}}>जात :</Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}
         value={formValues1.WorkerCast}
         onChangeText={(text)=>{
           setFormValues1(prev=>{
             prev.WorkerCast=text
             return{...prev}
             
                       })  
 
 
         }}
        
        ></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20}}>मोबाईल क्रमांक :</Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}
         value={formValues1.WorkerContact}
         onChangeText={(text)=>{
           setFormValues1(prev=>{
             prev.WorkerContact=text
             return{...prev}
             
                       })  
 
 
         }}
        ></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20}}>आधार क्रमाांक:-</Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}
         value={formValues1.WorkerAdharNo}
         onChangeText={(text)=>{
           setFormValues1(prev=>{
             prev.WorkerAdharNo=text
             return{...prev}
             
                       })  
 
 
         }}
        ></TextInput>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20}}>बँक खाते तपशील:-</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 10,marginLeft:50, fontSize: 20}}>खाते क्र.:</Text>
        <TextInput style={{borderBottomWidth: 1,marginBottom:30, flex: 1}}
        
        value={formValues1.WorkerBank_Ac_NO}
        onChangeText={(text)=>{
          setFormValues1(prev=>{
            prev.WorkerBank_Ac_NO=text
            return{...prev}
            
                      })  


        }}
        ></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 10,marginLeft:50, fontSize: 20}}>IFSC Code:</Text>
        <TextInput style={{borderBottomWidth: 1,marginBottom:30, flex: 1}}
         value={formValues1.WorkerBank_IFSC}
         onChangeText={(text)=>{
           setFormValues1(prev=>{
             prev.WorkerBank_IFSC=text
             return{...prev}
             
                       })  
 
 
         }}
        ></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20}}>वार्षिक उत्पादन :</Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}
        
        value={formValues1.WorkerAnuualIncome}
        onChangeText={(text)=>{
          setFormValues1(prev=>{
            prev.WorkerAnuualIncome=text
            return{...prev}
            
                      })  


        }}
        ></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20}}>उत्पन्नाचे स्त्रोत :</Text>

        {["शेती","उसतोड","इतर"].map(item => {
            return (
              <View style={{flexDirection: 'row',marginTop:30}}>
                <RadioButton
                  value="first"
                
                    status={
                      formValues1.WorkerIncomeFrom === item ? 'checked' : 'unchecked'
                    }

                    onPress={() => {
                      setFormValues1(prev => {
                        prev.WorkerIncomeFrom = item;
      
                        return {...prev};
                      });                    }}
                />
                <Text style={{marginTop: 8}}> {item}</Text>
              </View>
            );
          })}

       
      </View>
     
    



      <View
        style={{
          flexDirection: 'column',
          marginHorizontal: 10,
        }}>
            
          <View style={{flex:1}}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20,textAlign:'center'}}>कुट ां बातील व्यक्तींचा तपशील :-</Text>
          </View>
  <ScrollView horizontal={true}>
  <View style={{flexDirection:'column'}} >

<View style={{flexDirection: 'row', height: 50,marginTop:40}}>
        <View style={{marginHorizontal:3,width:150}}>
          <Text style={{textAlign: 'center'}}>व्यक्तीचे नाांव</Text>
        </View>
        <View style={{marginHorizontal:3,width:150}}>
          <Text style={{textAlign: 'center'}}>आधारकाड</Text>
        </View>
        <View style={{marginHorizontal:3,width:50}}>
          <Text style={{textAlign: 'center'}}>वय</Text>
        </View>
        <View style={{marginHorizontal:3,width:150}}>
          <Text style={{textAlign: 'center'}}>नात</Text>
        </View>
        <View style={{marginHorizontal:3,width:100}}>
          <Text style={{textAlign: 'center'}}>जशिर्</Text>
        </View>
        <View style={{marginHorizontal:3,width:100}}>
          <Text style={{textAlign: 'center'}}>ऊसतोड
मिुर आह
काय</Text>
        </View>
       
        <View style={{width:80}}>
          <Button
            title="      Add        "
            onPress={() => {

              setfamilydetails(prev => {
                console.log(prev.length)
                return [...prev, family];
              });
            }}></Button>
        </View>
      </View>


          {familydetails.map((item,index)=>{


return(

  <View style={{height: 40, flexDirection: 'row',marginVertical:10}}>

  <View style={{width:150, marginHorizontal: 3}}>
    <TextInput
      style={{flex: 1, borderWidth: 1, borderRadius: 5}}></TextInput>
  </View>
  <View style={{width:150, marginHorizontal: 3}}>
    <TextInput
      style={{flex: 1, borderWidth: 1, borderRadius: 5}}></TextInput>
  </View>
  <View style={{width:50, marginHorizontal: 3}}>
    <TextInput
      style={{flex: 1, borderWidth: 1, borderRadius: 5}}></TextInput>
  </View>

  <View style={{width:150,height:35, marginHorizontal: 3}}>
    {/* <TextInput
      style={{flex: 1, borderWidth: 1, borderRadius: 5}}></TextInput>
  */}

<View style={{borderWidth:1,borderRadius:5}}>

<Picker
style={{borderWidth:1}}
                // selectedValue={selected}
                itemStyle={{textAlign: 'center'}}
                onValueChange={(itemValue, itemIndex) =>
                  // setSelected(itemValue)
                  console.log(itemValue)
                }>
                {["self","wife","Son","daughter"].map(item => {
                  return <Picker.Item label={item} value={item} />;
                })}
              </Picker>
              </View>
  </View>



 
  <View style={{width:100, marginHorizontal: 3}}>
    <TextInput
      style={{flex: 1, borderWidth: 1, borderRadius: 5}}></TextInput>
  </View>
  <View style={{width:100, marginHorizontal: 3}}>
    <TextInput
      style={{flex: 1, borderWidth: 1, borderRadius: 5}}></TextInput>
  </View>

  <View style={{width:80}}>
    <Button title="remove" onPress={()=>{remove(index)}}></Button>
  </View>
</View>


)
          })}

          </View>
</ScrollView>


      </View>


<View style={{marginBottom:20,marginHorizontal:100,borderRadius:10}}>

<Button
title='Next'
onPress={navigationnext}
>

</Button>
</View>
      </ScrollView>

    </View>

  );
};

export default Step1;



const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
    //   marginTop:300
    justifyContent:'flex-end'
    },
    modalView: {
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      marginBottom:0,
      shadowColor: "#000",
      width:'100%',
      height:300,
      
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
