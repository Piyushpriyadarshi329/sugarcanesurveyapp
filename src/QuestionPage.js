import React,{useState} from 'react';
import {View, Text, ScrollView, TextInput,Button} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {RadioButton} from 'react-native-paper';



const QuestionPage = () => {

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
  return (





    <View  style={{flex:1,marginTop:20}}>



      <View style={{height:40}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
          ऊसतोड कामगार सर्वेक्षण नमुना
        </Text>
      </View>


    <ScrollView>


      <View
        style={{
            height:80,
         flexDirection: 'row',
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 30, fontSize: 20}}>
          ऊसतोड कामगाराचे नाव:
        </Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}></TextInput>
      </View>


      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20}}>गाव :</Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}></TextInput>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20}}>तालुका : </Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}></TextInput>
      </View>
    
    
    
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1.5, marginTop: 40, fontSize: 20}}>जन्म दिन:(DD/MM/YYY)</Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}></TextInput>
      </View>



    
    
  
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20}}>वय वर्ष : </Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20}}>शिक्षण :</Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20}}>जात :</Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20}}>मोबाईल क्रमांक :</Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20}}>आधार :</Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20}}>बँक खाते क्रमांक :</Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20}}>IFSC Code:</Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20}}>वार्षिक उत्पादन :</Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}></TextInput>
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
                    "उसतोड"  === item ? 'checked' : 'unchecked'
                  }
                  onPress={() => {
                   
                  }}
                />
                <Text style={{marginTop: 8}}> {item}</Text>
              </View>
            );
          })}

        {/* <Text style={{flex: 1, marginTop: 40, fontSize: 20}}>"optionlist": "शेती,उसतोड,इतर",</Text> */}
        {/* <TextInput style={{borderBottomWidth: 1, flex: 1}}></TextInput> */}
      </View>
      {/* <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20}}>कुटुंबातील व्यक्तींचे तपशील</Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}></TextInput>
      </View> */}
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginHorizontal: 10,
        }}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20}}>बँक खाते क्रमांक :</Text>
        <TextInput style={{borderBottomWidth: 1, flex: 1}}></TextInput>
      </View>



      <View
        style={{
          flexDirection: 'column',
          marginHorizontal: 10,
        }}>
            
          <View style={{flex:1}}>
        <Text style={{flex: 1, marginTop: 40, fontSize: 20,textAlign:'center'}}>Family Details</Text>
          </View>
  <ScrollView horizontal={true}>
  <View style={{flexDirection:'column'}} >

<View style={{flexDirection: 'row', height: 50}}>
        <View style={{marginHorizontal:3,width:100}}>
          <Text style={{textAlign: 'center'}}>Name</Text>
        </View>
        <View style={{marginHorizontal:3,width:100}}>
          <Text style={{textAlign: 'center'}}>Aadhar</Text>
        </View>
        <View style={{marginHorizontal:3,width:100}}>
          <Text style={{textAlign: 'center'}}>Age</Text>
        </View>
        <View style={{marginHorizontal:3,width:300}}>
          <Text style={{textAlign: 'center'}}>Relation</Text>
        </View>
        <View style={{marginHorizontal:3,width:100}}>
          <Text style={{textAlign: 'center'}}>education</Text>
        </View>
        <View style={{marginHorizontal:3,width:100}}>
          <Text style={{textAlign: 'center'}}>School Name</Text>
        </View>
        <View style={{marginHorizontal:3,width:100}}>
          <Text style={{textAlign: 'center'}}>Cane Cutter</Text>
        </View>
        <View style={{flex: 0.4}}>
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
  <View style={{flex: 1, marginHorizontal: 3}}>
    <TextInput
      style={{flex: 1, borderWidth: 1, borderRadius: 5}}></TextInput>
  </View>
  <View style={{flex: 1, marginHorizontal: 3}}>
    <TextInput
      style={{flex: 1, borderWidth: 1, borderRadius: 5}}></TextInput>
  </View>
  <View style={{flex: 1, marginHorizontal: 3}}>
    <TextInput
      style={{flex: 1, borderWidth: 1, borderRadius: 5}}></TextInput>
  </View>

  <View style={{flex: 1, marginHorizontal: 3}}>
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



  <View style={{flex: 1, marginHorizontal: 3}}>
    <TextInput
      style={{flex: 1, borderWidth: 1, borderRadius: 5}}></TextInput>
  </View>
  <View style={{flex: 1, marginHorizontal: 3}}>
    <TextInput
      style={{flex: 1, borderWidth: 1, borderRadius: 5}}></TextInput>
  </View>
  <View style={{flex: 1, marginHorizontal: 3}}>
    <TextInput
      style={{flex: 1, borderWidth: 1, borderRadius: 5}}></TextInput>
  </View>

  <View style={{flex: 0.4}}>
    <Button title="remove" onPress={()=>{remove(index)}}></Button>
  </View>
