import useFetch from "react-fetch-hook";

export default function Home() {
  const { isLoading, data, error } = useFetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=10"
  );
  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-8'>Home Page</h1>
        <h1 className="text-center text-3xl font-bold py-8"> Posts</h1>
        {isLoading && <div>...</div>}
        {error && (
            <div className="text-center text-3xl font-bold py-8">{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <ul className="text-center text-3xl font-bold py-8">
            {data &&
                data.map(({ id, title , albumId , url }) => (
                    <li key={id}>
                        <h3>{title} {albumId}</h3>
                      <img src={url} alt="logo"/>
                    </li>
                ))}
        </ul>
    </div>
  )
}

