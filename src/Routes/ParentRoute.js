import '../App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import Tables from '../Components/Table'
import ContactUs from '../Components/ContactUs';
import Error from '../Components/Error';
import Nav from '../Components/Layout';
import { useState } from 'react';
// import { createContext } from 'react';
import DataContext from '../Components/DataContext'
import EditPage from '../Components/Edit';
import AddPage from '../Components/Add';

function ParentRoute() {
  const [data, setData] = useState([
    {
      Name: 'DOE',
      Age: 20,
      Course: 'MERN',
      Batch: 'January',
    },
    {
      Name: 'John',
      Age: 21,
      Course: 'MERN',
      Batch: 'February',
    },
    {
      Name: 'Alice',
      Age: 22,
      Course: 'MERN',
      Batch: 'March',
    }
  ])
  
  return (
    <div id="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>

          <Route path="/Students" element={
            <DataContext.Provider value={{ entries: data, updateFunction: setData }}>
            <Tables />
          </DataContext.Provider>
          }></Route>
          <Route path="/EditPage" element={
            <DataContext.Provider value={{ entries: data, updateFunction: setData }}>
              <EditPage />
            </DataContext.Provider>
          }></Route>
          <Route path="/AddPage" element={
            <DataContext.Provider value={{ entries: data, updateFunction: setData }}>
              <AddPage />
            </DataContext.Provider>
          }></Route>
          
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ParentRoute;