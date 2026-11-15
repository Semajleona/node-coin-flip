document.querySelector('#flip').addEventListener('click', flipCoin)

function flipCoin() {

    const choice = document.querySelector('#game').value.trim().toLowerCase()

    if (choice !== 'heads' && choice !== 'tails') {
        document.querySelector('#coinResult').textContent = 'Please enter heads or tails'
        document.querySelector('#gameResult').textContent = ''
        return
    }

    fetch('/api?choice=' + choice))
        .then(response => {
            if (!response.ok) {
                throw new Error('Coin flip failed')
            }
            return response.json()
        })
        .then(data => {

            document.querySelector('#coinResult').textContent = data.theFlip

            document.querySelector('#gameResult').textContent = data.flipResult

        })
        .catch(error => {
            console.error(error)
            document.querySelector('#coinResult').textContent = 'Something went wrong. Try again.'
            document.querySelector('#gameResult').textContent = ''
        })

}
