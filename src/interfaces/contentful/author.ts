type ContentfulAuthor = {
    __typename: string,
    sys: {
        id: string;
    }
    name: string
    title: string
    bio: string
    description: string
    email: string
    website: string
    jobsCollection: Jobs
    education: Education
    picture: Picture
    socialMedia: SocialMediaLinks
    skillsCollection: SkillList
    certificatesCollection: CertificatesList
    projectsCollection: Projects
}