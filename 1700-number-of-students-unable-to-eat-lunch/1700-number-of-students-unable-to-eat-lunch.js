/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
     let queue = [...students]
    let rotations = 0
    let index = 0;  
    while(queue.length && rotations < queue.length){
        if(queue[0] == sandwiches[index]){
            queue.shift()
            index++
            rotations = 0
        }else{
            queue.push(queue.shift())
            rotations++
        }
    }
return queue.length

};