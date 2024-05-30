
import './App.css';
import axios from 'axios'
function App() {
  return (
    <div className="App">
    <h1>Hello world</h1> 
    <button onClick={()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
        console.log(response.data)
      })
    }}>Click Me</button>
    </div>
  );
}

export default App;
