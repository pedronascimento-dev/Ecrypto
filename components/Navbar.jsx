import { useEthereum } from "../hooks/useEthereum";
import Link from "next/link";
import { Btn, Div } from "../styles/Elements";
import { GiFox } from "react-icons/gi";

function Navbar() {
  const { logar } = useEthereum();

  return (
    <>
      <nav className="navbar blur-navbar fixed-top">
        <Div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="container"
          widthmd="40rem"
          height="40px"
        >
          <Link href="/">
            <h2 className="mb-0 click text-pink">ECrypto</h2>
          </Link>

          <Btn
            bg="#EC5DB5"
            className="btn btn-light py-1"
            onClick={() => logar("/mail")}
          >
            Entrar
            <GiFox />
          </Btn>
        </Div>
      </nav>
    </>
  );
}

export default Navbar;
