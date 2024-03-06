/*eslint-disable*/
const { lightColors } = require("../../theme/color")
const purchasePrice=42200000

  const fees={
    stampDuty:purchasePrice>2500000?7:6,
    registrationFee:1,
    legalFee:5,
    corpusFee:6,
    brokerage:2
  }
  const price=[
    purchasePrice,
    purchasePrice*fees.stampDuty/100,
    purchasePrice*fees.registrationFee/100,
    purchasePrice*fees.legalFee/100,
    purchasePrice*fees.corpusFee/100,
    purchasePrice*fees.brokerage/100
  ]
  const color=[lightColors.background.secondary,'yellow','#ff09e6','pink','lightblue','blue']
  const data=[
    {fee:'Purchase Price',amount:price[0],color:color[0]},
    {fee:'Stamp Duty',amount:price[1],color:color[1]},
    {fee:'Registration Fee',amount:price[2],color:color[2]},
    {fee:'Legal Fee',amount:price[3],color:color[3]},
    {fee:'Corpus Fee',amount:price[4],color:color[4]},
    {fee:'Brokerage',amount:price[5],color:color[5]}
  ]
  const totalAmount=price[0]+price[1]+price[2]+price[3]+price[4]+price[5]
  module.exports={price,color,data,totalAmount}