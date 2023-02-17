// import { useNavigate } from "react-router-dom";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import style from "./style.css"
// import Modal from "../modal/modal"


const Navigation = ({ allBooks, setAllBooks }) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleClick = () => {
        setIsModalOpen(!isModalOpen)
        console.log("openModal:", isModalOpen)
    }
    return (
        <>
            <aside className='PlaceLeft'>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>All Books</li>
                        <li>
                            To Be Read
                        </li>
                        <li>Current Reads</li>
                        <li>Completed Reads</li>
                        <button className="openModalBtn green"
                            onClick={handleClick}
                        >
                            + Add New Book
                        </button>
                        {/* {isModalOpen && <Modal allBooks={allBooks} setAllBooks={setAllBooks}
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen} />} */}

                    </ul>
                </nav>
            </aside>

        </>
    )
}

export default Navigation