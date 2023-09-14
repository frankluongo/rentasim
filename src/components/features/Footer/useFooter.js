import { graphql, useStaticQuery } from "gatsby";

export default function useFooter() {
  let data = null;
  try {
    const response = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            business {
              email
              phone
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
  return {
    title: "get in touch",
    columnOne: {
      title: "rent•a•sim",
      description:
        "Rent-a-Sim adds life to your events. Our goal is to be an extension of the positive environment you already created by providing a unique, wherever you may be, experience for sports, technology and competition. At Rent-a-Sim, we bring the fun to you!",
      email: data.business.email,
      phone: data.business.phone,
    },
    columnTwo: {
      title: "get updates!",
      description:
        "Subscribe to our newsletter for updates, promos, openings and more!",
    },
    columnThree: {
      title: "follow us!",
      socials: data.socials,
    },
  };
}
