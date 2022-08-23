import React from 'react'
import { connect } from 'react-redux'

const Home = (props)=> {
    return (
        <div>
            <h1>Home</h1>.
        </div>
    )
}

export default connect(()=> {
    return {}
},{})(React.memo(Home))