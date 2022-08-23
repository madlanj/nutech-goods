import React,{useState,useEffect} from 'react'
import ApiService from '../../../../service/api.service';
import Navbar from '../../../../components/Navbar';
import { useHistory } from 'react-router-dom';
import Utils from '../../../../utils';
const ProductList = props => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const history = useHistory();
    useEffect(()=> {
        (async()=> {
            await new ApiService({
                url:"/api/v1/goods",
            })
            .get()
            .then((response)=> {

                setData(response?.data ?? [])
                setLoading(false)
            })
            .catch((err)=> {
                console.log(err)
            })
        })()
    },[])

    const handleAdd = ()=> {
        history.push('/app/goods/add')
    }

    const handleDelete = async (id)=> {
        await new ApiService({
            url:`/api/v1/goods/${id}`,
        })
        .delete()
        setData([...data.filter((item)=> item.id !== id)])
    
    }

    const handleUpdate =  (id)=> {
        history.push(`/app/goods/${id}`)
    }

    return loading ? "Loading..." :(
        <div>
            <Navbar/>
            <div className="container mt-5">
                <div className="field mt-5">
                    <button onClick={handleAdd} className="button is-success">Add Data</button>
                </div>
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Thumbnail</th>
                            <th>title</th>
                            <th>Puchase Price</th>
                            <th>Puchase Sell</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(data) && data.length > 0 &&(
                    data.map((item,index)=> (
                        <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                            <div>
                                <img src={Utils.getThumbnail(item?.image)} style={{ width:"150px" }} />
                            </div>
                        </td>
                        <td>{item?.title ?? "-"}</td>
                        <td>{item?.purchasePrice ?? "-"}</td>
                        <td>{item?.purchaseSell ?? "-"}</td>
                        <td>{item?.stock ?? "-"}</td>
                        <td>
                            <button onClick={()=> handleUpdate(item?.id)} className="button mx-1 is-info">Update</button>
                            <button onClick={()=> handleDelete(item?.id)} className="button is-danger">Delete</button>
                        </td>
                    </tr>
                    ))
                )}
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}

export default ProductList