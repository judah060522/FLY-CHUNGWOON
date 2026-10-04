/* ==================================================
   FLY CHUNGWOON IFE
================================================== */


/* ==================================================
   한국 표준시간
================================================== */

function updateClock() {

    const now = new Date();

    const time = new Intl.DateTimeFormat(
        "ko-KR",
        {
            timeZone: "Asia/Seoul",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        }
    ).format(now);

    document.getElementById("clock").textContent = time;
}


/* 1초마다 시간 업데이트 */

updateClock();

setInterval(updateClock, 1000);



/* ==================================================
   기본 데이터
================================================== */


/* 영화 */

const movies = [

    {
        title: "어벤져스: 엔드게임",
        poster: "images/avengers.jpg",
        info:
        "마블 시네마틱 유니버스의 주요 영웅들이 타노스와의 마지막 전투에 나서는 작품입니다. 어벤져스 시리즈의 중요한 이야기를 마무리하는 작품으로 많은 사랑을 받았습니다."
    },

    {
        title: "반지의 제왕: 반지 원정대",
        poster: "images/lotr.jpg",
        info:
        "중간계를 배경으로 한 판타지 영화입니다. 프로도와 동료들이 절대반지를 파괴하기 위해 위험한 여정을 시작하는 이야기를 담고 있습니다."
    },

    {
        title: "아바타",
        poster: "images/avatar.jpg",
        info:
        "판도라 행성을 배경으로 인간과 나비족의 이야기를 그린 SF 영화입니다. 아름다운 자연환경과 독특한 세계관이 특징입니다."
    },

    {
        title: "해리포터: 마법사의 돌",
        poster: "images/harrypotter.jpg",
        info:
        "해리 포터가 호그와트 마법학교에 입학하면서 시작되는 이야기입니다. 마법 세계를 처음 경험하게 되는 해리의 모험을 담고 있습니다."
    }

];


/* 음악 */

const music = [

    {
        title: "이적 - 거짓말 거짓말 거짓말",
        image: "images/leejuk.jpg",
        info:
        "이적의 대표적인 발라드 곡 중 하나입니다. 반복되는 가사와 감정적인 멜로디를 통해 이별과 거짓말에 대한 이야기를 표현한 곡입니다."
    },

    {
        title: "#안녕 - 해요",
        image: "images/hello.jpg",
        info:
        "감성적인 분위기의 곡으로 사랑과 그리움의 감정을 담고 있습니다. 부드러운 보컬과 멜로디가 특징입니다."
    },

    {
        title: "소방차 - 어젯밤이야기",
        image: "images/sobangcha.jpg",
        info:
        "소방차의 대표적인 곡 중 하나로 밝고 경쾌한 분위기가 특징입니다. 복고적인 음악 스타일을 느낄 수 있는 곡입니다."
    }

];



/* 기내식 */

const meals = [

    {
        title: "비빔밥",
        image: "images/bibimbap.jpg",
        info:
        "한국식 비빔밥을 기내에서 편하게 즐길 수 있도록 구성한 메뉴입니다. 다양한 채소와 밥, 고추장을 함께 곁들여 취향에 따라 비벼 드실 수 있습니다."
    },

    {
        title: "소고기 요리",
        image: "images/beef.jpg",
        info:
        "부드러운 소고기를 중심으로 구성한 기내식입니다. 밥과 함께 먹기 좋은 소스와 곁들임 메뉴가 제공됩니다."
    },

    {
        title: "생선 요리",
        image: "images/fish.jpg",
        info:
        "담백한 생선을 중심으로 구성한 기내식입니다. 밥과 채소를 함께 제공하여 가볍게 즐길 수 있습니다."
    }

];



/* ==================================================
   화면 전환
================================================== */

const homeScreen =
    document.getElementById("homeScreen");

const page =
    document.getElementById("page");

const pageTitle =
    document.getElementById("pageTitle");

const pageContent =
    document.getElementById("pageContent");


/* 새 화면 열기 */

