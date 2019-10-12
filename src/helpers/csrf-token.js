export const csrfToken = () => {
    // retrieve csrf-token from document head
    let token = document.head.querySelector('meta[name="csrf-token"]')

    if (token) {
        return { 'X-CSRF-TOKEN': token.content }
    } else {
        return {}
    }
}