

    // new tab
    // window.onload=function(){
    //         setTimeout(function(){

    //            window.location.replace("timeOut.html")
    //         },10000)
    //     }


if(localStorage.getItem("isLoggedIn") !== "true"){
    window.location.href = "welcome.html";
}

    // progressbar
    var questions = document.querySelectorAll(".item")
    var progressBar = document.getElementById("progress")
    var select = document.querySelectorAll('input[type="radio"]')
    select.forEach(radio => {
      radio.addEventListener('change', function () {
        var selected = document.querySelectorAll('input[type="radio"]:checked')
        selected.forEach(element => {
          console.log(element.value)
        })
        var increase = selected.length * 10
        progressBar.style.width = increase + "%"
      })
    })

    // timer
    var h = 0
    var m = 9
    var s = 59
    var hours = document.querySelector("#hours")
    var minutes = document.querySelector("#minutes")
    var seconds = document.querySelector("#seconds")
   var timer =  setInterval(function () {

      if (s > 0) {
        s--
      }
      else if (m > 0) {
        m--
        s = 59
      }
      else if (h > 0) {
        h--
        s = 59
        m = 59
      }

      seconds.style = `--value:${s}`
      minutes.style = `--value:${m}`
      hours.style = `--value:${h}`


   if (h === 0 && m === 0 && s === 0) {
      clearInterval(timer);
   
      window.location.replace("timeout.html");
   }


    }, 1000)
//    ////////////////////////////////////////////////////////////////////////////////////////
    //question pagination
    var btn = document.querySelector("#qnum")
    var previous = document.querySelector("#previous")
    var nextt = document.querySelector("#next")
    var num = 1
    var div = document.querySelectorAll(".item")

    var array = Array.from(div)
    var newarray = []
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    numbers.sort(function () {
      return 0.5 - Math.random()
    })
    console.log(numbers)

    for (var j = 0; j < 10; j++) {
      newarray[numbers[j]] = array[j]
    }
    console.log(newarray)
    var i = 0

    newarray[0].classList.remove("hidden")
    newarray[0].classList.add("block")
    function next() {
      if (i < newarray.length - 1) {
        i++
        newarray.forEach(function (element) {
          element.classList.remove("block")
          element.classList.add("hidden")
        });
        newarray[i].classList.remove("hidden")
        newarray[i].classList.add("block")
        btn.textContent = `${i + 1}`
      }
      if (i > 0) {
        previous.classList.remove("opacity-50", "pointer-events-none")
        previous.classList.add("opacity-100")
      }
      else {
        previous.classList.remove("opacity-100")
        previous.classList.add("opacity-50", "pointer-events-none")
      }
      if (i == 9) {
        nextt.classList.remove("opacity-100")
        nextt.classList.add("opacity-50", "pointer-events-none")
      }
      else {
        nextt.classList.remove("opacity-50", "pointer-events-none")
        nextt.classList.add("opacity-100")
      }
    }
    function prev() {

      if (i > 0) {
        i--
        newarray.forEach(function (element) {
          element.classList.remove("block")
          element.classList.add("hidden")
        });

        newarray[i].classList.remove("hidden")
        newarray[i].classList.add("block")
        btn.textContent = `${i + 1}`

        console.log(i)
      }
      if (i > 0) {
        previous.classList.remove("opacity-50", "pointer-events-none")
        previous.classList.add("opacity-100")
      }
      else {
        previous.classList.remove("opacity-100")
        previous.classList.add("opacity-50", "pointer-events-none")
      }

      if (i == 9) {
        nextt.classList.remove("opacity-100")
        nextt.classList.add("opacity-50", "pointer-events-none")
      }
      else {
        nextt.classList.remove("opacity-50", "pointer-events-none")
        nextt.classList.add("opacity-100")
      }
    }

    //submit & correction

    var degree = 0
    select.forEach(radio => {
      radio.addEventListener('change', function () {
        count = 0
        degree = 0
        questions.forEach(question => {
          var correct = question.getAttribute("answer")
          selected = document.querySelectorAll('input[type="radio"]:checked')
          selected.forEach(element => {
            if (selected && element.value == correct)

              degree++

          })
          sessionStorage.setItem("degree", degree)
        })
      })

    })
    function submit() {
      window.location.replace("submit.html")
      
    }
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     function calculateResult() {
//   let degree = 0;

//   newarray.forEach(question => {

//     let correctAnswer = question.getAttribute("answer");

//     let selected = question.querySelector('input[type="radio"]:checked');

//     if (selected && selected.value === correctAnswer) {
//       degree++;
//     }

//   });

//   sessionStorage.setItem("degree", degree);
// }

// function submitExam() {

//   let unanswered = false;

//   newarray.forEach(question => {
//     let selected = question.querySelector('input[type="radio"]:checked');
//     if (!selected) {
//       question.style.border = "2px solid red";
//       unanswered = true;
//     }
//   });

//   if (unanswered) {
//     alert("Please answer all questions");
//     return;
//   }

//   calculateResult();
//   window.location.replace("submit.html");
// }

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //mark
    var markedList = document.querySelector("#markedList")
    var markedItem = document.querySelector(".markedItem")
    var markQ = document.querySelector("#markQ")

    var markArray = []
    var markedItems = []
    
    function mark() {
      if (!markArray.some(elment => elment == i)) {
        markArray.push(i)
        console.log(markArray)
        markQ.textContent = `${i + 1}`
        var j=markQ.textContent 
        var newItem = markedItem.cloneNode(true)
        
        newItem.classList.remove('hidden')
        newItem.addEventListener("click",function(){
          console.log("hello")
          i = j 
          console.log(i)
          prev() 
        newarray.forEach(el => {
      el.classList.remove("block");
      el.classList.add("hidden");
   });

   newarray[i].classList.remove("hidden");
   newarray[i].classList.add("block");

   btn.textContent = i + 1;

});
// ////////////////////////////////////////////////////////////////////////////////////////////////

        var markBtn = newItem.querySelector(".markBtn")
        markBtn.addEventListener("click", function (e) {
          e.stopPropagation()
          newItem.remove()
          markArray.splice(markArray.indexOf(i),1)
          console.log(markArray)
        })
        markedList.appendChild(newItem)
        markedItems.push(newItem)
        console.log(markedList)
        console.log(markArray)
        
      }

    }

