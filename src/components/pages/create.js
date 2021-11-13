import { useState } from "react";
import { useHistory } from "react-router";
import "../../index.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Frank");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(() => {
        console.log("New Blog is Added!!!");
        setIsPending(false);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="row border border-secondary p-3 m-3">
      <h2 className="title text-danger">Add a New Blog</h2>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label className="form-label">Blog Title</label>
          <input
            type="text"
            className="form-control"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Blog Body</label>
          <textarea
            className="form-control"
            rows="7"
            required
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </div>
        <div>
          <label>Author:</label>
          <select
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          >
            <option value="Ray">Ray</option>
            <option value="Debra">Debra</option>
            <option value="Frank">Frank</option>
            <option value="Robert">Robert</option>
            <option value="Marie">Marie</option>
          </select>
        </div>
        <hr className="bg-secondary" />
        <div>
          {!isPending && <button className="btn btn-danger">Add A Blog</button>}
          {isPending && (
            <button className="btn btn-danger" disabled>
              Adding A Blog...
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Create;
