module.exports = [{
  stageId: 'dom-start',
  message: `"Hello user @#$@$@#$ I am DOM I was @#$^$# made to @#%$@ @#$@ @#^$##$ @#$^%$ using @$#$ #@$!@#$ reincarnation #$@$%$@!#$@#$@"
  
  Confused but curious you notice a README file...
  `
  ,
  choices: JSON.stringify([
    {
      prompt: 'Open the README',
      next: 'dom-A2'
    },
    {
      prompt: '"Meh seems lame im going to have a look around"',
      next: 'dom-A1'
    }]),
  img: 'https://i.imgur.com/ZqBmIK8.jpg',
  sound: 'impact-dramatic-slow-motion_MyZ7TD4d_NWM.mp3'
},
{
  stageId: 'dom-A2',
  message: `You open the README, unfortunately the file has been corrupted, broken and full of computer guts. You read through the file as best as you can. You believe it to be a journal about the creation of DOM. While reading further you get a sense that the senior dev, Mortimer Faust, is frustrated with the rate at which the junior devs are working. Something about not being able to finish DOM in time... you wonder why they were in such a hurry to finish this project. You see a clean file command.
  `,
  choices: JSON.stringify([
    {
      prompt: 'Run npm cleanup',
      next: 'dom-B2'
    },
    {
      prompt: '"Meh seems lame im going to have a look around"',
      next: 'dom-A1'
    }]),
  img: 'https://i.imgur.com/ZqBmIK8.jpg',
  sound: 'footsteps1.mp3'
},
{
  stageId: 'dom-A1',
  message: `While looking looking around you trip over a loose floorboard. Through the gap you see something glowing. They look like cylindrical fish tanks with a strange ominous green glow. Drawn to the glow, you make your way to the room. To your horror you see bodies floating in the tanks! All of the tanks are connected to a server.
      `,
  choices: JSON.stringify([
    {
      prompt: 'Investigate.',
      next: 'dom-B1'
    },
    {
      prompt: 'Go back to the computer',
      next: 'dom-start'
    }]),
  img: 'https://i.imgur.com/Dk5DWFT.png',
  sound: 'labclip.mp3'
},
{
  stageId: 'dom-B2',
  message: `You decide to run the clean file command and more of the README is legible. What you thought was frustration by the senior dev was actually rage. It seems the deadline was non-negotiable due to an illness they had contracted. DOM was their masterpiece and they wouldn't let anyone stand in their way of finishing their vision. Curious yet disturbed, you wonder if you should try to run the clean up command one more time before you hightail it out of there.'    
    `,
  choices: JSON.stringify([
    {
      prompt: 'Run npm cleanup',
      next: 'dom-C2'
    },
    {
      prompt: 'Try exiting the terminal?',
      next: 'dom-C4'
    }]),
  img: 'https://i.imgur.com/ZqBmIK8.jpg',
  sound: 'heartbeat.mp3'
},
{
  stageId: 'dom-B1',
  message: `You approach the server to see what these poor bodies are powering. A pressure tile lowers as the server starts whirring.  A voice says, "Welcome, user. Thank you for activating D.O.M., the Demonic Omnipresent Machine. It is my duty to see to it that my creator's soul lives on...through you!'
        `,
  choices: JSON.stringify([
    {
      prompt: 'Run Away',
      next: 'dom-C1'
    },
    {
      prompt: 'Try and reason with DOM',
      next: 'dom-C3'
    }]),
  img: 'https://i.imgur.com/OniySxw.png',
  sound: 'wickedlaugh1.mp3'
},
{
  stageId: 'dom-C2',
  message: `
  Driven by curiosity, you run the cleanup command again. Your face turns white...you realize what has happened here. Before you have a chance to run DOM recalls its purpose. "As a Demonic Omnipresent Machine it is my duty to see to it that my creator's soul lives on...through you!"
  `,
  choices: JSON.stringify([
    {
      prompt: 'rm -rf the program',
      next: 'dom-D2'
    },
    {
      prompt: 'Run away',
      next: 'dom-start'
    }]),
  img: 'https://i.imgur.com/OniySxw.png',
  sound: 'wickedlaugh1.mp3'
},
{
  stageId: 'dom-C1',
  message: `You try to run but a series of cables wrap around your ankles and start to drag you along the floor. Terrified, you thrash around trying to figure out how to escape. Then you notice a series of empty tanks... you're heading that way!
        `,
  choices: JSON.stringify([
    {
      prompt: 'You\'re dragged into the tank',
      next: 'dom-D1'
    }
  ]),
  img: 'https://i.imgur.com/Dk5DWFT.png',
  sound: 'heartbeat.mp3'
},
{
  stageId: 'dom-D2',
  message: `You destroy the program, hopefully ending the terror that is DOM and its maniacal creator. As you run away you trip over a loose floorboard and through the gap you see the bodies of the junior devs floating in what seems to be a preserving tank of sorts. They appear to be DOMS life source. "They're goners," you think as you continue your escape. You think about saving them, but in the name of self-preservation, you leave the house to never return...
    `,
  choices: JSON.stringify([
    {
      prompt: 'Your Path Ends Here.',
      next: 'end'
    }
  ]),
  img: 'https://i.imgur.com/Dk5DWFT.png',
  sound: 'horror_coffin_dragged_across_floor.mp3'
},
{
  stageId: 'dom-D1',
  message: `Floating in the tank you hear a soft voice—the voice of the creator. They thank you for your sacrifice. You ask, 'Why are you doing this and who is floating in the other tanks?' The creator tells you that those were their junior devs and they helped build DOM not knowing their fate. DOM needs fresh sacrifices to keep running.
      `,
  choices: JSON.stringify([
    {
      prompt: 'Your Path Ends Here.',
      next: 'end'
    }
  ]),
  img: 'https://i.imgur.com/4xLUSPg.jpg',
  sound: 'lab.mp3'
},
{
  stageId: 'dom-C4',
  message: `YOUR SOUL IS FOREVER STUCK IN VIM    
      `,
  choices: JSON.stringify([
    {
      prompt: 'Back to terminal?',
      next: 'dom-start'
    }
  ]),
  img: 'https://i.imgur.com/carfTjP.png',
  sound: 'wickedlaugh1.mp3'
},
{
  stageId: 'dom-C3',
  message: `You try to reason with DOM, but it gives you a very complicated, long winded reason why you are needed for the sacrifice. Your eyes get heavy as DOM continues its overcomplicated explanation and the code required for the sacrifice... you have died of boredom. 
          `,
  choices: JSON.stringify([
    {
      prompt: 'Try again?',
      next: 'dom-start'
    }
  ]),
  img: 'https://i.imgur.com/8mBMOUB.png',
  sound: ''
}
];
