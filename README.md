# Website

encrypto-project.netlify.app

## How Does Encrypto Work?

Encrypto is an Open Source Web application that allows users to encrypt the 12 or 24 keywords used in cryptocurrency wallets.  
Basically, it's a new way to hide your keys safely and securely.

We **do not store your keys**, your password, or your encrypted data.  
Everything is processed on the **client side**, ensuring your information remains completely private and secure.

---

## Security & Encryption

The encryption algorithm used is **AES (Advanced Encryption Standard)** with a **256-bit key size**, widely recognized as one of the most secure encryption methods available.

Encryption and decryption are performed using the **CryptoJS** library, a well-known JavaScript library for cryptographic operations.

When you enter your keywords and password, the application uses AES to encrypt your keywords with the provided password.  
The encrypted output is displayed for you to copy and store securely.

---

## How to Decrypt Your Keys

To decrypt your keywords:

1. Enter the encrypted data  
2. Provide the **same password** you used for encryption

The application will use AES to decrypt and restore your original keywords.

⚠️ Always use a **strong and unique password**.  
If you lose the encrypted data or the password, you may **permanently lose access** to your recovery keywords.

---

## Responsibility & Safety

By using this application, you acknowledge that **you are responsible** for the security of your keywords and password.

Store them safely and correctly.  
Take all necessary precautions to protect your encrypted data and recovery passwords.
