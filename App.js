
import { Provider } from 'react-redux';
import store from './store/Configurestore';
import HomeScreen from './screens/Homescreen';

export default function App() {

  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

