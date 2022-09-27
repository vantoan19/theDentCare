import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      Hello
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Raleway;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
