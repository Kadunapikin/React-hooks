import './App.css';
import EditProfile from './state-hook/EditProfile';
import GroceryCart from './state-hook/GroceryCart';
import PhoneNumber from './state-hook/PhoneNumber';
import Timer from './state-hook/Timer';

function App() {
  return (
    <div className="App">
      <div>
        <PhoneNumber />
        <GroceryCart />
        <EditProfile />
        <Timer />
      </div>
    </div>
  );
}

export default App;
