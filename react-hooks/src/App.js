import './App.css';
import GroceryCart from './state-hook/GroceryCart';
import PhoneNumber from './state-hook/PhoneNumber';

function App() {
  return (
    <div className="App">
      <div>
        <PhoneNumber />
        <GroceryCart />
      </div>
    </div>
  );
}

export default App;
