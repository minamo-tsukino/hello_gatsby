import React from "react";
import Layout from "../components/layout.js";
import { graphql, Link } from "gatsby";

const Home = ({data})=>{
  console.log(data);
  return (<div>
    <Layout>
      <h1 className="title">Gatsby Blog Site</h1>
      {data.allMarkdownRemark.nodes.map(node => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
          {/* <div dangerouslySetInnerHTML={{ __html: node.html }} /> */}
        </div>
      ))}
    </Layout>
  </div>);
}

export default Home;

export const query = graphql`{
  allMarkdownRemark {
    nodes {
      html
      frontmatter {
        date
        title
      }
      fields {
        slug
      }
    }
  }
}`