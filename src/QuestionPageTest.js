import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const QuestionPageTest = () => {
  const [data, setdata] = useState({
    first: '',
    second: '',
    third: '',
  });
  const [col, setcol] = useState([
    {
      first: '',
      second: '',
      third: '',
    },
  ]);



  function remove(num){
      console.log("num",num)
var newdata=[]
    col.map((item,index)=>{
      if(num==index){
          return
      }else{

        newdata.push(item)

      }


    })


    setcol(newdata)

  }
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', height: 50}}>
        <View style={{flex: 1}}>
          <Text style={{textAlign: 'center'}}>first</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{textAlign: 'center'}}>Second</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{textAlign: 'center'}}>third</Text>
        </View>
        <View style={{flex: 0.4}}>
          <Button
            title="Add"
            onPress={() => {
              setcol(prev => {
                return [...prev, data];
              });
            }}></Button>
        </View>
      </View>

      {col.map((item, index) => {
        return (
          <View style={{height: 40, flexDirection: 'row'}}>
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
        );
      })}
    </View>
  );
};

export default QuestionPageTest;
