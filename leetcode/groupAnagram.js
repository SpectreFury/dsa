// Brute Force
// Time -> O(n^2)
// Space -> O(n)

function sortWord(str) {
    return str.split("").sort().join("")
}

function groupAnagram(strs) {
    const result = []
    const visited = new Array(strs.length).fill(false)

    for (let i = 0; i < strs.length; i++) {
        if (visited[i]) continue;

        const common = [strs[i]]
        visited[i] = true

        for (let j = 0; j < strs.length; j++) {
            if (!visited[j] && sortWord(strs[i]) === sortWord(strs[j])) {
                common.push(strs[j])
                visited[j] = true
            }
        }

        result.push(common)
    }

    return result
}

function groupAnagramOptimal(strs) {
    const res = {}

    for (let s of strs) {
        const count = new Array(26).fill(0)

        for (let c of s) {
            count[c.charCodeAt() - "a".charCodeAt()] += 1

        }

        const key = count.join(",")
        if (!res[key]) {
            res[key] = []
        }

        res[key].push(s)
    }

    return Object.values(res)

}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

console.log(groupAnagramOptimal(strs))
