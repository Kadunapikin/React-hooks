import './App.css';
import EditProfile from './state-hook/EditProfile';
import GroceryCart from './state-hook/GroceryCart';
import PhoneNumber from './state-hook/PhoneNumber';

function App() {
  return (
    <div className="App">
      <div>
        <PhoneNumber />
        <GroceryCart />
        <EditProfile />
      </div>
    </div>
  );
}

export default App;
