import { useStaticQuery, graphql } from "gatsby";

export default function useAboutUs() {
  let image = null;
  try {
    const query = useStaticQuery(graphql`
      query {
        team: file(relativePath: { eq: "set-up.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 1024)
          }
        }
      }
    `);
    image = query;
  } catch (error) {
    console.error(error);
  }
  return image?.team;
}
