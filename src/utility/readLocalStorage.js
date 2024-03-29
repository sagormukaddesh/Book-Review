export const getBookReadDetails = () => {
    const bookReadDetails = localStorage.getItem('book-read')
    if (bookReadDetails) {
        return JSON.parse(bookReadDetails)
    }
    return [];
}

export const saveBookReadDetails = id => {
    const bookReadDetails = getBookReadDetails()
    const isExist = bookReadDetails.find(book => book === id)

    if (!isExist) {
        bookReadDetails.push(id)
        localStorage.setItem('book-read', JSON.stringify(bookReadDetails))
    }

}