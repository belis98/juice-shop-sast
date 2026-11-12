const express = require('express')

const router = express.Router()

router.get('/demo', (req, res) => {
    const expression = String(req.query.expression || '')

    const allowedValues: Record<string, number> = {
        '2': 2,
        '3': 3
    }

    const result = allowedValues[expression]

    if (typeof result !== 'number') {
        res.status(400).json({ error: 'Valor no permitido' })
        return
    }

    res.json({ result })
})

module.exports = router
