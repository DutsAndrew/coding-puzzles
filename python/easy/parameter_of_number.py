puzzle = 'https://www.codewars.com/kata/5902f1839b8e720287000028/python'

def parameter(n):
    
    def get_summed(number):
        sum = 0
        for num in number:
            sum += int(num)
        return sum
            
    def get_multiple_of(number):
        sum = 1
        for num in number:
            sum *= int(num)
        return sum
    
    def get_lcm(a, b):
        return (a * b) // gcd(a, b)
    
    def gcd(a, b):
        while b:
            a, b = b, a % b
        return a
    
    summed = get_summed(str(n))
    multiplied = get_multiple_of(str(n))
    
    return get_lcm(summed, multiplied)

# PASSED