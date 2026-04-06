class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let stack = []

        let openBar = new Set(['(','{','['])
        let strA = s.split('')

        for (let i =0 ; i< strA.length ; i++){
            let ch = strA[i]
            if(openBar.has(ch)) {
                stack.push(ch)
            }else{
                console.log(stack, ch)
                let cur = stack.pop()
            
                if(!((ch == ')' && cur == '(') || (ch == '}' && cur == '{') || (ch == ']' && cur == '[') )){
                    return false
                }
                console.log("str ", stack, ch)
            }

            
        }

        return stack.length == 0


    }
}
