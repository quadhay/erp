export const _check = data => {
	try {
		return data
	} catch (error) {
		return null
	}
}

export const undefinedToEmpty = $var => $var ? $var : ''

export const _sum = (items, prop) => items.reduce( (a, b) => a + b[prop], 0 )
