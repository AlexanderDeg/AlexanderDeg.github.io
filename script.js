const promptMessage = "alex@alex $~"
const promptLength = 41
const scrollContainer = document.querySelector('.scroll-container')
let currentParagraph = null
let blocking = false

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
    //if (currentParagraph != null && str.length == 0)
    //{
    //    currentParagraph.innerHTML = currentParagraph.innerHTML.substr(promptLength)
    //}
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
	messageDiv.appendChild(img)
    const messageParagraph = document.createElement('p')
    messageParagraph.classList.add('terminal-p')
    if (str.length > 0)
        messageParagraph.innerHTML = `${str}`
    else
        messageParagraph.innerHTML = `<span class="prompt">${promptMessage}</span> ${str}`
    messageDiv.appendChild(messageParagraph)
    scrollContainer.appendChild(messageDiv)
    //if (currentParagraph != null && str.length == 0)
    //{
    //    currentParagraph.innerHTML = currentParagraph.innerHTML.substr(promptLength)
    //}
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
    createMessage("<a href='https://github.com/AlexanderDeg/ft_irc'>ft_irc</a> : An Internet Relay Chat client written in C++")
    createMessage("<a href='https://github.com/kaseypsbrice/Minishell'>minishell</a> : Linux shell program based on bash written in C")

    createMessage()
	await new Promise(r => setTimeout(r, 20))
	scrollContainer.scrollTop = scrollContainer.scrollHeight
    blocking = false 
}

async function onGodotClick()
{
	if (blocking)
		return 1
	blocking = true
	await writeMessage('ls ./godot_projects')

	createMessageImg("media/bullet_hell.gif", 800, "<strong>Online coop action rogue-like: </strong><br><br>Developed in less than 2 months (unfinished). \
	Features a simplex noise-based level generation system with levels that expand and populate themselves with more enemies as the players \
	progress.<br><br>Bullet hell gameplay with bullet modifiers as a core mechanic. The modifiers, as shown in the bottom left, include: piercing, \
	double shot, bouncing bullets, large bullets, homing bullets, boomerang bullets, etc.<br><br>All assets created by me.")
	createMessageImg("media/endless.gif", 800, "<strong>Endless rogue-lite: </strong><br><br>Prototype of a game in the endless rogue-lite genre popularized \
	by Vampire Survivors.<br><br>Features a 1-bit art style, wave-based gameplay and unique upgrade synergies.<br><br>All assets created by me.</p>")
	createMessage()
	await new Promise(r => setTimeout(r, 20))
	scrollContainer.scrollTop = scrollContainer.scrollHeight
	blocking = false
}

async function onAboutMeClick()
{
    if (blocking)
        return 1
    blocking = true
    await writeMessage('cat README')
    createMessage("Hi, I'm Alex. I am a passionate programmer who has been self-teaching programming for over 10 years. \
    I am most interested in game development, software development and fullstack development. \
    I began my journey with Gamemaker Studio and Godot before enrolling at 42 Adelaide, a self-paced, peer-driven programming school. \
    During my time at 42 I completed a variety of <span class=\"clickable\" onclick=\"onProjectsClick()\">projects</span> further sharpening my programming and soft skills. \
    I hope to work in a workplace that challenges me and allows me to expand my knowledge of my interest areas.")
    createMessage()
	await new Promise(r => setTimeout(r, 20))
	scrollContainer.scrollTop = scrollContainer.scrollHeight
    blocking = false
}

onPageLoad()

