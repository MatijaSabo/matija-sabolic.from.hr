export const getFeedbacks = async (): Promise<Feedback[]> => {
    const response = await fetch(`${process.env.API_HOST}/api/v1/feedback`, 
        {next: { revalidate: 300 }},
    );
    return await response.json();
}