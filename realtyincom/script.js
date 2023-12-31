// header scroll
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        // 스크롤 O
        if (scroll > 1) {
            $(".imhder").css({
                "background": "black",
                "transition": "background 0.5s ease"
            });
            $(".hdertx").css({
                "color": "#fff",
                "transition": "color 0.5s ease"
            });
            $('.logobl').attr("class", "logowh");
        }
        // 스크롤 X : 스크롤 상단에 붙기
        else {
            $(".imhder").css({
                "background": "none",
                "transition": "background 0.5s ease"
            });
            $(".hdertx").css({
                "color": "#000",
                "transition": "color 0.5s ease"
            });
            $('.logowh').attr("class", "logobl");
        }
    });
});

$(document).ready(function() {
        $("#stock").on("input", function() {
            var stock = parseInt($("#stock").val());
            
            if (isNaN(stock)){
                $(".dividendText").text("0");
            }
            else{
            var dividend = 346;
            
            var result = stock * dividend;
            var resultText = "";
            
            if (result >= 1 && result <= 500) {
                resultText = "매월 사탕을 먹을 수 있어요";
            } else if (result >= 501 && result <= 1100) {
                resultText = "매월 아이스크림을 먹을 수 있어요";
            }else if (result >= 1101 && result <= 3000) {
                resultText = "매월 음료수를 마실 수 있어요";
            }else if (result >= 3001 && result <= 5000) {
                resultText = "매월 떡볶이 1인분을 먹을 수 있어요";
            }else if (result >= 5001 && result <= 10000) {
                resultText = "매월 햄버거를 먹을 수 있어요";
            }else if (result >= 10001 && result <= 30000) {
                resultText = "매월 한끼 든든하게 먹을 수 있어요";
            }else if (result >= 30001 && result <= 50000) {
                resultText = "매월 휴대폰요금을 대신 낼 수 있어요";
            }else if (result >= 50001 && result <= 100000) {
                resultText = "매월 비싼 한 끼 먹을 수 있어요";
            }else if (result >= 100001 && result <= 200000) {
                resultText = "매월 근교로 여행을 떠날 수 있어요";
            }else if (result >= 200001 && result <= 500000000) {
                resultText = "당신은 무엇을 할 건가요?";
            }
            
            // 결과 및 배당금, 지출 텍스트 출력
            $(".resultText").text(resultText);
            $(".dividendText").text(result.toLocaleString());
        }
        });
    });

    $(window).ready(function(){
    var i=1;
    var func1 = setInterval(function(){
        if(i<26){
            color1(i);
            i++;
        } else if(i<70){
            color2(i);
            i++;
        } else if(i<101){
            color3(i);
            i++;
        } else {
            clearInterval(func1);
        }
     },10);
    });
    function color1(i){
        $(".chart").css({
            "background":"conic-gradient(#8b22ff 0% "+i+"%, #ffffff "+i+"% 100%)"
            });  
    }
    function color2(i){
        $(".chart").css({
            "background":"conic-gradient(#8b22ff 0% 25%, #ffc33b 25% "+i+"%, #ffffff "+i+"% 100%)"
            });
    }
    function color3(i){
        $(".chart").css({
            "background":"conic-gradient(#8b22ff 0% 25%, #ffc33b 25% 70%, #21f3d6 70% "+i+"%, #ffffff "+i+"% 100%)"
            });
    }

    const inputElement = document.getElementById('stock');

    // input 요소의 값이 변경될 때마다 실행되는 함수
    inputElement.addEventListener('input', function () {
        const inputValue = this.value;
        // 입력 값의 길이에 따라 동적으로 너비를 조절 (오른쪽 정렬을 유지)
        const newWidth = inputValue.length * 15 + 15; // 예시 값, 필요에 따라 조절
        this.style.width = newWidth + 'px';
    });

    // 입력 필드의 값이 지워질 때 너비를 최소 너비로 설정
    inputElement.addEventListener('keydown', function (e) {
        if (e.key === 'Backspace' && this.value.length === 1) {
            this.style.width = '10px'; // 최소 너비
        }
    });


// // 카운트를 표시할 요소
// const $counterMon = document.querySelector(".countMon");

// // 목표수치
// const maxMon = 637;
// counter($counterMon, maxMon);


//     function counter($counterMon, maxMon) {
//         let now = maxMon;
      
//         const handle = setInterval(() => {
//           $counterMon.innerHTML = Math.ceil(maxMon - now);
        
//           // 목표에 도달하면 정지
//           if (now < 1) {
//             clearInterval(handle);
//           }
        
//           // 적용될 수치, 점점 줄어듬
//           const step = now / 10;
      
//           now -= step;
//         }, 50);
//     }

const stockInput = document.getElementById("stock");
const dividendText = document.querySelector(".dividendText");

stockInput.addEventListener("input", updateDividend);

function updateDividend() {
  const investedStocks = parseInt(stockInput.value) || 0; // 입력된 주식 수를 정수로 변환합니다.
  const dividend = investedStocks * 346; // 주식 수를 기반으로 배당금을 계산합니다. (예: 각 주당 100원)

  animateDividendCount(dividend);
}

function animateDividendCount(target) {
  const current = parseInt(dividendText.textContent.replace(/,/g, "")) || 0; // 현재 표시된 배당금을 가져옵니다.
  const duration = 1000; // 애니메이션 지속 시간 (1초)
  let startTime = null;

  function animate(time) {
    if (!startTime) startTime = time;
    const progress = (time - startTime) / duration;

    if (progress < 1) {
      const easedProgress = easeOutQuart(progress);
      const currentValue = Math.round(current + (target - current) * easedProgress);
      dividendText.textContent = currentValue.toLocaleString(); // 쉼표로 구분된 형태로 배당금을 업데이트합니다.
      requestAnimationFrame(animate);
    } else {
      dividendText.textContent = target.toLocaleString(); // 최종 값으로 설정
    }
  }

  requestAnimationFrame(animate);
}

// Easing 함수 - 이징 함수를 사용하여 부드러운 애니메이션을 만듭니다.
function easeOutQuart(t) {
  return 1 - (1 - t) ** 4;
}

//     const $counterQua = document.querySelector(".countQua");

//     // 목표수치
//     const maxQua = 102;
//     counter($counterQua, maxQua);
    
    
//         function counter($counterQua, maxQua) {
//             let now = maxQua;
          
//             const handle = setInterval(() => {
//               $counterQua.innerHTML = Math.ceil(maxQua - now);
            
//               // 목표에 도달하면 정지
//               if (now < 1) {
//                 clearInterval(handle);
//               }
            
//               // 적용될 수치, 점점 줄어듬
//               const step = now / 10;
          
//               now -= step;
//             }, 50);
//         }

document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggle-button");
    var historyContent = document.querySelector(".history");
    var initialHeight = historyContent.clientHeight; // 초기 높이를 저장
    var isExpanded = false;
    var scrollYPosition = 0; // 스크롤 위치 저장 변수

    toggleButton.addEventListener("click", function() {
        if (isExpanded) {
            historyContent.style.height = initialHeight + "px"; // 초기 높이로 복원
            toggleButton.textContent = "더보기";
            // 더보기를 누른 후 스크롤 위치를 저장된 위치로 복구
            window.scrollTo(0, scrollYPosition);
        } else {
            scrollYPosition = window.scrollY; // 현재 스크롤 위치 저장
            var scrollHeight = historyContent.scrollHeight;
            historyContent.style.height = scrollHeight + "px"; // 전체 내용의 높이로 확장
            toggleButton.textContent = "접기";
        }
        isExpanded = !isExpanded;
    });
});
