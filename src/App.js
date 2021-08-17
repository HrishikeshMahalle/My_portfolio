import Header from './components/header/header'
import Intro from './components/Intro/intro'
import Portfolio from './components/portfolio/portfolio'
import BlogPost from './components/Blog/blogPost'
import './app.scss'

function App() {
  return (
   <div className="app">
     <Header/>
    <div className="sections">
      <Intro/>
      <Portfolio/>
      <BlogPost/>
     </div>
   </div>
  );
}

export default App;
