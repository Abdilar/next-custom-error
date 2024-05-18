const Error = ({ statusCode }: { statusCode: number }) => {
  return (
    <>
      <h1>Error PAge</h1>
      <p>the status code is {statusCode}</p>
    </>
  );
};

Error.getInitialProps = ({ res, error }: { res: any; error: any }) => {
  const statusCode = res ? res.statusCode : error ? error.statusCode : 404;
  return { statusCode };
};

export default Error;
