const promptMessage = "alex@alex $~"
const promptLength = 41
const scrollContainer = document.querySelector('.scroll-container')
let currentParagraph = null
let blocking = false

function createMessage(str = '')
{
    const messageDiv = document.createElement('div')
    messageDiv.classList.add('terminal-div')
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
    currentParagraph = messageParagraph
}

async function writeMessage(str)
{
    blocking = true
    if (currentParagraph == null)
    {
        console.log("no prompt to write message")
        return 1
    }
    for (let i = 0; i < str.length; i++)
    {
        currentParagraph.innerHTML += str[i]
        await new Promise(r => setTimeout(r, 150));
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
    onProjectsClick()
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
    blocking = false
}

onPageLoad()

