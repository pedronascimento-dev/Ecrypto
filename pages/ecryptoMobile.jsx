import Link from "next/link";
import Layout from "../components/Layout";
import { Div, Btn, Color } from "../styles/Elements";

export default function EcryptoMobile() {
  return (
    <Layout title="mobile">
      <Div className="container" height="100vh">
        <Div className="row text-center" height="100%">
          <Div className="col align-self-center">
            <h1 className="display-1">
              Para utilizar <Color>ECrypto</Color> instale o Brave Browser.
            </h1>
            <Link href="https://brave.com/">
              <Btn
                bg="#EC5DB5"
                color="#222121"
                className="btn btn-light px-4 py-2"
                fs="20px"
                onClick={() => logar("/mail")}
              >
                Instalar Brave Browser
              </Btn>
            </Link>
          </Div>
        </Div>
      </Div>
    </Layout>
  );
}
