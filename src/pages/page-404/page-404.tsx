function Page404(): JSX.Element {
  return (
    <div className="page page--gray">
      <main className="page__main page__main--page-404">
        <div
          className="page__not-found-container container"
          style={{
            display: 'flex',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <section className="not-found">
            <h1
              className="not-found__title"
              style={{
                fontSize: '64px',
                textAlign: 'center'
              }}
            >
              404 Not Found
            </h1>
            <a
              className="not-found__link"
              href="#"
              style={{
                display: 'block',
                fontSize: '36px',
                textAlign: 'center'
              }}
            >
                return to main
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Page404;
