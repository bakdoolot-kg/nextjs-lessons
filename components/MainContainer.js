import Head from "next/head";
import A from "./A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={'Bakdoolot, nextjs, ' + keywords}></meta>
        <title>Уроки по NextJs</title>
      </Head>

      <div className='navbar'>
        <A href='/' text='Home' />
        <A href='/users' text='Users' />
      </div>

      <div>
        {children}
      </div>

      <style jsx>
        {`
          .navbar {
            background: rgb(207, 207, 207);
            font-size: 20px;
            font-family: sans-serif;
            padding: 20px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;