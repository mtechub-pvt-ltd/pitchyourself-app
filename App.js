
import * as React from 'react';
import { View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//////////redux////////////
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';

//Screens
import AuthNav from './src/navigation/Auth/AuthNav';
import Drawerroute from './src/navigation/Drawer/Drawer';
import CreatePost from './src/screens/Post/CreatePost/CreatePost';
import Question from './src/screens/Question/AskQuestion/Question';
import Project from './src/screens/Project/CreateProject/Project';
import Job from './src/screens/Job/PostJob/Job';
import PostJob from './src/screens/Job/PostJob/PostJob';
import JobDetail from './src/screens/Job/JobDetail/JobDetail';
import PostDetail from './src/screens/Post/PostDetail/PostDetail';
import ProjectDetail from './src/screens/Project/ProjectDetail/ProjectDetail';
import QuestionDetail from './src/screens/Question/QuestionDetail/QuestionDeatil';
import Search from './src/screens/Search/Search';
import Help from './src/screens/Search/Help';
import VideoDetail from './src/screens/Video/VideoDetail/VideoDetail';
import Recomendations from './src/screens/Recomendations/Recomendation';
import CreateVideo from './src/screens/Video/CreateVideo/CreateVideo';
import Summary from './src/screens/Video/Summary/Summary';
import Contacts from './src/screens/Video/Contacts/Contacts';
import AppliedJobDetail from './src/screens/Job/AppliedjobDetail/AppliedJobDetail';
import JobApplied from './src/screens/Job/JobApplied/JobApplied';
import ChatScreen from './src/screens/Chat/UserChat/ChatScreen';
import ChangeAddress from './src/screens/ChangeAddress/ChangeAddress';
import Groups from './src/screens/Chat/Groups/Groups';
import EditVideo from './src/screens/Video/EditVideo/EditVideo';
import EditProfile from './src/screens/Profile/EdilProfile/EditProfile';
import CustomCamera from './src/screens/Camera/Camera';
import CameraVideo from './src/screens/CameraVideo/CamerVideo';
import VideoPlayer from './src/screens/VideoPlayer/VideoPlayer';
import SearchResults from './src/screens/Search/SearchResults/SearchResult';
import UploadVideo from './src/screens/Video/UploadVideo/UploadVideo';
import PostRecomendations from './src/screens/Recomendations/PostRecomendation/PostRecomendation';
import AppliedPersons from './src/screens/Job/AppliedPersons/AppliedPersons';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="AuthNav" component={AuthNav}
        options={{
        headerShown: false,
        }} />
              <Stack.Screen name="Drawerroute" component={Drawerroute}
        options={{
        headerShown: false,
        }} />
              <Stack.Screen name="CustomCamera" component={CustomCamera}
        options={{
        headerShown: false,
        }} />
      <Stack.Screen name="CameraVideo" component={CameraVideo}
        options={{
        headerShown: false,
        }} />
              <Stack.Screen name="VideoPlayer" component={VideoPlayer}
        options={{
        headerShown: false,
        }} />
        <Stack.Screen name="Question" component={Question}
        options={{
        headerShown: false,
        }} />  
        <Stack.Screen name="QuestionDetail" component={QuestionDetail}
        options={{
        headerShown: false,
        }} />
        <Stack.Screen name="CreatePost" component={CreatePost}
        options={{
        headerShown: false,
        }} />
            <Stack.Screen name="PostDetail" component={PostDetail}
        options={{
        headerShown: false,
        }} />
    <Stack.Screen name="Project" component={Project}
        options={{
        headerShown: false,
        }} />

<Stack.Screen name="ProjectDetail" component={ProjectDetail}
        options={{
        headerShown: false,
        }} />
        <Stack.Screen name="Job" component={Job}
        options={{
        headerShown: false,
        }} />
        <Stack.Screen name="PostJob" component={PostJob}
        options={{
        headerShown: false,
        }} />
            <Stack.Screen name="JobDetail" component={JobDetail}
        options={{
        headerShown: false,
        }} />
       <Stack.Screen name="Help" component={Help}
        options={{
        headerShown: false,
        }} />        
      <Stack.Screen name="Search" component={Search}
        options={{
        headerShown: false,
        }} />
           <Stack.Screen name="CreateVideo" component={CreateVideo}
        options={{
        headerShown: false,
        }} />
      <Stack.Screen name="Recomendations" component={Recomendations}
        options={{
        headerShown: false,
        }} />
      <Stack.Screen name="VideoDetail" component={VideoDetail}
        options={{
        headerShown: false,
        }} />
        
      <Stack.Screen name="AppliedJobDetail" component={AppliedJobDetail}
        options={{
        headerShown: false,
        }} />
  
      <Stack.Screen name="Contacts" component={Contacts}
        options={{
        headerShown: false,
        }} />
      <Stack.Screen name="Summary" component={Summary}
        options={{
        headerShown: false,
        }} />
            <Stack.Screen name="JobApplied" component={JobApplied}
        options={{
        headerShown: false,
        }} />
          <Stack.Screen name="ChatScreen" component={ChatScreen}
        options={{
        headerShown: false,
        }} />
        <Stack.Screen name="Groups" component={Groups}
        options={{
        headerShown: false,
        }} />
                  <Stack.Screen name="ChangeAddress" component={ChangeAddress}
        options={{
        headerShown: false,
        }} />
        <Stack.Screen name="EditVideo" component={EditVideo}
        options={{
        headerShown: false,
        }} />
         <Stack.Screen name="EditProfile" component={EditProfile}
        options={{
        headerShown: false,
        }} />
       <Stack.Screen name="SearchResults" component={SearchResults}
        options={{
        headerShown: false,
        }} />
       <Stack.Screen name="UploadVideo" component={UploadVideo}
        options={{
        headerShown: false,
        }} />
        <Stack.Screen name="PostRecomendations" component={PostRecomendations}
        options={{
        headerShown: false,
        }} />
            <Stack.Screen name="AppliedPersons" component={AppliedPersons}
        options={{
        headerShown: false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;