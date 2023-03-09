const cal = document.querySelector('.cal');
const result = document.querySelector('#result');

cal.addEventListener('click', function(event) {
  if(!event.target.classList.contains('cal_btn')) return;

  const value = event.target.innerText;
  var x


  switch(value) {
    case 'C':
      result.innerText = '';
      break;
//
      case 'pi':
      result.innerText ='3.14';
      break;




      case '!':
      result.innerText = factorial();
      break;
///
    case '=':
      if(result.innerText.search(/[^0-9*/+-.]/mi) != -1) return;
      
    result.innerText = eval(result.innerText).toFixed(2);
    break;

  default:
    result.innerText += value;

  }
// 5! = 1 * 2 *3 * 4 * 5
  /// написать класс меф и  функции сделать методавми этого класса
function factorial() {
    let factorial =  document.getElementById("result").value
    console.log("hererrerererer")
    let result = 1;
    for(let i = 2; i <= factorial; i++) {
        result *= i;
    }
    console.log(result)
    // document.getElementById("result").innerHTML = result;
    return result
    // result.innerText += value;
 }


    // function factorial(n) {
    //     return (n != 1) ? n * factorial(n - 1) : 1;
    //   }

     



// function stepen (value) {
//     x = event.target.innerText;
//     n = event.target.innerText;
//     rezult.value=x.value**n.value;


//     result.innerText += value;
// }


  
// //
// 


//



});

let fact = document.getElementById("fact")

// fact.onclick = 