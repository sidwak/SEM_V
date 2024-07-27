import hashlib
str="HashingTechniques"
result=hashlib.md5(str.encode())
print("The hexadecimal equivalent of md5 is:")
print(result.hexdigest())
print("\n")

result1=hashlib.sha384(str.encode())
print("The hexadecimal equivalent of sha384 is:")
print(result1.hexdigest())
print("\n")

result2=hashlib.sha224(str.encode())
print("The hexadecimal equivalent of sha384 is:")
print(result2.hexdigest())
print("\n")

result3=hashlib.sha512(str.encode())
print("The hexadecimal equivalent of sha384 is:")
print(result3.hexdigest())
print("\n")

result4=hashlib.sha1(str.encode())
print("The hexadecimal equivalent of sha384 is:")
print(result4.hexdigest())