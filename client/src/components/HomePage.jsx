import style from '../components/css/style.module.css'
import {useState,useEffect} from "react"  // do i need to import React in front of the curly brackets?
import axios from "axios"
import {Link}  from "react-router-dom"


const HomePage = ()=> {
    const [classes,setClasses] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/class')
        .then(res =>{
            console.log(res)
            console.log(res.data)
            setClasses(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    const deleteHandler =(_id) =>{
        axios.delete(`http://localhost:8000/api/class/${_id}`)
            .then(res => {
                console.log(res)
            })
            .catch(err =>{
                console.log(err)
            })
    }
    // const removefromdom = (classid) =>{
    //     setClasses(classes.filter(class=>class._id))
    // }

    return(
        <div className={style.backGround}>
            <div className={style.navbar}>
                <h1 className={style.title}>Call Of Duty </h1>
            </div>
            <div>
                <table className={style.loadouts}>
                    <tr>
                        <th>Gun (9 mods)</th>
                        <th>Barrel</th>
                        <th>Muzel</th>
                        <th>Underbarral</th>
                        <th>Ammunation</th>
                        <th>Magazine</th>
                        <th>Rear Grip</th>
                        <th>Stock</th>
                        <th>Optic</th>
                        <th>Lazer</th>
                        <th>Actions</th>
                    </tr>
                    {classes.map((oneClass,index)=>{
                        return(
                            <tr key={index}>
                                <td>{oneClass.name}</td>
                                <td>{oneClass.barrel}</td>
                                <td>{oneClass.muzel}</td>
                                <td>{oneClass.underBarrel}</td>
                                <td>{oneClass.ammunation}</td>
                                <td>{oneClass.magazine}</td>
                                <td>{oneClass.rearGrip}</td>
                                <td>{oneClass.stock}</td>
                                <td>{oneClass.optic}</td>
                                <td>{oneClass.lazer}</td>
                                <td>Update || <button onClick={(e)=>deleteHandler(oneClass._id)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            <Link to={'/create'} className={style.linkButton}>Add a Wepon Class </Link>
        </div>
    )
}

export default HomePage