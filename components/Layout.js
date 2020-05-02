import Link from "next/link";

export default function Layout({ children, home }) {
  return (
    <div className="container">
      <main>{children}</main>
      {!home && (
        <div className="backToHome">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
