import { Card,Text } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";


const ContactScreen = () =>{
  return (
    <ScrollView>
      <Card wrapperStyle={{ margin: 20 }}>
        <Card.Title>Contact Information</Card.Title>
        <Card.Divider />
        <Text style={{marginBottom: 10}}>
            1 Nucamp Way{'\n'}
            Seattle, WA 98001{'\n'}
            U.S.A.</Text>
        
          <Text>Phone: 1-206-555-1234</Text>
           <Text>Email: campsites@nucamp.co</Text>
        
      </Card>
    </ScrollView>
  );
}

export default ContactScreen;
