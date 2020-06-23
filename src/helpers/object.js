const clean = obj => {
    for (let prop in obj) {
        if ( obj[prop] === undefined || obj[prop] === null || obj[prop] === '' ) {
            delete obj[prop]
        }
    }

    return obj
}

const removeEmpty = obj => {
    Object.keys(obj).forEach(key => obj[key] === '' && delete obj[key])
}

export const _object = { clean, removeEmpty }