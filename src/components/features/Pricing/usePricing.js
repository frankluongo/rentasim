import { useStaticQuery, graphql } from "gatsby";

export default function usePricing() {
  let data = null;
  try {
    const image = useStaticQuery(graphql`
      query HeroImage {
        file(relativePath: { eq: "map.png" }) {
          childImageSharp {
            gatsbyImageData(width: 567)
          }
        }
      }
    `);
    data = image.file;
  } catch (error) {
    console.error(error);
  }
  return data;
}
