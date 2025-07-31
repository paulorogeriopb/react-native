import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Login from "./pages/Login";
import NewUser from "./pages/NewUser";
import RecoverPassWord from "./pages/RecoverPassWord";

export default function Routes() {
  return (
    // Navegação
    <NavigationContainer>
      {/* Criar uma pilha de Páginas */}
      <Stack.Navigator>
        {/* Carregar as telas  */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="NewUser" component={NewUser} />
        <Stack.Screen name="RecoverPassWord" component={RecoverPassWord} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
