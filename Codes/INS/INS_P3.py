def buildRailfence(ptext, nkey):
    fence = list()
    for i in range(nkey):
        fence.append([" " for i in range(len(ptext))])
    return fence

def printRailfence(fence):
    for i in range(len(fence)):
        for j in range(len(fence[i])):
            print(fence[i][j],"|",end="")
        print("\n")

def railfenceEncrypt(ptext, nkey, fence):
    rrow = 0
    rev = 1
    i = 0
    while (i < len(ptext)):
        if (rrow < nkey and rrow >= 0):
            fence[rrow][i] = ptext[i]
            rrow += (1 * rev)
            i += 1
        else:
            if (rrow == -1):
                rev = 1
                rrow += 2
            else:
                rev = -1
                rrow -= 2
    ciphertext = ""
    for i in range(len(fence)):
        for j in range(len(fence[i])):
            if (fence[i][j] != " "):
                ciphertext += fence[i][j]
    return fence, ciphertext
        
def railfenceDecrypt(ctext, fence, nkey):
    rrow = 0
    rev = 1
    i = 0
    newf = buildRailfence(ctext, nkey)
    while (i < len(ctext)):
        if (rrow < nkey and rrow >= 0):
            newf[rrow][i] = "*"
            rrow += (1 * rev)
            i += 1
        else:
            if (rrow == -1):
                rev = 1
                rrow += 2
            else:
                rev = -1
                rrow -= 2
    jth = 0
    printRailfence(newf)
    deciphertext = ""
    for i in range(len(newf)):
        for j in range(len(newf[i])):
            if (newf[i][j] == "*"):
                newf[i][j] = ctext[jth]
                jth += 1
    
    for i in range(len(newf[0])):
        for j in range(len(newf)):
            if (newf[j][i] != " "):
                deciphertext += newf[j][i]
    printRailfence(newf)
    return deciphertext  

""" fence = buildRailfence("move_troops_to_west", 5)
#printRailfence(fence)
fence, ciphertext = railfenceEncrypt("move_troops_to_west", 5, fence)
print("Ciphered Text: ",ciphertext)
printRailfence(fence)
deciphertext = railfenceDecrypt(ciphertext, fence, 5)
print("Deciphered Text: ",deciphertext) """

fence = buildRailfence("cold_weather_is_coming", 9)
#printRailfence(fence)
fence, ciphertext = railfenceEncrypt("cold_weather_is_coming", 9, fence)
print("Ciphered Text: ",ciphertext)
printRailfence(fence)
deciphertext = railfenceDecrypt(ciphertext, fence, 9)
print("Deciphered Text: ",deciphertext)