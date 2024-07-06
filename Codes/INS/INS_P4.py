class Playfair:
    def initDefault(self):
        ptx = "move troops to west"
        keymat = [["m", "o", "n", "a", "r"],
                  ["c", "h", "y", "b", "d"],
                  ["e", "f", "g", "i", "k"],
                  ["l", "p", "q", "s", "t"],
                  ["u", "v", "w", "x", "z"]]
        return ptx, keymat
    
    def mapChcVector(self, keymat):
        chcDict = dict()
        for i in range(5):
            for j in range(5):
                pos = (i, j)
                chcDict[keymat[i][j]] = pos
        """ for each, val in chcDict.items():
            print("pos",each,val[0],val[1]) """
        return chcDict
    
    def Encrypt(self, ptx: str, keymat):
        ptx = ptx.replace("j", "i")
        ptx = ptx.replace(" ", "")
        if (len(ptx)%2 != 0):
            ptx += "z"
        pairs = [ptx[i:i+2] for i in range(0, len(ptx), 2)]
        #for each in pairs:
        #    print(each)
        chcMap = self.mapChcVector(keymat)
        ctx = ""
        for pair in pairs:
            r1, c1 = chcMap[pair[0]]
            r2, c2 = chcMap[pair[1]]
            if (r1 == r2):
                c1 = (c1 + 1) % 5
                c2 = (c2 + 1) % 5
            elif (c1 == c2):
                r1 = (r1 + 1) % 5
                r2 = (r2 + 1) % 5
            else:
                c1, c2 = c2, c1
            ctx += (keymat[r1][c1] + keymat[r2][c2])    
        return ctx

    def Decrypt(self, ctx, keymat):
        pairs = [ctx[i:i+2] for i in range(0, len(ctx), 2)]
        chcMap = self.mapChcVector(keymat)
        dctx = ""
        for pair in pairs:
            r1, c1 = chcMap[pair[0]]
            r2, c2 = chcMap[pair[1]]
            if (r1 == r2):
                c1 = (c1 - 1) % 5
                c2 = (c2 - 1) % 5
            elif (c1 == c2):
                r1 = (r1 - 1) % 5
                r2 = (r2 - 1) % 5
            else:
                c1, c2 = c2, c1
            dctx += (keymat[r1][c1] + keymat[r2][c2])    
        return dctx

    def printKeymat(self, keymat):
        for i in range(5):
            for j in range(5):
                print(keymat[i][j],"|",end="")
            print("\n")

playfair = Playfair()
plaintext = ""
#keymat = [["*" for j in range(5)] for i in range(5)]
keymat = list()
ciphertext, decipheredtext = "", ""
if (input("Custom input? y/n: ").lower() == "y"):
#if (False):
    plaintext = input("Enter the plaintext: ").lower()
    print("Input the 5x5 key matrix:")
    keymat = [["*" for j in range(5)] for i in range(5)]
    for i in range(5):
        for j in range(5):
            eleVal = input(f"Enter {i},{j} mat ele: ").lower()
            keymat[i][j] = eleVal
else:
    plaintext, keymat = playfair.initDefault()
print("\nYour key matrix is:")
playfair.printKeymat(keymat)
print("Plaintext:",plaintext)
ciphertext = playfair.Encrypt(plaintext, keymat)
print("Ciphertext:",ciphertext)
decipheredtext = playfair.Decrypt(ciphertext, keymat)
print("Decipheredtext:",decipheredtext)
print("Note: spaces are removed and 'j' is replaced with 'i'\n")