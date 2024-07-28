function initSubMenu() {
    const subBtns = document.querySelectorAll('.sub');
    const shopLists = document.querySelectorAll('.hide');
    const menuBtn = document.querySelector('#MenuBox');
    const menuWrap = document.querySelector('.MenuWrap');
    const navWrap = document.querySelector('.NavWrap');
    const closeBtn = document.querySelector('.CloseBtn');
    const back = document.querySelector('html');

    // 메뉴 버튼 클릭 이벤트
    const MenuBtn = (event) => {
        event.preventDefault();
        toggleMenu();
    };

    // 닫기 버튼 클릭 이벤트
    const Close = (event) => {
        event.preventDefault();
        hideMenu();
    };

    // 서브메뉴 버튼 클릭 이벤트
    const SubBtn = (event, index) => {
        event.preventDefault();
        toggleList(shopLists[index]);
    };

    // 메뉴 표시/숨김 토글 함수
    const toggleMenu = () => {
        if (menuWrap.classList.contains('open')) {
            menuWrap.classList.remove('open');
            navWrap.style.display = 'block';
            back.classList.remove('open');
        } else {
            menuWrap.classList.add('open');
            navWrap.style.display = 'none';
            back.classList.add('open');
        }
    };

    // 메뉴 숨김
    const hideMenu = () => {
        menuWrap.classList.remove('open');
        navWrap.style.display = 'block';
        back.classList.remove('open');
    };

    // 리스트 표시/숨김 토글
    const toggleList = (shopList) => {
        if (shopList.style.display === 'block') {
            shopList.style.display = 'none';
        } else {
            shopList.style.display = 'block';
        }
    };

    // 메뉴클릭
    menuBtn.addEventListener('click', MenuBtn);
    closeBtn.addEventListener('click', Close);
    subBtns.forEach((subBtn, index) => {
        subBtn.addEventListener('click', (event) => SubBtn(event, index));
    });

    // 메뉴 외부 클릭 시 메뉴 숨김
    document.addEventListener('click', (event) => {
        if (!menuWrap.contains(event.target) && !menuBtn.contains(event.target)) {
            hideMenu();
        }
    });
}
function SlideLine() {
    const BestList = document.querySelectorAll('.BestList');
    BestList.forEach((item) => {
        item.addEventListener('click', () => {
            BestList.forEach((i) => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
}

function footer() {
    const dt = document.querySelector('dt');
    const cs = document.querySelector('.CS');

    dt.addEventListener('click', (event) => {
        event.preventDefault;

        if (dt.classList.contains('on')) {
            dt.classList.remove('on');
            cs.style.display = 'none';
        } else {
            dt.classList.add('on');
            cs.style.display = 'block';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initSubMenu();
    SlideLine();
    footer();
});
