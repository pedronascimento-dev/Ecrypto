import { useEthereum } from "../hooks/useEthereum";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GiFox } from "react-icons/gi";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { Btn, Color, Div, Section } from "../styles/Elements";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

import Particles from "react-particles";
import ParticlesComponent from "../components/Particles";

export default function Home() {
  const width = "52rem";
  const blue = "#6d6ff7";
  const white = "#fafafa";

  const { logar } = useEthereum();

  useEffect(() => {
    if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
      Swal.fire({
        icon: "warning",
        title: "Atenção",
        text: "Para usar nosso email utilize um desktop",
        background: "#222121",
        color: "#fafafa",
      });
    } else if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
      Swal.fire({
        icon: "warning",
        title: "Atenção",
        text: "Para usar nosso email utilize um desktop",
        background: "#222121",
        color: "#fafafa",
      });
    }
  }, []);

  const variants = {
    active: {
      opacity: 1,
      transition: { duration: 1.5, type: "spring" },
    },
    inactive: {
      opacity: 0,
    },
  };

  return (
    <>
      <Navbar />
      <ParticlesComponent />
      <Layout title="Boas Vindas">
        <Section variants={variants} initial="inactive" whileInView="active">
          <Div mt="55px" className="container" height="100vh" widthmd={width}>
            <Div
              className="row align-items-center justify-content-center text-center"
              height="100%"
            >
              <Div className="col-12 mb-0 mb-md-5">
                <p className="mb-0">
                  <Color value={blue}>Ecrypto</Color> é foco em privacidade
                </p>
                <h1 className="display-4">
                  Bem-vindo à uma melhor internet onde{" "}
                  <Color value={blue}>
                    privacidade e liberdade vem primeiro
                  </Color>
                </h1>
              </Div>
            </Div>
          </Div>
        </Section>
        <hr className="hr" />
        <hr className="hr" />

        <Section variants={variants} initial="inactive" whileInView="active">
          <Div className="container" widthmd={width}>
            <Div className="row align-items-center" height="100vh">
              <Div className="col-12 col-md-10">
                <h1 className="text-blue">
                  Com ECrypto,{" "}
                  <Color value={white}>seus dados pertencem a você,</Color> não
                  à empresas de tecnologia, governos ou hackers
                </h1>
                <p className="mb-0 text-white2">
                  Nosso serviço criptografado ajuda você a lutar por uma
                  internet melhor que é segura e privada por padrão.
                </p>
              </Div>
              <Div className="col-2"></Div>
            </Div>
          </Div>
        </Section>
        <hr className="hr" />
        <hr className="hr" />

        <Section variants={variants} initial="inactive" whileInView="active">
          <Div className="container" height="100%" widthmd={width}>
            <Div
              className="row align-items-center justify-content-center text-center"
              height="100vh"
            >
              <Div className="col-10 mb-0">
                <h1 className="mb-3">
                  <Color value={blue}>Seus dados,</Color>{" "}
                  <Color value={white}>suas regras</Color>
                </h1>
                <h5 className="mb-0 text-white2">
                  O ECrypto fornece um serviço de troca de e-mail criptografado
                  baseado em blockchain fácil de usar para enviar criptomoedas
                  baseadas em seus princípios de dados, suas regras.
                </h5>
              </Div>
            </Div>
          </Div>
        </Section>

        <hr className="hr" />
        <hr className="hr" />

        <Section variants={variants} initial="inactive" whileInView="active">
          <Div
            className="container text-center"
            widthmd={width}
            pt="25vh"
            pb="25vh"
          >
            <Div className="row mt-auto g-2 justify-content-center align-items-center">
              <h1 className="text-blue mb-3 mb-md-3">
                Motivos de <Color value={white}>por que</Color> usar ECrypto
              </h1>
              <Div
                style={{
                  background: "linear-gradient(#140d12 0 0) padding-box",
                }}
                className="col-12 col-md-3 mx-2 text-center border rounded p-2"
              >
                <p>
                  <Color value={blue}>Segurança</Color>
                </p>
                <p>
                  Nosso sistema tem a base blockchain que funciona como um banco
                  de dados por meio do qual são feitas transações seguras,
                  rastreáveis e descentralizadas.
                </p>
              </Div>

              <Div
                style={{
                  background: "linear-gradient(#140d12 0 0) padding-box",
                }}
                className="col-12 col-md-3 mx-2 text-center border rounded p-2"
              >
                <p>
                  <Color value={blue}>Descentralizado</Color>
                </p>
                <p>
                  Nosso sistema é baseado em blockchain que funciona como um
                  banco de dados através do qual ocorrem transações seguras,
                  rastreáveis e descentralizadas.
                </p>
              </Div>

              <Div
                style={{
                  background: "linear-gradient(#140d12 0 0) padding-box",
                }}
                className="col-12 col-md-3 mx-2 text-center border rounded p-2"
              >
                <p>
                  <Color value={blue}>Prevenção</Color>
                </p>
                <p>
                  As informações são criptografadas. A criptografia é a base das
                  criptomoedas. Ela atua como uma camada de segurança online e
                  dificulta qualquer tipo de fraude.
                </p>
              </Div>
            </Div>
          </Div>
        </Section>

        <hr className="hr" />
        <hr className="hr" />

        <Section variants={variants} initial="inactive" whileInView="active">
          <Div className="container" height="100%" widthmd={width}>
            <Div
              className="row align-items-center justify-content-center text-center"
              height="100vh"
            >
              <Div className="col-12">
                <h2 className="mb-0 text-blue">
                  <Color value={white}>ECrypto</Color> é foco em privacidade
                </h2>
                <h2 className="mb-3 text-blue">Escolha uma internet melhor</h2>
                <h5 className="mb-3 text-white2">
                  Logue-se agora com sua carteira
                </h5>

                <Btn
                  bg="#EC5DB5"
                  color="#222121"
                  className="btn btn-light px-4 py-2"
                  fs="20px"
                  onClick={() => logar("/mail")}
                >
                  Logar com MetaMask
                  <GiFox />
                </Btn>
              </Div>
            </Div>
          </Div>
        </Section>
      </Layout>
    </>
  );
}
