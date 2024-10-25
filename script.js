const promptMessage = "alex@alex $~"
const promptLength = 41
const scrollContainer = document.querySelector('.scroll-container')
let currentParagraph = null
let blocking = false // Listen I don't have much js experience let it slide

function createMessage(str = '')
{
    const messageDiv = document.createElement('div')
    messageDiv.classList.add('terminal-flex')
    const messageParagraph = document.createElement('p')
    messageParagraph.classList.add('terminal-p')
    if (str.length > 0)
        messageParagraph.innerHTML = `${str}`
    else
        messageParagraph.innerHTML = `<span class="prompt">${promptMessage}</span> ${str}`
    messageDiv.appendChild(messageParagraph)
    scrollContainer.appendChild(messageDiv)
	scrollContainer.scrollTop = scrollContainer.scrollHeight
    currentParagraph = messageParagraph
}

function createMessageImg(src, width, str = '')
{
    const messageDiv = document.createElement('div')
    messageDiv.classList.add('terminal-flex')
	const img = document.createElement('img')
	img.classList.add("project-img")
	img.src = src
	img.width = width
	img.onload = function (){
		scrollContainer.scrollTop = scrollContainer.scrollHeight
	}
	messageDiv.appendChild(img)
    const messageParagraph = document.createElement('p')
    messageParagraph.classList.add('terminal-p')
    if (str.length > 0)
        messageParagraph.innerHTML = `${str}`
    else
        messageParagraph.innerHTML = `<span class="prompt">${promptMessage}</span> ${str}`
    messageDiv.appendChild(messageParagraph)
    scrollContainer.appendChild(messageDiv)
	scrollContainer.scrollTop = scrollContainer.scrollHeight
    currentParagraph = messageParagraph
}

async function writeMessage(str)
{
    blocking = true
	scrollContainer.scrollTop = scrollContainer.scrollHeight
    if (currentParagraph == null)
    {
        console.log("no prompt to write message")
        return 1
    }
    for (let i = 0; i < str.length; i++)
    {
        currentParagraph.innerHTML += str[i]
        await new Promise(r => setTimeout(r, 100));
    }
    return 0
}

async function onPageLoad()
{
    if (blocking)
        return 1
    blocking = true
    createMessage()
    blocking = false
}

async function onProjectsClick()
{
    if (blocking)
        return 1
    blocking = true
    await writeMessage('ls ./projects')
	createMessage("<strong>Godot Projects</strong><br><br>")
	createMessageImg("media/bullet_hell.gif", 800, "<strong>Online coop action rogue-like: </strong><br><br>Developed in less than 2 months (unfinished). \
	Features a simplex noise-based level generation system with levels that expand and populate themselves with more enemies as the players \
	progress.<br><br>Bullet hell gameplay with bullet modifiers as a core mechanic. The modifiers, as shown in the bottom left, include: piercing, \
	double shot, bouncing bullets, large bullets, homing bullets, boomerang bullets, etc.<br><br>All assets created by me.")
	createMessageImg("media/endless.gif", 800, "<strong>Endless rogue-lite: </strong><br><br>Prototype of a game in the endless rogue-lite genre popularized \
	by Vampire Survivors.<br><br>Features a 1-bit art style, wave-based gameplay and unique upgrade synergies.<br><br>All assets created by me.</p>")
	createMessageImg("media/typing.gif", 800, "<strong>Typing game: </strong><br><br>Somewhat comedic representation of what studying at 42 \
	is like.<br><br>Made in 1 week for a game jam hosted by students at 42 Adelaide.<br><br>CRT shader by pend00.")
	createMessageImg("media/card.gif", 800, "<strong>Card rogue-like prototype: </strong><br><br>Short card rogue-like prototype made within \
	a few days.<br><br>Dice by jayditya2009 at sketchfab.com<br>Font by datagoblin at itch.io<br>Slash effect by Sangoro at itch.io<br>\
	Tiles by RummyMakes at itch.io<br>Slimes by Holder at itch.io<br>Knight by Sven Thole at itch.io")
	createMessageImg("media/horror.gif", 800, "<strong>Cult of Shadows: </strong><br><br>Atmospheric horror submission to \
	<a href='https://johnny-daniel.itch.io/cult-of-shadows'>Pirate Software Game Jam 15</a><br><br>This game uses both sound and light as core mechanics. \
	It includes a tree-based room system for pathfinding and door-breaking as well as dynamic sound systems for atmosphere.<br><br>Created in two weeks with myself as the primary programmer.")
	createMessageImg("media/frog.gif", 800, "<strong>Frog Rogue-like: </strong><br><br>4th place submission to <a href='https://itch.io/jam/godot-wild-jam-70/rate/2786902'>Godot Wild Jam 40</a> \
	<br><br>The game jam was one week in length with the theme \"Folklore\". 5 people worked on this game with myself as the primary programmer.")
	createMessage("<br><br><strong>42 Projects</strong><br><br>")
    createMessage("<a href='https://github.com/AlexanderDeg/ft_irc'>ft_irc</a> : An Internet Relay Chat client written in C++")
    createMessage("<a href='https://github.com/kaseypsbrice/Minishell'>minishell</a> : Linux shell program based on bash written in C")
	createMessage("<a href='https://github.com/kaseypsbrice/ft_transcendence'>ft_transcendence</a> : Online multiplayer pong and snake games \
	in a single-page web application. Features include user profiles with secure login over https, a live chat, profile pictures, friends list and the ability to play \
	on the command line through a websocket API.<br>Disclaimer: this project was created on a tight deadline of ~1 month so the code desperately needs a refactor.")
    createMessage()
	scrollContainer.scrollTop = scrollContainer.scrollHeight
    blocking = false 
}

async function onAboutMeClick()
{
    if (blocking)
        return 1
    blocking = true
    await writeMessage('cat README')
    createMessage("Hi, I'm Alex. I am a programmer and game devloper who has been self-teaching programming for over 10 years. \
    While my principle interest is in game programming/development, I am also interested in software and full stack web development.<br><br>\
    I began my coding journey with Gamemaker Studio and after a few years, I moved onto Godot when I found the engine a little lacking. \
	I came across an oppurtinity to get some more formal programming experience by studying at 42 Adelaide and took it. \
	There, through many individual and group projects, I gained experience with Linux, C, C++, JavaScript, HTML, CSS, Docker, Nginx, \
	SQL and Ruby.<br><br>I hope to find a game development team or software/web development position where I can let my problem solving and \
	system design skills shine.<br><br>Please take a look at <span class=\"clickable\" onclick=\"onProjectsClick()\">my work</span>.")
    createMessage()
	scrollContainer.scrollTop = scrollContainer.scrollHeight
    blocking = false
}

async function onContactMeClick()
{
	if (blocking)
		return 1
	blocking = true
	await writeMessage('cat CONTACTME')
	createMessage('email: <a href="mailto:alexdeg162000@gmail.com">alexdeg162000@gmail.com</a><br>\
	discord: <a href="https://discordapp.com/users/216186343963885568">Hamazon</a>')
	createMessage()
	scrollContainer.scrollTop = scrollContainer.scrollHeight
	blocking = false
}

onPageLoad()

