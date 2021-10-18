import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { RadioButton } from 'react-native-paper';



const Step3 = ({ navigation,route }) => {
  const {formValues1,formValues2}=route.params




  const [formValues3, setFormValues3] = useState({
   
    //for step3
    bloodgroup:'',
    profit:'',
    sanjaygandhiyojyna:'',
    arogyadetails:[],
    nameaddress:'',
    satraya:""
  });





  const [family, setfamily] = useState({

    name: '',
    aadhar: '',
    age: '',
    relation: "",
    education: '',
    schoolname: '',
    canecutter: ''


  })

  const [familydetails, setfamilydetails] = useState([{

    name: '',
    aadhar: '',
    age: '',
    relation: "",
    education: '',
    schoolname: '',
    canecutter: ''


  }, {

    name: '',
    aadhar: '',
    age: '',
    relation: "",
    education: '',
    schoolname: '',
    canecutter: ''


  }])


  function remove(num) {
    console.log("num", num)
    var newdata = []
    familydetails.map((item, index) => {
      if (num == index) {
        return
      } else {

        newdata.push(item)

      }


    })


    setfamilydetails(newdata)

  }



  function navigationnext() {



    console.log("navigation fun")
    navigation.navigate("Step4",{
    
    formValues1:formValues1,
    formValues2:formValues2,
    formValues3:formValues3,

    
})
  }

  function navigationback() {



    console.log("navigation fun")
    navigation.navigate("Step2",{
      formValues1:formValues1
    })

  }
  return (





    <View style={{ flex: 1, marginTop: 20 }}>



      <View style={{ height: 40 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
          3) ऊसतोड कामगार सर्वेक्षण नमुना
        </Text>
      </View>

      
   


      <ScrollView>


     


        <View
          style={{
            flexDirection: 'row',
            height: 200,
            marginHorizontal: 10,
          }}>
          <Text style={{ flex: 1, marginTop: 40, fontSize: 20 ,height:200}}>सांियगाांधी जनराधार योिना/ श्रावर्बाळ योिना/इांजदरागाांधी वृध्दापकाळ योिना/ पीएम-जकसान सन्मान जनधी/यापैकी कोर्त्या योिनेचा लाभ घेतला आहे .</Text>
          <TextInput style={{ borderBottomWidth: 1, flex: 1 }}
            value={formValues3.sanjaygandhiyojyna}
            onChangeText={(text)=>{
              setFormValues3(prev=>{
                prev.sanjaygandhiyojyna=text
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
          <Text style={{ flex: 1, marginTop: 40, fontSize: 20 }}>रक्तगट :- </Text>
          <TextInput style={{ borderBottomWidth: 1, flex: 1 }}
           value={formValues3.bloodgroup}
           onChangeText={(text)=>{
             setFormValues3(prev=>{
               prev.bloodgroup=text
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
          <Text style={{ flex: 1.5, marginTop: 40, fontSize: 20 ,height:90}}>यापुवी कोर्त्याही वैद्यजकय जवमा
            योिनेचा लाभ घेतलेला आहे का ?</Text>
          <TextInput style={{ borderBottomWidth: 1, flex: 1 }}
          
          value={formValues3.profit}
          onChangeText={(text)=>{
            setFormValues3(prev=>{
              prev.profit=text
              return{...prev}
              
                        })  
      
      
          }} 
          
          ></TextInput>
        </View>






       




        <View
          style={{
            flexDirection: 'column',
            marginHorizontal: 10,
          }}>

          <View style={{ flex: 1 }}>
            <Text style={{ flex: 1, marginTop: 40, fontSize: 20, textAlign: 'center' }}>आरोग्य सांबांजधत तपजशल :-</Text>
          </View>
          <ScrollView horizontal={true}>
            <View style={{ flexDirection: 'column' }} >

              <View style={{ flexDirection: 'row', height: 50 }}>
                <View style={{ marginHorizontal: 3, width: 100 }}>
                  <Text style={{ textAlign: 'center' }}>आिारी व्यक्तींचे नाांव</Text>
                </View>
                <View style={{ marginHorizontal: 3, width: 50 }}>
                  <Text style={{ textAlign: 'center' }}>वय</Text>
                </View>
                <View style={{ marginHorizontal: 3, width: 100 }}>
                  <Text style={{ textAlign: 'center' }}>कुठला आिार</Text>
                </View>
                <View style={{ marginHorizontal: 3, width: 100 }}>
                  <Text style={{ textAlign: 'center' }}>उपचार</Text>
                </View>
                <View style={{ marginHorizontal: 3, width: 100 }}>
                  <Text style={{ textAlign: 'center' }}>कुठ</Text>
                </View>
               
              
                <View style={{ width:80 }}>
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


              {familydetails.map((item, index) => {


                return (

                  <View style={{ height: 40, flexDirection: 'row', marginVertical: 10 }}>
                    <View style={{  width:100, marginHorizontal: 3 }}>
                      <TextInput
                        style={{ flex: 1, borderWidth: 1, borderRadius: 5 }}></TextInput>
                    </View>
                    <View style={{ width:50, marginHorizontal: 3 }}>
                      <TextInput
                        style={{ flex: 1, borderWidth: 1, borderRadius: 5 }}></TextInput>
                    </View>
                    <View style={{  width:100, marginHorizontal: 3 }}>
                      <TextInput
                        style={{ flex: 1, borderWidth: 1, borderRadius: 5 }}></TextInput>
                    </View>

                



                  
                    <View style={{ width:100, marginHorizontal: 3 }}>
                      <TextInput
                        style={{ flex: 1, borderWidth: 1, borderRadius: 5 }}></TextInput>
                    </View>
                    <View style={{ width:100, marginHorizontal: 3 }}>
                      <TextInput
                        style={{ flex: 1, borderWidth: 1, borderRadius: 5 }}></TextInput>
                    </View>

                    <View style={{ width:80}}>
                      <Button title="remove" onPress={() => { remove(index) }}></Button>
                    </View>
                  </View>


                )
              })}

            </View>
          </ScrollView>



          <View
          style={{
            flexDirection: 'row',
            height: 80,
            marginHorizontal: 10,
          }}>
          <Text style={{ flex: 1, marginTop: 40, fontSize: 20 ,height:70}}>गभाशयाची शस्त्रजक्रया झालेली आहे काय :- </Text>
          <TextInput style={{ borderBottomWidth: 1, flex: 1 }}
           value={formValues3.satraya}
           onChangeText={(text)=>{
             setFormValues3(prev=>{
               prev.satraya=text
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
          <Text style={{ flex: 1, marginTop: 40, fontSize: 20,height:90 }}>असल्यास शस्त्रजक्रया केलेल्या दवाखान्याचे नाांव व पत्ता :-</Text>
          <TextInput style={{ borderBottomWidth: 1, flex: 1 }}
           value={formValues3.nameaddress}
           onChangeText={(text)=>{
             setFormValues3(prev=>{
               prev.profit=text
               return{...prev}
               
                         })  
       
       
           }} 
          ></TextInput>
        </View>





        </View>


        <View style={{ marginBottom: 20, marginHorizontal: 50, borderRadius: 10, flexDirection: 'row', marginTop: 60 }}>
          <View style={{ flex: 1 }}>
            <Button
              title='Back'
              onPress={navigationback}
            >

            </Button>

          </View>

          <View style={{ flex: 1, marginHorizontal: 10 }}>
            <Button
              title='Next'
              onPress={navigationnext}
            >

            </Button>

          </View>



        </View>


      </ScrollView>

    </View>

  );
};

export default Step3;
