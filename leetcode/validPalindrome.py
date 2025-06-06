# Brute Force
# Time -> O(n)
# Space -> O(n)
def validPalindrome(s): 

    newStr = ""
    
    for c in s:
        if c.isalnum():
            newStr += c.lower()

    return newStr == newStr[::-1]

# Optimal
# Time -> O(n)
# Space -> O(1)

def validPalindromeOptimal(s):
    l, r = 0, len(s) - 1

    while l < r:
        while l < r and not s[l].isalnum():
            l += 1

        while r > r and not s[r].isalnum():
            r -= 1

        if s[l].lower() != s[r].lower():
            return False
        
        l, r = l + 1, r - 1

    return True


s = "Was it a car or a cat I saw?"

print(validPalindrome(s))

