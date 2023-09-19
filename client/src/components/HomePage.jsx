import style from '../components/css/style.module.css'

const HomePage = ()=> {


    return(
        <div className={style.backGround}>
            <div className={style.greenFont}>
                <h1>Call Of Duty </h1>
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
                    </tr>
                    <tr>
                        <td>m4</td>
                        <td>echoline gs-x</td>
                        <td>razer comp</td>
                        <td>vxpinaple vs rip</td>
                        <td>100 blk overpressured</td>
                        <td>60 round mag</td>
                        <td>d39 grip</td>
                        <td>trx-56 stock</td>
                        <td>sz mw11</td>
                        <td>1trd</td>
                    </tr>
                </table>
            </div>
            <button>Add Class</button>
        </div>
    )
}

export default HomePage