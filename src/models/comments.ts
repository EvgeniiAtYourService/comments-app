// Перенёс из src/data/comments.ts
export interface IPagination {
    pagination: {
        page: number;
        size: number;
        total_pages: number;
    };
    data: IComment[];
}

export interface IAuthor {
    id: number;
    name: string;
    avatar: string;
}

export interface IComment {
    id: number,
    created: string,
    text: string,
    author: number,
    parent: number | null,
    likes: number,
}