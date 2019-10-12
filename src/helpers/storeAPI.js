import storeAPI from 'store'

export const getStorage = item => {
    
    try {
        return storeAPI.get(item)
    } catch (err) {
        return undefined
    }

}

