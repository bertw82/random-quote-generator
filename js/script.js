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
    quote: 'I come into the peace of wild things who do not tax their lives with forethought of grief.',
    source: 'Wendell Berry',
    citation: 'New Collected Poems',
    year: '2012',
    tags: [
      'peace',
      'wilderness',
      'escape'
    ]
  },
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
      'sadness'
    ]
  },
  {
    quote: 'So we beat on, boats against the current, borne back ceaselessly into the past.',
    source: 'F. Scott Fitzgerald',
    citation: 'The Great Gatsby',
    year: '1925',
    tags: [
      'Jazz era',
      '1920\'s',
      'hope'
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
    quote: ,
    source: ,
    citation: ,
    year: 
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