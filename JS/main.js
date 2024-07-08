document.getElementById('accountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputVal = document.getElementById('studentIdInput').value;
    const result = core(parseInt(inputVal));


    if (result === 'Invalid value') {
        Swal.fire({
            icon: 'error',
            title: '잘못된 값',
            text: '잘못된 값을 입력하셨습니다. 다시 확인해주세요.',
            position: 'center',
            backdrop: `rgba(0,0,0,0.4)`
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: '이메일 생성 완료!',
            html: `이메일이 클립보드에 복사되었습니다<br>ctrl + c 혹은 붙여넣기를 사용하세요!<br><br>생성된 이메일:<br>${result}`,
            position: 'center',
            backdrop: `rgba(0,0,0,0.4)`
        });
        navigator.clipboard.writeText(result).then(() => {
            console.log('Email copied to clipboard');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    }
});

document.getElementById('findButton').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('accountForm').dispatchEvent(new Event('submit'));
});