function openPage(title, content) {

    homeScreen.style.display = "none";

    page.classList.remove("hidden");

    pageTitle.textContent = title;

    pageContent.innerHTML = content;
}


/* 메인으로 돌아가기 */

function goHome() {

    page.classList.add("hidden");

    homeScreen.style.display = "flex";
}



/* ==================================================
   영화
================================================== */

function openMovies() {

    let html = `
        <div class="movie-grid">
    `;

    movies.forEach((movie, index) => {

        html += `

            <div
                class="movie-card"
                onclick="openMovieDetail(${index})"
            >

                <div class="poster-box">

                    <img
                        src="${movie.poster}"
                        alt="${movie.title}"
                    >

                </div>

                <h3>
                    ${movie.title}
                </h3>

                <p>
                    상세정보 보기
                </p>

            </div>

        `;

    });

    html += `
        </div>
    `;

    openPage("영화", html);
}


/* 영화 상세정보 */

function openMovieDetail(index) {

    const movie = movies[index];

    const html = `

        <div class="movie-detail">

            <div class="movie-detail-poster">

                <img
                    src="${movie.poster}"
                    alt="${movie.title}"
                >

            </div>


            <div class="movie-detail-info">

                <h3>
                    ${movie.title}
                </h3>

                <p>
                    ${movie.info}
                </p>

                <br>

                <p>
                    <strong>FLY CHUNGWOON 추천 영화</strong>
                </p>

                <p class="movie-notice">
                    ※ 본 화면에서는 영화 재생 기능을 제공하지 않습니다.
                </p>

            </div>

        </div>

    `;

    openPage(movie.title, html);
}


/* ==================================================
   비행정보
================================================== */

function openFlight() {

    const html = `

        <div class="flight-info">

            <div class="flight-route-large">

                ICN

                <span>✈</span>

                DXB

            </div>


            <div class="info-grid">

                <div class="info-item">
                    <small>출발 공항</small>
                    <strong>인천국제공항 (ICN)</strong>
                </div>

                <div class="info-item">
                    <small>도착 공항</small>
                    <strong>두바이국제공항 (DXB)</strong>
                </div>

                <div class="info-item">
                    <small>출발 도시</small>
                    <strong>대한민국 인천</strong>
                </div>

                <div class="info-item">
                    <small>도착 도시</small>
                    <strong>아랍에미리트 두바이</strong>
                </div>

                <div class="info-item">
                    <small>예상 비행시간</small>
                    <strong>약 10시간</strong>
                </div>

                <div class="info-item">
                    <small>비행 방향</small>
                    <strong>인천 → 두바이</strong>
                </div>

                <div class="info-item">
                    <small>기내 서비스</small>
                    <strong>식사 / 음료 / 엔터테인먼트</strong>
                </div>

                <div class="info-item">
                    <small>좌석 서비스</small>
                    <strong>기내식 예약 가능</strong>
                </div>

                <div class="info-item">
                    <small>현재 시간</small>
                    <strong id="flightClock">한국 표준시간</strong>
                </div>

            </div>

        </div>

    `;

    openPage("비행정보", html);

}



/* ==================================================
   승무원 호출
================================================== */

function openCrew() {

    const requests = [

        "💧 물주세요",

        "🔔 승무원 호출",

        "🛏️ 담요주세요"

    ];


    let html = `
        <div class="card-grid">
    `;


    requests.forEach(request => {

        html += `

            <div
                class="card"
                onclick="crewRequest('${request}')"
            >

                <div class="card-icon">
                    ${request.substring(0, 2)}
                </div>

                <h3>
                    ${request.substring(2)}
                </h3>

                <p>
                    선택하기
                </p>

            </div>

        `;

    });


    html += `
        </div>
    `;


    openPage("승무원 호출", html);
}



/* 승무원 요청 */

function crewRequest(request) {

    showNotification(
        request + " 요청이 전달되었습니다."
    );

}



/* ==================================================
   음악
================================================== */

