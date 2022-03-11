//* senTo と sentoToId の関係

const sentToData = [
  "医療従事者",
  "コロナ感染者",
  "飲食店従業員",
  "主婦",
  "サラリーマン",
  "受験生",
  "学生"
]

const post_relations = {
  "医療従事者": {
    sentTo_1: "医療従事者", sentTo_2: "の方"
  },
  "コロナ感染者": {
    sentTo_1: "コロナに", sentTo_2: "感染した方"
  },
  "飲食店従業員": {
    sentTo_1: "飲食店に", sentTo_2: "勤務の方"
  },
  "主婦": {
    sentTo_1: "主婦の方", sentTo_2: ""
  },
  "サラリーマン": {
    sentTo_1: "サラリーマン", sentTo_2: "の方"
  },
  "受験生": {
    sentTo_1: "受験生", sentTo_2: "の方"
  },
  "学生": {
    sentTo_1: "学生の方", sentTo_2: ""
  },
}

const post_list = [
  {
    sentToId: 0,
    messages: [
      "いつも私たちのために最前線で働いてくださり、ありがとうございます！"
    ]},
  {
    sentToId: 1,
    message: [
      "はやく治りますように！",
      "早い回復をお祈りしています！",
      "1日も早く元気で過ごせますよう祈っています。"
    ]},
  {
    sentToId: 2,
    messages: [
      "いつも美味しいご飯をありがとうございます。",

      "大変なのにいつもありがとう"
    ]},
  {
    sentToId: 3,
    messages: [
      "いつも美味しいご飯を作ってくれてありがとう！"
    ]},
  {
    sentToId: 4,
    messages: [
      "コロナで外に出るのも大変なのに、通勤して働いてくれて本当に助かります。"
    ]},
  {
    sentToId: 5,
    messages: [
      "今、心落ちつかない日々が続いていると思います。私たちも１年前は受験生で、みなさんの気持ちも分かります。私たちはみなさんが一生懸命に勉強し、健康でいることを純心からお祈りしています。",

      "今年は新型コロナウイルスで学校が休校になるなど勉強に集中出来なかった人もたくさんいると思います。受験までもう少しです。自分の力を十分に発揮できるように頑張ってください！きっと楽しい学校生活があなたを待っています。体調に気をつけて受験をお迎えください。"
    ]},
  {
    sentToId: 6,
    messages: [
      "今まで誰もが経験したことのない大変な状況ですね。でも、ここが新しい世界の始まりだとも思えます。その新しい世界を作っていくのはあなたたちです。経験したからこそできること、あると思います。応援しています。",

      "We are all in this together. We will emerge stronger from the crisis. Let's co-create the world of the next normal!  Looking forward to collaborating with you all in the near future.",

      "you're never alone. 辛くてもあなただけじゃないから抱え込まないようにね。"
    ]},
]


export { sentToData, post_relations };