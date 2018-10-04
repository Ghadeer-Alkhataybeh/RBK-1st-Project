// our Quotes array from the internet
var qutes = ['Love For All, Hatred For None.',
             'Change the world by being yourself.',
             'Every moment is a fresh beginning.',
             'Never regret anything that made you smile.',
             'Die with memories, not dreams.',
             'Aspire to inspire before we expire.',
             'Everything you can imagine is real.',
             'Simplicity is the ultimate sophistication.',
             'Whatever you do, do it well.',
             'What we think, we become.',
             'All limitations are self-imposed.',
             'Tough times never last but tough people do.',
             'Problems are not stop signs, they are guidelines.',
             'One day the people that don’t even believe in you will tell everyone how they met you.',
             'If im gonna tell a real story, im gonna start with my name.',
             'Have enough courage to start and enough heart to finish.',
             'Hate comes from intimidation, love comes from appreciation.',
             "I could agree with you but then we’d both be wrong.",
             "Oh the things you can find, if you don’t stay behind.",
             'Determine your priorities and focus on them.',
             'Be so good they can’t ignore you.',
             "Dream as if you’ll live forever, live as if you’ll die today.",
             'Yesterday you said tomorrow. Just do it.',
             "I don’t need it to be easy, I need it to be worth it."]


var c = 0 // general variable to iterate through our array
 setInterval(function(){var list = $('.elem')//setinterval function to iterate after specific time
    if (c === qutes.length-1){ // if statement to assign the c var to 0 value after finishing the iteration
        c = 0
    }     
     list.text(qutes[c])
     c++
  }, 9000);