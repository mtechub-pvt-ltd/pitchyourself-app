import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';


//Screens
import { DrawerContent } from './CustomDrawer';
import Home from '../../screens/Home/Home';
import Hubs from '../../screens/Hubs/Hubs';
import SavedItems from '../../screens/SavedItems/SavedItems';
import Settings from '../../screens/Settings/Settings';
import Notification from '../../screens/Notification/Notification';
import ChatList from '../../screens/Chat/ChatList/ChatList';
import Profile from '../../screens/Profile/MyProfile/MyProfile';
import Jobs from '../../screens/Job/JobsCategories/Jobs';


const Drawer = createDrawerNavigator();

export default function Drawerroute() {

    return (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen 
        options={{
          headerShown: false,
          }}
      name="Home" component={Home}/>
        <Drawer.Screen 
        options={{
          headerShown: false,
          }}
      name="Hubs" component={Hubs}/>
           <Drawer.Screen 
        options={{
          headerShown: false,
          }}
      name="SavedItems" component={SavedItems}/>
           <Drawer.Screen 
        options={{
          headerShown: false,
          }}
      name="Notification" component={Notification}/>
          <Drawer.Screen 
        options={{
          headerShown: false,
          }}
      name="Settings" component={Settings}/>
             <Drawer.Screen 
        options={{
          headerShown: false,
          }}
      name="ChatList" component={ChatList}/>
               <Drawer.Screen 
        options={{
          headerShown: false,
          }}
      name="Profile" component={Profile}/>
                 <Drawer.Screen 
        options={{
          headerShown: false,
          }}
      name="Jobs" component={Jobs}/>

    </Drawer.Navigator>
    
        
    );
  }