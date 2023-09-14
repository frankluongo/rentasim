import { graphql, useStaticQuery } from "gatsby";

export default function useHeader() {
  let data = null;
  try {
    const response = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            business {
              email
            }
            navigation {
              title
              url
            }
            socials {
              icon
              link
              name
            }
          }
        }
      }
    `);
    data = response.site.siteMetadata;
  } catch (err) {
    console.error(err);
  }
  return data;
}
