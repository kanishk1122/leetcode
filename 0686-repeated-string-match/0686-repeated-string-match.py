class Solution(object):
    def repeatedStringMatch(self, a, b):
        if a == b:
            return 1

        temp = a
        while len(temp) < len(b):
            temp += a

        def Lps(s):
            lps = [0] * len(s)
            length = 0
            i = 1
            while i < len(s):
                if s[i] == s[length]:
                    length += 1
                    lps[i] = length
                    i += 1
                else:
                    if length != 0:
                        length = lps[length - 1]
                    else:
                        lps[i] = 0
                        i += 1
            return lps

        lps = Lps(b)
        i = 0 
        j = 0  

        while i < len(temp):
            if temp[i] == b[j]:
                i += 1
                j += 1
                if j == len(b):
                    return (len(temp) + len(a) - 1) // len(a)
            else:
                if j != 0:
                    j = lps[j - 1]
                else:
                    i += 1
        temp += a
        i = 0
        j = 0
        while i < len(temp):
            if temp[i] == b[j]:
                i += 1
                j += 1
                if j == len(b):
                    return (len(temp) + len(a) - 1) // len(a)
            else:
                if j != 0:
                    j = lps[j - 1]
                else:
                    i += 1

        return -1
