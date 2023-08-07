import Header from "../header/header";
import Navigation from "../navigation/navigation";
import Footer from "../Footer/footer";
import ToBeReadList from "../readingLists/toBeReadList";
import "./BookPage.css";

const TBRPage = ({ allBooks, setAllBooks }) => {
  return (
    <>
      <div className="App">
        <Header className="header" />
        <Navigation allBooks={allBooks} setAllBooks={setAllBooks} />
        <main main className="grid">
          <h1> To Be Read:</h1>
          <br />
          <ToBeReadList allBooks={allBooks} setAllBooks={setAllBooks} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TBRPage;