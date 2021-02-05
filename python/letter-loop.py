# string = "abcd"
# finalString = ""
# count = 1
# for letter in string:
#     secondCount = 1
#     for _ in range(count):
#         if (secondCount == 1):
#             finalString = finalString + letter.upper()
#         else:
#             finalString = finalString + letter.lower()
#         secondCount = secondCount + 1
#     count = count + 1
#     finalString = finalString + "-"
# finalString = finalString[0:-1]
# print(finalString)

def string_accumulator(string):
  counter = 1
  char_list = []
  for char in string:
    char_list.append((char * counter).title())
    counter += 1
  return "-".join(char_list)

print(string_accumulator("asdf"))