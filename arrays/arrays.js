let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript']
console.log(secretMessage.length)
secretMessage.pop()
console.log(secretMessage.length)
secretMessage.push('to', 'program')
console.log(secretMessage.length)
console.log(secretMessage.indexOf('easily'))
secretMessage[7] = 'right'
secretMessage.shift()
secretMessage.unshift('Programming')
console.log(secretMessage)
secretMessage.splice(6, 4)
secretMessage[6] = 'know'
console.log(secretMessage)
