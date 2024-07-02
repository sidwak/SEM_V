def vernamEncrypt(nptext, nkey):
    print("\nEncryption")
    ciphertext = ""
    for i in range(len(nptext)):
        ciphertext += chr(ord(nptext[i]) ^ ord(nkey[i % len(nkey)]))
    print("Ciphertext: ",ciphertext)
    return ciphertext

def vernamDecrypt(ndtext, nkey):
    print("\nDecryption")
    deciphertext = ""
    for i in range(len(ndtext)):
        deciphertext += chr(ord(ndtext[i]) ^ ord(nkey[i % len(nkey)]))
    print("Deciphertext: ",deciphertext)
    return deciphertext

plaintext = input("Enter the plaintext: ")
nkey = input("Enter the key: ")
ciphertext = vernamEncrypt(plaintext, nkey)
deciphertext = vernamDecrypt(ciphertext, nkey)