
import { Header } from './js/component/header/Header';
import { ApplicationRoutes } from './js/router/ApplicationRoutes';
import './css/App.css';


function App() {

 
  

  return (
    <>
      <div className='wrapper'>
          <Header />
      </div>
      <ApplicationRoutes />
    </>
  );
}

export default App;
