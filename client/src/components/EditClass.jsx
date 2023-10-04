import {Link} from "react-router-dom"
import style from './css/style.module.css'

const EditClass = () =>{

    return(
        <div>
            <h1>Edit Class</h1>
            <div>
                <form >
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="barrel">Barrel:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="muzel">muzel:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="underBarel">Under Barel:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="ammunation">Amunation:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="magazine">Magazine:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="rearGrip">Rear Grip:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="stock">stock:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="optic">optic:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="lazer">lazer:</label>
                        <input type="text" />
                    </div>
                </form>
                <input type="submit"  value="submit"/>
                <Link to={"/"} className={style.linkButton}>Back Home</Link>
            </div>
        </div>
    )
}

export default EditClass