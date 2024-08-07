import random
whichAttack = input("Enter which attack (brute/mim/dh): ").lower()
if whichAttack == "brute":
    # BRUTEFORCE ATTACK
    prime = int(input("Enter primitive root you got from unsecured channel: "))
    mod = int(input("Enter prime number which you got from unsecured channel: "))
    public_alice = int(input("Enter public key of alice you eavesdropped from insecure channel: "))
    public_bob = int(input("Enter public key of bob you eavesdropped from insecure channel: "))

    possible_private_keys = []
    print("This below keys could be the private key of alice: ")
    for i in range(100):
        guess = prime ** i % mod
        if guess == public_alice:
            possible_private_keys.append(i)
    print(possible_private_keys)

    possible_private_keys_bob = []
    print("This below keys could be the private key of Bob : ")
    for i in range(100):
        guess = prime ** i % mod
        if guess == public_bob:
            possible_private_keys_bob.append(i)
    print(possible_private_keys_bob)

    alice_guess = 0
    bob_guess = 0
    for i in possible_private_keys:
        alice_guess = (public_bob ** i) % mod
    for i in possible_private_keys_bob:
        bob_guess = (public_alice ** i) % mod

    if alice_guess == bob_guess:
        print("Attack successful")
        print("THIS COULD BE YOUR SHARED SECRET KEY WITH ALICE: ", alice_guess)
        print("THIS COULD BE YOUR SHARED SECRET KEY WITH BOB: ", bob_guess)
    print("Your shared secret key is: ", alice_guess)
elif whichAttack == "mim":
    # Diffie-Hellman Key Exchange
    # Shared prime number and primitive
    prime = 23
    primitive = 5

    # Alice's private key
    alice_private_key = 20

    # Bob's private key
    bob_private_key = 10

    # Calculate public keys
    alice_public_key = (primitive ** alice_private_key) % prime
    bob_public_key = (primitive ** bob_private_key) % prime

    # Calculate shared secret
    alice_shared_secret = (bob_public_key ** alice_private_key) % prime
    bob_shared_secret = (alice_public_key ** bob_private_key) % prime

    print("Alice's Public Key:", alice_public_key)
    print("Bob's Public Key:", bob_public_key)
    print("Shared Secret (Alice):", alice_shared_secret)
    print("Shared Secret (Bob):", bob_shared_secret)
else:
    p = int(input('Enter a prime number (p): '))
    g = int(input('Enter a base number (g): '))
    # Private numbers
    # a = random.randint(1, p)
    # b = random.randint(1, p)
    # c = random.randint(1, p)
    # d = random.randint(1, p)
    a = 3
    b = 2
    c = 1
    d = 4
    # Public values
    ga = (g ** a) % p
    gb = (g ** b) % p

    gc = (g ** c) % p
    gd = (g ** d) % p

    # Computing shared secret keys
    s1 = (gd ** a) % p
    s2 = (gc ** b) % p

    print(f"Alice's private number (a): {a}")
    print(f"Bob's private number (b): {b}")
    print(f"Malory's private number for Alice (c): {c}")
    print(f"Malory's private number for Bob (d): {d}")

    print(f"Alice's public value (ga): {ga}")
    print(f"Bob's public value (gb): {gb}")
    print(f"Malory's manipulated value for Alice (gc): {gc}")
    print(f"Malory's manipulated value for Bob (gd): {gd}")

    print(f"Alice's computed shared secret key (S1): {s1}")
    print(f"Bob's computed shared secret key (S2): {s2}")
