import React from 'react'
import { Route } from 'react-router-dom'
function ProtectedRoute({ path, element }) {
    return (
        <Route path={path} element={element}></Route>
    )
}

export default ProtectedRoute