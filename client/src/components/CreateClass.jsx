import { useState, } from "react"
import axios from "axios"
import { Link,useNavigate } from "react-router-dom"
import style from '../components/css/style.module.css'

const CreateClass = () =>{
    const navigate = useNavigate()
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

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/class",{
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
            navigate("/")
        })
        .catch(err =>{
            console.log(err)
        })
    }
    return(
        <div>
            <h1>add your gun class</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="barrel">barrel</label>
                        <input type="text" onChange={(e) => setBarrel(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="muzel">muzel</label>
                        <input type="text" onChange={(e) => setMuzel(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="underBarel">under barrel</label>
                        <input type="text" onChange={(e) => setUnderBarrel(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="ammunation">ammunation</label>
                        <input type="text" onChange={(e) => setAmunation(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="magazine">magazine</label>
                        <input type="text" onChange={(e) => setMagazine(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="rearGrip">rear grip</label>
                        <input type="text" onChange={(e) => setRearGrip(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="stock">stock</label>
                        <input type="text" onChange={(e) => setStock(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="optic">optic</label>
                        <input type="text" onChange={(e) => setOptic(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="lazer">lazer</label>
                        <input type="text" onChange={(e) => setLazer(e.target.value)}/>
                    </div>
                    <input type="submit" value="submit" />
                    <Link to={"/"} className={style.linkButton}>Back Home</Link>
                </form>
            </div>
        </div>
    )
}

export default CreateClass