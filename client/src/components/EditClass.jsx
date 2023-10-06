import {Link,useParams,useNavigate} from "react-router-dom"
import style from './css/style.module.css'
import { useState,useEffect } from "react"
import axios from "axios"

const EditClass = (props) =>{
    const navigate = useNavigate()
    const {id} = useParams()

    const [name,setName] = useState("")
    const [barrel, setBarrel] = useState("")
    const [muzel,setMuzel] = useState("")
    const [underBarrel,setUnderBarrel] = useState("")
    const [ammunation,setAmunation] = useState("")
    const [magazine,setMagazine] = useState("")
    const [rearGrip,setRearGrip] = useState("")
    const [stock,setStock] = useState("")
    const [optic,setOptic] = useState("")
    const [lazer,setLazer] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/class/${id}`)
            .then(res => {
                console.log(res)
                setName(res.data.name)
                setBarrel(res.data.barrel)
                setMuzel(res.data.muzel)
                setUnderBarrel(res.data.underBarrel)
                setAmunation(res.data.ammunation)
                setMagazine(res.data.magazine)
                setRearGrip(res.data.rearGrip)
                setStock(res.data.stock)
                setOptic(res.data.optic)
                setLazer(res.data.lazer)
            })
            .catch(err =>{
                console.log(err)
            })
    },[])
    const submitHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/class/${id}`,{
            name,
            barrel,
            muzel,
            underBarrel,
            ammunation,
            magazine,
            rearGrip,
            stock,
            optic,
            lazer
        })
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <div className={style.backGround}>
            <div className={style.navbar}>
                <h1 className={style.title}>Edit Class</h1>
            </div>
            <div className={style.createForm}>
                <form onSubmit={submitHandler} className={style.twoColumnForm}>
                    <div className={style.formInputs}>
                        <div className={style.formDiv}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className={style.formDiv}>
                            <label htmlFor="barrel">Barrel:</label>
                            <input type="text" value={barrel} onChange={(e)=> setBarrel(e.target.value)}/>
                        </div>
                        <div className={style.formDiv}>
                            <label htmlFor="muzel">muzel:</label>
                            <input type="text" value={muzel} onChange={(e)=> setMuzel(e.target.value)}/>
                        </div>
                        <div className={style.formDiv}>
                            <label htmlFor="underBarrel">Under Barrel:</label>
                            <input type="text" value={underBarrel} onChange={(e)=> setUnderBarrel(e.target.value)}/>
                        </div>
                        <div className={style.formDiv}>
                            <label htmlFor="ammunation">Amunation:</label>
                            <input type="text" value={ammunation} onChange={(e)=> setAmunation(e.target.value)}/>
                        </div>
                    </div>

                    <div className={style.formInputs}>
                        <div className={style.formDiv}>
                            <label htmlFor="magazine">Magazine:</label>
                            <input type="text" value={magazine} onChange={(e)=> setMagazine(e.target.value)}/>
                        </div>
                        <div className={style.formDiv}>
                            <label htmlFor="rearGrip">Rear Grip:</label>
                            <input type="text" value={rearGrip} onChange={(e)=> setRearGrip(e.target.value)}/>
                        </div>
                        <div className={style.formDiv}>
                            <label htmlFor="stock">stock:</label>
                            <input type="text" value={stock} onChange={(e)=> setStock(e.target.value)}/>
                        </div>
                        <div className={style.formDiv}>
                            <label htmlFor="optic">optic:</label>
                            <input type="text" value={optic} onChange={(e)=> setOptic(e.target.value)}/>
                        </div>
                        <div className={style.formDiv}>
                            <label htmlFor="lazer">lazer:</label>
                            <input type="text" value={lazer} onChange={(e)=> setLazer(e.target.value)}/>
                        </div>
                    </div>
                <input type="submit"  value="submit" className={style.linkButton}/>
                <Link to={"/"} className={style.linkButton}>Back Home</Link>
                </form>
            </div>
        </div>
    )
}

export default EditClass