</View>


)
          })}

          </View>
</ScrollView>


      </View>


<View>
  <View style={{flex:1,marginHorizontal:10}}>

    <Text style={{fontSize:28,textAlign:'center'}}>
      Declearation
    </Text>
<View style={{flexDirection:'row'}}>

<Text style={{marginTop:30,marginRight:10}}>
मी 
</Text>
<TextInput style={{borderBottomWidth:1,width:200}}>

</TextInput>
<Text style={{marginTop:30,marginRight:10}}>
श्री 
</Text>
<TextInput style={{borderBottomWidth:1,width:200}}>

</TextInput>
</View>
<View style={{flexDirection:'row'}}>
<Text style={{marginTop:30,marginRight:10}}>

यांचा मुलगा / मुलगी वय
  </Text>
  <TextInput style={{borderBottomWidth:1,width:180}}>

</TextInput>
<Text style={{marginTop:30,marginRight:10}}>

वर्ष, राहणार 
  </Text>
</View>

<View style={{flexDirection:'row'}}>
<TextInput style={{borderBottomWidth:1,width:180}}>

</TextInput>
<Text style={{marginTop:30,marginRight:10}}>
याद्वारे असे घोषित करतो / करते कि 
</Text>
</View>
<View style={{flexDirection:'row'}}>

<Text>
वरील सर्व माहिती माज्या व्यक्तिगत माहिती व समजुती नुसार खरी आहे.
</Text>
</View>
<View style={{flexDirection:'row'}}>

<Text>
तसेच मी स्वयं साक्षांकित केलेल्या मूळ कागदाच्या प्रति सत्यप्रती आहेत. 

</Text>
</View>
<View style={{flexDirection:'row'}}>

<Text>
मी दिलेली कोणती हि माहिती अथवा कागदपत्र खोटे असल्याचे आढळून 

</Text>
</View>
<View style={{flexDirection:'row'}}>

<Text>
आल्यास भारतीय दंड किव्वा संबंधित कायद्यानुसार मी शिक्षेस पात्र राहीन

</Text>
</View>
<View style={{flexDirection:'row'}}>

<Text>
ह्याची मला जाणीव आहे.
</Text>

</View>
<View style={{flexDirection:'row'}}>

<Text style={{marginTop:30,marginRight:10}}>
ठिकाण : 
</Text>
<TextInput style={{borderBottomWidth:1,width:180}}>

</TextInput>
</View>
<View style={{flexDirection:'row'}}>

<Text style={{marginTop:30,marginRight:10}}>
स्थळ : 
</Text>
<TextInput style={{borderBottomWidth:1,width:180}}>

</TextInput>
</View>
<View style={{flexDirection:'row'}}>

<Text style={{marginTop:30,marginRight:10}}>
अर्जदाराचे नावं : 
</Text>
<TextInput style={{borderBottomWidth:1,width:180}}>

</TextInput>
</View>
{/* <View style={{flexDirection:'row'}}>

<Text style={{marginTop:30,marginRight:10}}>
ठिकाण : 
</Text>
<TextInput style={{borderBottomWidth:1,width:180}}>

</TextInput>
</View> */}


    {/* <Text style={{marginTop:200}}>
    मी () श्री ( ) यांचा मुलगा / मुलगी वय ( ) 
    वर्ष, राहणार ( )
     याद्वारे असे घोषित करतो / करते कि वरील सर्व माहिती माज्या व्यक्तिगत 
     माहिती व समजुती नुसार खरी आहे.

      तसेच मी स्वयं साक्षांकित केलेल्या मूळ कागदाच्या प्रति सत्यप्रती आहेत. 
      मी दिलेली कोणती हि माहिती अथवा कागदपत्र खोटे असल्याचे आढळून 
      आल्यास भारतीय दंड किव्वा संबंधित कायद्यानुसार मी शिक्षेस पात्र राहीन
       ह्याची मला जाणीव आहे.
ठिकाण : ( )
स्थळ : ( 
)
अर्जदाराचे नावं : ( 
)


    </Text> */}

    <View style={{height:200}}>

    </View>

  </View>



</View>

      </ScrollView>

    </View>

  );
};

export default QuestionPage;
