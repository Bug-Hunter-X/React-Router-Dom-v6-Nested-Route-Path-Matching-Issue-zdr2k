```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
          <Route path="/about/contact" element={<Contact/>}/>
        </Route>
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  let location = useLocation();
  return (
    <div>
      <h1>About</h1>
      <p>Location: {location.pathname}</p>
    </div>
  );
}
function Contact() {
  return <h1>Contact</h1>
}

export default App;
```