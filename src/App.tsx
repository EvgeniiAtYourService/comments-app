import { useState, useEffect } from 'react'
import getCommentsRequest from './api/comments/getCommentsRequest';
import { IPagination } from './models/comments';
import Comment from './components/Comment';
import Loader from './ui/Loader/Loader';

function App() {

    const [fetching, setFetching] = useState(true)

    const [pageData, setPageData] = useState<IPagination | null>(null)

    const [error, setError] = useState('')

    useEffect(() => {
        getCommentsRequest(1)
            .then(data => setPageData(data))
            .catch(error => setError(error))
            .finally(() => setFetching(false))
    }, [])

    return (
        <div>
            {pageData?.data.map(comment => <Comment key={comment.id} comment={comment} />)}
        </div>
    );
}

export default App;