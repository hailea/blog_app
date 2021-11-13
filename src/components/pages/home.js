import useFetch from "../comps/useFetch";
import BlogList from "../comps/bloglist";

const Home = () => {
  const url = "http://localhost:8000/blogs";
  const { data, isLoading, isError } = useFetch(url);
  console.log("Time3:", Date.now());
  console.log(data, isLoading, isError);

  return (
    <div className="row">
      {isError && <p>{isError} </p>}
      {isLoading && (
        <div className="justify-content-center">
          <div className="spinner-border text-info m-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>{" "}
        </div>
      )}
      {data && (
        <BlogList blogs={data} title="Web Development Tips and Tricks" />
      )}
    </div>
  );
};

export default Home;
