# Brute Force
def isAnagram(s, t):
    return sorted(s) == sorted(t)

s = "anagral"
t = "nagaram"

# Optimal
def isAnagramOptimal(s, t):
    if len(s) != len(t):
        return False

    countS, countT = {}, {}

    for i in range(len(s)):
        countS[s[i]] = 1 + countS.get(s[i], 0)
        countT[t[i]] = 1 + countT.get(t[i], 0)

    return countS == countT


print(isAnagram(s, t))
print(isAnagramOptimal(s, t))
