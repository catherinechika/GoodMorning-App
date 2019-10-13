var greetings = [
    {
      greeting: "Chinese:  早上好 (Zǎoshang hǎo)"
    },
    { 
    greeting: "Spanish:  Buenos dias"
    },
    {
      greeting: "English:  Good Morning"
    },
    {
      greeting: "Hindi:  शुभ प्रभात(shubh prabhaat)"
    },
    {
      greeting: "Arabic: " + "صباح الخير <br>(sabah al - khair)"
    },
    {
      greeting:"Portuguese:  Bom Dia"
    },
    {
      greeting:"Bengali:  সুপ্রভাত(Suprabhāta)"
    },
    {
      greeting: "Russian:  Доброе утро <br>(Dobroye utro)"
    },
    {
      greeting: "Japanese:  おはようございます(Ohayōgozaimasu)"
    },
    {
      greeting: "Dutch:  Goedemorgen"
    },
    {
      greeting: "Xhosa:  Molweni ekuseni"
    },
    {
      greeting: "German:  Guten Morgen"
    },
    {
      greeting: "Korean:  좋은 아침이에요 <br>(Joh-Eun Achim E-Ae-Yo)"
    },
    {
      greeting: "French:  Bonjour"
    },
    {
      greeting: "Telugu:  శుభోదయం (Śubhōdayaṁ)"
    },
    {
      greeting: "Turkish:  Günaydın"
    },
    {
      greeting: "Tamil:  காலை வணக்கம் <br>(Kālai vaṇakkam)"
    },
    {
      greeting: "Vietnamese:  Chào buổi sáng"
    },
    {
      greeting: "Polish:  Dzień dobry"
    },
  
  ];   
  

  $(".display-4").append(greetings[Math.floor(Math.random() * greetings.length)].greeting)
  
  
  var fontArray = ["'Single Day', cursive", "'Tangerine', cursive", "'Love Ya Like A Sister', cursive", "'Fredericka the Great', cursive","'Marcellus SC', serif","'Mountains of Christmas', cursive","'Rye', cursive","'Sacramento', cursive","'Monoton', cursive","'Playball', cursive","'Italianno', cursive","'Rancho', cursive","'Cinzel Decorative', cursive","'Emilys Candy', cursive","'Londrina Shadow', cursive","'Jacques Francois Shadow', cursive"],
      selectFont = fontArray[Math.floor(Math.random() * fontArray.length)];
  var fontColor = ["#F082B5", "#0DA9FF","#FF620D","black","#0B1380"];
      selectColor = fontColor[Math.floor(Math.random() * fontColor.length)];

  $(".display-4").css('font-family', selectFont)
  $(".display-4").css('color', selectColor)
  $(".display-4").hide().fadeIn(3000)
  $(".display-4").css('box-shadow', "inset 7px 7px 10px 10px white")
  $(".display-4").css('text-shadow', "4px 4px 6px black")
  $(".display-4").css('border-radius', "30px")
  $(".display-4").css('padding', "8px")
  $(".display-4").css('font-size', "70px")

