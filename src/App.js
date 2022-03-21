import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './compponent/Blog.jsx';
import Contact from './compponent/Contact.jsx';
import Content from './compponent/Content.jsx'
import Most from './compponent/Most.jsx'
import Footer from './compponent/footer.jsx';

function App() {
  return (


    <BrowserRouter>
      <div>
        <Content />
        <Blog />
        <Switch>
          <Route path='/Contact' component={Contact} />
        </Switch>

        <Switch>
          <Route path='/contact/galereya' component={Most} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
