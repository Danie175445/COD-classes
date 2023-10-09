import style from '../components/css/style.module.css'
import { useState } from 'react'
import axios from 'axios'

const CreateClassModal = ({setOpenModal}) => {

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

    const [error, setError] = useState([])

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
            setOpenModal(false)
        })
        .catch(err =>{
            console.log(err)
            console.log(err.response.data.errors)
            setError(err.response.data.errors)
        })
    }

    return (
        <div className={style.modalBackGround}>
            <div className={style.modalContainer}>
                <form onSubmit={submitHandler} className={style.twoColumnForm}>
                    <div className={style.formInputs}>
                        <div className={style.formDiv}>
                            <label htmlFor="name" className={style.modalLabel}>Name:</label>
                            <input type="text" onChange={(e) => setName(e.target.value)}/>
                            {error.name ?
                                <p className={style.validations}>{error.name.message}</p>
                            : null}
                        </div>
                        <div className={style.formDiv}>
                            <label htmlFor="barrel" className={style.modalLabel}>barrel</label>
                            <input type="text" onChange={(e) => setBarrel(e.target.value)}/>
                            {error.barrel? 
                                <p className={style.validations}>{error.barrel.message}</p> 
                            : null}
                        </div>
                        <div className={style.formDiv}>
                            <label htmlFor="muzel" className={style.modalLabel}>muzel</label>
                            <input type="text" onChange={(e) => setMuzel(e.target.value)}/>
                            {error.muzel?
                                <p className={style.validations}>{error.muzel.message}</p>
                            : null}
                        </div>
                        <div className={style.formDiv}>
                            <label htmlFor="underBarrel" className={style.modalLabel}>under barrel</label>
                            <input type="text" onChange={(e) => setUnderBarrel(e.target.value)}/>
                            {error.underBarrel?
                                <p className={style.validations}>{error.underBarrel.message}</p>
                            : null}
                        </div>
                        <div className={style.formDiv}>
                            <label htmlFor="ammunation" className={style.modalLabel}>ammunation</label>
                            <input type="text" onChange={(e) => setAmunation(e.target.value)}/>
                            {error.ammunation &&
                                <p className={style.validations}>{error.ammunation.message}</p>
                            }
                        </div>
                    </div>

                    <div className={style.formInputs}>
                        <div className={style.formDiv}>
                            <label htmlFor="magazine" className={style.modalLabel}>magazine</label>
                            <input type="text" onChange={(e) => setMagazine(e.target.value)}/>
                            {error.magazine &&
                                <p className={style.validations}>{error.magazine.message}</p>}
                        </div>
                        <div className={style.formDiv}>
                            <label htmlFor="rearGrip" className={style.modalLabel}>rear grip</label>
                            <input type="text" onChange={(e) => setRearGrip(e.target.value)}/>
                            {error.rearGrip &&
                                <p className={style.validations}>{error.rearGrip.message}</p>}
                        </div>
                        <div className={style.formDiv}>
                            <label htmlFor="stock" className={style.modalLabel}>stock</label>
                            <input type="text" onChange={(e) => setStock(e.target.value)}/>
                            {error.stock &&
                                <p className={style.validations}>{error.stock.message}</p>}
                        </div>
                        <div className={style.formDiv}>
                            <label htmlFor="optic" className={style.modalLabel}>optic</label>
                            <input type="text" onChange={(e) => setOptic(e.target.value)}/>
                            {error.optic &&
                                <p className={style.validations}>{error.optic.message}</p>}
                        </div>
                        <div className={style.formDiv}>
                            <label htmlFor="lazer" className={style.modalLabel}>lazer</label>
                            <input type="text" onChange={(e) => setLazer(e.target.value)}/>
                            {error.lazer && (
                                <p className={style.validations}>{error.lazer.message}</p>
                                )}
                        </div>
                    </div>
                    <input type="submit" value="submit" className={style.linkButton}/>
                    <button className={style.linkButton} onClick={()=> setOpenModal(false)}>Back home</button>
                </form>
            </div>
        </div>
    )
}

export default CreateClassModal