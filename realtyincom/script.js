$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
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
        else {
            $(".imhder").css({
                "background": "#fff",
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
                $(".resultText").text("월배당금으로 무엇을 할 수 있을까요?");
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