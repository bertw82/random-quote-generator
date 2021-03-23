/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'I don\'t believe that grief passes away. It has its time and place forever. More time is added to it; it becomes a story within a story. But grief and griever alike endure.',
    source: 'Wendell Berry',
    citation: 'Jayber Crow',
    year: '2000',
    tags: [
      'grief',
      'consolation',
      'peace'
    ]
  },
  {
    quote: 'Injustice anywhere is a threat to justice everywhere.',
    source: 'Dr. Martin Luther King Jr.',
    citation: 'Letter from the Birmingham Jail',
    year: '1963',
    tags: [
      'justice',
      'civil rights',
    ]
  },
  {
    quote: 'Gandalf! I thought you were dead! But then I thought I was dead myself. Is everything sad going to come untrue?',
    source: 'Samwise Gamgee',
    citation: 'The Return of the King',
    year: '1995',
    tags: [
      'hope',
      'love',
      'consolation'
    ]
  },
  {
    quote: '"Police work wouldn\'t be possible without coffee," Wallander said. "No work would be possible without coffee." They pondered the importance of coffee in silence.',
    source: 'Henning Mankell',
    citation: 'One Step Behind',
    year: '1997',
    tags: [
      'coffee',
      'crime',
      'work'
    ]
  },
  {
    quote: 'Remember that hope is a good thing, Red, maybe the best of things, and no good thing ever dies.',
    source: 'Stephen King',
    citation: 'The Shawshank Redemption',
    year: '1982',
    tags: [
      'hope',
      'prison',
      'escape'
    ]
  },
  {
    quote: 'Fix bayonets!',
    source: 'Joshua Lawrence Chamberlain',
    year: '1863',
    tags: [
      'courage',
      'war',
      'fearless'
    ]
  },
  {
    quote: 'It is only with the heart that one can see rightly; what is essential is invisible to the eye.',
    source: 'Antoine de Saint-Exupery',
    citation: 'The Little Prince',
    year: '1943',
    tags: [
      'love',
      'heart',
      'essential'
    ]
  },
  {
    quote: 'This is your life, are you who you want to be?',
    source: 'Switchfoot',
    citation: 'The Beautiful Letdown',
    year: '2003',
    tags: [
      'life',
      'essential'
    ]
  },
  {
    quote: 'Two roads diverged in a wood, and I--I took the one less traveled by, And that has made all the difference.',
    source: 'Robert Frost',
    citation: 'The Road Not Taken',
    year: '1916',
    tags: [
      'fearless',
      'life',
      'road'
    ]
  },
  {
    quote: 'One must always choose the lesser of two weevils',
    source: 'Captain Jack Aubrey',
    citation: 'Master and Commander: The Far Side of the World',
    year: '2003',
    tags: [
      'joke',
      'war',
    ]
  }
];


/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);