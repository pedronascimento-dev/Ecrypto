import { useState, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export function useEthereum() {
  const router = useRouter();

  const [ethereum, setEthereum] = useState(undefined);
  const [account, setAccount] = useState(undefined);

  const logar = (page) => {
    if (typeof ethereum === "undefined") {
      return Swal.fire({
        title: "Erro!",
        text: "Você precisa instalar a MetaMask para poder fazer login.",
        background: "#222121",
        color: "#fafafa",
        confirmButtonText:
          '<a class="text-decoration-none text-white" href="https://metamask.io/download/">Instalar</a> ',
      });
    }

    ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
      setAccount(accounts[0]);
      if (page) router.push(page);
    });
  };

  const enviar = (to, subject, body, value, attachments) => {
    if (typeof ethereum === "undefined" || typeof account === "undefined") {
      return Swal.fire({
        title: "Erro!",
        text: "Você precisa estar logado para poder enviar um e-mail.",
        background: "#222121",
        color: "#fafafa",
      });
    }

    const emailObj = {
      type: "mail",
      subject: subject || "Sem assunto",
      body: body || "Sem corpo",
      attachments,
    };

    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            to,
            from: account,
            value: !value
              ? "0x00"
              : Web3.utils.toHex(Web3.utils.toWei(value, "ether")),
            gas: "0xb3b0",
            data: Web3.utils.toHex(JSON.stringify(emailObj)).split("0x")[1],
          },
        ],
      })
      .then((tx) => {
        Swal.fire({
          icon: "success",
          title: "Sucesso!",
          text: "E-mail enviado com sucesso. Deseja visualizar na etherscan?",
          background: "#222121",
          color: "#fafafa",
          showCancelButton: true,
          cancelButtonText: "Não",
          cancelButtonColor: "#d33",
          confirmButtonText: `<a class="text-decoration-none text-white" href="#" onclick='window.open("https://goerli.etherscan.io/tx/${tx}");return false;'>Sim</a>`,
        });
        router.replace("/mail");
      });
  };

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      setEthereum(window.ethereum);
    }
  }, []);

  return { ethereum, account, logar, enviar };
}
