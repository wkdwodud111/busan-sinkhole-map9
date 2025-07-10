document.addEventListener("DOMContentLoaded", () => {
  const svgObject = document.getElementById("busan-map");

  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;

    // 마커 온오프 함수 정의
    window.toggleMarkers = function () {
      const markers = svgDoc.querySelectorAll('.sinkhole-marker');
      if (markers.length === 0) {
        alert("마커가 없습니다. SVG에 .sinkhole-marker 클래스가 있어야 합니다.");
        return;
      }

      markers.forEach(marker => {
        const isHidden = marker.style.display === 'none';
        marker.style.display = isHidden ? 'inline' : 'none';
      });
    };

    // 위험도 산출기준 인포박스 토글 함수
    window.toggleWarning = function () {
      const box = document.getElementById("warning-info-box");
      box.style.display = (box.style.display === "none") ? "block" : "none";
    };

// 사상구 시작------------------------------------------------------------------
const sasanggu = svgDoc.getElementById("sasanggu");

// HTML에서 미리 정의된 인포박스들 가져오기
const infoSasanggu1 = document.getElementById("info-sasanggu1");
const infoSasanggu2 = document.getElementById("info-sasanggu2");
const infoSasanggu3 = document.getElementById("info-sasanggu3");
const infoSasanggu4 = document.getElementById("info-sasanggu4");

// 사상구에 마우스를 올렸을 때
if (sasanggu) {
  sasanggu.addEventListener("mouseenter", () => {
    sasanggu.setAttribute("fill", "#FF6464"); // 연빨강

    // 사상구 인포박스들 보이게 하기
    infoSasanggu1.style.display = "block";
    infoSasanggu2.style.display = "block";
    infoSasanggu3.style.display = "block";
    infoSasanggu4.style.display = "block";

    // 다른 구들의 인포박스를 숨기기
    document.querySelectorAll(".info-box").forEach((box) => {
      if (![infoSasanggu1, infoSasanggu2, infoSasanggu3, infoSasanggu4].includes(box)) {
        box.style.display = "none";
      }
    });
  });

  // 마우스를 떼면 사상구 인포박스 숨기기
  sasanggu.addEventListener("mouseleave", () => {
    sasanggu.setAttribute("fill", "#FFFFFF"); // 원래 색상으로 돌아가기

    // 사상구 인포박스들 숨기기
    infoSasanggu1.style.display = "none";
    infoSasanggu2.style.display = "none";
    infoSasanggu3.style.display = "none";
    infoSasanggu4.style.display = "none";
  });
  }

    if (sasanggu) {
      sasanggu.addEventListener("click", () => {
        // 이미지 박스를 참조
        const imageBox = document.getElementById('image-box');

        // 클릭 시 이미지 경로 동적 설정
        const image1 = document.getElementById('image1');
        const image2 = document.getElementById('image2');

        // data-src에서 경로를 가져와 src에 설정
        image1.src = image1.getAttribute('data-src');
        image2.src = image2.getAttribute('data-src');

        // 이미지 박스가 보이는지 확인하고, 보이게/숨기게 설정
        if (imageBox.style.display === 'block') {
          // 이미지 박스를 숨김
          imageBox.style.display = 'none';
        } else {
          // 이미지 박스를 보이게 설정
          imageBox.style.display = 'block';
        }
        // 인포박스를 숨기기
        const infoBoxes = document.querySelectorAll(".info-box");
        infoBoxes.forEach((box) => {
          box.style.display = "none"; // 모든 인포박스 숨기기
        });
      });
    }

// 사상구 끝------------------------------------------------------------------
// 사하구 시작------------------------------------------------------------------
const sahagu = svgDoc.getElementById("sahagu");

// HTML에서 미리 정의된 인포박스들 가져오기
const infoSahagu1 = document.getElementById("info-sahagu1");
const infoSahagu2 = document.getElementById("info-sahagu2");
const infoSahagu3 = document.getElementById("info-sahagu3");
const infoSahagu4 = document.getElementById("info-sahagu4");

// 사상구에 마우스를 올렸을 때
if (sahagu) {
  sahagu.addEventListener("mouseenter", () => {
    sahagu.setAttribute("fill", "#FFC864"); // 연주황

    // 사상구 인포박스들 보이게 하기
    infoSahagu1.style.display = "block";
    infoSahagu2.style.display = "block";
    infoSahagu3.style.display = "block";
    infoSahagu4.style.display = "block";

    // 다른 구들의 인포박스를 숨기기
    document.querySelectorAll(".info-box").forEach((box) => {
      if (![infoSahagu1, infoSahagu2, infoSahagu3, infoSahagu4].includes(box)) {
        box.style.display = "none";
      }
    });
  });

  // 마우스를 떼면 사상구 인포박스 숨기기
  sahagu.addEventListener("mouseleave", () => {
    sahagu.setAttribute("fill", "#FFFFFF"); // 원래 색상으로 돌아가기

    // 사상구 인포박스들 숨기기
    infoSahagu1.style.display = "none";
    infoSahagu2.style.display = "none";
    infoSahagu3.style.display = "none";
    infoSahagu4.style.display = "none";
  });
  }
// 사하구 끝------------------------------------------------------------------
// 남구 시작------------------------------------------------------------------
const namgu = svgDoc.getElementById("namgu");

// HTML에서 미리 정의된 인포박스들 가져오기
const infoNamgu1 = document.getElementById("info-namgu1");
const infoNamgu2 = document.getElementById("info-namgu2");
const infoNamgu3 = document.getElementById("info-namgu3");
const infoNamgu4 = document.getElementById("info-namgu4");

// 남구에 마우스를 올렸을 때
if (namgu) {
  namgu.addEventListener("mouseenter", () => {
    namgu.setAttribute("fill", "#FFFF64");

    infoNamgu1.style.display = "block";
    infoNamgu2.style.display = "block";
    infoNamgu3.style.display = "block";
    infoNamgu4.style.display = "block";

    document.querySelectorAll(".info-box").forEach((box) => {
      if (![infoNamgu1, infoNamgu2, infoNamgu3, infoNamgu4].includes(box)) {
        box.style.display = "none";
      }
    });
  });

  namgu.addEventListener("mouseleave", () => {
    namgu.setAttribute("fill", "#FFFFFF");

    infoNamgu1.style.display = "none";
    infoNamgu2.style.display = "none";
    infoNamgu3.style.display = "none";
    infoNamgu4.style.display = "none";
  });
}

if (namgu) {
  namgu.addEventListener("click", () => {
    const imageBox = document.getElementById('aimage-box');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    image1.src = image1.getAttribute('data-src');
    image2.src = image2.getAttribute('data-src');

    if (imageBox.style.display === 'block') {
      imageBox.style.display = 'none';
    } else {
      imageBox.style.display = 'block';
    }

    const infoBoxes = document.querySelectorAll(".info-box");
    infoBoxes.forEach((box) => {
      box.style.display = "none";
    });
  });
}
// 남구 끝------------------------------------------------------------------
// 해운대구 시작------------------------------------------------------------------
const haeundaegu = svgDoc.getElementById("haeundaegu");

// HTML에서 미리 정의된 인포박스들 가져오기
const infoHaeundaegu1 = document.getElementById("info-haeundaegu1");
const infoHaeundaegu2 = document.getElementById("info-haeundaegu2");
const infoHaeundaegu3 = document.getElementById("info-haeundaegu3");
const infoHaeundaegu4 = document.getElementById("info-haeundaegu4");

// 해운대구에 마우스를 올렸을 때
if (haeundaegu) {
  haeundaegu.addEventListener("mouseenter", () => {
    haeundaegu.setAttribute("fill", "#96C864");

    // 해운대구 인포박스들 보이게 하기
    infoHaeundaegu1.style.display = "block";
    infoHaeundaegu2.style.display = "block";
    infoHaeundaegu3.style.display = "block";
    infoHaeundaegu4.style.display = "block";

    // 다른 구들의 인포박스를 숨기기
    document.querySelectorAll(".info-box").forEach((box) => {
      if (![infoHaeundaegu1, infoHaeundaegu2, infoHaeundaegu3, infoHaeundaegu4].includes(box)) {
        box.style.display = "none";
      }
    });
  });

  // 마우스를 떼면 해운대구 인포박스 숨기기
  haeundaegu.addEventListener("mouseleave", () => {
    haeundaegu.setAttribute("fill", "#FFFFFF");

    infoHaeundaegu1.style.display = "none";
    infoHaeundaegu2.style.display = "none";
    infoHaeundaegu3.style.display = "none";
    infoHaeundaegu4.style.display = "none";
  });
}

if (haeundaegu) {
  haeundaegu.addEventListener("click", () => {
    const imageBox = document.getElementById('aimage-box');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    image1.src = image1.getAttribute('data-src');
    image2.src = image2.getAttribute('data-src');

    if (imageBox.style.display === 'block') {
      imageBox.style.display = 'none';
    } else {
      imageBox.style.display = 'block';
    }

     const infoBoxes = document.querySelectorAll(".info-box");
    infoBoxes.forEach((box) => {
      box.style.display = "none";
    });
  });
}
// 해운대구 끝------------------------------------------------------------------

// 동래구 시작------------------------------------------------------------------
const dongnaegu = svgDoc.getElementById("dongnaegu");

// HTML에서 미리 정의된 인포박스들 가져오기
const infoDongnaegu1 = document.getElementById("info-dongnaegu1");
const infoDongnaegu2 = document.getElementById("info-dongnaegu2");
const infoDongnaegu3 = document.getElementById("info-dongnaegu3");
const infoDongnaegu4 = document.getElementById("info-dongnaegu4");

// 동래구에 마우스를 올렸을 때
if (dongnaegu) {
  dongnaegu.addEventListener("mouseenter", () => {
    dongnaegu.setAttribute("fill", "#FFC864"); // 연빨강

    infoDongnaegu1.style.display = "block";
    infoDongnaegu2.style.display = "block";
    infoDongnaegu3.style.display = "block";
    infoDongnaegu4.style.display = "block";

    document.querySelectorAll(".info-box").forEach((box) => {
      if (![infoDongnaegu1, infoDongnaegu2, infoDongnaegu3, infoDongnaegu4].includes(box)) {
        box.style.display = "none";
      }
    });
  });

  dongnaegu.addEventListener("mouseleave", () => {
    dongnaegu.setAttribute("fill", "#FFFFFF");

    infoDongnaegu1.style.display = "none";
    infoDongnaegu2.style.display = "none";
    infoDongnaegu3.style.display = "none";
    infoDongnaegu4.style.display = "none";
  });
}

if (dongnaegu) {
  dongnaegu.addEventListener("click", () => {
    const imageBox = document.getElementById('aimage-box');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    image1.src = image1.getAttribute('data-src');
    image2.src = image2.getAttribute('data-src');

    if (imageBox.style.display === 'block') {
      imageBox.style.display = 'none';
    } else {
      imageBox.style.display = 'block';
    }

    const infoBoxes = document.querySelectorAll(".info-box");
    infoBoxes.forEach((box) => {
      box.style.display = "none";
    });
  });
}
// 동래구 끝------------------------------------------------------------------
// 연제구 시작------------------------------------------------------------------
const yeonjegu = svgDoc.getElementById("yeonjegu");

// HTML에서 미리 정의된 인포박스들 가져오기
const infoYeonjegu1 = document.getElementById("info-yeonjegu1");
const infoYeonjegu2 = document.getElementById("info-yeonjegu2");
const infoYeonjegu3 = document.getElementById("info-yeonjegu3");
const infoYeonjegu4 = document.getElementById("info-yeonjegu4");

// 연제구에 마우스를 올렸을 때
if (yeonjegu) {
  yeonjegu.addEventListener("mouseenter", () => {
    yeonjegu.setAttribute("fill", "#FFC864"); // 연빨강

    infoYeonjegu1.style.display = "block";
    infoYeonjegu2.style.display = "block";
    infoYeonjegu3.style.display = "block";
    infoYeonjegu4.style.display = "block";

    document.querySelectorAll(".info-box").forEach((box) => {
      if (![infoYeonjegu1, infoYeonjegu2, infoYeonjegu3, infoYeonjegu4].includes(box)) {
        box.style.display = "none";
      }
    });
  });

  yeonjegu.addEventListener("mouseleave", () => {
    yeonjegu.setAttribute("fill", "#FFFFFF");

    infoYeonjegu1.style.display = "none";
    infoYeonjegu2.style.display = "none";
    infoYeonjegu3.style.display = "none";
    infoYeonjegu4.style.display = "none";
  });
}

if (yeonjegu) {
  yeonjegu.addEventListener("click", () => {
    const imageBox = document.getElementById('aimage-box');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    image1.src = image1.getAttribute('data-src');
    image2.src = image2.getAttribute('data-src');

    if (imageBox.style.display === 'block') {
      imageBox.style.display = 'none';
    } else {
      imageBox.style.display = 'block';
    }

    const infoBoxes = document.querySelectorAll(".info-box");
    infoBoxes.forEach((box) => {
      box.style.display = "none";
    });
  });
}
// 연제구 끝------------------------------------------------------------------
// 수영구 시작------------------------------------------------------------------
const suyeonggu = svgDoc.getElementById("suyeonggu");

// HTML에서 미리 정의된 인포박스들 가져오기
const infoSuyeonggu1 = document.getElementById("info-suyeonggu1");
const infoSuyeonggu2 = document.getElementById("info-suyeonggu2");
const infoSuyeonggu3 = document.getElementById("info-suyeonggu3");
const infoSuyeonggu4 = document.getElementById("info-suyeonggu4");

// 수영구에 마우스를 올렸을 때
if (suyeonggu) {
  suyeonggu.addEventListener("mouseenter", () => {
    suyeonggu.setAttribute("fill", "#009664");

    infoSuyeonggu1.style.display = "block";
    infoSuyeonggu2.style.display = "block";
    infoSuyeonggu3.style.display = "block";
    infoSuyeonggu4.style.display = "block";

    document.querySelectorAll(".info-box").forEach((box) => {
      if (![infoSuyeonggu1, infoSuyeonggu2, infoSuyeonggu3, infoSuyeonggu4].includes(box)) {
        box.style.display = "none";
      }
    });
  });

  suyeonggu.addEventListener("mouseleave", () => {
    suyeonggu.setAttribute("fill", "#FFFFFF");

    infoSuyeonggu1.style.display = "none";
    infoSuyeonggu2.style.display = "none";
    infoSuyeonggu3.style.display = "none";
    infoSuyeonggu4.style.display = "none";
  });
}

if (suyeonggu) {
  suyeonggu.addEventListener("click", () => {
    const imageBox = document.getElementById('aimage-box');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    image1.src = image1.getAttribute('data-src');
    image2.src = image2.getAttribute('data-src');

    if (imageBox.style.display === 'block') {
      imageBox.style.display = 'none';
    } else {
      imageBox.style.display = 'block';
    }

    const infoBoxes = document.querySelectorAll(".info-box");
    infoBoxes.forEach((box) => {
      box.style.display = "none";
    });
  });
}
// 수영구 끝------------------------------------------------------------------
// 금정구 시작------------------------------------------------------------------
const geumjeonggu = svgDoc.getElementById("geumjeonggu");

// HTML에서 미리 정의된 인포박스들 가져오기
const infoGeumjeonggu1 = document.getElementById("info-geumjeonggu1");
const infoGeumjeonggu2 = document.getElementById("info-geumjeonggu2");
const infoGeumjeonggu3 = document.getElementById("info-geumjeonggu3");
const infoGeumjeonggu4 = document.getElementById("info-geumjeonggu4");

// 금정구에 마우스를 올렸을 때
if (geumjeonggu) {
  geumjeonggu.addEventListener("mouseenter", () => {
    geumjeonggu.setAttribute("fill", "#96C864");

    infoGeumjeonggu1.style.display = "block";
    infoGeumjeonggu2.style.display = "block";
    infoGeumjeonggu3.style.display = "block";
    infoGeumjeonggu4.style.display = "block";

    document.querySelectorAll(".info-box").forEach((box) => {
      if (![infoGeumjeonggu1, infoGeumjeonggu2, infoGeumjeonggu3, infoGeumjeonggu4].includes(box)) {
        box.style.display = "none";
      }
    });
  });

  geumjeonggu.addEventListener("mouseleave", () => {
    geumjeonggu.setAttribute("fill", "#FFFFFF");

    infoGeumjeonggu1.style.display = "none";
    infoGeumjeonggu2.style.display = "none";
    infoGeumjeonggu3.style.display = "none";
    infoGeumjeonggu4.style.display = "none";
  });
}

if (geumjeonggu) {
  geumjeonggu.addEventListener("click", () => {
    const imageBox = document.getElementById('aimage-box');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    image1.src = image1.getAttribute('data-src');
    image2.src = image2.getAttribute('data-src');

    if (imageBox.style.display === 'block') {
      imageBox.style.display = 'none';
    } else {
      imageBox.style.display = 'block';
    }

    const infoBoxes = document.querySelectorAll(".info-box");
    infoBoxes.forEach((box) => {
      box.style.display = "none";
    });
  });
}
// 금정구 끝------------------------------------------------------------------
// 북구 시작------------------------------------------------------------------
const bukgu = svgDoc.getElementById("bukgu");

// HTML에서 미리 정의된 인포박스들 가져오기
const infoBukgu1 = document.getElementById("info-bukgu1");
const infoBukgu2 = document.getElementById("info-bukgu2");
const infoBukgu3 = document.getElementById("info-bukgu3");
const infoBukgu4 = document.getElementById("info-bukgu4");

// 북구에 마우스를 올렸을 때
if (bukgu) {
  bukgu.addEventListener("mouseenter", () => {
    bukgu.setAttribute("fill", "#FFC864");

    infoBukgu1.style.display = "block";
    infoBukgu2.style.display = "block";
    infoBukgu3.style.display = "block";
    infoBukgu4.style.display = "block";

    document.querySelectorAll(".info-box").forEach((box) => {
      if (![infoBukgu1, infoBukgu2, infoBukgu3, infoBukgu4].includes(box)) {
        box.style.display = "none";
      }
    });
  });

  bukgu.addEventListener("mouseleave", () => {
    bukgu.setAttribute("fill", "#FFFFFF");

    infoBukgu1.style.display = "none";
    infoBukgu2.style.display = "none";
    infoBukgu3.style.display = "none";
    infoBukgu4.style.display = "none";
  });
}

if (bukgu) {
  bukgu.addEventListener("click", () => {
    const imageBox = document.getElementById('aimage-box');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    image1.src = image1.getAttribute('data-src');
    image2.src = image2.getAttribute('data-src');

    if (imageBox.style.display === 'block') {
      imageBox.style.display = 'none';
    } else {
      imageBox.style.display = 'block';
    }

    const infoBoxes = document.querySelectorAll(".info-box");
    infoBoxes.forEach((box) => {
      box.style.display = "none";
    });
  });
}
// 북구 끝------------------------------------------------------------------
// 기장군 시작------------------------------------------------------------------
const gijanggun = svgDoc.getElementById("gijanggun");

// HTML에서 미리 정의된 인포박스들 가져오기
const infoGijanggun1 = document.getElementById("info-gijanggun1");
const infoGijanggun2 = document.getElementById("info-gijanggun2");
const infoGijanggun3 = document.getElementById("info-gijanggun3");
const infoGijanggun4 = document.getElementById("info-gijanggun4");

// 기장군에 마우스를 올렸을 때
if (gijanggun) {
  gijanggun.addEventListener("mouseenter", () => {
    gijanggun.setAttribute("fill", "#009664");

    infoGijanggun1.style.display = "block";
    infoGijanggun2.style.display = "block";
    infoGijanggun3.style.display = "block";
    infoGijanggun4.style.display = "block";

    document.querySelectorAll(".info-box").forEach((box) => {
      if (![infoGijanggun1, infoGijanggun2, infoGijanggun3, infoGijanggun4].includes(box)) {
        box.style.display = "none";
      }
    });
  });

  gijanggun.addEventListener("mouseleave", () => {
    gijanggun.setAttribute("fill", "#FFFFFF");

    infoGijanggun1.style.display = "none";
    infoGijanggun2.style.display = "none";
    infoGijanggun3.style.display = "none";
    infoGijanggun4.style.display = "none";
  });
}

if (gijanggun) {
  gijanggun.addEventListener("click", () => {
    const imageBox = document.getElementById('aimage-box');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    image1.src = image1.getAttribute('data-src');
    image2.src = image2.getAttribute('data-src');

    if (imageBox.style.display === 'block') {
      imageBox.style.display = 'none';
    } else {
      imageBox.style.display = 'block';
    }

    const infoBoxes = document.querySelectorAll(".info-box");
    infoBoxes.forEach((box) => {
      box.style.display = "none";
    });
  });
}
// 기장군 끝------------------------------------------------------------------
// 부산진구 시작------------------------------------------------------------------
const busanjingu = svgDoc.getElementById("busanjingu");

// HTML에서 미리 정의된 인포박스들 가져오기
const infoBusanjingu1 = document.getElementById("info-busanjingu1");
const infoBusanjingu2 = document.getElementById("info-busanjingu2");
const infoBusanjingu3 = document.getElementById("info-busanjingu3");
const infoBusanjingu4 = document.getElementById("info-busanjingu4");

// 부산진구에 마우스를 올렸을 때
if (busanjingu) {
  busanjingu.addEventListener("mouseenter", () => {
    busanjingu.setAttribute("fill", "#FFFF64");

    infoBusanjingu1.style.display = "block";
    infoBusanjingu2.style.display = "block";
    infoBusanjingu3.style.display = "block";
    infoBusanjingu4.style.display = "block";

    document.querySelectorAll(".info-box").forEach((box) => {
      if (![infoBusanjingu1, infoBusanjingu2, infoBusanjingu3, infoBusanjingu4].includes(box)) {
        box.style.display = "none";
      }
    });
  });

  busanjingu.addEventListener("mouseleave", () => {
    busanjingu.setAttribute("fill", "#FFFFFF");

    infoBusanjingu1.style.display = "none";
    infoBusanjingu2.style.display = "none";
    infoBusanjingu3.style.display = "none";
    infoBusanjingu4.style.display = "none";
  });
}

if (busanjingu) {
  busanjingu.addEventListener("click", () => {
    const imageBox = document.getElementById('aimage-box');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    image1.src = image1.getAttribute('data-src');
    image2.src = image2.getAttribute('data-src');

    if (imageBox.style.display === 'block') {
      imageBox.style.display = 'none';
    } else {
      imageBox.style.display = 'block';
    }

    const infoBoxes = document.querySelectorAll(".info-box");
    infoBoxes.forEach((box) => {
      box.style.display = "none";
    });
  });
}
// 부산진구 끝------------------------------------------------------------------
// 동구 시작------------------------------------------------------------------
const donggu = svgDoc.getElementById("donggu");

// HTML에서 미리 정의된 인포박스들 가져오기
const infoDonggu1 = document.getElementById("info-donggu1");
const infoDonggu2 = document.getElementById("info-donggu2");
const infoDonggu3 = document.getElementById("info-donggu3");
const infoDonggu4 = document.getElementById("info-donggu4");

// 동구에 마우스를 올렸을 때
if (donggu) {
  donggu.addEventListener("mouseenter", () => {
    donggu.setAttribute("fill", "#96C864");

    infoDonggu1.style.display = "block";
    infoDonggu2.style.display = "block";
    infoDonggu3.style.display = "block";
    infoDonggu4.style.display = "block";

    document.querySelectorAll(".info-box").forEach((box) => {
      if (![infoDonggu1, infoDonggu2, infoDonggu3, infoDonggu4].includes(box)) {
        box.style.display = "none";
      }
    });
  });

  donggu.addEventListener("mouseleave", () => {
    donggu.setAttribute("fill", "#FFFFFF");

    infoDonggu1.style.display = "none";
    infoDonggu2.style.display = "none";
    infoDonggu3.style.display = "none";
    infoDonggu4.style.display = "none";
  });
}

if (donggu) {
  donggu.addEventListener("click", () => {
    const imageBox = document.getElementById('aimage-box');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    image1.src = image1.getAttribute('data-src');
    image2.src = image2.getAttribute('data-src');

    if (imageBox.style.display === 'block') {
      imageBox.style.display = 'none';
    } else {
      imageBox.style.display = 'block';
    }

    const infoBoxes = document.querySelectorAll(".info-box");
    infoBoxes.forEach((box) => {
      box.style.display = "none";
    });
  });
}
// 동구 끝------------------------------------------------------------------
// 서구 시작------------------------------------------------------------------
const seogu = svgDoc.getElementById("seogu");

// HTML에서 미리 정의된 인포박스들 가져오기
const infoSeogu1 = document.getElementById("info-seogu1");
const infoSeogu2 = document.getElementById("info-seogu2");
const infoSeogu3 = document.getElementById("info-seogu3");
const infoSeogu4 = document.getElementById("info-seogu4");

// 서구에 마우스를 올렸을 때
if (seogu) {
  seogu.addEventListener("mouseenter", () => {
    seogu.setAttribute("fill", "#FFFF64");

    infoSeogu1.style.display = "block";
    infoSeogu2.style.display = "block";
    infoSeogu3.style.display = "block";
    infoSeogu4.style.display = "block";

    document.querySelectorAll(".info-box").forEach((box) => {
      if (![infoSeogu1, infoSeogu2, infoSeogu3, infoSeogu4].includes(box)) {
        box.style.display = "none";
      }
    });
  });

  seogu.addEventListener("mouseleave", () => {
    seogu.setAttribute("fill", "#FFFFFF");

    infoSeogu1.style.display = "none";
    infoSeogu2.style.display = "none";
    infoSeogu3.style.display = "none";
    infoSeogu4.style.display = "none";
  });
}

if (seogu) {
  seogu.addEventListener("click", () => {
    const imageBox = document.getElementById('aimage-box');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    image1.src = image1.getAttribute('data-src');
    image2.src = image2.getAttribute('data-src');

    if (imageBox.style.display === 'block') {
      imageBox.style.display = 'none';
    } else {
      imageBox.style.display = 'block';
    }

    const infoBoxes = document.querySelectorAll(".info-box");
    infoBoxes.forEach((box) => {
      box.style.display = "none";
    });
  });
}
// 서구 끝------------------------------------------------------------------
// 중구 시작------------------------------------------------------------------
const junggu = svgDoc.getElementById("junggu");

// HTML에서 미리 정의된 인포박스들 가져오기
const infoJunggu1 = document.getElementById("info-junggu1");
const infoJunggu2 = document.getElementById("info-junggu2");
const infoJunggu3 = document.getElementById("info-junggu3");
const infoJunggu4 = document.getElementById("info-junggu4");

// 중구에 마우스를 올렸을 때
if (junggu) {
  junggu.addEventListener("mouseenter", () => {
    junggu.setAttribute("fill", "#009664");

    infoJunggu1.style.display = "block";
    infoJunggu2.style.display = "block";
    infoJunggu3.style.display = "block";
    infoJunggu4.style.display = "block";

    document.querySelectorAll(".info-box").forEach((box) => {
      if (![infoJunggu1, infoJunggu2, infoJunggu3, infoJunggu4].includes(box)) {
        box.style.display = "none";
      }
    });
  });

  junggu.addEventListener("mouseleave", () => {
    junggu.setAttribute("fill", "#FFFFFF");

    infoJunggu1.style.display = "none";
    infoJunggu2.style.display = "none";
    infoJunggu3.style.display = "none";
    infoJunggu4.style.display = "none";
  });
}

if (junggu) {
  junggu.addEventListener("click", () => {
    const imageBox = document.getElementById('aimage-box');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    image1.src = image1.getAttribute('data-src');
    image2.src = image2.getAttribute('data-src');

    if (imageBox.style.display === 'block') {
      imageBox.style.display = 'none';
    } else {
      imageBox.style.display = 'block';
    }

    const infoBoxes = document.querySelectorAll(".info-box");
    infoBoxes.forEach((box) => {
      box.style.display = "none";
    });
  });
}
// 중구 끝------------------------------------------------------------------
// 영도구 시작------------------------------------------------------------------
const yeongdogu = svgDoc.getElementById("yeongdogu");

// HTML에서 미리 정의된 인포박스들 가져오기
const infoYeongdogu1 = document.getElementById("info-yeongdogu1");
const infoYeongdogu2 = document.getElementById("info-yeongdogu2");
const infoYeongdogu3 = document.getElementById("info-yeongdogu3");
const infoYeongdogu4 = document.getElementById("info-yeongdogu4");

// 영도구에 마우스를 올렸을 때
if (yeongdogu) {
  yeongdogu.addEventListener("mouseenter", () => {
    yeongdogu.setAttribute("fill", "#96C864");

    infoYeongdogu1.style.display = "block";
    infoYeongdogu2.style.display = "block";
    infoYeongdogu3.style.display = "block";
    infoYeongdogu4.style.display = "block";

    document.querySelectorAll(".info-box").forEach((box) => {
      if (![infoYeongdogu1, infoYeongdogu2, infoYeongdogu3, infoYeongdogu4].includes(box)) {
        box.style.display = "none";
      }
    });
  });

  yeongdogu.addEventListener("mouseleave", () => {
    yeongdogu.setAttribute("fill", "#FFFFFF");

    infoYeongdogu1.style.display = "none";
    infoYeongdogu2.style.display = "none";
    infoYeongdogu3.style.display = "none";
    infoYeongdogu4.style.display = "none";
  });
}

if (yeongdogu) {
  yeongdogu.addEventListener("click", () => {
    const imageBox = document.getElementById('aimage-box');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    image1.src = image1.getAttribute('data-src');
    image2.src = image2.getAttribute('data-src');

    if (imageBox.style.display === 'block') {
      imageBox.style.display = 'none';
    } else {
      imageBox.style.display = 'block';
    }

    const infoBoxes = document.querySelectorAll(".info-box");
    infoBoxes.forEach((box) => {
      box.style.display = "none";
    });
  });
}
// 영도구 끝------------------------------------------------------------------
// 강서구1 시작------------------------------------------------------------------
const gangseogu1 = svgDoc.getElementById("gangseogu1");

// HTML에서 미리 정의된 인포박스들 가져오기
const infoGangseogu1_1 = document.getElementById("info-gangseogu1-1");
const infoGangseogu1_2 = document.getElementById("info-gangseogu1-2");
const infoGangseogu1_3 = document.getElementById("info-gangseogu1-3");
const infoGangseogu1_4 = document.getElementById("info-gangseogu1-4");

// 강서구1에 마우스를 올렸을 때
if (gangseogu1) {
  gangseogu1.addEventListener("mouseenter", () => {
    gangseogu1.setAttribute("fill", "#96C864");

    infoGangseogu1_1.style.display = "block";
    infoGangseogu1_2.style.display = "block";
    infoGangseogu1_3.style.display = "block";
    infoGangseogu1_4.style.display = "block";

    document.querySelectorAll(".info-box").forEach((box) => {
      if (![infoGangseogu1_1, infoGangseogu1_2, infoGangseogu1_3, infoGangseogu1_4].includes(box)) {
        box.style.display = "none";
      }
    });
  });

  gangseogu1.addEventListener("mouseleave", () => {
    gangseogu1.setAttribute("fill", "#FFFFFF");

    infoGangseogu1_1.style.display = "none";
    infoGangseogu1_2.style.display = "none";
    infoGangseogu1_3.style.display = "none";
    infoGangseogu1_4.style.display = "none";
  });
}

if (gangseogu1) {
  gangseogu1.addEventListener("click", () => {
    const imageBox = document.getElementById('aimage-box');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    image1.src = image1.getAttribute('data-src');
    image2.src = image2.getAttribute('data-src');

    if (imageBox.style.display === 'block') {
      imageBox.style.display = 'none';
    } else {
      imageBox.style.display = 'block';
    }

    const infoBoxes = document.querySelectorAll(".info-box");
    infoBoxes.forEach((box) => {
      box.style.display = "none";
    });
  });
}
// 강서구1 끝------------------------------------------------------------------
// 강서구2 시작------------------------------------------------------------------
const gangseogu2 = svgDoc.getElementById("gangseogu2");

// HTML에서 미리 정의된 인포박스들 가져오기
const infoGangseogu2_1 = document.getElementById("info-gangseogu2-1");
const infoGangseogu2_2 = document.getElementById("info-gangseogu2-2");
const infoGangseogu2_3 = document.getElementById("info-gangseogu2-3");
const infoGangseogu2_4 = document.getElementById("info-gangseogu2-4");

// 강서구2에 마우스를 올렸을 때
if (gangseogu2) {
  gangseogu2.addEventListener("mouseenter", () => {
    gangseogu2.setAttribute("fill", "#96C864");

    infoGangseogu2_1.style.display = "block";
    infoGangseogu2_2.style.display = "block";
    infoGangseogu2_3.style.display = "block";
    infoGangseogu2_4.style.display = "block";

    document.querySelectorAll(".info-box").forEach((box) => {
      if (![infoGangseogu2_1, infoGangseogu2_2, infoGangseogu2_3, infoGangseogu2_4].includes(box)) {
        box.style.display = "none";
      }
    });
  });

  gangseogu2.addEventListener("mouseleave", () => {
    gangseogu2.setAttribute("fill", "#FFFFFF");

    infoGangseogu2_1.style.display = "none";
    infoGangseogu2_2.style.display = "none";
    infoGangseogu2_3.style.display = "none";
    infoGangseogu2_4.style.display = "none";
  });
}

if (gangseogu2) {
  gangseogu2.addEventListener("click", () => {
    const imageBox = document.getElementById('aimage-box');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    image1.src = image1.getAttribute('data-src');
    image2.src = image2.getAttribute('data-src');

    if (imageBox.style.display === 'block') {
      imageBox.style.display = 'none';
    } else {
      imageBox.style.display = 'block';
    }

    const infoBoxes = document.querySelectorAll(".info-box");
    infoBoxes.forEach((box) => {
      box.style.display = "none";
    });
  });
}
// 강서구2 끝------------------------------------------------------------------
// 강서구3 시작------------------------------------------------------------------
const gangseogu3 = svgDoc.getElementById("gangseogu3");

// HTML에서 미리 정의된 인포박스들 가져오기
const infoGangseogu3_1 = document.getElementById("info-gangseogu3-1");
const infoGangseogu3_2 = document.getElementById("info-gangseogu3-2");
const infoGangseogu3_3 = document.getElementById("info-gangseogu3-3");
const infoGangseogu3_4 = document.getElementById("info-gangseogu3-4");

// 강서구3에 마우스를 올렸을 때
if (gangseogu3) {
  gangseogu3.addEventListener("mouseenter", () => {
    gangseogu3.setAttribute("fill", "#96C864");

    infoGangseogu3_1.style.display = "block";
    infoGangseogu3_2.style.display = "block";
    infoGangseogu3_3.style.display = "block";
    infoGangseogu3_4.style.display = "block";

    document.querySelectorAll(".info-box").forEach((box) => {
      if (![infoGangseogu3_1, infoGangseogu3_2, infoGangseogu3_3, infoGangseogu3_4].includes(box)) {
        box.style.display = "none";
      }
    });
  });

  gangseogu3.addEventListener("mouseleave", () => {
    gangseogu3.setAttribute("fill", "#FFFFFF");

    infoGangseogu3_1.style.display = "none";
    infoGangseogu3_2.style.display = "none";
    infoGangseogu3_3.style.display = "none";
    infoGangseogu3_4.style.display = "none";
  });
}

if (gangseogu3) {
  gangseogu3.addEventListener("click", () => {
    const imageBox = document.getElementById('aimage-box');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    image1.src = image1.getAttribute('data-src');
    image2.src = image2.getAttribute('data-src');

    if (imageBox.style.display === 'block') {
      imageBox.style.display = 'none';
    } else {
      imageBox.style.display = 'block';
    }

    const infoBoxes = document.querySelectorAll(".info-box");
    infoBoxes.forEach((box) => {
      box.style.display = "none";
    });
  });
}
// 강서구3 끝------------------------------------------------------------------

  });
})