import React,{useState,useEffect} from 'react'
import ApiService from '../../../../service/api.service';
import Navbar from '../../../../components/Navbar';
import { useHistory, useParams } from 'react-router-dom';
import Utils from '../../../../utils';

const ProductSingle = props => {

let {id} = useParams()

    const [data,setData] = useState({})
    const [loading,setLoading] = useState(false)
    const [errors,setErrors] = useState(false)
    const [msg, setMsg] = useState('');
    const history = useHistory();
    const [image, setImage] = useState("https://fakeimg.pl/350x200/");
    const [saveImage, setSaveImage] = useState(null);

    const [formData,setFormData] = useState(()=> {
        if(typeof(data?.title) !== "undefined"){
            return {
                title: data?.title ?? "",
                purchasePrice: data?.purchasePrice ?? "",
                purchaseSell: data?.purchaseSell ?? "",
                stock: data?.stock ?? "",
            }
        }
        return {
            title: "",
            purchasePrice: "",
            purchaseSell: "",
            stock: "",
        }
    })

    useEffect(()=> {
        (async()=> {
            await new ApiService({
                url:`/api/v1/goods/${id}`,
            })
            .get()
            .then((response)=> {

                setData(response?.data ?? {})
                setImage(Utils.getThumbnail(response?.data?.image) ??"https://fakeimg.pl/350x200/")
                setFormData({
                    ...formData,
                    ...response.data
                })
                setLoading(false)
            })
            .catch((err)=> {
                console.log(err)
            })
        })()
    },[setData,setFormData,setImage])
   
    const handleChange = (e)=> { 
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    function handleUploadChange(e) {
        let uploaded = e.target.files[0];
        setImage(URL.createObjectURL(uploaded));
        setSaveImage(uploaded);
    }



    const handleUpdateData = async(e) => {
        e.preventDefault();
        try {
            const formdata = new URLSearchParams()
            Object.keys(formData).map((key)=> {
                formdata.append(key,formData[key])
            })
            
            await new ApiService({
                url:`/api/v1/goods/${id}`,
                body:formdata
            })
            .put()
            .then((response)=> {

                if(!response?.error){
                    if(saveImage){
                        handleUpdate(response.data.id)
                    }else{
                        alert("Success Updated!")
                        history.push("/")
                    }
                }else{
                    alert(response?.message ?? "Some Error")
                }
            })
            .catch((err)=> {
                alert(err.message)
            })
        

           
        } catch (error) {
            if (error.response) {
                setMsg(error.response.errors);
            }
        }
    }

    const handleUpdate = async (id)=> {
        const upload = new FormData();
        upload.append("image", saveImage);
        await new ApiService({
            url:`/api/v1/goods/image/${id}`,
            body:upload
        })
        .put()
        .then((response)=> {
            if(!response?.error){
                alert("Success Updated!")
                history.push('/')
            }
        })
        .catch((err)=> {

        })
    
    }

    return loading ? "Loading..." :(
        <div>
            <Navbar/>
            <div className="container mt-5">
                
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={handleUpdateData} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                <label className="label">Gambar Barang</label>
                                <div>
                                    <img src={image} className="img-thumbnail" alt="..." />
                                </div>
                                    <div className="file has-name is-fullwidth">
                                        <label className="file-label">
                                            <input
                                            className="file-input" name="image" onChange={handleUploadChange}  type="file" />
                                            <span className="file-cta">
                                            <span className="file-icon">
                                                <i className="fas fa-upload"></i>
                                            </span>
                                            <span className="file-label">
                                                Choose a file…
                                            </span>
                                            </span>
                                            <span className="file-name">
                                            ....
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Nama Barang</label>
                                    <div className="controls">
                                        <input
                                        value={formData?.title}
                                        type="text" className="input" placeholder="Nama Barang"
                                             name="title"  onChange={handleChange} disabled />
                                    </div>
                                </div>
                                
                                <div className="field mt-5">
                                    <label className="label">Harga Beli</label>
                                    <div className="controls">
                                        <input 
                                        value={formData?.purchasePrice}
                                        type="number" className="input" placeholder="Harga Beli" name="purchasePrice"  onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Harga Jual</label>
                                    <div className="controls">
                                        <input 
                                        value={formData?.purchaseSell}
                                        type="number" className="input" placeholder="Harga Jual" name="purchaseSell"  onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Stok</label>
                                    <div className="controls">
                                        <input 
                                        value={formData?.stock}
                                        type="number" className="input" placeholder="Stok" name="stock" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ProductSingle