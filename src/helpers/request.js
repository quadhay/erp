
const apiFetch = ( args = {} ) => {
    const mimetypes = {
        css: "text/css",
        html: "text/html",
        json: "application/json",
        javascript: "text/javascript",
        text: "text/plain"
    }    
    
    const $args = { data: {}, dataType: 'json', method: 'post' },
          param = { ...$args, ...args }

    return fetch( param.url, {
        method: param.method, // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, cors, *same-origin
        //cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": mimetypes[param.dataType],
        },
        //redirect: "follow", // manual, *follow, error
        //referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(param.data), // body data type must match "Content-Type" header
    } )
    .then(response => response)
    .catch(error => console.error(error))
}

const resolver = ( promise, callback ) => {
    promise.then(
        data => callback(data),
        error => console.log( 'something went wrong', error )
    )
}

export const _request = {
	fetch: apiFetch,
	resolve: resolver
}