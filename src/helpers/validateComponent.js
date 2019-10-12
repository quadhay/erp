const validateComponent = routes => {
    let obj = {}
    for ( let [path, route] of Object.entries(routes) )
        obj[path] = route
    
    return obj
}

export default validateComponent