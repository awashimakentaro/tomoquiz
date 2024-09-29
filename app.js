const quiz = [
  {
    question: 'さとそとは？',
     answer: [
     'ねぼすけ',
     '不運' ,
     'うんこ',
     '変態',
    ],
    correct: '不運'
  },
  {
    question: 'のべとは？',
    answer: [
      'やりちん',
      'へんたい' ,
      'いけめん',
      'うすっぺらい',
            ],
     correct: "やりちん"},
   {
     question: 'kisiyuとは？',
     answer: [
     'ひな先輩',
     '倫理欠如予備者' ,
     'カンフー',
     'うんこ',
    ],
     correct: '倫理欠如予備者'}
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題文選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
    while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();


const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
    score++;
  }else{
    window.alert("不正解");
  }
  quizIndex++;
  if(quizIndex < quizLength){
    //問題数がまだあれば実行
    setupQuiz();
  }else{
    //もんさいなければ終了
    window.alert("終了!お前の正解数は"+ score + "/" + quizLength +"です");
  }
};

//ボタンをクリックしたら生後判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener("click",(e) =>{
    clickHandler(e);
  });
  handlerIndex++;
}
