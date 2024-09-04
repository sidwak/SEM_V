class Encryption:
    key = list()
    plaintext = ""
    blocks = list()
    class Block:
        bData = 0
        def __init__(self) -> None:
            pass
    
    class Round:
        def __init__(self) -> None:
            pass
    
    def __init__(self, nKey, nPlaintext) -> None:
        self.plaintext = nPlaintext
        self.key = self.parseKey(nKey)

    def parseKey(self, nKey) -> str:
        pass

    def encrypt(self):
        pass

    def startAlgorithm(sefl):
        pass

    def createBlock(self):
        pass

plaintext, key = "", ""
if (input("Want to enter custom input ('y'/'n'): ").lower() == 'y'):
    plaintext = input("Enter the plaintext: ")
    print("Please enter the 64 bits for the key without space seperated")
    key = input("Enter they key: ")
encrypter = Encryption()
