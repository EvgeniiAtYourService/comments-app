import { IComment } from "src/models/comments";

interface IProps {
    comment: IComment;
}

const Comment: React.FC<IProps> = props => {

    const { comment: { author, created, id, likes, parent, text }} = props;

    return (
        <div>
            <p>{author}</p>
            <p>{created}</p>
            <p>{id}</p>
            <p>{likes}</p>
            <p>{parent}</p>
            <p>{text}</p>
            <hr />
        </div>
    )
}

export default Comment