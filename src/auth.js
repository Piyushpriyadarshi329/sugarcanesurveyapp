import React, {useEffect, useState, useReducer} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import First from './First';
// import Login from './Login';
// import Register from './Register';
// import Questionspage from './Questionspage';
// import Selectpage from './Selectpage';
// import Toast from 'react-native-toast-message';
// import AppFunctions from '../android/AppFunctions';
import uuid from 'uuid-random';
import SplashScreen from './SplashScreen';
import Start from './Start';
import QuestionPage from './QuestionPage';
import QuestionPageTest from './QuestionPageTest';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Pdfpage from './Pdfpage';
import Login from './Login';







const Auth = () => {
  const Stack = createStackNavigator();

 

  useEffect(() => {
   
  }, []);


 



  return (

      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{   headerShown: false}} />
        <Stack.Screen name="Start" component={Start} options={{   headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{   headerShown: false}}/>

        <Stack.Screen name="Step1" component={Step1} options={{   headerShown: false}} />
        <Stack.Screen name="Step2" component={Step2} options={{   headerShown: false}} />
        <Stack.Screen name="Step3" component={Step3} options={{   headerShown: false}} />
        <Stack.Screen name="Step4" component={Step4} options={{   headerShown: false}} />
        <Stack.Screen name="Pdfpage" component={Pdfpage} options={{   headerShown: false}} />


        
          {/* <Stack.Screen name="QuestionPageTest" component={QuestionPageTest} options={{   headerShown: false}} />
          <Stack.Screen name="QuestionPage" component={QuestionPage} options={{   headerShown: false}} />
         */}
        </Stack.Navigator>
      </NavigationContainer>
  )

};

export default Auth;
