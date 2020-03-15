// module.exports.jsonParse = (req, res, next) => {
//   let parsedObj = null;
//     let isTrue = false;
//     let str = req.body;

//     for (let i = 0; i < req.body.length; i++){
//       if (req.body[i] === '{') {
//         isTrue = true;
//         str = '';
//       }
//     }

//   if (isTrue) {
//    parsedObj = JSON.parse(req.body);
//     for (let key in parsedObj) {
//       if (key !== 'children'){
//         str += key + ','
//       } else {
//         let newStr = str.slice(0,-1);
//         str = newStr;
//         str += '\n'
//       }
//     }

//     inner(parsedObj);
//   }

//     function inner(obj) {
//       for (let key in obj){
//         if (key !== 'children') {
//           str += obj[key] + ','

//         } else if (key === 'children') {
//         let newStr = str.slice(0,-1);
//         str = newStr;
//         str += '\n';

//         if (obj[key].length > 0) {
//           for (let i = 0; i < obj[key].length; i++) {
//             inner(obj[key][i]);

//           }
//         }
//         // } else {
//         //   return;
//         // }
//         }
//       }
//     }






//     return str;
//     // req.msg = str;

//     // next();

// }

module.exports.jsonParse = (req, res, next) => {
  let parsedObj = null;
  let isTrue = false;
  let str = '';
  for (let i = 0; i < req.length; i++){
    if (req[i] === '{') {
      isTrue = true;
    }
  }

if (isTrue) {
 parsedObj = JSON.parse(req);
  for (let key in parsedObj) {
    if (key !== 'children'){
      str += key + ','
    } else {
      let newStr = str.slice(0,-1);
      str = newStr;
      str += '\n'
    }
  }

  inner(parsedObj);
}

  function inner(obj) {
    for (let key in obj){
      if (key !== 'children') {
        str += obj[key] + ','

      } else if (key === 'children') {
      let newStr = str.slice(0,-1);
      str = newStr;
      str += '\n';

      if (obj[key].length > 0) {
        for (let i = 0; i < obj[key].length; i++) {
          inner(obj[key][i]);

        }
      }
      // } else {
      //   return;
      // }
      }
    }
  }






  //console.log('str', str);
  //req.body = str;
  return str;

// let parse = JSON.parse(req);
// return parse;
}

// console.log(jsonParse('{\r\n' +
//     '    "firstName": "Joshie",\r\n' +
//     '    "lastName": "Wyattson",\r\n' +
//     '    "county": "San Mateo",\r\n' +
//     '    "city": "San Mateo",\r\n' +
//     '    "role": "Broker",\r\n' +
//     '    "sales": 1000000,\r\n' +
//     '    "children": [\r\n' +
//     '    {\r\n' +
//     '      "firstName": "Beth Jr.",\r\n' +
//     '      "lastName": "Johnson",\r\n' +
//     '      "county": "San Mateo",\r\n' +
//     '      "city": "Pacifica",\r\n' +
//     '      "role": "Manager",\r\n' +
//     '      "sales": 2900000,\r\n' +
//     '      "children": [\r\n' +
//     '        {\r\n' +
//     '          "firstName": "Smitty",\r\n' +
//     '          "lastName": "Won",\r\n' +
//     '          "county": "San Mateo",\r\n' +
//     '          "city": "Redwood City",\r\n' +
//     '          "role": "Sales Person",\r\n' +
//     '          "sales": 4800000,\r\n' +
//     '          "children": []\r\n' +
//     '        },\r\n' +
//     '        {\r\n' +
//     '          "firstName": "Allen",\r\n' +
//     '          "lastName": "Price",\r\n' +
//     '          "county": "San Mateo",\r\n' +
//     '          "city": "Burlingame",\r\n' +
//     '          "role": "Sales Person",\r\n' +
//     '          "sales": 2500000,\r\n' +
//     '          "children": []\r\n' +
//     '        }\r\n' +
//     '      ]\r\n' +
//     '    },\r\n' +
//     '    {\r\n' +
//     '      "firstName": "Beth",\r\n' +
//     '      "lastName": "Johnson",\r\n' +
//     '      "county": "San Francisco",\r\n' +
//     '      "city": "San Francisco",\r\n' +
//     '      "role": "Broker/Sales Person",\r\n' +
//     '      "sales": 7500000,\r\n' +
//     '      "children": []\r\n' +
//     '    }\r\n' +
//     '  ]\r\n' +
//     '}'));
