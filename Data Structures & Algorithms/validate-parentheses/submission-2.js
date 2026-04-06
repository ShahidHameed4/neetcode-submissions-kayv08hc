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
                let cur = stack.pop()
                if(!((ch == ')' && cur == '(') || (ch == '}' && cur == '{') || (ch == ']' && cur == '[') )){
                    return false
                }
            }
        }
        return stack.length == 0


    }
}
