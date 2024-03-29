export const getBookWishDetails = () => {
    const bookWishDetails = localStorage.getItem('book-wish')
    if (bookWishDetails) {
        return JSON.parse(bookWishDetails)
    }
    return [];
}

export const saveBookWishDetails = id => {
    const bookWishDetails = getBookWishDetails()
    const isExist = bookWishDetails.find(book => book === id)

    if (!isExist) {
        bookWishDetails.push(id)
        localStorage.setItem('book-wish', JSON.stringify(bookWishDetails))
    }

}
