import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container-fluid | py-16 my-fl-400 | text-center">
      <h1 className="font-serif font-normal text-800 | mb-2">404</h1>
      <p className="mb-2 | text-600 font-semibold uppercase tracking-wide">Page Not Found</p>
      <Link className="underline" to="/">Shop Front</Link>
    </div>
  );
};

export default PageNotFound;