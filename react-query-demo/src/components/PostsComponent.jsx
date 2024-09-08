import { useQuery } from 'react-query'

//data fetch function
const url = 'https://jsonplaceholder.typicode.com/posts';
const fetchPosts = async() => {
    const res = await fetch(url)
    return res.json();
} 

function PostComponet() {
    //fetch the data using useQuery
const {data, error, isLoading,isError, refetch} = useQuery('post', fetchPosts, 
   //cache configuration
    {
        cacheTime: 1000 * 60 * 10, //10min
        staleTime : 1000 * 60 * 2, //2min
        refetchOnWindowFocus: true, //Refetch data when the window gains focus
        keepPreviousData: true //Keep previous data while new data is being fetched
    }
);

//hamdle loading state
if(isLoading)return <div>loading......</div>
//hamdle error state
if(isError)return <div>An error occurred: {error.message}</div>

//handles data refetch
const handleRefetch = () =>{
    refetch();
    console.log("refetched")
}

  return (
    //rendering the fetch data
    <div>
    <button onClick={handleRefetch}>Refetch</button>
    {data.map(post => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ))}  
    </div>
  );
}

export default PostComponet;
