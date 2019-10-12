import sanitizeHtml from 'sanitize-html'

export const _replace = ( str, search = '+', replace = ' ' ) => str.replace(new RegExp(`\\${search}`, 'g'), replace).toLowerCase()

export const titleCase = string => {
    let str = string.toLowerCase().split(' ')
    for (var i = 0; i < str.length; i++)
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)

    return str.join(' ')
}

const clean = string => {
    return sanitizeHtml(string, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'p', 'a', 'img', 'strong' ]),
        
        allowedAttributes: {
            a: [ 'href', 'name', 'target' ],
            img: [ 'src', 'alt' ],
            table: [ 'class' ]
        },

        transformTags: {
            'table': sanitizeHtml.simpleTransform( 'table', {class: 'table'} ),
        },

        exclusiveFilter: frame => frame.tag === 'p' && !frame.text.trim(),
        
        //exclusiveFilter: frame => frame.tag === 'td' && !frame.text.trim()
    })
}

const cleanTable= string => {
    return sanitizeHtml(string, {
        allowedTags: [ 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'sup' ],
        allowedAttributes: { table: [ 'class' ] },
        transformTags: { 'table': sanitizeHtml.simpleTransform( 'table', {class: 'table table-striped table-borderless'} ) }
    })
}

export const cleanHtml = {
    clean,
    table: cleanTable
}