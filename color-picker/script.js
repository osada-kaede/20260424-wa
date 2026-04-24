const text = document.querySelector("#colorText");
const color = document.querySelector("#colorPicker");

// カラーピッカーを操作した時の一連の操作（colorBg関数）
const colorBg = () => {
  // 選択した色をbodyの背景色に設定
  document.body.style.backgroundColor = color.value;

  if(color.value === "#ffffff"){
    // カラーコードをテキストとして表示
    text.textContent = `カラーコード：${color.value}(while)`;
  }else if(color.value === "#000000"){
    text.textContent = `カラーコード：${color.value}(black)`;
  }else{
      // カラーコードをテキストとして表示
      text.textContent = `カラーコード：${color.value}`;
  }

};

// カラーピッカーが変更されたら、colorBg関数を発動
color.addEventListener("input", colorBg);