let sequenceIndex = 0; // 현재 키 조합의 인덱스
const sequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight"]; // 원하는 키 조합

// 키를 누를 때마다 실행될 함수
document.addEventListener('keydown', function(event) {
    // 다음 키가 원하는 키 조합의 다음 키와 일치하는지 확인
    if (event.key === sequence[sequenceIndex]) {
        sequenceIndex++; // 인덱스 증가
        // 키 조합이 완료되면
        if (sequenceIndex === sequence.length) {
            location.replace('nothing/Nothing.html'); 
            sequenceIndex = 0; // 인덱스 초기화
        }
    } else {
        sequenceIndex = 0; // 키가 일치하지 않으면 인덱스 초기화
    }
});