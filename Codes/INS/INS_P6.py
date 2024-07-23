import random

class RSA:
    public_key = "not set"
    private_key = "not set"

    def is_prime(self, num):
        if num == 2:
            return True
        if num < 2 or num % 2 == 0:
            return False
        for i in range(3, int(num**0.5) + 2, 2):
            if num % i == 0:
                return False
        return True

    def gcd(self, a, b):
        while b != 0:
            a, b = b, a % b
        return a

    def modinv(self, a, m):
        m0, x0, x1 = m, 0, 1
        if m == 1:
            return 0
        while a > 1:
            q = a // m
            m, a = a % m, m
            x0, x1 = x1 - q * x0, x0
        if x1 < 0:
            x1 += m0
        return x1

    def keypair_generate(self, p, q):
        if not (self.is_prime(p) and self.is_prime(q)):
            raise ValueError("Both numbers must be prime.")
        elif p == q:
            raise ValueError("p and q should not be equal.")

        # Calculate N = pq
        n = p * q

        # Calculate totient of N
        phi = (p - 1) * (q - 1)

        # Choose e such that 1 < e < phi and gcd(e, phi) = 1
        e = random.randrange(1, phi)
        g = self.gcd(e, phi)
        while g != 1:
            e = random.randrange(1, phi)
            g = self.gcd(e, phi)

        # Calculate d as the modular inverse of e mod phi
        d = self.modinv(e, phi)
    
        # Return public key (e, n) and private key (d, n)
        #return (e, n), (d, n)
        self.public_key = (e, n)
        self.private_key = (d, n)
    
    def doEncrypt(self, ptxt):
        e, n = self.public_key
        cipher = [pow(ord(char), e, n) for char in ptxt]
        return cipher
    
    def doDecrypt(self, ctxt):
        d, n = self.private_key
        #print(d, n)
        #print("without",[pow(char, d, n) for char in ctxt])
        num = [pow(char, d, n) for char in ctxt]
        possibleCobi = [ ]
        shiftlist = [chr(i) for i in range(97,123)]

        for i in range(0, 33):
            threlist = [i for i in range(0, 33)]
            threlist = threlist[i: ] + threlist[:i]
            trial = ""
            noerror = True
            for each in num:
                try:
                    indx = threlist.index(each)
                    trial += shiftlist[indx]
                except Exception as err:
                    trial += "_"
                    noerror = False
            #print(threlist)
            #print(shiftlist)
            print("Combination ",i," :",trial)
            if (noerror == True):
                possibleCobi.append(trial)

        #plain_text = ''.join([chr(pow(char, d, n)) for char in ctxt])
        #plain_text = ''.join([chr(each) for each in num])
        return possibleCobi
    
    def startAlgorithm(self):
        if (input("Want custom input 'y'/'n' ?:").lower() == "y"):
            p = int(input("Enter the value of p : "))
            q = int(input("Enter the value of q : "))
            self.keypair_generate(p, q)
            ptxt = input("Enter the message: ")
            ctxt = self.doEncrypt(ptxt)
            print("The Ciphertext is:",ctxt)
            dtxt = self.doDecrypt(ctxt)
            print("The Deciphertext is:",dtxt)
        else:
            p, q, ptxt = 3,11,"attackistoday"
            self.keypair_generate(p, q)
            ctxt = self.doEncrypt(ptxt)
            print("The Ciphertext is:",ctxt)
            dtxt = self.doDecrypt(ctxt)
            print("The Deciphertext is (Posssible Combinations):",dtxt)

rsa = RSA()
rsa.startAlgorithm();