/**
Given a string, find the length of the longest substring without repeating characters. For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // keep counter from o to n 
    // another variable for longest string so far
    // store letters in a hash
    var longest = 0;
    var counter = 0;
    var hash = {};
     // dvdf
    // for-loop per letter
    for (var i = 0; i < s.length; i++) {
        console.log(counter);
        if (hash[s[i]] !== undefined) {
            if (counter >= 1) {
                console.log('reseting because ', s[i] , ' is in the object')
                console.log('old i', i);
                i = hash[s[i]] + 1;
                
                console.log('new i', i);
            }
            // found repeating character
            // reset counter and empty hash
            counter = 0;
            hash = {};
        }
        
        counter++;
        
        // if counter > longest.length, then longest = counter
        if (counter > longest) {
            longest = counter;
        }
        
        
        hash[s[i]] = i;

    }
    
    return longest;
};
