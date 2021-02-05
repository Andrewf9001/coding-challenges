# def fizzbuzz(number_limit): 
#   int_list = list(range(1,number_limit)) 
#   for num in range(1, number_limit): 
#     if num /3 in int_list and num /5 in int_list: 
#       print('fizzbuzz') 
#       continue 
#     elif num /3 in int_list:
#       print('fizz') 
#       continue 
#     elif num /5 in int_list: 
#       print('buzz') 
#       continue 
#     else: 
#       print(num)

# fizzbuzz(946)

numlist = [1, 2, 3, 4, 5, 7, 8, 5, 7, 2, 9, 8, 3, 4, 8, 6, 2, 4, 8, 6, 6, 5, 9, 2]

for i in numlist:
    x = numlist.count(i)
    while x > 1:
        numlist.remove(i)
        x -= 1 
        
numlist.sort()
print(numlist)
