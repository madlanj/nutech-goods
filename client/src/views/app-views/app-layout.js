import React from 'react'
import { connect } from 'react-redux'
import AppViews from './index'

const AppLayout = (props)=> {
    return (
        <>
                    <div className='app-header'>
            <div>
                <h1>App Layout</h1>
            </div>
            <AppViews/>
        </div>
        </>
    )
}

export default connect(()=> {},{})(React.memo(AppLayout));