
import { StyleSheet, View } from 'react-native';
import Constants from "expo-constants"
import Main from './src/component/Main.jsx';
import RepositoryList from './src/component/RepositoryList.jsx';

export default function App() {
  return (
    <View style={{marginTop: Constants.statusBarHeigth, flexGrow:1}}>
      <text style={{margin: Constants.statusBarHeight}}>Hola</text>
    <Main/>
    <RepositoryList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
