// # Brute Force

function isAnagram(s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("")
}

// # Optimal

function isAnagramOptimal(s, t) {
    if (s.length !== t.length) {
        return false
    }

    const countS = new Map()
    const countT = new Map()

    for (let i = 0; i < s.length; i++) {
        countS.set(s[i], (countS.get(s[i]) || 0) + 1);
        countT.set(t[i], (countT.get(t[i]) || 0) + 1);
    }

    for (let [key, value] of countS) {
        if (countS.get(key) !== countT.get(key)) {
            return false
        }
    }

    return true;
}
// def isAnagramOptimal(s, t):
//     if len(s) != len(t):
//         return False
//
//     countS, countT = {}, {}
//
//     for i in range(len(s)):
//         countS[s[i]] = 1 + countS.get(s[i], 0)
//         countT[t[i]] = 1 + countT.get(t[i], 0)
//
//     return countS == countT
//
//
// print(isAnagram(s, t))
// print(isAnagramOptimal(s, t))
