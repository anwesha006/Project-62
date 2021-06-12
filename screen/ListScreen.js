import * as React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,ScrollView,} from 'react-native';
import Header from '../components/Header';
import db from '../config';
import Table from '../components/Table';
var present;
var absent;
var today;

export default class ListScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      all_students: [],
      presentPressedList: [],
      absentPressedList: [],
      olivia: true,
      joshua: true,
      renuka: true,
      karthik: true,
      elizabeth: true,
      hrithik: true,
      damon: true,
      bonnie: true,
      caroline: true,
      ron: true,
    };
  }

  componentDidMount = async () => {
    var dbRef = db.ref("class/");
    dbRef.on("value", data =>{
      var details = data.val();
      this.setState({
        olivia: details.enabled.enabled1,
        joshua: details.enabled.enabled2,
        renuka: details.enabled.enabled3,
        karthik: details.enabled.enabled4,
        elizabeth: details.enabled.enabled5,
        hrithik: details.enabled.enabled6,
        damon: details.enabled.enabled7,
        bonnie: details.enabled.enabled8,
        caroline: details.enabled.enabled9,
        ron: details.enabled.enabled10,
      });
    });

    var class_ref = await db.ref('/').on('value', (data) => {
      // class_ref.on('value', (data) => {
      var all_students = [];
      var class_a = data.val().class_A;
      for (var i in class_a) {
        all_students.push(class_a[i]);
      }
      all_students.sort(function (a, b) {
        return a.roll_no - b.roll_no;
      });

      this.setState({ all_students: all_students });
    });

    today = new Date();
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    today = date + '-' + month + '-' + year;
    return today;   
  };

  reset=()=>{
    db.ref("class/enabled/").set({
      enabled1: false,
      enabled2: false,
      enabled3: false,
      enabled4: false,
      enabled5: false,
      enabled6: false,
      enabled7: false,
      enabled8: false,
      enabled9: false,
      enabled10: false,            
    })
  }

  goToSummary = () => {
    this.props.navigation.navigate('SortedScreen');
  };
  render() {
    return (
      <ScrollView>
        <View>
          <Header />
          <Table />
          <View style={styles.grid}>
            <Text style={styles.name}>1.       Olivia Rodrigo</Text>
            <TouchableOpacity
            disabled={this.state.olivia}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/01/').update({
                  [today]: 'Present',
                  name: 'Olivia Rodrigo',
                  roll_no: 1,
                });
                db.ref("class/enabled/").update({
                  enabled1: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.olivia}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/01/').update({
                  [today]: 'Absent',
                  name: 'Olivia Rodrigo',
                  roll_no: 1,
                }),
                  db.ref("class/enabled/").update({
                  enabled1: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>2.      Joshua Bassett</Text>
            <TouchableOpacity
            disabled={this.state.joshua}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/02/').update({
                  [today]: 'Present',
                  name: 'Joshua Bassett',
                  roll_no: 2,
                });
                db.ref("class/enabled/").update({
                  enabled2: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.joshua}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/02/').update({
                  [today]: 'Absent',
                  name: 'Joshua Bassett',
                  roll_no: 2,
                });
                db.ref("class/enabled/").update({
                  enabled2: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>3.    Renuka Avinash</Text>
            <TouchableOpacity
            disabled={this.state.renuka}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/03/').update({
                  [today]: 'Present',
                  name: 'Renuka Avinash',
                  roll_no: 3,
                });
                db.ref("class/enabled/").update({
                  enabled3: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.renuka}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/03/').update({
                  [today]: 'Absent',
                  name: 'Renuka Avinash',
                  roll_no: 3,
               });
               db.ref("class/enabled/").update({
                  enabled3: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>4.     Karthik Goenka</Text>
            <TouchableOpacity
            disabled={this.state.karthik}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/04/').update({
                  [today]: 'Present',
                  name: 'Karthik Goenka',
                  roll_no: 4,
                });
                db.ref("class/enabled/").update({
                  enabled4: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.karthik}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/04/').update({
                  [today]: 'Absent',
                  name: 'Karthik Goenka',
                  roll_no: 4,
                });
                db.ref("class/enabled/").update({
                  enabled4: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>5.     Elizabeth Olsen</Text>
            <TouchableOpacity
            disabled={this.state.nutan}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/05/').update({
                  [today]: 'Present',
                  name: 'Nutan Elizabeth',
                  roll_no: 5,
                });
                db.ref("class/enabled/").update({
                  enabled5: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.nutan}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/05/').update({
                  [today]: 'Absent',
                  name: 'Nutan Elizabeth',
                  roll_no: 5,
                });
                db.ref("class/enabled/").update({
                  enabled5: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>6.      Hrithik Roshan</Text>
            <TouchableOpacity
            disabled={this.state.hrithik}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/06/').update({
                  [today]: 'Present',
                  name: 'Hrithik Roshan',
                  roll_no: 6,
                });
                db.ref("class/enabled/").update({
                  enabled6: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.Hrithik}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/06/').update({
                  [today]: 'Absent',
                  name: 'Hrithik Roshan',
                  roll_no: 6,
                });
                db.ref("class/enabled/").update({
                  enabled6: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>7.    Damon Salvtore</Text>
            <TouchableOpacity
            disabled={this.state.damon}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/07/').update({
                  [today]: 'Present',
                  name: 'Damon Salvtore',
                  roll_no: 7,
                });
                db.ref("class/enabled/").update({
                  enabled7: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.damon}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/07/').update({
                  [today]: 'Absent',
                  name: 'Damon Salvtore',
                  roll_no: 7,
                });
                db.ref("class/enabled/").update({
                  enabled7: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>8.     Bonnie Bennett</Text>
            <TouchableOpacity
            disabled={this.state.bonnie}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/08/').update({
                  [today]: 'Present',
                  name: 'Bonnie Bennett',
                  roll_no: 8,
                });
                db.ref("class/enabled/").update({
                  enabled8: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.bonnie}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/08/').update({
                  [today]: 'Absent',
                  name: 'Bonnie Bennett',
                  roll_no: 8,
                });
                db.ref("class/enabled/").update({
                  enabled8: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>9.     Caroline Forbes</Text>
            <TouchableOpacity
            disabled={this.state.caroline}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/09/').update({
                  [today]: 'Present',
                  name: 'Caroline Forbes',
                  roll_no: 9,
                });
                db.ref("class/enabled/").update({
                  enabled9: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.caroline}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/09/').update({
                  [today]: 'Absent',
                  name: 'Caroline Forbes',
                  roll_no: 9,
                });
                db.ref("class/enabled/").update({
                  enabled9: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>10.       Ron Weasley</Text>
            <TouchableOpacity
            disabled={this.state.ron}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/10/').update({
                  [today]: 'Present',
                  name: 'Ron Weasley',
                  roll_no: 10,
                });
                db.ref("class/enabled/").update({
                  enabled10: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.ron}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/10/').update({
                  [today]: 'Absent',
                  name: 'Ron Weasley',
                  roll_no: 10,
                });
                db.ref("class/enabled/").update({
                  enabled10: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid1}>
          <TouchableOpacity style={styles.buttons1} onPress={this.goToSummary}>
            <Text style={styles.text1}>SUBMIT</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttons1} 
            onPress={this.reset}>
            <Text style={styles.text1}>RESET</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: '#00e381',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#00e381",
    width: 70,
    marginTop: 15,
    marginRight: 5,
    left: 7,
  },
  Abuttons: {
    backgroundColor: '#ff004c',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#ff004c",
    width: 70,
    marginTop: 15,
    marginRight: 5,
    left: 7,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: "white",
  },
  Atext: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: "white",
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5,
    marginRight:30,
    padding: 5,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  grid1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'space-evenly',
  },
  buttons1: {
    alignSelf: 'center',
    backgroundColor: 'black',
    borderWidth: 3,
    width: 100,
    left: 20,
    marginTop: 20,
  },
  text1: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});