function openMusic() {

    let html = `
        <div class="music-grid">
    `;

    music.forEach((song, index) => {

        html += `

            <div
                class="music-card"
                onclick="openMusicDetail(${index})"
            >

                <div class="music-image">

                    <img
                        src="${song.image}"
                        alt="${song.title}"
                    >

                </div>

                <h3>
                    ${song.title}
                </h3>

                <p>
                    음악 상세정보 보기
                </p>

            </div>

        `;

    });

    html += `
        </div>
    `;

    openPage("음악", html);
}



/* 음악 상세정보 */

function openMusicDetail(index) {

    const song = music[index];

    const html = `

        <div class="music-detail">

            <div class="music-detail-image">

                <img
                    src="${song.image}"
                    alt="${song.title}"
                >

            </div>


            <div class="music-detail-info">

                <h3>
                    ${song.title}
                </h3>

                <p>
                    ${song.info}
                </p>

                <br>

                <p>
                    <strong>FLY CHUNGWOON MUSIC</strong>
                </p>

                <p class="music-notice">
                    ※ 본 화면에서는 음악 재생 기능을 제공하지 않습니다.
                </p>

            </div>

        </div>

    `;

    openPage(song.title, html);
}


/* ==================================================
   기내식
================================================== */

function openMeals() {

    let html = `
        <div class="meal-grid">
    `;

    meals.forEach((meal, index) => {

        html += `

            <div
                class="meal-card"
                onclick="openMealDetail(${index})"
            >

                <div class="meal-image">

                    <img
                        src="${meal.image}"
                        alt="${meal.title}"
                    >

                </div>

                <h3>
                    ${meal.title}
                </h3>

                <p>
                    메뉴 상세정보 보기
                </p>

            </div>

        `;

    });

    html += `
        </div>
    `;

    openPage("기내식", html);
}



/* 기내식 상세정보 */

function openMealDetail(index) {

    const meal = meals[index];

    const html = `

        <div class="meal-detail">

            <div class="meal-detail-image">

                <img
                    src="${meal.image}"
                    alt="${meal.title}"
                >

            </div>


            <div class="meal-detail-info">

                <h3>
                    ${meal.title}
                </h3>

                <p>
                    ${meal.info}
                </p>

            </div>


            <button
                class="reserve-button"
                onclick="reserveMeal('${meal.title}')"
            >
                기내식 예약하기
            </button>

        </div>

    `;

    openPage(meal.title, html);
}


/* 기내식 예약 */

function reserveMeal(mealName) {

    showNotification(
        "예약이 완료되었습니다."
    );

}



/* ==================================================
   설정
================================================== */

function openSettings() {

    const html = `

        <div class="setting-box">


            <div class="setting">

                <label>

                    <span>화면 밝기</span>

                    <span id="brightnessValue">
                        100%
                    </span>

                </label>


                <input
                    type="range"
                    min="30"
                    max="100"
                    value="100"
                    oninput="changeBrightness(this.value)"
                >

            </div>



            <div class="setting">

                <label>

                    <span>소리 음량</span>

                    <span id="volumeValue">
                        100%
                    </span>

                </label>


                <input
                    type="range"
                    min="0"
                    max="100"
                    value="100"
                    oninput="changeVolume(this.value)"
                >

            </div>


        </div>

    `;


    openPage("설정", html);
}



/* 밝기 */

function changeBrightness(value) {

    document.querySelector(".screen").style.filter =
        `brightness(${value}%)`;


    document.getElementById(
        "brightnessValue"
    ).textContent = value + "%";
}



/* 음량 */

function changeVolume(value) {

    document.getElementById(
        "volumeValue"
    ).textContent = value + "%";

}



/* ==================================================
   알림창
================================================== */

function showNotification(message) {

    const notification =
        document.getElementById("notification");


    notification.textContent = message;

    notification.classList.add("show");


    setTimeout(() => {

        notification.classList.remove("show");

    }, 2500);

}