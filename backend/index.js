express = require('express')

app = express()

PORT = 8000

app.listen(PORT, () => {
    console.log(`started backend at ${PORT}`)
})
