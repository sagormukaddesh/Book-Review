import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import WishList from "../../Components/WishList/WishList";
import { getBookWishDetails } from "../../utility/wishListLocalStore";
import { getBookReadDetails } from "../../utility/readLocalStorage";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Read from "../../Components/Read/Read";

const ListedBooks = () => {
    const booksData = useLoaderData();

    const [wishList, setWishList] = useState();

    useEffect(() => {
        const storedWishList = getBookWishDetails()
        if (booksData.length > 0) {
            const bookWish = [];
            for (const id of storedWishList) {
                const books = booksData.find(books => books.bookId === id)
                console.log(books);
                if (books) {
                    bookWish.push(books)
                }
            }
            setWishList(bookWish);
            console.log(wishList);
        }
    }, [booksData, wishList])

    const [readBooks, setReadBooks] = useState();
    useEffect(() => {
        const storedBookId = getBookReadDetails();

        if (booksData.length > 0) {
            const readBooks = [];

            for (const id of storedBookId) {
                const books = booksData.find(books => books.bookId === id)
                if (books) {
                    readBooks.push(books)
                }
            }
            setReadBooks(readBooks);
            console.log(readBooks);
        }
    }, [booksData])



    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <div>
                        {
                            readBooks?.map((book, idx) => <Read key={idx} book={book} ></Read>)
                        }

                    </div>
                </TabPanel>


                <TabPanel>
                    <div>
                        {
                            wishList?.map((book, idx) => <WishList key={idx} book={book} ></WishList>)
                        }

                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ListedBooks;