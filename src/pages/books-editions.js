import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from 'gatsby-image'

const BooksEditions = ({data}) => {

  const {allContentfulBooksEditions:{nodes: books},} = data

  const booksYears = [...new Set(books.map(x => x.year))];
  let booksList = [];
  const createBooksList = ()=>{
    for (let index = 0; index < booksYears.length; index++) {
      booksList.push({year:booksYears[index], bookCopy: [] });
      for (let index2 = 0; index2 < books.length; index2++) {
        if(books[index2].year === booksList[index].year){
          booksList[index].bookCopy.push(books[index2])
        } 
      }
    }
  }
  createBooksList()

    return(
    <Layout>
      <SEO title="books/Editions" />
      {booksList.map((book)=>{
        return <section key={book.id}>
            <div>
              <p className="list-year">{book.year}</p>
              <section className="book-list">
              {book.bookCopy.map((edition)=>{
                  return <Link to={`/books-editions/`}key={edition.id} className="book-thumbnail" >
                  <article>
                  <Image fluid={edition.coverImage.fluid}></Image>
                  <p>{edition.title}</p>
                </article>
                </Link> 
              })}
              </section>
            </div>
        </section>
      })}
    </Layout>
  )
}

export const query = graphql`
{
  allContentfulBooksEditions(sort: {fields: releaseDate, order: DESC}) {
    nodes {
      title
      releaseDate(formatString: "YYYY MMMM DD")
      year
      id
      coverImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
}
`

export default BooksEditions
