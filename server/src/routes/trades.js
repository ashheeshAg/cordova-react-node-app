
const trade = (app, state) => {
  app.post('/trade', (req, res) => {
    res.status(200)
    var trades = state.trades;
    var io = req.app.get('socketio');
    trades.push(req.trade)
    res.type('application/json')
    res.status(200)
    res.json({
      heart: (100 -req.body.heart),
      soul: (100- req.body.soul),
      consciousness: (100 - req.body.consciousness)
    })
    io.emit('hi', {'message': req.body});
  })
}

export default trade
