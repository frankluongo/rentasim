import { useStaticQuery, graphql } from "gatsby";

export default function useValueProps() {
  let images = null;
  try {
    const query = useStaticQuery(graphql`
      query {
        golfer: file(relativePath: { eq: "golfer.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 640)
          }
        }
        hockey2: file(relativePath: { eq: "hockey-2.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 640)
          }
        }
        inside: file(relativePath: { eq: "inside.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 640)
          }
        }
        movie: file(relativePath: { eq: "movie.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 640)
          }
        }
        outside: file(relativePath: { eq: "outside-1.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 640)
          }
        }
        soccer2: file(relativePath: { eq: "soccer-2.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 640)
          }
        }
        shooter: file(relativePath: { eq: "shootemup.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 640)
          }
        }
        zombies: file(relativePath: { eq: "zombies.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 640)
          }
        }
      }
    `);
    images = query;
  } catch (error) {
    console.error(error);
  }
  return images;
}
