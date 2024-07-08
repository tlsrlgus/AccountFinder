function showContent(type) {
    let content = document.getElementById('content');
    let tabs = document.querySelectorAll('.sidebar div');
    tabs.forEach(tab => tab.classList.remove('active'));

    if (type === 'about') {
        content.innerHTML = `
            <h1>Account Finder란?</h1>
            <p>Account Finder는 사용자가 쉽게 계정을 찾을 수 있도록 도와주는 도구입니다.</p>
            <p>간단한 입력을 통해 계정을 찾을 수 있으며, 자동으로 계정이 클립보드에 복사되어 학교에서 빠르게 로그인할 수 있습니다.</p>
            <p>이 프로그램은 오직 양주고등학교 학생들을 위해 개발되었습니다.</p>
            <br>
            <p>* 2023학년도 입학생만 사용 가능합니다.</p>
            <a href="https://github.com/tlsrlgus/AccountFinder" target="_blank" style="background: linear-gradient(to right, #9b30ff, #007bff); -webkit-background-clip: text; background-clip: text; color: transparent; text-decoration: underline; font-weight: bold; padding: 5px 10px; border-radius: 3px; display: inline-block;">Account Finder 깃허브 저장소 (클릭하여 이동하기)</a>


            
        `;
        document.getElementById('about-tab').classList.add('active');
    } else if (type === 'encryptedCode') {
        content.innerHTML = `
            <h1>암호화 코드란?</h1>
            <p>암호화 코드는 전학생들이 Account Finder를 사용할 수 있도록 만든 특별한 코드입니다.</p>
            <p>전학생들은 1학년 학번이 없기에 Account Finder를 사용할 수 없습니다.</p>
            <p>하지만 학번 대신 암호화 코드를 사용하면 전학생 또한 Account Finder를 이용할 수 있습니다.</p>
            <h1>암호화 코드 발급하기</h1>
            <div class="input-form">
                <input type="text" placeholder="예시를 참고하여 숫자를 입력하세요...">
            </div>
            <h3>사용 예시:</h3>
            <p>예를 들어, 학교 이메일이 yangju.s230155@ggh.go.kr인 경우, 230155를 입력한 후 엔터 키를 누릅니다.</p>
        `;
        document.getElementById('encryptedCode-tab').classList.add('active');

        const input = document.querySelector('.input-form input');
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const inputValue = parseInt(input.value, 10);
                const result = encryptionCodeGen(inputValue);
                if (result === 'Invalid value7214') {
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
                        title: '암호화 코드 생성 완료',
                        text: `생성된 암호화 코드는 ${result} 입니다.`,
                        position: 'center',
                        backdrop: `rgba(0,0,0,0.4)`
                    });
                }
            }
        });
    } else if (type === 'copyright') {
        content.innerHTML = `
            <h1>허가 범위</h1>
            <p>본 프로그램은 현재 양주고등학교에 재학 중인 학생에 한하여 수정 및 배포가 허용됩니다.</p>
            <h1>수정 및 배포 규정</h1>
            <p>본 프로그램을 수정 및 배포하는 경우, 다음 규정을 반드시 준수해야 합니다:</p>
            <h3>1. 비영리 목적 사용</h3>
            <p>본 프로그램을 수정 및 배포하는 경우 비영리 목적으로만 사용될 수 있으며, 영리 목적의 사용은 엄격히 금지됩니다.</p>
            <h3>2. 제작자 표기 의무</h3>
            <p>본 프로그램을 수정하거나 배포할 경우, 원 제작자인 신기현, 김민규, 백유진, 이진혁의 이름을 명확히 표기해야 합니다. 또한, 원 저작물을 수정한 프로그램을 다시 수정한 경우, 원 제작자뿐만 아니라 그 이전 수정본의 제작자 이름도 함께 명확히 표기해야 합니다.</p>
            <h3>3. info.html</h3>
            <p>info.html은 다음 예외를 제외한 어떠한 경우에도 수정하여선 안되며 프로그램에서 사용자가 접근할 수 있어야 합니다.</p>
            <p>예외1: 프로그램을 수정한 경우, 자신을 n차 수정자로 명시하는 것은 허용됩니다. 예를 들어, "3차 수정자: 홍길동"과 같이 표기할 수 있습니다.</p>
            <p>예외2: Account Finder란? 부분은 자유롭게 수정할 수 있습니다.</p>
            <h1>수정본 공유 의무</h1>
            <p>수정된 프로그램을 배포하는 경우, 배포된 모든 수정본은 원 제작자들에게도 반드시 공유되어야 합니다.</p>
            <h1>면책 조항 수정의 책임</h1>
            <p>본 프로그램의 면책 조항 또는 그에 준하는 내용을 수정할 경우, 그로 인한 모든 책임은 수정한 당사자에게 있으며, 원 제작자는 이에 대한 어떠한 법적 책임도 지지 않습니다.</p>
            <h1>규정 준수 의무</h1>
            <p>수정된 수정본 또한 본 규정을 완전히 준수해야 하며, 본 규정은 어떠한 경우에도 수정이 허용되지 않습니다.</p>
            
        `;
        document.getElementById('copyright-tab').classList.add('active');
    } else if (type === 'disclaimer') {
        content.innerHTML = `
            <h1>면책 조항</h1>
            <p>1. 본 프로그램은 특정 공식에 따라 계정을 찾기 때문에 계정 개인정보를 수집하지 않으며, 계정 정보 유출에 대해 어떠한 책임도 지지 않습니다. 어떠한 경우에도 계정 정보 유출로 인한 피해는 전적으로 사용자에게 있습니다.</p>
            <p>2. 아이디 보유자가 아닌 타인이 학번을 통해 아이디를 알아낸 후 이를 악용하는 경우, 이는 본 프로그램의 본래 목적이 아니므로 프로그램 및 개발자는 이에 대해 어떠한 책임도 지지 않습니다.</p>
            <p>3. 본 프로그램의 사용으로 인해 발생하는 모든 피해, 손실 또는 기타 문제에 대해 본 프로그램 및 개발자는 어떠한 경우에도 책임을 지지 않습니다. 프로그램을 사용하는 것은 사용자의 전적인 책임 하에 이루어지며, 본 프로그램 및 개발자는 이에 대한 어떠한 법적 책임도 지지 않습니다.</p>
        `;
        document.getElementById('disclaimer-tab').classList.add('active');
    } else if (type === 'creators') {
        content.innerHTML = `
            <h1>만든 사람들</h1>
            <p>신기현<a href="https://github.com/tlsrlgus" target="_blank" class="github-icon"><i class="fab fa-github"></i></a> <br>김민규<br>백유진<br>이진혁</p>
            
        `;
        document.getElementById('creators-tab').classList.add('active');
    }
}

function goBack() {
    history.back();
}

function encryptionCodeGen(codeNum) {
    codeNum = reverseCore(codeNum) + 7214;
    return codeNum;
}