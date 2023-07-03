import { useStaticQuery, graphql } from "gatsby";

const items = [
  {
    image: "party",
    number: "01",
    heading: "we come to you",
    description:
      "Indoor or outdoor, bachelor party or family party, trade shows or corporate events, we can cater to your event needs. Work with our team to plan the perfect event for you!",
  },
  {
    image: "zombies",
    number: "02",
    heading: "we've got something for everyone",
    description:
      "Whether you're a golf fiend, training for a sport, or want to take on zombies, our simulators have something for everyone!",
  },
  {
    image: "cs",
    number: "03",
    heading: "our service is top notch",
    description:
      "Our team will be there to ensure 100% up-time, on-time set up and receiving the highest simulator functionality",
    last: true,
  },
];

export default function useValueProps() {
  let data = null;
  try {
    const images = useStaticQuery(graphql`
      query ValuePropsImages {
        party: file(relativePath: { eq: "party.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 480)
          }
        }
        zombies: file(relativePath: { eq: "zombies.jpeg" }) {
          childImageSharp {
            gatsbyImageData(width: 480)
          }
        }
        cs: file(relativePath: { eq: "customer-service.jpeg" }) {
          childImageSharp {
            gatsbyImageData(width: 480)
          }
        }
      }
    `);
    data = images;
  } catch (error) {
    console.error(error);
  }
  return { data, items };
}
