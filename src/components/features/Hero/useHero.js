import { useStaticQuery, graphql } from "gatsby";

export default function useHero() {
  let data = null;
  try {
    const image = useStaticQuery(graphql`
      query HeroImage {
        golfer: file(relativePath: { eq: "golfer.jpeg" }) {
          childImageSharp {
            gatsbyImageData(width: 1920)
          }
        }
      }
    `);
    data = image;
  } catch (error) {
    console.error(error);
  }

  return data;
}
