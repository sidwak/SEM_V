class Columnar:
    alp = "abcdefghijklmnopqrstuvwxyz"
    def initDefault(self):
        return "movetroopstowest","daebc"
    
    def form1dlist(self, count, defa):
        return [defa for i in range(count)]
    
    def form2dlist(self, row, col, defa):
        return [[defa for j in range(col)] for i in range(row)]
    
    def printKeymat(self, keymat):
        for i in range(len(keymat)):
            for j in range(len(keymat[i])):
                print(keymat[i][j],"|",end="")
            print("\n")
    
    def texttoint(self, key):
        toret = self.form1dlist(len(key), 0)
        pos = 0
        num = []
        for i in range(len(key)):
            num.append(key[i])
        num.sort()
        for i in range(len(key)):
            toret[key.index(num[i])] = pos
            pos += 1
        print(toret)
        return toret
    
    def fillmat(self, ptxt, mat, keylen):
        ptxtlen = len(ptxt)
        pos = 0
        for i in range(keylen):
            for j in range(keylen):
                if pos < ptxtlen:
                    mat[i][j] = ptxt[pos]
                    pos += 1
        return mat
    
    def getdecipher(self, ctxt, keylist):
        dkey = []
        for i in range(len(keylist)):
            ele = keylist[i], i
            dkey.append(ele)
        print(dkey)
        dkey = sorted(dkey, key=lambda x: x[0])
        mat = self.form2dlist(((len(ctxt) // len(keylist))), len(keylist), "_")
        pos = 0
        for i in range(len(keylist)):
            for j in range(len(mat)):
                if pos < len(ctxt):
                    mat[j][dkey[i][1]] = ctxt[pos]
                    pos += 1
                else:
                    mat[j][dkey[i][1]] = "_"
            self.printKeymat(mat)
            print("\n")
        dtxt = ""
        for i in range(len(mat)):
            for j in range(len(mat[i])):
                dtxt += mat[i][j]
        return dtxt
    
    def MakeCipher(self, mat, keylist):
        ctxt = ""
        num = self.form1dlist(len(keylist), [])
        for i in range(len(keylist)):
            gg = []
            for j in range(len(mat)):
                gg.append(mat[j][i])
                num[keylist[i]] = gg
                #print(keylist[i], num[keylist[i]], num)
        #print(num)
        for eh in num:
            for jc in eh:
                ctxt += jc
        #print(ctxt)
        return ctxt

    def Encrypt(self, ptxt, key):
        keylist = self.texttoint(key)
        mat = self.form2dlist(((len(ptxt) // len(keylist)) + 1), len(keylist), "_")
        mat = self.fillmat(ptxt, mat, len(key))
        self.printKeymat(mat)
        ctxt = self.MakeCipher(mat, keylist)
        return ctxt
        
    def Decrypt(self, ctxt, key):
        keylist = self.texttoint(key)
        mat = self.form2dlist(((len(ctxt) // len(keylist)) + 1), len(keylist), "_")
        mat = self.fillmat(ctxt, mat, len(key))
        self.printKeymat(mat)  
        dtxt = self.getdecipher(ctxt, keylist)
        return dtxt

columnar = Columnar()
plaintext, ciphertext, deciphertext, key = "", "", "", ""
#if (input("Custom input? y/n: ").lower() == "y"):
if (False):
    plaintext = input("Enter the plaintext: ").lower()
    key = input("Enter the key (unique characters): ").lower()
else:
    plaintext, key = columnar.initDefault()

columnar.texttoint("hack")
ciphertext = columnar.Encrypt(plaintext, key)
print(plaintext)
print(ciphertext)
deciphertext = columnar.Decrypt(ciphertext, key)
print(deciphertext)