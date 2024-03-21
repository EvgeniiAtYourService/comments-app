import { IComment } from "src/models/comments";

interface IProps {
    comment: IComment;
}

const Comment: React.FC<IProps> = props => {
  return (
    <div>Comment</div>
  )
}

export default Comment