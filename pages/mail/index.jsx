import { useEthereum } from "../../hooks/useEthereum";
import { Btn, Color, Div, Input } from "../../styles/Elements";
import { HiMenuAlt1, HiPencil } from "react-icons/hi";
import { AiOutlineLogout, AiOutlineSearch } from "react-icons/ai";

import Link from "next/link";
import Layout from "../../components/Layout";
import { useEffect, useLayoutEffect, useState } from "react";
import { strSmartTrim } from "../../utils/string";

function Mail() {
  const { ethereum, account, logar } = useEthereum();
  const [emails, setEmails] = useState([]);

  const [elFilter, setElFilter] = useState();
  const [filterText, setFilterText] = useState("");
  const filteredItems = emails.filter((item) =>
    item.subject.toLocaleLowerCase().includes(filterText)
  );

  const itemsToDisplay = filterText ? filteredItems : emails;

  useEffect(() => {
    if (typeof account !== "undefined") {
      const provider = new ethers.providers.EtherscanProvider(
        "goerli",
        "X56U4HDNT7SI7GS39BI2Q8RXDM6BR3JG2C"
      );
      provider
        .getHistory(account)
        .then((txs) => {
          const parsedEmails = [];

          for (const tx of txs) {
            try {
              const dataObj = JSON.parse(Web3.utils.toUtf8(tx.data));

              if (
                dataObj.type == "mail" &&
                tx.to.toLowerCase() == account.toLowerCase()
              ) {
                dataObj.tx = tx.hash;
                dataObj.date = new Date(tx.timestamp * 1000);
                dataObj.subject = window.CryptoJS.AES.decrypt(
                  dataObj.subject,
                  account.toLowerCase()
                ).toString(window.CryptoJS.enc.Utf8);
                dataObj.body = window.CryptoJS.AES.decrypt(
                  dataObj.body,
                  account.toLowerCase()
                ).toString(window.CryptoJS.enc.Utf8);
                dataObj.attachments = dataObj.attachments.map((attachment) =>
                  window.CryptoJS.AES.decrypt(attachment, account.toLowerCase())
                );
                parsedEmails.push(dataObj);
              }
            } catch {}
          }
          setEmails(parsedEmails);
        })
        .catch(console.error);
    }
    console.log(filteredItems);
  }, [account, filterText]);

  useLayoutEffect(() => {
    if (typeof ethereum !== "undefined" && typeof account === "undefined") {
      logar("/mail");
    }
  }, [ethereum, account]);

  if (typeof ethereum === "undefined") {
    return (
      <Layout title={"Carregando... "}>
        <p style={{ textAlign: "center" }}>TODO: Loader</p>
      </Layout>
    );
  }

  return (
    <>
      <Bar qtyEmails={emails.length} />
      <Layout title="Caixa de Entrada">
        <Div
          className="container my-2 px-3 px-md-0"
          style={{ paddingTop: "50px" }}
          height="100%"
          widthmd="30rem"
        >
          {emails && (
            <Div className="row mb-1">
              <div className="input-group px-0">
                <Btn className="btn btn-outline-light" type="button">
                  <AiOutlineSearch />
                </Btn>
                <Input
                  value={filterText}
                  onChange={(e) =>
                    setFilterText(e.target.value.toLocaleLowerCase())
                  }
                  type="text"
                  className="form-control"
                  placeholder="Pesquisar"
                />
              </div>
            </Div>
          )}

          {filteredItems ? (
            <>
              {filteredItems
                .sort((a, b) => b.date - a.date)
                .map((email, index) => (
                  <Email
                    key={index}
                    id={email.tx}
                    subject={email.subject}
                    date={email.date.toLocaleString()}
                  />
                ))}
            </>
          ) : (
            <>
              <Div className="row align-items-center text-center" height="80vh">
                <Div className="col-12">
                  <h1>Empty</h1>
                </Div>
              </Div>
            </>
          )}
        </Div>
      </Layout>
    </>
  );
}

export default Mail;

export function Bar({ qtyEmails, naoLidasCount, endereco }) {
  return (
    <>
      <nav className="navbar blur-navbar fixed-top">
        <Div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="container"
          widthmd="32rem"
          height="40px"
        >
          <Div className="d-flex">
            <Link href="/">
              <Btn className="btn btn-outline-light mb-0 click py-1 px-2">
                <AiOutlineLogout />
              </Btn>
            </Link>
          </Div>

          <Div className="d-flex">
            <h5 className="mb-0 mx-1">Entrada ({qtyEmails})</h5>
            {naoLidasCount && (
              <h7 className="mb-0 text-pink">{naoLidasCount}</h7>
            )}
          </Div>

          <Div className="d-flex">
            <Link href="/mail/new">
              <Btn
                fs="18px"
                className="mb-0 click btn btn-outline-light py-1 px-2"
              >
                <HiPencil />
              </Btn>
            </Link>
          </Div>
        </Div>
      </nav>
    </>
  );
}

export function SearchBar({ search }) {
  return (
    <>
      <Div className="row mb-1">
        <div className="input-group px-0">
          <Btn className="btn btn-outline-light" type="button">
            <AiOutlineSearch />
          </Btn>
          <Input
            onChange={(e) => search(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Pesquisar"
          />
        </div>
      </Div>
    </>
  );
}

export function Email({ id, subject, date }) {
  const press = { backgroundColor: "#131313", border: "1px solid #5d5fec" };
  return (
    <>
      <Link href={"/mail/" + id}>
        <Div
          onContextMenu={(e) => e.preventDefault()}
          whileHover={press}
          whileTap={press}
          className="row align-items-center rounded click mb-1 cancel-menu px-2 py-2"
          height="100%"
          border="1px solid #fafafa30"
        >
          <Div className="col-6 col-md-8 px-md-0">
            <h5 className="mb-1 text-pink">{subject}</h5>
            <h6 className="mb-0 text-white2">
              <Color>De: </Color> {strSmartTrim(id, 10)}
            </h6>
          </Div>

          <Div className="col-6 col-md-4 px-1 mb-3 text-end">
            <p className="mb-1">{date}</p>
          </Div>
        </Div>
      </Link>
    </>
  );
}
