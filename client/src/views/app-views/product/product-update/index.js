import React from 'react'
import { useParams } from 'react-router-dom'

const ProductUpdate = ()=> {
    const { id } = useParams()
    return (
        <div>
            <h1>Product Update</h1>
        </div>
    )
}

ProductUpdate.propTypes = {}

export default ProductUpdate