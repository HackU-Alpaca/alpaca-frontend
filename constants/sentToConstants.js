//* senTo と sentoToId の関係
const sentToData = [
  "医療従事者",
  "コロナ感染者",
  "飲食店従業員",
  "アルパカ"
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
  "アルパカ": {
    sentTo_1: "アルパカ", sentTo_2: "の方"
  },
}


export { sentToData, post_relations };