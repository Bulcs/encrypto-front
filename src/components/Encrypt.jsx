import React from "react";

const Encrypt = ({ method }) => {
  const [textToEncrypt, setTextToEncrypt] = React.useState([]);
  const [passEncrypt, setPassEncrypt] = React.useState("");
  const [textToDecrypt, setTextToDecrypt] = React.useState("");
  const [passDecrypt, setPassDecrypt] = React.useState("");

  const [encryptedText, setEncryptedText] = React.useState("");
  const [decryptedText, setDecryptedText] = React.useState([]);

  const [selectedOption, setSelectedOption] = React.useState("12");

  const LINK_FETCH =
    "https://encrypto-back-bulcs-bulcs-projects.vercel.app/api";

  const handleEncrypt = (e) => {
    e.preventDefault();

    fetch(`${LINK_FETCH}/encrypt`, {
      method: "POST",
      body: JSON.stringify({
        text: textToEncrypt.join(","),
        pass: passEncrypt,
      }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      res.json().then((data) => {
        setEncryptedText(data.hash);
      });
    });
  };

  const handleDecrypt = (e) => {
    e.preventDefault();

    fetch(`${LINK_FETCH}/decrypt`, {
      method: "POST",
      body: JSON.stringify({ text: textToDecrypt, pass: passDecrypt }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      res.json().then((data) => {
        console.log(data.decryptedData.split(",").join(" "));
        setDecryptedText(data.decryptedData.split(",").join(" "));
      });
    });
  };

  const handleOption = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div className="encrypt-container">
        {method == "encrypt" ? (
          <>
            <h1>Encrypt</h1>
            <select className="select-form" onChange={handleOption}>
              <option value="12">12 words</option>
              <option value="24">24 words</option>
            </select>
            <form className="form-encrypt" onSubmit={handleEncrypt}>
              {Array.from({ length: parseInt(selectedOption) }).map(
                (_, index) => (
                  <input
                    required
                    key={index}
                    type="text"
                    placeholder={`Word ${index + 1}`}
                    disabled={
                      index == 0 || textToEncrypt[index - 1] != null
                        ? false
                        : true
                    }
                    onChange={(e) => {
                      setTextToEncrypt((prev) => {
                        const newArray = [...prev];
                        newArray[index] = e.target.value;
                        return newArray;
                      });
                    }}
                  />
                )
              )}
              <input
                required
                className="form-pass"
                type="text"
                onChange={(e) => {
                  setPassEncrypt(e.target.value);
                }}
                placeholder="Enter PASS"
              />
              <button type="submit">Encrypt</button>
            </form>
            <p className="encrypted-text">{encryptedText}</p>
          </>
        ) : (
          <>
            <h1>Decrypt</h1>
            <form onSubmit={handleDecrypt} className="form-decrypt">
              <input
                required
                type="text"
                onChange={(e) => {
                  setTextToDecrypt(e.target.value);
                }}
                placeholder="Enter text to decrypt"
              />
              <input
                required
                type="text"
                onChange={(e) => {
                  setPassDecrypt(e.target.value);
                }}
                placeholder="Enter the PASS"
              />
              <button type="submit">Decrypt</button>
              {decryptedText.length != 0 && (
                <>
                  <h3>Decrypted Text:</h3>
                  <div className="decrypted-words">
                    {decryptedText.split(" ").map((word, index) => (
                      <div key={index + 1} className="decrypted-words-each">
                        <span>Word {index + 1}:</span> <span>{word}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default Encrypt;
