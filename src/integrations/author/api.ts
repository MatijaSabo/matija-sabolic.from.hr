const PREVIEW_TOKEN = process.env.CONTENTFUL_PREVIEW_API_KEY;
const TOKEN = process.env.CONTENTFUL_DELIVERY_API_KEY;
const SPACE = process.env.CONTENTFUL_SPACE;
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`;

export async function getAuthorById(id: string, preview = false) : Promise<ContentfulAuthor> {
  const response  = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${preview ? PREVIEW_TOKEN : TOKEN}`
    },
    body: JSON.stringify({
      query: `
        query GetAuthorById($id: String!) {
          author(id: $id) {
            __typename
            sys {
              id
            }
            name
            bio 
            description
            title
            website
            email
            education {
              diploma
              university
            }
            picture {
              url
              title
              description
              contentType
              width
              height
            }
            certificatesCollection {
              items {
                area
                certificateList
              }
            }
            skillsCollection {
              items {
                area
                skills
              }
            }
            jobsCollection {
              items {
                role
                company
                startDate
                endDate
                responsibilities
              }
            }
            socialMedia {
              instagram
              facebook
              linkedIn
              gitHub
            }
            projectsCollection {
              items {
                client
                role
                responsibilities
              }
            }
          }
        }
      `,
      variables: { id },
    }),
    next: { 
      revalidate: preview ? 0 : Number(process.env.API_REFRESH_PERIOD), 
      tags: ['author']
    },
    cache: preview ? 'no-store' : 'force-cache'
  });

  const json = await response.json();
  return json.data.author;
}

export default { getAuthorById };