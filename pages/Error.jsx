import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();

  //   console.log(err);

  return (
    <div className="container">
      <h1>Error: {err.message}</h1>
      <pre>
        {err.statusText} - {err.status}
      </pre>
      <h3></h3>
    </div>
  );
};

export default Error;
