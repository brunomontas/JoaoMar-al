import React from "react"
import  {  graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from 'gatsby-image'
import {Link} from 'gatsby'


const IndexPage = ({data}) => {

  const {allContentfulExhibition:{nodes: exhibitions},} = data
  const exhibitionYears = [...new Set(exhibitions.map(x => x.year))];
  let exhibitionList = [];
  const createExhibitionList = ()=>{
    for (let index = 0; index < exhibitionYears.length; index++) {
      exhibitionList.push({year:exhibitionYears[index], exhibitionsCopy: [] });
      for (let index2 = 0; index2 < exhibitions.length; index2++) {
        if(exhibitions[index2].year === exhibitionList[index].year){
          exhibitionList[index].exhibitionsCopy.push(exhibitions[index2])
        } 
      }
    }
  }
  createExhibitionList()

  return (
    <Layout>
      <SEO title="Home - Exhibitions" />
      {exhibitionList.map((exhibition)=>{
        return <section key={exhibition.id}>
            <div>
              <p className="list-year">{exhibition.year}</p>
              <section className="exhibition-list">
              {exhibition.exhibitionsCopy.map((event)=>{
                  return <Link to={`/exhibitions/${event.slug}`}key={event.id} className="exhibition-thumbnail" >
                  <article>
                  <Image fluid={event.cover.fluid}></Image>
                  <p>{event.title}</p>
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
    allContentfulExhibition (sort: {fields: date, order: DESC}){
      nodes {
        cover {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
        title
        id
        year
      }
    }
  }
`

export default IndexPage
