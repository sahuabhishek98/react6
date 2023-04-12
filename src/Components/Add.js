import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from './DataContext';
import { useContext } from 'react';
import '../App.css'

const AddPage = () => {
    let context=useContext(DataContext);
    const navigate = useNavigate();
    const [inputData, setInputdata] = useState({
        Name: "",
        Age: "",
        Course: "",
        Batch: ""
    });
    const [inputStore,setInputstore] =useState([]);
    const changeHandle = (event) => {
        setInputdata({ ...inputData, [event.target.name]: event.target.value })
    }
    let {Name,Age,Course,Batch}=inputData;
    const AddStudents = () => {setInputstore([...inputStore,{Name,Age,Course,Batch}])
        setInputdata({Name:"",Age:"",Course:"",Batch:""})
        context.entries.push(inputData)
        navigate('/Students')
    }
    return (
        <div>
                <input  name='Name' placeholder='Enter Your Name.....' type="text" value={inputData.Name} onChange={changeHandle} />
                <input name='Age' placeholder='Enter Your Age....' type="number" value={inputData.Age} onChange={changeHandle} />
                <input name='Course' placeholder='Enter Your Course....' type="text" value={inputData.Course} onChange={changeHandle} />
                <input name='Batch' placeholder='Enter Your Batch....' type="text" value={inputData.Batch} onChange={changeHandle}/>
            
                <button className='btn-add-std' type="submit" onClick={AddStudents}>Add</button>
                <button className='btn-cancel-std' onClick={()=>{navigate(-1)}}>Cancel</button>
                
        </div>
    )
}
export default AddPage;
