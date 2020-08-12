import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from 'gatsby-image'


const ComponentName = ({ 
    
    data: {
        contentfulExhibition:{
             title, 
             location, 
             date, 
             text:{text},
             exhibitionImages,
             showDate,
             showLocation,
             showText,

            },
         },
}) => {

    const [value, setValue] = React.useState(0)

    return <Layout>
        <SEO title={title}/ >
        <section className="exhibition-layout">
            <article className="exhibition-details">
            <div>
                <p>{title}</p>
            </div>
            <div>
                {showLocation && <p>{location}</p>}
            </div>
            <div>
                {showDate && <p>{date}</p>}
            </div>
            <div>
            {showText && <p>{text}</p>}
            </div>
            </article >
            <article className="exhibition-images">
                            <div className="image-container">
                                {/* image of work*/}
                            <Image fluid={exhibitionImages[value].fluid} style={{ height: "100%", width: "100%", }}
  imgStyle={{ objectFit: "contain" , objectPosition: "top center"}}></Image>
                            </div>
                            <div className="image-details">
                            <div>
                                <button onClick={()=>{
                                    if(value > 0){setValue(value - 1)}
                                }}>back</button>
                                <button onClick={()=>{
                                    if(value < (exhibitionImages.length - 1)){setValue(value +1)}
                                }}>next</button>
                            </div>
                            <div>
                                 {/* details of work*/}
                                <p>{exhibitionImages[value].title}</p>
                                <p>{exhibitionImages[value].description}</p>
                            </div>
                            </div>
                    
            </article>
        </section>
    </Layout>
}
export const query = graphql`
query GetExhibition($slug: String){
    contentfulExhibition(slug: {eq: $slug}) {
      date
      id
      location
      slug
      title
      exhibitionImages {
        fluid {
            ...GatsbyContentfulFluid
        }
        description
        title
      }
      text {
        text
      }
      showDate
      showLocation
      showText
    }
  }
`

export default ComponentName

