import { getAuthorById } from '@/api/author/api';
import { cookies, draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: { url: string | URL; }) {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    const id = searchParams.get('id');

    if (!secret || !id) {
        return new Response('Missing parameters', { status: 400 });
    }

    if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
        return new Response('Invalid token', { status: 401 });
    }

    const author = await getAuthorById(id, true);
    console.log('enable-draft-post', author, id);

    if (!author) {
        return new Response(`Author ${id} not found`, { status: 404 });
    }

    const draft = await draftMode();
    draft.enable();

    redirect('/');
}