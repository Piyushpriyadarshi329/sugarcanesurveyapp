import React, { useState ,useEffect} from 'react';
import { View, Text, ScrollView, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { RadioButton } from 'react-native-paper';



const Step2 = ({ navigation,route }) => {
  const {formValues1}=route.params














  const [formValues2, setFormValues2] = useState({
   

    




    //for step2
    IsCastCertificate:'',


    Worker_RationCard_No:'',
    RationCardType:'',

    WorkerMainBusiness:'',

    WorkerHaveFarm:'',

    WorkerFarmTotal:'',
    WorkerYearsOfstart_work:'',
    WorkerLastWorkingFActory:'',
    isbathroom:"",
    housetype:'',
    iselectricity:'',
    iswater:'',
    udid:'',
    disabilitynumber:'',
    disabilitytype:'',
    disabilityperson:'',
    housesati:"",
    asalyas:'',
    vehicletype:'',
    loan:'',
    howmanyyear:''




  });



  const [family, setfamily] = useState({

    sno: '',
    cuttername: "",
    factoryname: '',
    year: '',
    code: ''


  })

  const [familydetails, setfamilydetails] = useState([{

    sno: '',
    cuttername: "",
    factoryname: '',
    year: '',
    code: ''


  }, {

    sno: '',
    cuttername: "",
    factoryname: '',
    year: '',
    code: ''


  },{

    sno: '',
    cuttername: "",
    factoryname: '',
    year: '',
    code: ''


  }

])


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



    console.log("navigation fun1")
    navigation.navigate("Step3",{

      formValues1:formValues1,
      formValues2:formValues2,

    }
    
   )
  }

  function navigationback() {



    console.log("navigation fun")
    navigation.navigate("Step1")
    
  

  }

  return (

    <View style={{ flex: 1, marginTop: 20 }}>



      <View style={{ height: 40 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
          2) ??????????????? ?????????????????? ??????????????????????????? ???????????????
        </Text>
      </View>


      <ScrollView>


        <View
          style={{
            height: 80,
            flexDirection: 'row',
            marginHorizontal: 10,
          }}>
          <Text style={{ flex: 1, marginTop: 50, fontSize: 20 }}>
            ????????? ????????????????????????????????? ????????? ?????? ?
          </Text>
          {["?????????","????????????"].map(item => {
            return (
              <View style={{flexDirection: 'row',marginTop:30}}>
                <RadioButton
                  value="first"
                  status={
                    formValues2.IsCastCertificate === item ? 'checked' : 'unchecked'
                  }

                  onPress={() => {
                    setFormValues2(prev => {

                     var newdata=prev
                      newdata.IsCastCertificate = item;

                      console.log("newdata,", newdata)
    
                      return {...newdata};
                    });                    }}
                />
                <Text style={{marginTop: 8}}> {item}</Text>
              </View>
            );
          })}
        </View>


        <View
          style={{
            flexDirection: 'row',
            height: 80,
            marginHorizontal: 10,
          }}>
          <Text style={{ flex: 1, marginTop: 50, fontSize: 20 }}>????????????????????????????????? ????????????????????????</Text>
          <TextInput style={{ borderBottomWidth: 1, flex: 1 }}
           value={formValues2.Worker_RationCard_No}
           onChangeText={(text)=>{
             setFormValues2(prev=>{
               prev.Worker_RationCard_No=text
               return{...prev}
               
                         })  
   
   
           }}
          ></TextInput>
        </View>

        <View
          style={{
            flexDirection: 'row',
            height: 250,
            marginHorizontal: 10,
          }}>
          <View style={{flex:1,}}>
          <Text style={{ flex: 2, marginTop: 40, fontSize: 20, height: 90 }}>????????????????????????????????? ?????????????????? :-</Text>
</View>
          <View style={{flex:1}}>
          {["BPL","???????????????","??????????????? ???????????????????????????","??????????????????"].map(item => {
            return (
              <View style={{flexDirection: 'row',marginTop:30,height:60,flex:1}}>
                <RadioButton
                  value="first"
                  status={
                    formValues2.RationCardType === item ? 'checked' : 'unchecked'
                  }

                  onPress={() => {
                    setFormValues2(prev => {

                     var newdata=prev
                      newdata.RationCardType = item;

                      console.log("newdata,", newdata)
    
                      return {...newdata};
                    });                    }}
                />
                <Text style={{marginTop: 8}}> {item}</Text>
              </View>
            );
          })}
          </View>
        </View>










        <View
          style={{
            flexDirection: 'row',
            height: 80,
            marginHorizontal: 10,
          }}>
          <Text style={{ flex: 1, marginTop: 60, fontSize: 20, height: 40 }}>??????????????? ????????????????????? :- </Text>
          <TextInput style={{ borderBottomWidth: 1, flex: 1 }}
          
          value={formValues2.WorkerMainBusiness}
          onChangeText={(text)=>{
            setFormValues2(prev=>{
              prev.WorkerMainBusiness=text
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
          <Text style={{ flex: 1, marginTop: 40, fontSize: 20, height: 60 }}>???????????? ????????? ????????? ?</Text>
          {["?????????","????????????"].map(item => {
            return (
              <View style={{flexDirection: 'row',marginTop:30}}>
                <RadioButton
                  value="first"
                  status={
                    formValues2.WorkerHaveFarm === item ? 'checked' : 'unchecked'
                  }

                  onPress={() => {
                    setFormValues2(prev => {

                     var newdata=prev
                      newdata.WorkerHaveFarm = item;

                      console.log("newdata,", newdata)
    
                      return {...newdata};
                    });                    }}
                />
                <Text style={{marginTop: 8}}> {item}</Text>
              </View>
            );
          })}
        </View>



        <View
          style={{
            flexDirection: 'row',
            height: 80,
            marginHorizontal: 10,
          }}>
          <Text style={{ flex: 1, marginTop: 40, fontSize: 20, height: 70 }}>????????????????????? ???????????? ?  :-</Text>

          {["?????????????????????","?????????????????????"].map(item => {
            return (
              <View style={{flexDirection: 'row',marginTop:30}}>
                <RadioButton
                  value="first"
                  status={
                    formValues2.asalyas === item ? 'checked' : 'unchecked'
                  }

                  onPress={() => {
                    setFormValues2(prev => {

                     var newdata=prev
                      newdata.asalyas = item;

                      console.log("newdata,", newdata)
    
                      return {...newdata};
                    });                    }}
                />
                <Text style={{marginTop: 8}}> {item}</Text>
              </View>
            );
          })}




        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 80,
            marginHorizontal: 10,
          }}>
          <Text style={{ flex: 1, marginTop: 40, fontSize: 20, height: 90 }}>????????? ????????? ??????????????? ????????? ????????? ? ????????????????????? ???????????? :-</Text>
          <TextInput style={{ borderBottomWidth: 1, flex: 1 }}
          
              
          value={formValues2.loan}
          onChangeText={(text)=>{
            setFormValues2(prev=>{
              prev.loan=text
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
          <Text style={{ flex: 1, marginTop: 40, fontSize: 20, height: 70 }}>???????????? ????????????????????? ??? ???????????????????????? ????????????</Text>
          <TextInput style={{ borderBottomWidth: 1, flex: 1 }}
             value={formValues2.howmanyyear}
             onChangeText={(text)=>{
               setFormValues2(prev=>{
                 prev.howmanyyear=text
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
          <Text style={{ flex: 1, marginTop: 40, fontSize: 20, height: 70 }}>?????????????????????????????? ?????????????????? ??????????????????  :-</Text>
          {["???????????????","?????????????????????","????????????"].map(item => {
            return (
              <View style={{flexDirection: 'row',marginTop:30}}>
                <RadioButton
                  value="first"
                  status={
                    formValues2.vehicletype === item ? 'checked' : 'unchecked'
                  }

                  onPress={() => {
                    setFormValues2(prev => {

                     var newdata=prev
                      newdata.vehicletype = item;

                      console.log("newdata,", newdata)
    
                      return {...newdata};
                    });                    }}
                />
                <Text style={{marginTop: 8}}> {item}</Text>
              </View>
            );
          })}      
            </View>


     
        <View
          style={{
            flexDirection: 'row',
            height: 80,
            marginHorizontal: 10,
          }}>


          <Text style={{ flex: 1, marginTop: 40, fontSize: 20, height: 70 }}>????????????????????? ????????? ????????????????????? ????????????????????????????????? ???????????? ???????????? :-</Text>
          <TextInput style={{ borderBottomWidth: 1, flex: 1 }}
          
          
          value={formValues2.WorkerLastWorkingFActory}
          onChangeText={(text)=>{
            setFormValues2(prev=>{
              prev.WorkerLastWorkingFActory=text
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
            <Text style={{ flex: 1, marginTop: 40, fontSize: 20, textAlign: 'center' }}>??????????????? ????????? ???????????? ??????????????? ?????????????????? ??????????????? ??? ?????????????????? ?????????????????? ??????????????? </Text>
          </View>
          <ScrollView horizontal={true}>
            <View style={{ flexDirection: 'column' }} >

              <View style={{ flexDirection: 'row', height: 50 }}>
                <View style={{ marginHorizontal: 3, width: 50 }}>
                  <Text style={{ textAlign: 'center',fontSize:18  }}>???.?????????.</Text>
                </View>
                <View style={{ marginHorizontal: 3, width: 200 }}>
                  <Text style={{ textAlign: 'center',fontSize:18  }}>?????????????????????????????????/??????????????????????????? ???????????????</Text>
                </View>
                <View style={{ marginHorizontal: 3, width: 100 }}>
                  <Text style={{ textAlign: 'center',fontSize:18  }}>????????????????????????????????? ???????????????</Text>
                </View>
                <View style={{ marginHorizontal: 3, width: 100 }}>
                  <Text style={{ textAlign: 'center' ,fontSize:18 }}>??????</Text>
                </View>
                <View style={{ marginHorizontal: 3, width: 100 }}>
                  <Text style={{ textAlign: 'center',fontSize:18 }}>?????????</Text>
                </View>


               
              </View>


              {familydetails.map((item, index) => {


                return (

                  <View style={{ height: 40, flexDirection: 'row', marginVertical: 5}}>
                    <View style={{ width:50, marginHorizontal: 3 }}>
                      <TextInput
                        style={{ flex: 1, borderWidth: 1, borderRadius: 5 }}></TextInput>
                    </View>
                    <View style={{ width:200, marginHorizontal: 3 }}>
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
                    <View style={{ width:100, marginHorizontal: 3 }}>
                      <TextInput
                        style={{ flex: 1, borderWidth: 1, borderRadius: 5 }}></TextInput>
                    </View>



                  </View>


                )
              })}

            </View>
          </ScrollView>


        </View>



        <View
          style={{
            flexDirection: 'row',
            height: 80,
            marginHorizontal: 10,
          }}>
          <Text style={{ flex: 1, marginTop: 40, fontSize: 20 }}>??????????????? ?????????????????? :-</Text>
          {/* <TextInput style={{ borderBottomWidth: 1, flex: 1 }}></TextInput> */}
          
          {["??????????????? ??????","??????????????? ??????"].map(item => {
            return (
              <View style={{flexDirection: 'row',marginTop:30}}>
                <RadioButton
                  value="first"
                  status={
                    formValues2.housetype === item ? 'checked' : 'unchecked'
                  }

                  onPress={() => {
                    setFormValues2(prev => {

                     var newdata=prev
                      newdata.housetype = item;

    
                      return {...newdata};
                    });                    }}
                />
                <Text style={{marginTop: 8}}> {item}</Text>
              </View>
            );
          })}
        </View>


        <View
          style={{
            flexDirection: 'row',
            height: 80,
            marginHorizontal: 10,
          }}>
          <Text style={{ flex: 1, marginTop: 40, fontSize: 20 ,height:70}}>????????????????????? ???????????? ????????????:?????? ????????? ????????? ?
          </Text>
          <TextInput style={{ borderBottomWidth: 1, flex: 1 }}
    value={formValues2.housesati}
    onChangeText={(text)=>{
      setFormValues2(prev=>{
        prev.housesati=text
        return{...prev}
        
                  })  


    }}          ></TextInput>
        </View>





        <View
          style={{
            flexDirection: 'row',
            height: 80,
            marginHorizontal: 10,
          }}>
          <Text style={{ flex: 1, marginTop: 40, fontSize: 20 }}>?????????????????? - 
          </Text>

          {["?????????","????????????"].map(item => {
            return (
              <View style={{flexDirection: 'row',marginTop:30}}>
                <RadioButton
                  value="first"
                  status={
                    formValues2.isbathroom === item ? 'checked' : 'unchecked'
                  }

                  onPress={() => {
                    setFormValues2(prev => {

                     var newdata=prev
                      newdata.isbathroom = item;

                      console.log("newdata,", newdata)
    
                      return {...newdata};
                    });                    }}
                />
                <Text style={{marginTop: 8}}> {item}</Text>
              </View>
            );
          })}


        </View>



        <View
          style={{
            flexDirection: 'row',
            height: 80,
            marginHorizontal: 10,
          }}>
          <Text style={{ flex: 1, marginTop: 40, fontSize: 20 }}>????????? :-
          </Text>



          {["?????????","????????????"].map(item => {
            return (
              <View style={{flexDirection: 'row',marginTop:30}}>
                <RadioButton
                  value="first"
                  status={
                    formValues2.iselectricity === item ? 'checked' : 'unchecked'
                  }

                  onPress={() => {
                    setFormValues2(prev => {

                     var newdata=prev
                      newdata.iselectricity = item;

                      console.log("newdata,", newdata)
    
                      return {...newdata};
                    });                    }}
                />
                <Text style={{marginTop: 8}}> {item}</Text>
              </View>
            );
          })}


        </View>

        <View
          style={{
            flexDirection: 'row',
            height: 80,
            marginHorizontal: 10,
          }}>
          <Text style={{ flex: 1, marginTop: 40, fontSize: 20 }}>??????????????? - 
          </Text>

          {["?????????","????????????"].map(item => {
            return (
              <View style={{flexDirection: 'row',marginTop:30}}>
                <RadioButton
                  value="first"
                  status={
                    formValues2.iswater === item ? 'checked' : 'unchecked'
                  }

                  onPress={() => {
                    setFormValues2(prev => {

                     var newdata=prev
                      newdata.iswater = item;

                      console.log("newdata,", newdata)
    
                      return {...newdata};
                    });                    }}
                />
                <Text style={{marginTop: 8}}> {item}</Text>
              </View>
            );
          })}    
              </View>


     


        <View
          style={{
            flexDirection: 'row',
            height: 80,
            marginHorizontal: 10,
          }}>
          <Text style={{ flex: 1, marginTop: 40, fontSize: 20 ,height:90}}>????????? ?????? ??????????????? ??????????????????????????? ????????????????????? ( ????????????????????? ???????????????????????? ??????????????? ) ??? :-
          </Text>
          <TextInput style={{ borderBottomWidth: 1, flex: 1 }}
            value={formValues2.disabilityperson}
            onChangeText={(text)=>{
              setFormValues2(prev=>{
                prev.disabilityperson=text
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
          <Text style={{ flex: 1, marginTop: 40, fontSize: 20 }}>????????????????????????????????????????????? ?????????????????? :-
          </Text>
          <TextInput style={{ borderBottomWidth: 1, flex: 1 }}
           value={formValues2.disabilitytype}
           onChangeText={(text)=>{
             setFormValues2(prev=>{
               prev.disabilitytype=text
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
          <Text style={{ flex: 1, marginTop: 40, fontSize: 20 ,height:70}}>??????????????????????????? ????????????????????????????????? ????????????????????? ???????????????????????? :-
          </Text>
          <TextInput style={{ borderBottomWidth: 1, flex: 1 }}
           value={formValues2.disabilitynumber}
           onChangeText={(text)=>{
             setFormValues2(prev=>{
               prev.disabilitynumber=text
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
          <Text style={{ flex: 1, marginTop: 40, fontSize: 20 ,height:70}}>UDID ???????????????????????? (Unique Disability ID) :-
          </Text>
          <TextInput style={{ borderBottomWidth: 1, flex: 1 }}
          
          value={formValues2.udid}
          onChangeText={(text)=>{
            setFormValues2(prev=>{
              prev.udid=text
              return{...prev}
              
                        })  
  
  
          }}
          ></TextInput>
        </View>



        <View style={{ marginBottom: 20, marginHorizontal: 50, borderRadius: 10, flexDirection: 'row', marginTop: 20 }}>
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

export default Step2;
