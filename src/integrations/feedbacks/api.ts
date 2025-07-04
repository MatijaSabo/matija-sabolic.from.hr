export const getFeedbacks = async (): Promise<Feedback[]> => {
    const response = await fetch(`${process.env.API_HOST}/api/v1/feedback`, 
        {next: { revalidate: Number(process.env.API_REFRESH_PERIOD)}},
    );
    return await response.json();
}