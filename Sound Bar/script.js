// create array with sound names
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// creating button for each sound by looping thru array
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

// displaying buttons
    document.getElementById('buttons').
    appendChild(btn)
})