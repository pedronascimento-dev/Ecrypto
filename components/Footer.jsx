import Link from "next/link";
import { Color } from "../styles/Elements";

function Footer() {
  return (
    <>
      <div className="container-fluid">
        <footer className="py-2">
          <Link href="/">
            <p className="text-center mb-0 click">
              &copy; {new Date().getFullYear()}{" "}
              <Color value="#5d5fec">ECrypto</Color>
            </p>
          </Link>
        </footer>
      </div>
    </>
  );
}

export default Footer;
