
const { readFile, writeFile } = require('fs')

//  writeFile(
//     './result/_post.json', 
//       JSON.stringify([
//           person = {
//           name : 'stephen',
//           country : 'Nigeria',
//           hobby : 'bballing'}
//           ]), 
//         (err) => {
//           if (err) throw err       
// })

// readFile('./result/_post.json', 'utf8', (err, content)=>{
//   if(err) throw err
//   console.log(content)
// })

readFile('./result/_post.json', 'utf8', (err, content)=>{
  if(err) throw err
  
  let data = JSON.parse(content)

  data.push({name : 'awilo'})

  writeFile('./result/post.json', JSON.stringify(data), (err)=>{
    if(err) throw err
  })
})