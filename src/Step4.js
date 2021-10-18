import React, { useState ,useEffect} from 'react';
import { View, Text, ScrollView, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { RadioButton } from 'react-native-paper';
import axios from 'axios';
import ImgToBase64 from 'react-native-image-base64';


const Step4 = ({ navigation, route }) => {
  const { formValues1,formValues2,formValues3  } = route.params
  const [surveyerdata, setsurveyerdata] = useState()

  useEffect(()=>{


    getasync()
  },[])
  
  // getasync()
  
  async function getasync(){
  
  
  
    var asyncdata=await AsyncStorage.getItem("Loginid")
    console.log("asyncdata",JSON.parse(asyncdata))
    setsurveyerdata(JSON.parse(asyncdata))
  
    
  
  }
const [uniquecode, setuniquecode] = useState('')

  const [formValues4, setFormValues4] = useState({

    //for step4
    declear1: '',
    declear2: '',
    declear3: '',
    declear4: '',
    declear5: '',
    declear6: '',
    declear7: '',
    declear8: '',
    activity1: '',
    activity2: '',
    activity3: '',
    activity4: '',
    activity5: '',
    activity6: '',




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


  async function Submithandler() {

   var resbase64= await  ImgToBase64.getBase64String(formValues1.workerimage)
    var formValues={

      ...formValues1,
      ...formValues2,
      ...formValues3,
      ...formValues4,
      workerimage64:resbase64,
      surveyby:surveyerdata.recno

    }
    let WorkerInfo = { details: formValues };

    var res = await axios.post(
      "http://dev.sutradhar.tech/chitalepop/api/v1/ustod/",
      WorkerInfo
    );
    console.log("response.....", res.data);
    setuniquecode(res.data.Message)

    console.log("navigation fun")
    navigation.navigate("Pdfpage",{

      uniquecode:res.data.Message,
      formValues:formValues
    })

  }

  function navigationback() {



    console.log("navigation fun")
    navigation.navigate("Step3",{
      formValues1:formValues1,
      formValues2:formValues2

    })

  }
  return (





    <View style={{ flex: 1, marginTop: 20 }}>



      <View style={{ height: 40 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
          4) ऊसतोड कामगार सर्वेक्षण नमुना
        </Text>
      </View>


      <ScrollView>



        <View>
          <View style={{ flex: 1, marginHorizontal: 10 }}>

            <Text style={{ fontSize: 28, textAlign: 'center' }}>
              स्वयांघोषर्ापत्र
            </Text>
            <View style={{ flexDirection: 'row' }}>

              <Text style={{ marginTop: 30, marginRight: 10 }}>
                मी
              </Text>
              <TextInput style={{ borderBottomWidth: 1, width: 200 }}
                value={formValues4.declear1}
                onChangeText={(text) => {
                  setFormValues4(prev => {
                    prev.declear1 = text
                    return { ...prev }

                  })


                }}
              >

              </TextInput>
              <Text style={{ marginTop: 30, marginRight: 10 }}>
                श्री
              </Text>
              <TextInput style={{ borderBottomWidth: 1, width: 200 }}
                value={formValues4.declear2}
                onChangeText={(text) => {
                  setFormValues4(prev => {
                    prev.declear2 = text
                    return { ...prev }

                  })


                }}
              >

              </TextInput>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginTop: 30, marginRight: 10 }}>

                यांचा मुलगा / मुलगी वय
              </Text>
              <TextInput style={{ borderBottomWidth: 1, width: 180 }}
                value={formValues4.declear3}
                onChangeText={(text) => {
                  setFormValues4(prev => {
                    prev.declear3 = text
                    return { ...prev }

                  })


                }}
              >

              </TextInput>
              <Text style={{ marginTop: 30, marginRight: 10 }}>

                वर्ष, राहणार
              </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <TextInput style={{ borderBottomWidth: 1, width: 180 }}
                value={formValues4.declear4}
                onChangeText={(text) => {
                  setFormValues4(prev => {
                    prev.declear4 = text
                    return { ...prev }

                  })


                }}
              >

              </TextInput>
              <Text style={{ marginTop: 30, marginRight: 10 }}>
                याद्वारे असे घोषित करतो / करते कि
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>

              <Text>
                वरील सर्व माहिती माज्या व्यक्तिगत माहिती व समजुती नुसार खरी आहे.
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>

              <Text>
                तसेच मी स्वयं साक्षांकित केलेल्या मूळ कागदाच्या प्रति सत्यप्रती आहेत.

              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>

              <Text>
                मी दिलेली कोणती हि माहिती अथवा कागदपत्र खोटे असल्याचे आढळून

              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>

              <Text>
                आल्यास भारतीय दंड किव्वा संबंधित कायद्यानुसार मी शिक्षेस पात्र राहीन

              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>

              <Text>
                ह्याची मला जाणीव आहे.
              </Text>

            </View>
            <View style={{ flexDirection: 'row' }}>

              <Text style={{ marginTop: 30, marginRight: 10 }}>
                ठिकाण :
              </Text>
              <TextInput style={{ borderBottomWidth: 1, width: 180 }}
                value={formValues4.declear5}
                onChangeText={(text) => {
                  setFormValues4(prev => {
                    prev.declear5 = text
                    return { ...prev }

                  })


                }}
              >

              </TextInput>
            </View>
            <View style={{ flexDirection: 'row' }}>

              <Text style={{ marginTop: 30, marginRight: 10 }}>
                स्थळ :
              </Text>
              <TextInput style={{ borderBottomWidth: 1, width: 180 }}
                value={formValues4.declear6}
                onChangeText={(text) => {
                  setFormValues4(prev => {
                    prev.declear6 = text
                    return { ...prev }

                  })


                }}
              >

              </TextInput>
            </View>

            <View style={{ flexDirection: 'row' }}>

              <Text style={{ marginTop: 30, marginRight: 10 }}>
                अिणदाराची सही/अांगठा:
              </Text>
              <TextInput style={{ borderBottomWidth: 1, width: 180 }}
                value={formValues4.declear7}
                onChangeText={(text) => {
                  setFormValues4(prev => {
                    prev.declear7 = text
                    return { ...prev }

                  })


                }}
              >

              </TextInput>
            </View>

            <View style={{ flexDirection: 'row' }}>

              <Text style={{ marginTop: 30, marginRight: 10 }}>
                अर्जदाराचे नावं :
              </Text>
              <TextInput style={{ borderBottomWidth: 1, width: 180 }}
                value={formValues4.declear8}
                onChangeText={(text) => {
                  setFormValues4(prev => {
                    prev.declear8 = text
                    return { ...prev }

                  })


                }}
              >

              </TextInput>
            </View>


            <View style={{ height: 200 }}>

            </View>

          </View>



        </View>



        <View>

          <View style={{ flex: 1, marginHorizontal: 10 }}>

            <Text style={{ fontSize: 28, textAlign: 'center' }}>
              कार्यालर्यीन उपर्योगासाठी
            </Text>


            <View style={{ flexDirection: 'row' }}>

              <Text style={{ marginTop: 30, marginRight: 10 }}>
                1. अिणदाराने जदलेली माजहती व कागदपत्रे छाननीअांती बरोबर असल्याचे आढळ न येते.</Text>


            </View>




            <View style={{ flexDirection: 'column' }}>

              <Text style={{ marginTop: 30, marginRight: 10 }}>
                2. अिणदाराच्या नाव नोंदर्ी अिाचा नोंदवहीतील अनुक्रमाांक /ओळख
              </Text>
              <View style={{ flexDirection: 'row' }}>

                <Text style={{ marginTop: 30, marginRight: 10 }}>
                  क्रमाांक

                </Text>
                <TextInput style={{ borderBottomWidth: 1, width: 140 }}
                  value={formValues4.activity1}
                  onChangeText={(text) => {
                    setFormValues4(prev => {
                      prev.activity1 = text
                      return { ...prev }

                    })


                  }}
                >

                </TextInput>


                <Text style={{ marginTop: 30, marginRight: 10 }}>
                  व जदनाांक

                </Text>
                <TextInput style={{ borderBottomWidth: 1, width: 140 }}
                  value={formValues4.activity2}
                  onChangeText={(text) => {
                    setFormValues4(prev => {
                      prev.activity2 = text
                      return { ...prev }

                    })


                  }}
                >

                </TextInput>
              </View>
              <Text style={{ marginTop: 30, marginRight: 10 }}>

                आहे व ते ऊसतोडर्ी कामगार म्हर् न पात्र आहेत.
              </Text>





            </View>




            <View style={{ marginTop: 40 }}>
              <Text>
                ग्रामसेवक/ग्रामजवकास अजधकारी याांचे नाांव व स्वािरी
              </Text>



            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginTop: 30 }}>
                गावाचे नाांव:
              </Text>
              <TextInput style={{ borderBottomWidth: 1, width: 140 }}
                value={formValues4.activity3}
                onChangeText={(text) => {
                  setFormValues4(prev => {
                    prev.activity3 = text
                    return { ...prev }

                  })


                }}
              >

              </TextInput>



            </View>



            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginTop: 30 }}>
                ता.
              </Text>
              <TextInput style={{ borderBottomWidth: 1, width: 140 }}
                value={formValues4.activity4}
                onChangeText={(text) => {
                  setFormValues4(prev => {
                    prev.activity4 = text
                    return { ...prev }

                  })


                }}
              >

              </TextInput>



            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginTop: 30 }}>
                जि.
              </Text>
              <TextInput style={{ borderBottomWidth: 1, width: 140 }}
                value={formValues4.activity5}
                onChangeText={(text) => {
                  setFormValues4(prev => {
                    prev.activity5 = text
                    return { ...prev }

                  })


                }}
              >

              </TextInput>



            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginTop: 30 }}>
                मोबाईल नांबर :-
              </Text>
              <TextInput style={{ borderBottomWidth: 1, width: 140 }}
                value={formValues4.activity6}
                onChangeText={(text) => {
                  setFormValues4(prev => {
                    prev.activity6 = text
                    return { ...prev }

                  })


                }}
              >

              </TextInput>



            </View>




          </View>



        </View>





        <View style={{ marginBottom: 20, marginTop: 50, marginHorizontal: 50, borderRadius: 10, flexDirection: 'row', marginTop: 10 }}>
          <View style={{ flex: 1 }}>
            <Button
              title='Back'
              onPress={navigationback}
            >

            </Button>

          </View>

          <View style={{ flex: 1, marginHorizontal: 10 }}>
            <Button
              title='Submit'
              onPress={Submithandler}
            >

            </Button>

          </View>



        </View>


      </ScrollView>

    </View>

  );
};

export default Step4;
