import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import TabNavigator from './TabNavigator'
import DetailsScreen from '../screens/DetailsScreen'

const Stack = createNativeStackNavigator()
const AppStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Index"
                    component={TabNavigator}
                    options={{
                        title: 'Movie App',
                        headerStyle:{
                            backgroundColor: '#2c3e50'
                        },
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            color: '#fff'
                        },
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={
                        ({route}) => ({
                            title: route.params.title,
                            headerBackTitle: 'Back to List',
                            headerTitleStyle: {
                                fontSize: 18,
                                fontWeight: 'normal',
                                color: '#000000'
                            },
                            headerTintColor: 'dodgerblue',
                        })
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppStack
