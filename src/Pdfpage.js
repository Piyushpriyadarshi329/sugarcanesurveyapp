
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
  ScrollView
} from 'react-native';

// Import HTML to PDF
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const Pdfpage = ({navigation,route}) => {
  // const Pdfpage = ({navigation}) => {


  console.log("route.params",route.params)


  const {uniquecode,formValues}=route.params
  

  // uniquecode=uniquecode
  var name=formValues.WorkerName
  var adhar=formValues.WorkerAdharNo
  var mobile=formValues.WorkerContact
  var bod=formValues.WorkerDOB
  var address=formValues.WorkerAddress1+formValues.WorkerAddress2
  var image=formValues.workerimage




  const [filePath, setFilePath] = useState('');

  const isPermitted = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs access to Storage data',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        alert('Write permission err', err);
        return false;
      }
    } else {
      return true;
    }
  };

  const createPDF = async () => {
    if (await isPermitted()) {
      let options = {
        //Content to print
        // html:
        //   '<h1 style="text-align: left;"><strong>महारा�� शासन</strong></h1>'+
        //   '<h1 style="text-align: left;">सामा�जक �याय व िवशेष सहा�य िवभाग</h1>'+
        //   '<h1 style="text-align: left;">ऊसतोड कामगार ओळखप�</h1>'+



          
        //  ''
        //  ,




        html:`   
        <div>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={8}>
              <Paper className={classes.paper}>
                <div>
                  <div>
                    <Typography variant="h6" gutterBottom>
                      महाराष्ट्र शासन
                    </Typography>
                    <Typography>सामाजिक न्याय व विशेष सहाय्य विभाग</Typography>
                    <Typography>ऊसतोड कामगार ओळखपत्र</Typography>
                  </div>
                  <br />
                  <Grid container spacing={3}     flexDirection: "row">




                   


                    <Grid item xs={7}>
                      <div style={{ display: "none" }}>
                      </div>
                      <div>
                        <table className={classes.infotable}>
                          <tr>
                            <td>
                              <p style={{ margin: "5px 0px" }}>
                                <strong>ओळख क्रमांक</strong>
                              </p>
                            </td>
                            <td>: </td>
                            <td>
                              <span> ${uniquecode} </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p style={{ margin: "5px 0px" }}>
                                <strong>नाव</strong>
                              </p>
                            </td>
                            <td>: </td>
                            <td>
                              <span>${name}</span>
                            </td>
                          </tr>
                        
                          <tr>
                            <td>
                              <p style={{ margin: "5px 0px" }}>
                                <strong>आधारकार्ड क्रमांक</strong>
                              </p>
                            </td>
                            <td>: </td>
                            <td>
                              <span> ${adhar} </span>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </Grid>


                    <Grid item xs={5}>
                    <div
                      style={{
                        height: "150px",
                        width: "150px",
                        border: "1px solid #ccc",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                    <img src="data:image/png;base64, ${formValues.workerimage64}" alt="Image not found" width="300" height="400" />                  </Grid>

                  </Grid>
                  <br></br>
                  <br></br>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <span>
                        <strong>
                          
                          ऊसतोड कामगाराची स्वाक्षरी किव्हा डाव्या हाताच्या
                          अंगठ्याचा ठसा
                        </strong>
                      </span>
                    </Grid>
                    <Grid item xs={6}>
                      <span>
                        <strong>
                          सक्षम प्राधिकारी यांची स्वाक्षरी, पदनाम व कार्यालयाचा
                          शिक्का
                        </strong>
                      </span>
                    </Grid>
                  </Grid>
                  <br />
                  <Divider />
                  <br />
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <table className={classes.infotable}>
                        <tr>
                          <td>
                            <strong>पत्ता</strong>
                          </td>
                          <td>:</td>
                          <td>
                            
                            ${address}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>
                              <strong>जन्मदिनांक</strong>
                            </p>
                          </td>
                          <td>:</td>
                          <td>
                            <span>${bod}</span>
                          </td>
                        </tr>
                       
                        <tr>
                          <td>
                            <p>
                              <strong>मोबाईल क्रमांक</strong>
                            </p>
                          </td>
                          <td>:</td>
                          <td>
                            <span>${mobile}</span>
                          </td>
                        </tr>
                      </table>
                      <table className={classes.infotable}>
                        <tr>
                          <td>
                            <p>
                              <strong>
                                ऊसतोड कामगार म्हणून काम करीत असल्याचे वर्ष
                              </strong>
                            </p>
                          </td>
                          <td>:</td>
                          <td>
                            <span>{formValues.WorkerYearsOfstart_work} </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>
                              <strong>
                                ऊसतोड कामगार म्हणून नोंदनी केल्याचा नोंदवहितील
                                अनुक्रमांक व दिनांक
                              </strong>
                            </p>
                          </td>
                          <td>:</td>
                          <td>
                            <span>(५३२९)२०२१/०२/११ </span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="3">
                            <strong>सूचना</strong> :
                            <ul style={{ listStyleType: "-moz-initial" }}>
                              <li>
                                <p>
                                  ओळखपत्र हे केवळ ऊसतोड कामगारची ओळख पटवी म्हणून
                                  देण्यात आले आहे.
                                </p>
                              </li>
                              <li>
                                <p>
                                  सदर ओळखपत्र हस्तांतरित करता येणार नाही किंव्हा
                                  त्याचा कोणताही गैरवापर करता येणार नाही.
                                </p>
                              </li>
                              <li>
                                <p>
                                  सदर ओळखपत्र हरवल्यास सक्षम प्राधिकाऱ्याकडे लेखी
                                  स्वरूपात तक्रार दाखल करावी.
                                </p>
                              </li>
                              <li>
                                <p>
                                  सदर ओळखपत्र कोणालाही सापडल्यास वरील पत्त्यावर
                                  परत करावे.
                                </p>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                    </Grid>
                  </Grid>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
     
     
     `,
        //File Name
        fileName: 'data',
        //File directory
        directory: 'docs',
        // directory: 'Download',

      };
      let file = await RNHTMLtoPDF.convert(options);
      console.log(file.filePath);
      setFilePath(file.filePath);
      alert("Pdf Save in Docs folder")
    }
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
     
      {/* <View style={styles.container}>
        <TouchableOpacity onPress={createPDF}>
          <View>
            
            <Text style={styles.textStyle}>Get PDF</Text>
          </View>
        </TouchableOpacity>
      </View> */}


<View style={{flex:1,marginLeft:20,marginTop:20,flexDirection:'row'}}>
  <View style={{flex:1.2}}>
  <Text  style={{fontSize:22}}>
  महाराष्ट्र शासन

  </Text>
  <Text  style={{fontSize:18}}>
  सामाजिक न्याय व विशेष सहाय्य विभाग
  </Text>
  <Text  style={{fontSize:18}}>
  ऊसतोड कामगार ओळखपत्र
  </Text>
  </View>

</View>






<View style={{flex:1,marginLeft:5,marginTop:20,flexDirection:'row'}}>


  <View style={{flex:1,borderWidth:1,height:200,borderRadius:5}}>



  <Image
        style={{height:200,width:160}}
        source={{
        //   uri: 'https://reactnative.dev/img/tiny_logo.png',
          uri: formValues.workerimage,

        }}
      />


  </View>

  <View style={{flex:1.3,marginLeft:10}}>
  <Text  style={{fontSize:16}}>
  ओळख क्रमांक :{uniquecode}

  </Text>
  <Text  style={{fontSize:16}}>
  नाव:{name} 
   </Text>
  <Text  style={{fontSize:16}}>
  आधारकार्ड क्रमांक: {adhar}
  </Text>
  </View>
 
</View>

<View style={{marginTop:10}}>
  <Text style={{textAlign:'center'}}>
  ऊसतोड कामगाराची स्वाक्षरी किव्हा डाव्या हाताच्या
                        अंगठ्याचा ठसा  </Text>
</View>


<View>
<Text style={{textAlign:'center'}}>
  सक्षम प्राधिकारी यांची स्वाक्षरी, पदनाम व कार्यालयाचा
                        शिक्का </Text>
</View>


<View style={{marginTop:30,marginLeft:20}}>

<Text>

पत्ता:   {address}

  </Text>
  <Text>
  जन्मदिनांक:  {bod}
  </Text>

  <Text>
  मोबाईल क्रमांक: {mobile}
  </Text>



<Text>

ऊसतोड कामगार म्हणून काम करीत असल्याचे वर्ष

  </Text>
<Text>
ऊसतोड कामगार म्हणून नोंदनी केल्याचा नोंदवहितील
                              अनुक्रमांक व दिनांक:(५३२९)२०२१/०२/११ 
</Text>

  </View>







<View style={{marginLeft:20,marginTop:30}}>

<Text style={{textAlign:'left',fontSize:20}}>
सूचना:-
</Text>

  <Text style={{textAlign:'left'}}>



  
                               1)  ओळखपत्र हे केवळ ऊसतोड कामगारची ओळख पटवी म्हणून
                                देण्यात आले आहे.
                            
                             
                              
  </Text>
  <Text style={{textAlign:'left'}}>





2) सदर ओळखपत्र हस्तांतरित करता येणार नाही किंव्हा
त्याचा कोणताही गैरवापर करता येणार नाही.



</Text>
<Text style={{textAlign:'left'}}>




3) सदर ओळखपत्र हरवल्यास सक्षम प्राधिकाऱ्याकडे लेखी
स्वरूपात तक्रार दाखल करावी.



</Text>
<Text style={{textAlign:'left'}}>



4) सदर ओळखपत्र कोणालाही सापडल्यास वरील पत्त्यावर
परत करावे.

</Text>
</View>


<View style={{alignItems:'center',marginTop:20}}>
  <TouchableOpacity onPress={createPDF}>
          <View>
            
            <Text style={{fontSize:16, textDecorationLine: 'underline',}}> PDF Download</Text>
          </View>
        </TouchableOpacity>
    </View>
</ScrollView>
    </View>
  );
};

export default Pdfpage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    fontSize: 18,
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  imageStyle: {
    width: 150,
    height: 150,
    margin: 5,
    resizeMode: 'stretch',
  },
});