import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DataContext from './DataContext';
import '../App.css'

const EditPage = () => {
    const context = useContext(DataContext);
    const location = useLocation();//we can get id by using location function(hook)
    const navigate = useNavigate();
    const index = (location.state.data);

    const newObject = {
        Name: context.entries[index].Name,
        Age: context.entries[index].Age,
        Course: context.entries[index].Course,
        Batch: context.entries[index].Batch,
    }
    const change = (item) => {
        newObject[item.target.name] = item.target.value;//by using name property we accessing the value in the object we want
    }
    const update = () => {
        console.log(context.entries[index])
        context.updateFunction(
            (oldObject) => {
                oldObject[index] = newObject;
                console.log(newObject)
                return (oldObject)
            }
        );
        navigate(-1);
    }
    return (
        <div>
            <div className='Form-con'>
                <input onChange={change} name='Name' placeholder={context.entries[index].Name} />
                <input onChange={change} name='Age' placeholder={context.entries[index].Age} />
                <input onChange={change} name='Course' placeholder={context.entries[index].Course} />
                <input onChange={change} name='Batch' placeholder={context.entries[index].Batch} />
            </div>
                <button onClick={update} className="btn-add-std">Update</button>
                <button onClick={()=>{navigate(-1)}} className="btn-cancel-std">Cancel</button>
            
        </div>
         
    )
}
export default EditPage;