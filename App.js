import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import store from './src/store';

export default function App() {

  const [loaded] = useFonts({
    'Expletus' : require ('./src/assets/fonts/ExpletusSans-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }


  return(
    <Provider store={store} >
      <BottomTabNavigation />
    </Provider>
  );
    
}
