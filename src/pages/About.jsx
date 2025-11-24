const About = () => {
  return (
    <div className="container-about">
      <h1>About Encrypto</h1>

      <div className="about-content">
        <section className="about-section">
          <h3>How Does Encrypto Work?</h3>
          <p>
            Encrypto is an Open Source Web application that allows users to
            encrypt the 12 or 24 keywords used in cryptocurrency wallets.
            Basically, it's a new way to hide your keys safely and securely.
          </p>
          <p>
            We do not store your keys, your password, or your encrypted keys.
            Everything is processed on the client side, ensuring your data
            remains completely private and secure.
          </p>
        </section>

        <section className="about-section">
          <h3>Security & Encryption</h3>
          <p>
            The encryption algorithm used is AES (Advanced Encryption Standard)
            with a 256-bit key size, which is widely recognized as one of the
            most secure encryption methods available. The encryption and
            decryption processes are performed using the CryptoJS library, a
            well-known JavaScript library for cryptographic operations.
          </p>
          <p>
            When you enter your keywords and password, the application uses the
            AES algorithm to encrypt your keywords with the provided password.
            The resulting encrypted data is then displayed to you, which you can
            copy and store securely.
          </p>
        </section>

        <section className="about-section">
          <h3>How to Decrypt Your Keys</h3>
          <p>
            To decrypt your keywords, you simply need to enter the encrypted
            data and the same password you used for encryption. The application
            will use the AES algorithm to decrypt the data and retrieve your
            original keywords.
          </p>
          <p>
            Remember to always use a strong and unique password for encryption
            to enhance the security of your keywords. Additionally, ensure that
            you store your encrypted data and password in a safe place, as
            losing either may result in the inability to recover your keywords.
          </p>
        </section>

        <section className="about-section">
          <h3>Responsibility & Safety</h3>
          <p>
            By using this application, you acknowledge that you are responsible
            for the security of your keywords and password. Store them safely
            and correctly. Take all necessary precautions to protect your
            encrypted data and recovery passwords.
          </p>
        </section>

        <footer className="about-footer">
          <h2>We Just Want to Be FREE from THEM!</h2>
          <div className="about-emoji">👁️</div>
        </footer>
      </div>
    </div>
  );
};

export default About;
