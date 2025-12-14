import './globals.css';

export const metadata = {
  title: 'Best_Practices',
  description: 'Best Practices Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="navbar border-bottom box-shadow">
            <div className="container">
              <a className="navbar-brand" href="/">Best_Practices</a>
              <div>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
                  <li><a className="nav-link" href="/">Home</a></li>
                  <li><a className="nav-link" href="/privacy">Privacy</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div className="container">
          <main role="main" style={{ paddingBottom: '1rem' }}>
            {children}
          </main>
        </div>
        <footer className="border-top footer">
          <div className="container">
            &copy; 2021 - Best_Practices - <a href="/privacy">Privacy</a>
          </div>
        </footer>
      </body>
    </html>
  );
}