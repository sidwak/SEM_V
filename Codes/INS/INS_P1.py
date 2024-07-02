class Encrypter:
    alp = "abcdefghijklmnopqrstuvwxyz"
    def AdditiveCipher(self, ssr, nkey):
        cipher = ""
        for a in ssr.lower():
            if (a == " "):
                cipher += " "
            else:
                indx = (self.alp.index(a) + nkey) % 26
                cipher += self.alp[indx]
        return cipher

    def VignereCipher(self, ssr, nkey):
        ckey = nkey
        indx = 0
        while len(ckey) < len(ssr):
            ckey += nkey[(indx % len(nkey))]
            indx += 1
        cipher = ""
        itr = 0
        for a in ssr.lower():
            if (a == " "):
                cipher += " "
            else:
                indx = (self.alp.index(a) + self.alp.index(ckey[itr])) % 26
                cipher += self.alp[indx]
                itr += 1
        return cipher

    def AutokeyCipher(self, ssr, nkey):
        ckey = nkey + ssr
        ckey = ckey[0:len(ssr)]
        #Aprint(ckey)
        cipher = ""
        itr = 0
        for a in ssr.lower():
            if (a == " "):
                cipher += " "
            else:
                #print(itr, ckey[itr])
                indx = (self.alp.index(a) + self.alp.index(ckey[itr])) % 26
                cipher += self.alp[indx]
                itr += 1
        return cipher

class Decrypter():
    alp = "abcdefghijklmnopqrstuvwxyz"
    def AdditiveCipher(self, ssr, nkey):
        decipher = ""
        for a in ssr.lower():
            if (a == " "):
                decipher += " "
            else:
                indx = (self.alp.index(a) - nkey) % 26
                decipher += self.alp[indx]
        return decipher

    def VignereCipher(self, ssr, nkey):
        ckey = nkey
        indx = 0
        while len(ckey) < len(ssr):
            ckey += nkey[(indx % len(nkey))]
            indx += 1
        decipher = ""
        itr = 0
        for a in ssr.lower():
            if (a == " "):
                decipher += " "
            else:
                indx = (self.alp.index(a) - self.alp.index(ckey[itr])) % 26
                decipher += self.alp[indx]
                itr += 1
        return decipher
    
    def AutokeyCipher(self, ssr, primer):
        nkey = primer
        decipher = ""
        itr = 0
        for a in ssr.lower():
            if (a == " "):
                decipher += " "
            else:
                indx = (self.alp.index(a) - self.alp.index(primer[itr])) % 26
                decipher += self.alp[indx]
                itr += 1
                primer += self.alp[indx]
        return decipher


Ency = Encrypter()
Decy = Decrypter()

#gg = Ency.VignereCipher("attackistoday","computer")
#print("attackistoday")
#print(gg)

additiveCipherText = Ency.AdditiveCipher("biden on alert", 11)
print("Additive Cipher: ",additiveCipherText)

additiveDecipherText = Decy.AdditiveCipher(additiveCipherText, 9)
print("Additive Decipher: ",additiveDecipherText)

vignereCipherText = Ency.VignereCipher("biden on alert", "apple")
print("Vignere Cipher Text: ",vignereCipherText)
vignereDecipherText = Decy.VignereCipher(vignereCipherText, "apple")
print("Vignere Decipher Text: ", vignereDecipherText)

autokeyCipherText = Ency.AutokeyCipher("bidenonalert","apple")
print("Autokey Cipher Text: ",autokeyCipherText)
print("Autokey Primer Keyword: ","apple")
autokeyDecipherText = Decy.AutokeyCipher(autokeyCipherText, "apple")
print("Autokey Decipher Text: ",autokeyDecipherText)