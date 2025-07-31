import { Button, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const Navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login</Text>
      <Button
        title="Cadastrar"
        onPress={() => Navigation.navigate("NewUser")}
      ></Button>
      <Button
        title="Recuperar Senha"
        onPress={() => Navigation.navigate("RecoverPassWord")}
      ></Button>
    </View>
  );
}
