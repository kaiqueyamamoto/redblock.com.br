import Head from 'next/head'

const HeaderLinks = ( props ) => {
  return (
    <Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
      />
      <title> { props.title } </title>
    </Head>
  )
}

export default HeaderLinks