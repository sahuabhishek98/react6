import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from './DataContext';
import './Student.css'

const Tables = () => {
    const context = useContext(DataContext);//getting the data from created context
    return (
        <div>
            <div id="head">
                <h1>Students Details</h1>
                <button className='btn-add-std-1'>
                    <Link to="/AddPage" >Add new student</Link>
                </button>
            </div>
            <div>
                <table className='table-con'>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        context.entries.map((item, index) => (
                            <tr id="tr" key={index}>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
                                <td>{item.Course}</td>
                                <td>{item.Batch}</td>
                                <td>
                                    <Link className='btn-edit' to="/EditPage" state={{ data: index }}>Edit</Link></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Tables;