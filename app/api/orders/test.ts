const categories = [
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NDE1OTM3',
    name: 'Home & Living',
    parent: null,
    path: 'HOME_LIVING',
    rawPath: 'home-living',
    depth: 0,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1OTU2NjA5',
    name: 'Candles',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NDE1OTM3',
    },
    path: 'HOME_LIVING_CANDLES',
    rawPath: 'home-living/candles',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2MDcxMjk3',
    name: 'Wax Candles',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1OTU2NjA5',
    },
    path: 'HOME_LIVING_CANDLES_WAX_CANDLES',
    rawPath: 'home-living/candles/wax-candles',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA4NjEzNDQwNzE2OQ',
    name: 'Tealights',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2MDcxMjk3',
    },
    path: 'HOME_LIVING_CANDLES_WAX_CANDLES_TEALIGHT',
    rawPath: 'home-living/candles/wax-candles/tealight',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA4NjQwMzQxNjA2NQ',
    name: 'Dinner Candles',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2MDcxMjk3',
    },
    path: 'HOME_LIVING_CANDLES_WAX_CANDLES_DINNER_CANDLES',
    rawPath: 'home-living/candles/wax-candles/dinner-candles',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2MTg1OTg1',
    name: 'Scented Candles',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2MDcxMjk3',
    },
    path: 'HOME_LIVING_CANDLES_WAX_CANDLES_SCENTED_CANDLES',
    rawPath: 'home-living/candles/wax-candles/scented-candles',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA5MDI2MzU4NDc2OQ',
    name: 'Pillar Candles',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2MDcxMjk3',
    },
    path: 'HOME_LIVING_CANDLES_WAX_CANDLES_PILLAR_CANDLES',
    rawPath: 'home-living/candles/wax-candles/pillar-candles',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjI3NzE4MDI0MTcwNzAwOQ',
    name: 'Floating Candles',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2MDcxMjk3',
    },
    path: 'HOME_LIVING_CANDLES_WAX_CANDLES_FLOATING_CANDLES',
    rawPath: 'home-living/candles/wax-candles/floating-candles',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjM3MTkwNDc1NDMwMjk3Nw',
    name: 'Grave Candles',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2MDcxMjk3',
    },
    path: 'HOME_LIVING_CANDLES_WAX_CANDLES_GRAVE_CANDLES',
    rawPath: 'home-living/candles/wax-candles/grave-candles',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2MzE3MDU3',
    name: 'Candle Holders',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1OTU2NjA5',
    },
    path: 'HOME_LIVING_CANDLES_CANDLE_HOLDERS',
    rawPath: 'home-living/candles/candle-holders',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA5OTExMTYzMjg5Nw',
    name: 'Candelabra',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2MzE3MDU3',
    },
    path: 'HOME_LIVING_CANDLES_CANDLE_HOLDERS_CANDELABRA',
    rawPath: 'home-living/candles/candle-holders/candelabra',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA5OTQzMTk4OTI0OQ',
    name: 'Tea Light Holders',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2MzE3MDU3',
    },
    path: 'HOME_LIVING_CANDLES_CANDLE_HOLDERS_TEA_LIGHT_HOLDERS',
    rawPath: 'home-living/candles/candle-holders/tea-light-holders',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA5OTgyODAzOTY4MQ',
    name: 'Lanterns',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2MzE3MDU3',
    },
    path: 'HOME_LIVING_CANDLES_CANDLE_HOLDERS_LANTERNS',
    rawPath: 'home-living/candles/candle-holders/lanterns',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjEwMDQ3NDM3MjA5Nw',
    name: 'Candle Plates',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2MzE3MDU3',
    },
    path: 'HOME_LIVING_CANDLES_CANDLE_HOLDERS_CANDLE_PLATES',
    rawPath: 'home-living/candles/candle-holders/candle-plates',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA5Mzc4MjkwMDczOA',
    name: 'LED Candles',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1OTU2NjA5',
    },
    path: 'HOME_LIVING_CANDLES_LED_CANDLES',
    rawPath: 'home-living/candles/led-candles',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA5NTUwMTI3MTA0MQ',
    name: 'Candle Tools',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1OTU2NjA5',
    },
    path: 'HOME_LIVING_CANDLES_CANDLE_TOOLS',
    rawPath: 'home-living/candles/candle-tools',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA5NjU3NDk2MzcxMw',
    name: 'Matches',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjA5NTUwMTI3MTA0MQ',
    },
    path: 'HOME_LIVING_CANDLES_CANDLE_TOOLS_MATCHES',
    rawPath: 'home-living/candles/candle-tools/matches',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA5NjkwNTk2OTY2NQ',
    name: 'Candle Snuffer',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjA5NTUwMTI3MTA0MQ',
    },
    path: 'HOME_LIVING_CANDLES_CANDLE_TOOLS_CANDLE_SNUFFER',
    rawPath: 'home-living/candles/candle-tools/candle-snuffer',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA5NzgxNTcyNDAzMw',
    name: 'Wick Trimmers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjA5NTUwMTI3MTA0MQ',
    },
    path: 'HOME_LIVING_CANDLES_CANDLE_TOOLS_WICK_TRIMMERS',
    rawPath: 'home-living/candles/candle-tools/wick-trimmers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA5ODEzMjY1NjEyOQ',
    name: 'Lighters',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjA5NTUwMTI3MTA0MQ',
    },
    path: 'HOME_LIVING_CANDLES_CANDLE_TOOLS_LIGHTERS',
    rawPath: 'home-living/candles/candle-tools/lighters',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY5OTU0MzA1',
    name: 'Home Decoration',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NDE1OTM3',
    },
    path: 'HOME_LIVING_HOME_DECORATION',
    rawPath: 'home-living/home-decoration',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwMzQ3NTIx',
    name: 'Decorative Objects',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY5OTU0MzA1',
    },
    path: 'HOME_LIVING_HOME_DECORATION_DECORATIVE_OBJECTS',
    rawPath: 'home-living/home-decoration/decorative-objects',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI1NTQ2NjY4NDQxNw',
    name: 'Statues',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwMzQ3NTIx',
    },
    path: 'HOME_LIVING_HOME_DECORATION_DECORATIVE_OBJECTS_STATUES',
    rawPath: 'home-living/home-decoration/decorative-objects/statues',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI1NzAwNzM4NjYyNQ',
    name: 'Decorative Trays',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwMzQ3NTIx',
    },
    path: 'HOME_LIVING_HOME_DECORATION_DECORATIVE_OBJECTS_DECORATIVE_TRAYS',
    rawPath: 'home-living/home-decoration/decorative-objects/decorative-trays',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI1Nzc0Nzc3OTU4NQ',
    name: 'Magnets',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwMzQ3NTIx',
    },
    path: 'HOME_LIVING_HOME_DECORATION_DECORATIVE_OBJECTS_MAGNETS',
    rawPath: 'home-living/home-decoration/decorative-objects/magnets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI1ODEzMjE0ODIyNQ',
    name: 'Decorative Bowls',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwMzQ3NTIx',
    },
    path: 'HOME_LIVING_HOME_DECORATION_DECORATIVE_OBJECTS_DECORATIVE_BOWLS',
    rawPath: 'home-living/home-decoration/decorative-objects/decorative-bowls',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI1ODQ2NjA3MDUyOQ',
    name: 'Glass Jars',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwMzQ3NTIx',
    },
    path: 'HOME_LIVING_HOME_DECORATION_DECORATIVE_OBJECTS_GLASS_JARS',
    rawPath: 'home-living/home-decoration/decorative-objects/glass-jars',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI2MDQyMzgxMTA3Mw',
    name: 'Snow Globes',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwMzQ3NTIx',
    },
    path: 'HOME_LIVING_HOME_DECORATION_DECORATIVE_OBJECTS_SNOW_GLOBES',
    rawPath: 'home-living/home-decoration/decorative-objects/snow-globes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjU5MDE0NjEyMTg0MjY4OQ',
    name: 'Dreamcatcher',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwMzQ3NTIx',
    },
    path: 'HOME_LIVING_HOME_DECORATION_DECORATIVE_OBJECTS_DREAMCATCHER',
    rawPath: 'home-living/home-decoration/decorative-objects/dreamcatcher',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjU5MDE1MDE5NzU5MjA2NQ',
    name: 'Artificial Fruit',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwMzQ3NTIx',
    },
    path: 'HOME_LIVING_HOME_DECORATION_DECORATIVE_OBJECTS_ARTIFICIAL_FRUIT',
    rawPath: 'home-living/home-decoration/decorative-objects/artificial-fruit',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjU5MDE1MjYxNTI4MDY0MQ',
    name: 'Hourglasses',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwMzQ3NTIx',
    },
    path: 'HOME_LIVING_HOME_DECORATION_DECORATIVE_OBJECTS_HOURGLASSES',
    rawPath: 'home-living/home-decoration/decorative-objects/hourglasses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjczMDE1MjU3NDk0MzIzMw',
    name: 'Door knobs',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwMzQ3NTIx',
    },
    path: 'HOME_LIVING_HOME_DECORATION_DECORATIVE_OBJECTS_DOOR_KNOBS',
    rawPath: 'home-living/home-decoration/decorative-objects/door-knobs',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDMzNDkyOTI4MTAyNQ',
    name: 'Wall Art',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY5OTU0MzA1',
    },
    path: 'HOME_LIVING_HOME_DECORATION_WALL_ART',
    rawPath: 'home-living/home-decoration/wall-art',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjAzODcwODE2NjY1Nw',
    name: 'Wall Circles',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDMzNDkyOTI4MTAyNQ',
    },
    path: 'HOME_LIVING_HOME_DECORATION_WALL_ART_WALL_CIRCLES',
    rawPath: 'home-living/home-decoration/wall-art/wall-circles',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA0MDAzMTk5Mzg1Nw',
    name: 'Wall Stickers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDMzNDkyOTI4MTAyNQ',
    },
    path: 'HOME_LIVING_HOME_DECORATION_WALL_ART_WALL_STICKERS',
    rawPath: 'home-living/home-decoration/wall-art/wall-stickers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA0MDk0NTgxMTQ1Nw',
    name: 'Posters',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDMzNDkyOTI4MTAyNQ',
    },
    path: 'HOME_LIVING_HOME_DECORATION_WALL_ART_POSTERS',
    rawPath: 'home-living/home-decoration/wall-art/posters',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA0Mzc0MzI0ODM4NQ',
    name: 'Paintings',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDMzNDkyOTI4MTAyNQ',
    },
    path: 'HOME_LIVING_HOME_DECORATION_WALL_ART_PAINTINGS',
    rawPath: 'home-living/home-decoration/wall-art/paintings',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTk2MTE2NTI5NjgyODQxNw',
    name: 'Relief Images',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDMzNDkyOTI4MTAyNQ',
    },
    path: 'HOME_LIVING_HOME_DECORATION_WALL_ART_RELIEF_IMAGES',
    rawPath: 'home-living/home-decoration/wall-art/relief-images',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6Mjc0NDA1NDU1Njg4NDk5Mw',
    name: 'Wall Signs',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDMzNDkyOTI4MTAyNQ',
    },
    path: 'HOME_LIVING_HOME_DECORATION_WALL_ART_WALL_SIGNS',
    rawPath: 'home-living/home-decoration/wall-art/wall-signs',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MzAzNjAxMTY3MjczMTY0OQ',
    name: 'Tiles',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDMzNDkyOTI4MTAyNQ',
    },
    path: 'HOME_LIVING_HOME_DECORATION_WALL_ART_TILES',
    rawPath: 'home-living/home-decoration/wall-art/tiles',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2Njg5MzY5NTI1NDUyOQ',
    name: 'Mirrors',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY5OTU0MzA1',
    },
    path: 'HOME_LIVING_HOME_DECORATION_MIRRORS',
    rawPath: 'home-living/home-decoration/mirrors',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA0NjM0NDUxOTY4MQ',
    name: 'Wall Mirrors',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2Njg5MzY5NTI1NDUyOQ',
    },
    path: 'HOME_LIVING_HOME_DECORATION_MIRRORS_WALL_MIRRORS',
    rawPath: 'home-living/home-decoration/mirrors/wall-mirrors',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA1NDAxNTAxNjk2MQ',
    name: 'Standing Mirrors',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2Njg5MzY5NTI1NDUyOQ',
    },
    path: 'HOME_LIVING_HOME_DECORATION_MIRRORS_STANDING_MIRROS',
    rawPath: 'home-living/home-decoration/mirrors/standing-mirros',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA1NTA3NTE5MjgzMw',
    name: 'Decorative Mirrors',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2Njg5MzY5NTI1NDUyOQ',
    },
    path: 'HOME_LIVING_HOME_DECORATION_MIRRORS_DECORATIVE_MIRRORS',
    rawPath: 'home-living/home-decoration/mirrors/decorative-mirrors',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwMjMyODMz',
    name: 'Clocks',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY5OTU0MzA1',
    },
    path: 'HOME_LIVING_HOME_DECORATION_CLOCKS',
    rawPath: 'home-living/home-decoration/clocks',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA1NjcwMDc2NDE2MQ',
    name: 'Wall Clocks',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwMjMyODMz',
    },
    path: 'HOME_LIVING_HOME_DECORATION_CLOCKS_WALL_CLOCKS',
    rawPath: 'home-living/home-decoration/clocks/wall-clocks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA1NzA3OTU5NTAwOQ',
    name: 'Table Clocks',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwMjMyODMz',
    },
    path: 'HOME_LIVING_HOME_DECORATION_CLOCKS_TABLE_CLOCKS',
    rawPath: 'home-living/home-decoration/clocks/table-clocks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA1NzczNjA4NTUwNQ',
    name: 'Alarm Clocks',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwMjMyODMz',
    },
    path: 'HOME_LIVING_HOME_DECORATION_CLOCKS_ALARM_CLOCKS',
    rawPath: 'home-living/home-decoration/clocks/alarm-clocks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA1ODE3MDQ3NDQ5Nw',
    name: 'Flip Clocks',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwMjMyODMz',
    },
    path: 'HOME_LIVING_HOME_DECORATION_CLOCKS_FLIP_CLOCKS',
    rawPath: 'home-living/home-decoration/clocks/flip-clocks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2Njg5MjQwMDgzNjYwOQ',
    name: 'Wallpaper',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY5OTU0MzA1',
    },
    path: 'HOME_LIVING_HOME_DECORATION_WALLPAPER',
    rawPath: 'home-living/home-decoration/wallpaper',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDI0MjIwMTM0NjA0OQ',
    name: 'Curtains',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY5OTU0MzA1',
    },
    path: 'HOME_LIVING_HOME_DECORATION_CURTAINS',
    rawPath: 'home-living/home-decoration/curtains',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDI0Mjg0OTQ5NzA4OQ',
    name: 'Frames',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY5OTU0MzA1',
    },
    path: 'HOME_LIVING_HOME_DECORATION_FRAMES',
    rawPath: 'home-living/home-decoration/frames',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDI0MzU4NDQ5OTcxMw',
    name: 'Bookends',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY5OTU0MzA1',
    },
    path: 'HOME_LIVING_HOME_DECORATION_BOOKENDS',
    rawPath: 'home-living/home-decoration/bookends',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjIyNDc0MTcyNzQ1MzE4NQ',
    name: 'Door Stoppers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY5OTU0MzA1',
    },
    path: 'HOME_LIVING_HOME_DECORATION_DOOR_STOPPERS',
    rawPath: 'home-living/home-decoration/door-stoppers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQxMTU1Njk1MzYyMDQ4MQ',
    name: 'Table Fireplaces',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY5OTU0MzA1',
    },
    path: 'HOME_LIVING_HOME_DECORATION_TABLE_FIREPLACES',
    rawPath: 'home-living/home-decoration/table-fireplaces',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ4MDY5ODc2MTM3OTg0MQ',
    name: 'Book Stands',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY5OTU0MzA1',
    },
    path: 'HOME_LIVING_HOME_DECORATION_BOOK_STANDS',
    rawPath: 'home-living/home-decoration/book-stands',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4NzI1NTA1',
    name: 'Lighting',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NDE1OTM3',
    },
    path: 'HOME_LIVING_LIGHTING',
    rawPath: 'home-living/lighting',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4OTg3NjQ5',
    name: 'Lamp Shades',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4NzI1NTA1',
    },
    path: 'HOME_LIVING_LIGHTING_LAMP_SHADES',
    rawPath: 'home-living/lighting/lamp-shades',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY5MTAyMzM3',
    name: 'Light Bulbs',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4NzI1NTA1',
    },
    path: 'HOME_LIVING_LIGHTING_LIGHT_BULBS',
    rawPath: 'home-living/lighting/light-bulbs',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY5MjMzNDA5',
    name: 'Pendant Lighting',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4NzI1NTA1',
    },
    path: 'HOME_LIVING_LIGHTING_PENDANT_LIGHTING',
    rawPath: 'home-living/lighting/pendant-lighting',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6ODY5ODk3NTYyMjQzMDcz',
    name: 'Wall Lights',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4NzI1NTA1',
    },
    path: 'HOME_LIVING_LIGHTING_WALL_LIGHTS',
    rawPath: 'home-living/lighting/wall-lights',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NTU1MjU0NjI2NzEzNw',
    name: 'String Lights',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4NzI1NTA1',
    },
    path: 'HOME_LIVING_LIGHTING_STRING_LIGHTS',
    rawPath: 'home-living/lighting/string-lights',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjE3MDI4NDA4MTE1Mw',
    name: 'Standing Lamps',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4NzI1NTA1',
    },
    path: 'HOME_LIVING_LIGHTING_LAMPS',
    rawPath: 'home-living/lighting/lamps',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4ODU2NTc3',
    name: 'Table Lamps',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNjE3MDI4NDA4MTE1Mw',
    },
    path: 'HOME_LIVING_LIGHTING_LAMPS_TABLE_LAMPS',
    rawPath: 'home-living/lighting/lamps/table-lamps',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY5MzQ4MDk3',
    name: 'Floor Lamps',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNjE3MDI4NDA4MTE1Mw',
    },
    path: 'HOME_LIVING_LIGHTING_LAMPS_FLOOR_LAMPS',
    rawPath: 'home-living/lighting/lamps/floor-lamps',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjE3MjEzNzA0NjAxNw',
    name: 'Desk Lamps',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNjE3MDI4NDA4MTE1Mw',
    },
    path: 'HOME_LIVING_LIGHTING_LAMPS_DESK_LAMPS',
    rawPath: 'home-living/lighting/lamps/desk-lamps',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIyMDI3OTM5MDIwOQ',
    name: 'Ceiling Lights',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4NzI1NTA1',
    },
    path: 'HOME_LIVING_LIGHTING_CEILING_LIGHTS',
    rawPath: 'home-living/lighting/ceiling-lights',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIyMDkwODIyNDUxMw',
    name: 'Outdoor Lighting',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4NzI1NTA1',
    },
    path: 'HOME_LIVING_LIGHTING_OUTDOOR_LIGHTING',
    rawPath: 'home-living/lighting/outdoor-lighting',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwNTkzMjgx',
    name: 'Furniture',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NDE1OTM3',
    },
    path: 'HOME_LIVING_FURNITURE',
    rawPath: 'home-living/furniture',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDEzNzc5NjU4MzQyNQ',
    name: 'Chairs',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwNTkzMjgx',
    },
    path: 'HOME_LIVING_FURNITURE_CHAIRS',
    rawPath: 'home-living/furniture/chairs',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIyMzg5MDUzODQ5Nw',
    name: 'Armchairs',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDEzNzc5NjU4MzQyNQ',
    },
    path: 'HOME_LIVING_FURNITURE_CHAIRS_ARMCHAIRS',
    rawPath: 'home-living/furniture/chairs/armchairs',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIyNDI4ODA2MzQ4OQ',
    name: 'Dining Chairs',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDEzNzc5NjU4MzQyNQ',
    },
    path: 'HOME_LIVING_FURNITURE_CHAIRS_DINING_CHAIRS',
    rawPath: 'home-living/furniture/chairs/dining-chairs',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIyNDcxNjE3NzQwOQ',
    name: 'Bar Stools',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDEzNzc5NjU4MzQyNQ',
    },
    path: 'HOME_LIVING_FURNITURE_CHAIRS_BAR_STOOLS',
    rawPath: 'home-living/furniture/chairs/bar-stools',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIyNTA5MTU2NzYxNw',
    name: 'Office Chairs',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDEzNzc5NjU4MzQyNQ',
    },
    path: 'HOME_LIVING_FURNITURE_CHAIRS_OFFICE_CHAIRS',
    rawPath: 'home-living/furniture/chairs/office-chairs',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDEzODQ2OTA0ODMyMQ',
    name: 'Stools',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDEzNzc5NjU4MzQyNQ',
    },
    path: 'HOME_LIVING_FURNITURE_CHAIRS_STOOLS',
    rawPath: 'home-living/furniture/chairs/stools',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkyODYzOTM3MTY3MzYwMQ',
    name: 'Bean Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDEzNzc5NjU4MzQyNQ',
    },
    path: 'HOME_LIVING_FURNITURE_CHAIRS_BEAN_BAGS',
    rawPath: 'home-living/furniture/chairs/bean-bags',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjM3MTkxMTYwOTA0MDg5Nw',
    name: 'Cocktail Chairs',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDEzNzc5NjU4MzQyNQ',
    },
    path: 'HOME_LIVING_FURNITURE_CHAIRS_COCKTAIL_CHAIRS',
    rawPath: 'home-living/furniture/chairs/cocktail-chairs',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDEzOTkyNTExMDc4NQ',
    name: 'Sofas',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwNTkzMjgx',
    },
    path: 'HOME_LIVING_FURNITURE_SOFAS',
    rawPath: 'home-living/furniture/sofas',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDE0Mzg5NjAwMjU2MQ',
    name: 'Benches',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwNTkzMjgx',
    },
    path: 'HOME_LIVING_FURNITURE_BENCHES',
    rawPath: 'home-living/furniture/benches',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDE0NDQ0MTU0MDYwOQ',
    name: 'Tables',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwNTkzMjgx',
    },
    path: 'HOME_LIVING_FURNITURE_TABLES',
    rawPath: 'home-living/furniture/tables',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDE0NzM5OTI5NDk3Nw',
    name: 'Desks',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDE0NDQ0MTU0MDYwOQ',
    },
    path: 'HOME_LIVING_FURNITURE_TABLES_DESKS',
    rawPath: 'home-living/furniture/tables/desks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIyNjc4NDgwNDg2NQ',
    name: 'Dining Tables',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDE0NDQ0MTU0MDYwOQ',
    },
    path: 'HOME_LIVING_FURNITURE_TABLES_DINING_TABLES',
    rawPath: 'home-living/furniture/tables/dining-tables',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIyNzE4NjgxOTA3Mw',
    name: 'Coffee Tables',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDE0NDQ0MTU0MDYwOQ',
    },
    path: 'HOME_LIVING_FURNITURE_TABLES_COFFEE_TABLES',
    rawPath: 'home-living/furniture/tables/coffee-tables',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIyNzYyNjE3MjQxNw',
    name: 'Bedside Tables',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDE0NDQ0MTU0MDYwOQ',
    },
    path: 'HOME_LIVING_FURNITURE_TABLES_BEDSIDE_TABLES',
    rawPath: 'home-living/furniture/tables/bedside-tables',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIyODA3MTI0Mzc3Nw',
    name: 'Dressing Tables',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDE0NDQ0MTU0MDYwOQ',
    },
    path: 'HOME_LIVING_FURNITURE_TABLES_DRESSING_TABLES',
    rawPath: 'home-living/furniture/tables/dressing-tables',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIzMDExMDgwNjAxNw',
    name: 'Console Table',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDE0NDQ0MTU0MDYwOQ',
    },
    path: 'HOME_LIVING_FURNITURE_TABLES_CONSOLE_TABLE',
    rawPath: 'home-living/furniture/tables/console-table',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDE0ODc5Njg4Mjk0NQ',
    name: 'Side Tables',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDE0NDQ0MTU0MDYwOQ',
    },
    path: 'HOME_LIVING_FURNITURE_TABLES_SIDE_TABLES',
    rawPath: 'home-living/furniture/tables/side-tables',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDE1MDE0MjI4Nzg3Mw',
    name: 'Outdoor Furniture',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwNTkzMjgx',
    },
    path: 'HOME_LIVING_FURNITURE_OUTDOOR_FURNITURE',
    rawPath: 'home-living/furniture/outdoor-furniture',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIzMjYxNDAwMjY4OQ',
    name: 'Garden Chairs',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDE1MDE0MjI4Nzg3Mw',
    },
    path: 'HOME_LIVING_FURNITURE_OUTDOOR_FURNITURE_GARDEN_CHAIRS',
    rawPath: 'home-living/furniture/outdoor-furniture/garden-chairs',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIzMjk2NDU4NzUyMQ',
    name: 'Garden Tables',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDE1MDE0MjI4Nzg3Mw',
    },
    path: 'HOME_LIVING_FURNITURE_OUTDOOR_FURNITURE_GARDEN_TABLES',
    rawPath: 'home-living/furniture/outdoor-furniture/garden-tables',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIzMzI4NDk5MzAyNQ',
    name: 'Garden Sets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDE1MDE0MjI4Nzg3Mw',
    },
    path: 'HOME_LIVING_FURNITURE_OUTDOOR_FURNITURE_GARDEN_SETS',
    rawPath: 'home-living/furniture/outdoor-furniture/garden-sets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIzMzYxMDI5NzM0NQ',
    name: 'Hammocks',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDE1MDE0MjI4Nzg3Mw',
    },
    path: 'HOME_LIVING_FURNITURE_OUTDOOR_FURNITURE_HAMMOCKS',
    rawPath: 'home-living/furniture/outdoor-furniture/hammocks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIzMzkxMjMzNjM4NQ',
    name: 'Garden Sofas',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDE1MDE0MjI4Nzg3Mw',
    },
    path: 'HOME_LIVING_FURNITURE_OUTDOOR_FURNITURE_GARDEN_SOFAS',
    rawPath: 'home-living/furniture/outdoor-furniture/garden-sofas',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDE0OTM2ODk5NTg0MQ',
    name: 'Cupboards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwNTkzMjgx',
    },
    path: 'HOME_LIVING_FURNITURE_CUPBOARDS',
    rawPath: 'home-living/furniture/cupboards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIzNDkzOTk1NzI0OQ',
    name: 'Sideboards',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDE0OTM2ODk5NTg0MQ',
    },
    path: 'HOME_LIVING_FURNITURE_CUPBOARDS_SIDEBOARDS',
    rawPath: 'home-living/furniture/cupboards/sideboards',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIzNTI1MTAwNzQ4OQ',
    name: 'Wardrobes',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDE0OTM2ODk5NTg0MQ',
    },
    path: 'HOME_LIVING_FURNITURE_CUPBOARDS_WARDROBES',
    rawPath: 'home-living/furniture/cupboards/wardrobes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIzNTYzNzcwMjY1Nw',
    name: 'Cabinets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDE0OTM2ODk5NTg0MQ',
    },
    path: 'HOME_LIVING_FURNITURE_CUPBOARDS_CABINETS',
    rawPath: 'home-living/furniture/cupboards/cabinets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjgzMDQ0MTU2MzA3ODY1Nw',
    name: 'Bathroom Cabinet',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjIzNTYzNzcwMjY1Nw',
    },
    path: 'HOME_LIVING_FURNITURE_CUPBOARDS_CABINETS_BATHROOM_CABINET',
    rawPath: 'home-living/furniture/cupboards/cabinets/bathroom-cabinet',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIzNTkyODE0MTgyNQ',
    name: 'Drawers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDE0OTM2ODk5NTg0MQ',
    },
    path: 'HOME_LIVING_FURNITURE_CUPBOARDS_DRAWERS',
    rawPath: 'home-living/furniture/cupboards/drawers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIzNjIzMjk2NjE0NQ',
    name: 'TV Stands',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDE0OTM2ODk5NTg0MQ',
    },
    path: 'HOME_LIVING_FURNITURE_CUPBOARDS_TV_STANDS',
    rawPath: 'home-living/furniture/cupboards/tv-stands',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIzNjU3NzY1MjczNw',
    name: 'Bookcase',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDE0OTM2ODk5NTg0MQ',
    },
    path: 'HOME_LIVING_FURNITURE_CUPBOARDS_BOOKCASE',
    rawPath: 'home-living/furniture/cupboards/bookcase',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjIzNjkxODk4MDYwOQ',
    name: 'Wall Shelves',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDE0OTM2ODk5NTg0MQ',
    },
    path: 'HOME_LIVING_FURNITURE_CUPBOARDS_WALL_SHELVES',
    rawPath: 'home-living/furniture/cupboards/wall-shelves',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDIyNjc0MTI4ODk2MQ',
    name: 'Shelving Units',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDE0OTM2ODk5NTg0MQ',
    },
    path: 'HOME_LIVING_FURNITURE_CUPBOARDS_SHELVING_UNITS',
    rawPath: 'home-living/furniture/cupboards/shelving-units',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDEzOTE2ODY0NTEyMQ',
    name: 'Ottomans & Footstools',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwNTkzMjgx',
    },
    path: 'HOME_LIVING_FURNITURE_OTTOMANS_FOOTSTOOLS',
    rawPath: 'home-living/furniture/ottomans-footstools',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjE1NTIzMDQ0NTU2OQ',
    name: 'Ottomans',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDEzOTE2ODY0NTEyMQ',
    },
    path: 'HOME_LIVING_FURNITURE_OTTOMANS_FOOTSTOOLS_OTTOMANS',
    rawPath: 'home-living/furniture/ottomans-footstools/ottomans',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjE1NTY2MTI3OTIzMw',
    name: 'Footstools',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDEzOTE2ODY0NTEyMQ',
    },
    path: 'HOME_LIVING_FURNITURE_OTTOMANS_FOOTSTOOLS_FOOTSTOOLS',
    rawPath: 'home-living/furniture/ottomans-footstools/footstools',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTUxMzg5OTA3MzczMjYwOQ',
    name: 'Beds',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwNTkzMjgx',
    },
    path: 'HOME_LIVING_FURNITURE_BEDS',
    rawPath: 'home-living/furniture/beds',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxMzQxNDMzNDIxODI0MQ',
    name: 'Seasonal Decoration',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NDE1OTM3',
    },
    path: 'HOME_LIVING_SEASONAL_DECORATION',
    rawPath: 'home-living/seasonal-decoration',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNzcyOTE0MDMxODIwOQ',
    name: 'Christmas Decoration',
    parent: {
      id: 'Q2F0ZWdvcnk6MTQxMzQxNDMzNDIxODI0MQ',
    },
    path: 'HOME_LIVING_SEASONAL_DECORATION_CHRISTMAS_DECORATIONS',
    rawPath: 'home-living/seasonal-decoration/christmas-decorations',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxMzQxNDk5NDM2MjM2OQ',
    name: 'Ornaments',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNzcyOTE0MDMxODIwOQ',
    },
    path: 'HOME_LIVING_SEASONAL_DECORATION_CHRISTMAS_DECORATIONS_ORNAMENTS',
    rawPath: 'home-living/seasonal-decoration/christmas-decorations/ornaments',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxMzQxOTgxMzMwNjM2OQ',
    name: 'Nativity Scenes',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNzcyOTE0MDMxODIwOQ',
    },
    path: 'HOME_LIVING_SEASONAL_DECORATION_CHRISTMAS_DECORATIONS_NATIVITY_SCENES',
    rawPath:
      'home-living/seasonal-decoration/christmas-decorations/nativity-scenes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxMzQyMDUxMDI0ODk2MQ',
    name: 'Christmas Wreaths',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNzcyOTE0MDMxODIwOQ',
    },
    path: 'HOME_LIVING_SEASONAL_DECORATION_CHRISTMAS_DECORATIONS_CHRISTMAS_WREATHS',
    rawPath:
      'home-living/seasonal-decoration/christmas-decorations/christmas-wreaths',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNzczMzQ0Njg4NTM3Nw',
    name: 'Advents',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNzcyOTE0MDMxODIwOQ',
    },
    path: 'HOME_LIVING_SEASONAL_DECORATION_CHRISTMAS_DECORATIONS_ADVENTS',
    rawPath: 'home-living/seasonal-decoration/christmas-decorations/advents',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNzczNDA3MDA5OTk2OQ',
    name: 'Christmas Trees',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNzcyOTE0MDMxODIwOQ',
    },
    path: 'HOME_LIVING_SEASONAL_DECORATION_CHRISTMAS_DECORATIONS_CHRISTMAS_TREES',
    rawPath:
      'home-living/seasonal-decoration/christmas-decorations/christmas-trees',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA2OTE0NzMxMTg2NTg1Nw',
    name: 'Christmas Stockings',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNzcyOTE0MDMxODIwOQ',
    },
    path: 'HOME_LIVING_SEASONAL_DECORATION_CHRISTMAS_DECORATIONS_CHRISTMAS_STOCKINGS',
    rawPath:
      'home-living/seasonal-decoration/christmas-decorations/christmas-stockings',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA2OTE3Mzk4MDE4NDU3Nw',
    name: 'Christmas Lighting',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNzcyOTE0MDMxODIwOQ',
    },
    path: 'HOME_LIVING_SEASONAL_DECORATION_CHRISTMAS_DECORATIONS_CHRISTMAS_LIGHTING',
    rawPath:
      'home-living/seasonal-decoration/christmas-decorations/christmas-lighting',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA3MDIzMzUxMjA1MDY4OQ',
    name: 'Standing Decorations',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNzcyOTE0MDMxODIwOQ',
    },
    path: 'HOME_LIVING_SEASONAL_DECORATION_CHRISTMAS_DECORATIONS_STANDING_DECORATIONS',
    rawPath:
      'home-living/seasonal-decoration/christmas-decorations/standing-decorations',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNzczNzIwMTU5MDI3Mw',
    name: 'Easter Decoration',
    parent: {
      id: 'Q2F0ZWdvcnk6MTQxMzQxNDMzNDIxODI0MQ',
    },
    path: 'HOME_LIVING_SEASONAL_DECORATION_EASTER_DECORATIONS',
    rawPath: 'home-living/seasonal-decoration/easter-decorations',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NTYzMzkz',
    name: 'Home Textiles',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NDE1OTM3',
    },
    path: 'HOME_LIVING_HOME_TEXTILES',
    rawPath: 'home-living/home-textiles',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1Njk0NDY1',
    name: 'Cushions',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NTYzMzkz',
    },
    path: 'HOME_LIVING_HOME_TEXTILES_CUSHIONS',
    rawPath: 'home-living/home-textiles/cushions',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1ODI1NTM3',
    name: 'Throws',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NTYzMzkz',
    },
    path: 'HOME_LIVING_HOME_TEXTILES_THROWS',
    rawPath: 'home-living/home-textiles/throws',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjE2MDI2NjkwMzU1Mw',
    name: 'Cushion Covers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NTYzMzkz',
    },
    path: 'HOME_LIVING_HOME_TEXTILES_CUSHION_COVERS',
    rawPath: 'home-living/home-textiles/cushion-covers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwNDc4NTkz',
    name: 'Vases',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NDE1OTM3',
    },
    path: 'HOME_LIVING_VASES',
    rawPath: 'home-living/vases',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MjUwMzY5',
    name: 'Plants & Pots',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NDE1OTM3',
    },
    path: 'HOME_LIVING_PLANTS_POTS',
    rawPath: 'home-living/plants-pots',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDI0MTAxNzg5Njk2MQ',
    name: 'Artificial Plants',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MjUwMzY5',
    },
    path: 'HOME_LIVING_PLANTS_POTS_ARTIFICIAL_PLANTS',
    rawPath: 'home-living/plants-pots/artificial-plants',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDE1MzY0Mjg0NDE2MQ',
    name: 'Plant Stands',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MjUwMzY5',
    },
    path: 'HOME_LIVING_PLANTS_POTS_PLANT_STANDS',
    rawPath: 'home-living/plants-pots/plant-stands',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MzY1MDU3',
    name: 'Plants',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MjUwMzY5',
    },
    path: 'HOME_LIVING_PLANTS_POTS_PLANTS',
    rawPath: 'home-living/plants-pots/plants',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTc0MDQ1NzUyOTM3Njc2OQ',
    name: 'Cacti',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MzY1MDU3',
    },
    path: 'HOME_LIVING_PLANTS_POTS_PLANTS_CACTI',
    rawPath: 'home-living/plants-pots/plants/cacti',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjA0NzYwODYwMjYyNQ',
    name: 'Flowering Plants',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MzY1MDU3',
    },
    path: 'HOME_LIVING_PLANTS_POTS_PLANTS_FLOWERING_PLANTS',
    rawPath: 'home-living/plants-pots/plants/flowering-plants',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjA0ODY5Mzk2MDcwNQ',
    name: 'Herbs',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MzY1MDU3',
    },
    path: 'HOME_LIVING_PLANTS_POTS_PLANTS_HERBS',
    rawPath: 'home-living/plants-pots/plants/herbs',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjA0OTA0ODI0ODMyMQ',
    name: 'Air Plants',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MzY1MDU3',
    },
    path: 'HOME_LIVING_PLANTS_POTS_PLANTS_AIR_PLANTS',
    rawPath: 'home-living/plants-pots/plants/air-plants',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjA0OTQyNTAxNDc4NQ',
    name: 'Bonzai',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MzY1MDU3',
    },
    path: 'HOME_LIVING_PLANTS_POTS_PLANTS_BONZAI',
    rawPath: 'home-living/plants-pots/plants/bonzai',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjA0OTcyMDEyMzM5Mw',
    name: 'Other Plants',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MzY1MDU3',
    },
    path: 'HOME_LIVING_PLANTS_POTS_PLANTS_OTHER_PLANTS',
    rawPath: 'home-living/plants-pots/plants/other-plants',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjA1MjU2OTI1MTg0MQ',
    name: 'Grow Kit',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MzY1MDU3',
    },
    path: 'HOME_LIVING_PLANTS_POTS_PLANTS_GROW_KIT',
    rawPath: 'home-living/plants-pots/plants/grow-kit',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4NDc5NzQ1',
    name: 'Plant Pots',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MjUwMzY5',
    },
    path: 'HOME_LIVING_PLANTS_POTS_PLANT_POTS',
    rawPath: 'home-living/plants-pots/plant-pots',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjA1MDk3MjMzNjEyOQ',
    name: 'Seeds',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MjUwMzY5',
    },
    path: 'HOME_LIVING_PLANTS_POTS_SEEDS',
    rawPath: 'home-living/plants-pots/seeds',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjUxMDc3MDYzMzUyMzIwMQ',
    name: 'Artificial Flowers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MjUwMzY5',
    },
    path: 'HOME_LIVING_PLANTS_POTS_ARTIFICIAL_FLOWERS',
    rawPath: 'home-living/plants-pots/artificial-flowers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4NjEwODE3',
    name: 'Garden',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NDE1OTM3',
    },
    path: 'HOME_LIVING_GARDEN',
    rawPath: 'home-living/garden',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjA1NTYxNzQyOTUwNQ',
    name: 'Garden Decorations',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4NjEwODE3',
    },
    path: 'HOME_LIVING_GARDEN_GARDEN_DECORATIONS',
    rawPath: 'home-living/garden/garden-decorations',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjA1NTk3MTc5OTA0MQ',
    name: 'Wind Chimes',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNjA1NTYxNzQyOTUwNQ',
    },
    path: 'HOME_LIVING_GARDEN_GARDEN_DECORATIONS_WIND_CHIMES',
    rawPath: 'home-living/garden/garden-decorations/wind-chimes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjA1OTI0MzUwMzYxNw',
    name: 'Mailboxes',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNjA1NTYxNzQyOTUwNQ',
    },
    path: 'HOME_LIVING_GARDEN_GARDEN_DECORATIONS_MAILBOX',
    rawPath: 'home-living/garden/garden-decorations/mailbox',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjA2MDQyNjcyMzMyOQ',
    name: 'Wind Spinners',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNjA1NTYxNzQyOTUwNQ',
    },
    path: 'HOME_LIVING_GARDEN_GARDEN_DECORATIONS_WIND_SPINNERS',
    rawPath: 'home-living/garden/garden-decorations/wind-spinners',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjA2MTAzMDQ1NzM0NQ',
    name: 'Outdoor Thermometer',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNjA1NTYxNzQyOTUwNQ',
    },
    path: 'HOME_LIVING_GARDEN_GARDEN_DECORATIONS_OUTDOOR_THERMOMETER',
    rawPath: 'home-living/garden/garden-decorations/outdoor-thermometer',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjA2MzY4NzMwMzE2OQ',
    name: 'Garden Posters',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNjA1NTYxNzQyOTUwNQ',
    },
    path: 'HOME_LIVING_GARDEN_GARDEN_DECORATIONS_GARDEN_POSTERS',
    rawPath: 'home-living/garden/garden-decorations/garden-posters',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjA2NDQ4OTQ2MzgxMA',
    name: 'Bird Feeders',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNjA1NTYxNzQyOTUwNQ',
    },
    path: 'HOME_LIVING_GARDEN_GARDEN_DECORATIONS_BIRD_FEEDERS',
    rawPath: 'home-living/garden/garden-decorations/bird-feeders',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjA2NjAzMDcwNjY4OQ',
    name: 'Fire Pits',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNjA1NTYxNzQyOTUwNQ',
    },
    path: 'HOME_LIVING_GARDEN_GARDEN_DECORATIONS_FIRE_PITS',
    rawPath: 'home-living/garden/garden-decorations/fire-pits',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjA2NjU0NTM5MzY2NQ',
    name: 'Garden Sculptures',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNjA1NTYxNzQyOTUwNQ',
    },
    path: 'HOME_LIVING_GARDEN_GARDEN_DECORATIONS_GARDEN_SCULPTURES',
    rawPath: 'home-living/garden/garden-decorations/garden-sculptures',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ4MDY1MDI4Mjc3ODYyNQ',
    name: 'Bird Houses',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNjA1NTYxNzQyOTUwNQ',
    },
    path: 'HOME_LIVING_GARDEN_GARDEN_DECORATIONS_BIRD_HOUSES',
    rawPath: 'home-living/garden/garden-decorations/bird-houses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjA2NzI5ODE4OTMxMw',
    name: 'Gardening Tools',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4NjEwODE3',
    },
    path: 'HOME_LIVING_GARDEN_GARDENING_TOOLS',
    rawPath: 'home-living/garden/gardening-tools',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjA2NzczODY4OTUzNw',
    name: 'Planters',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4NjEwODE3',
    },
    path: 'HOME_LIVING_GARDEN_PLANTERS',
    rawPath: 'home-living/garden/planters',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjE3NjY5NjY4NjYwODM4NQ',
    name: 'Fertiliser',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4NjEwODE3',
    },
    path: 'HOME_LIVING_GARDEN_FERTILISER',
    rawPath: 'home-living/garden/fertiliser',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQxMTU1MjMyMzkyODA2NQ',
    name: 'Sun Umbrellas',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4NjEwODE3',
    },
    path: 'HOME_LIVING_GARDEN_SUN_UMBRELLAS',
    rawPath: 'home-living/garden/sun-umbrellas',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3MzY1NjMz',
    name: 'Bathroom Products',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NDE1OTM3',
    },
    path: 'HOME_LIVING_BATHROOM_PRODUCTS',
    rawPath: 'home-living/bathroom-products',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3NzU4ODQ5',
    name: 'Bathroom Fabrics',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3MzY1NjMz',
    },
    path: 'HOME_LIVING_BATHROOM_PRODUCTS_BATHROOM_FABRICS',
    rawPath: 'home-living/bathroom-products/bathroom-fabrics',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc4NzY3NDk3MjE2MQ',
    name: 'Bath Towels',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3NzU4ODQ5',
    },
    path: 'HOME_LIVING_BATHROOM_PRODUCTS_BATHROOM_FABRICS_BATH_TOWELS',
    rawPath: 'home-living/bathroom-products/bathroom-fabrics/bath-towels',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc4ODE5NDg1Mjg2Ng',
    name: 'Hand Towels',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3NzU4ODQ5',
    },
    path: 'HOME_LIVING_BATHROOM_PRODUCTS_BATHROOM_FABRICS_HAND_TOWELS',
    rawPath: 'home-living/bathroom-products/bathroom-fabrics/hand-towels',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc4ODU0MDQ3MzM0NQ',
    name: 'Washcloths',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3NzU4ODQ5',
    },
    path: 'HOME_LIVING_BATHROOM_PRODUCTS_BATHROOM_FABRICS_WASHCLOTHS',
    rawPath: 'home-living/bathroom-products/bathroom-fabrics/washcloths',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc4ODg0NjEwMDQ4MQ',
    name: 'Guest Towels',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3NzU4ODQ5',
    },
    path: 'HOME_LIVING_BATHROOM_PRODUCTS_BATHROOM_FABRICS_GUEST_TOWELS',
    rawPath: 'home-living/bathroom-products/bathroom-fabrics/guest-towels',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc4OTIxNTEwMDkzMA',
    name: 'Beach Towels',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3NzU4ODQ5',
    },
    path: 'HOME_LIVING_BATHROOM_PRODUCTS_BATHROOM_FABRICS_BEACH_TOWELS',
    rawPath: 'home-living/bathroom-products/bathroom-fabrics/beach-towels',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc4OTQ4NzU4MzIzNA',
    name: 'Hammam Towels',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3NzU4ODQ5',
    },
    path: 'HOME_LIVING_BATHROOM_PRODUCTS_BATHROOM_FABRICS_HAMMAM_TOWELS',
    rawPath: 'home-living/bathroom-products/bathroom-fabrics/hammam-towels',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3OTg4MjI1',
    name: 'Bath Robes',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3MzY1NjMz',
    },
    path: 'HOME_LIVING_BATHROOM_PRODUCTS_BATH_ROBES',
    rawPath: 'home-living/bathroom-products/bath-robes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MTM1Njgx',
    name: 'Bathroom Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3MzY1NjMz',
    },
    path: 'HOME_LIVING_BATHROOM_PRODUCTS_BATHROOM_ACCESSORIES',
    rawPath: 'home-living/bathroom-products/bathroom-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc5Mzg5ODQwMTc5Mw',
    name: 'Tooth Brush Holders',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MTM1Njgx',
    },
    path: 'HOME_LIVING_BATHROOM_PRODUCTS_BATHROOM_ACCESSORIES_TOOTH_BRUSH_HOLDERS',
    rawPath:
      'home-living/bathroom-products/bathroom-accessories/tooth-brush-holders',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc5NDkyMzEwNjMwNQ',
    name: 'Soap Dishes',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MTM1Njgx',
    },
    path: 'HOME_LIVING_BATHROOM_PRODUCTS_BATHROOM_ACCESSORIES_SOAP_DISHES',
    rawPath: 'home-living/bathroom-products/bathroom-accessories/soap-dishes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc5NTk0ODY3OTE2OQ',
    name: 'Towel Racks',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MTM1Njgx',
    },
    path: 'HOME_LIVING_BATHROOM_PRODUCTS_BATHROOM_ACCESSORIES_TOWEL_RACKS',
    rawPath: 'home-living/bathroom-products/bathroom-accessories/towel-racks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc5NjYzNzc0MTA1OA',
    name: 'Soap Dispensers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MTM1Njgx',
    },
    path: 'HOME_LIVING_BATHROOM_PRODUCTS_BATHROOM_ACCESSORIES_SOAP_DISPENSERS',
    rawPath:
      'home-living/bathroom-products/bathroom-accessories/soap-dispensers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc5NzA2OTY4ODgzMw',
    name: 'Bath Mats',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MTM1Njgx',
    },
    path: 'HOME_LIVING_BATHROOM_PRODUCTS_BATHROOM_ACCESSORIES_BATH_MATS',
    rawPath: 'home-living/bathroom-products/bathroom-accessories/bath-mats',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc5NzYwMzM5NzYzMw',
    name: 'Toilet Paper Holders',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MTM1Njgx',
    },
    path: 'HOME_LIVING_BATHROOM_PRODUCTS_BATHROOM_ACCESSORIES_TOILET_PAPER_HOLDERS',
    rawPath:
      'home-living/bathroom-products/bathroom-accessories/toilet-paper-holders',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc5ODEzNTM4NjExMw',
    name: 'Shower Curtains',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MTM1Njgx',
    },
    path: 'HOME_LIVING_BATHROOM_PRODUCTS_BATHROOM_ACCESSORIES_SHOWER_CURTAINS',
    rawPath:
      'home-living/bathroom-products/bathroom-accessories/shower-curtains',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc5ODk4NDk2MjA0OQ',
    name: 'Toilet Brushes',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY4MTM1Njgx',
    },
    path: 'HOME_LIVING_BATHROOM_PRODUCTS_BATHROOM_ACCESSORIES_TOILET_BRUSHES',
    rawPath:
      'home-living/bathroom-products/bathroom-accessories/toilet-brushes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwNzA3OTY5',
    name: 'Storage Units',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NDE1OTM3',
    },
    path: 'HOME_LIVING_STORAGE_UNITS',
    rawPath: 'home-living/storage-units',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDIyMDg3NDk4MTM3Nw',
    name: 'Storage Baskets',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwNzA3OTY5',
    },
    path: 'HOME_LIVING_STORAGE_UNITS_STORAGE_BASKETS',
    rawPath: 'home-living/storage-units/storage-baskets',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDIyNDA5NTc0ODA5Nw',
    name: 'Paper Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwNzA3OTY5',
    },
    path: 'HOME_LIVING_STORAGE_UNITS_PAPER_BAGS',
    rawPath: 'home-living/storage-units/paper-bags',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDIyODM4MTYyMjI3Mw',
    name: 'Laundry Baskets',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwNzA3OTY5',
    },
    path: 'HOME_LIVING_STORAGE_UNITS_LAUNDRY_BASKETS',
    rawPath: 'home-living/storage-units/laundry-baskets',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI0NTU0ODYzMDAxNw',
    name: 'Waste Bins',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwNzA3OTY5',
    },
    path: 'HOME_LIVING_STORAGE_UNITS_WASTE_BINS',
    rawPath: 'home-living/storage-units/waste-bins',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI0NTkzNzA2MTg4OQ',
    name: 'Storage Boxes',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwNzA3OTY5',
    },
    path: 'HOME_LIVING_STORAGE_UNITS_STORAGE_BOXES',
    rawPath: 'home-living/storage-units/storage-boxes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI0NjQyMTU2OTUzNw',
    name: 'Clothing Organization',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwNzA3OTY5',
    },
    path: 'HOME_LIVING_STORAGE_UNITS_CLOTHING_ORGANIZATION',
    rawPath: 'home-living/storage-units/clothing-organization',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI0ODMxNDA2ODk5Mw',
    name: 'Coat Racks',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjI0NjQyMTU2OTUzNw',
    },
    path: 'HOME_LIVING_STORAGE_UNITS_CLOTHING_ORGANIZATION_COAT_RACKS',
    rawPath: 'home-living/storage-units/clothing-organization/coat-racks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI0ODczMDc3OTY0OQ',
    name: 'Coat Stands',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjI0NjQyMTU2OTUzNw',
    },
    path: 'HOME_LIVING_STORAGE_UNITS_CLOTHING_ORGANIZATION_COAT_STANDS',
    rawPath: 'home-living/storage-units/clothing-organization/coat-stands',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI0OTA5NTA5NDI3Mw',
    name: 'Clothing Hangers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjI0NjQyMTU2OTUzNw',
    },
    path: 'HOME_LIVING_STORAGE_UNITS_CLOTHING_ORGANIZATION_CLOTHING_HANGERS',
    rawPath: 'home-living/storage-units/clothing-organization/clothing-hangers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI0OTQ2MTQyNDEyOQ',
    name: 'Clothing Racks',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjI0NjQyMTU2OTUzNw',
    },
    path: 'HOME_LIVING_STORAGE_UNITS_CLOTHING_ORGANIZATION_CLOTHING_RACKS',
    rawPath: 'home-living/storage-units/clothing-organization/clothing-racks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI1MDE2MTIxNzUzNw',
    name: 'Shoe Organization',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwNzA3OTY5',
    },
    path: 'HOME_LIVING_STORAGE_UNITS_SHOE_ORGANIZATION',
    rawPath: 'home-living/storage-units/shoe-organization',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI1MDQ5OTIzNTg0MQ',
    name: 'Shoe Racks',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjI1MDE2MTIxNzUzNw',
    },
    path: 'HOME_LIVING_STORAGE_UNITS_SHOE_ORGANIZATION_SHOE_RACKS',
    rawPath: 'home-living/storage-units/shoe-organization/shoe-racks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI1MDg1NzM3MzY5Nw',
    name: 'Shoe Closets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjI1MDE2MTIxNzUzNw',
    },
    path: 'HOME_LIVING_STORAGE_UNITS_SHOE_ORGANIZATION_SHOE_CLOSETS',
    rawPath: 'home-living/storage-units/shoe-organization/shoe-closets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI1MTMwNTA2NjQ5Nw',
    name: 'Magazine Racks',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwNzA3OTY5',
    },
    path: 'HOME_LIVING_STORAGE_UNITS_MAGAZINE_RACKS',
    rawPath: 'home-living/storage-units/magazine-racks',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjM3MTkwMjA5MDAxODgxNw',
    name: 'Umbrella Bins',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwNzA3OTY5',
    },
    path: 'HOME_LIVING_STORAGE_UNITS_UMBRELLA_BINS',
    rawPath: 'home-living/storage-units/umbrella-bins',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQxMTU1ODgxNzQ4MDcwNQ',
    name: 'Product Displays',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwNzA3OTY5',
    },
    path: 'HOME_LIVING_STORAGE_UNITS_PRODUCT_DISPLAYS',
    rawPath: 'home-living/storage-units/product-displays',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTA1NDAxMTA0MTEwMzg3Mw',
    name: 'Dried Flowers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NDE1OTM3',
    },
    path: 'HOME_LIVING_DRIED_FLOWERS',
    rawPath: 'home-living/dried-flowers',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjAyNjc0OTgwNDU0NQ',
    name: 'Dried Flower Bouquets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTA1NDAxMTA0MTEwMzg3Mw',
    },
    path: 'HOME_LIVING_DRIED_FLOWERS_DRIED_FLOWER_BOUQUETS',
    rawPath: 'home-living/dried-flowers/dried-flower-bouquets',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjAyNzE5Nzg5MDU2MQ',
    name: 'Single Dried Flowers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTA1NDAxMTA0MTEwMzg3Mw',
    },
    path: 'HOME_LIVING_DRIED_FLOWERS_SINGLE_DRIED_FLOWERS',
    rawPath: 'home-living/dried-flowers/single-dried-flowers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjAyNzcyODY5OTM5Mw',
    name: 'Dried Pampas Grass',
    parent: {
      id: 'Q2F0ZWdvcnk6MTA1NDAxMTA0MTEwMzg3Mw',
    },
    path: 'HOME_LIVING_DRIED_FLOWERS_DRIED_PAMPAS_GRASS',
    rawPath: 'home-living/dried-flowers/dried-pampas-grass',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjAyODEwMzI4Njc4NQ',
    name: 'Dried Flowers Arrangements',
    parent: {
      id: 'Q2F0ZWdvcnk6MTA1NDAxMTA0MTEwMzg3Mw',
    },
    path: 'HOME_LIVING_DRIED_FLOWERS_DRIED_FLOWERS_ARRANGEMENTS',
    rawPath: 'home-living/dried-flowers/dried-flowers-arrangements',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjAyOTMxNjQwNzI5Nw',
    name: 'Dried Flower Holder',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNjAyODEwMzI4Njc4NQ',
    },
    path: 'HOME_LIVING_DRIED_FLOWERS_DRIED_FLOWERS_ARRANGEMENTS_DRIED_FLOWER_HOLDER',
    rawPath:
      'home-living/dried-flowers/dried-flowers-arrangements/dried-flower-holder',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjAyOTY0ODAzNTg0MQ',
    name: 'Dried Flower Dome',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNjAyODEwMzI4Njc4NQ',
    },
    path: 'HOME_LIVING_DRIED_FLOWERS_DRIED_FLOWERS_ARRANGEMENTS_DRIED_FLOWER_DOME',
    rawPath:
      'home-living/dried-flowers/dried-flowers-arrangements/dried-flower-dome',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjAyOTk5MTg1NDA4MQ',
    name: 'Dried Flowers Tubes',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNjAyODEwMzI4Njc4NQ',
    },
    path: 'HOME_LIVING_DRIED_FLOWERS_DRIED_FLOWERS_ARRANGEMENTS_DRIED_FLOWERS_TUBES',
    rawPath:
      'home-living/dried-flowers/dried-flowers-arrangements/dried-flowers-tubes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjAzMDI4OTM3MTEzNw',
    name: 'Dried Flower Hoops',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNjAyODEwMzI4Njc4NQ',
    },
    path: 'HOME_LIVING_DRIED_FLOWERS_DRIED_FLOWERS_ARRANGEMENTS_DRIED_FLOWER_HOOPS',
    rawPath:
      'home-living/dried-flowers/dried-flowers-arrangements/dried-flower-hoops',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjAzMDY5NjQ2NDM4NQ',
    name: 'Dried Flowers Wreaths',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNjAyODEwMzI4Njc4NQ',
    },
    path: 'HOME_LIVING_DRIED_FLOWERS_DRIED_FLOWERS_ARRANGEMENTS_DRIED_FLOWERS_WREATHS',
    rawPath:
      'home-living/dried-flowers/dried-flowers-arrangements/dried-flowers-wreaths',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjAzMTc3Nzc3NTYxNw',
    name: 'Dried Flowers Box',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwNjAyODEwMzI4Njc4NQ',
    },
    path: 'HOME_LIVING_DRIED_FLOWERS_DRIED_FLOWERS_ARRANGEMENTS_DRIED_FLOWERS_BOX',
    rawPath:
      'home-living/dried-flowers/dried-flowers-arrangements/dried-flowers-box',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwMDg1Mzc3',
    name: 'Rugs',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NDE1OTM3',
    },
    path: 'HOME_LIVING_RUGS',
    rawPath: 'home-living/rugs',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDI0NDM5MTUyNjQwMQ',
    name: 'Door Mats',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwMDg1Mzc3',
    },
    path: 'HOME_LIVING_RUGS_DOOR_MATS',
    rawPath: 'home-living/rugs/door-mats',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjE0NzU2MTk2MzUyMQ',
    name: 'Runners',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwMDg1Mzc3',
    },
    path: 'HOME_LIVING_RUGS_RUNNERS',
    rawPath: 'home-living/rugs/runners',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwNjE0ODE0OTc4ODY3Mw',
    name: 'Area Rugs',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwMDg1Mzc3',
    },
    path: 'HOME_LIVING_RUGS_AREA_RUGS',
    rawPath: 'home-living/rugs/area-rugs',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwODM5MDQx',
    name: 'Party Decoration',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NDE1OTM3',
    },
    path: 'HOME_LIVING_PARTY_DECORATION',
    rawPath: 'home-living/party-decoration',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxMjE3MDY4MTEzOTIwMQ',
    name: 'Party Bunting',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwODM5MDQx',
    },
    path: 'HOME_LIVING_PARTY_DECORATION_PARTY_BUNTING',
    rawPath: 'home-living/party-decoration/party-bunting',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxMjE3NzA1NDE3MTEzNw',
    name: 'Balloons',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwODM5MDQx',
    },
    path: 'HOME_LIVING_PARTY_DECORATION_BALLOONS',
    rawPath: 'home-living/party-decoration/balloons',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxMjE5ODY1NDcyMjA0OQ',
    name: 'Party Napkins',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwODM5MDQx',
    },
    path: 'HOME_LIVING_PARTY_DECORATION_PARTY_NAPKINS',
    rawPath: 'home-living/party-decoration/party-napkins',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxMjE5OTU5MDI5NzYwMQ',
    name: 'Party Utensils',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwODM5MDQx',
    },
    path: 'HOME_LIVING_PARTY_DECORATION_PARTY_UTENSILS',
    rawPath: 'home-living/party-decoration/party-utensils',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxMjIwMDM4ODA4MzcxMw',
    name: 'Party Candles',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwODM5MDQx',
    },
    path: 'HOME_LIVING_PARTY_DECORATION_PARTY_CANDLES',
    rawPath: 'home-living/party-decoration/party-candles',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxMjIwNTY4Nzg5ODExMw',
    name: 'Party Games',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwODM5MDQx',
    },
    path: 'HOME_LIVING_PARTY_DECORATION_PARTY_GAMES',
    rawPath: 'home-living/party-decoration/party-games',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxMjIwODAxMjM5NDQ5Nw',
    name: 'Party Stationery',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwODM5MDQx',
    },
    path: 'HOME_LIVING_PARTY_DECORATION_PARTY_STATIONERY',
    rawPath: 'home-living/party-decoration/party-stationery',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxMjIwODkyNTMxMDk3Nw',
    name: 'Party Lights',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwODM5MDQx',
    },
    path: 'HOME_LIVING_PARTY_DECORATION_PARTY_LIGHTS',
    rawPath: 'home-living/party-decoration/party-lights',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxMjIxMDU4NzEwNzMyOQ',
    name: 'Party Table Decoration',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwODM5MDQx',
    },
    path: 'HOME_LIVING_PARTY_DECORATION_PARTY_TABLE_DECORATION',
    rawPath: 'home-living/party-decoration/party-table-decoration',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxMjIxMTYzOTgyODQ4MQ',
    name: 'Party Hats',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwODM5MDQx',
    },
    path: 'HOME_LIVING_PARTY_DECORATION_PARTY_HATS',
    rawPath: 'home-living/party-decoration/party-hats',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxMjIxMjE0NjkxMzI4MQ',
    name: 'Confetti',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwODM5MDQx',
    },
    path: 'HOME_LIVING_PARTY_DECORATION_CONFETTI',
    rawPath: 'home-living/party-decoration/confetti',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxMzcxMTg0ODc4Mzg3Mw',
    name: 'Party Fashion Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwODM5MDQx',
    },
    path: 'HOME_LIVING_PARTY_DECORATION_PARTY_FASHION_ACCESSORIES',
    rawPath: 'home-living/party-decoration/party-fashion-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI2MjE0OTE2MDk2MQ',
    name: 'Party Banners',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwODM5MDQx',
    },
    path: 'HOME_LIVING_PARTY_DECORATION_PARTY_BANNERS',
    rawPath: 'home-living/party-decoration/party-banners',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI2MjU3OTk0NTQ3Mw',
    name: 'Pom Poms',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwODM5MDQx',
    },
    path: 'HOME_LIVING_PARTY_DECORATION_POM_POMS',
    rawPath: 'home-living/party-decoration/pom-poms',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQyMzM3MjY5ODY2NDk2MQ',
    name: 'Pet Supplies',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NDE1OTM3',
    },
    path: 'HOME_LIVING_PET_SUPPLIES',
    rawPath: 'home-living/pet-supplies',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDczMzkwMjc0OTY5Nw',
    name: 'Pet Food',
    parent: {
      id: 'Q2F0ZWdvcnk6MTQyMzM3MjY5ODY2NDk2MQ',
    },
    path: 'HOME_LIVING_PET_SUPPLIES_PET_FOOD',
    rawPath: 'home-living/pet-supplies/pet-food',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDczNDkzMDUxODAxNw',
    name: 'Pet Food Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6MTQyMzM3MjY5ODY2NDk2MQ',
    },
    path: 'HOME_LIVING_PET_SUPPLIES_PET_FOOD_ACCESSORIES',
    rawPath: 'home-living/pet-supplies/pet-food-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDczNTUwNjU5NTg0MQ',
    name: 'Food Bowls',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwMDczNDkzMDUxODAxNw',
    },
    path: 'HOME_LIVING_PET_SUPPLIES_PET_FOOD_ACCESSORIES_FOOD_BOWLS',
    rawPath: 'home-living/pet-supplies/pet-food-accessories/food-bowls',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDczNjU3NDE2MDg5Nw',
    name: 'Food Storage',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwMDczNDkzMDUxODAxNw',
    },
    path: 'HOME_LIVING_PET_SUPPLIES_PET_FOOD_ACCESSORIES_FOOD_STORAGE',
    rawPath: 'home-living/pet-supplies/pet-food-accessories/food-storage',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDczNzA4NzAxMjg2NQ',
    name: 'Dog Leashes',
    parent: {
      id: 'Q2F0ZWdvcnk6MTQyMzM3MjY5ODY2NDk2MQ',
    },
    path: 'HOME_LIVING_PET_SUPPLIES_DOG_LEASHES',
    rawPath: 'home-living/pet-supplies/dog-leashes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDczNzQzNzEyMjU2MQ',
    name: 'Pet Collars',
    parent: {
      id: 'Q2F0ZWdvcnk6MTQyMzM3MjY5ODY2NDk2MQ',
    },
    path: 'HOME_LIVING_PET_SUPPLIES_PET_COLLARS',
    rawPath: 'home-living/pet-supplies/pet-collars',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDczNzcyOTM4MDM1Mw',
    name: 'Poop Bag Holders',
    parent: {
      id: 'Q2F0ZWdvcnk6MTQyMzM3MjY5ODY2NDk2MQ',
    },
    path: 'HOME_LIVING_PET_SUPPLIES_POOP_BAG_HOLDERS',
    rawPath: 'home-living/pet-supplies/poop-bag-holders',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDczODA0MTE1MTQ4OQ',
    name: 'Pet Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6MTQyMzM3MjY5ODY2NDk2MQ',
    },
    path: 'HOME_LIVING_PET_SUPPLIES_PET_TOYS',
    rawPath: 'home-living/pet-supplies/pet-toys',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDczODM4MjA4NjE0NQ',
    name: 'Pet Beds',
    parent: {
      id: 'Q2F0ZWdvcnk6MTQyMzM3MjY5ODY2NDk2MQ',
    },
    path: 'HOME_LIVING_PET_SUPPLIES_PET_BEDS',
    rawPath: 'home-living/pet-supplies/pet-beds',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDczODg3OTcwMDk5Mw',
    name: 'Pet Baskets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTQyMzM3MjY5ODY2NDk2MQ',
    },
    path: 'HOME_LIVING_PET_SUPPLIES_PET_BASKETS',
    rawPath: 'home-living/pet-supplies/pet-baskets',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDczOTE2MzA2MjI3Mw',
    name: 'Pet Clothing',
    parent: {
      id: 'Q2F0ZWdvcnk6MTQyMzM3MjY5ODY2NDk2MQ',
    },
    path: 'HOME_LIVING_PET_SUPPLIES_PET_CLOTHING',
    rawPath: 'home-living/pet-supplies/pet-clothing',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDczOTQ5NjcwNjA0OQ',
    name: 'Pet Brushes',
    parent: {
      id: 'Q2F0ZWdvcnk6MTQyMzM3MjY5ODY2NDk2MQ',
    },
    path: 'HOME_LIVING_PET_SUPPLIES_PET_BRUSHES',
    rawPath: 'home-living/pet-supplies/pet-brushes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDczOTc2NzA5MTIwMQ',
    name: 'Pet Hair Care',
    parent: {
      id: 'Q2F0ZWdvcnk6MTQyMzM3MjY5ODY2NDk2MQ',
    },
    path: 'HOME_LIVING_PET_SUPPLIES_PET_HAIR_CARE',
    rawPath: 'home-living/pet-supplies/pet-hair-care',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDIyOTUwODA4NzgwOQ',
    name: 'Household Supplies',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NDE1OTM3',
    },
    path: 'HOME_LIVING_HOUSEHOLD_SUPPLIES',
    rawPath: 'home-living/household-supplies',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDIzMTE0NDc1MTEwNQ',
    name: 'Cleaning Agents',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDIyOTUwODA4NzgwOQ',
    },
    path: 'HOME_LIVING_HOUSEHOLD_SUPPLIES_CLEANING_AGENTS',
    rawPath: 'home-living/household-supplies/cleaning-agents',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI3NDMzNTc0NDAwMQ',
    name: 'All Purpose Cleaners',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDIzMTE0NDc1MTEwNQ',
    },
    path: 'HOME_LIVING_HOUSEHOLD_SUPPLIES_CLEANING_AGENTS_ALL_PURPOSE_CLEANERS',
    rawPath:
      'home-living/household-supplies/cleaning-agents/all-purpose-cleaners',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI3NDY4MDUyODg5Nw',
    name: 'Toilet Cleaners',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDIzMTE0NDc1MTEwNQ',
    },
    path: 'HOME_LIVING_HOUSEHOLD_SUPPLIES_CLEANING_AGENTS_TOILET_CLEANERS',
    rawPath: 'home-living/household-supplies/cleaning-agents/toilet-cleaners',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI3NTc0NDQ4OTQ3Mw',
    name: 'Bathroom Cleaners',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDIzMTE0NDc1MTEwNQ',
    },
    path: 'HOME_LIVING_HOUSEHOLD_SUPPLIES_CLEANING_AGENTS_BATHROOM_CLEANERS',
    rawPath: 'home-living/household-supplies/cleaning-agents/bathroom-cleaners',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI3NjA5OTgyNTY2NQ',
    name: 'Kitchen Cleaners',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDIzMTE0NDc1MTEwNQ',
    },
    path: 'HOME_LIVING_HOUSEHOLD_SUPPLIES_CLEANING_AGENTS_KITCHEN_CLEANERS',
    rawPath: 'home-living/household-supplies/cleaning-agents/kitchen-cleaners',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI3NjYzODgxMDExMw',
    name: 'Floor Cleaners',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDIzMTE0NDc1MTEwNQ',
    },
    path: 'HOME_LIVING_HOUSEHOLD_SUPPLIES_CLEANING_AGENTS_FLOOR_CLEANERS',
    rawPath: 'home-living/household-supplies/cleaning-agents/floor-cleaners',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxMjIzMjUyODAxOTQ1Nw',
    name: 'Paint',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDIyOTUwODA4NzgwOQ',
    },
    path: 'HOME_LIVING_HOUSEHOLD_SUPPLIES_PAINT',
    rawPath: 'home-living/household-supplies/paint',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI2ODA3MDk0NDc2OQ',
    name: 'Laundry Supplies',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDIyOTUwODA4NzgwOQ',
    },
    path: 'HOME_LIVING_HOUSEHOLD_SUPPLIES_LAUNDRY_SUPPLIES',
    rawPath: 'home-living/household-supplies/laundry-supplies',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NDIzMjIxNTEzNDIwOQ',
    name: 'Laundry Detergents',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjI2ODA3MDk0NDc2OQ',
    },
    path: 'HOME_LIVING_HOUSEHOLD_SUPPLIES_LAUNDRY_SUPPLIES_LAUNDRY_DETERGENTS',
    rawPath:
      'home-living/household-supplies/laundry-supplies/laundry-detergents',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI3MTA4NzU2Njg0OQ',
    name: 'Laundry Perfume',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjI2ODA3MDk0NDc2OQ',
    },
    path: 'HOME_LIVING_HOUSEHOLD_SUPPLIES_LAUNDRY_SUPPLIES_LAUNDRY_PERFUME',
    rawPath: 'home-living/household-supplies/laundry-supplies/laundry-perfume',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI3MjI5NzQ0MzMyOQ',
    name: 'Fabric Softeners',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjI2ODA3MDk0NDc2OQ',
    },
    path: 'HOME_LIVING_HOUSEHOLD_SUPPLIES_LAUNDRY_SUPPLIES_FABRIC_SOFTENERS',
    rawPath: 'home-living/household-supplies/laundry-supplies/fabric-softeners',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI4MDEwNTIzODUyOQ',
    name: 'Brooms',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDIyOTUwODA4NzgwOQ',
    },
    path: 'HOME_LIVING_HOUSEHOLD_SUPPLIES_BROOMS',
    rawPath: 'home-living/household-supplies/brooms',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI4MDUzNzAyMjQ2NQ',
    name: 'Lint Rollers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDIyOTUwODA4NzgwOQ',
    },
    path: 'HOME_LIVING_HOUSEHOLD_SUPPLIES_LINT_ROLLERS',
    rawPath: 'home-living/household-supplies/lint-rollers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI4MTIyNjIxNTQyNQ',
    name: 'Kitchen Supplies',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM2NDIyOTUwODA4NzgwOQ',
    },
    path: 'HOME_LIVING_HOUSEHOLD_SUPPLIES_KITCHEN_SUPPLIES',
    rawPath: 'home-living/household-supplies/kitchen-supplies',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI4MTQ3MjUxNjA5Nw',
    name: 'Kitchen Sponges',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjI4MTIyNjIxNTQyNQ',
    },
    path: 'HOME_LIVING_HOUSEHOLD_SUPPLIES_KITCHEN_SUPPLIES_KITCHEN_SPONGES',
    rawPath: 'home-living/household-supplies/kitchen-supplies/kitchen-sponges',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI4MTczOTM3ODY4OQ',
    name: 'Dish Brushes',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjI4MTIyNjIxNTQyNQ',
    },
    path: 'HOME_LIVING_HOUSEHOLD_SUPPLIES_KITCHEN_SUPPLIES_DISH_BRUSHES',
    rawPath: 'home-living/household-supplies/kitchen-supplies/dish-brushes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI4MjI4NDM0MzI5Nw',
    name: 'Dish Soap',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjI4MTIyNjIxNTQyNQ',
    },
    path: 'HOME_LIVING_HOUSEHOLD_SUPPLIES_KITCHEN_SUPPLIES_DISH_SOAP',
    rawPath: 'home-living/household-supplies/kitchen-supplies/dish-soap',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI4MjkxNTQ3MTM2MQ',
    name: 'Dishwasher Soap',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjI4MTIyNjIxNTQyNQ',
    },
    path: 'HOME_LIVING_HOUSEHOLD_SUPPLIES_KITCHEN_SUPPLIES_DISHWASHER_SOAP',
    rawPath: 'home-living/household-supplies/kitchen-supplies/dishwasher-soap',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI4MzgzNTEzODA0OQ',
    name: 'Cloths',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjI4MTIyNjIxNTQyNQ',
    },
    path: 'HOME_LIVING_HOUSEHOLD_SUPPLIES_KITCHEN_SUPPLIES_CLOTHS',
    rawPath: 'home-living/household-supplies/kitchen-supplies/cloths',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc0Njc0MDY3ODY1Nw',
    name: 'Bedding',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NDE1OTM3',
    },
    path: 'HOME_LIVING_BEDDING',
    rawPath: 'home-living/bedding',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3NDk2NzA1',
    name: 'Duvets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwMDc0Njc0MDY3ODY1Nw',
    },
    path: 'HOME_LIVING_BEDDING_DUVETS',
    rawPath: 'home-living/bedding/duvets',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3NjI3Nzc3',
    name: 'Bed Linen',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwMDc0Njc0MDY3ODY1Nw',
    },
    path: 'HOME_LIVING_BEDDING_BED_LINEN',
    rawPath: 'home-living/bedding/bed-linen',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc2NjE0NTU0NDE5Mw',
    name: 'Duvet Covers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3NjI3Nzc3',
    },
    path: 'HOME_LIVING_BEDDING_BED_LINEN_DUVET_COVERS',
    rawPath: 'home-living/bedding/bed-linen/duvet-covers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc2NjU3Mzk1MzAyNQ',
    name: 'Pillow Covers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3NjI3Nzc3',
    },
    path: 'HOME_LIVING_BEDDING_BED_LINEN_PILLOW_COVERS',
    rawPath: 'home-living/bedding/bed-linen/pillow-covers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc2NjkwNzk0MDg2NQ',
    name: 'Quilts',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3NjI3Nzc3',
    },
    path: 'HOME_LIVING_BEDDING_BED_LINEN_QUILTS',
    rawPath: 'home-living/bedding/bed-linen/quilts',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc2NzYzNzI1ODI0MQ',
    name: 'Bed Spreads',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3NjI3Nzc3',
    },
    path: 'HOME_LIVING_BEDDING_BED_LINEN_BED_SPREADS',
    rawPath: 'home-living/bedding/bed-linen/bed-spreads',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc2NzkyNTU4Mzg3NA',
    name: 'Fitted Sheets',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3NjI3Nzc3',
    },
    path: 'HOME_LIVING_BEDDING_BED_LINEN_FITTED_SHEETS',
    rawPath: 'home-living/bedding/bed-linen/fitted-sheets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc2ODI0NDIzNjI4OQ',
    name: 'Sheet Sets',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3NjI3Nzc3',
    },
    path: 'HOME_LIVING_BEDDING_BED_LINEN_SHEET_SETS',
    rawPath: 'home-living/bedding/bed-linen/sheet-sets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkwMDc2NTY1MDA5MjAzMw',
    name: 'Pillows',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkwMDc0Njc0MDY3ODY1Nw',
    },
    path: 'HOME_LIVING_BEDDING_PILLOWS',
    rawPath: 'home-living/bedding/pillows',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjA2ODIyMTE0MDk5Mw',
    name: 'Home Fragrance',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY1NDE1OTM3',
    },
    path: 'HOME_LIVING_HOME_FRAGRANCE',
    rawPath: 'home-living/home-fragrance',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM2NTUyMTUzNjI4NjcyMQ',
    name: 'Incense',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjA2ODIyMTE0MDk5Mw',
    },
    path: 'HOME_LIVING_HOME_FRAGRANCE_INCENSE',
    rawPath: 'home-living/home-fragrance/incense',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2NzU5NDI1',
    name: 'Diffusers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjA2ODIyMTE0MDk5Mw',
    },
    path: 'HOME_LIVING_HOME_FRAGRANCE_DIFFUSERS',
    rawPath: 'home-living/home-fragrance/diffusers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2OTIzMjY1',
    name: 'Reed Diffusers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2NzU5NDI1',
    },
    path: 'HOME_LIVING_HOME_FRAGRANCE_DIFFUSERS_REED_DIFFUSERS',
    rawPath: 'home-living/home-fragrance/diffusers/reed-diffusers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3MTAzNDg5',
    name: 'Diffuser Refills',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2NzU5NDI1',
    },
    path: 'HOME_LIVING_HOME_FRAGRANCE_DIFFUSERS_DIFFUSER_REFILLS',
    rawPath: 'home-living/home-fragrance/diffusers/diffuser-refills',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTUyNTU4MzQ5NTkzODA0OQ',
    name: 'Wax and Oil Burners',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2NzU5NDI1',
    },
    path: 'HOME_LIVING_HOME_FRAGRANCE_DIFFUSERS_WAX_AND_OIL_BURNERS',
    rawPath: 'home-living/home-fragrance/diffusers/wax-and-oil-burners',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjEyMzY0NjMyODgzMw',
    name: 'Amber Blocks',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2NzU5NDI1',
    },
    path: 'HOME_LIVING_HOME_FRAGRANCE_DIFFUSERS_AMBER_BLOCKS',
    rawPath: 'home-living/home-fragrance/diffusers/amber-blocks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjEyNjU3NDg3MDUyOQ',
    name: 'Gemstone Diffuser',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2NzU5NDI1',
    },
    path: 'HOME_LIVING_HOME_FRAGRANCE_DIFFUSERS_GEMSTONE_DIFFUSER',
    rawPath: 'home-living/home-fragrance/diffusers/gemstone-diffuser',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjEyODMzODk1MjE5Mw',
    name: 'Wax Melts',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2NzU5NDI1',
    },
    path: 'HOME_LIVING_HOME_FRAGRANCE_DIFFUSERS_WAX_MELTS',
    rawPath: 'home-living/home-fragrance/diffusers/wax-melts',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjEyOTM1MDI3MDk3Nw',
    name: 'Mist Diffusers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTY2NzU5NDI1',
    },
    path: 'HOME_LIVING_HOME_FRAGRANCE_DIFFUSERS_MIST_DIFFUSERS',
    rawPath: 'home-living/home-fragrance/diffusers/mist-diffusers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTY3MjM0NTYx',
    name: 'Room Sprays',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjA2ODIyMTE0MDk5Mw',
    },
    path: 'HOME_LIVING_HOME_FRAGRANCE_ROOM_SPRAYS',
    rawPath: 'home-living/home-fragrance/room-sprays',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjEwODY4OTA4MDMyMQ',
    name: 'White Sage',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjA2ODIyMTE0MDk5Mw',
    },
    path: 'HOME_LIVING_HOME_FRAGRANCE_WHITE_SAGE',
    rawPath: 'home-living/home-fragrance/white-sage',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjEyMjkyMjU0OTI0OQ',
    name: 'Scented Sachets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjA2ODIyMTE0MDk5Mw',
    },
    path: 'HOME_LIVING_HOME_FRAGRANCE_SCENTED_SACHETS',
    rawPath: 'home-living/home-fragrance/scented-sachets',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwOTUzNzI5',
    name: 'Kitchen & Dining',
    parent: null,
    path: 'KITCHEN_DINING',
    rawPath: 'kitchen-dining',
    depth: 0,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTcxOTA0MDAx',
    name: 'Drinkware',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwOTUzNzI5',
    },
    path: 'KITCHEN_DINING_DRINKWARE',
    rawPath: 'kitchen-dining/drinkware',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTQwMDAwMjg4NzY4MQ',
    name: 'Glassware',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcxOTA0MDAx',
    },
    path: 'KITCHEN_DINING_DRINKWARE_GLASSWARE',
    rawPath: 'kitchen-dining/drinkware/glassware',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwNzQ4NTQ2NDU3Nw',
    name: 'Wine Glasses',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQwMDAwMjg4NzY4MQ',
    },
    path: 'KITCHEN_DINING_DRINKWARE_GLASSWARE_WINE_GLASSES',
    rawPath: 'kitchen-dining/drinkware/glassware/wine-glasses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwNzc5NzUzMDYyNQ',
    name: 'Champagne Glasses',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQwMDAwMjg4NzY4MQ',
    },
    path: 'KITCHEN_DINING_DRINKWARE_GLASSWARE_CHAMPAGNE_GLASSES',
    rawPath: 'kitchen-dining/drinkware/glassware/champagne-glasses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwODQ1Njg3MTkzNw',
    name: 'Cocktail Glasses',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQwMDAwMjg4NzY4MQ',
    },
    path: 'KITCHEN_DINING_DRINKWARE_GLASSWARE_COCKTAIL_GLASSES',
    rawPath: 'kitchen-dining/drinkware/glassware/cocktail-glasses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwODc2Njg0MDgzMw',
    name: 'Beer Glasses',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQwMDAwMjg4NzY4MQ',
    },
    path: 'KITCHEN_DINING_DRINKWARE_GLASSWARE_BEER_GLASSES',
    rawPath: 'kitchen-dining/drinkware/glassware/beer-glasses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwOTExMjgyMTc2MQ',
    name: 'Longdrink Glasses',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQwMDAwMjg4NzY4MQ',
    },
    path: 'KITCHEN_DINING_DRINKWARE_GLASSWARE_LONGDRINK_GLASSES',
    rawPath: 'kitchen-dining/drinkware/glassware/longdrink-glasses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwOTQxODkyNDAzMw',
    name: 'Water Glasses',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQwMDAwMjg4NzY4MQ',
    },
    path: 'KITCHEN_DINING_DRINKWARE_GLASSWARE_WATER_GLASSES',
    rawPath: 'kitchen-dining/drinkware/glassware/water-glasses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwOTcwNTg3MzQwOQ',
    name: 'Whisky Glasses',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQwMDAwMjg4NzY4MQ',
    },
    path: 'KITCHEN_DINING_DRINKWARE_GLASSWARE_WHISKY_GLASSES',
    rawPath: 'kitchen-dining/drinkware/glassware/whisky-glasses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIxMDA0NDc3NjQ0OQ',
    name: 'Shot Glasses',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQwMDAwMjg4NzY4MQ',
    },
    path: 'KITCHEN_DINING_DRINKWARE_GLASSWARE_SHOT_GLASSES',
    rawPath: 'kitchen-dining/drinkware/glassware/shot-glasses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIxMDM2OTA5NzcyOQ',
    name: 'Cognac Glasses',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQwMDAwMjg4NzY4MQ',
    },
    path: 'KITCHEN_DINING_DRINKWARE_GLASSWARE_COGNAC_GLASSES',
    rawPath: 'kitchen-dining/drinkware/glassware/cognac-glasses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIxMDY4MDk1MDc4NQ',
    name: 'Gin Glasses',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQwMDAwMjg4NzY4MQ',
    },
    path: 'KITCHEN_DINING_DRINKWARE_GLASSWARE_GIN_GLASSES',
    rawPath: 'kitchen-dining/drinkware/glassware/gin-glasses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIxMTAxMDc2MDcwNQ',
    name: 'Port Glasses',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQwMDAwMjg4NzY4MQ',
    },
    path: 'KITCHEN_DINING_DRINKWARE_GLASSWARE_PORT_GLASSES',
    rawPath: 'kitchen-dining/drinkware/glassware/port-glasses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTQwMjYzOTgxMDU2MQ',
    name: 'Straws',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcxOTA0MDAx',
    },
    path: 'KITCHEN_DINING_DRINKWARE_STRAWS',
    rawPath: 'kitchen-dining/drinkware/straws',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE5NjAyOTQyNzcxMw',
    name: 'Mugs and Cups',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcxOTA0MDAx',
    },
    path: 'KITCHEN_DINING_DRINKWARE_MUGS_AND_CUPS',
    rawPath: 'kitchen-dining/drinkware/mugs-and-cups',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTM5NzkzNjY4NTA1Nw',
    name: 'Tumblers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE5NjAyOTQyNzcxMw',
    },
    path: 'KITCHEN_DINING_DRINKWARE_MUGS_AND_CUPS_TUMBLERS',
    rawPath: 'kitchen-dining/drinkware/mugs-and-cups/tumblers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTM5NzQzMzQwMTM0NQ',
    name: 'Mugs',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE5NjAyOTQyNzcxMw',
    },
    path: 'KITCHEN_DINING_DRINKWARE_MUGS_AND_CUPS_MUGS',
    rawPath: 'kitchen-dining/drinkware/mugs-and-cups/mugs',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE5NjU0MDk1MjU3Nw',
    name: 'Cups',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE5NjAyOTQyNzcxMw',
    },
    path: 'KITCHEN_DINING_DRINKWARE_MUGS_AND_CUPS_CUPS',
    rawPath: 'kitchen-dining/drinkware/mugs-and-cups/cups',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE5NzA5NDY4MjYyNQ',
    name: 'Saucers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE5NjAyOTQyNzcxMw',
    },
    path: 'KITCHEN_DINING_DRINKWARE_MUGS_AND_CUPS_SAUCERS',
    rawPath: 'kitchen-dining/drinkware/mugs-and-cups/saucers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE5ODUyOTAwMzUyMQ',
    name: 'Coffee Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcxOTA0MDAx',
    },
    path: 'KITCHEN_DINING_DRINKWARE_COFFEE_ACCESSORIES',
    rawPath: 'kitchen-dining/drinkware/coffee-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE5ODgzOTQ0NzU1Mw',
    name: 'Coffee Servers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE5ODUyOTAwMzUyMQ',
    },
    path: 'KITCHEN_DINING_DRINKWARE_COFFEE_ACCESSORIES_COFFEE_SERVERS',
    rawPath: 'kitchen-dining/drinkware/coffee-accessories/coffee-servers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE5OTE1ODk1MTkzNw',
    name: 'Coffee Scoops',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE5ODUyOTAwMzUyMQ',
    },
    path: 'KITCHEN_DINING_DRINKWARE_COFFEE_ACCESSORIES_COFFEE_SCOOPS',
    rawPath: 'kitchen-dining/drinkware/coffee-accessories/coffee-scoops',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE5OTYyMzM3MjgwMQ',
    name: 'Tea Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcxOTA0MDAx',
    },
    path: 'KITCHEN_DINING_DRINKWARE_TEA_ACCESSORIES',
    rawPath: 'kitchen-dining/drinkware/tea-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTQwNDI4MTcxNjczNw',
    name: 'Tea Pots',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE5OTYyMzM3MjgwMQ',
    },
    path: 'KITCHEN_DINING_DRINKWARE_TEA_ACCESSORIES_TEA_POTS',
    rawPath: 'kitchen-dining/drinkware/tea-accessories/tea-pots',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTQwNTA0NDMxMDAxNw',
    name: 'Tea Strainers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE5OTYyMzM3MjgwMQ',
    },
    path: 'KITCHEN_DINING_DRINKWARE_TEA_ACCESSORIES_TEA_STRAINERS',
    rawPath: 'kitchen-dining/drinkware/tea-accessories/tea-strainers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwMTc1NDI3NTg0MQ',
    name: 'Tea Cosy',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE5OTYyMzM3MjgwMQ',
    },
    path: 'KITCHEN_DINING_DRINKWARE_TEA_ACCESSORIES_TEA_COSY',
    rawPath: 'kitchen-dining/drinkware/tea-accessories/tea-cosy',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwMjgxMTI3MzIxNw',
    name: 'Tea Scoops',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE5OTYyMzM3MjgwMQ',
    },
    path: 'KITCHEN_DINING_DRINKWARE_TEA_ACCESSORIES_TEA_SCOOPS',
    rawPath: 'kitchen-dining/drinkware/tea-accessories/tea-scoops',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwMzE5MDY0NDczNw',
    name: 'Tea Boxes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE5OTYyMzM3MjgwMQ',
    },
    path: 'KITCHEN_DINING_DRINKWARE_TEA_ACCESSORIES_TEA_BOXES',
    rawPath: 'kitchen-dining/drinkware/tea-accessories/tea-boxes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwMzY1ODczNTYxNw',
    name: 'Honey Dippers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE5OTYyMzM3MjgwMQ',
    },
    path: 'KITCHEN_DINING_DRINKWARE_TEA_ACCESSORIES_HONEY_DIPPERS',
    rawPath: 'kitchen-dining/drinkware/tea-accessories/honey-dippers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwNDA2MTQyMTU2OQ',
    name: 'Tea Bag Holders',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE5OTYyMzM3MjgwMQ',
    },
    path: 'KITCHEN_DINING_DRINKWARE_TEA_ACCESSORIES_TEA_BAG_HOLDER',
    rawPath: 'kitchen-dining/drinkware/tea-accessories/tea-bag-holder',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwNDU5OTQ3MjEyOQ',
    name: 'Matcha Whisks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE5OTYyMzM3MjgwMQ',
    },
    path: 'KITCHEN_DINING_DRINKWARE_TEA_ACCESSORIES_MATCHA_WHISKS',
    rawPath: 'kitchen-dining/drinkware/tea-accessories/matcha-whisks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIxMjg1NzM2ODU3Nw',
    name: 'Jugs and Carafes',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcxOTA0MDAx',
    },
    path: 'KITCHEN_DINING_DRINKWARE_JUGS_AND_CARAFES',
    rawPath: 'kitchen-dining/drinkware/jugs-and-carafes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTQ4MzA0MjgxNjAwMQ',
    name: 'Jugs',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTIxMjg1NzM2ODU3Nw',
    },
    path: 'KITCHEN_DINING_DRINKWARE_JUGS_AND_CARAFES_JUGS',
    rawPath: 'kitchen-dining/drinkware/jugs-and-carafes/jugs',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIxMzI2MDA4NzI5Nw',
    name: 'Carafes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTIxMjg1NzM2ODU3Nw',
    },
    path: 'KITCHEN_DINING_DRINKWARE_JUGS_AND_CARAFES_CARAFES',
    rawPath: 'kitchen-dining/drinkware/jugs-and-carafes/carafes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIxMzgwODgwMzg0MQ',
    name: 'Water Filters',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcxOTA0MDAx',
    },
    path: 'KITCHEN_DINING_DRINKWARE_WATER_FILTERS',
    rawPath: 'kitchen-dining/drinkware/water-filters',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYxNTUwNzMwODU0NQ',
    name: 'Tableware',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwOTUzNzI5',
    },
    path: 'KITCHEN_DINING_TABLEWARE',
    rawPath: 'kitchen-dining/tableware',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYxNjQ4MDg3ODU5Mw',
    name: 'Plates',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxNTUwNzMwODU0NQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_PLATES',
    rawPath: 'kitchen-dining/tableware/plates',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEyNjM1MDgzMTYxNw',
    name: 'Dinner Plates',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxNjQ4MDg3ODU5Mw',
    },
    path: 'KITCHEN_DINING_TABLEWARE_PLATES_DINNER_PLATES',
    rawPath: 'kitchen-dining/tableware/plates/dinner-plates',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEyNjc3NTQ4ODUxMw',
    name: 'Deep Plates',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxNjQ4MDg3ODU5Mw',
    },
    path: 'KITCHEN_DINING_TABLEWARE_PLATES_DEEP_PLATES',
    rawPath: 'kitchen-dining/tableware/plates/deep-plates',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEyNzE5MDM0Nzc3Nw',
    name: 'Pasta Plates',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxNjQ4MDg3ODU5Mw',
    },
    path: 'KITCHEN_DINING_TABLEWARE_PLATES_PASTA_PLATES',
    rawPath: 'kitchen-dining/tableware/plates/pasta-plates',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEyNzUwOTU5MDAxNw',
    name: 'Breakfast Plates',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxNjQ4MDg3ODU5Mw',
    },
    path: 'KITCHEN_DINING_TABLEWARE_PLATES_BREAKFAST_PLATES',
    rawPath: 'kitchen-dining/tableware/plates/breakfast-plates',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEyNzg5MTEyNDIyNQ',
    name: 'Dessert Plates',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxNjQ4MDg3ODU5Mw',
    },
    path: 'KITCHEN_DINING_TABLEWARE_PLATES_DESSERT_PLATES',
    rawPath: 'kitchen-dining/tableware/plates/dessert-plates',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEyODMyMzI1MjIyNQ',
    name: 'Salad Plates',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxNjQ4MDg3ODU5Mw',
    },
    path: 'KITCHEN_DINING_TABLEWARE_PLATES_SALAD_PLATES',
    rawPath: 'kitchen-dining/tableware/plates/salad-plates',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEyODY0MjIzMjMyMQ',
    name: 'Pizza Plates',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxNjQ4MDg3ODU5Mw',
    },
    path: 'KITCHEN_DINING_TABLEWARE_PLATES_PIZZA_PLATES',
    rawPath: 'kitchen-dining/tableware/plates/pizza-plates',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYxNjg4OTIwMDY0MQ',
    name: 'Bowls',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxNTUwNzMwODU0NQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_BOWLS',
    rawPath: 'kitchen-dining/tableware/bowls',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYxODE1OTcxNDMwNQ',
    name: 'Cutlery',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxNTUwNzMwODU0NQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY',
    rawPath: 'kitchen-dining/tableware/cutlery',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzMDM3Njk1Mzg1Nw',
    name: 'Forks',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxODE1OTcxNDMwNQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_FORKS',
    rawPath: 'kitchen-dining/tableware/cutlery/forks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzMDg4MjE1NDQ5Nw',
    name: 'Dessert Forks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEzMDM3Njk1Mzg1Nw',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_FORKS_DESSERT_FORKS',
    rawPath: 'kitchen-dining/tableware/cutlery/forks/dessert-forks',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzMTIyMDUwMDQ4MQ',
    name: 'Salad Forks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEzMDM3Njk1Mzg1Nw',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_FORKS_SALAD_FORKS',
    rawPath: 'kitchen-dining/tableware/cutlery/forks/salad-forks',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzMTQ4NjMzMDg4MQ',
    name: 'Table Forks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEzMDM3Njk1Mzg1Nw',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_FORKS_TABLE_FORKS',
    rawPath: 'kitchen-dining/tableware/cutlery/forks/table-forks',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzMTc3ODY4Njk3Nw',
    name: 'Steak Forks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEzMDM3Njk1Mzg1Nw',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_FORKS_STEAK_FORKS',
    rawPath: 'kitchen-dining/tableware/cutlery/forks/steak-forks',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzMjE3MjM0NTM0Ng',
    name: 'Fish Forks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEzMDM3Njk1Mzg1Nw',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_FORKS_FISH_FORKS',
    rawPath: 'kitchen-dining/tableware/cutlery/forks/fish-forks',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzMjUyMjA3ODIwOQ',
    name: 'Pastry Forks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEzMDM3Njk1Mzg1Nw',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_FORKS_PASTRY_FORKS',
    rawPath: 'kitchen-dining/tableware/cutlery/forks/pastry-forks',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzMjkwODAzNjA5Nw',
    name: 'Fondue Forks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEzMDM3Njk1Mzg1Nw',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_FORKS_FONDUE_FORKS',
    rawPath: 'kitchen-dining/tableware/cutlery/forks/fondue-forks',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzMzU1NzU5NjE2MQ',
    name: 'Knives',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxODE1OTcxNDMwNQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_KNIVES',
    rawPath: 'kitchen-dining/tableware/cutlery/knives',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzMzg0MDQ0OTUzNw',
    name: 'Table Knives',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEzMzU1NzU5NjE2MQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_KNIVES_TABLE_KNIVES',
    rawPath: 'kitchen-dining/tableware/cutlery/knives/table-knives',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzNDEyNjI4NDgwMQ',
    name: 'Salad Knives',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEzMzU1NzU5NjE2MQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_KNIVES_SALAD_KNIVES',
    rawPath: 'kitchen-dining/tableware/cutlery/knives/salad-knives',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzNDcwMzQ3NjczNw',
    name: 'Fish Knives',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEzMzU1NzU5NjE2MQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_KNIVES_FISH_KNIVES',
    rawPath: 'kitchen-dining/tableware/cutlery/knives/fish-knives',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzNDk3NjA3MzcyOQ',
    name: 'Steak Knives',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEzMzU1NzU5NjE2MQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_KNIVES_STEAK_KNIVES',
    rawPath: 'kitchen-dining/tableware/cutlery/knives/steak-knives',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzNTM0MDUzNTgwOQ',
    name: 'Dessert Knives',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEzMzU1NzU5NjE2MQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_KNIVES_DESSERT_KNIVES',
    rawPath: 'kitchen-dining/tableware/cutlery/knives/dessert-knives',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzNTY3MDkzNTU1Mw',
    name: 'Fruit Knives',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEzMzU1NzU5NjE2MQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_KNIVES_FRUIT_KNIVES',
    rawPath: 'kitchen-dining/tableware/cutlery/knives/fruit-knives',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzNjAyNjczMDQ5Nw',
    name: 'Butter Knives',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEzMzU1NzU5NjE2MQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_KNIVES_BUTTER_KNIVES',
    rawPath: 'kitchen-dining/tableware/cutlery/knives/butter-knives',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzNjUyNzcwNDA2NQ',
    name: 'Pizza Cutters',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEzMzU1NzU5NjE2MQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_KNIVES_PIZZA_CUTTERS',
    rawPath: 'kitchen-dining/tableware/cutlery/knives/pizza-cutters',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzNzA4NjMwMDE2MQ',
    name: 'Spoons',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxODE1OTcxNDMwNQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_SPOONS',
    rawPath: 'kitchen-dining/tableware/cutlery/spoons',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzNzYyMTc5NDgxNw',
    name: 'Coffee Spoons',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEzNzA4NjMwMDE2MQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_SPOONS_COFFEE_SPOONS',
    rawPath: 'kitchen-dining/tableware/cutlery/spoons/coffee-spoons',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzODE3MzkwMjg0OQ',
    name: 'Soup Spoons',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEzNzA4NjMwMDE2MQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_SPOONS_SOUP_SPOONS',
    rawPath: 'kitchen-dining/tableware/cutlery/spoons/soup-spoons',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzODU5MzA1NDcyMQ',
    name: 'Dessert Spoons',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEzNzA4NjMwMDE2MQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_SPOONS_DESSERT_SPOONS',
    rawPath: 'kitchen-dining/tableware/cutlery/spoons/dessert-spoons',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzODk2MDcyODA2NQ',
    name: 'Sugar Spoons',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEzNzA4NjMwMDE2MQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_SPOONS_SUGAR_SPOONS',
    rawPath: 'kitchen-dining/tableware/cutlery/spoons/sugar-spoons',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzOTI3MjM1MTc0NQ',
    name: 'Tea Spoons',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEzNzA4NjMwMDE2MQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_SPOONS_TEA_SPOONS',
    rawPath: 'kitchen-dining/tableware/cutlery/spoons/tea-spoons',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzOTU5NTgzNzQ0MQ',
    name: 'Table Spoons',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEzNzA4NjMwMDE2MQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_SPOONS_TABLE_SPOONS',
    rawPath: 'kitchen-dining/tableware/cutlery/spoons/table-spoons',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzOTk4OTE1MTc0NQ',
    name: 'Chopsticks',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxODE1OTcxNDMwNQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_CHOPSTICKS',
    rawPath: 'kitchen-dining/tableware/cutlery/chopsticks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0MDQ2MDEyNjIwOQ',
    name: 'Cutlery Sets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxODE1OTcxNDMwNQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_CUTLERY_CUTLERY_SETS',
    rawPath: 'kitchen-dining/tableware/cutlery/cutlery-sets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYxNzM1MzQ0MTI4MQ',
    name: 'Egg Cups',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxNTUwNzMwODU0NQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_EGG_CUPS',
    rawPath: 'kitchen-dining/tableware/egg-cups',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYxNjA0ODM1NzM3Nw',
    name: 'Dinner Sets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxNTUwNzMwODU0NQ',
    },
    path: 'KITCHEN_DINING_TABLEWARE_DINNER_SETS',
    rawPath: 'kitchen-dining/tableware/dinner-sets',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTM4MTg1MjAzNzEyMQ',
    name: 'Kitchen Textiles',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwOTUzNzI5',
    },
    path: 'KITCHEN_DINING_KITCHEN_TEXTILES',
    rawPath: 'kitchen-dining/kitchen-textiles',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTM5MjcyODI5MzM3Nw',
    name: 'Aprons',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTM4MTg1MjAzNzEyMQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_TEXTILES_APRONS',
    rawPath: 'kitchen-dining/kitchen-textiles/aprons',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTM5MzQzNzMyNzM2MQ',
    name: 'Oven Mitts',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTM4MTg1MjAzNzEyMQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_TEXTILES_OVEN_MITTS',
    rawPath: 'kitchen-dining/kitchen-textiles/oven-mitts',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTExNDc5MjczODgxNw',
    name: 'Towels',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTM4MTg1MjAzNzEyMQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_TEXTILES_TOWELS',
    rawPath: 'kitchen-dining/kitchen-textiles/towels',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTM5Mzk1NTk3OTI2NQ',
    name: 'Tea Towels',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTExNDc5MjczODgxNw',
    },
    path: 'KITCHEN_DINING_KITCHEN_TEXTILES_TOWELS_TEA_TOWELS',
    rawPath: 'kitchen-dining/kitchen-textiles/towels/tea-towels',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTExOTgxODk4OTU2OQ',
    name: 'Kitchen Towels',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTExNDc5MjczODgxNw',
    },
    path: 'KITCHEN_DINING_KITCHEN_TEXTILES_TOWELS_KITCHEN_TOWELS',
    rawPath: 'kitchen-dining/kitchen-textiles/towels/kitchen-towels',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEyNDQ4NTY2MDY3Mw',
    name: 'Dish Cloths',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTM4MTg1MjAzNzEyMQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_TEXTILES_DISH_CLOTHS',
    rawPath: 'kitchen-dining/kitchen-textiles/dish-cloths',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYxOTUzMjUxMzI4MQ',
    name: 'Serveware',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwOTUzNzI5',
    },
    path: 'KITCHEN_DINING_SERVEWARE',
    rawPath: 'kitchen-dining/serveware',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTQ4MzYwMDQ2MTgyNQ',
    name: 'Milk and Sugar Sets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxOTUzMjUxMzI4MQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_MILK_AND_SUGAR_SETS',
    rawPath: 'kitchen-dining/serveware/milk-and-sugar-sets',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE2ODc5MTc2NDk5Mw',
    name: 'Milk Jars',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQ4MzYwMDQ2MTgyNQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_MILK_AND_SUGAR_SETS_MILK_JARS',
    rawPath: 'kitchen-dining/serveware/milk-and-sugar-sets/milk-jars',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE2OTA5NzUwNjgxNw',
    name: 'Sugar Jars',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQ4MzYwMDQ2MTgyNQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_MILK_AND_SUGAR_SETS_SUGAR_JARS',
    rawPath: 'kitchen-dining/serveware/milk-and-sugar-sets/sugar-jars',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYxNzc2MDQ4NTM3Nw',
    name: 'Butter Dishes',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxOTUzMjUxMzI4MQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_BUTTER_DISHES',
    rawPath: 'kitchen-dining/serveware/butter-dishes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYyMzYxNDI0MjgxNw',
    name: 'Serving Platters',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxOTUzMjUxMzI4MQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_PLATTERS',
    rawPath: 'kitchen-dining/serveware/serving-platters',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1MzA2NzA0MDc2OQ',
    name: 'Breakfast Trays',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYyMzYxNDI0MjgxNw',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_PLATTERS_BREAKFAST_TRAYS',
    rawPath: 'kitchen-dining/serveware/serving-platters/breakfast-trays',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1MzQ3MjMxNTM5Mw',
    name: 'Toast Racks',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYyMzYxNDI0MjgxNw',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_PLATTERS_TOAST_RACKS',
    rawPath: 'kitchen-dining/serveware/serving-platters/toast-racks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1Mzg3MDQ3OTM2MQ',
    name: 'Cheese Boards',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYyMzYxNDI0MjgxNw',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_PLATTERS_CHEESE_BOARDS',
    rawPath: 'kitchen-dining/serveware/serving-platters/cheese-boards',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1NTYxNDYyMTY5Nw',
    name: 'Devilled Egg Plates',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYyMzYxNDI0MjgxNw',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_PLATTERS_DEVILLED_EGG_PLATES',
    rawPath: 'kitchen-dining/serveware/serving-platters/devilled-egg-plates',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1NTk2MDExMTEwNQ',
    name: 'Taco Holders',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYyMzYxNDI0MjgxNw',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_PLATTERS_TACO_HOLDERS',
    rawPath: 'kitchen-dining/serveware/serving-platters/taco-holders',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1NjI3NDg4MDUxMw',
    name: 'Tiered Trays',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYyMzYxNDI0MjgxNw',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_PLATTERS_TIERED_TRAYS',
    rawPath: 'kitchen-dining/serveware/serving-platters/tiered-trays',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1NjkxNzIzMTYxNw',
    name: 'Divided Trays',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYyMzYxNDI0MjgxNw',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_PLATTERS_DIVIDED_TRAYS',
    rawPath: 'kitchen-dining/serveware/serving-platters/divided-trays',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1NzI2Njk4MDg2NQ',
    name: 'Serving Trays',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYyMzYxNDI0MjgxNw',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_PLATTERS_SERVING_TRAYS',
    rawPath: 'kitchen-dining/serveware/serving-platters/serving-trays',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1NzU3NDgxOTg0MQ',
    name: 'Oyster Platters',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYyMzYxNDI0MjgxNw',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_PLATTERS_OYSTER_PLATTERS',
    rawPath: 'kitchen-dining/serveware/serving-platters/oyster-platters',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYyMTM3MjA5MjQxNw',
    name: 'Serving Bowls',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxOTUzMjUxMzI4MQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_BOWLS',
    rawPath: 'kitchen-dining/serveware/serving-bowls',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYyMjA4NDUwMTUwNQ',
    name: 'Serving Plates',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxOTUzMjUxMzI4MQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_PLATES',
    rawPath: 'kitchen-dining/serveware/serving-plates',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYyNjA1NjcwNDAwMQ',
    name: 'Salt and Pepper Shakers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxOTUzMjUxMzI4MQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SALT_AND_PEPPER_SHAKERS',
    rawPath: 'kitchen-dining/serveware/salt-and-pepper-shakers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE2NTM3MzA5NTkzNw',
    name: 'Salt Shakers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYyNjA1NjcwNDAwMQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SALT_AND_PEPPER_SHAKERS_SALT_SHAKERS',
    rawPath: 'kitchen-dining/serveware/salt-and-pepper-shakers/salt-shakers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE2NTgxMzU0NzAwOQ',
    name: 'Pepper Shakers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYyNjA1NjcwNDAwMQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SALT_AND_PEPPER_SHAKERS_PEPPER_SHAKERS',
    rawPath: 'kitchen-dining/serveware/salt-and-pepper-shakers/pepper-shakers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA2OTEyOTYzMTU0NzM5Mw',
    name: 'Salt and Pepper Sets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYyNjA1NjcwNDAwMQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SALT_AND_PEPPER_SHAKERS_SALT_AND_PEPPER_SETS',
    rawPath:
      'kitchen-dining/serveware/salt-and-pepper-shakers/salt-and-pepper-sets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYyNzA2NTQ1MDQ5Nw',
    name: 'Sauce Boats',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxOTUzMjUxMzI4MQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SAUCE_BOATS',
    rawPath: 'kitchen-dining/serveware/sauce-boats',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYyNDA2NDM3NjgzMw',
    name: 'Trivets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxOTUzMjUxMzI4MQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_TRIVETS',
    rawPath: 'kitchen-dining/serveware/trivets',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYyNTY4NTA0OTM0NQ',
    name: 'Bread Baskets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxOTUzMjUxMzI4MQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_BREAD_BASKETS',
    rawPath: 'kitchen-dining/serveware/bread-baskets',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYyNjY4NjIyNjQzMw',
    name: 'Oil & Vinegar Sets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxOTUzMjUxMzI4MQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_OIL_VINEGAR_SETS',
    rawPath: 'kitchen-dining/serveware/oil-vinegar-sets',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0NDYzNjMwOTUwNQ',
    name: 'Serving Cutlery',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxOTUzMjUxMzI4MQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_CUTLERY',
    rawPath: 'kitchen-dining/serveware/serving-cutlery',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYyMjU0ODI4MzM5Mw',
    name: 'Serving Spoons',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE0NDYzNjMwOTUwNQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_CUTLERY_SERVING_SPOONS',
    rawPath: 'kitchen-dining/serveware/serving-cutlery/serving-spoons',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0Njk2ODg5OTU4NQ',
    name: 'Ice Cream Scoops',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE0NDYzNjMwOTUwNQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_CUTLERY_ICE_CREAM_SCOOPS',
    rawPath: 'kitchen-dining/serveware/serving-cutlery/ice-cream-scoops',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0ODA0ODI3NzUwNQ',
    name: 'Ladles',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE0NDYzNjMwOTUwNQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_CUTLERY_LADLES',
    rawPath: 'kitchen-dining/serveware/serving-cutlery/ladles',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0ODk5ODY4MDU3Nw',
    name: 'Cake Slicers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE0NDYzNjMwOTUwNQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_CUTLERY_CAKE_SLICERS',
    rawPath: 'kitchen-dining/serveware/serving-cutlery/cake-slicers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0OTI2NjkzNTgwOQ',
    name: 'Salad Servers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE0NDYzNjMwOTUwNQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_CUTLERY_SALAD_SERVERS',
    rawPath: 'kitchen-dining/serveware/serving-cutlery/salad-servers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0OTc0MTIwMzQ1Nw',
    name: 'Serving Tongs',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE0NDYzNjMwOTUwNQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_CUTLERY_SERVING_TONGS',
    rawPath: 'kitchen-dining/serveware/serving-cutlery/serving-tongs',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1MDExODExNzM3Nw',
    name: 'Pallet Knife',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE0NDYzNjMwOTUwNQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_CUTLERY_PALLET_KNIFE',
    rawPath: 'kitchen-dining/serveware/serving-cutlery/pallet-knife',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1MDQ2ODAzMDQ2NQ',
    name: 'Spaghetti Servers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE0NDYzNjMwOTUwNQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_CUTLERY_SPAGHETTI_SERVERS',
    rawPath: 'kitchen-dining/serveware/serving-cutlery/spaghetti-servers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1MDc4ODA0Mjc1Mw',
    name: 'Cheese Knives',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE0NDYzNjMwOTUwNQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_SERVING_CUTLERY_CHEESE_KNIVES',
    rawPath: 'kitchen-dining/serveware/serving-cutlery/cheese-knives',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE2MTQyMDI3NTcxMw',
    name: 'Dessert Stands',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxOTUzMjUxMzI4MQ',
    },
    path: 'KITCHEN_DINING_SERVEWARE_DESSERT_STANDS',
    rawPath: 'kitchen-dining/serveware/dessert-stands',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYyNTIwMTk2NzEwNQ',
    name: 'Cake Stands',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE2MTQyMDI3NTcxMw',
    },
    path: 'KITCHEN_DINING_SERVEWARE_DESSERT_STANDS_CAKE_STANDS',
    rawPath: 'kitchen-dining/serveware/dessert-stands/cake-stands',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE2MzU5OTg4ODM4NQ',
    name: 'Cupcake Stands',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE2MTQyMDI3NTcxMw',
    },
    path: 'KITCHEN_DINING_SERVEWARE_DESSERT_STANDS_CUPCAKE_STANDS',
    rawPath: 'kitchen-dining/serveware/dessert-stands/cupcake-stands',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYyODExNTQ4NDY3Mw',
    name: 'Cookware',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwOTUzNzI5',
    },
    path: 'KITCHEN_DINING_COOKWARE',
    rawPath: 'kitchen-dining/cookware',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYzNDM5NjA3ODA4MQ',
    name: 'Cutting Boards',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYyODExNTQ4NDY3Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_CUTTING_BOARDS',
    rawPath: 'kitchen-dining/cookware/cutting-boards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYzNTQ1NjY5NjMyMQ',
    name: 'Kitchen Knives',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYyODExNTQ4NDY3Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_KNIVES',
    rawPath: 'kitchen-dining/cookware/kitchen-knives',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTA3NjcyNTM4MzE2OQ',
    name: 'Chef Knives',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzNTQ1NjY5NjMyMQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_KNIVES_CHEF_KNIVES',
    rawPath: 'kitchen-dining/cookware/kitchen-knives/chef-knives',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTA3ODA0MjkzNTI5Nw',
    name: 'Carving Knives',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzNTQ1NjY5NjMyMQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_KNIVES_CARVING_KNIVES',
    rawPath: 'kitchen-dining/cookware/kitchen-knives/carving-knives',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTA3ODQ0NzgxNjcwNQ',
    name: 'Santoku Knives',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzNTQ1NjY5NjMyMQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_KNIVES_SANTOKU_KNIVES',
    rawPath: 'kitchen-dining/cookware/kitchen-knives/santoku-knives',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTA3ODcxMzk3NDc4NQ',
    name: 'Paring Knives',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzNTQ1NjY5NjMyMQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_KNIVES_PARING_KNIVES',
    rawPath: 'kitchen-dining/cookware/kitchen-knives/paring-knives',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTA3ODk3OTE5ODk3Nw',
    name: 'Vegetable Knives',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzNTQ1NjY5NjMyMQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_KNIVES_VEGETABLE_KNIVES',
    rawPath: 'kitchen-dining/cookware/kitchen-knives/vegetable-knives',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTA3OTI0MTgxODExMw',
    name: 'Filleting Knives',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzNTQ1NjY5NjMyMQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_KNIVES_FILLETING_KNIVES',
    rawPath: 'kitchen-dining/cookware/kitchen-knives/filleting-knives',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTA3OTQ4NDkwNzUyMQ',
    name: 'Oyster Knives',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzNTQ1NjY5NjMyMQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_KNIVES_OYSTER_KNIVES',
    rawPath: 'kitchen-dining/cookware/kitchen-knives/oyster-knives',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTA3OTc5NTkyNDk5Mw',
    name: 'Chopping Knives',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzNTQ1NjY5NjMyMQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_KNIVES_CHOPPING_KNIVES',
    rawPath: 'kitchen-dining/cookware/kitchen-knives/chopping-knives',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTA4MDEwNzE3MTg0MQ',
    name: 'Bread Knives',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzNTQ1NjY5NjMyMQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_KNIVES_BREAD_KNIVES',
    rawPath: 'kitchen-dining/cookware/kitchen-knives/bread-knives',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTA4MDQ0MTI5MDc1Mw',
    name: 'Knife Blocks',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzNTQ1NjY5NjMyMQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_KNIVES_KNIFE_BLOCKS',
    rawPath: 'kitchen-dining/cookware/kitchen-knives/knife-blocks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYzMjg3Njg3MTY4MQ',
    name: 'Pots and Pans',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYyODExNTQ4NDY3Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_POTS_AND_PANS',
    rawPath: 'kitchen-dining/cookware/pots-and-pans',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0MTMyODkzNjk2MQ',
    name: 'Wok Pans',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzMjg3Njg3MTY4MQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_POTS_AND_PANS_WOK_PANS',
    rawPath: 'kitchen-dining/cookware/pots-and-pans/wok-pans',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0MTg2NTU2MjExMw',
    name: 'Pan Sets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzMjg3Njg3MTY4MQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_POTS_AND_PANS_PAN_SETS',
    rawPath: 'kitchen-dining/cookware/pots-and-pans/pan-sets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0MjE2NTY2Nzg0MQ',
    name: 'Sauce Pans',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzMjg3Njg3MTY4MQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_POTS_AND_PANS_SAUCE_PANS',
    rawPath: 'kitchen-dining/cookware/pots-and-pans/sauce-pans',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0Mjg3Njg2NDUxMw',
    name: 'Frying Pans',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzMjg3Njg3MTY4MQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_POTS_AND_PANS_FRYING_PANS',
    rawPath: 'kitchen-dining/cookware/pots-and-pans/frying-pans',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0MzE4NTA4MDMyMQ',
    name: 'Sauté Pans',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzMjg3Njg3MTY4MQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_POTS_AND_PANS_SAUTE_PANS',
    rawPath: 'kitchen-dining/cookware/pots-and-pans/saute-pans',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0MzQxMDExNDU2MQ',
    name: 'Roasting Pans',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzMjg3Njg3MTY4MQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_POTS_AND_PANS_ROASTING_PANS',
    rawPath: 'kitchen-dining/cookware/pots-and-pans/roasting-pans',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0MzY0NzgzMDAxNw',
    name: 'Braiser Pans',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzMjg3Njg3MTY4MQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_POTS_AND_PANS_BRAISER_PANS',
    rawPath: 'kitchen-dining/cookware/pots-and-pans/braiser-pans',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0Mzg0Mjg2NTE1Mw',
    name: 'Crepe Pans',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzMjg3Njg3MTY4MQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_POTS_AND_PANS_CREPE_PANS',
    rawPath: 'kitchen-dining/cookware/pots-and-pans/crepe-pans',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0NDA0OTg5MzM3Nw',
    name: 'Griddle',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzMjg3Njg3MTY4MQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_POTS_AND_PANS_GRIDDLE',
    rawPath: 'kitchen-dining/cookware/pots-and-pans/griddle',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0NDMwOTMzNDAxNw',
    name: 'Cast Iron Skillets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzMjg3Njg3MTY4MQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_POTS_AND_PANS_CAST_IRON_SKILLETS',
    rawPath: 'kitchen-dining/cookware/pots-and-pans/cast-iron-skillets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0NDUwOTIxODgxNw',
    name: 'Stock Pots',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzMjg3Njg3MTY4MQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_POTS_AND_PANS_STOCK_POTS',
    rawPath: 'kitchen-dining/cookware/pots-and-pans/stock-pots',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0NDczOTUxMjMyMQ',
    name: 'Pasta Pots',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzMjg3Njg3MTY4MQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_POTS_AND_PANS_PASTA_POTS',
    rawPath: 'kitchen-dining/cookware/pots-and-pans/pasta-pots',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0NTQ5ODc3OTY1MA',
    name: 'Dutch Ovens',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzMjg3Njg3MTY4MQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_POTS_AND_PANS_DUTCH_OVENS',
    rawPath: 'kitchen-dining/cookware/pots-and-pans/dutch-ovens',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEwOTAzNzEwNTE1Mw',
    name: 'Kitchen Utensils',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYyODExNTQ4NDY3Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYzMjUzMzA1MzQ0MQ',
    name: 'Mortars',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwOTAzNzEwNTE1Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_MORTARS',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/mortars',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYzMzI5MTQ1MjQxNw',
    name: 'Strainers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwOTAzNzEwNTE1Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_STRAINERS',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/strainers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYzMDk2NTYyODkyOQ',
    name: 'Mixing Bowls',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwOTAzNzEwNTE1Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_MIXING_BOWLS',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/mixing-bowls',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYzMzgzODEyMDk2MQ',
    name: 'Slicers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwOTAzNzEwNTE1Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_SLICERS',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/slicers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYzMjAzMDA4MTAyNQ',
    name: 'Whisks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwOTAzNzEwNTE1Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_WHISKS',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/whisks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEwOTQzODQzMTIzMw',
    name: 'Meat Forks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwOTAzNzEwNTE1Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_MEAT_FORKS',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/meat-forks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEyMDMwNTkzODQzMw',
    name: 'Spatulas',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwOTAzNzEwNTE1Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_SPATULAS',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/spatulas',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEyMDgyNjQ1ODExMw',
    name: 'Peelers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwOTAzNzEwNTE1Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_PEELERS',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/peelers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEyMjc0NTY0NzEwNQ',
    name: 'Graters',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwOTAzNzEwNTE1Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_GRATERS',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/graters',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEyMzQ2MDA4NzgwOQ',
    name: 'Cheese Graters',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEyMjc0NTY0NzEwNQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_GRATERS_CHEESE_GRATERS',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/graters/cheese-graters',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEyMzg5MDY0Mjk0NQ',
    name: 'Multifunctional Grater',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEyMjc0NTY0NzEwNQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_GRATERS_MULTIFUNCTIONAL_GRATER',
    rawPath:
      'kitchen-dining/cookware/kitchen-utensils/graters/multifunctional-grater',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEyNDE3NTQ2MjQwMQ',
    name: 'Garlic Press',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEyMjc0NTY0NzEwNQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_GRATERS_GARLIC_PRESS',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/graters/garlic-press',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEyNDQxNTk0Njc1Mw',
    name: 'Zester',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEyMjc0NTY0NzEwNQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_GRATERS_ZESTER',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/graters/zester',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEyNzIwODM4NjU2MQ',
    name: 'Measuring Cups',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwOTAzNzEwNTE1Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_MEASURING_CUPS',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/measuring-cups',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzMjQwODYwMjYyNQ',
    name: 'Scales',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwOTAzNzEwNTE1Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_SCALES',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/scales',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzMzg0MTc2MDI1Nw',
    name: 'Baking Brushes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwOTAzNzEwNTE1Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_BAKING_BRUSHES',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/baking-brushes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzNDYyMzkzMjQxNw',
    name: 'Rolling Pins',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwOTAzNzEwNTE1Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_ROLLING_PINS',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/rolling-pins',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzNzQzNjg2ODYwOQ',
    name: 'Burger Presses',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwOTAzNzEwNTE1Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_BURGER_PRESSES',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/burger-presses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzNzc2OTgyNDI1Nw',
    name: 'Herbal Scissors',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwOTAzNzEwNTE1Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_HERBAL_SCISSORS',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/herbal-scissors',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzODMyMTg5OTUyMQ',
    name: 'Marinade Injectors',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwOTAzNzEwNTE1Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_MARINADE_INJECTORS',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/marinade-injectors',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzODc4MzMyMjExMw',
    name: 'Potato Mashers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwOTAzNzEwNTE1Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_POTATO_MASHERS',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/potato-mashers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEzOTMzNzYyNTYwMg',
    name: 'Spoon Rests',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwOTAzNzEwNTE1Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_SPOON_RESTS',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/spoon-rests',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA2OTA3NDk3MDUwOTMxMw',
    name: 'Cooking Spoons',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwOTAzNzEwNTE1Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_COOKING_SPOONS',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/cooking-spoons',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjM3MTkxNDkyNTc4NTA4OQ',
    name: 'Food Thermometers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwOTAzNzEwNTE1Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_KITCHEN_UTENSILS_FOOD_THERMOMETERS',
    rawPath: 'kitchen-dining/cookware/kitchen-utensils/food-thermometers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0Njk0NDA3NzgyNQ',
    name: 'Outdoor Cooking',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYyODExNTQ4NDY3Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_OUTDOOR_COOKING',
    rawPath: 'kitchen-dining/cookware/outdoor-cooking',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0NzQ5MjgxMDc1Mw',
    name: 'Barbecues',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE0Njk0NDA3NzgyNQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_OUTDOOR_COOKING_BARBECUES',
    rawPath: 'kitchen-dining/cookware/outdoor-cooking/barbecues',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0Nzc2NjM3NDQwMQ',
    name: 'Barbecue Tools',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE0Njk0NDA3NzgyNQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_OUTDOOR_COOKING_BARBECUE_TOOLS',
    rawPath: 'kitchen-dining/cookware/outdoor-cooking/barbecue-tools',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0ODQyNjY2NTk4NQ',
    name: 'Pizza Stones',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE0Njk0NDA3NzgyNQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_OUTDOOR_COOKING_PIZZA_STONES',
    rawPath: 'kitchen-dining/cookware/outdoor-cooking/pizza-stones',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE0OTg1NjI2ODI4OQ',
    name: 'Wood Chips',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE0Njk0NDA3NzgyNQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_OUTDOOR_COOKING_WOOD_CHIPS',
    rawPath: 'kitchen-dining/cookware/outdoor-cooking/wood-chips',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1MDE3OTk2Njk3Nw',
    name: 'BBQ Smoker Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE0Njk0NDA3NzgyNQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_OUTDOOR_COOKING_BBQ_SMOKER_ACCESSORIES',
    rawPath: 'kitchen-dining/cookware/outdoor-cooking/bbq-smoker-accessories',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1MDUxMTE4NTkyMQ',
    name: 'Barbecue Grids',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE0Njk0NDA3NzgyNQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_OUTDOOR_COOKING_BARBECUE_GRIDS',
    rawPath: 'kitchen-dining/cookware/outdoor-cooking/barbecue-grids',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1MTUyMzI1ODM2OQ',
    name: 'Meat Claws',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE0Njk0NDA3NzgyNQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_OUTDOOR_COOKING_MEAT_CLAWS',
    rawPath: 'kitchen-dining/cookware/outdoor-cooking/meat-claws',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1MTk2MzU0NTYwMQ',
    name: 'Spare Ribs Rack',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE0Njk0NDA3NzgyNQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_OUTDOOR_COOKING_SPARE_RIBS_RACK',
    rawPath: 'kitchen-dining/cookware/outdoor-cooking/spare-ribs-rack',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1NTg4MjYzMTE2OQ',
    name: 'Bakeware',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYyODExNTQ4NDY3Mw',
    },
    path: 'KITCHEN_DINING_COOKWARE_BAKEWARE',
    rawPath: 'kitchen-dining/cookware/bakeware',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYzMDAzNDI5NjgzMw',
    name: 'Oven Dishes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE1NTg4MjYzMTE2OQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_BAKEWARE_OVEN_DISHES',
    rawPath: 'kitchen-dining/cookware/bakeware/oven-dishes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYzMDU1NDc1MDk3Nw',
    name: 'Baking Pans',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE1NTg4MjYzMTE2OQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_BAKEWARE_BAKING_PANS',
    rawPath: 'kitchen-dining/cookware/bakeware/baking-pans',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1NzM3MDEwMTc2MQ',
    name: 'Bread Pans',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzMDU1NDc1MDk3Nw',
    },
    path: 'KITCHEN_DINING_COOKWARE_BAKEWARE_BAKING_PANS_BREAD_PANS',
    rawPath: 'kitchen-dining/cookware/bakeware/baking-pans/bread-pans',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1NzY4NzI5NjAwMQ',
    name: 'Sheet Pans',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzMDU1NDc1MDk3Nw',
    },
    path: 'KITCHEN_DINING_COOKWARE_BAKEWARE_BAKING_PANS_SHEET_PLATES',
    rawPath: 'kitchen-dining/cookware/bakeware/baking-pans/sheet-plates',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1Nzk1MjA0NTA1Nw',
    name: 'Cake Pans',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzMDU1NDc1MDk3Nw',
    },
    path: 'KITCHEN_DINING_COOKWARE_BAKEWARE_BAKING_PANS_CAKE_PANS',
    rawPath: 'kitchen-dining/cookware/bakeware/baking-pans/cake-pans',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1ODE3MDY4OTUzNw',
    name: 'Muffin Pans',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzMDU1NDc1MDk3Nw',
    },
    path: 'KITCHEN_DINING_COOKWARE_BAKEWARE_BAKING_PANS_MUFFIN_PANS',
    rawPath: 'kitchen-dining/cookware/bakeware/baking-pans/muffin-pans',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1ODcwMzkzOTU4NQ',
    name: 'Pie Plates',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzMDU1NDc1MDk3Nw',
    },
    path: 'KITCHEN_DINING_COOKWARE_BAKEWARE_BAKING_PANS_PIE_PLATES',
    rawPath: 'kitchen-dining/cookware/bakeware/baking-pans/pie-plates',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1ODkyODg0Mjc1Mw',
    name: 'Bundt Cake Tins',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzMDU1NDc1MDk3Nw',
    },
    path: 'KITCHEN_DINING_COOKWARE_BAKEWARE_BAKING_PANS_BUNDT_CAKE_TINS',
    rawPath: 'kitchen-dining/cookware/bakeware/baking-pans/bundt-cake-tins',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1OTIzMTI3NTAwOQ',
    name: 'Tart Pans',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzMDU1NDc1MDk3Nw',
    },
    path: 'KITCHEN_DINING_COOKWARE_BAKEWARE_BAKING_PANS_TART_PANS',
    rawPath: 'kitchen-dining/cookware/bakeware/baking-pans/tart-pans',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE1OTY3NjgzNzg4OQ',
    name: 'Tube Pans',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYzMDU1NDc1MDk3Nw',
    },
    path: 'KITCHEN_DINING_COOKWARE_BAKEWARE_BAKING_PANS_TUBE_PANS',
    rawPath: 'kitchen-dining/cookware/bakeware/baking-pans/tube-pans',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE2MTE1NzI5NjEyOQ',
    name: 'Baking Decorations',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE1NTg4MjYzMTE2OQ',
    },
    path: 'KITCHEN_DINING_COOKWARE_BAKEWARE_BAKING_DECORATIONS',
    rawPath: 'kitchen-dining/cookware/bakeware/baking-decorations',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTM2NjI0NjQ1NzM0NQ',
    name: 'To Go',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwOTUzNzI5',
    },
    path: 'KITCHEN_DINING_TO_GO',
    rawPath: 'kitchen-dining/to-go',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTM3MTcxMTgzMjA2NQ',
    name: 'Water Bottle',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTM2NjI0NjQ1NzM0NQ',
    },
    path: 'KITCHEN_DINING_TO_GO_TRAVEL_BOTTLES',
    rawPath: 'kitchen-dining/to-go/travel-bottles',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTM3NDEyNjYyMDY3Mw',
    name: 'Lunch Boxes',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTM2NjI0NjQ1NzM0NQ',
    },
    path: 'KITCHEN_DINING_TO_GO_LUNCH_BOXES',
    rawPath: 'kitchen-dining/to-go/lunch-boxes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTM2ODM2MDY2NTA4OQ',
    name: 'Travel Cups',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTM2NjI0NjQ1NzM0NQ',
    },
    path: 'KITCHEN_DINING_TO_GO_TRAVEL_CUPS',
    rawPath: 'kitchen-dining/to-go/travel-cups',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTM4MDA5ODUwNjc1Mw',
    name: 'Picnic Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTM2NjI0NjQ1NzM0NQ',
    },
    path: 'KITCHEN_DINING_TO_GO_PICNIC_ACCESSORIES',
    rawPath: 'kitchen-dining/to-go/picnic-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE3MTkzNTM3OTQ1Nw',
    name: 'Picnic Baskets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTM4MDA5ODUwNjc1Mw',
    },
    path: 'KITCHEN_DINING_TO_GO_PICNIC_ACCESSORIES_PICNIC_BASKETS',
    rawPath: 'kitchen-dining/to-go/picnic-accessories/picnic-baskets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE3MjIzNzY4MDY0MQ',
    name: 'Picnic Blankets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTM4MDA5ODUwNjc1Mw',
    },
    path: 'KITCHEN_DINING_TO_GO_PICNIC_ACCESSORIES_PICNIC_BLANKETS',
    rawPath: 'kitchen-dining/to-go/picnic-accessories/picnic-blankets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE3MjkxNjEwOTMxMw',
    name: 'Picnic Cutlery Set',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTM4MDA5ODUwNjc1Mw',
    },
    path: 'KITCHEN_DINING_TO_GO_PICNIC_ACCESSORIES_PICNIC_CUTLERY_SET',
    rawPath: 'kitchen-dining/to-go/picnic-accessories/picnic-cutlery-set',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE2MzMxMTc5MjEyOQ',
    name: 'Bottle Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTM2NjI0NjQ1NzM0NQ',
    },
    path: 'KITCHEN_DINING_TO_GO_BOTTLE_ACCESSORIES',
    rawPath: 'kitchen-dining/to-go/bottle-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE2MzU4NDYzNDg4MQ',
    name: 'Travel Bottle Holder',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE2MzMxMTc5MjEyOQ',
    },
    path: 'KITCHEN_DINING_TO_GO_BOTTLE_ACCESSORIES_TRAVEL_BOTTLE_HOLDER',
    rawPath: 'kitchen-dining/to-go/bottle-accessories/travel-bottle-holder',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE2NDE5NTY3NjE2MQ',
    name: 'Bottle Sleeves',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE2MzMxMTc5MjEyOQ',
    },
    path: 'KITCHEN_DINING_TO_GO_BOTTLE_ACCESSORIES_BOTTLE_SLEEVES',
    rawPath: 'kitchen-dining/to-go/bottle-accessories/bottle-sleeves',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE2NDU3NDg1MTA3Mw',
    name: 'Shaker Bottles',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTM2NjI0NjQ1NzM0NQ',
    },
    path: 'KITCHEN_DINING_TO_GO_SHAKER_BOTTLES',
    rawPath: 'kitchen-dining/to-go/shaker-bottles',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE2NDgxODM5OTIzMw',
    name: 'Flasks',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTM2NjI0NjQ1NzM0NQ',
    },
    path: 'KITCHEN_DINING_TO_GO_FLASKS',
    rawPath: 'kitchen-dining/to-go/flasks',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE2NTg3OTgwMzkwNQ',
    name: 'Thermos',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTM2NjI0NjQ1NzM0NQ',
    },
    path: 'KITCHEN_DINING_TO_GO_THERMOS',
    rawPath: 'kitchen-dining/to-go/thermos',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTM3Njk0Nzk5NDYyNQ',
    name: 'Thermos Bottles',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE2NTg3OTgwMzkwNQ',
    },
    path: 'KITCHEN_DINING_TO_GO_THERMOS_THERMOS_BOTTLES',
    rawPath: 'kitchen-dining/to-go/thermos/thermos-bottles',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTM3NzU5NzkxNTEzNw',
    name: 'Thermos Containers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE2NTg3OTgwMzkwNQ',
    },
    path: 'KITCHEN_DINING_TO_GO_THERMOS_THERMOS_CONTAINERS',
    rawPath: 'kitchen-dining/to-go/thermos/thermos-containers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE3MzY2MTIyMDg2NQ',
    name: 'Portable Coffee Makers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTM2NjI0NjQ1NzM0NQ',
    },
    path: 'KITCHEN_DINING_TO_GO_PORTABLE_COFFEE_MAKERS',
    rawPath: 'kitchen-dining/to-go/portable-coffee-makers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYxMzI4OTY2ODYwOQ',
    name: 'Kitchen Appliances',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwOTUzNzI5',
    },
    path: 'KITCHEN_DINING_KITCHEN_APPLIANCES',
    rawPath: 'kitchen-dining/kitchen-appliances',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE5ODc4MjA1NDQwMQ',
    name: 'Kettles',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxMzI4OTY2ODYwOQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_APPLIANCES_KETTLES',
    rawPath: 'kitchen-dining/kitchen-appliances/kettles',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwMDExMzYzMTIzMw',
    name: 'Teapot Warmers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxMzI4OTY2ODYwOQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_APPLIANCES_TEAPOT_WARMERS',
    rawPath: 'kitchen-dining/kitchen-appliances/teapot-warmers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwMDY1OTU5NTI2NQ',
    name: 'Coffee Appliances',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxMzI4OTY2ODYwOQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_APPLIANCES_COFFEE_APPLIANCES',
    rawPath: 'kitchen-dining/kitchen-appliances/coffee-appliances',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTQ4NDEzNTA4ODEyOQ',
    name: 'Espresso Machines',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTIwMDY1OTU5NTI2NQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_APPLIANCES_COFFEE_APPLIANCES_ESPRESSO_MACHINES',
    rawPath:
      'kitchen-dining/kitchen-appliances/coffee-appliances/espresso-machines',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwNjU4ODI2MDM1Mw',
    name: 'Coffee Machines',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTIwMDY1OTU5NTI2NQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_APPLIANCES_COFFEE_APPLIANCES_COFFEE_MACHINES',
    rawPath:
      'kitchen-dining/kitchen-appliances/coffee-appliances/coffee-machines',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwNjgzNjg3MTE2OQ',
    name: 'Cold Brew Coffee Makers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTIwMDY1OTU5NTI2NQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_APPLIANCES_COFFEE_APPLIANCES_COLD_BREW_COFFEE_MAKERS',
    rawPath:
      'kitchen-dining/kitchen-appliances/coffee-appliances/cold-brew-coffee-makers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwNzE0NjEwMjc4NQ',
    name: 'French Presses',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTIwMDY1OTU5NTI2NQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_APPLIANCES_COFFEE_APPLIANCES_FRENCH_PRESSES',
    rawPath:
      'kitchen-dining/kitchen-appliances/coffee-appliances/french-presses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwNzM2MDk3ODk0NQ',
    name: 'Coffee Percolators',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTIwMDY1OTU5NTI2NQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_APPLIANCES_COFFEE_APPLIANCES_COFFEE_PERCOLATORS',
    rawPath:
      'kitchen-dining/kitchen-appliances/coffee-appliances/coffee-percolators',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwODE1NzAxMTk2OQ',
    name: 'Coffee Drippers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTIwMDY1OTU5NTI2NQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_APPLIANCES_COFFEE_APPLIANCES_COFFEE_DRIPPERS',
    rawPath:
      'kitchen-dining/kitchen-appliances/coffee-appliances/coffee-drippers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwODQ5NTQzOTg3Mw',
    name: 'Electric Coffee Grinders',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTIwMDY1OTU5NTI2NQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_APPLIANCES_COFFEE_APPLIANCES_ELECTRIC_COFFEE_GRINDERS',
    rawPath:
      'kitchen-dining/kitchen-appliances/coffee-appliances/electric-coffee-grinders',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwODY5NDkxNTA3Mw',
    name: 'Manual Grinders',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTIwMDY1OTU5NTI2NQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_APPLIANCES_COFFEE_APPLIANCES_MANUAL_GRINDERS',
    rawPath:
      'kitchen-dining/kitchen-appliances/coffee-appliances/manual-grinders',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwOTI1Nzk1MTIzMw',
    name: 'Milk Frothers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxMzI4OTY2ODYwOQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_APPLIANCES_MILK_FROTHERS',
    rawPath: 'kitchen-dining/kitchen-appliances/milk-frothers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIwOTc3MzQ5MDE3Nw',
    name: 'Knife Sharpeners',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxMzI4OTY2ODYwOQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_APPLIANCES_KNIFE_SHARPENERS',
    rawPath: 'kitchen-dining/kitchen-appliances/knife-sharpeners',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIxMDA3NjA1MzUwNQ',
    name: 'Timers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxMzI4OTY2ODYwOQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_APPLIANCES_TIMERS',
    rawPath: 'kitchen-dining/kitchen-appliances/timers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIxMDUyNjk5MDMzNw',
    name: 'Pasta Makers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxMzI4OTY2ODYwOQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_APPLIANCES_PASTA_MAKERS',
    rawPath: 'kitchen-dining/kitchen-appliances/pasta-makers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTIxMDc4NjU2MjA0OQ',
    name: 'Fire Extinguishers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxMzI4OTY2ODYwOQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_APPLIANCES_FIRE_EXTINGUISHERS',
    rawPath: 'kitchen-dining/kitchen-appliances/fire-extinguishers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA2ODgxNjE2ODM3MDE3Nw',
    name: 'Blenders',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxMzI4OTY2ODYwOQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_APPLIANCES_BLENDERS',
    rawPath: 'kitchen-dining/kitchen-appliances/blenders',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA2ODgyNDQ4OTkxODQ2NQ',
    name: 'Toasters',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxMzI4OTY2ODYwOQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_APPLIANCES_TOASTERS',
    rawPath: 'kitchen-dining/kitchen-appliances/toasters',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA2ODgyNjE0NzM0MDI4OQ',
    name: 'Food Processors',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTYxMzI4OTY2ODYwOQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_APPLIANCES_FOOD_PROCESSORS',
    rawPath: 'kitchen-dining/kitchen-appliances/food-processors',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTQ4NzQwMzYxNDIwOQ',
    name: 'Barware',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwOTUzNzI5',
    },
    path: 'KITCHEN_DINING_BARWARE',
    rawPath: 'kitchen-dining/barware',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTQ5MDQyMDc2MDU3Nw',
    name: 'Coasters',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQ4NzQwMzYxNDIwOQ',
    },
    path: 'KITCHEN_DINING_BARWARE_COASTERS',
    rawPath: 'kitchen-dining/barware/coasters',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTQ4OTY2NDQ3NTEzNw',
    name: 'Cocktail Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQ4NzQwMzYxNDIwOQ',
    },
    path: 'KITCHEN_DINING_BARWARE_COCKTAIL_ACCESSORIES',
    rawPath: 'kitchen-dining/barware/cocktail-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE3NTI1MTE3MzM3OA',
    name: 'Cocktail Sets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQ4OTY2NDQ3NTEzNw',
    },
    path: 'KITCHEN_DINING_BARWARE_COCKTAIL_ACCESSORIES_COCKTAIL_SETS',
    rawPath: 'kitchen-dining/barware/cocktail-accessories/cocktail-sets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE3NTQ3NjU1MTY4MQ',
    name: 'Cocktail Shakers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQ4OTY2NDQ3NTEzNw',
    },
    path: 'KITCHEN_DINING_BARWARE_COCKTAIL_ACCESSORIES_COCKTAIL_SHAKERS',
    rawPath: 'kitchen-dining/barware/cocktail-accessories/cocktail-shakers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE3NTY1OTc3Mzk1Mw',
    name: 'Cocktail Strainer',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQ4OTY2NDQ3NTEzNw',
    },
    path: 'KITCHEN_DINING_BARWARE_COCKTAIL_ACCESSORIES_COCKTAIL_STRAINER',
    rawPath: 'kitchen-dining/barware/cocktail-accessories/cocktail-strainer',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE3NTg2NDI5NTQyNQ',
    name: 'Cocktail Spoons',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQ4OTY2NDQ3NTEzNw',
    },
    path: 'KITCHEN_DINING_BARWARE_COCKTAIL_ACCESSORIES_COCKTAIL_SPOONS',
    rawPath: 'kitchen-dining/barware/cocktail-accessories/cocktail-spoons',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE3NjA5Nzk4MDQxNw',
    name: 'Cocktail Muddlers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQ4OTY2NDQ3NTEzNw',
    },
    path: 'KITCHEN_DINING_BARWARE_COCKTAIL_ACCESSORIES_COCKTAIL_MUDDLERS',
    rawPath: 'kitchen-dining/barware/cocktail-accessories/cocktail-muddlers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTQ4NzkzODcxNTY0OQ',
    name: 'Champagne Coolers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQ4NzQwMzYxNDIwOQ',
    },
    path: 'KITCHEN_DINING_BARWARE_CHAMPAGNE_COOLERS',
    rawPath: 'kitchen-dining/barware/champagne-coolers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTQ5MDkxOTgxNzIxNw',
    name: 'Decanters',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQ4NzQwMzYxNDIwOQ',
    },
    path: 'KITCHEN_DINING_BARWARE_DECANTERS',
    rawPath: 'kitchen-dining/barware/decanters',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE5Njk4Njc0NDgzMw',
    name: 'Wine Decanters',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQ5MDkxOTgxNzIxNw',
    },
    path: 'KITCHEN_DINING_BARWARE_DECANTERS_WINE_DECANTERS',
    rawPath: 'kitchen-dining/barware/decanters/wine-decanters',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE5NzI5MzQwNDE2MQ',
    name: 'Liquor Decanters',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQ5MDkxOTgxNzIxNw',
    },
    path: 'KITCHEN_DINING_BARWARE_DECANTERS_LIQUOR_DECANTERS',
    rawPath: 'kitchen-dining/barware/decanters/liquor-decanters',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE4NDQwNzYwMTE1Mw',
    name: 'Ice Cube Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQ4NzQwMzYxNDIwOQ',
    },
    path: 'KITCHEN_DINING_BARWARE_ICE_CUBE_ACCESSORIES',
    rawPath: 'kitchen-dining/barware/ice-cube-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTQwMzc4MDk4ODkyOQ',
    name: 'Ice Cube Trays',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE4NDQwNzYwMTE1Mw',
    },
    path: 'KITCHEN_DINING_BARWARE_ICE_CUBE_ACCESSORIES_ICE_CUBE_TRAYS',
    rawPath: 'kitchen-dining/barware/ice-cube-accessories/ice-cube-trays',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE4NTc3MjYzNDExMw',
    name: 'Ice Buckets',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE4NDQwNzYwMTE1Mw',
    },
    path: 'KITCHEN_DINING_BARWARE_ICE_CUBE_ACCESSORIES_ICE_BUCKETS',
    rawPath: 'kitchen-dining/barware/ice-cube-accessories/ice-buckets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE4OTM1OTE3MzYzMw',
    name: 'Ice Cube Stones',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE4NDQwNzYwMTE1Mw',
    },
    path: 'KITCHEN_DINING_BARWARE_ICE_CUBE_ACCESSORIES_ICE_CUBE_STONES',
    rawPath: 'kitchen-dining/barware/ice-cube-accessories/ice-cube-stones',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE4OTU4NzE3MzM3Nw',
    name: 'Ice Crushers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE4NDQwNzYwMTE1Mw',
    },
    path: 'KITCHEN_DINING_BARWARE_ICE_CUBE_ACCESSORIES_ICE_CRUSHERS',
    rawPath: 'kitchen-dining/barware/ice-cube-accessories/ice-crushers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE5MDA2MTgxNzg1Nw',
    name: 'Bar Tools',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQ4NzQwMzYxNDIwOQ',
    },
    path: 'KITCHEN_DINING_BARWARE_BAR_TOOLS',
    rawPath: 'kitchen-dining/barware/bar-tools',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTQ4ODQ2MTExOTQ4OQ',
    name: 'Bottle Openers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE5MDA2MTgxNzg1Nw',
    },
    path: 'KITCHEN_DINING_BARWARE_BAR_TOOLS_BOTTLE_OPENERS',
    rawPath: 'kitchen-dining/barware/bar-tools/bottle-openers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTQ4OTE3MDU3OTQ1Nw',
    name: 'Bottle Stoppers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE5MDA2MTgxNzg1Nw',
    },
    path: 'KITCHEN_DINING_BARWARE_BAR_TOOLS_BOTTLE_STOPPERS',
    rawPath: 'kitchen-dining/barware/bar-tools/bottle-stoppers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE5MDM1MjUwMjc4NQ',
    name: 'Wine Openers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE5MDA2MTgxNzg1Nw',
    },
    path: 'KITCHEN_DINING_BARWARE_BAR_TOOLS_WINE_OPENERS',
    rawPath: 'kitchen-dining/barware/bar-tools/wine-openers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjM3NDY1ODYzNTA1NTEwNQ',
    name: 'Wine Spreader',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE5MDA2MTgxNzg1Nw',
    },
    path: 'KITCHEN_DINING_BARWARE_BAR_TOOLS_WINE_SPREADER',
    rawPath: 'kitchen-dining/barware/bar-tools/wine-spreader',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjM3MTkyMDA2MTM0OTg4OQ',
    name: 'Wine Coolers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTQ4NzQwMzYxNDIwOQ',
    },
    path: 'KITCHEN_DINING_BARWARE_WINE_COOLERS',
    rawPath: 'kitchen-dining/barware/wine-coolers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTU3ODU2NjY4MDU3Nw',
    name: 'Kitchen Storage',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwOTUzNzI5',
    },
    path: 'KITCHEN_DINING_KITCHEN_STORAGE',
    rawPath: 'kitchen-dining/kitchen-storage',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTU4OTQ1NTUxOTc0NQ',
    name: 'Storage Jars',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTU3ODU2NjY4MDU3Nw',
    },
    path: 'KITCHEN_DINING_KITCHEN_STORAGE_STORAGE_JARS',
    rawPath: 'kitchen-dining/kitchen-storage/storage-jars',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYwNDIzMDkyMjI0MQ',
    name: 'Produce Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTU3ODU2NjY4MDU3Nw',
    },
    path: 'KITCHEN_DINING_KITCHEN_STORAGE_PRODUCE_BAGS',
    rawPath: 'kitchen-dining/kitchen-storage/produce-bags',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTU3OTI5NTk5Nzk1Mw',
    name: 'Fruit Bowls',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTU3ODU2NjY4MDU3Nw',
    },
    path: 'KITCHEN_DINING_KITCHEN_STORAGE_FRUIT_BOWLS',
    rawPath: 'kitchen-dining/kitchen-storage/fruit-bowls',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTU4NTI1MDQ4NDIyNQ',
    name: 'Vacuum Containers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTU3ODU2NjY4MDU3Nw',
    },
    path: 'KITCHEN_DINING_KITCHEN_STORAGE_VACUUM_CONTAINERS',
    rawPath: 'kitchen-dining/kitchen-storage/vacuum-containers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYxMTU4NjMzODgxNw',
    name: 'Food Wraps',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTU3ODU2NjY4MDU3Nw',
    },
    path: 'KITCHEN_DINING_KITCHEN_STORAGE_FOOD_WRAPS',
    rawPath: 'kitchen-dining/kitchen-storage/food-wraps',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYxMjE0NjUwNzc3Nw',
    name: 'Bag Clips',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTU3ODU2NjY4MDU3Nw',
    },
    path: 'KITCHEN_DINING_KITCHEN_STORAGE_BAG_CLIPS',
    rawPath: 'kitchen-dining/kitchen-storage/bag-clips',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE3NDMxMDAxMDg4MQ',
    name: 'Bread Storage',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTU3ODU2NjY4MDU3Nw',
    },
    path: 'KITCHEN_DINING_KITCHEN_STORAGE_BREAD_STORAGE',
    rawPath: 'kitchen-dining/kitchen-storage/bread-storage',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYwMTc0NTc4MDczNw',
    name: 'Bread Boxes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE3NDMxMDAxMDg4MQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_STORAGE_BREAD_STORAGE_BREAD_BOXES',
    rawPath: 'kitchen-dining/kitchen-storage/bread-storage/bread-boxes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE3NjY0NTUzMzY5Nw',
    name: 'Bread Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE3NDMxMDAxMDg4MQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_STORAGE_BREAD_STORAGE_BREAD_BAGS',
    rawPath: 'kitchen-dining/kitchen-storage/bread-storage/bread-bags',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE4MTU1MTgzNzE4Ng',
    name: 'Sandwich Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTU3ODU2NjY4MDU3Nw',
    },
    path: 'KITCHEN_DINING_KITCHEN_STORAGE_SANDWICH_BAGS',
    rawPath: 'kitchen-dining/kitchen-storage/sandwich-bags',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE4Mjg1Mjg5MDYyNQ',
    name: 'Trays and Racks',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTU3ODU2NjY4MDU3Nw',
    },
    path: 'KITCHEN_DINING_KITCHEN_STORAGE_TRAYS_AND_RACKS',
    rawPath: 'kitchen-dining/kitchen-storage/trays-and-racks',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYwMzE4NzI0NTA1Nw',
    name: 'Bottle Holders',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE4Mjg1Mjg5MDYyNQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_STORAGE_TRAYS_AND_RACKS_BOTTLE_HOLDERS',
    rawPath: 'kitchen-dining/kitchen-storage/trays-and-racks/bottle-holders',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE4MzU3MDY1NzI4MQ',
    name: 'Wine Racks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE4Mjg1Mjg5MDYyNQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_STORAGE_TRAYS_AND_RACKS_WINE_RACKS',
    rawPath: 'kitchen-dining/kitchen-storage/trays-and-racks/wine-racks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE4NjI1NTU1MjUxMw',
    name: 'Spice Racks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE4Mjg1Mjg5MDYyNQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_STORAGE_TRAYS_AND_RACKS_SPICE_RACKS',
    rawPath: 'kitchen-dining/kitchen-storage/trays-and-racks/spice-racks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE4NjYxMjkzNjcwNQ',
    name: 'Egg Trays',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE4Mjg1Mjg5MDYyNQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_STORAGE_TRAYS_AND_RACKS_EGG_TRAYS',
    rawPath: 'kitchen-dining/kitchen-storage/trays-and-racks/egg-trays',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE4NzA0NzA3OTkzNw',
    name: 'Dish Racks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE4Mjg1Mjg5MDYyNQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_STORAGE_TRAYS_AND_RACKS_DISH_RACKS',
    rawPath: 'kitchen-dining/kitchen-storage/trays-and-racks/dish-racks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE4NzUyOTI0NDY3Mw',
    name: 'Banana Racks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE4Mjg1Mjg5MDYyNQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_STORAGE_TRAYS_AND_RACKS_BANANA_RACKS',
    rawPath: 'kitchen-dining/kitchen-storage/trays-and-racks/banana-racks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE4Nzg3NDI1ODk0NQ',
    name: 'Cutlery Trays',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTE4Mjg1Mjg5MDYyNQ',
    },
    path: 'KITCHEN_DINING_KITCHEN_STORAGE_TRAYS_AND_RACKS_CUTLERY_TRAYS',
    rawPath: 'kitchen-dining/kitchen-storage/trays-and-racks/cutlery-trays',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTE5MTA2NTkyNzY4MQ',
    name: 'Kitchen Roll Holders',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMyMTU3ODU2NjY4MDU3Nw',
    },
    path: 'KITCHEN_DINING_KITCHEN_STORAGE_KITCHEN_ROLL_HOLDERS',
    rawPath: 'kitchen-dining/kitchen-storage/kitchen-roll-holders',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTA3OTE4NTU4ODIyNQ',
    name: 'Dinner Settings',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcwOTUzNzI5',
    },
    path: 'KITCHEN_DINING_DINNER_SETTINGS',
    rawPath: 'kitchen-dining/dinner-settings',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTM5MTIwMDI1NjAwMQ',
    name: 'Placemats',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTA3OTE4NTU4ODIyNQ',
    },
    path: 'KITCHEN_DINING_DINNER_SETTINGS_PLACEMATS',
    rawPath: 'kitchen-dining/dinner-settings/placemats',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTM4MzExMDY1NjAwMQ',
    name: 'Napkins',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTA3OTE4NTU4ODIyNQ',
    },
    path: 'KITCHEN_DINING_DINNER_SETTINGS_NAPKINS',
    rawPath: 'kitchen-dining/dinner-settings/napkins',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTM5MDc0NDUwMjI3Mw',
    name: 'Table Runners',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTA3OTE4NTU4ODIyNQ',
    },
    path: 'KITCHEN_DINING_DINNER_SETTINGS_TABLE_RUNNERS',
    rawPath: 'kitchen-dining/dinner-settings/table-runners',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTM4NDk0NDY5NzM0NQ',
    name: 'Tablecloths',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTA3OTE4NTU4ODIyNQ',
    },
    path: 'KITCHEN_DINING_DINNER_SETTINGS_TABLECLOTHS',
    rawPath: 'kitchen-dining/dinner-settings/tablecloths',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEwNTk2MTk5MjE5Mw',
    name: 'Charger Plates',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTA3OTE4NTU4ODIyNQ',
    },
    path: 'KITCHEN_DINING_DINNER_SETTINGS_CHARGER_PLATES',
    rawPath: 'kitchen-dining/dinner-settings/charger-plates',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEwODczMzY0MDcwNQ',
    name: 'Napkin Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTA3OTE4NTU4ODIyNQ',
    },
    path: 'KITCHEN_DINING_DINNER_SETTINGS_NAPKIN_ACCESSORIES',
    rawPath: 'kitchen-dining/dinner-settings/napkin-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMyMTYxODc2Mjg3NDg4MQ',
    name: 'Napkin Holders',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwODczMzY0MDcwNQ',
    },
    path: 'KITCHEN_DINING_DINNER_SETTINGS_NAPKIN_ACCESSORIES_NAPKIN_HOLDERS',
    rawPath: 'kitchen-dining/dinner-settings/napkin-accessories/napkin-holders',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTEwOTY3NjE2MzA3Mw',
    name: 'Napkin Rings',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTEwODczMzY0MDcwNQ',
    },
    path: 'KITCHEN_DINING_DINNER_SETTINGS_NAPKIN_ACCESSORIES_NAPKIN_RINGS',
    rawPath: 'kitchen-dining/dinner-settings/napkin-accessories/napkin-rings',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyOTExMzAxNjI1NDQ2NQ',
    name: 'Knife Rests',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyOTA3OTE4NTU4ODIyNQ',
    },
    path: 'KITCHEN_DINING_DINNER_SETTINGS_KNIFE_RESTS',
    rawPath: 'kitchen-dining/dinner-settings/knife-rests',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTY0MDExMzcwMDg2NQ',
    name: 'Food & Beverages',
    parent: null,
    path: 'FOOD_AND_BEVERAGES',
    rawPath: 'food-and-beverages',
    depth: 0,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMzQzMTM0MTQ5MDE3Nw',
    name: 'DIY',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMTY0MDExMzcwMDg2NQ',
    },
    path: 'FOOD_AND_BEVERAGES_DIY',
    rawPath: 'food-and-beverages/diy',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDgyMTQ4MTk3OTkwNQ',
    name: 'Food',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMTY0MDExMzcwMDg2NQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD',
    rawPath: 'food-and-beverages/food',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMxMTgwMzYwMDI1NzAyNQ',
    name: 'Grains',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMTQ4MTk3OTkwNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_GRAINS',
    rawPath: 'food-and-beverages/food/grains',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMTAwNDU4NzU0ODY3Mw',
    name: 'Pasta',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMxMTgwMzYwMDI1NzAyNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_GRAINS_PASTA',
    rawPath: 'food-and-beverages/food/grains/pasta',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMTAwNDg1ODkzMzI0OQ',
    name: 'Rice',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMxMTgwMzYwMDI1NzAyNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_GRAINS_RICE',
    rawPath: 'food-and-beverages/food/grains/rice',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMTAwNTA5NTQzNjI4OQ',
    name: 'Couscous',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMxMTgwMzYwMDI1NzAyNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_GRAINS_COUSCOUS',
    rawPath: 'food-and-beverages/food/grains/couscous',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMTAwNTM4MDYzMjU3Nw',
    name: 'Quinoa',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMxMTgwMzYwMDI1NzAyNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_GRAINS_QUINOA',
    rawPath: 'food-and-beverages/food/grains/quinoa',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMTAwNTU4MzA0MDUxMw',
    name: 'Bulgur',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMxMTgwMzYwMDI1NzAyNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_GRAINS_BULGUR',
    rawPath: 'food-and-beverages/food/grains/bulgur',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMTAwNjM0MDQ0MDA2NQ',
    name: 'Crackers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMxMTgwMzYwMDI1NzAyNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_GRAINS_CRACKERS',
    rawPath: 'food-and-beverages/food/grains/crackers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMTAwNjU1NzgyMjk3Nw',
    name: 'Noodles',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMxMTgwMzYwMDI1NzAyNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_GRAINS_NOODLES',
    rawPath: 'food-and-beverages/food/grains/noodles',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwNzI2NzAyNzg3Nzg4OQ',
    name: 'Condiments',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMTQ4MTk3OTkwNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CONDIMENTS',
    rawPath: 'food-and-beverages/food/condiments',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk4NjAzMDcwMjU5Mw',
    name: 'Tapenades',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwNzI2NzAyNzg3Nzg4OQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CONDIMENTS_TAPENADES',
    rawPath: 'food-and-beverages/food/condiments/tapenades',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk4NjMxMTU0MDczNw',
    name: 'Truffles',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwNzI2NzAyNzg3Nzg4OQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CONDIMENTS_TRUFFLES',
    rawPath: 'food-and-beverages/food/condiments/truffles',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk4NjYyNTYyMjAxNw',
    name: 'Miso',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwNzI2NzAyNzg3Nzg4OQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CONDIMENTS_MISO',
    rawPath: 'food-and-beverages/food/condiments/miso',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk4NjkxMzUyMTY2NQ',
    name: 'Olives',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwNzI2NzAyNzg3Nzg4OQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CONDIMENTS_OLIVES',
    rawPath: 'food-and-beverages/food/condiments/olives',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk4NzU5NDE3ODU2MQ',
    name: 'Sugar',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwNzI2NzAyNzg3Nzg4OQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CONDIMENTS_SUGAR',
    rawPath: 'food-and-beverages/food/condiments/sugar',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk4NzkzNjQ1NjcwNQ',
    name: 'Pates',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwNzI2NzAyNzg3Nzg4OQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CONDIMENTS_PATES',
    rawPath: 'food-and-beverages/food/condiments/pates',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk4ODI3OTcxNzg4OQ',
    name: 'Rilettes',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwNzI2NzAyNzg3Nzg4OQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CONDIMENTS_RILETTES',
    rawPath: 'food-and-beverages/food/condiments/rilettes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjM3MTkxMjY0NzM5MzI4MQ',
    name: 'Pestos',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwNzI2NzAyNzg3Nzg4OQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CONDIMENTS_PESTOS',
    rawPath: 'food-and-beverages/food/condiments/pestos',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMzQ0MTQzMTYwOTM0NQ',
    name: 'Cheese',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMTQ4MTk3OTkwNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CHEESE',
    rawPath: 'food-and-beverages/food/cheese',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMzA4NjA0NTM4MDYwOQ',
    name: 'Seasoning',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMTQ4MTk3OTkwNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SEASONING',
    rawPath: 'food-and-beverages/food/seasoning',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkyNDczODc0ODQxNw',
    name: 'Single Spices',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4NjA0NTM4MDYwOQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SEASONING_SINGLE_SPICES',
    rawPath: 'food-and-beverages/food/seasoning/single-spices',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkyNTAwNjgzOTgwOQ',
    name: 'Spice Mixes',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4NjA0NTM4MDYwOQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SEASONING_SPICE_MIXES',
    rawPath: 'food-and-beverages/food/seasoning/spice-mixes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMzA4NjczNjM1OTQyNQ',
    name: 'Cooking Oils',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMTQ4MTk3OTkwNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_COOKING_OILS',
    rawPath: 'food-and-beverages/food/cooking-oils',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkxNjkwMTUxMTE2OQ',
    name: 'Olive Oils',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4NjczNjM1OTQyNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_COOKING_OILS_OLIVE_OILS',
    rawPath: 'food-and-beverages/food/cooking-oils/olive-oils',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkxODQ4NzQxNjgzMw',
    name: 'Nut Oils',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4NjczNjM1OTQyNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_COOKING_OILS_NUT_OILS',
    rawPath: 'food-and-beverages/food/cooking-oils/nut-oils',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkxODk4Mzk2NjcyMQ',
    name: 'Vegetable Oils',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4NjczNjM1OTQyNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_COOKING_OILS_VEGETABLE_OILS',
    rawPath: 'food-and-beverages/food/cooking-oils/vegetable-oils',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkxOTQ3OTE1NjczNw',
    name: 'Sunflower Oils',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4NjczNjM1OTQyNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_COOKING_OILS_SUNFLOWER_OILS',
    rawPath: 'food-and-beverages/food/cooking-oils/sunflower-oils',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkxOTkwNTI1NTQyNQ',
    name: 'Coconut Oils',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4NjczNjM1OTQyNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_COOKING_OILS_COCONUT_OILS',
    rawPath: 'food-and-beverages/food/cooking-oils/coconut-oils',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMzA4NDg3NTYxMjE2MQ',
    name: 'Spreads',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMTQ4MTk3OTkwNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SPREADS',
    rawPath: 'food-and-beverages/food/spreads',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMzM5NTQ5NDk1Mjk2MQ',
    name: 'Jams',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4NDg3NTYxMjE2MQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SPREADS_JAMS',
    rawPath: 'food-and-beverages/food/spreads/jams',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMzA4Mzc3MDk4NjQ5Nw',
    name: 'Honey',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4NDg3NTYxMjE2MQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SPREADS_HONEY',
    rawPath: 'food-and-beverages/food/spreads/honey',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkwOTQ4Mjg2ODczNw',
    name: 'Nut Spreads',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4NDg3NTYxMjE2MQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SPREADS_NUT_SPREADS',
    rawPath: 'food-and-beverages/food/spreads/nut-spreads',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkwOTg1MzMyNzM2MQ',
    name: 'Chocolate Spreads',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4NDg3NTYxMjE2MQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SPREADS_CHOCOLATE_SPREADS',
    rawPath: 'food-and-beverages/food/spreads/chocolate-spreads',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkxMDM5NzM1ODA4MQ',
    name: 'Molasses',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4NDg3NTYxMjE2MQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SPREADS_MOLASSES',
    rawPath: 'food-and-beverages/food/spreads/molasses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkxMjAwODE4MzgwOQ',
    name: 'Marmalades',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4NDg3NTYxMjE2MQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SPREADS_MARMALADES',
    rawPath: 'food-and-beverages/food/spreads/marmalades',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkxMjYyMTYxNzE1Mw',
    name: 'Savoury Spreads',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4NDg3NTYxMjE2MQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SPREADS_SAVOURY_SPREADS',
    rawPath: 'food-and-beverages/food/spreads/savoury-spreads',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkxMzA4NTEwNDEyOQ',
    name: 'Chutneys',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4NDg3NTYxMjE2MQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SPREADS_CHUTNEYS',
    rawPath: 'food-and-beverages/food/spreads/chutneys',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMzA4MzI3NzYzMTQ4OQ',
    name: 'Chocolate',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMTQ4MTk3OTkwNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CHOCOLATE',
    rawPath: 'food-and-beverages/food/chocolate',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMzQzNDc0MTY2MTY5Nw',
    name: 'Cacao',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4MzI3NzYzMTQ4OQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CHOCOLATE_CACAO',
    rawPath: 'food-and-beverages/food/chocolate/cacao',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg3ODA3MjY5MjczNw',
    name: 'Chocolate Bars',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4MzI3NzYzMTQ4OQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CHOCOLATE_CHOCOLATE_BARS',
    rawPath: 'food-and-beverages/food/chocolate/chocolate-bars',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg4MDk1MzIyOTMxMw',
    name: 'Protein Chocolate',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4MzI3NzYzMTQ4OQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CHOCOLATE_PROTEIN_CHOCOLATE',
    rawPath: 'food-and-beverages/food/chocolate/protein-chocolate',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg4MTIwOTAzMjcwNQ',
    name: 'Chocolate Gifts',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4MzI3NzYzMTQ4OQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CHOCOLATE_CHOCOLATE_GIFTS',
    rawPath: 'food-and-beverages/food/chocolate/chocolate-gifts',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg4MTY2NzYwNDQ4MQ',
    name: 'Pralines',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4MzI3NzYzMTQ4OQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CHOCOLATE_PRALINES',
    rawPath: 'food-and-beverages/food/chocolate/pralines',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg4Mjk3NjczNTIzMw',
    name: 'Seasonal Chocolate',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4MzI3NzYzMTQ4OQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CHOCOLATE_SEASONAL_CHOCOLATE',
    rawPath: 'food-and-beverages/food/chocolate/seasonal-chocolate',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg4Mzc1MTE0MTM3Nw',
    name: 'Chocolate Letters',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4MzI3NzYzMTQ4OQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CHOCOLATE_CHOCOLATE_LETTERS',
    rawPath: 'food-and-beverages/food/chocolate/chocolate-letters',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg4NTA3Mzg3MDg0OQ',
    name: 'Chocolate Covered Nuts',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4MzI3NzYzMTQ4OQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CHOCOLATE_CHOCOLATE_COVERED_NUTS',
    rawPath: 'food-and-beverages/food/chocolate/chocolate-covered-nuts',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg4NTU5MDYwNTgyNQ',
    name: 'Chocolate Covered Fruits',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4MzI3NzYzMTQ4OQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CHOCOLATE_CHOCOLATE_COVERED_FRUITS',
    rawPath: 'food-and-beverages/food/chocolate/chocolate-covered-fruits',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg4NjE4Nzc4NjI0MQ',
    name: 'Chocolate Chips',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4MzI3NzYzMTQ4OQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CHOCOLATE_CHOCOLATE_CHIPS',
    rawPath: 'food-and-beverages/food/chocolate/chocolate-chips',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg4NzI1Njk4OTY5Nw',
    name: 'Chocolate Sticks ',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4MzI3NzYzMTQ4OQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CHOCOLATE_CHOCOLATE_STICKS',
    rawPath: 'food-and-beverages/food/chocolate/chocolate-sticks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDgyMjI2NTYyNjYyNQ',
    name: 'Snacks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMTQ4MTk3OTkwNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SNACKS',
    rawPath: 'food-and-beverages/food/snacks',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMzQyOTc5NzYyNTg1Nw',
    name: 'Nuts',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMjI2NTYyNjYyNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SNACKS_NUTS',
    rawPath: 'food-and-beverages/food/snacks/nuts',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg2MzM5NDI5OTkwNQ',
    name: 'Single Type Nuts',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzQyOTc5NzYyNTg1Nw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SNACKS_NUTS_SINGLE_TYPE_NUTS',
    rawPath: 'food-and-beverages/food/snacks/nuts/single-type-nuts',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg2Mzg5MTQzOTYxNw',
    name: 'Nut Mix',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzQyOTc5NzYyNTg1Nw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SNACKS_NUTS_NUT_MIX',
    rawPath: 'food-and-beverages/food/snacks/nuts/nut-mix',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg3MTUyODkzOTUyMQ',
    name: 'Covered Nuts',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzQyOTc5NzYyNTg1Nw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SNACKS_NUTS_COVERED_NUTS',
    rawPath: 'food-and-beverages/food/snacks/nuts/covered-nuts',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMzQzNTQxNzYzMjc2OQ',
    name: 'Cookies',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMjI2NTYyNjYyNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SNACKS_COOKIES',
    rawPath: 'food-and-beverages/food/snacks/cookies',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDgyMzIzMzQ2MjI3Mw',
    name: 'Cakes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMjI2NTYyNjYyNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SNACKS_CAKES',
    rawPath: 'food-and-beverages/food/snacks/cakes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDgyNDQxMjEyNzIzMw',
    name: 'Snack Bars',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMjI2NTYyNjYyNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SNACKS_SNACK_BARS',
    rawPath: 'food-and-beverages/food/snacks/snack-bars',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDgyNzAyMDkzNTE2OQ',
    name: 'Chips',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMjI2NTYyNjYyNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SNACKS_CHIPS',
    rawPath: 'food-and-beverages/food/snacks/chips',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDgyNzM1NzU5MzYwMQ',
    name: 'Popcorn',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMjI2NTYyNjYyNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SNACKS_POPCORN',
    rawPath: 'food-and-beverages/food/snacks/popcorn',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDgyNzc5MjkzMjg2NQ',
    name: 'Pretzels',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMjI2NTYyNjYyNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SNACKS_PRETZELS',
    rawPath: 'food-and-beverages/food/snacks/pretzels',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg1OTg3MDU0Mzg3Mw',
    name: 'Salty Crackers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMjI2NTYyNjYyNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SNACKS_SALTY_CRACKERS',
    rawPath: 'food-and-beverages/food/snacks/salty-crackers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg3MjE5NzU3MDU2MQ',
    name: 'Dried Fruits',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMjI2NTYyNjYyNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SNACKS_DRIED_FRUITS',
    rawPath: 'food-and-beverages/food/snacks/dried-fruits',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg3MjY2OTk3MDQzMw',
    name: 'Single Dried Fruits',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDg3MjE5NzU3MDU2MQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SNACKS_DRIED_FRUITS_SINGLE_DRIED_FRUITS',
    rawPath: 'food-and-beverages/food/snacks/dried-fruits/single-dried-fruits',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg3MzA3OTY2ODczNw',
    name: 'Dried Fruit Mix',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDg3MjE5NzU3MDU2MQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SNACKS_DRIED_FRUITS_DRIED_FRUIT_MIX',
    rawPath: 'food-and-beverages/food/snacks/dried-fruits/dried-fruit-mix',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg3MzQ0MDg3MDQwMQ',
    name: 'Covered Dried Fruits',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDg3MjE5NzU3MDU2MQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SNACKS_DRIED_FRUITS_COVERED_DRIED_FRUITS',
    rawPath: 'food-and-beverages/food/snacks/dried-fruits/covered-dried-fruits',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg5NDE1NjQ1NTkzNw',
    name: 'Candy',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMTQ4MTk3OTkwNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CANDY',
    rawPath: 'food-and-beverages/food/candy',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg5NTgwOTYxNzkyMQ',
    name: 'Bonbons',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDg5NDE1NjQ1NTkzNw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CANDY_BONBONS',
    rawPath: 'food-and-beverages/food/candy/bonbons',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg5NjYzOTAwODc2OQ',
    name: 'Lollipops',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDg5NDE1NjQ1NTkzNw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CANDY_LOLLIPOPS',
    rawPath: 'food-and-beverages/food/candy/lollipops',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg5Njk3Mzg5NzcyOQ',
    name: 'Mixed Candy',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDg5NDE1NjQ1NTkzNw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CANDY_MIXED_CANDY',
    rawPath: 'food-and-beverages/food/candy/mixed-candy',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg5NzI0NTQyOTc2MQ',
    name: 'Candy Gift Sets',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDg5NDE1NjQ1NTkzNw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CANDY_CANDY_GIFT_SETS',
    rawPath: 'food-and-beverages/food/candy/candy-gift-sets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg5NzU4NzE2NzIzMw',
    name: 'Toffees',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDg5NDE1NjQ1NTkzNw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CANDY_TOFFEES',
    rawPath: 'food-and-beverages/food/candy/toffees',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg5Nzg1NzkxMjgzMw',
    name: 'Fudge',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDg5NDE1NjQ1NTkzNw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CANDY_FUDGE',
    rawPath: 'food-and-beverages/food/candy/fudge',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg5ODA5OTE1MDg0OQ',
    name: 'Marzipan',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDg5NDE1NjQ1NTkzNw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CANDY_MARZIPAN',
    rawPath: 'food-and-beverages/food/candy/marzipan',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg5ODgzNjg1NjgzMw',
    name: 'Chewing Gum ',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDg5NDE1NjQ1NTkzNw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CANDY_CHEWING_GUM',
    rawPath: 'food-and-beverages/food/candy/chewing-gum',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDg5OTM4MTQyODIyNQ',
    name: 'Mints',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDg5NDE1NjQ1NTkzNw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CANDY_MINTS',
    rawPath: 'food-and-beverages/food/candy/mints',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkwMDE0NjU5Mzc5Mw',
    name: 'Cotton Candy',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDg5NDE1NjQ1NTkzNw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CANDY_COTTON_CANDY',
    rawPath: 'food-and-beverages/food/candy/cotton-candy',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkwMDQ0MTkzMTc3Nw',
    name: 'Marshmallows',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDg5NDE1NjQ1NTkzNw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CANDY_MARSHMALLOWS',
    rawPath: 'food-and-beverages/food/candy/marshmallows',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkwMDk5MjU2NTI0OQ',
    name: 'Licorice',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDg5NDE1NjQ1NTkzNw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CANDY_LICORICE',
    rawPath: 'food-and-beverages/food/candy/licorice',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkwMTI4ODMxMjgzMw',
    name: 'Candy Canes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDg5NDE1NjQ1NTkzNw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CANDY_CANDY_CANES',
    rawPath: 'food-and-beverages/food/candy/candy-canes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkwMTY1MzE2ODEyOQ',
    name: 'Gummies',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDg5NDE1NjQ1NTkzNw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CANDY_GUMMIES',
    rawPath: 'food-and-beverages/food/candy/gummies',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkxNDQzMDE0ODYwOQ',
    name: 'Syrups',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMTQ4MTk3OTkwNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SYRUPS',
    rawPath: 'food-and-beverages/food/syrups',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkyMTQ2OTE3Mzc2MQ',
    name: 'Vinegars',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMTQ4MTk3OTkwNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_VINEGARS',
    rawPath: 'food-and-beverages/food/vinegars',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk0MTEwNTg4OTI4MQ',
    name: 'Cereals',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMTQ4MTk3OTkwNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CEREALS',
    rawPath: 'food-and-beverages/food/cereals',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMzM5MTQzNTIxMDc1Mw',
    name: 'Granola',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk0MTEwNTg4OTI4MQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CEREALS_GRANOLA',
    rawPath: 'food-and-beverages/food/cereals/granola',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3MDEyMTE4MzIzMw',
    name: 'Muesli',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk0MTEwNTg4OTI4MQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CEREALS_MUESLI',
    rawPath: 'food-and-beverages/food/cereals/muesli',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3MDQwMjM4MTgyNQ',
    name: 'Breakfast Cereals',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk0MTEwNTg4OTI4MQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CEREALS_BREAKFAST_CEREALS',
    rawPath: 'food-and-beverages/food/cereals/breakfast-cereals',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3MDg2NTYwNjY1Nw',
    name: 'Oats',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk0MTEwNTg4OTI4MQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CEREALS_OATS',
    rawPath: 'food-and-beverages/food/cereals/oats',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3MTI4NzY3NDg4MQ',
    name: 'Porridge',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk0MTEwNTg4OTI4MQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CEREALS_PORRIDGE',
    rawPath: 'food-and-beverages/food/cereals/porridge',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3MDg3OTkyNjI3Mw',
    name: 'Baking Ingredients',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMTQ4MTk3OTkwNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_BAKING_INGREDIENTS',
    rawPath: 'food-and-beverages/food/baking-ingredients',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMzM5Mjg4OTc0OTUwNQ',
    name: 'Cake Mixes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk3MDg3OTkyNjI3Mw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_BAKING_INGREDIENTS_CAKE_MIXES',
    rawPath: 'food-and-beverages/food/baking-ingredients/cake-mixes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3MzgzNzY4MDY0Mg',
    name: 'Brownie Mixes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk3MDg3OTkyNjI3Mw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_BAKING_INGREDIENTS_BROWNIE_MIXES',
    rawPath: 'food-and-beverages/food/baking-ingredients/brownie-mixes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3NDE2NTIxMzE4Ng',
    name: 'Cookie Mixes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk3MDg3OTkyNjI3Mw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_BAKING_INGREDIENTS_COOKIE_MIXES',
    rawPath: 'food-and-beverages/food/baking-ingredients/cookie-mixes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3NDQ1NDk5Njk5Mw',
    name: 'Bread Mixes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk3MDg3OTkyNjI3Mw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_BAKING_INGREDIENTS_BREAD_MIXES',
    rawPath: 'food-and-beverages/food/baking-ingredients/bread-mixes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3NDcwMjU3NTYxNw',
    name: 'Cupcake Mixes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk3MDg3OTkyNjI3Mw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_BAKING_INGREDIENTS_CUPCAKE_MIXES',
    rawPath: 'food-and-beverages/food/baking-ingredients/cupcake-mixes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3NTE0MDY4Mzc3Nw',
    name: 'Frosting',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk3MDg3OTkyNjI3Mw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_BAKING_INGREDIENTS_FROSTING',
    rawPath: 'food-and-beverages/food/baking-ingredients/frosting',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3NTU1NTQyODM1Mw',
    name: 'Sprinkles',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk3MDg3OTkyNjI3Mw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_BAKING_INGREDIENTS_SPRINKLES',
    rawPath: 'food-and-beverages/food/baking-ingredients/sprinkles',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3NTg2OTc1NTM5Mw',
    name: 'Fondant',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk3MDg3OTkyNjI3Mw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_BAKING_INGREDIENTS_FONDANT',
    rawPath: 'food-and-beverages/food/baking-ingredients/fondant',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3NzYyMjIyMDgwMQ',
    name: 'Food Colouring',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk3MDg3OTkyNjI3Mw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_BAKING_INGREDIENTS_FOOD_COLOURING',
    rawPath: 'food-and-beverages/food/baking-ingredients/food-colouring',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3ODA0MjgzMDg0OQ',
    name: 'Flour',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk3MDg3OTkyNjI3Mw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_BAKING_INGREDIENTS_FLOUR',
    rawPath: 'food-and-beverages/food/baking-ingredients/flour',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3MjcyODU4MjE0NQ',
    name: 'Superfoods',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMTQ4MTk3OTkwNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SUPERFOODS',
    rawPath: 'food-and-beverages/food/superfoods',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3MzExNTUzOTQ1Nw',
    name: 'Linseeds',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk3MjcyODU4MjE0NQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SUPERFOODS_LINSEEDS',
    rawPath: 'food-and-beverages/food/superfoods/linseeds',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3MzU2MzUyNzE2OQ',
    name: 'Spirulina',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk3MjcyODU4MjE0NQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SUPERFOODS_SPIRULINA',
    rawPath: 'food-and-beverages/food/superfoods/spirulina',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3NDY1MzI1OTc3Nw',
    name: 'Chia Seeds',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk3MjcyODU4MjE0NQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SUPERFOODS_CHIA_SEEDS',
    rawPath: 'food-and-beverages/food/superfoods/chia-seeds',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3NTU5NTU1Mjc2OQ',
    name: 'Cacao Nibs',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk3MjcyODU4MjE0NQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SUPERFOODS_CACAO_NIBS',
    rawPath: 'food-and-beverages/food/superfoods/cacao-nibs',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3NjAyMzc2NDk5Mw',
    name: 'Matcha',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk3MjcyODU4MjE0NQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SUPERFOODS_MATCHA',
    rawPath: 'food-and-beverages/food/superfoods/matcha',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3NjYzMjg3Mjk2MQ',
    name: 'Goji Berries',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk3MjcyODU4MjE0NQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SUPERFOODS_GOJI_BERRIES',
    rawPath: 'food-and-beverages/food/superfoods/goji-berries',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3NzU5Mjc3ODc1Mw',
    name: 'Açaí',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk3MjcyODU4MjE0NQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SUPERFOODS_ACAI',
    rawPath: 'food-and-beverages/food/superfoods/acai',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3ODI3OTM4MzA0MQ',
    name: 'Bee Pollen',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk3MjcyODU4MjE0NQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SUPERFOODS_BEE_POLLEN',
    rawPath: 'food-and-beverages/food/superfoods/bee-pollen',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3ODgwNjUzODI0MQ',
    name: 'Ashwagandha',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk3MjcyODU4MjE0NQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SUPERFOODS_ASHWAGANDHA',
    rawPath: 'food-and-beverages/food/superfoods/ashwagandha',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk3OTM5NjE4MjAxNw',
    name: 'Meal Supplement Drinks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk3MjcyODU4MjE0NQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SUPERFOODS_MEAL_SUPPLEMENT_DRINKS',
    rawPath: 'food-and-beverages/food/superfoods/meal-supplement-drinks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk4MTU4MzQ2MjQwMQ',
    name: 'Cured Meats',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMTQ4MTk3OTkwNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_CURED_MEATS',
    rawPath: 'food-and-beverages/food/cured-meats',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk4MzQ1OTM4MTI1MA',
    name: 'Sports Nutrition',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMTQ4MTk3OTkwNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SPORTS_NUTRITION',
    rawPath: 'food-and-beverages/food/sports-nutrition',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk4NDA0ODYzMTgwOQ',
    name: 'Protein',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk4MzQ1OTM4MTI1MA',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SPORTS_NUTRITION_PROTEIN',
    rawPath: 'food-and-beverages/food/sports-nutrition/protein',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk4NDM5ODAzNjk5Mw',
    name: 'Sports Supplements',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk4MzQ1OTM4MTI1MA',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SPORTS_NUTRITION_SPORTS_SUPPLEMENTS',
    rawPath: 'food-and-beverages/food/sports-nutrition/sports-supplements',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk4NTExOTM0MjU5Mw',
    name: 'Pre Workout Foods',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk4MzQ1OTM4MTI1MA',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SPORTS_NUTRITION_PRE_WORKOUT_FOODS',
    rawPath: 'food-and-beverages/food/sports-nutrition/pre-workout-foods',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk4NTY4NzY1NDQwMQ',
    name: 'Weight Gainers ',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk4MzQ1OTM4MTI1MA',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SPORTS_NUTRITION_WEIGHT_GAINERS',
    rawPath: 'food-and-beverages/food/sports-nutrition/weight-gainers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk4NTk2MzE4NDEyOQ',
    name: 'Energy Bars ',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk4MzQ1OTM4MTI1MA',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SPORTS_NUTRITION_ENERGY_BARS',
    rawPath: 'food-and-beverages/food/sports-nutrition/energy-bars',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk4NjY4ODk5NTMyOQ',
    name: 'Energy Gels ',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk4MzQ1OTM4MTI1MA',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SPORTS_NUTRITION_ENERGY_GELS',
    rawPath: 'food-and-beverages/food/sports-nutrition/energy-gels',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk4NzcyMzc0MzIzMw',
    name: 'Creatine ',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk4MzQ1OTM4MTI1MA',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SPORTS_NUTRITION_CREATINE',
    rawPath: 'food-and-beverages/food/sports-nutrition/creatine',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk4ODQ3MDYyNDI1Nw',
    name: 'Fat Burners',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk4MzQ1OTM4MTI1MA',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SPORTS_NUTRITION_FAT_BURNERS',
    rawPath: 'food-and-beverages/food/sports-nutrition/fat-burners',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk4ODY3MTU1NzYzMw',
    name: 'Sauces',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMTQ4MTk3OTkwNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SAUCES',
    rawPath: 'food-and-beverages/food/sauces',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk4OTA0MDIzMDQwMQ',
    name: 'Hot Sauce',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk4ODY3MTU1NzYzMw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SAUCES_HOT_SAUCE',
    rawPath: 'food-and-beverages/food/sauces/hot-sauce',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk4OTkxMjYyOTI0OQ',
    name: 'BBQ Sauce',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk4ODY3MTU1NzYzMw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SAUCES_BBQ_SAUCE',
    rawPath: 'food-and-beverages/food/sauces/bbq-sauce',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk5MDMzMjQzNjQ4MQ',
    name: 'Curry Sauce',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk4ODY3MTU1NzYzMw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SAUCES_CURRY_SAUCE',
    rawPath: 'food-and-beverages/food/sauces/curry-sauce',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk5MDg2MzE0NzAwOQ',
    name: 'Chili Sauce',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk4ODY3MTU1NzYzMw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SAUCES_CHILI_SAUCE',
    rawPath: 'food-and-beverages/food/sauces/chili-sauce',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk5MjA4MjQxMTUyMg',
    name: 'Mustard',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk4ODY3MTU1NzYzMw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SAUCES_MUSTARD',
    rawPath: 'food-and-beverages/food/sauces/mustard',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk5MjMzMjc3NTQyNQ',
    name: 'Ketchup',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk4ODY3MTU1NzYzMw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SAUCES_KETCHUP',
    rawPath: 'food-and-beverages/food/sauces/ketchup',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk5MjYzNDIyNDY0MQ',
    name: 'Mayonnaise',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk4ODY3MTU1NzYzMw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SAUCES_MAYONNAISE',
    rawPath: 'food-and-beverages/food/sauces/mayonnaise',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk5NDQzNzI2NzQ1Nw',
    name: 'Soy Sauce',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk4ODY3MTU1NzYzMw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SAUCES_SOY_SAUCE',
    rawPath: 'food-and-beverages/food/sauces/soy-sauce',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk5NTg4MTk3NTgwOQ',
    name: 'Pasta Sauce',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk4ODY3MTU1NzYzMw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SAUCES_PASTA_SAUCE',
    rawPath: 'food-and-beverages/food/sauces/pasta-sauce',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk5NjY1NzU0NTIxNw',
    name: 'Fish Sauce',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk4ODY3MTU1NzYzMw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SAUCES_FISH_SAUCE',
    rawPath: 'food-and-beverages/food/sauces/fish-sauce',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk5NjkzNTI4Njc4NQ',
    name: 'Salad Dressing',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk4ODY3MTU1NzYzMw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SAUCES_SALAD_DRESSING',
    rawPath: 'food-and-beverages/food/sauces/salad-dressing',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk5NzIzMzA2NTk4NQ',
    name: 'Garlic Sauce',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk4ODY3MTU1NzYzMw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SAUCES_GARLIC_SAUCE',
    rawPath: 'food-and-beverages/food/sauces/garlic-sauce',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk5ODQ2MTUyMTkyMQ',
    name: 'Marinades',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk4ODY3MTU1NzYzMw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_SAUCES_MARINADES',
    rawPath: 'food-and-beverages/food/sauces/marinades',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMTAwODE5OTY2MzYxNw',
    name: 'Food Cupboard',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDgyMTQ4MTk3OTkwNQ',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_FOOD_CUPBOARD',
    rawPath: 'food-and-beverages/food/food-cupboard',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMTAwODY4NDEwNTcyOQ',
    name: 'Beans ',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMTAwODE5OTY2MzYxNw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_FOOD_CUPBOARD_BEANS',
    rawPath: 'food-and-beverages/food/food-cupboard/beans',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMTAwODg5MjY1NzY2NQ',
    name: 'Lentils',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMTAwODE5OTY2MzYxNw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_FOOD_CUPBOARD_LENTILS',
    rawPath: 'food-and-beverages/food/food-cupboard/lentils',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMTAwOTQyMTQwMjExMw',
    name: 'Canned Vegetables',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMTAwODE5OTY2MzYxNw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_FOOD_CUPBOARD_CANNED_VEGETABLES',
    rawPath: 'food-and-beverages/food/food-cupboard/canned-vegetables',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMTAwOTc1ODM1NTQ1Nw',
    name: 'Canned Fish',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMTAwODE5OTY2MzYxNw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_FOOD_CUPBOARD_CANNED_FISH',
    rawPath: 'food-and-beverages/food/food-cupboard/canned-fish',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMTAxMDEyNzA0NDYwOQ',
    name: 'Canned Meat',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMTAwODE5OTY2MzYxNw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_FOOD_CUPBOARD_CANNED_MEAT',
    rawPath: 'food-and-beverages/food/food-cupboard/canned-meat',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMTAxMDQ0MzI3MjE5Mw',
    name: 'Soups',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMTAwODE5OTY2MzYxNw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_FOOD_CUPBOARD_SOUPS',
    rawPath: 'food-and-beverages/food/food-cupboard/soups',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMTAxMDc1MzM3MjE2MQ',
    name: 'Bouillon',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMTAwODE5OTY2MzYxNw',
    },
    path: 'FOOD_AND_BEVERAGES_FOOD_FOOD_CUPBOARD_BOUILLON',
    rawPath: 'food-and-beverages/food/food-cupboard/bouillon',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkyNjY4NDI4Mjg4MQ',
    name: 'Beverages',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMTY0MDExMzcwMDg2NQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES',
    rawPath: 'food-and-beverages/beverages',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMzQzNDE1Njg2NzU4NQ',
    name: 'Juices',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDkyNjY4NDI4Mjg4MQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_JUICES',
    rawPath: 'food-and-beverages/beverages/juices',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMzA4MjU4Mjc4NjA0OQ',
    name: 'Alcohol',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDkyNjY4NDI4Mjg4MQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_ALCOHOL',
    rawPath: 'food-and-beverages/beverages/alcohol',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk1MTcwMDE0NDEyOQ',
    name: 'Wine',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4MjU4Mjc4NjA0OQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_ALCOHOL_WINE',
    rawPath: 'food-and-beverages/beverages/alcohol/wine',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk1MTk1ODQzNzg4OQ',
    name: 'Sparkling Wine',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4MjU4Mjc4NjA0OQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_ALCOHOL_SPARKLING_WINE',
    rawPath: 'food-and-beverages/beverages/alcohol/sparkling-wine',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk1MjM0MTM2NDczNw',
    name: 'Beer',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4MjU4Mjc4NjA0OQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_ALCOHOL_BEER',
    rawPath: 'food-and-beverages/beverages/alcohol/beer',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk1Mjc4NjY2NTQ3Mw',
    name: 'Hard Seltzers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4MjU4Mjc4NjA0OQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_ALCOHOL_HARD_SELTZERS',
    rawPath: 'food-and-beverages/beverages/alcohol/hard-seltzers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk1MzQyOTUwODA5Nw',
    name: 'Liquor',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4MjU4Mjc4NjA0OQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_ALCOHOL_LIQUOR',
    rawPath: 'food-and-beverages/beverages/alcohol/liquor',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk1Mzc5MDgyNDQ0OQ',
    name: 'Cocktails',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4MjU4Mjc4NjA0OQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_ALCOHOL_COCKTAILS',
    rawPath: 'food-and-beverages/beverages/alcohol/cocktails',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk1NTU5MjA0ODY0MQ',
    name: 'Brewing Kits',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMzA4MjU4Mjc4NjA0OQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_ALCOHOL_BREWING_KITS',
    rawPath: 'food-and-beverages/beverages/alcohol/brewing-kits',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTcyNDkzODI1',
    name: 'Tea',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDkyNjY4NDI4Mjg4MQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_TEA',
    rawPath: 'food-and-beverages/beverages/tea',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTcyNjI0ODk3',
    name: 'Coffee',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDkyNjY4NDI4Mjg4MQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_COFFEE',
    rawPath: 'food-and-beverages/beverages/coffee',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDkzOTg0OTk1NzM3Nw',
    name: 'Coffee Beans',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcyNjI0ODk3',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_COFFEE_COFFEE_BEANS',
    rawPath: 'food-and-beverages/beverages/coffee/coffee-beans',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk0MTAwNTI5MTUyMQ',
    name: 'Coffee Capsules',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcyNjI0ODk3',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_COFFEE_COFFEE_CAPSULES',
    rawPath: 'food-and-beverages/beverages/coffee/coffee-capsules',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk0MTM0NzE3NjQ0OQ',
    name: 'Filter Coffee',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcyNjI0ODk3',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_COFFEE_FILTER_COFFEE',
    rawPath: 'food-and-beverages/beverages/coffee/filter-coffee',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk0MzUwMDA1MDQzMw',
    name: 'Instant Coffee',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcyNjI0ODk3',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_COFFEE_INSTANT_COFFEE',
    rawPath: 'food-and-beverages/beverages/coffee/instant-coffee',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk0NTQ2MDEwMTEyMQ',
    name: 'Coffee Pads',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcyNjI0ODk3',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_COFFEE_COFFEE_PADS',
    rawPath: 'food-and-beverages/beverages/coffee/coffee-pads',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk0NTc5MTMwMzY4MQ',
    name: 'Iced Coffee',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcyNjI0ODk3',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_COFFEE_ICED_COFFEE',
    rawPath: 'food-and-beverages/beverages/coffee/iced-coffee',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk0NjEyMzY2OTUwNQ',
    name: 'Coffee Enrichers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcyNjI0ODk3',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_COFFEE_COFFEE_ENRICHERS',
    rawPath: 'food-and-beverages/beverages/coffee/coffee-enrichers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk0ODE3NDcwMDU0NQ',
    name: 'Milk',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDkyNjY4NDI4Mjg4MQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_MILK',
    rawPath: 'food-and-beverages/beverages/milk',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk0ODgwNDMzNzY2Ng',
    name: 'Dairy Milk',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk0ODE3NDcwMDU0NQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_MILK_DAIRY_MILK',
    rawPath: 'food-and-beverages/beverages/milk/dairy-milk',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk0OTA4NTE0MzA0MQ',
    name: 'Dairy Free Milk',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk0ODE3NDcwMDU0NQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_MILK_DAIRY_FREE_MILK',
    rawPath: 'food-and-beverages/beverages/milk/dairy-free-milk',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk0OTQxMjQ0NjIwOQ',
    name: 'Chocolate Milk',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDkyNjY4NDI4Mjg4MQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_CHOCOLATE_MILK',
    rawPath: 'food-and-beverages/beverages/chocolate-milk',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk1NzE1ODEyOTY2NQ',
    name: 'Non-Alcoholic Drinks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDkyNjY4NDI4Mjg4MQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_NON_ALCOHOLIC_DRINKS',
    rawPath: 'food-and-beverages/beverages/non-alcoholic-drinks',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk1Nzc5MDMzOTA3Mw',
    name: 'Non-Alcoholic Wine',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk1NzE1ODEyOTY2NQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_NON_ALCOHOLIC_DRINKS_NON_ALCOHOLIC_WINE',
    rawPath:
      'food-and-beverages/beverages/non-alcoholic-drinks/non-alcoholic-wine',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk1ODA4MDA3MzcyOQ',
    name: 'Non-Alcoholic Sparkling Wine',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk1NzE1ODEyOTY2NQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_NON_ALCOHOLIC_DRINKS_NON_ALCOHOLIC_SPARKLING_WINE',
    rawPath:
      'food-and-beverages/beverages/non-alcoholic-drinks/non-alcoholic-sparkling-wine',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk1OTA5NzA5NDE0NQ',
    name: 'Mocktails',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk1NzE1ODEyOTY2NQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_NON_ALCOHOLIC_DRINKS_MOCKTAILS',
    rawPath: 'food-and-beverages/beverages/non-alcoholic-drinks/mocktails',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk1OTk3NzE5MzQ3Mw',
    name: 'Non-Alcoholic Liquors',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk1NzE1ODEyOTY2NQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_NON_ALCOHOLIC_DRINKS_NON_ALCOHOLIC_LIQUORS',
    rawPath:
      'food-and-beverages/beverages/non-alcoholic-drinks/non-alcoholic-liquors',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjI2NzAxNjE1NzQ0NjE0NQ',
    name: 'Non-Alcoholic Beer',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk1NzE1ODEyOTY2NQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_NON_ALCOHOLIC_DRINKS_NON_ALCOHOLIC_BEER',
    rawPath:
      'food-and-beverages/beverages/non-alcoholic-drinks/non-alcoholic-beer',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk2NjE4NzE3MTg0MQ',
    name: 'Soft Drinks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDkyNjY4NDI4Mjg4MQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_SOFT_DRINKS',
    rawPath: 'food-and-beverages/beverages/soft-drinks',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk2NjY4ODg4MjY4OQ',
    name: 'Soda ',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk2NjE4NzE3MTg0MQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_SOFT_DRINKS_SODA',
    rawPath: 'food-and-beverages/beverages/soft-drinks/soda',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk2NzE3OTMwNDk2MQ',
    name: 'Lemonades',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk2NjE4NzE3MTg0MQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_SOFT_DRINKS_LEMONADES',
    rawPath: 'food-and-beverages/beverages/soft-drinks/lemonades',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk2NzY3MDE4NTk4NQ',
    name: 'Kombuchas',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk2NjE4NzE3MTg0MQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_SOFT_DRINKS_KOMBUCHAS',
    rawPath: 'food-and-beverages/beverages/soft-drinks/kombuchas',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk2ODA3MzYyNTYwMQ',
    name: 'Seltzers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk2NjE4NzE3MTg0MQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_SOFT_DRINKS_SELTZERS',
    rawPath: 'food-and-beverages/beverages/soft-drinks/seltzers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjAyMDk2ODQ4ODUxNzYzMw',
    name: 'Energy Drinks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjAyMDk2NjE4NzE3MTg0MQ',
    },
    path: 'FOOD_AND_BEVERAGES_BEVERAGES_SOFT_DRINKS_ENERGY_DRINKS',
    rawPath: 'food-and-beverages/beverages/soft-drinks/energy-drinks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0MTEwMDgx',
    name: 'Kids & Baby',
    parent: null,
    path: 'KIDS_BABY',
    rawPath: 'kids-baby',
    depth: 0,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0ODQ3MzYx',
    name: 'Baby Essentials',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0MTEwMDgx',
    },
    path: 'KIDS_BABY_BABY_ESSENTIALS',
    rawPath: 'kids-baby/baby-essentials',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDcxNTgzMTUzMzU2OQ',
    name: 'Baby Blankets',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0ODQ3MzYx',
    },
    path: 'KIDS_BABY_BABY_ESSENTIALS_BABY_BLANKETS',
    rawPath: 'kids-baby/baby-essentials/baby-blankets',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDczODUwODYyNzk2OQ',
    name: 'Bibs',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0ODQ3MzYx',
    },
    path: 'KIDS_BABY_BABY_ESSENTIALS_BIBS',
    rawPath: 'kids-baby/baby-essentials/bibs',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDc0MzIyMjkxMDk3Nw',
    name: 'Pacifier Clips',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0ODQ3MzYx',
    },
    path: 'KIDS_BABY_BABY_ESSENTIALS_PACIFIER_CLIPS',
    rawPath: 'kids-baby/baby-essentials/pacifier-clips',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDcyNDQxNzEyNjQwMQ',
    name: 'Swaddles',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0ODQ3MzYx',
    },
    path: 'KIDS_BABY_BABY_ESSENTIALS_SWADDLES',
    rawPath: 'kids-baby/baby-essentials/swaddles',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDczNzU5ODUxMzE1Mw',
    name: 'Kids Bath Towels',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0ODQ3MzYx',
    },
    path: 'KIDS_BABY_BABY_ESSENTIALS_BATH_TOWELS',
    rawPath: 'kids-baby/baby-essentials/bath-towels',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDczNjQ3NzM4ODgwMQ',
    name: 'Cuddle Cloths',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0ODQ3MzYx',
    },
    path: 'KIDS_BABY_BABY_ESSENTIALS_CUDDLE_CLOTHS',
    rawPath: 'kids-baby/baby-essentials/cuddle-cloths',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMjk2NjkxODI1MDQ5Nw',
    name: 'Sleeping Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0ODQ3MzYx',
    },
    path: 'KIDS_BABY_BABY_ESSENTIALS_SLEEPING_BAGS',
    rawPath: 'kids-baby/baby-essentials/sleeping-bags',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDc0MDc0NjA0MzM5Mw',
    name: 'Changing Mats',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0ODQ3MzYx',
    },
    path: 'KIDS_BABY_BABY_ESSENTIALS_CHANGING_MATS',
    rawPath: 'kids-baby/baby-essentials/changing-mats',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDczMDYyNTEyMjMwNQ',
    name: 'Crib Sheets',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0ODQ3MzYx',
    },
    path: 'KIDS_BABY_BABY_ESSENTIALS_CRIB_SHEETS',
    rawPath: 'kids-baby/baby-essentials/crib-sheets',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDc0NTkzMjUyOTY2NQ',
    name: 'Playmats',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0ODQ3MzYx',
    },
    path: 'KIDS_BABY_BABY_ESSENTIALS_PLAYMATS',
    rawPath: 'kids-baby/baby-essentials/playmats',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDczMTU5MjY5NTgwOQ',
    name: 'Cot Mattress Cover',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0ODQ3MzYx',
    },
    path: 'KIDS_BABY_BABY_ESSENTIALS_COT_MATTRESS_COVER',
    rawPath: 'kids-baby/baby-essentials/cot-mattress-cover',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDc0OTI5MzI0ODUxMw',
    name: 'Pram Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0ODQ3MzYx',
    },
    path: 'KIDS_BABY_BABY_ESSENTIALS_PRAM_ACCESSORIES',
    rawPath: 'kids-baby/baby-essentials/pram-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQzMDMxMTQwODA1ODM2OQ',
    name: 'Pacifiers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0ODQ3MzYx',
    },
    path: 'KIDS_BABY_BABY_ESSENTIALS_PACIFIERS',
    rawPath: 'kids-baby/baby-essentials/pacifiers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTUwOTczNTc1MjcyODU3Nw',
    name: 'Baby Hot Water Bottles',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0ODQ3MzYx',
    },
    path: 'KIDS_BABY_BABY_ESSENTIALS_BABY_HOT_WATER_BOTTLES',
    rawPath: 'kids-baby/baby-essentials/baby-hot-water-bottles',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTUwOTc0MDkwMDI1MzY5Nw',
    name: 'Baby Carriers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0ODQ3MzYx',
    },
    path: 'KIDS_BABY_BABY_ESSENTIALS_BABY_CARRIERS',
    rawPath: 'kids-baby/baby-essentials/baby-carriers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk1NzAzNDQ1OTEzNw',
    name: 'Baby Teethers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0ODQ3MzYx',
    },
    path: 'KIDS_BABY_BABY_ESSENTIALS_BABY_TEETHERS',
    rawPath: 'kids-baby/baby-essentials/baby-teethers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDgwMTI2MDUxMTIzMw',
    name: 'Diapers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0ODQ3MzYx',
    },
    path: 'KIDS_BABY_BABY_ESSENTIALS_DIAPERS',
    rawPath: 'kids-baby/baby-essentials/diapers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDgwNTgwNDMzNTEwNQ',
    name: 'Baby Mobiles & Musicboxes',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0ODQ3MzYx',
    },
    path: 'KIDS_BABY_BABY_ESSENTIALS_BABY_MOBILES_MUSICBOXES',
    rawPath: 'kids-baby/baby-essentials/baby-mobiles-musicboxes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjcxMTkwODYxOTgxMjg2NQ',
    name: 'Strollers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0ODQ3MzYx',
    },
    path: 'KIDS_BABY_BABY_ESSENTIALS_STROLLERS',
    rawPath: 'kids-baby/baby-essentials/strollers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MDc2NzM3',
    name: 'Baby Clothing',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0MTEwMDgx',
    },
    path: 'KIDS_BABY_BABY_CLOTHING',
    rawPath: 'kids-baby/baby-clothing',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDc1Mzk4MzY0MzY0OQ',
    name: 'Baby Suits',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MDc2NzM3',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_SUITS',
    rawPath: 'kids-baby/baby-clothing/baby-suits',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDc1NzgxMjA0Mzc3Nw',
    name: 'Baby Shirts',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MDc2NzM3',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_SHIRTS',
    rawPath: 'kids-baby/baby-clothing/baby-shirts',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDc1NDk5NjgzMDIwOQ',
    name: 'Baby Rompers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MDc2NzM3',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_ROMPERS',
    rawPath: 'kids-baby/baby-clothing/baby-rompers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDc2Nzc5NTMzOTI2NQ',
    name: 'Baby Shoes',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MDc2NzM3',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_SHOES',
    rawPath: 'kids-baby/baby-clothing/baby-shoes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDc1NTc2NTMyMTcyOQ',
    name: 'Baby Dresses',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MDc2NzM3',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_DRESSES',
    rawPath: 'kids-baby/baby-clothing/baby-dresses',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDc2MDM2MTcyMTg1Nw',
    name: 'Baby Sweaters',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MDc2NzM3',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_SWEATERS',
    rawPath: 'kids-baby/baby-clothing/baby-sweaters',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDc1OTA4MjM5MzYwMQ',
    name: 'Baby Outerwear',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MDc2NzM3',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_OUTERWEAR',
    rawPath: 'kids-baby/baby-clothing/baby-outerwear',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg2MDcwODA0MDcwNQ',
    name: 'Baby Tops',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MDc2NzM3',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_TOPS',
    rawPath: 'kids-baby/baby-clothing/baby-tops',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg2MTc0NjgxOTA3Mw',
    name: 'Baby Cardigans',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MDc2NzM3',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_CARDIGANS',
    rawPath: 'kids-baby/baby-clothing/baby-cardigans',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg2MjAzODAyODI4OQ',
    name: 'Baby Bottoms',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MDc2NzM3',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_BOTTOMS',
    rawPath: 'kids-baby/baby-clothing/baby-bottoms',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDc1NjQwODkzNDQwMQ',
    name: 'Baby Pants',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg2MjAzODAyODI4OQ',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_BOTTOMS_BABY_PANTS',
    rawPath: 'kids-baby/baby-clothing/baby-bottoms/baby-pants',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg2MjcyNjgxMTY0OQ',
    name: 'Baby Leggings',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg2MjAzODAyODI4OQ',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_BOTTOMS_BABY_LEGGINGS',
    rawPath: 'kids-baby/baby-clothing/baby-bottoms/baby-leggings',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg2MzAzMzE1OTY4MQ',
    name: 'Baby Skirts',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg2MjAzODAyODI4OQ',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_BOTTOMS_BABY_SKIRTS',
    rawPath: 'kids-baby/baby-clothing/baby-bottoms/baby-skirts',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg2NTMwNjc1MDk3Nw',
    name: 'Baby Clothing Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MDc2NzM3',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_CLOTHING_ACCESSORIES',
    rawPath: 'kids-baby/baby-clothing/baby-clothing-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDc2NjA2Njg3NjQxNw',
    name: 'Baby Hats',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg2NTMwNjc1MDk3Nw',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_CLOTHING_ACCESSORIES_BABY_HATS',
    rawPath: 'kids-baby/baby-clothing/baby-clothing-accessories/baby-hats',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDc2MjU4OTYwMTc5Mw',
    name: 'Baby Socks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg2NTMwNjc1MDk3Nw',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_CLOTHING_ACCESSORIES_BABY_SOCKS',
    rawPath: 'kids-baby/baby-clothing/baby-clothing-accessories/baby-socks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDc2NDc2NzMxMzkyMQ',
    name: 'Baby Gloves',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg2NTMwNjc1MDk3Nw',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_CLOTHING_ACCESSORIES_BABY_GLOVES',
    rawPath: 'kids-baby/baby-clothing/baby-clothing-accessories/baby-gloves',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg2NjkyNDAzMjAwMQ',
    name: 'Baby Mittens',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg2NTMwNjc1MDk3Nw',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_CLOTHING_ACCESSORIES_BABY_MITTENS',
    rawPath: 'kids-baby/baby-clothing/baby-clothing-accessories/baby-mittens',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg4MjI4MTMxMjI1Nw',
    name: 'Baby Scarves',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg2NTMwNjc1MDk3Nw',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_CLOTHING_ACCESSORIES_BABY_SCARVES',
    rawPath: 'kids-baby/baby-clothing/baby-clothing-accessories/baby-scarves',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg2NzkxOTcyMDQ0OQ',
    name: 'Baby Swimwear',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MDc2NzM3',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_SWIMWEAR',
    rawPath: 'kids-baby/baby-clothing/baby-swimwear',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg2ODUzNjc0MTg4OQ',
    name: 'Baby Swim Diapers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg2NzkxOTcyMDQ0OQ',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_SWIMWEAR_BABY_SWIM_DIAPERS',
    rawPath: 'kids-baby/baby-clothing/baby-swimwear/baby-swim-diapers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg2ODgzMzAxMzc2MQ',
    name: 'Baby UV Swim Suits',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg2NzkxOTcyMDQ0OQ',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_SWIMWEAR_BABY_SWIM_SUITS',
    rawPath: 'kids-baby/baby-clothing/baby-swimwear/baby-swim-suits',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjExNjkyMDQxODgyODI4OQ',
    name: 'Baby Bikinis',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg2NzkxOTcyMDQ0OQ',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_SWIMWEAR_BABY_BIKINIS',
    rawPath: 'kids-baby/baby-clothing/baby-swimwear/baby-bikinis',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjExNjkyMDY2NjU4NzEzNw',
    name: 'Baby Trunks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg2NzkxOTcyMDQ0OQ',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_BABY_SWIMWEAR_BABY_TRUNKS',
    rawPath: 'kids-baby/baby-clothing/baby-swimwear/baby-trunks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjM3MTkwMzczNzI5ODk0NQ',
    name: 'Newborn Sets',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MDc2NzM3',
    },
    path: 'KIDS_BABY_BABY_CLOTHING_NEWBORN_SETS',
    rawPath: 'kids-baby/baby-clothing/newborn-sets',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MTkxNDI1',
    name: 'Kids Care',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0MTEwMDgx',
    },
    path: 'KIDS_BABY_KIDS_CARE',
    rawPath: 'kids-baby/kids-care',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDc5MzM4MjMxMzk4NQ',
    name: 'Kids Skin Care',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MTkxNDI1',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_SKIN_CARE',
    rawPath: 'kids-baby/kids-care/kids-skin-care',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc4NDUzNDk5MDg1MA',
    name: 'Kids Body Lotions',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDc5MzM4MjMxMzk4NQ',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_SKIN_CARE_KIDS_BODY_LOTIONS',
    rawPath: 'kids-baby/kids-care/kids-skin-care/kids-body-lotions',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc4NDgxMzczMTg0MQ',
    name: 'Kids Body Oils',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDc5MzM4MjMxMzk4NQ',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_SKIN_CARE_KIDS_BODY_OILS',
    rawPath: 'kids-baby/kids-care/kids-skin-care/kids-body-oils',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc4NTA0NzYyOTgyNQ',
    name: 'Kids Massage Oils',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDc5MzM4MjMxMzk4NQ',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_SKIN_CARE_KIDS_MASSAGE_OILS',
    rawPath: 'kids-baby/kids-care/kids-skin-care/kids-massage-oils',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc4NTI3NzM2NjI3Mw',
    name: 'Kids Sunscreens',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDc5MzM4MjMxMzk4NQ',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_SKIN_CARE_KIDS_SUNSCREENS',
    rawPath: 'kids-baby/kids-care/kids-skin-care/kids-sunscreens',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc4NTY2NjEwOTQ0MQ',
    name: 'Kids Deodorants',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDc5MzM4MjMxMzk4NQ',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_SKIN_CARE_KIDS_DEODORANTS',
    rawPath: 'kids-baby/kids-care/kids-skin-care/kids-deodorants',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDgwMTkwNDAwOTIxNw',
    name: 'Kids Dental Care',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MTkxNDI1',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_DENTAL__ARE',
    rawPath: 'kids-baby/kids-care/kids-dental-сare',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgxOTE3OTQ1MDM2OQ',
    name: 'Kids Toothbrushes',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDgwMTkwNDAwOTIxNw',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_DENTAL__ARE_KIDS_TOOTHBRUSHES',
    rawPath: 'kids-baby/kids-care/kids-dental-сare/kids-toothbrushes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgxOTU1MDQzMzI4MQ',
    name: 'Kids Manual Toothbrushes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgxOTE3OTQ1MDM2OQ',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_DENTAL__ARE_KIDS_TOOTHBRUSHES_KIDS_MANUAL_TOOTHBRUSHES',
    rawPath:
      'kids-baby/kids-care/kids-dental-сare/kids-toothbrushes/kids-manual-toothbrushes',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgxOTgxODE0Nzg0MQ',
    name: 'Kids Finger Toothbrushes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgxOTE3OTQ1MDM2OQ',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_DENTAL__ARE_KIDS_TOOTHBRUSHES_KIDS_FINGER_TOOTHBRUSHES',
    rawPath:
      'kids-baby/kids-care/kids-dental-сare/kids-toothbrushes/kids-finger-toothbrushes',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgyMDE0NzU2NDU0NQ',
    name: 'Kids Electric Toothbrushes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgxOTE3OTQ1MDM2OQ',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_DENTAL__ARE_KIDS_TOOTHBRUSHES_KIDS_ELECTRIC_TOOTHBRUSHES',
    rawPath:
      'kids-baby/kids-care/kids-dental-сare/kids-toothbrushes/kids-electric-toothbrushes',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgyMDU4MjYyNTI4MQ',
    name: 'Kids Toothbrush Chargers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgxOTE3OTQ1MDM2OQ',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_DENTAL__ARE_KIDS_TOOTHBRUSHES_KIDS_TOOTHBRUSH_CHARGERS',
    rawPath:
      'kids-baby/kids-care/kids-dental-сare/kids-toothbrushes/kids-toothbrush-chargers',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgyMTg1MDk3NjI1Nw',
    name: 'Kids Toothbrush Heads',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgxOTE3OTQ1MDM2OQ',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_DENTAL__ARE_KIDS_TOOTHBRUSHES_KIDS_TOOTHBRUSH_HEADS',
    rawPath:
      'kids-baby/kids-care/kids-dental-сare/kids-toothbrushes/kids-toothbrush-heads',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgyMjE0NzIxNTM2MQ',
    name: 'Kids Dental Travel Kit',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgxOTE3OTQ1MDM2OQ',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_DENTAL__ARE_KIDS_TOOTHBRUSHES_KIDS_DENTAL_TRAVEL_KIT',
    rawPath:
      'kids-baby/kids-care/kids-dental-сare/kids-toothbrushes/kids-dental-travel-kit',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgyMjYxMzcwMDYwOQ',
    name: 'Kids Tongue Cleaners',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDgwMTkwNDAwOTIxNw',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_DENTAL__ARE_KIDS_TONGUE_CLEANERS',
    rawPath: 'kids-baby/kids-care/kids-dental-сare/kids-tongue-cleaners',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgyMzI4NjQ0NDAzMw',
    name: 'Kids Toothpastes',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDgwMTkwNDAwOTIxNw',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_DENTAL__ARE_KIDS_TOOTHPASTES',
    rawPath: 'kids-baby/kids-care/kids-dental-сare/kids-toothpastes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc4Njg5MjU5OTI5Nw',
    name: 'Kids Haircare',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MTkxNDI1',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_HAIRCARE',
    rawPath: 'kids-baby/kids-care/kids-haircare',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDgwMDMzNzU4NDEyOQ',
    name: 'Kids Shampoos',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc4Njg5MjU5OTI5Nw',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_HAIRCARE_KIDS_SHAMPOOS',
    rawPath: 'kids-baby/kids-care/kids-haircare/kids-shampoos',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc4ODQwMDIwNTgyNQ',
    name: 'Kids Conditioners',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc4Njg5MjU5OTI5Nw',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_HAIRCARE_KIDS_CONDITIONERS',
    rawPath: 'kids-baby/kids-care/kids-haircare/kids-conditioners',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc5MjUzOTUwODczNw',
    name: 'Kids Hair Gels',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc4Njg5MjU5OTI5Nw',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_HAIRCARE_KIDS_HAIR_GELS',
    rawPath: 'kids-baby/kids-care/kids-haircare/kids-hair-gels',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc5MjgxNzYyNzEzNw',
    name: 'Kids Hair Creams',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc4Njg5MjU5OTI5Nw',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_HAIRCARE_KIDS_HAIR_CREAMS',
    rawPath: 'kids-baby/kids-care/kids-haircare/kids-hair-creams',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgxMzUwODYzNjY3Mw',
    name: 'Kids Grooming Kits',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc4Njg5MjU5OTI5Nw',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_HAIRCARE_KIDS_GROOMING_KITS',
    rawPath: 'kids-baby/kids-care/kids-haircare/kids-grooming-kits',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgxMzc1MTYxMTM5Mw',
    name: 'Kids Brushes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc4Njg5MjU5OTI5Nw',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_HAIRCARE_KIDS_BRUSHES',
    rawPath: 'kids-baby/kids-care/kids-haircare/kids-brushes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgxNDAyMDUzODM2OQ',
    name: 'Kids Combs',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc4Njg5MjU5OTI5Nw',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_HAIRCARE_KIDS_COMBS',
    rawPath: 'kids-baby/kids-care/kids-haircare/kids-combs',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc5NDUwOTU4NjQzMw',
    name: 'Kids Bath',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MTkxNDI1',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_BATH',
    rawPath: 'kids-baby/kids-care/kids-bath',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc5NTA4MDAyODE2MQ',
    name: 'Bath Thermometer',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc5NDUwOTU4NjQzMw',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_BATH_BATH_THERMOMETER',
    rawPath: 'kids-baby/kids-care/kids-bath/bath-thermometer',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc5NTMwMjgwMTQwOQ',
    name: 'Kids Bath Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc5NDUwOTU4NjQzMw',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_BATH_KIDS_BATH_TOYS',
    rawPath: 'kids-baby/kids-care/kids-bath/kids-bath-toys',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc5NTgyMzMzNzQ3Mw',
    name: 'Kids Bath Bombs',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc5NDUwOTU4NjQzMw',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_BATH_KIDS_BATH_BOMBS',
    rawPath: 'kids-baby/kids-care/kids-bath/kids-bath-bombs',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc5NjA3NDM0MDM1Mw',
    name: 'Kids Bath Salts',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc5NDUwOTU4NjQzMw',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_BATH_KIDS_BATH_SALTS',
    rawPath: 'kids-baby/kids-care/kids-bath/kids-bath-salts',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc5NjM2ODk5MDIwOQ',
    name: 'Kids Bath Oils',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc5NDUwOTU4NjQzMw',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_BATH_KIDS_BATH_OILS',
    rawPath: 'kids-baby/kids-care/kids-bath/kids-bath-oils',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc5NjYwNzUyNDg2NQ',
    name: 'Kids Bath Foam',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc5NDUwOTU4NjQzMw',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_BATH_KIDS_BATH_FOAM',
    rawPath: 'kids-baby/kids-care/kids-bath/kids-bath-foam',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc5Njk5OTQxMzc2MQ',
    name: 'Kids Shower Gels',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc5NDUwOTU4NjQzMw',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_BATH_KIDS_SHOWER_GELS',
    rawPath: 'kids-baby/kids-care/kids-bath/kids-shower-gels',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc5NzQ0ODA1NjgzMw',
    name: 'Potty Training',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MTkxNDI1',
    },
    path: 'KIDS_BABY_KIDS_CARE_POTTY_TRAINING',
    rawPath: 'kids-baby/kids-care/potty-training',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc5NzY4NDQ0NTE4NQ',
    name: 'Potties',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc5NzQ0ODA1NjgzMw',
    },
    path: 'KIDS_BABY_KIDS_CARE_POTTY_TRAINING_POTTIES',
    rawPath: 'kids-baby/kids-care/potty-training/potties',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc5OTI4NjIxMDU2MQ',
    name: 'Kids Toilet Seats',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc5NzQ0ODA1NjgzMw',
    },
    path: 'KIDS_BABY_KIDS_CARE_POTTY_TRAINING_KIDS_TOILET_SEATS',
    rawPath: 'kids-baby/kids-care/potty-training/kids-toilet-seats',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc5OTc3NjA0MzAwOQ',
    name: 'Kids Makeup',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MTkxNDI1',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_MAKEUP',
    rawPath: 'kids-baby/kids-care/kids-makeup',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc5OTk4MDg0MzAwOQ',
    name: 'Kids Eyeshadows',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc5OTc3NjA0MzAwOQ',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_MAKEUP_KIDS_EYESHADOWS',
    rawPath: 'kids-baby/kids-care/kids-makeup/kids-eyeshadows',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgwMDIyMTA0ODgzMw',
    name: 'Kids Mascaras',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc5OTc3NjA0MzAwOQ',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_MAKEUP_KIDS_MASCARAS',
    rawPath: 'kids-baby/kids-care/kids-makeup/kids-mascaras',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgwMDU3MTkxMjE5Mw',
    name: 'Kids Lipsticks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc5OTc3NjA0MzAwOQ',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_MAKEUP_KIDS_LIPSTICKS',
    rawPath: 'kids-baby/kids-care/kids-makeup/kids-lipsticks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgwMDg0NTI3OTIzMw',
    name: 'Kids Lip Glosses',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc5OTc3NjA0MzAwOQ',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_MAKEUP_KIDS_LIP_GLOSSES',
    rawPath: 'kids-baby/kids-care/kids-makeup/kids-lip-glosses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgwMTcwNjg4MTAyNQ',
    name: 'Kids Lip Balms',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc5OTc3NjA0MzAwOQ',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_MAKEUP_KIDS_LIP_BALMS',
    rawPath: 'kids-baby/kids-care/kids-makeup/kids-lip-balms',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgwMjI2ODk4MzI5Nw',
    name: 'Kids Nail Polishes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc5OTc3NjA0MzAwOQ',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_MAKEUP_KIDS_NAIL_POLISHES',
    rawPath: 'kids-baby/kids-care/kids-makeup/kids-nail-polishes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgwMjU2Njc2MjQ5Nw',
    name: 'Kids Tattoo Sets',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc5OTc3NjA0MzAwOQ',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_MAKEUP_KIDS_TATTOO_SETS',
    rawPath: 'kids-baby/kids-care/kids-makeup/kids-tattoo-sets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgxMjYzODg1OTI2NQ',
    name: 'Kids Nailcare',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1MTkxNDI1',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_NAILCARE',
    rawPath: 'kids-baby/kids-care/kids-nailcare',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgxMjkwOTI5MzU2OQ',
    name: 'Kids Nail Scissors',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgxMjYzODg1OTI2NQ',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_NAILCARE_KIDS_NAIL_SCISSORS',
    rawPath: 'kids-baby/kids-care/kids-nailcare/kids-nail-scissors',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgxMzIxMzUyODA2NQ',
    name: 'Kids Nail Clippers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgxMjYzODg1OTI2NQ',
    },
    path: 'KIDS_BABY_KIDS_CARE_KIDS_NAILCARE_KIDS_NAIL_CLIPPERS',
    rawPath: 'kids-baby/kids-care/kids-nailcare/kids-nail-clippers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MDEwNjI1',
    name: 'Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0MTEwMDgx',
    },
    path: 'KIDS_BABY_TOYS',
    rawPath: 'kids-baby/toys',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDc3NjEyODgxNTEwNQ',
    name: 'Kids Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MDEwNjI1',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS',
    rawPath: 'kids-baby/toys/kids-toys',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU1OTE0NTUyOTM0NQ',
    name: 'Educational Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDc3NjEyODgxNTEwNQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_EDUCATIONAL_TOYS',
    rawPath: 'kids-baby/toys/kids-toys/educational-toys',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU1OTY0MDU3MTkwNQ',
    name: 'Sensory Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU1OTE0NTUyOTM0NQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_EDUCATIONAL_TOYS_SENSORY_TOYS',
    rawPath: 'kids-baby/toys/kids-toys/educational-toys/sensory-toys',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU1OTkzOTkwNzU4NQ',
    name: 'Magnetic Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU1OTE0NTUyOTM0NQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_EDUCATIONAL_TOYS_MAGNETIC_TOYS',
    rawPath: 'kids-baby/toys/kids-toys/educational-toys/magnetic-toys',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU2MDU1MDg1MDU2MQ',
    name: 'Numbers Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU1OTE0NTUyOTM0NQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_EDUCATIONAL_TOYS_NUMBERS_TOYS',
    rawPath: 'kids-baby/toys/kids-toys/educational-toys/numbers-toys',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU2MTAwNDk5ODY1Nw',
    name: 'Alphabet Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU1OTE0NTUyOTM0NQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_EDUCATIONAL_TOYS_ALPHABET_TOYS',
    rawPath: 'kids-baby/toys/kids-toys/educational-toys/alphabet-toys',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU2MTIzMTg2NzkwNQ',
    name: 'Activity Cubes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU1OTE0NTUyOTM0NQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_EDUCATIONAL_TOYS_ACTIVITY_CUBES',
    rawPath: 'kids-baby/toys/kids-toys/educational-toys/activity-cubes',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU2MTUzNjU2MTE1Mw',
    name: 'Learning Clocks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU1OTE0NTUyOTM0NQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_EDUCATIONAL_TOYS_LEARNING_CLOCKS',
    rawPath: 'kids-baby/toys/kids-toys/educational-toys/learning-clocks',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU2NDk2MjYxOTM5Mw',
    name: 'Chalkboards',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU1OTE0NTUyOTM0NQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_EDUCATIONAL_TOYS_CHALKBOARDS',
    rawPath: 'kids-baby/toys/kids-toys/educational-toys/chalkboards',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU2NjEzMDAxMjE2MQ',
    name: 'Shape Sorters',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU1OTE0NTUyOTM0NQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_EDUCATIONAL_TOYS_SHAPE_SORTERS',
    rawPath: 'kids-baby/toys/kids-toys/educational-toys/shape-sorters',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU2NjQ5MTE4MTA1Nw',
    name: 'Other Educational Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU1OTE0NTUyOTM0NQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_EDUCATIONAL_TOYS_OTHER_EDUCATIONAL_TOYS',
    rawPath: 'kids-baby/toys/kids-toys/educational-toys/other-educational-toys',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU2NzAwNTExNDM2OQ',
    name: 'Construction Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDc3NjEyODgxNTEwNQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_CONSTRUCTION_TOYS',
    rawPath: 'kids-baby/toys/kids-toys/construction-toys',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU2NzM5NjEzNDkxMw',
    name: 'Science Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDc3NjEyODgxNTEwNQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_SCIENCE_TOYS',
    rawPath: 'kids-baby/toys/kids-toys/science-toys',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU3MzAxMjA2MjIwOQ',
    name: 'Vehicle Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDc3NjEyODgxNTEwNQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_VEHICLE_TOYS',
    rawPath: 'kids-baby/toys/kids-toys/vehicle-toys',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU3MzM3OTgwMTA4OQ',
    name: 'Car Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU3MzAxMjA2MjIwOQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_VEHICLE_TOYS_CAR_TOYS',
    rawPath: 'kids-baby/toys/kids-toys/vehicle-toys/car-toys',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU3MzY2MjUwNzAwOQ',
    name: 'Plane Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU3MzAxMjA2MjIwOQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_VEHICLE_TOYS_PLANE_TOYS',
    rawPath: 'kids-baby/toys/kids-toys/vehicle-toys/plane-toys',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU3NDA2NjU4NTYwMQ',
    name: 'Wooden Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDc3NjEyODgxNTEwNQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_WOODEN_TOYS',
    rawPath: 'kids-baby/toys/kids-toys/wooden-toys',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU3NDM2NTc3MzgyNQ',
    name: 'Figurines',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDc3NjEyODgxNTEwNQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_FIGURINES',
    rawPath: 'kids-baby/toys/kids-toys/figurines',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU3NDYxNjA1NTgwOQ',
    name: 'Action Figures',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU3NDM2NTc3MzgyNQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_FIGURINES_ACTION_FIGURES',
    rawPath: 'kids-baby/toys/kids-toys/figurines/action-figures',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU3NTIyOTU3MTA3Mw',
    name: 'Playsets',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU3NDM2NTc3MzgyNQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_FIGURINES_PLAYSETS',
    rawPath: 'kids-baby/toys/kids-toys/figurines/playsets',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU3NTY0ODM0NjExMw',
    name: 'Rocking Horses',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDc3NjEyODgxNTEwNQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_ROCKING_HORSES',
    rawPath: 'kids-baby/toys/kids-toys/rocking-horses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU3Njk0OTkwNzQ1Nw',
    name: 'Dolls',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDc3NjEyODgxNTEwNQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_DOLLS',
    rawPath: 'kids-baby/toys/kids-toys/dolls',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU3NzIwNDM4Mzc0NQ',
    name: 'Doll Houses',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU3Njk0OTkwNzQ1Nw',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_DOLLS_DOLLS_HOUSES',
    rawPath: 'kids-baby/toys/kids-toys/dolls/dolls-houses',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU3NzQ5MDQ0ODM4NQ',
    name: 'Barbie Dolls',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU3Njk0OTkwNzQ1Nw',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_DOLLS_BARBIE_DOLLS',
    rawPath: 'kids-baby/toys/kids-toys/dolls/barbie-dolls',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU3NzgyMTk2MjI0MQ',
    name: 'Baby Dolls',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU3Njk0OTkwNzQ1Nw',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_DOLLS_BABY_DOLLS',
    rawPath: 'kids-baby/toys/kids-toys/dolls/baby-dolls',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU3ODI0NzczMzI0OQ',
    name: 'Doll Clothing',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU3Njk0OTkwNzQ1Nw',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_DOLLS_DOLLS_CLOTHES',
    rawPath: 'kids-baby/toys/kids-toys/dolls/dolls-clothes',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU3ODU2MjgxMzk1Mw',
    name: 'Doll Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU3Njk0OTkwNzQ1Nw',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_DOLLS_DOLLS_ACCESSORIES',
    rawPath: 'kids-baby/toys/kids-toys/dolls/dolls-accessories',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU3ODkxNzI0OTAyNQ',
    name: 'Push and Pull Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDc3NjEyODgxNTEwNQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_PUSH_ALONG_TOYS',
    rawPath: 'kids-baby/toys/kids-toys/push-along-toys',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU3OTIxOTgxMjM1Mw',
    name: 'Kids Musical Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDc3NjEyODgxNTEwNQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_KIDS_MUSICAL_TOYS',
    rawPath: 'kids-baby/toys/kids-toys/kids-musical-toys',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0MTE4OTY3Mjg5NDQ2NQ',
    name: 'Kids Bicycles',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDc3NjEyODgxNTEwNQ',
    },
    path: 'KIDS_BABY_TOYS_KIDS_TOYS_KIDS_BICYCLES',
    rawPath: 'kids-baby/toys/kids-toys/kids-bicycles',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1NDIwODAx',
    name: 'Baby Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MDEwNjI1',
    },
    path: 'KIDS_BABY_TOYS_BABY_TOYS',
    rawPath: 'kids-baby/toys/baby-toys',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTYyMzU4ODI3NDE3Nw',
    name: 'Baby Rattles',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1NDIwODAx',
    },
    path: 'KIDS_BABY_TOYS_BABY_TOYS_BABY_RATTLES',
    rawPath: 'kids-baby/toys/baby-toys/baby-rattles',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTYyNDEyMTU3MzM3Nw',
    name: 'Baby Music Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1NDIwODAx',
    },
    path: 'KIDS_BABY_TOYS_BABY_TOYS_BABY_MUSIC_TOYS',
    rawPath: 'kids-baby/toys/baby-toys/baby-music-toys',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTYyNDcxMjA1MjczNw',
    name: 'Baby Sorting Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1NDIwODAx',
    },
    path: 'KIDS_BABY_TOYS_BABY_TOYS_BABY_SORTING_TOYS',
    rawPath: 'kids-baby/toys/baby-toys/baby-sorting-toys',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTYyNTM2OTEzMzA1Nw',
    name: 'Baby Stacking Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1NDIwODAx',
    },
    path: 'KIDS_BABY_TOYS_BABY_TOYS_BABY_STACKING_TOYS',
    rawPath: 'kids-baby/toys/baby-toys/baby-stacking-toys',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTYzMDg1MzQxNDkxMw',
    name: 'Baby Walkers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1NDIwODAx',
    },
    path: 'KIDS_BABY_TOYS_BABY_TOYS_BABY_WALKERS',
    rawPath: 'kids-baby/toys/baby-toys/baby-walkers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1NjY2NTYx',
    name: 'Plushies',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MDEwNjI1',
    },
    path: 'KIDS_BABY_TOYS_PLUSHIES',
    rawPath: 'kids-baby/toys/plushies',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQ3MDA1MDcwMzU0MDIyNQ',
    name: 'Arts and Crafts',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MDEwNjI1',
    },
    path: 'KIDS_BABY_TOYS_ARTS_AND_CRAFTS',
    rawPath: 'kids-baby/toys/arts-and-crafts',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU4MDI2ODI5MDA0OQ',
    name: 'Role Play Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MDEwNjI1',
    },
    path: 'KIDS_BABY_TOYS_ROLE_PLAY_TOYS',
    rawPath: 'kids-baby/toys/role-play-toys',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU4MDg4NjQyNTYwMQ',
    name: 'Kids Workbenches',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU4MDI2ODI5MDA0OQ',
    },
    path: 'KIDS_BABY_TOYS_ROLE_PLAY_TOYS_KIDS_WORKBENCHES',
    rawPath: 'kids-baby/toys/role-play-toys/kids-workbenches',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU4MTQwMDM3NTI5Nw',
    name: 'Kids Tool Sets',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU4MDI2ODI5MDA0OQ',
    },
    path: 'KIDS_BABY_TOYS_ROLE_PLAY_TOYS_KIDS_TOOL_SETS',
    rawPath: 'kids-baby/toys/role-play-toys/kids-tool-sets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU4Mzc0ODg0MTQ3Mw',
    name: 'Play Kitchen',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU4MDI2ODI5MDA0OQ',
    },
    path: 'KIDS_BABY_TOYS_ROLE_PLAY_TOYS_PLAY_KITCHEN',
    rawPath: 'kids-baby/toys/role-play-toys/play-kitchen',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU4NDE4MjU3NTEwNQ',
    name: 'Play Kitchen Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU4MDI2ODI5MDA0OQ',
    },
    path: 'KIDS_BABY_TOYS_ROLE_PLAY_TOYS_PLAY_KITCHEN_ACCESSORIES',
    rawPath: 'kids-baby/toys/role-play-toys/play-kitchen-accessories',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU4NTEwNDg5NjAwMQ',
    name: 'Supermarket Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU4MDI2ODI5MDA0OQ',
    },
    path: 'KIDS_BABY_TOYS_ROLE_PLAY_TOYS_SUPERMARKET_TOYS',
    rawPath: 'kids-baby/toys/role-play-toys/supermarket-toys',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU4NTg3NDc0NzM5Mw',
    name: 'Kids Games',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MDEwNjI1',
    },
    path: 'KIDS_BABY_TOYS_KIDS_GAMES',
    rawPath: 'kids-baby/toys/kids-games',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU4NjEzODgyNDcwNQ',
    name: 'Ball Pits',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU4NTg3NDc0NzM5Mw',
    },
    path: 'KIDS_BABY_TOYS_KIDS_GAMES_BALL_PITS',
    rawPath: 'kids-baby/toys/kids-games/ball-pits',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU4NjM1NTg5NjMyMQ',
    name: 'Kiddie Pools',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU4NTg3NDc0NzM5Mw',
    },
    path: 'KIDS_BABY_TOYS_KIDS_GAMES_KIDDIE_POOLS',
    rawPath: 'kids-baby/toys/kids-games/kiddie-pools',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU4NjY2ODU4NDk2MQ',
    name: 'Board Games',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU4NTg3NDc0NzM5Mw',
    },
    path: 'KIDS_BABY_TOYS_KIDS_GAMES_BOARD_GAMES',
    rawPath: 'kids-baby/toys/kids-games/board-games',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTU5MTg4MDEzODc1Mw',
    name: 'Puzzles',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTU4NTg3NDc0NzM5Mw',
    },
    path: 'KIDS_BABY_TOYS_KIDS_GAMES_PUZZLES',
    rawPath: 'kids-baby/toys/kids-games/puzzles',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjM3NDYyMjczNTA3MzI4MQ',
    name: 'Building Blocks',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MDEwNjI1',
    },
    path: 'KIDS_BABY_TOYS_BUILDING_BLOCKS',
    rawPath: 'kids-baby/toys/building-blocks',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1ODk1OTM3',
    name: 'Kids Clothing',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0MTEwMDgx',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING',
    rawPath: 'kids-baby/kids-clothing',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkwMTI3MDMxNTAwOQ',
    name: 'Kids Shirts',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1ODk1OTM3',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_SHIRTS',
    rawPath: 'kids-baby/kids-clothing/kids-shirts',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkwODI5NTk4NzIwMQ',
    name: 'Kids Sweaters',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1ODk1OTM3',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_SWEATERS',
    rawPath: 'kids-baby/kids-clothing/kids-sweaters',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDg1MDcwNjgxNzAyNQ',
    name: 'Kids Dresses',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1ODk1OTM3',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_DRESSES',
    rawPath: 'kids-baby/kids-clothing/kids-dresses',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkxMjI0Mjc3ODExMw',
    name: 'Kids Socks',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1ODk1OTM3',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_SOCKS',
    rawPath: 'kids-baby/kids-clothing/kids-socks',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkwNzU3ODMzNTIzMw',
    name: 'Kids Jumpsuits',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1ODk1OTM3',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_JUMPSUITS',
    rawPath: 'kids-baby/kids-clothing/kids-jumpsuits',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkxNTY2NzE5Nzk1Mw',
    name: 'Kids Shoes',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1ODk1OTM3',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_SHOES',
    rawPath: 'kids-baby/kids-clothing/kids-shoes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY2OTQ2NTAzMDY1Nw',
    name: 'Kids Boots',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkxNTY2NzE5Nzk1Mw',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_SHOES_KIDS_BOOTS',
    rawPath: 'kids-baby/kids-clothing/kids-shoes/kids-boots',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY2OTc5MDA1NjQ0OQ',
    name: 'Kids Slippers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkxNTY2NzE5Nzk1Mw',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_SHOES_KIDS_SLIPPERS',
    rawPath: 'kids-baby/kids-clothing/kids-shoes/kids-slippers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY3MDE3OTM0MDI4OQ',
    name: 'Kids Sports Shoes',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkxNTY2NzE5Nzk1Mw',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_SHOES_KIDS_SPORTS_SHOES',
    rawPath: 'kids-baby/kids-clothing/kids-shoes/kids-sports-shoes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY3MDU2NjU1OTc0NQ',
    name: 'Kids Sandals',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkxNTY2NzE5Nzk1Mw',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_SHOES_KIDS_SANDALS',
    rawPath: 'kids-baby/kids-clothing/kids-shoes/kids-sandals',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY3MTA3MTIxOTcxMw',
    name: 'Kids Formal Shoes',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkxNTY2NzE5Nzk1Mw',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_SHOES_KIDS_FORMAL_SHOES',
    rawPath: 'kids-baby/kids-clothing/kids-shoes/kids-formal-shoes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY3MTMyMTM1NDI0MQ',
    name: 'Kids Loafers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkxNTY2NzE5Nzk1Mw',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_SHOES_KIDS_LOAFERS',
    rawPath: 'kids-baby/kids-clothing/kids-shoes/kids-loafers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkxMDg4MzAwNDQxNw',
    name: 'Kids Sportswear',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1ODk1OTM3',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_SPORTSWEAR',
    rawPath: 'kids-baby/kids-clothing/kids-sportswear',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY2ODIzNzg4NTQ0MQ',
    name: 'Kids Sports Tops',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkxMDg4MzAwNDQxNw',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_SPORTSWEAR_KIDS_SPORTS_TOPS',
    rawPath: 'kids-baby/kids-clothing/kids-sportswear/kids-sports-tops',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY2ODQ4MTE1NTA3Mw',
    name: 'Kids Sports Pants',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkxMDg4MzAwNDQxNw',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_SPORTSWEAR_KIDS_SPORTS_PANTS',
    rawPath: 'kids-baby/kids-clothing/kids-sportswear/kids-sports-pants',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkxMTYwNTA5NjQ0OQ',
    name: 'Kids Swimwear',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1ODk1OTM3',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_SWIMWEAR',
    rawPath: 'kids-baby/kids-clothing/kids-swimwear',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY1NzEwOTkzODE3Nw',
    name: 'Kids Bathing Suits',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkxMTYwNTA5NjQ0OQ',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_SWIMWEAR_KIDS_BATHING_SUITS',
    rawPath: 'kids-baby/kids-clothing/kids-swimwear/kids-bathing-suits',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY1ODQ3NjM0NzM5Mw',
    name: 'Kids Trunks',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkxMTYwNTA5NjQ0OQ',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_SWIMWEAR_KIDS_TRUNKS',
    rawPath: 'kids-baby/kids-clothing/kids-swimwear/kids-trunks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTYzNjQ5NTYyMjE0NQ',
    name: 'Kids Tops',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1ODk1OTM3',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_TOPS',
    rawPath: 'kids-baby/kids-clothing/kids-tops',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY0MDAzMjQzNjIyNQ',
    name: 'Kids Cardigans',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1ODk1OTM3',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_CARDIGANS',
    rawPath: 'kids-baby/kids-clothing/kids-cardigans',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY0MDMwOTgxNzM0NQ',
    name: 'Kids Outerwear',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1ODk1OTM3',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_OUTERWEAR',
    rawPath: 'kids-baby/kids-clothing/kids-outerwear',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkwOTAzOTMxMjg5Nw',
    name: 'Kids Jackets',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTY0MDMwOTgxNzM0NQ',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_OUTERWEAR_KIDS_JACKETS',
    rawPath: 'kids-baby/kids-clothing/kids-outerwear/kids-jackets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY0MDc0NjMwMzQ4OQ',
    name: 'Kids Coats',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTY0MDMwOTgxNzM0NQ',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_OUTERWEAR_KIDS_COATS',
    rawPath: 'kids-baby/kids-clothing/kids-outerwear/kids-coats',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjM3NDYyNTg2NjA4ODQ0OQ',
    name: 'Kids Bodywarmer',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTY0MDMwOTgxNzM0NQ',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_OUTERWEAR_KIDS_BODYWARMER',
    rawPath: 'kids-baby/kids-clothing/kids-outerwear/kids-bodywarmer',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY0NDA3Mjc0NzAwOQ',
    name: 'Kids Bottoms',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1ODk1OTM3',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_BOTTOMS',
    rawPath: 'kids-baby/kids-clothing/kids-bottoms',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDg1MjczNTc5NTIwMQ',
    name: 'Kids Skirts',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTY0NDA3Mjc0NzAwOQ',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_BOTTOMS_KIDS_SKIRTS',
    rawPath: 'kids-baby/kids-clothing/kids-bottoms/kids-skirts',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkwMDYwNTY0ODg5Nw',
    name: 'Kids Shorts',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTY0NDA3Mjc0NzAwOQ',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_BOTTOMS_KIDS_SHORTS',
    rawPath: 'kids-baby/kids-clothing/kids-bottoms/kids-shorts',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkwNjE4MjY5Njk2MQ',
    name: 'Kids Pants',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTY0NDA3Mjc0NzAwOQ',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_BOTTOMS_KIDS_PANTS',
    rawPath: 'kids-baby/kids-clothing/kids-bottoms/kids-pants',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY1MDI1MjEzNjQ0OQ',
    name: 'Kids Jeans',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTY0NDA3Mjc0NzAwOQ',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_BOTTOMS_KIDS_JEANS',
    rawPath: 'kids-baby/kids-clothing/kids-bottoms/kids-jeans',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY1MDUwMzI4Njc4NQ',
    name: 'Kids Sweatpants',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTY0NDA3Mjc0NzAwOQ',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_BOTTOMS_KIDS_SWEATPANTS',
    rawPath: 'kids-baby/kids-clothing/kids-bottoms/kids-sweatpants',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY1MTExMzEzMjAzMw',
    name: 'Kids Leggings',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTY0NDA3Mjc0NzAwOQ',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_BOTTOMS_KIDS_LEGGINGS',
    rawPath: 'kids-baby/kids-clothing/kids-bottoms/kids-leggings',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY1NTk0MjA4NjY1Nw',
    name: 'Kids Pajamas',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1ODk1OTM3',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_PAJAMAS',
    rawPath: 'kids-baby/kids-clothing/kids-pajamas',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY1NjI0OTc2MTc5Mw',
    name: 'Kids Bathrobes',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg1ODk1OTM3',
    },
    path: 'KIDS_BABY_KIDS_CLOTHING_KIDS_BATHROBES',
    rawPath: 'kids-baby/kids-clothing/kids-bathrobes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    name: 'Kids Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0MTEwMDgx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES',
    rawPath: 'kids-baby/kids-accessories',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkxMzk4MTE1MzI4MQ',
    name: 'Kids Hats',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_HATS',
    rawPath: 'kids-baby/kids-accessories/kids-hats',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkxMzI1OTM3MjU0NQ',
    name: 'Kids Gloves',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_GLOVES',
    rawPath: 'kids-baby/kids-accessories/kids-gloves',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDc2NzA5NjgyMzgwOQ',
    name: 'Kids Scarves',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_SCARVES',
    rawPath: 'kids-baby/kids-accessories/kids-scarves',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkyMzE4Njg4MDUxMw',
    name: 'Kids Hair Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_HAIR_ACCESSORIES',
    rawPath: 'kids-baby/kids-accessories/kids-hair-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc0MDY3ODUyOTAyNQ',
    name: 'Kids Hair Ties',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkyMzE4Njg4MDUxMw',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_HAIR_ACCESSORIES_KIDS_HAIR_TIES',
    rawPath: 'kids-baby/kids-accessories/kids-hair-accessories/kids-hair-ties',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc0MTA3NjMxNjE2MQ',
    name: 'Kids Headbands',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkyMzE4Njg4MDUxMw',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_HAIR_ACCESSORIES_KIDS_HEADBANDS',
    rawPath: 'kids-baby/kids-accessories/kids-hair-accessories/kids-headbands',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc0MTQxMTY5NjY0MQ',
    name: 'Kids Hair Clips',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkyMzE4Njg4MDUxMw',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_HAIR_ACCESSORIES_KIDS_HAIR_CLIPS',
    rawPath: 'kids-baby/kids-accessories/kids-hair-accessories/kids-hair-clips',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkyMzcyNDk2Mzg0MQ',
    name: 'Kids Jewelry',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_JEWELLERY',
    rawPath: 'kids-baby/kids-accessories/kids-jewellery',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc0Mjg0MjU5MzI4MQ',
    name: 'Kids Rings',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkyMzcyNDk2Mzg0MQ',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_JEWELLERY_KIDS_RINGS',
    rawPath: 'kids-baby/kids-accessories/kids-jewellery/kids-rings',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc0MzQwOTUxMjQ0OQ',
    name: 'Kids Earrings',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkyMzcyNDk2Mzg0MQ',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_JEWELLERY_KIDS_EARRINGS',
    rawPath: 'kids-baby/kids-accessories/kids-jewellery/kids-earrings',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc0MzkyMjU3NzQwOQ',
    name: 'Kids Necklaces',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkyMzcyNDk2Mzg0MQ',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_JEWELLERY_KIDS_NECKLACES',
    rawPath: 'kids-baby/kids-accessories/kids-jewellery/kids-necklaces',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc0NDQ5MjEwMTYzMw',
    name: 'Kids Bracelets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkyMzcyNDk2Mzg0MQ',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_JEWELLERY_KIDS_BRACELETS',
    rawPath: 'kids-baby/kids-accessories/kids-jewellery/kids-bracelets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkyODk2MDg0Nzg3Mw',
    name: 'Kids Face Masks',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_FACE_MASKS',
    rawPath: 'kids-baby/kids-accessories/kids-face-masks',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkyNjQxNTU3NzA4OQ',
    name: 'Kids Suspenders',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_SUSPENDERS',
    rawPath: 'kids-baby/kids-accessories/kids-suspenders',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkyNzc5NTY1MDU2MQ',
    name: 'Kids Sunglasses',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_SUNGLASSES',
    rawPath: 'kids-baby/kids-accessories/kids-sunglasses',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkyNTAwNTUwNDUxMw',
    name: 'Kids Watches',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_WATCHES',
    rawPath: 'kids-baby/kids-accessories/kids-watches',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkyNzExNzYzMTQ4OQ',
    name: 'Kids Wallets',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_WALLETS',
    rawPath: 'kids-baby/kids-accessories/kids-wallets',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkyODQ2MzAwMzY0OQ',
    name: 'Kids Umbrellas',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_UMBRELLAS',
    rawPath: 'kids-baby/kids-accessories/kids-umbrellas',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkzMTM3MTAxNjE5Mw',
    name: 'Kids Yoga Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_YOGA_ACCESSORIES',
    rawPath: 'kids-baby/kids-accessories/kids-yoga-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMxNTczMTMwNzc1NzU2OQ',
    name: 'Kids Keychains',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_KEYCHAINS',
    rawPath: 'kids-baby/kids-accessories/kids-keychains',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY3NDMwOTU4Mjg0OQ',
    name: 'Kids Swimming Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_SWIMMING_ACCESSORIES',
    rawPath: 'kids-baby/kids-accessories/kids-swimming-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY3NDY1OTIzMzc5Mw',
    name: 'Kids Swim Goggles',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTY3NDMwOTU4Mjg0OQ',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_SWIMMING_ACCESSORIES_KIDS_SWIM_GOGGLES',
    rawPath:
      'kids-baby/kids-accessories/kids-swimming-accessories/kids-swim-goggles',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY3NTA2ODM0MjI3Mw',
    name: 'Kids Life Vests',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTY3NDMwOTU4Mjg0OQ',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_SWIMMING_ACCESSORIES_KIDS_LIFE_VESTS',
    rawPath:
      'kids-baby/kids-accessories/kids-swimming-accessories/kids-life-vests',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY3NTQ5NzM5MDA4MQ',
    name: 'Kids Flippers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTY3NDMwOTU4Mjg0OQ',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_SWIMMING_ACCESSORIES_KIDS_FLIPPERS',
    rawPath:
      'kids-baby/kids-accessories/kids-swimming-accessories/kids-flippers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTY3NjM4MzgxMzYzMw',
    name: 'Kids Water Inflatables',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTY3NDMwOTU4Mjg0OQ',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_SWIMMING_ACCESSORIES_KIDS_WATER_INFLATABLES',
    rawPath:
      'kids-baby/kids-accessories/kids-swimming-accessories/kids-water-inflatables',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTczMzU1MzY2ODA5Nw',
    name: 'Kids Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_BAGS',
    rawPath: 'kids-baby/kids-accessories/kids-bags',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkyMjAxMjcwNDc2OQ',
    name: 'Kids Backpacks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTczMzU1MzY2ODA5Nw',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_BAGS_KIDS_BACKPACKS',
    rawPath: 'kids-baby/kids-accessories/kids-bags/kids-backpacks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTczMzg1Nzc3MTUyMQ',
    name: 'Kids Handbags',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTczMzU1MzY2ODA5Nw',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_BAGS_KIDS_HANDBAGS',
    rawPath: 'kids-baby/kids-accessories/kids-bags/kids-handbags',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTczNDE0MzUyNDg2NQ',
    name: 'Kids Pouches',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTczMzU1MzY2ODA5Nw',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_BAGS_KIDS_POUCHES',
    rawPath: 'kids-baby/kids-accessories/kids-bags/kids-pouches',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTczNDM1NTYxNTc0NQ',
    name: 'Kids Toiletry Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTczMzU1MzY2ODA5Nw',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_BAGS_KIDS_TOILETRY_BAGS',
    rawPath: 'kids-baby/kids-accessories/kids-bags/kids-toiletry-bags',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTczOTM2MDk0NDEyOQ',
    name: 'Kids Sports Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTczMzU1MzY2ODA5Nw',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_BAGS_KIDS_SPORTS_BAGS',
    rawPath: 'kids-baby/kids-accessories/kids-bags/kids-sports-bags',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTczOTY1MTQ4MTYwMQ',
    name: 'Kids Lunch Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTczMzU1MzY2ODA5Nw',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_BAGS_KIDS_LUNCH_BAGS',
    rawPath: 'kids-baby/kids-accessories/kids-bags/kids-lunch-bags',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc0NTA5NjczNjc2OQ',
    name: 'Badges and Pins',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_BADGES_AND_PINS',
    rawPath: 'kids-baby/kids-accessories/badges-and-pins',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkyNDM2Njk4NzI2NQ',
    name: 'Kids Badges',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc0NTA5NjczNjc2OQ',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_BADGES_AND_PINS_KIDS_BADGES',
    rawPath: 'kids-baby/kids-accessories/badges-and-pins/kids-badges',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc0Njk0NDk1MDI3Mw',
    name: 'Kids Pins',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc0NTA5NjczNjc2OQ',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_BADGES_AND_PINS_KIDS_PINS',
    rawPath: 'kids-baby/kids-accessories/badges-and-pins/kids-pins',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc0OTIxMzk1NDA0OQ',
    name: 'Kids Ties',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_TIES',
    rawPath: 'kids-baby/kids-accessories/kids-ties',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc1MDM4OTg2NjQ5Nw',
    name: 'Kids Belts',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_BELTS',
    rawPath: 'kids-baby/kids-accessories/kids-belts',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc1MjAwNzQ1ODgxNw',
    name: 'Kids Beanies',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_BEANIES',
    rawPath: 'kids-baby/kids-accessories/kids-beanies',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc1MzI4ODgxODY4OQ',
    name: 'Kids Mittens',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_MITTENS',
    rawPath: 'kids-baby/kids-accessories/kids-mittens',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc1NzM2Mjk5NTIwMQ',
    name: 'Piggy Saver',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_PIGGY_BANKS',
    rawPath: 'kids-baby/kids-accessories/piggy-banks',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0MTE4ODIwMjkwNTYwMQ',
    name: 'Kids Bike Helmets',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MzIxOTIx',
    },
    path: 'KIDS_BABY_KIDS_ACCESSORIES_KIDS_BIKE_HELMETS',
    rawPath: 'kids-baby/kids-accessories/kids-bike-helmets',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MTA4OTI5',
    name: 'Kids Books',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0MTEwMDgx',
    },
    path: 'KIDS_BABY_KIDS_BOOKS',
    rawPath: 'kids-baby/kids-books',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc3NTAxMjA1Mjk5Mw',
    name: 'Kids Reading Books',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MTA4OTI5',
    },
    path: 'KIDS_BABY_KIDS_BOOKS_KIDS_READING_BOOKS',
    rawPath: 'kids-baby/kids-books/kids-reading-books',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc3NTY3NTU4ODYwOQ',
    name: 'Kids Sticker Books',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MTA4OTI5',
    },
    path: 'KIDS_BABY_KIDS_BOOKS_KIDS_STICKER_BOOKS',
    rawPath: 'kids-baby/kids-books/kids-sticker-books',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc3NTk5MTg5ODExMw',
    name: 'Kids Colouring Books',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MTA4OTI5',
    },
    path: 'KIDS_BABY_KIDS_BOOKS_KIDS_COLOURING_BOOKS',
    rawPath: 'kids-baby/kids-books/kids-colouring-books',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc3NjQyODQ2NjE3Nw',
    name: 'Kids Diaries',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MTA4OTI5',
    },
    path: 'KIDS_BABY_KIDS_BOOKS_KIDS_DIARIES',
    rawPath: 'kids-baby/kids-books/kids-diaries',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc3Njg1ODAzODI3Mw',
    name: 'Kids Journals',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MTA4OTI5',
    },
    path: 'KIDS_BABY_KIDS_BOOKS_KIDS_JOURNALS',
    rawPath: 'kids-baby/kids-books/kids-journals',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc3NzIyMTEyNDA5Nw',
    name: 'Kids Photobooks',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MTA4OTI5',
    },
    path: 'KIDS_BABY_KIDS_BOOKS_KIDS_PHOTOBOOKS',
    rawPath: 'kids-baby/kids-books/kids-photobooks',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc3NzU5NTg5MTcxMw',
    name: 'Kids Notebooks',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2MTA4OTI5',
    },
    path: 'KIDS_BABY_KIDS_BOOKS_KIDS_NOTEBOOKS',
    rawPath: 'kids-baby/kids-books/kids-notebooks',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc1OTUwOTIxNzI4MQ',
    name: 'Kids Kitchen Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0MTEwMDgx',
    },
    path: 'KIDS_BABY_KIDS_KITCHEN_ACCESSORIES',
    rawPath: 'kids-baby/kids-kitchen-accessories',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkzMDIwMTAzNDc1Mw',
    name: 'Kids Food Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc1OTUwOTIxNzI4MQ',
    },
    path: 'KIDS_BABY_KIDS_KITCHEN_ACCESSORIES_KIDS_FOOD_ACCESSORIES',
    rawPath: 'kids-baby/kids-kitchen-accessories/kids-food-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc2MzQ4NDA1NzYwMQ',
    name: 'Kids Cutlery',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkzMDIwMTAzNDc1Mw',
    },
    path: 'KIDS_BABY_KIDS_KITCHEN_ACCESSORIES_KIDS_FOOD_ACCESSORIES_KIDS_CUTLERY',
    rawPath:
      'kids-baby/kids-kitchen-accessories/kids-food-accessories/kids-cutlery',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc2NDA4NTc0MzYxNw',
    name: 'Kids Snack Boxes',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkzMDIwMTAzNDc1Mw',
    },
    path: 'KIDS_BABY_KIDS_KITCHEN_ACCESSORIES_KIDS_FOOD_ACCESSORIES_KIDS_SNACK_BOXES',
    rawPath:
      'kids-baby/kids-kitchen-accessories/kids-food-accessories/kids-snack-boxes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc2MTE4NzMxNTcxMw',
    name: 'Kids Meal Sets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkzMDIwMTAzNDc1Mw',
    },
    path: 'KIDS_BABY_KIDS_KITCHEN_ACCESSORIES_KIDS_FOOD_ACCESSORIES_KIDS_MEAL_SETS',
    rawPath:
      'kids-baby/kids-kitchen-accessories/kids-food-accessories/kids-meal-sets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc2MTUzNTc1NDI0MQ',
    name: 'Kids Plates',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkzMDIwMTAzNDc1Mw',
    },
    path: 'KIDS_BABY_KIDS_KITCHEN_ACCESSORIES_KIDS_FOOD_ACCESSORIES_KIDS_PLATES',
    rawPath:
      'kids-baby/kids-kitchen-accessories/kids-food-accessories/kids-plates',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc2MTg3MjIzMjQ0OQ',
    name: 'Kids Bowls',
    parent: {
      id: 'Q2F0ZWdvcnk6MTI5NDkzMDIwMTAzNDc1Mw',
    },
    path: 'KIDS_BABY_KIDS_KITCHEN_ACCESSORIES_KIDS_FOOD_ACCESSORIES_KIDS_BOWLS',
    rawPath:
      'kids-baby/kids-kitchen-accessories/kids-food-accessories/kids-bowls',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc2NTQ5MDUwNzc3Nw',
    name: 'Kids Drink Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc1OTUwOTIxNzI4MQ',
    },
    path: 'KIDS_BABY_KIDS_KITCHEN_ACCESSORIES_KIDS_DRINK_ACCESSORIES',
    rawPath: 'kids-baby/kids-kitchen-accessories/kids-drink-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkyOTYyNzI5OTg0MQ',
    name: 'Kids Bottles',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc2NTQ5MDUwNzc3Nw',
    },
    path: 'KIDS_BABY_KIDS_KITCHEN_ACCESSORIES_KIDS_DRINK_ACCESSORIES_KIDS_BOTTLES',
    rawPath:
      'kids-baby/kids-kitchen-accessories/kids-drink-accessories/kids-bottles',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc2NjY5NjQzNTcxMw',
    name: 'Kids Cups',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc2NTQ5MDUwNzc3Nw',
    },
    path: 'KIDS_BABY_KIDS_KITCHEN_ACCESSORIES_KIDS_DRINK_ACCESSORIES_KIDS_CUPS',
    rawPath:
      'kids-baby/kids-kitchen-accessories/kids-drink-accessories/kids-cups',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc2OTE3Mjc2MjYyNQ',
    name: 'Kids Mugs',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc2NTQ5MDUwNzc3Nw',
    },
    path: 'KIDS_BABY_KIDS_KITCHEN_ACCESSORIES_KIDS_DRINK_ACCESSORIES_KIDS_MUGS',
    rawPath:
      'kids-baby/kids-kitchen-accessories/kids-drink-accessories/kids-mugs',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc3ODkzMDY5NjE5Mw',
    name: 'Kids Stationery',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0MTEwMDgx',
    },
    path: 'KIDS_BABY_KIDS_STATIONERY',
    rawPath: 'kids-baby/kids-stationery',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc3OTIzOTQxOTkwNQ',
    name: 'Kids Pens',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc3ODkzMDY5NjE5Mw',
    },
    path: 'KIDS_BABY_KIDS_STATIONERY_KIDS_PENS',
    rawPath: 'kids-baby/kids-stationery/kids-pens',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc3OTU5MjgyMjc4NQ',
    name: 'Kids Pencils',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc3ODkzMDY5NjE5Mw',
    },
    path: 'KIDS_BABY_KIDS_STATIONERY_KIDS_PENCILS',
    rawPath: 'kids-baby/kids-stationery/kids-pencils',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc4MDUwNTEzMzA1Nw',
    name: 'Kids Erasers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc3ODkzMDY5NjE5Mw',
    },
    path: 'KIDS_BABY_KIDS_STATIONERY_KIDS_ERASERS',
    rawPath: 'kids-baby/kids-stationery/kids-erasers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc4MDc3MzYwMTI4MQ',
    name: 'Kids Pen Storage',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc3ODkzMDY5NjE5Mw',
    },
    path: 'KIDS_BABY_KIDS_STATIONERY_KIDS_PEN_STORAGE',
    rawPath: 'kids-baby/kids-stationery/kids-pen-storage',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc4MTIxODYyMzQ4OQ',
    name: 'Kids Folders',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc3ODkzMDY5NjE5Mw',
    },
    path: 'KIDS_BABY_KIDS_STATIONERY_KIDS_FOLDERS',
    rawPath: 'kids-baby/kids-stationery/kids-folders',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc4MTY5MDU2NDYwOQ',
    name: 'Kids Stamps',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc3ODkzMDY5NjE5Mw',
    },
    path: 'KIDS_BABY_KIDS_STATIONERY_KIDS_STAMPS',
    rawPath: 'kids-baby/kids-stationery/kids-stamps',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc4MjE0NTE1NTA3Mw',
    name: 'Kids Stickers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTc3ODkzMDY5NjE5Mw',
    },
    path: 'KIDS_BABY_KIDS_STATIONERY_KIDS_STICKERS',
    rawPath: 'kids-baby/kids-stationery/kids-stickers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTc4MjgzMDQ4MTQwOQ',
    name: 'Baby Books',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0MTEwMDgx',
    },
    path: 'KIDS_BABY_BABY_BOOKS',
    rawPath: 'kids-baby/baby-books',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgyNTM4MjQ4MTkyMQ',
    name: 'Baby Care',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0MTEwMDgx',
    },
    path: 'KIDS_BABY_BABY_CARE',
    rawPath: 'kids-baby/baby-care',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgyNTgxMDkyMzUyMQ',
    name: 'Baby Skin Care',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgyNTM4MjQ4MTkyMQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_SKIN_CARE',
    rawPath: 'kids-baby/baby-care/baby-skin-care',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgyNzI1NTY5NzQwOQ',
    name: 'Baby Powder',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgyNTgxMDkyMzUyMQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_SKIN_CARE_BABY_POWDER',
    rawPath: 'kids-baby/baby-care/baby-skin-care/baby-powder',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgyNzU2MzYzNDY4OQ',
    name: 'Baby Body Creams',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgyNTgxMDkyMzUyMQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_SKIN_CARE_BABY_BODY_CREAMS',
    rawPath: 'kids-baby/baby-care/baby-skin-care/baby-body-creams',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgyODcyNjcwMjA4MQ',
    name: 'Baby Body Oils',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgyNTgxMDkyMzUyMQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_SKIN_CARE_BABY_BODY_OILS',
    rawPath: 'kids-baby/baby-care/baby-skin-care/baby-body-oils',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgyOTU2MDI3MDg0OQ',
    name: 'Baby Massage Oils',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgyNTgxMDkyMzUyMQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_SKIN_CARE_BABY_MASSAGE_OILS',
    rawPath: 'kids-baby/baby-care/baby-skin-care/baby-massage-oils',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgyOTk3NjU4ODI4OQ',
    name: 'Baby Wipes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgyNTgxMDkyMzUyMQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_SKIN_CARE_BABY_WIPES',
    rawPath: 'kids-baby/baby-care/baby-skin-care/baby-wipes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgzMDM0MjY1NjAwMQ',
    name: 'Baby Sunscreens',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgyNTgxMDkyMzUyMQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_SKIN_CARE_BABY_SUNSCREENS',
    rawPath: 'kids-baby/baby-care/baby-skin-care/baby-sunscreens',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgzMDU2MDY5NDI3Mw',
    name: 'Baby Lip Balms',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgyNTgxMDkyMzUyMQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_SKIN_CARE_BABY_LIP_BALMS',
    rawPath: 'kids-baby/baby-care/baby-skin-care/baby-lip-balms',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgzMDk3MjE5NDgxNw',
    name: 'Baby Bum Creams',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgyNTgxMDkyMzUyMQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_SKIN_CARE_BABY_BUM_CREAMS',
    rawPath: 'kids-baby/baby-care/baby-skin-care/baby-bum-creams',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgzNTM1Nzg5NjcwNQ',
    name: 'Baby Hair Care',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgyNTM4MjQ4MTkyMQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_HAIR_CARE',
    rawPath: 'kids-baby/baby-care/baby-hair-care',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgzNTY5NjQ1NTY4MQ',
    name: 'Baby Shampoos',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgzNTM1Nzg5NjcwNQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_HAIR_CARE_BABY_SHAMPOOS',
    rawPath: 'kids-baby/baby-care/baby-hair-care/baby-shampoos',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgzNjA0MDA3NzMxMw',
    name: 'Baby Conditioners',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgzNTM1Nzg5NjcwNQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_HAIR_CARE_BABY_CONDITIONERS',
    rawPath: 'kids-baby/baby-care/baby-hair-care/baby-conditioners',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgzNjQxNTU5ODU5Mw',
    name: 'Baby Hair Gels',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgzNTM1Nzg5NjcwNQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_HAIR_CARE_BABY_HAIR_GELS',
    rawPath: 'kids-baby/baby-care/baby-hair-care/baby-hair-gels',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgzNjY3MjE4ODQxNw',
    name: 'Baby Hair Lotions',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgzNTM1Nzg5NjcwNQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_HAIR_CARE_BABY_HAIR_LOTIONS',
    rawPath: 'kids-baby/baby-care/baby-hair-care/baby-hair-lotions',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg0MTcxMDA4ODE5Mw',
    name: 'Baby Grooming Kits',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgzNTM1Nzg5NjcwNQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_HAIR_CARE_BABY_GROOMING_KITS',
    rawPath: 'kids-baby/baby-care/baby-hair-care/baby-grooming-kits',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg0MTk2NDAyMzgwOQ',
    name: 'Baby Brushes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgzNTM1Nzg5NjcwNQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_HAIR_CARE_BABY_BRUSHES',
    rawPath: 'kids-baby/baby-care/baby-hair-care/baby-brushes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg0MjIyODg1NDc4NQ',
    name: 'Baby Combs',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgzNTM1Nzg5NjcwNQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_HAIR_CARE_BABY_COMBS',
    rawPath: 'kids-baby/baby-care/baby-hair-care/baby-combs',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgzNzQ4MDkxOTA0MQ',
    name: 'Baby Bath',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgyNTM4MjQ4MTkyMQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_BATH',
    rawPath: 'kids-baby/baby-care/baby-bath',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDgwMzY2NjMyMTQwOQ',
    name: 'Baby Bath Foam',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgzNzQ4MDkxOTA0MQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_BATH_BABY_BATH_FOAM',
    rawPath: 'kids-baby/baby-care/baby-bath/baby-bath-foam',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgzODMwNzUwODIyNQ',
    name: 'Baby Bath Toys',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgzNzQ4MDkxOTA0MQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_BATH_BABY_BATH_TOYS',
    rawPath: 'kids-baby/baby-care/baby-bath/baby-bath-toys',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgzODY3NDU5MTc0NQ',
    name: 'Baby Bath Bombs',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgzNzQ4MDkxOTA0MQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_BATH_BABY_BATH_BOMBS',
    rawPath: 'kids-baby/baby-care/baby-bath/baby-bath-bombs',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgzOTAzNTM4MzgwOQ',
    name: 'Baby Bath Salts',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgzNzQ4MDkxOTA0MQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_BATH_BABY_BATH_SALTS',
    rawPath: 'kids-baby/baby-care/baby-bath/baby-bath-salts',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgzOTM3NzIzNTk2OQ',
    name: 'Baby Bath Oils',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgzNzQ4MDkxOTA0MQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_BATH_BABY_BATH_OILS',
    rawPath: 'kids-baby/baby-care/baby-bath/baby-bath-oils',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTgzOTkxMDk0NDc2OQ',
    name: 'Baby Shower Gels',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgzNzQ4MDkxOTA0MQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_BATH_BABY_SHOWER_GELS',
    rawPath: 'kids-baby/baby-care/baby-bath/baby-shower-gels',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg0MDI2Mjg3MzA4OQ',
    name: 'Baby Nailcare',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgyNTM4MjQ4MTkyMQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_NAILCARE',
    rawPath: 'kids-baby/baby-care/baby-nailcare',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg0MDUxMDE4OTU2OQ',
    name: 'Baby Nail Scissors',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg0MDI2Mjg3MzA4OQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_NAILCARE_BABY_NAIL_SCISSORS',
    rawPath: 'kids-baby/baby-care/baby-nailcare/baby-nail-scissors',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg0MDc2ODg0Mzc3Nw',
    name: 'Baby Nail Clippers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg0MDI2Mjg3MzA4OQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_NAILCARE_BABY_NAIL_CLIPPERS',
    rawPath: 'kids-baby/baby-care/baby-nailcare/baby-nail-clippers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg0OTgyMzQ5NDE0NQ',
    name: 'Baby Dental Care',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTgyNTM4MjQ4MTkyMQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_DENTAL_CARE',
    rawPath: 'kids-baby/baby-care/baby-dental-care',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg1NjMzMzAzNzU2OQ',
    name: 'Baby Toothbrushes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg0OTgyMzQ5NDE0NQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_DENTAL_CARE_BABY_TOOTHBRUSHES',
    rawPath: 'kids-baby/baby-care/baby-dental-care/baby-toothbrushes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg1NjY3ODAzNTQ1Nw',
    name: 'Baby Manual Toothbrushes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg1NjMzMzAzNzU2OQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_DENTAL_CARE_BABY_TOOTHBRUSHES_BABY_MANUAL_TOOTHBRUSHES',
    rawPath:
      'kids-baby/baby-care/baby-dental-care/baby-toothbrushes/baby-manual-toothbrushes',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg1Njk0NDg5ODA0OQ',
    name: 'Baby Finger Toothbrushes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg1NjMzMzAzNzU2OQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_DENTAL_CARE_BABY_TOOTHBRUSHES_BABY_FINGER_TOOTHBRUSHES',
    rawPath:
      'kids-baby/baby-care/baby-dental-care/baby-toothbrushes/baby-finger-toothbrushes',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg1NzMyOTQxNDE0NQ',
    name: 'Baby Electric Toothbrushes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg1NjMzMzAzNzU2OQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_DENTAL_CARE_BABY_TOOTHBRUSHES_BABY_ELECTRIC_TOOTHBRUSHES',
    rawPath:
      'kids-baby/baby-care/baby-dental-care/baby-toothbrushes/baby-electric-toothbrushes',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg1NzU3OTQ5OTUyMQ',
    name: 'Baby Toothbrush Chargers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg1NjMzMzAzNzU2OQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_DENTAL_CARE_BABY_TOOTHBRUSHES_BABY_TOOTHBRUSH_CHARGERS',
    rawPath:
      'kids-baby/baby-care/baby-dental-care/baby-toothbrushes/baby-toothbrush-chargers',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg1ODA0MTU0NDcwNQ',
    name: 'Baby Toothbrush Heads',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg1NjMzMzAzNzU2OQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_DENTAL_CARE_BABY_TOOTHBRUSHES_BABY_TOOTHBRUSH_HEADS',
    rawPath:
      'kids-baby/baby-care/baby-dental-care/baby-toothbrushes/baby-toothbrush-heads',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg1OTA2NTcwODU0NQ',
    name: 'Baby Dental Travel Kit',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg1NjMzMzAzNzU2OQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_DENTAL_CARE_BABY_TOOTHBRUSHES_BABY_DENTAL_TRAVEL_KIT',
    rawPath:
      'kids-baby/baby-care/baby-dental-care/baby-toothbrushes/baby-dental-travel-kit',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg1OTMxODc1OTQyNQ',
    name: 'Baby Tongue Cleaners',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg0OTgyMzQ5NDE0NQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_DENTAL_CARE_BABY_TONGUE_CLEANERS',
    rawPath: 'kids-baby/baby-care/baby-dental-care/baby-tongue-cleaners',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg1OTc2NDA2MDE2MQ',
    name: 'Baby Toothpastes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg0OTgyMzQ5NDE0NQ',
    },
    path: 'KIDS_BABY_BABY_CARE_BABY_DENTAL_CARE_BABY_TOOTHPASTES',
    rawPath: 'kids-baby/baby-care/baby-dental-care/baby-toothpastes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg4NTgyMDUzNDc4NQ',
    name: 'Nursery',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0MTEwMDgx',
    },
    path: 'KIDS_BABY_NURSERY',
    rawPath: 'kids-baby/nursery',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg4Njk2NTk3Mjk5Mw',
    name: 'Cribs',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg4NTgyMDUzNDc4NQ',
    },
    path: 'KIDS_BABY_NURSERY_CRIBS',
    rawPath: 'kids-baby/nursery/cribs',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg4ODAwOTM4ODAzMw',
    name: 'Baby Mattresses',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg4NTgyMDUzNDc4NQ',
    },
    path: 'KIDS_BABY_NURSERY_BABY_MATRESSES',
    rawPath: 'kids-baby/nursery/baby-matresses',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg4ODMwNDM0OTE4NQ',
    name: 'Baby Changing Tables',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg4NTgyMDUzNDc4NQ',
    },
    path: 'KIDS_BABY_NURSERY_BABY_CHANGING_TABLES',
    rawPath: 'kids-baby/nursery/baby-changing-tables',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg4ODYxNTA3MTc0NQ',
    name: 'Baby Co-Sleepers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg4NTgyMDUzNDc4NQ',
    },
    path: 'KIDS_BABY_NURSERY_BABY_CO_SLEEPERS',
    rawPath: 'kids-baby/nursery/baby-co-sleepers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg4OTYyNTg2NjI0MQ',
    name: 'Baby Highchairs',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg4NTgyMDUzNDc4NQ',
    },
    path: 'KIDS_BABY_NURSERY_BABY_HIGHCHAIRS',
    rawPath: 'kids-baby/nursery/baby-highchairs',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg5MDAwOTcxMDU5Mw',
    name: 'Baby Wardrobes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg4NTgyMDUzNDc4NQ',
    },
    path: 'KIDS_BABY_NURSERY_BABY_WARDROBES',
    rawPath: 'kids-baby/nursery/baby-wardrobes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg5MDM3NzE1NDU2MQ',
    name: 'Baby Cabinets',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg4NTgyMDUzNDc4NQ',
    },
    path: 'KIDS_BABY_NURSERY_BABY_CABINETS',
    rawPath: 'kids-baby/nursery/baby-cabinets',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ5MjIzMTkyMDA3NDc1Mw',
    name: 'Baby Monitors',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg4NTgyMDUzNDc4NQ',
    },
    path: 'KIDS_BABY_NURSERY_BABY_MONITORS',
    rawPath: 'kids-baby/nursery/baby-monitors',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg5MzI1MDUxNDk0NQ',
    name: 'Kids Room',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0MTEwMDgx',
    },
    path: 'KIDS_BABY_KIDS_ROOM',
    rawPath: 'kids-baby/kids-room',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2NTUxMjk3',
    name: 'Kids Room Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg5MzI1MDUxNDk0NQ',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_ACCESSORIES',
    rawPath: 'kids-baby/kids-room/kids-room-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDkzMjU3MjcxNzA1Nw',
    name: 'Kids Baskets',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2NTUxMjk3',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_ACCESSORIES_KIDS_BASKETS',
    rawPath: 'kids-baby/kids-room/kids-room-accessories/kids-baskets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDgyNDM0ODk0MjMzNw',
    name: 'Kids Mirrors',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2NTUxMjk3',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_ACCESSORIES_KIDS_MIRRORS',
    rawPath: 'kids-baby/kids-room/kids-room-accessories/kids-mirrors',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxNjQ3Mjc2MjQ2NjMwNQ',
    name: 'Kids Rugs',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2NTUxMjk3',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_ACCESSORIES_KIDS_RUGS',
    rawPath: 'kids-baby/kids-room/kids-room-accessories/kids-rugs',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxNjQ3MzgwNjExMDcyMQ',
    name: 'Kids Boxes',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2NTUxMjk3',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_ACCESSORIES_KIDS_BOXES',
    rawPath: 'kids-baby/kids-room/kids-room-accessories/kids-boxes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxNjQ3NTI0MjgyMzY4MQ',
    name: 'Kids Garlands',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2NTUxMjk3',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_ACCESSORIES_KIDS_GARLANDS',
    rawPath: 'kids-baby/kids-room/kids-room-accessories/kids-garlands',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDc0NDE2NDYzMDUyOQ',
    name: 'Kids Mosquito Nets',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2NTUxMjk3',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_ACCESSORIES_KIDS_MOSQUITO_NETS',
    rawPath: 'kids-baby/kids-room/kids-room-accessories/kids-mosquito-nets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk0NzUzMzA5OTAwOQ',
    name: 'Kids Curtains',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2NTUxMjk3',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_ACCESSORIES_KIDS_CURTAINS',
    rawPath: 'kids-baby/kids-room/kids-room-accessories/kids-curtains',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk0OTc5NDMyMDM4NQ',
    name: 'Kids Canopies',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2NTUxMjk3',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_ACCESSORIES_KIDS_CANOPIES',
    rawPath: 'kids-baby/kids-room/kids-room-accessories/kids-canopies',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk1MDE5OTU2MjI0MQ',
    name: 'Kids Clocks',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2NTUxMjk3',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_ACCESSORIES_KIDS_CLOCKS',
    rawPath: 'kids-baby/kids-room/kids-room-accessories/kids-clocks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk1MTAxOTU2NTA1Nw',
    name: 'Kids Pillows',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2NTUxMjk3',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_ACCESSORIES_KIDS_PILLOWS',
    rawPath: 'kids-baby/kids-room/kids-room-accessories/kids-pillows',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxNjQ3NDYwODYzMTgwOQ',
    name: 'Kids Room Decorative Pillows',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTk1MTAxOTU2NTA1Nw',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_ACCESSORIES_KIDS_PILLOWS_KIDS_ROOM_DECORATIVE_PILLOWS',
    rawPath:
      'kids-baby/kids-room/kids-room-accessories/kids-pillows/kids-room-decorative-pillows',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk1MTMzMzQ5ODg4MQ',
    name: 'Kids Room Cushions',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTk1MTAxOTU2NTA1Nw',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_ACCESSORIES_KIDS_PILLOWS_KIDS_ROOM_CUSHIONS',
    rawPath:
      'kids-baby/kids-room/kids-room-accessories/kids-pillows/kids-room-cushions',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk1Mjc1MTQwMzAwOQ',
    name: 'Kids Shelves',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2NTUxMjk3',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_ACCESSORIES_KIDS_SHELVES',
    rawPath: 'kids-baby/kids-room/kids-room-accessories/kids-shelves',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk1MzY2OTk1NTU4NQ',
    name: 'Kids Clothing Hangers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2NTUxMjk3',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_ACCESSORIES_KIDS_CLOTHING_HANGERS',
    rawPath: 'kids-baby/kids-room/kids-room-accessories/kids-clothing-hangers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjM3NDYyNzE0NTgyNjMwNQ',
    name: 'Kids Bedlinen',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg2NTUxMjk3',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_ACCESSORIES_KIDS_BEDLINEN',
    rawPath: 'kids-baby/kids-room/kids-room-accessories/kids-bedlinen',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTkwOTI3NTg2OTE4NQ',
    name: 'Kids Room Wall Decor',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg5MzI1MDUxNDk0NQ',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_WALL_DECOR',
    rawPath: 'kids-baby/kids-room/kids-room-wall-decor',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDgyNjkyNzQ4OTAyNQ',
    name: 'Kids Room Wallpapers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTkwOTI3NTg2OTE4NQ',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_WALL_DECOR_KIDS_ROOM_WALLPAPERS',
    rawPath: 'kids-baby/kids-room/kids-room-wall-decor/kids-room-wallpapers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg5ODMxMzg3NTQ1Nw',
    name: 'Kids Room Wall Art',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTkwOTI3NTg2OTE4NQ',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_WALL_DECOR_KIDS_ROOM_WALL_ART',
    rawPath: 'kids-baby/kids-room/kids-room-wall-decor/kids-room-wall-art',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQxNjQ3MzM5ODA5OTk2OQ',
    name: 'Kids Room Posters',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg5ODMxMzg3NTQ1Nw',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_WALL_DECOR_KIDS_ROOM_WALL_ART_KIDS_ROOM_POSTERS',
    rawPath:
      'kids-baby/kids-room/kids-room-wall-decor/kids-room-wall-art/kids-room-posters',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTg5OTUwMjI1NjEyOQ',
    name: 'Kids Room Paintings',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg5ODMxMzg3NTQ1Nw',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_WALL_DECOR_KIDS_ROOM_WALL_ART_KIDS_ROOM_PAINTINGS',
    rawPath:
      'kids-baby/kids-room/kids-room-wall-decor/kids-room-wall-art/kids-room-paintings',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTkwNDE3Mjg0MzAwOQ',
    name: 'Kids Room Wall Stickers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg5ODMxMzg3NTQ1Nw',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_WALL_DECOR_KIDS_ROOM_WALL_ART_KIDS_ROOM_WALL_STICKERS',
    rawPath:
      'kids-baby/kids-room/kids-room-wall-decor/kids-room-wall-art/kids-room-wall-stickers',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTkxMDUwMzI5MjkyOQ',
    name: 'Kids Room Wall Circles',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg5ODMxMzg3NTQ1Nw',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_WALL_DECOR_KIDS_ROOM_WALL_ART_KIDS_ROOM_WALL_CIRCLES',
    rawPath:
      'kids-baby/kids-room/kids-room-wall-decor/kids-room-wall-art/kids-room-wall-circles',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTkxMDc0ODY0MzMyOQ',
    name: 'Kids Room Growth Charts',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg5ODMxMzg3NTQ1Nw',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_WALL_DECOR_KIDS_ROOM_WALL_ART_KIDS_ROOM_GROWTH_CHARTS',
    rawPath:
      'kids-baby/kids-room/kids-room-wall-decor/kids-room-wall-art/kids-room-growth-charts',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTkxMDAwMjE3MTkwNQ',
    name: 'Kids Room Furniture',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg5MzI1MDUxNDk0NQ',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_BEDROOM_FURNITURE',
    rawPath: 'kids-baby/kids-room/kids-bedroom-furniture',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTkxOTE0MzkxOTYxNw',
    name: 'Kids Beds',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTkxMDAwMjE3MTkwNQ',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_BEDROOM_FURNITURE_KIDS_BEDS',
    rawPath: 'kids-baby/kids-room/kids-bedroom-furniture/kids-beds',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTkyMTM2Njk4MjY1Nw',
    name: 'Kids Mattresses',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTkxMDAwMjE3MTkwNQ',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_BEDROOM_FURNITURE_KIDS_MATTRESSES',
    rawPath: 'kids-baby/kids-room/kids-bedroom-furniture/kids-mattresses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTkyMTg5MTk1ODc4NQ',
    name: 'Kids Nightstands',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTkxMDAwMjE3MTkwNQ',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_BEDROOM_FURNITURE_KIDS_NIGHTSTANDS',
    rawPath: 'kids-baby/kids-room/kids-bedroom-furniture/kids-nightstands',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTkyMjM0NTgyODM1Mw',
    name: 'Kids Tables',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTkxMDAwMjE3MTkwNQ',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_BEDROOM_FURNITURE_KIDS_TABLES',
    rawPath: 'kids-baby/kids-room/kids-bedroom-furniture/kids-tables',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTkyMjY5Mjc1OTU1Mw',
    name: 'Kids Bookcases',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTkxMDAwMjE3MTkwNQ',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_BEDROOM_FURNITURE_KIDS_BOOKCASES',
    rawPath: 'kids-baby/kids-room/kids-bedroom-furniture/kids-bookcases',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTkyMzAzODIzMjU3Nw',
    name: 'Kids Chairs',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTkxMDAwMjE3MTkwNQ',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_BEDROOM_FURNITURE_KIDS_CHAIRS',
    rawPath: 'kids-baby/kids-room/kids-bedroom-furniture/kids-chairs',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTkyMzQxMzgzNTc3Nw',
    name: 'Kids Stools',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTkxMDAwMjE3MTkwNQ',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_BEDROOM_FURNITURE_KIDS_STOOLS',
    rawPath: 'kids-baby/kids-room/kids-bedroom-furniture/kids-stools',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTkyMzk0NTI1MDgxNw',
    name: 'Kids Wardrobes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTkxMDAwMjE3MTkwNQ',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_BEDROOM_FURNITURE_KIDS_WARDROBES',
    rawPath: 'kids-baby/kids-room/kids-bedroom-furniture/kids-wardrobes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTkyNTg5NzY2NjU2MQ',
    name: 'Kids Ottomans',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTkxMDAwMjE3MTkwNQ',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_BEDROOM_FURNITURE_KIDS_OTTOMANS',
    rawPath: 'kids-baby/kids-room/kids-bedroom-furniture/kids-ottomans',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTkyNjM2OTU0MjE0NQ',
    name: 'Kids Play Tents',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTkxMDAwMjE3MTkwNQ',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_BEDROOM_FURNITURE_KIDS_PLAY_TENTS',
    rawPath: 'kids-baby/kids-room/kids-bedroom-furniture/kids-play-tents',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTkzNTUyMzMzMjA5Nw',
    name: 'Kids Room Lighting',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTg5MzI1MDUxNDk0NQ',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_LIGHTING',
    rawPath: 'kids-baby/kids-room/kids-room-lighting',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTkzNjI5MDU2MjA0OQ',
    name: 'Kids Room Ceiling Lights',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTkzNTUyMzMzMjA5Nw',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_LIGHTING_KIDS_ROOM_CEILING_LIGHTS',
    rawPath: 'kids-baby/kids-room/kids-room-lighting/kids-room-ceiling-lights',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTkzNjcxMDIyMTgyNQ',
    name: 'Kids Room Wall Lights',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTkzNTUyMzMzMjA5Nw',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_LIGHTING_KIDS_ROOM_WALL_LIGHTS',
    rawPath: 'kids-baby/kids-room/kids-room-lighting/kids-room-wall-lights',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTkzNzEwNDQwNDQ4MQ',
    name: 'Kids Room String Lights',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTkzNTUyMzMzMjA5Nw',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_LIGHTING_KIDS_ROOM_STRING_LIGHTS',
    rawPath: 'kids-baby/kids-room/kids-room-lighting/kids-room-string-lights',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTkzNzQxNDYxOTEzNw',
    name: 'Kids Room Night Lights',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTkzNTUyMzMzMjA5Nw',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_LIGHTING_KIDS_ROOM_NIGHT_LIGHTS',
    rawPath: 'kids-baby/kids-room/kids-room-lighting/kids-room-night-lights',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTkzNzc4NTM3MjY3Mw',
    name: 'Kids Room Floor Lamps',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTkzNTUyMzMzMjA5Nw',
    },
    path: 'KIDS_BABY_KIDS_ROOM_KIDS_ROOM_LIGHTING_KIDS_ROOM_FLOOR_LAMPS',
    rawPath: 'kids-baby/kids-room/kids-room-lighting/kids-room-floor-lamps',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk2NDM4MTA0NDczNw',
    name: 'Maternity',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0MTEwMDgx',
    },
    path: 'KIDS_BABY_MATERNITY',
    rawPath: 'kids-baby/maternity',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDc0Njg5NzM1MDY1Nw',
    name: 'Diaper Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTk2NDM4MTA0NDczNw',
    },
    path: 'KIDS_BABY_MATERNITY_DIAPER_BAGS',
    rawPath: 'kids-baby/maternity/diaper-bags',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0NTg1MjE3',
    name: 'Bola Pregnancy Necklaces',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTk2NDM4MTA0NDczNw',
    },
    path: 'KIDS_BABY_MATERNITY_BOLA_PREGNANCY_NECKLACES',
    rawPath: 'kids-baby/maternity/bola-pregnancy-necklaces',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk2NDcwMDg3NjgwMQ',
    name: 'Maternity Pillows',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTk2NDM4MTA0NDczNw',
    },
    path: 'KIDS_BABY_MATERNITY_MATERNITY_PILLOWS',
    rawPath: 'kids-baby/maternity/maternity-pillows',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTI5NDczOTg3NzUxMTE2OQ',
    name: 'Nursing Pillows',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTk2NDM4MTA0NDczNw',
    },
    path: 'KIDS_BABY_MATERNITY_NURSING_PILLOWS',
    rawPath: 'kids-baby/maternity/nursing-pillows',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk2NTM0ODk3ODY4OQ',
    name: 'Pregnancy Pillows',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTk2NDM4MTA0NDczNw',
    },
    path: 'KIDS_BABY_MATERNITY_PREGNANCY_PILLOWS',
    rawPath: 'kids-baby/maternity/pregnancy-pillows',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk2NTk3ODEwNzkwNQ',
    name: 'Motherhood Books',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTk2NDM4MTA0NDczNw',
    },
    path: 'KIDS_BABY_MATERNITY_MOTHERHOOD_BOOKS',
    rawPath: 'kids-baby/maternity/motherhood-books',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk2NjI4NzY5OTk2OQ',
    name: 'Pregnancy Books',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTk2NTk3ODEwNzkwNQ',
    },
    path: 'KIDS_BABY_MATERNITY_MOTHERHOOD_BOOKS_PREGNANCY_BOOKS',
    rawPath: 'kids-baby/maternity/motherhood-books/pregnancy-books',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk2NjY0MjA2OTUwNQ',
    name: 'Nursing Books',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTk2NTk3ODEwNzkwNQ',
    },
    path: 'KIDS_BABY_MATERNITY_MOTHERHOOD_BOOKS_NURSING_BOOKS',
    rawPath: 'kids-baby/maternity/motherhood-books/nursing-books',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk2NzQzMDMzNjUxMw',
    name: 'Maternity Wear',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTk2NDM4MTA0NDczNw',
    },
    path: 'KIDS_BABY_MATERNITY_MATERNITY_WEAR',
    rawPath: 'kids-baby/maternity/maternity-wear',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk2NzgyODY2NDMyMQ',
    name: 'Pregnancy Skincare',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTk2NDM4MTA0NDczNw',
    },
    path: 'KIDS_BABY_MATERNITY_PREGNANCY_SKINCARE',
    rawPath: 'kids-baby/maternity/pregnancy-skincare',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk2ODE1MjcyMzQ1Nw',
    name: 'Belly Oil',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTk2NzgyODY2NDMyMQ',
    },
    path: 'KIDS_BABY_MATERNITY_PREGNANCY_SKINCARE_BELLY_OIL',
    rawPath: 'kids-baby/maternity/pregnancy-skincare/belly-oil',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk2ODQ2MjgyMzQyNQ',
    name: 'Nipple Cream',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTk2NzgyODY2NDMyMQ',
    },
    path: 'KIDS_BABY_MATERNITY_PREGNANCY_SKINCARE_NIPPLE_CREAM',
    rawPath: 'kids-baby/maternity/pregnancy-skincare/nipple-cream',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk4MjMwODI1MzY5Nw',
    name: 'Nursing',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTk2NDM4MTA0NDczNw',
    },
    path: 'KIDS_BABY_MATERNITY_NURSING',
    rawPath: 'kids-baby/maternity/nursing',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk4NDM3MzE0NTYwMQ',
    name: 'Nursing Pads',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTk4MjMwODI1MzY5Nw',
    },
    path: 'KIDS_BABY_MATERNITY_NURSING_NURSING_PADS',
    rawPath: 'kids-baby/maternity/nursing/nursing-pads',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk4MjY3MjI4OTc5Mw',
    name: 'Nursing Cover',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTk4MjMwODI1MzY5Nw',
    },
    path: 'KIDS_BABY_MATERNITY_NURSING_NURSING_COVER',
    rawPath: 'kids-baby/maternity/nursing/nursing-cover',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk4MjkyMzE3Nzk4NQ',
    name: 'Nipple Shields',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTk4MjMwODI1MzY5Nw',
    },
    path: 'KIDS_BABY_MATERNITY_NURSING_NIPPLE_SHIELDS',
    rawPath: 'kids-baby/maternity/nursing/nipple-shields',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk4NjkzNTczNDI3Mw',
    name: 'Nutrition',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTg0MTEwMDgx',
    },
    path: 'KIDS_BABY_NUTRITION',
    rawPath: 'kids-baby/nutrition',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk4NzgwNzkzNjUxMw',
    name: 'Kids Food',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTk4NjkzNTczNDI3Mw',
    },
    path: 'KIDS_BABY_NUTRITION_KIDS_FOOD',
    rawPath: 'kids-baby/nutrition/kids-food',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjEwNTk4ODAxNDA5NjM4NQ',
    name: 'Baby Food',
    parent: {
      id: 'Q2F0ZWdvcnk6MjEwNTk4NjkzNTczNDI3Mw',
    },
    path: 'KIDS_BABY_NUTRITION_BABY_FOOD',
    rawPath: 'kids-baby/nutrition/baby-food',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MTI5OTIx',
    name: 'Health & Beauty',
    parent: null,
    path: 'HEALTH_AND_BEAUTY',
    rawPath: 'health-and-beauty',
    depth: 0,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MjQ0NjA5',
    name: 'Body Care',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MTI5OTIx',
    },
    path: 'HEALTH_AND_BEAUTY_BODY_CARE',
    rawPath: 'health-and-beauty/body-care',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4Mzc1Njgx',
    name: 'Body Lotions',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MjQ0NjA5',
    },
    path: 'HEALTH_AND_BEAUTY_BODY_CARE_BODY_LOTIONS',
    rawPath: 'health-and-beauty/body-care/body-lotions',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzU2NjkwNzIxMTYxMjE3',
    name: 'Perfumes',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MjQ0NjA5',
    },
    path: 'HEALTH_AND_BEAUTY_BODY_CARE_PERFUMES',
    rawPath: 'health-and-beauty/body-care/perfumes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM2NjEyNjE0NTUzNw',
    name: 'Exfoliating Gloves',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MjQ0NjA5',
    },
    path: 'HEALTH_AND_BEAUTY_BODY_CARE_EXFOLIATING_GLOVES',
    rawPath: 'health-and-beauty/body-care/exfoliating-gloves',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM2NjU1MzQ1NjY0MQ',
    name: 'Body Butters',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MjQ0NjA5',
    },
    path: 'HEALTH_AND_BEAUTY_BODY_CARE_BODY_BUTTERS',
    rawPath: 'health-and-beauty/body-care/body-butters',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM2ODU3NDkxNDU2MQ',
    name: 'Body Oils',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MjQ0NjA5',
    },
    path: 'HEALTH_AND_BEAUTY_BODY_CARE_BODY_OILS',
    rawPath: 'health-and-beauty/body-care/body-oils',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM2OTEzNDM3OTAwOQ',
    name: 'Massage Oils',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MjQ0NjA5',
    },
    path: 'HEALTH_AND_BEAUTY_BODY_CARE_MASSAGE_OILS',
    rawPath: 'health-and-beauty/body-care/massage-oils',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM2OTg4ODMzNzkyMQ',
    name: 'Body Spray',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MjQ0NjA5',
    },
    path: 'HEALTH_AND_BEAUTY_BODY_CARE_BODY_SPRAY',
    rawPath: 'health-and-beauty/body-care/body-spray',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc5NTcxNzEz',
    name: 'Skin Care',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MTI5OTIx',
    },
    path: 'HEALTH_AND_BEAUTY_SKIN_CARE',
    rawPath: 'health-and-beauty/skin-care',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc5NzAyNzg1',
    name: 'Cream',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc5NTcxNzEz',
    },
    path: 'HEALTH_AND_BEAUTY_SKIN_CARE_CREAM',
    rawPath: 'health-and-beauty/skin-care/cream',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc5OTQ4NTQ1',
    name: 'Face Masks',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc5NTcxNzEz',
    },
    path: 'HEALTH_AND_BEAUTY_SKIN_CARE_FACE_MASKS',
    rawPath: 'health-and-beauty/skin-care/face-masks',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc5ODMzODU3',
    name: 'Cleansers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc5NTcxNzEz',
    },
    path: 'HEALTH_AND_BEAUTY_SKIN_CARE_CLEANSERS',
    rawPath: 'health-and-beauty/skin-care/cleansers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MzcwMzUzNDUxMDA4MQ',
    name: 'Skin Care Tools',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc5NTcxNzEz',
    },
    path: 'HEALTH_AND_BEAUTY_SKIN_CARE_SKIN_CARE_TOOLS',
    rawPath: 'health-and-beauty/skin-care/skin-care-tools',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3NTExODczOTcxODE0NQ',
    name: 'Face Oils',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc5NTcxNzEz',
    },
    path: 'HEALTH_AND_BEAUTY_SKIN_CARE_FACE_OILS',
    rawPath: 'health-and-beauty/skin-care/face-oils',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3NTExOTM2NTA2MjY1Nw',
    name: 'Toners',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc5NTcxNzEz',
    },
    path: 'HEALTH_AND_BEAUTY_SKIN_CARE_TONERS',
    rawPath: 'health-and-beauty/skin-care/toners',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3Mzc2MTUwNjI5NTgwOQ',
    name: 'Lip Balms',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc5NTcxNzEz',
    },
    path: 'HEALTH_AND_BEAUTY_SKIN_CARE_LIP_BALMS',
    rawPath: 'health-and-beauty/skin-care/lip-balms',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQxMDIwOTczODc1Mw',
    name: 'Face Scrub',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc5NTcxNzEz',
    },
    path: 'HEALTH_AND_BEAUTY_SKIN_CARE_FACE_SCRUB',
    rawPath: 'health-and-beauty/skin-care/face-scrub',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQxMDgyMjgxMTY0OQ',
    name: 'Face Serums',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc5NTcxNzEz',
    },
    path: 'HEALTH_AND_BEAUTY_SKIN_CARE_FACE_SERUMS',
    rawPath: 'health-and-beauty/skin-care/face-serums',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQxMTYwNTYyMjc4NQ',
    name: 'Face Treatments',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc5NTcxNzEz',
    },
    path: 'HEALTH_AND_BEAUTY_SKIN_CARE_FACE_TREATMENTS',
    rawPath: 'health-and-beauty/skin-care/face-treatments',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzU2NjkwNzIxNjE5OTY5',
    name: 'Toiletries',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MTI5OTIx',
    },
    path: 'HEALTH_AND_BEAUTY_TOILETRIES',
    rawPath: 'health-and-beauty/toiletries',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI4NDYxMjg1Mzc2MQ',
    name: 'Tissues and Wipes',
    parent: {
      id: 'Q2F0ZWdvcnk6NzU2NjkwNzIxNjE5OTY5',
    },
    path: 'HEALTH_AND_BEAUTY_TOILETRIES_TISSUES_AND_WIPES',
    rawPath: 'health-and-beauty/toiletries/tissues-and-wipes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI4NDk1MzQ5MzUwNQ',
    name: 'Paper Towels',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjI4NDYxMjg1Mzc2MQ',
    },
    path: 'HEALTH_AND_BEAUTY_TOILETRIES_TISSUES_AND_WIPES_PAPER_TOWELS',
    rawPath: 'health-and-beauty/toiletries/tissues-and-wipes/paper-towels',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI4NTE5OTcxMjI1Nw',
    name: 'Toilet Paper',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjI4NDYxMjg1Mzc2MQ',
    },
    path: 'HEALTH_AND_BEAUTY_TOILETRIES_TISSUES_AND_WIPES_TOILET_PAPER',
    rawPath: 'health-and-beauty/toiletries/tissues-and-wipes/toilet-paper',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTkxNjI4NTU4Mjg2ODQ4MQ',
    name: 'Wet Towels',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjI4NDYxMjg1Mzc2MQ',
    },
    path: 'HEALTH_AND_BEAUTY_TOILETRIES_TISSUES_AND_WIPES_WET_TOWELS',
    rawPath: 'health-and-beauty/toiletries/tissues-and-wipes/wet-towels',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA2MDUwNjA0MTY3OTg3Mw',
    name: 'Tissues',
    parent: {
      id: 'Q2F0ZWdvcnk6MTkxNjI4NDYxMjg1Mzc2MQ',
    },
    path: 'HEALTH_AND_BEAUTY_TOILETRIES_TISSUES_AND_WIPES_TISSUES',
    rawPath: 'health-and-beauty/toiletries/tissues-and-wipes/tissues',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MzY2NDkxNzQwNTY5Nw',
    name: 'Deodorants',
    parent: {
      id: 'Q2F0ZWdvcnk6NzU2NjkwNzIxNjE5OTY5',
    },
    path: 'HEALTH_AND_BEAUTY_TOILETRIES_DEODORANTS',
    rawPath: 'health-and-beauty/toiletries/deodorants',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MzY2NzIyNTg3ODUyOQ',
    name: 'First Aid',
    parent: {
      id: 'Q2F0ZWdvcnk6NzU2NjkwNzIxNjE5OTY5',
    },
    path: 'HEALTH_AND_BEAUTY_TOILETRIES_FIRST_AID',
    rawPath: 'health-and-beauty/toiletries/first-aid',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MzY3MTE1ODE4NTk4NQ',
    name: 'Intimate Care',
    parent: {
      id: 'Q2F0ZWdvcnk6NzU2NjkwNzIxNjE5OTY5',
    },
    path: 'HEALTH_AND_BEAUTY_TOILETRIES_INTIMATE_CARE',
    rawPath: 'health-and-beauty/toiletries/intimate-care',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQxNjk5OTg1ODE3Nw',
    name: 'Ear Care',
    parent: {
      id: 'Q2F0ZWdvcnk6NzU2NjkwNzIxNjE5OTY5',
    },
    path: 'HEALTH_AND_BEAUTY_TOILETRIES_EAR_CARE',
    rawPath: 'health-and-beauty/toiletries/ear-care',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjIyNDcxMjU4OTMxMjAwMQ',
    name: 'Toiletry Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6NzU2NjkwNzIxNjE5OTY5',
    },
    path: 'HEALTH_AND_BEAUTY_TOILETRIES_TOILETRY_BAG',
    rawPath: 'health-and-beauty/toiletries/toiletry-bag',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwNDIzNjgx',
    name: 'Oral Care',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MTI5OTIx',
    },
    path: 'HEALTH_AND_BEAUTY_ORAL_CARE',
    rawPath: 'health-and-beauty/oral-care',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQyNDE0NjAxODMwNQ',
    name: 'Tooth Brushes',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwNDIzNjgx',
    },
    path: 'HEALTH_AND_BEAUTY_ORAL_CARE_TOOTH_BRUSHES',
    rawPath: 'health-and-beauty/oral-care/tooth-brushes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQyNDUwNjk3NDIwOQ',
    name: 'Tooth Picks',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwNDIzNjgx',
    },
    path: 'HEALTH_AND_BEAUTY_ORAL_CARE_TOOTH_PICKS',
    rawPath: 'health-and-beauty/oral-care/tooth-picks',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQyNDc3OTIxMDc1Mw',
    name: 'Tongue Cleaners',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwNDIzNjgx',
    },
    path: 'HEALTH_AND_BEAUTY_ORAL_CARE_TONGUE_CLEANERS',
    rawPath: 'health-and-beauty/oral-care/tongue-cleaners',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQyNTM4MjI1NjY0MQ',
    name: 'Tooth Paste',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwNDIzNjgx',
    },
    path: 'HEALTH_AND_BEAUTY_ORAL_CARE_TOOTH_PASTE',
    rawPath: 'health-and-beauty/oral-care/tooth-paste',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQyNTY2MjIxMDA0OQ',
    name: 'Tooth Floss',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwNDIzNjgx',
    },
    path: 'HEALTH_AND_BEAUTY_ORAL_CARE_TOOTH_FLOSS',
    rawPath: 'health-and-beauty/oral-care/tooth-floss',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQyNjA1NTkzMzk1Mw',
    name: 'Mouth Waters',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwNDIzNjgx',
    },
    path: 'HEALTH_AND_BEAUTY_ORAL_CARE_MOUTH_WATERS',
    rawPath: 'health-and-beauty/oral-care/mouth-waters',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwNTU0NzUz',
    name: 'Makeup',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MTI5OTIx',
    },
    path: 'HEALTH_AND_BEAUTY_MAKEUP',
    rawPath: 'health-and-beauty/makeup',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwNjY5NDQx',
    name: 'Face Makeup',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwNTU0NzUz',
    },
    path: 'HEALTH_AND_BEAUTY_MAKEUP_FACE',
    rawPath: 'health-and-beauty/makeup/face',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwODAwNTEz',
    name: 'Eye Makeup',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwNTU0NzUz',
    },
    path: 'HEALTH_AND_BEAUTY_MAKEUP_EYES',
    rawPath: 'health-and-beauty/makeup/eyes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwOTE1MjAx',
    name: 'Lip Makeup',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwNTU0NzUz',
    },
    path: 'HEALTH_AND_BEAUTY_MAKEUP_LIPS',
    rawPath: 'health-and-beauty/makeup/lips',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxMDI5ODg5',
    name: 'Nail Makeup',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwNTU0NzUz',
    },
    path: 'HEALTH_AND_BEAUTY_MAKEUP_NAILS',
    rawPath: 'health-and-beauty/makeup/nails',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxMTQ0NTc3',
    name: 'Makeup Removers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwNTU0NzUz',
    },
    path: 'HEALTH_AND_BEAUTY_MAKEUP_MAKEUP_REMOVERS',
    rawPath: 'health-and-beauty/makeup/makeup-removers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxMjU5MjY1',
    name: 'Makeup Brushes',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwNTU0NzUz',
    },
    path: 'HEALTH_AND_BEAUTY_MAKEUP_MAKEUP_BRUSHES',
    rawPath: 'health-and-beauty/makeup/makeup-brushes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MTMxNjI2NTQ1MTUyMQ',
    name: 'Makeup Mirrors',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwNTU0NzUz',
    },
    path: 'HEALTH_AND_BEAUTY_MAKEUP_MAKEUP_MIRRORS',
    rawPath: 'health-and-beauty/makeup/makeup-mirrors',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MTMxNzU5ODc5NzgyNQ',
    name: 'Makeup Pouches',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwNTU0NzUz',
    },
    path: 'HEALTH_AND_BEAUTY_MAKEUP_MAKEUP_POUCHES',
    rawPath: 'health-and-beauty/makeup/makeup-pouches',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MTMxODI5OTE4MTA1Nw',
    name: 'Temporary Tattoos',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwNTU0NzUz',
    },
    path: 'HEALTH_AND_BEAUTY_MAKEUP_TEMPORARY_TATTOOS',
    rawPath: 'health-and-beauty/makeup/temporary-tattoos',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQxMzU5MzM5NTIwMQ',
    name: 'Makeup Tools',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwNTU0NzUz',
    },
    path: 'HEALTH_AND_BEAUTY_MAKEUP_MAKEUP_TOOLS',
    rawPath: 'health-and-beauty/makeup/makeup-tools',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4OTY1NTA1',
    name: 'Hair Care',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MTI5OTIx',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE',
    rawPath: 'health-and-beauty/hair-care',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MzY2NjEzODkzMTIwMQ',
    name: 'Hair Removal',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4OTY1NTA1',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_HAIR_REMOVAL',
    rawPath: 'health-and-beauty/hair-care/hair-removal',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc5MzI1OTUz',
    name: 'Hair Styling Products',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4OTY1NTA1',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_HAIR_STYLING_PRODUCTS',
    rawPath: 'health-and-beauty/hair-care/hair-styling-products',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM5Nzc0Njc3NDAxNw',
    name: 'Hair Wax',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc5MzI1OTUz',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_HAIR_STYLING_PRODUCTS_HAIR_WAX',
    rawPath: 'health-and-beauty/hair-care/hair-styling-products/hair-wax',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM5Nzk5ODUzMDU2MQ',
    name: 'Hair Gel',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc5MzI1OTUz',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_HAIR_STYLING_PRODUCTS_HAIR_GEL',
    rawPath: 'health-and-beauty/hair-care/hair-styling-products/hair-gel',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM5ODIyNTE4NjgxNw',
    name: 'Hair Spray',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc5MzI1OTUz',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_HAIR_STYLING_PRODUCTS_HAIR_SPRAY',
    rawPath: 'health-and-beauty/hair-care/hair-styling-products/hair-spray',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM5ODQ5NTk4MTU2OQ',
    name: 'Hair Mousse',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc5MzI1OTUz',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_HAIR_STYLING_PRODUCTS_HAIR_MOUSSE',
    rawPath: 'health-and-beauty/hair-care/hair-styling-products/hair-mousse',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM5ODc5MTE4ODQ4MQ',
    name: 'Hair Heat Protection',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc5MzI1OTUz',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_HAIR_STYLING_PRODUCTS_HAIR_HEAT_PROTECTION',
    rawPath:
      'health-and-beauty/hair-care/hair-styling-products/hair-heat-protection',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM5OTA2MjM3NjQ0OQ',
    name: 'Hair Perfume',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc5MzI1OTUz',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_HAIR_STYLING_PRODUCTS_HAIR_PERFUME',
    rawPath: 'health-and-beauty/hair-care/hair-styling-products/hair-perfume',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MzY4MjQwNDcwNDI1Nw',
    name: 'Hair Masks',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4OTY1NTA1',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_HAIR_MASKS',
    rawPath: 'health-and-beauty/hair-care/hair-masks',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MzY4MzkwNDg3MjQ0OQ',
    name: 'Shampoos',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4OTY1NTA1',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_SHAMPOOS',
    rawPath: 'health-and-beauty/hair-care/shampoos',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MzY4NDg4MTAxNDc4NQ',
    name: 'Hair Brushes',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4OTY1NTA1',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_HAIR_BRUSHES',
    rawPath: 'health-and-beauty/hair-care/hair-brushes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQwMDU2NzU0MTc2MQ',
    name: 'Hair Oils',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4OTY1NTA1',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_HAIR_OILS',
    rawPath: 'health-and-beauty/hair-care/hair-oils',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQwMDkwNTk1MzI4MQ',
    name: 'Hair Serums',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4OTY1NTA1',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_HAIR_SERUMS',
    rawPath: 'health-and-beauty/hair-care/hair-serums',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQwMzM5NTA5MjQ4MQ',
    name: 'Conditioners',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4OTY1NTA1',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_CONDITIONERS',
    rawPath: 'health-and-beauty/hair-care/conditioners',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQwNDI1ODUxMjg5Nw',
    name: 'Hair Combs',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4OTY1NTA1',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_HAIR_COMBS',
    rawPath: 'health-and-beauty/hair-care/hair-combs',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQwNTQ5NjU2OTg1Nw',
    name: 'Hair Tools',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4OTY1NTA1',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_HAIR_TOOLS',
    rawPath: 'health-and-beauty/hair-care/hair-tools',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQwNTc4NDE1ODIwOQ',
    name: 'Straighteners',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjQwNTQ5NjU2OTg1Nw',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_HAIR_TOOLS_STRAIGHTENERS',
    rawPath: 'health-and-beauty/hair-care/hair-tools/straighteners',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQwNjAzODA3NzQ0MQ',
    name: 'Curlers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjQwNTQ5NjU2OTg1Nw',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_HAIR_TOOLS_CURLERS',
    rawPath: 'health-and-beauty/hair-care/hair-tools/curlers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQwNjI4NzM5Mjc2OQ',
    name: 'Dryers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjQwNTQ5NjU2OTg1Nw',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_HAIR_TOOLS_DRYERS',
    rawPath: 'health-and-beauty/hair-care/hair-tools/dryers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQwNjY2MTQyMzEwNQ',
    name: 'Hair Coloring',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4OTY1NTA1',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_HAIR_COLORING',
    rawPath: 'health-and-beauty/hair-care/hair-coloring',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQwNzI2MjU1MjA2NQ',
    name: 'Scalp Care',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4OTY1NTA1',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_SCALP_CARE',
    rawPath: 'health-and-beauty/hair-care/scalp-care',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjM3NDYyNDUzODA5OTcxMw',
    name: 'Dry Shampoo',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4OTY1NTA1',
    },
    path: 'HEALTH_AND_BEAUTY_HAIR_CARE_DRY_SHAMPOO',
    rawPath: 'health-and-beauty/hair-care/dry-shampoo',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3Mzc4MDU3NjkxMTM2MQ',
    name: "Men's Grooming",
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MTI5OTIx',
    },
    path: 'HEALTH_AND_BEAUTY_MENS_GROOMING',
    rawPath: 'health-and-beauty/mens-grooming',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4NjA1MDU3',
    name: "Men's Bath Care",
    parent: {
      id: 'Q2F0ZWdvcnk6MTM3Mzc4MDU3NjkxMTM2MQ',
    },
    path: 'HEALTH_AND_BEAUTY_MENS_GROOMING_MENS_BATH_CARE',
    rawPath: 'health-and-beauty/mens-grooming/mens-bath-care',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwMTk0MzA1',
    name: "Men's Skincare",
    parent: {
      id: 'Q2F0ZWdvcnk6MTM3Mzc4MDU3NjkxMTM2MQ',
    },
    path: 'HEALTH_AND_BEAUTY_MENS_GROOMING_MENS_SKINCARE',
    rawPath: 'health-and-beauty/mens-grooming/mens-skincare',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgwMzA4OTkz',
    name: 'Beard Care',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM3Mzc4MDU3NjkxMTM2MQ',
    },
    path: 'HEALTH_AND_BEAUTY_MENS_GROOMING_BEARD_CARE',
    rawPath: 'health-and-beauty/mens-grooming/beard-care',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQzMDk2MzMxODc4NQ',
    name: "Men's Fragrances",
    parent: {
      id: 'Q2F0ZWdvcnk6MTM3Mzc4MDU3NjkxMTM2MQ',
    },
    path: 'HEALTH_AND_BEAUTY_MENS_GROOMING_MENS_FRAGRANCES',
    rawPath: 'health-and-beauty/mens-grooming/mens-fragrances',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQzMTQ3Mjc5NTY1MA',
    name: 'Trimmers',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM3Mzc4MDU3NjkxMTM2MQ',
    },
    path: 'HEALTH_AND_BEAUTY_MENS_GROOMING_TRIMMERS',
    rawPath: 'health-and-beauty/mens-grooming/trimmers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQzMTc1NTk0MzkzNw',
    name: 'Razors',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM3Mzc4MDU3NjkxMTM2MQ',
    },
    path: 'HEALTH_AND_BEAUTY_MENS_GROOMING_RAZORS',
    rawPath: 'health-and-beauty/mens-grooming/razors',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQzMjA3MTc3ODMwNQ',
    name: 'Shaving Creams',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM3Mzc4MDU3NjkxMTM2MQ',
    },
    path: 'HEALTH_AND_BEAUTY_MENS_GROOMING_SHAVING_CREAMS',
    rawPath: 'health-and-beauty/mens-grooming/shaving-creams',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQzMjM0NTg5OTAxMA',
    name: 'Shaving Sets',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM3Mzc4MDU3NjkxMTM2MQ',
    },
    path: 'HEALTH_AND_BEAUTY_MENS_GROOMING_SHAVING_SETS',
    rawPath: 'health-and-beauty/mens-grooming/shaving-sets',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQzMzEyNzAyMjU5Mw',
    name: 'Post shave',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM3Mzc4MDU3NjkxMTM2MQ',
    },
    path: 'HEALTH_AND_BEAUTY_MENS_GROOMING_POST_SHAVE',
    rawPath: 'health-and-beauty/mens-grooming/post-shave',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQzMzQ5MDg2MjA4MQ',
    name: 'Pre shave',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM3Mzc4MDU3NjkxMTM2MQ',
    },
    path: 'HEALTH_AND_BEAUTY_MENS_GROOMING_PRE_SHAVE',
    rawPath: 'health-and-beauty/mens-grooming/pre-shave',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQzNDAxMDQxNTEwNw',
    name: 'Beard Brushes',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM3Mzc4MDU3NjkxMTM2MQ',
    },
    path: 'HEALTH_AND_BEAUTY_MENS_GROOMING_BEARD_BRUSHES',
    rawPath: 'health-and-beauty/mens-grooming/beard-brushes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQzNDI2ODU5NDE3Nw',
    name: 'Beard Scissors',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM3Mzc4MDU3NjkxMTM2MQ',
    },
    path: 'HEALTH_AND_BEAUTY_MENS_GROOMING_BEARD_SCISSORS',
    rawPath: 'health-and-beauty/mens-grooming/beard-scissors',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQ0NTkxMjQwODA2NQ',
    name: 'Men’s Body Care',
    parent: {
      id: 'Q2F0ZWdvcnk6MTM3Mzc4MDU3NjkxMTM2MQ',
    },
    path: 'HEALTH_AND_BEAUTY_MENS_GROOMING_MENS_BODY_CARE',
    rawPath: 'health-and-beauty/mens-grooming/mens-body-care',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM3MTAyODUwMDQ4MQ',
    name: 'Sun Care',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MTI5OTIx',
    },
    path: 'HEALTH_AND_BEAUTY_SUN_CARE',
    rawPath: 'health-and-beauty/sun-care',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MzY5OTkxMTYzMDg0OQ',
    name: 'Sunscreens',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM3MTAyODUwMDQ4MQ',
    },
    path: 'HEALTH_AND_BEAUTY_SUN_CARE_SUNSCREENS',
    rawPath: 'health-and-beauty/sun-care/sunscreens',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM3MjA1Mjg3NzMxMw',
    name: 'After Sun',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM3MTAyODUwMDQ4MQ',
    },
    path: 'HEALTH_AND_BEAUTY_SUN_CARE_AFTER_SUN',
    rawPath: 'health-and-beauty/sun-care/after-sun',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM3MjM2NTY4MDY0MQ',
    name: 'Self Tans',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM3MTAyODUwMDQ4MQ',
    },
    path: 'HEALTH_AND_BEAUTY_SUN_CARE_SELF_TANS',
    rawPath: 'health-and-beauty/sun-care/self-tans',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM3MjgxNzIwNzI5Nw',
    name: 'Tanning Gloves',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM3MTAyODUwMDQ4MQ',
    },
    path: 'HEALTH_AND_BEAUTY_SUN_CARE_TANNING_GLOVES',
    rawPath: 'health-and-beauty/sun-care/tanning-gloves',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM3NDM0NTk4MTk1Mw',
    name: 'Bath Care',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MTI5OTIx',
    },
    path: 'HEALTH_AND_BEAUTY_BATH_CARE',
    rawPath: 'health-and-beauty/bath-care',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4NzM2MTI5',
    name: 'Shower Gels',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM3NDM0NTk4MTk1Mw',
    },
    path: 'HEALTH_AND_BEAUTY_BATH_CARE_SHOWER_GELS',
    rawPath: 'health-and-beauty/bath-care/shower-gels',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4ODUwODE3',
    name: 'Body Scrubs',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM3NDM0NTk4MTk1Mw',
    },
    path: 'HEALTH_AND_BEAUTY_BATH_CARE_BODY_SCRUBS',
    rawPath: 'health-and-beauty/bath-care/body-scrubs',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MTMyNDI4MjQwNDg2NQ',
    name: 'Soap Bars',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM3NDM0NTk4MTk1Mw',
    },
    path: 'HEALTH_AND_BEAUTY_BATH_CARE_SOAP_BARS',
    rawPath: 'health-and-beauty/bath-care/soap-bars',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MTMyNTMzNjYxNjk2MQ',
    name: 'Sponges',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM3NDM0NTk4MTk1Mw',
    },
    path: 'HEALTH_AND_BEAUTY_BATH_CARE_SPONGES',
    rawPath: 'health-and-beauty/bath-care/sponges',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM3NDYzMjM3NDI3Mw',
    name: 'Bath Salts',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM3NDM0NTk4MTk1Mw',
    },
    path: 'HEALTH_AND_BEAUTY_BATH_CARE_BATH_SALTS',
    rawPath: 'health-and-beauty/bath-care/bath-salts',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM3NDk3NzY4MzQ1Nw',
    name: 'Bath Bombs',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM3NDM0NTk4MTk1Mw',
    },
    path: 'HEALTH_AND_BEAUTY_BATH_CARE_BATH_BOMBS',
    rawPath: 'health-and-beauty/bath-care/bath-bombs',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM3NTgzNTc2MjY4OQ',
    name: 'Bath Oils',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM3NDM0NTk4MTk1Mw',
    },
    path: 'HEALTH_AND_BEAUTY_BATH_CARE_BATH_OILS',
    rawPath: 'health-and-beauty/bath-care/bath-oils',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM3NjEzNTQyNjA0OQ',
    name: 'Bath Foams',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM3NDM0NTk4MTk1Mw',
    },
    path: 'HEALTH_AND_BEAUTY_BATH_CARE_BATH_FOAMS',
    rawPath: 'health-and-beauty/bath-care/bath-foams',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM3ODQzOTczNzM0NQ',
    name: 'Shower Foams',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM3NDM0NTk4MTk1Mw',
    },
    path: 'HEALTH_AND_BEAUTY_BATH_CARE_SHOWER_FOAMS',
    rawPath: 'health-and-beauty/bath-care/shower-foams',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM3OTM3MDc1ODE0NQ',
    name: 'Loofahs',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM3NDM0NTk4MTk1Mw',
    },
    path: 'HEALTH_AND_BEAUTY_BATH_CARE_LOOFAHS',
    rawPath: 'health-and-beauty/bath-care/loofahs',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM4MDQ3MTgyODQ4MQ',
    name: 'Shower Oils',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM3NDM0NTk4MTk1Mw',
    },
    path: 'HEALTH_AND_BEAUTY_BATH_CARE_SHOWER_OILS',
    rawPath: 'health-and-beauty/bath-care/shower-oils',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjM3MTc0NDgwNDg4MDM4NQ',
    name: 'Bath Teas',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM3NDM0NTk4MTk1Mw',
    },
    path: 'HEALTH_AND_BEAUTY_BATH_CARE_BATH_TEAS',
    rawPath: 'health-and-beauty/bath-care/bath-teas',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM5MTk0MjAyMTEyMQ',
    name: 'Hand Care',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MTI5OTIx',
    },
    path: 'HEALTH_AND_BEAUTY_HAND_CARE',
    rawPath: 'health-and-beauty/hand-care',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MTMyODA0NDU4MDg2NQ',
    name: 'Hand Creams',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM5MTk0MjAyMTEyMQ',
    },
    path: 'HEALTH_AND_BEAUTY_HAND_CARE_HAND_CREAMS',
    rawPath: 'health-and-beauty/hand-care/hand-creams',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MTMyODc4Mjg0MzkwNQ',
    name: 'Hand Soaps',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM5MTk0MjAyMTEyMQ',
    },
    path: 'HEALTH_AND_BEAUTY_HAND_CARE_HAND_SOAPS',
    rawPath: 'health-and-beauty/hand-care/hand-soaps',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MzY2OTk2NzcyNDU0NQ',
    name: 'Hand Sanitizer',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM5MTk0MjAyMTEyMQ',
    },
    path: 'HEALTH_AND_BEAUTY_HAND_CARE_HAND_SANITIZER',
    rawPath: 'health-and-beauty/hand-care/hand-sanitizer',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM5MzU3NTk5NzQ0MQ',
    name: 'Nail Care',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM5MTk0MjAyMTEyMQ',
    },
    path: 'HEALTH_AND_BEAUTY_HAND_CARE_NAIL_CARE',
    rawPath: 'health-and-beauty/hand-care/nail-care',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM5Mzg4NTU3MzEyMg',
    name: 'Nail Clippers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM5MzU3NTk5NzQ0MQ',
    },
    path: 'HEALTH_AND_BEAUTY_HAND_CARE_NAIL_CARE_NAIL_CLIPPERS',
    rawPath: 'health-and-beauty/hand-care/nail-care/nail-clippers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM5NDE2NDE4MzA0MQ',
    name: 'Nail Files',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM5MzU3NTk5NzQ0MQ',
    },
    path: 'HEALTH_AND_BEAUTY_HAND_CARE_NAIL_CARE_NAIL_FILES',
    rawPath: 'health-and-beauty/hand-care/nail-care/nail-files',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM5NDQ3Mjc5MjA2NQ',
    name: 'Nail Scissors',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM5MzU3NTk5NzQ0MQ',
    },
    path: 'HEALTH_AND_BEAUTY_HAND_CARE_NAIL_CARE_NAIL_SCISSORS',
    rawPath: 'health-and-beauty/hand-care/nail-care/nail-scissors',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM5NDc0NTUzNjUxMw',
    name: 'Cuticle Trimmers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM5MzU3NTk5NzQ0MQ',
    },
    path: 'HEALTH_AND_BEAUTY_HAND_CARE_NAIL_CARE_CUTICLE_TRIMMERS',
    rawPath: 'health-and-beauty/hand-care/nail-care/cuticle-trimmers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM5NTA0OTYwNzE2OQ',
    name: 'Manicure Sets',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM5MzU3NTk5NzQ0MQ',
    },
    path: 'HEALTH_AND_BEAUTY_HAND_CARE_NAIL_CARE_MANICURE_SETS',
    rawPath: 'health-and-beauty/hand-care/nail-care/manicure-sets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM5NTQzMDIwNzQ4OQ',
    name: 'Foot Care',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MTI5OTIx',
    },
    path: 'HEALTH_AND_BEAUTY_FOOT_CARE',
    rawPath: 'health-and-beauty/foot-care',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM5NTgzNDQzMzUzNw',
    name: 'Foot Creams',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM5NTQzMDIwNzQ4OQ',
    },
    path: 'HEALTH_AND_BEAUTY_FOOT_CARE_FOOT_CREAMS',
    rawPath: 'health-and-beauty/foot-care/foot-creams',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM5NjEzNzkzMDc1Mw',
    name: 'Foot Scrubs',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM5NTQzMDIwNzQ4OQ',
    },
    path: 'HEALTH_AND_BEAUTY_FOOT_CARE_FOOT_SCRUBS',
    rawPath: 'health-and-beauty/foot-care/foot-scrubs',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjM5NjQyMTM1NzU2OQ',
    name: 'Foot Sprays',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM5NTQzMDIwNzQ4OQ',
    },
    path: 'HEALTH_AND_BEAUTY_FOOT_CARE_FOOT_SPRAYS',
    rawPath: 'health-and-beauty/foot-care/foot-sprays',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQ0ODY1Mzk3NTU1Mw',
    name: 'Foot Masks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjM5NTQzMDIwNzQ4OQ',
    },
    path: 'HEALTH_AND_BEAUTY_FOOT_CARE_FOOT_MASKS',
    rawPath: 'health-and-beauty/foot-care/foot-masks',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQyMDMzNzEzMTUyMQ',
    name: 'Wellness',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MTI5OTIx',
    },
    path: 'HEALTH_AND_BEAUTY_WELLNESS',
    rawPath: 'health-and-beauty/wellness',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MzY2NTYwNzA3Mzc5Mw',
    name: 'Supplements',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjQyMDMzNzEzMTUyMQ',
    },
    path: 'HEALTH_AND_BEAUTY_WELLNESS_SUPPLEMENTS',
    rawPath: 'health-and-beauty/wellness/supplements',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MzY2Nzg5MzAzNTAwOQ',
    name: 'Crystals',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjQyMDMzNzEzMTUyMQ',
    },
    path: 'HEALTH_AND_BEAUTY_WELLNESS_CRYSTALS',
    rawPath: 'health-and-beauty/wellness/crystals',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MzY2ODc3ODE4MDYwOQ',
    name: 'Essential Oils',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjQyMDMzNzEzMTUyMQ',
    },
    path: 'HEALTH_AND_BEAUTY_WELLNESS_ESSENTIAL_OILS',
    rawPath: 'health-and-beauty/wellness/essential-oils',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MzY3MDU2MjY0Mzk2OQ',
    name: 'Sleep Masks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjQyMDMzNzEzMTUyMQ',
    },
    path: 'HEALTH_AND_BEAUTY_WELLNESS_SLEEP_MASKS',
    rawPath: 'health-and-beauty/wellness/sleep-masks',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQzNDc1MjEzNTE2OQ',
    name: 'Sports Equipment',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MTI5OTIx',
    },
    path: 'HEALTH_AND_BEAUTY_SPORTS_EQUIPMENT',
    rawPath: 'health-and-beauty/sports-equipment',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM3MzY2OTMyMTI2MTA1Nw',
    name: 'Yoga Mats',
    parent: {
      id: 'Q2F0ZWdvcnk6MzAzNTk5NzYxMDA0OTUzNw',
    },
    path: 'HEALTH_AND_BEAUTY_SPORTS_EQUIPMENT_YOGA_YOGA_MATS',
    rawPath: 'health-and-beauty/sports-equipment/yoga/yoga-mats',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQzNTEyNzU0MTc2MQ',
    name: 'Yoga Blocks',
    parent: {
      id: 'Q2F0ZWdvcnk6MzAzNTk5NzYxMDA0OTUzNw',
    },
    path: 'HEALTH_AND_BEAUTY_SPORTS_EQUIPMENT_YOGA_YOGA_BLOCKS',
    rawPath: 'health-and-beauty/sports-equipment/yoga/yoga-blocks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQzNTYzNTA4NTMxMw',
    name: 'Meditation Pillows',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjQzNDc1MjEzNTE2OQ',
    },
    path: 'HEALTH_AND_BEAUTY_SPORTS_EQUIPMENT_MEDITATION_PILLOWS',
    rawPath: 'health-and-beauty/sports-equipment/meditation-pillows',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQzNTk4MzM0MzYxNw',
    name: 'Fitness Equipment',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjQzNDc1MjEzNTE2OQ',
    },
    path: 'HEALTH_AND_BEAUTY_SPORTS_EQUIPMENT_FITNESS_EQUIPMENT',
    rawPath: 'health-and-beauty/sports-equipment/fitness-equipment',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MzAzNTk5NzYxMDA0OTUzNw',
    name: 'Yoga',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NjQzNDc1MjEzNTE2OQ',
    },
    path: 'HEALTH_AND_BEAUTY_SPORTS_EQUIPMENT_YOGA',
    rawPath: 'health-and-beauty/sports-equipment/yoga',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NjQzNzczMDM4NTkyMQ',
    name: 'Beauty Gift Sets',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MTI5OTIx',
    },
    path: 'HEALTH_AND_BEAUTY_BEAUTY_GIFT_SETS',
    rawPath: 'health-and-beauty/beauty-gift-sets',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjUxNDc4MjIwMjY3NTIwMQ',
    name: 'Intimacy',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc4MTI5OTIx',
    },
    path: 'HEALTH_AND_BEAUTY_INTIMACY',
    rawPath: 'health-and-beauty/intimacy',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjUyNDUyNTc3Mjk4MDIyNQ',
    name: 'For Him',
    parent: {
      id: 'Q2F0ZWdvcnk6MjUxNDc4MjIwMjY3NTIwMQ',
    },
    path: 'HEALTH_AND_BEAUTY_INTIMACY_FOR_HIM',
    rawPath: 'health-and-beauty/intimacy/for-him',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjUyNDUyNjc1MzQ4MDcwNQ',
    name: 'For Her',
    parent: {
      id: 'Q2F0ZWdvcnk6MjUxNDc4MjIwMjY3NTIwMQ',
    },
    path: 'HEALTH_AND_BEAUTY_INTIMACY_FOR_HER',
    rawPath: 'health-and-beauty/intimacy/for-her',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjUyNDUyNzQ0MDc3MzEyMQ',
    name: 'For Couples',
    parent: {
      id: 'Q2F0ZWdvcnk6MjUxNDc4MjIwMjY3NTIwMQ',
    },
    path: 'HEALTH_AND_BEAUTY_INTIMACY_FOR_COUPLES',
    rawPath: 'health-and-beauty/intimacy/for-couples',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjUyNDU0NzAyMzg5NjU3Nw',
    name: 'Condoms',
    parent: {
      id: 'Q2F0ZWdvcnk6MjUxNDc4MjIwMjY3NTIwMQ',
    },
    path: 'HEALTH_AND_BEAUTY_INTIMACY_CONDOMS',
    rawPath: 'health-and-beauty/intimacy/condoms',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjUyNDU1MDQ4NDAzMzUzNw',
    name: 'Lubricants',
    parent: {
      id: 'Q2F0ZWdvcnk6MjUxNDc4MjIwMjY3NTIwMQ',
    },
    path: 'HEALTH_AND_BEAUTY_INTIMACY_LUBRICANTS',
    rawPath: 'health-and-beauty/intimacy/lubricants',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjUyNDU1NjI0ODQ5ODE3Nw',
    name: 'Toy Cleaners',
    parent: {
      id: 'Q2F0ZWdvcnk6MjUxNDc4MjIwMjY3NTIwMQ',
    },
    path: 'HEALTH_AND_BEAUTY_INTIMACY_TOY_CLEANERS',
    rawPath: 'health-and-beauty/intimacy/toy-cleaners',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTcyODU0Mjcz',
    name: 'Jewelry',
    parent: null,
    path: 'JEWELRY_ACCESSORIES',
    rawPath: 'jewelry-accessories',
    depth: 0,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMzA2MjQwMTU0ODI4OQ',
    name: 'Brooches',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcyODU0Mjcz',
    },
    path: 'JEWELRY_ACCESSORIES_BROOCHES',
    rawPath: 'jewelry-accessories/brooches',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3ODUxMzkz',
    name: 'Jewelry Storage',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcyODU0Mjcz',
    },
    path: 'JEWELRY_ACCESSORIES_JEWELLERY_STORAGE',
    rawPath: 'jewelry-accessories/jewellery-storage',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTY5OTExNzc3Njg5Nw',
    name: 'Jewelry Boxes',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3ODUxMzkz',
    },
    path: 'JEWELRY_ACCESSORIES_JEWELLERY_STORAGE_JEWELLERY_BOXES',
    rawPath: 'jewelry-accessories/jewellery-storage/jewellery-boxes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTY5OTYzMDYyODg2NQ',
    name: 'Jewelry Trays',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3ODUxMzkz',
    },
    path: 'JEWELRY_ACCESSORIES_JEWELLERY_STORAGE_JEWELLERY_TRAYS',
    rawPath: 'jewelry-accessories/jewellery-storage/jewellery-trays',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTcwMDM4OTM1NTUyMQ',
    name: 'Jewelry Stands',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3ODUxMzkz',
    },
    path: 'JEWELRY_ACCESSORIES_JEWELLERY_STORAGE_JEWELLERY_STANDS',
    rawPath: 'jewelry-accessories/jewellery-storage/jewellery-stands',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDY1MTQ3MTQyMTQ0MQ',
    name: 'Jewelry Pouches',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3ODUxMzkz',
    },
    path: 'JEWELRY_ACCESSORIES_JEWELLERY_STORAGE_JEWELLERY_POUCHES',
    rawPath: 'jewelry-accessories/jewellery-storage/jewellery-pouches',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDY1MjA0NjAwODMyMQ',
    name: 'Jewelry Cases',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3ODUxMzkz',
    },
    path: 'JEWELRY_ACCESSORIES_JEWELLERY_STORAGE_JEWELLERY_CASES',
    rawPath: 'jewelry-accessories/jewellery-storage/jewellery-cases',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDY1MjQ2ODQ2OTc2MQ',
    name: 'Jewelry Cushions',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3ODUxMzkz',
    },
    path: 'JEWELRY_ACCESSORIES_JEWELLERY_STORAGE_JEWELLERY_CUSHIONS',
    rawPath: 'jewelry-accessories/jewellery-storage/jewellery-cushions',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3NjA1NjMz',
    name: 'Rings',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcyODU0Mjcz',
    },
    path: 'JEWELRY_ACCESSORIES_RINGS',
    rawPath: 'jewelry-accessories/rings',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTY2Mjk0Mzk1Mjg5Nw',
    name: 'Stack Rings',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3NjA1NjMz',
    },
    path: 'JEWELRY_ACCESSORIES_RINGS_STACK_RINGS',
    rawPath: 'jewelry-accessories/rings/stack-rings',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTY2NTI1MjAxNjEyOQ',
    name: 'Statement Rings',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3NjA1NjMz',
    },
    path: 'JEWELRY_ACCESSORIES_RINGS_STATEMENT_RINGS',
    rawPath: 'jewelry-accessories/rings/statement-rings',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDYzNzM3NTA1MzgyNQ',
    name: 'Signet Rings',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3NjA1NjMz',
    },
    path: 'JEWELRY_ACCESSORIES_RINGS_SIGNET_RINGS',
    rawPath: 'jewelry-accessories/rings/signet-rings',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDYzNzc2MjYzMzcyOQ',
    name: 'Engagement Rings',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3NjA1NjMz',
    },
    path: 'JEWELRY_ACCESSORIES_RINGS_ENGAGEMENT_RINGS',
    rawPath: 'jewelry-accessories/rings/engagement-rings',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDY0MTQyNDk0OTI0OQ',
    name: 'Wedding Rings',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3NjA1NjMz',
    },
    path: 'JEWELRY_ACCESSORIES_RINGS_WEDDING_RINGS',
    rawPath: 'jewelry-accessories/rings/wedding-rings',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3MTk2MDMz',
    name: 'Earrings',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcyODU0Mjcz',
    },
    path: 'JEWELRY_ACCESSORIES_EARRINGS',
    rawPath: 'jewelry-accessories/earrings',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTYzNTgyNjY5NjE5Mw',
    name: 'Hoop Earrings',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3MTk2MDMz',
    },
    path: 'JEWELRY_ACCESSORIES_EARRINGS_HOOP_EARRINGS',
    rawPath: 'jewelry-accessories/earrings/hoop-earrings',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTYzNzU3NjMxMDc4NQ',
    name: 'Stud Earrings',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3MTk2MDMz',
    },
    path: 'JEWELRY_ACCESSORIES_EARRINGS_STUD_EARRINGS',
    rawPath: 'jewelry-accessories/earrings/stud-earrings',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTYzODEzODMxNDc1Mw',
    name: 'Drop Earrings',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3MTk2MDMz',
    },
    path: 'JEWELRY_ACCESSORIES_EARRINGS_DROP_EARRINGS',
    rawPath: 'jewelry-accessories/earrings/drop-earrings',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTYzODcyNDM4NjgxNw',
    name: 'Statement Earrings',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3MTk2MDMz',
    },
    path: 'JEWELRY_ACCESSORIES_EARRINGS_STATEMENT_EARRINGS',
    rawPath: 'jewelry-accessories/earrings/statement-earrings',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTYzOTM0MzQzOTg3Mw',
    name: 'Pearl Earrings',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3MTk2MDMz',
    },
    path: 'JEWELRY_ACCESSORIES_EARRINGS_PEARL_EARRINGS',
    rawPath: 'jewelry-accessories/earrings/pearl-earrings',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDYzNTIxNzY1Nzg1Nw',
    name: 'Ear Climbers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3MTk2MDMz',
    },
    path: 'JEWELRY_ACCESSORIES_EARRINGS_EAR_CLIMBERS',
    rawPath: 'jewelry-accessories/earrings/ear-climbers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDYzNTYxMTg3MzI4MQ',
    name: 'Ear Cuffs',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3MTk2MDMz',
    },
    path: 'JEWELRY_ACCESSORIES_EARRINGS_EAR_CUFFS',
    rawPath: 'jewelry-accessories/earrings/ear-cuffs',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3NDc0NTYx',
    name: 'Necklaces',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcyODU0Mjcz',
    },
    path: 'JEWELRY_ACCESSORIES_NECKLACES',
    rawPath: 'jewelry-accessories/necklaces',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTY0MDE2OTI1OTAwOQ',
    name: 'Charms',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3NDc0NTYx',
    },
    path: 'JEWELRY_ACCESSORIES_NECKLACES_CHARMS',
    rawPath: 'jewelry-accessories/necklaces/charms',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTY0MTg3NzA3ODAxNw',
    name: 'Chains',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3NDc0NTYx',
    },
    path: 'JEWELRY_ACCESSORIES_NECKLACES_CHAINS',
    rawPath: 'jewelry-accessories/necklaces/chains',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTY0MjcwNzM4NjM2OQ',
    name: 'Pendants',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3NDc0NTYx',
    },
    path: 'JEWELRY_ACCESSORIES_NECKLACES_PENDANTS',
    rawPath: 'jewelry-accessories/necklaces/pendants',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU4NDQ1MTA4MDE5Mw',
    name: 'Collars',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3NDc0NTYx',
    },
    path: 'JEWELRY_ACCESSORIES_NECKLACES_COLLARS',
    rawPath: 'jewelry-accessories/necklaces/collars',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU4NDc5NjA2MTY5Nw',
    name: 'Chokers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3NDc0NTYx',
    },
    path: 'JEWELRY_ACCESSORIES_NECKLACES_CHOKERS',
    rawPath: 'jewelry-accessories/necklaces/chokers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDYzMDUzNjQ1NDE0NQ',
    name: 'Lariat Necklaces',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3NDc0NTYx',
    },
    path: 'JEWELRY_ACCESSORIES_NECKLACES_LARIAT_NECKLACES',
    rawPath: 'jewelry-accessories/necklaces/lariat-necklaces',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDYzMDgyMjE1ODMzOA',
    name: 'Beaded Necklaces',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3NDc0NTYx',
    },
    path: 'JEWELRY_ACCESSORIES_NECKLACES_BEADED_NECKLACES',
    rawPath: 'jewelry-accessories/necklaces/beaded-necklaces',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDYzMTEwNDMzOTk2OQ',
    name: 'Woven Necklaces',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3NDc0NTYx',
    },
    path: 'JEWELRY_ACCESSORIES_NECKLACES_WOVEN_NECKLACES',
    rawPath: 'jewelry-accessories/necklaces/woven-necklaces',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDYzMTc3MjgzOTkzNw',
    name: 'Link Necklaces',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3NDc0NTYx',
    },
    path: 'JEWELRY_ACCESSORIES_NECKLACES_LINK_NECKLACES',
    rawPath: 'jewelry-accessories/necklaces/link-necklaces',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDYzMjA3NDEyNTMxMw',
    name: 'Extender Chain',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc3NDc0NTYx',
    },
    path: 'JEWELRY_ACCESSORIES_NECKLACES_EXTENDER_CHAIN',
    rawPath: 'jewelry-accessories/necklaces/extender-chain',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU2NTM2OTQzODIwOQ',
    name: 'Bracelets',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcyODU0Mjcz',
    },
    path: 'JEWELRY_ACCESSORIES_BRACELETS',
    rawPath: 'jewelry-accessories/bracelets',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTY1NjY2MTM3NzAyNQ',
    name: 'Charm Bracelets',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU2NTM2OTQzODIwOQ',
    },
    path: 'JEWELRY_ACCESSORIES_BRACELETS_CHARM_BRACELETS',
    rawPath: 'jewelry-accessories/bracelets/charm-bracelets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTY1NjAyOTkzNzY2NQ',
    name: 'Bangle Bracelets',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU2NTM2OTQzODIwOQ',
    },
    path: 'JEWELRY_ACCESSORIES_BRACELETS_BANGLE_BRACELETS',
    rawPath: 'jewelry-accessories/bracelets/bangle-bracelets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU2ODM3NzkxNzQ0MQ',
    name: 'Cuff Bracelets',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU2NTM2OTQzODIwOQ',
    },
    path: 'JEWELRY_ACCESSORIES_BRACELETS_CUFF_BRACELETS',
    rawPath: 'jewelry-accessories/bracelets/cuff-bracelets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU2ODc2OTI4MjA0OQ',
    name: 'Chain Bracelets',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU2NTM2OTQzODIwOQ',
    },
    path: 'JEWELRY_ACCESSORIES_BRACELETS_CHAIN_BRACELETS',
    rawPath: 'jewelry-accessories/bracelets/chain-bracelets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU3MDE3NjE1OTc0NQ',
    name: 'Tennis Bracelets',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU2NTM2OTQzODIwOQ',
    },
    path: 'JEWELRY_ACCESSORIES_BRACELETS_TENNIS_BRACELETS',
    rawPath: 'jewelry-accessories/bracelets/tennis-bracelets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDcwMDAwMTk5MjcwNQ',
    name: 'Beaded Bracelets',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU2NTM2OTQzODIwOQ',
    },
    path: 'JEWELRY_ACCESSORIES_BRACELETS_BEADED_BRACELETS',
    rawPath: 'jewelry-accessories/bracelets/beaded-bracelets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NTg1NDk4MzczMzI0OQ',
    name: 'Woven Bracelets',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU2NTM2OTQzODIwOQ',
    },
    path: 'JEWELRY_ACCESSORIES_BRACELETS_WOVEN_BRACELETS',
    rawPath: 'jewelry-accessories/bracelets/woven-bracelets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTY1OTI1MzExMjgzMw',
    name: 'Anklets',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTcyODU0Mjcz',
    },
    path: 'JEWELRY_ACCESSORIES_ANKLETS',
    rawPath: 'jewelry-accessories/anklets',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNDg4NjQx',
    name: 'Stationery',
    parent: null,
    path: 'STATIONERY',
    rawPath: 'stationery',
    depth: 0,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    name: 'Greeting Cards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNDg4NjQx',
    },
    path: 'STATIONERY_GREETING_CARDS',
    rawPath: 'stationery/greeting-cards',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNzE4MDE3',
    name: 'Baby Cards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    },
    path: 'STATIONERY_GREETING_CARDS_BABY_CARDS',
    rawPath: 'stationery/greeting-cards/baby-cards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxODMyNzA1',
    name: 'Birthday Cards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    },
    path: 'STATIONERY_GREETING_CARDS_BIRTHDAY_CARDS',
    rawPath: 'stationery/greeting-cards/birthday-cards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxOTQ3Mzkz',
    name: 'Christmas Cards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    },
    path: 'STATIONERY_GREETING_CARDS_CHRISTMAS_CARDS',
    rawPath: 'stationery/greeting-cards/christmas-cards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgyMDYyMDgx',
    name: 'Condolences Cards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    },
    path: 'STATIONERY_GREETING_CARDS_CONDOLENCES_CARDS',
    rawPath: 'stationery/greeting-cards/condolences-cards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgyMTkzMTUz',
    name: 'Party Cards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    },
    path: 'STATIONERY_GREETING_CARDS_PARTY_CARDS',
    rawPath: 'stationery/greeting-cards/party-cards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgyNDM4OTEz',
    name: 'Thank you Cards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    },
    path: 'STATIONERY_GREETING_CARDS_THANK_YOU_CARDS',
    rawPath: 'stationery/greeting-cards/thank-you-cards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgyNTY5OTg1',
    name: 'Wedding Cards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    },
    path: 'STATIONERY_GREETING_CARDS_WEDDING_CARDS',
    rawPath: 'stationery/greeting-cards/wedding-cards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6ODc4MzM2NjE4ODg5MjE3',
    name: 'Love Cards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    },
    path: 'STATIONERY_GREETING_CARDS_LOVE_CARDS',
    rawPath: 'stationery/greeting-cards/love-cards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6ODc4MzM2NjE5MDM2Njcz',
    name: 'Friendship Cards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    },
    path: 'STATIONERY_GREETING_CARDS_FRIENDSHIP_CARDS',
    rawPath: 'stationery/greeting-cards/friendship-cards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUxMDI5OTgwMzY0OQ',
    name: 'New Years Cards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    },
    path: 'STATIONERY_GREETING_CARDS_NEW_YEARS_CARDS',
    rawPath: 'stationery/greeting-cards/new-years-cards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUxMDUyMjY0MjQzMw',
    name: 'Get Well Cards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    },
    path: 'STATIONERY_GREETING_CARDS_GET_WELL_CARDS',
    rawPath: 'stationery/greeting-cards/get-well-cards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUxMDgzNzI5NzE1Mw',
    name: "Mother's Day Cards",
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    },
    path: 'STATIONERY_GREETING_CARDS_MOTHERS_DAY_CARDS',
    rawPath: 'stationery/greeting-cards/mothers-day-cards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUxMTExMjcyODU3Nw',
    name: "Father's Day Cards",
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    },
    path: 'STATIONERY_GREETING_CARDS_FATHERS_DAY_CARDS',
    rawPath: 'stationery/greeting-cards/fathers-day-cards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUxMTMzMzY2NjgxNw',
    name: 'Apologies Cards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    },
    path: 'STATIONERY_GREETING_CARDS_APOLOGIES_CARDS',
    rawPath: 'stationery/greeting-cards/apologies-cards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUxMTU4MTkxNzE4NQ',
    name: 'Invitation Cards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    },
    path: 'STATIONERY_GREETING_CARDS_INVITATION_CARDS',
    rawPath: 'stationery/greeting-cards/invitation-cards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUxMTg1MTIzNzM3Nw',
    name: 'Engagement Cards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    },
    path: 'STATIONERY_GREETING_CARDS_ENGAGEMENT_CARDS',
    rawPath: 'stationery/greeting-cards/engagement-cards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUxMjE0OTI5NTEwNQ',
    name: 'Good Luck Cards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    },
    path: 'STATIONERY_GREETING_CARDS_GOOD_LUCK_CARDS',
    rawPath: 'stationery/greeting-cards/good-luck-cards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUxMjM3NDc4ODA5Nw',
    name: 'Congratulations Cards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    },
    path: 'STATIONERY_GREETING_CARDS_CONGRADULATIONS_CARDS',
    rawPath: 'stationery/greeting-cards/congradulations-cards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA3NzQ0NDU4MTkzMzA1Nw',
    name: 'Easter Cards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    },
    path: 'STATIONERY_GREETING_CARDS_EASTER_CARDS',
    rawPath: 'stationery/greeting-cards/easter-cards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA5OTk0MjE3ODcxNzY5OA',
    name: 'General Cards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    },
    path: 'STATIONERY_GREETING_CARDS_GENERAL_CARDS',
    rawPath: 'stationery/greeting-cards/general-cards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUxMjc5NTY3NjY3Mw',
    name: 'Cards with Pictures',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA5OTk0MjE3ODcxNzY5OA',
    },
    path: 'STATIONERY_GREETING_CARDS_GENERAL_CARDS_GENERAL_CARDS',
    rawPath: 'stationery/greeting-cards/general-cards/general-cards',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA5OTk0NzQ0MTg0ODMyMQ',
    name: 'Cards with Text',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA5OTk0MjE3ODcxNzY5OA',
    },
    path: 'STATIONERY_GREETING_CARDS_GENERAL_CARDS_CARDS_WITH_TEXT',
    rawPath: 'stationery/greeting-cards/general-cards/cards-with-text',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjE4NTM4MjExMzcyMjM2OQ',
    name: 'Gift Cards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNjAzMzI5',
    },
    path: 'STATIONERY_GREETING_CARDS_GIFT_CARDS',
    rawPath: 'stationery/greeting-cards/gift-cards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzNDA1NTY5',
    name: 'Gift Wrapping',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNDg4NjQx',
    },
    path: 'STATIONERY_GIFT_WRAPPING',
    rawPath: 'stationery/gift-wrapping',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzNTIwMjU3',
    name: 'Wrapping Paper',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzNDA1NTY5',
    },
    path: 'STATIONERY_GIFT_WRAPPING_WRAPPING_PAPER',
    rawPath: 'stationery/gift-wrapping/wrapping-paper',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzNjM0OTQ1',
    name: 'Gift Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzNDA1NTY5',
    },
    path: 'STATIONERY_GIFT_WRAPPING_GIFT_BAGS',
    rawPath: 'stationery/gift-wrapping/gift-bags',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzODY0MzIx',
    name: 'Gift Tags',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzNDA1NTY5',
    },
    path: 'STATIONERY_GIFT_WRAPPING_GIFT_TAGS',
    rawPath: 'stationery/gift-wrapping/gift-tags',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzOTc5MDA5',
    name: 'Ribbons',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzNDA1NTY5',
    },
    path: 'STATIONERY_GIFT_WRAPPING_RIBBONS',
    rawPath: 'stationery/gift-wrapping/ribbons',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUyNjg0OTY1ODg4MQ',
    name: 'Gift Boxes',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzNDA1NTY5',
    },
    path: 'STATIONERY_GIFT_WRAPPING_GIFT_BOXES',
    rawPath: 'stationery/gift-wrapping/gift-boxes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUyODA3ODA5ODQzMw',
    name: 'Bows',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzNDA1NTY5',
    },
    path: 'STATIONERY_GIFT_WRAPPING_BOWS',
    rawPath: 'stationery/gift-wrapping/bows',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUyODQ0Mzg1NDg0OQ',
    name: 'Tissue Paper',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzNDA1NTY5',
    },
    path: 'STATIONERY_GIFT_WRAPPING_TISSUE_PAPER',
    rawPath: 'stationery/gift-wrapping/tissue-paper',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzMDQ1MTIx',
    name: 'Office Supplies',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNDg4NjQx',
    },
    path: 'STATIONERY_OFFICE_SUPPLIES',
    rawPath: 'stationery/office-supplies',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzNTU1OTkwMTE4NQ',
    name: 'Scissors',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzMDQ1MTIx',
    },
    path: 'STATIONERY_OFFICE_SUPPLIES_SCISSORS',
    rawPath: 'stationery/office-supplies/scissors',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzNTg5MDI2ODE2MQ',
    name: 'Glue',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzMDQ1MTIx',
    },
    path: 'STATIONERY_OFFICE_SUPPLIES_GLUE',
    rawPath: 'stationery/office-supplies/glue',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzNjExODMwMDY3Mw',
    name: 'Hole Punchers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzMDQ1MTIx',
    },
    path: 'STATIONERY_OFFICE_SUPPLIES_HOLE_PUNCHERS',
    rawPath: 'stationery/office-supplies/hole-punchers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzNjY0NDMyNTM3Nw',
    name: 'Tape',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzMDQ1MTIx',
    },
    path: 'STATIONERY_OFFICE_SUPPLIES_TAPE',
    rawPath: 'stationery/office-supplies/tape',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzNzQ2ODU4ODAzMw',
    name: 'Staplers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzMDQ1MTIx',
    },
    path: 'STATIONERY_OFFICE_SUPPLIES_STAPLERS',
    rawPath: 'stationery/office-supplies/staplers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzNzcxMDg5MTAwOQ',
    name: 'Staples',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzMDQ1MTIx',
    },
    path: 'STATIONERY_OFFICE_SUPPLIES_STAPLES',
    rawPath: 'stationery/office-supplies/staples',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzNzk3MjM3OTY0OQ',
    name: 'Book Markers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzMDQ1MTIx',
    },
    path: 'STATIONERY_OFFICE_SUPPLIES_BOOK_MARKERS',
    rawPath: 'stationery/office-supplies/book-markers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzODE2OTkyMTUzNw',
    name: 'Erasers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzMDQ1MTIx',
    },
    path: 'STATIONERY_OFFICE_SUPPLIES_ERASERS',
    rawPath: 'stationery/office-supplies/erasers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzODQxNDYwMDE5Mw',
    name: 'Paper Clips',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzMDQ1MTIx',
    },
    path: 'STATIONERY_OFFICE_SUPPLIES_PAPER_CLIPS',
    rawPath: 'stationery/office-supplies/paper-clips',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzODY0OTU3OTUyMQ',
    name: 'Wooden Clips',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzMDQ1MTIx',
    },
    path: 'STATIONERY_OFFICE_SUPPLIES_WOODEN_CLIPS',
    rawPath: 'stationery/office-supplies/wooden-clips',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzOTA1OTcwMzgwOQ',
    name: 'Pencil Cases',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzMDQ1MTIx',
    },
    path: 'STATIONERY_OFFICE_SUPPLIES_PENCIL_CASES',
    rawPath: 'stationery/office-supplies/pencil-cases',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzOTgzNzgyOTEyMQ',
    name: 'Writing Instruments',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzMDQ1MTIx',
    },
    path: 'STATIONERY_OFFICE_SUPPLIES_WRITING_INSTRUMENTS',
    rawPath: 'stationery/office-supplies/writing-instruments',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzU0MDEwODMxMjU3OA',
    name: 'Pens',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUzOTgzNzgyOTEyMQ',
    },
    path: 'STATIONERY_OFFICE_SUPPLIES_WRITING_INSTRUMENTS_PENS',
    rawPath: 'stationery/office-supplies/writing-instruments/pens',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzU0MDM3OTUwMDU0NQ',
    name: 'Pencils',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUzOTgzNzgyOTEyMQ',
    },
    path: 'STATIONERY_OFFICE_SUPPLIES_WRITING_INSTRUMENTS_PENCILS',
    rawPath: 'stationery/office-supplies/writing-instruments/pencils',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzU0MDYxNDExOTQyNQ',
    name: 'Markers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUzOTgzNzgyOTEyMQ',
    },
    path: 'STATIONERY_OFFICE_SUPPLIES_WRITING_INSTRUMENTS_MARKERS',
    rawPath: 'stationery/office-supplies/writing-instruments/markers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6ODA3ODIyNDQyNTQ1MTUz',
    name: 'Books',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNDg4NjQx',
    },
    path: 'STATIONERY_BOOKS',
    rawPath: 'stationery/books',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUyOTA2NTM0OTEyMQ',
    name: 'Reading Books',
    parent: {
      id: 'Q2F0ZWdvcnk6ODA3ODIyNDQyNTQ1MTUz',
    },
    path: 'STATIONERY_BOOKS_READING_BOOKS',
    rawPath: 'stationery/books/reading-books',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUyOTcxODQ2NDUxMw',
    name: 'Cook Books',
    parent: {
      id: 'Q2F0ZWdvcnk6ODA3ODIyNDQyNTQ1MTUz',
    },
    path: 'STATIONERY_BOOKS_COOK_BOOKS',
    rawPath: 'stationery/books/cook-books',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzMjc0NDk3',
    name: 'Calendars',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNDg4NjQx',
    },
    path: 'STATIONERY_CALENDARS',
    rawPath: 'stationery/calendars',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUxODcwOTg3NDY4OQ',
    name: 'Desk Calendars',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzMjc0NDk3',
    },
    path: 'STATIONERY_CALENDARS_DESK_CALENDARS',
    rawPath: 'stationery/calendars/desk-calendars',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUxOTEwOTM4MjE0NQ',
    name: 'Wall Calendars',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzMjc0NDk3',
    },
    path: 'STATIONERY_CALENDARS_WALL_CALENDARS',
    rawPath: 'stationery/calendars/wall-calendars',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTQzMDc1MTI4MzkzNzI4MQ',
    name: 'Games and Puzzles',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNDg4NjQx',
    },
    path: 'STATIONERY_GAMES_AND_PUZZLES',
    rawPath: 'stationery/games-and-puzzles',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzMDQ3NTI0MTQ3Mw',
    name: 'Games',
    parent: {
      id: 'Q2F0ZWdvcnk6MTQzMDc1MTI4MzkzNzI4MQ',
    },
    path: 'STATIONERY_GAMES_AND_PUZZLES_GAMES',
    rawPath: 'stationery/games-and-puzzles/games',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzMDc5NzU5NjY3Mw',
    name: 'Puzzles',
    parent: {
      id: 'Q2F0ZWdvcnk6MTQzMDc1MTI4MzkzNzI4MQ',
    },
    path: 'STATIONERY_GAMES_AND_PUZZLES_PUZZLES',
    rawPath: 'stationery/games-and-puzzles/puzzles',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzQ4MjMzMzMzMTQ1Nw',
    name: 'Envelopes',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNDg4NjQx',
    },
    path: 'STATIONERY_ENVELOPES',
    rawPath: 'stationery/envelopes',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzQ4MjgzMzI4OTIxNw',
    name: 'Notes',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNDg4NjQx',
    },
    path: 'STATIONERY_NOTES',
    rawPath: 'stationery/notes',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzMTU5ODA5',
    name: 'Notebooks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzQ4MjgzMzI4OTIxNw',
    },
    path: 'STATIONERY_NOTES_NOTEBOOKS',
    rawPath: 'stationery/notes/notebooks',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUxNTU2OTg0ODMyMQ',
    name: 'Notepads',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzQ4MjgzMzI4OTIxNw',
    },
    path: 'STATIONERY_NOTES_NOTEPADS',
    rawPath: 'stationery/notes/notepads',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUxNjk2OTk5MjE5Mw',
    name: 'Post-Its',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzQ4MjgzMzI4OTIxNw',
    },
    path: 'STATIONERY_NOTES_POST_ITS',
    rawPath: 'stationery/notes/post-its',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUxNzU1NzkxNTY0OQ',
    name: 'Journals',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNDg4NjQx',
    },
    path: 'STATIONERY_JOURNALS',
    rawPath: 'stationery/journals',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUxOTk0NzI0MzUyMQ',
    name: 'Planners',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNDg4NjQx',
    },
    path: 'STATIONERY_PLANNERS',
    rawPath: 'stationery/planners',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUyMDIxMjQ1MTMyOQ',
    name: 'Weekly Planners',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUxOTk0NzI0MzUyMQ',
    },
    path: 'STATIONERY_PLANNERS_WEEKLY_PLANNERS',
    rawPath: 'stationery/planners/weekly-planners',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUyMDQ3NDEwMzgwOQ',
    name: 'Daily Planners',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUxOTk0NzI0MzUyMQ',
    },
    path: 'STATIONERY_PLANNERS_DAILY_PLANNERS',
    rawPath: 'stationery/planners/daily-planners',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUyMDc5ODc2OTE1Mw',
    name: 'Academic Planners',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUxOTk0NzI0MzUyMQ',
    },
    path: 'STATIONERY_PLANNERS_ACADEMIC_PLANNERS',
    rawPath: 'stationery/planners/academic-planners',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUyMTEzNTU5MTQyNQ',
    name: 'Monthly Planners',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUxOTk0NzI0MzUyMQ',
    },
    path: 'STATIONERY_PLANNERS_MONTHLY_PLANNERS',
    rawPath: 'stationery/planners/monthly-planners',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUyMTUwODQ5MTI2NQ',
    name: 'To Do Lists',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUxOTk0NzI0MzUyMQ',
    },
    path: 'STATIONERY_PLANNERS_TO_DO_LISTS',
    rawPath: 'stationery/planners/to-do-lists',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUyMTk0NzgyODIyNQ',
    name: 'Desk Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNDg4NjQx',
    },
    path: 'STATIONERY_DESK_ACCESSORIES',
    rawPath: 'stationery/desk-accessories',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUyMjQ0NjE4MDM1Mw',
    name: 'Desktop Organisers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUyMTk0NzgyODIyNQ',
    },
    path: 'STATIONERY_DESK_ACCESSORIES_DESKTOP_ORGANISERS',
    rawPath: 'stationery/desk-accessories/desktop-organisers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUyMzU4MTMxMzAyNQ',
    name: 'Mouse Pads',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUyMTk0NzgyODIyNQ',
    },
    path: 'STATIONERY_DESK_ACCESSORIES_MOUSE_PADS',
    rawPath: 'stationery/desk-accessories/mouse-pads',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUyMzgzMzY5MjE2MQ',
    name: 'Laptop Stands',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUyMTk0NzgyODIyNQ',
    },
    path: 'STATIONERY_DESK_ACCESSORIES_LAPTOP_STANDS',
    rawPath: 'stationery/desk-accessories/laptop-stands',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUyNDA4MzE1NDk0NQ',
    name: 'Phone Holders',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUyMTk0NzgyODIyNQ',
    },
    path: 'STATIONERY_DESK_ACCESSORIES_PHONE_HOLDERS',
    rawPath: 'stationery/desk-accessories/phone-holders',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUyNDQ0ODc5NjY3Mw',
    name: 'Catchall Trays',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUyMTk0NzgyODIyNQ',
    },
    path: 'STATIONERY_DESK_ACCESSORIES_CATCHALL_TRAYS',
    rawPath: 'stationery/desk-accessories/catchall-trays',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUyNDY2OTU1NDY4OQ',
    name: 'Pencil Holder',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUyMTk0NzgyODIyNQ',
    },
    path: 'STATIONERY_DESK_ACCESSORIES_PENCIL_HOLDER',
    rawPath: 'stationery/desk-accessories/pencil-holder',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUyNDg5NDgxODMwNQ',
    name: 'File Holders',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUyMTk0NzgyODIyNQ',
    },
    path: 'STATIONERY_DESK_ACCESSORIES_FILE_HOLDERS',
    rawPath: 'stationery/desk-accessories/file-holders',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUyNTExODM2MTYwMQ',
    name: 'Magazine Holders',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUyMTk0NzgyODIyNQ',
    },
    path: 'STATIONERY_DESK_ACCESSORIES_MAGAZINE_HOLDERS',
    rawPath: 'stationery/desk-accessories/magazine-holders',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUyNTM1Nzg0NjUyOQ',
    name: 'Paper Weights',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUyMTk0NzgyODIyNQ',
    },
    path: 'STATIONERY_DESK_ACCESSORIES_PAPER_WEIGHTS',
    rawPath: 'stationery/desk-accessories/paper-weights',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzMTM1ODQwNDYwOQ',
    name: 'Craft',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTgxNDg4NjQx',
    },
    path: 'STATIONERY_CRAFT',
    rawPath: 'stationery/craft',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTgzNzQ5NjMz',
    name: 'Stickers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUzMTM1ODQwNDYwOQ',
    },
    path: 'STATIONERY_CRAFT_STICKERS',
    rawPath: 'stationery/craft/stickers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzMTY2ODI3NTIwMQ',
    name: 'Washi Tape',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUzMTM1ODQwNDYwOQ',
    },
    path: 'STATIONERY_CRAFT_WASHI_TAPE',
    rawPath: 'stationery/craft/washi-tape',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzMjA1ODI2MzU1Mw',
    name: 'Photo Albums',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUzMTM1ODQwNDYwOQ',
    },
    path: 'STATIONERY_CRAFT_PHOTO_ALBUMS',
    rawPath: 'stationery/craft/photo-albums',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzMjMyMzk3OTI2NQ',
    name: 'Scrap Books',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUzMTM1ODQwNDYwOQ',
    },
    path: 'STATIONERY_CRAFT_SCRAP_BOOKS',
    rawPath: 'stationery/craft/scrap-books',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzMjY0MjEwNzM5Mw',
    name: 'DIY Craft Kits',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUzMTM1ODQwNDYwOQ',
    },
    path: 'STATIONERY_CRAFT_DIY_CRAFT_KITS',
    rawPath: 'stationery/craft/diy-craft-kits',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzMzg2MzA3NTg0MQ',
    name: 'Stamps',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUzMTM1ODQwNDYwOQ',
    },
    path: 'STATIONERY_CRAFT_STAMPS',
    rawPath: 'stationery/craft/stamps',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzNDEyNzE1MzE1Mw',
    name: 'Rubber Stamps',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUzMzg2MzA3NTg0MQ',
    },
    path: 'STATIONERY_CRAFT_STAMPS_RUBBER_STAMPS',
    rawPath: 'stationery/craft/stamps/rubber-stamps',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA0NzUzNDQ0NDM0NzM5Mw',
    name: 'Ink Pads',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUzMzg2MzA3NTg0MQ',
    },
    path: 'STATIONERY_CRAFT_STAMPS_INK_PADS',
    rawPath: 'stationery/craft/stamps/ink-pads',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA2OTEwODU2NjYyMjIwOQ',
    name: 'Art Supplies',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUzMTM1ODQwNDYwOQ',
    },
    path: 'STATIONERY_CRAFT_ART_SUPPLIES',
    rawPath: 'stationery/craft/art-supplies',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA2OTExNjk4MTg4Njk3Nw',
    name: 'Knitting',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA0NzUzMTM1ODQwNDYwOQ',
    },
    path: 'STATIONERY_CRAFT_KNITTING',
    rawPath: 'stationery/craft/knitting',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQxMzYyODQ0NDY3Mw',
    name: 'Fashion',
    parent: null,
    path: 'FASHION',
    rawPath: 'fashion',
    depth: 0,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU2MzM4OTQzMTgwOQ',
    name: 'Tech Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQxMzYyODQ0NDY3Mw',
    },
    path: 'FASHION_TECH_ACCESSORIES',
    rawPath: 'fashion/tech-accessories',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc2MzExMjk3',
    name: 'Smartphone Cases',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU2MzM4OTQzMTgwOQ',
    },
    path: 'FASHION_TECH_ACCESSORIES_SMARTPHONE_CASES',
    rawPath: 'fashion/tech-accessories/smartphone-cases',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU2NjM2MDY3MDIwOQ',
    name: 'Headphone Cases',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU2MzM4OTQzMTgwOQ',
    },
    path: 'FASHION_TECH_ACCESSORIES_HEADPHONE_CASES',
    rawPath: 'fashion/tech-accessories/headphone-cases',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU2Njc1NzQ0MTUzNw',
    name: 'Tablet Cases',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU2MzM4OTQzMTgwOQ',
    },
    path: 'FASHION_TECH_ACCESSORIES_TABLET_CASES',
    rawPath: 'fashion/tech-accessories/tablet-cases',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU2NzA0MzQ4OTc5Mw',
    name: 'Laptop Cases',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU2MzM4OTQzMTgwOQ',
    },
    path: 'FASHION_TECH_ACCESSORIES_LAPTOP_CASES',
    rawPath: 'fashion/tech-accessories/laptop-cases',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU2ODI2MTIxNDIwOQ',
    name: 'Chargers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU2MzM4OTQzMTgwOQ',
    },
    path: 'FASHION_TECH_ACCESSORIES_CHARGERS',
    rawPath: 'fashion/tech-accessories/chargers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU3MTk2NTQ1NjM4NQ',
    name: 'Shoes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQxMzYyODQ0NDY3Mw',
    },
    path: 'FASHION_SHOES',
    rawPath: 'fashion/shoes',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU3NzA4Njc2NzEwNQ',
    name: "Women's Shoes",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3MTk2NTQ1NjM4NQ',
    },
    path: 'FASHION_SHOES_WOMENS_SHOES',
    rawPath: 'fashion/shoes/womens-shoes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjYyNDI4NDMzNjEyOQ',
    name: "Women's Boots",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3NzA4Njc2NzEwNQ',
    },
    path: 'FASHION_SHOES_WOMENS_SHOES_WOMENS_BOOTS',
    rawPath: 'fashion/shoes/womens-shoes/womens-boots',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY1OTAxMzA0MjE3Nw',
    name: "Women's Booties",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjYyNDI4NDMzNjEyOQ',
    },
    path: 'FASHION_SHOES_WOMENS_SHOES_WOMENS_BOOTS_WOMENS_BOOTIES',
    rawPath: 'fashion/shoes/womens-shoes/womens-boots/womens-booties',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY2MDAyNTM0NDAwMQ',
    name: "Women's Chelsea Boots",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjYyNDI4NDMzNjEyOQ',
    },
    path: 'FASHION_SHOES_WOMENS_SHOES_WOMENS_BOOTS_WOMENS_CHELSEA_BOOTS',
    rawPath: 'fashion/shoes/womens-shoes/womens-boots/womens-chelsea-boots',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY2MDg2MjA5MTI2NQ',
    name: "Women's Combat Boots",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjYyNDI4NDMzNjEyOQ',
    },
    path: 'FASHION_SHOES_WOMENS_SHOES_WOMENS_BOOTS_WOMENS_COMBAT_BOOTS',
    rawPath: 'fashion/shoes/womens-shoes/womens-boots/womens-combat-boots',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY2MTc5NjY2NzM5Mw',
    name: "Women's Cowboy Boots",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjYyNDI4NDMzNjEyOQ',
    },
    path: 'FASHION_SHOES_WOMENS_SHOES_WOMENS_BOOTS_WOMENS_COWBOY_BOOTS',
    rawPath: 'fashion/shoes/womens-shoes/womens-boots/womens-cowboy-boots',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY2MjcyOTkzMjgwMQ',
    name: "Women's Hiking Boots",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjYyNDI4NDMzNjEyOQ',
    },
    path: 'FASHION_SHOES_WOMENS_SHOES_WOMENS_BOOTS_WOMENS_HIKING_BOOTS',
    rawPath: 'fashion/shoes/womens-shoes/womens-boots/womens-hiking-boots',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY2MzQzMDA1Mzg4OQ',
    name: "Women's Rain Boots",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjYyNDI4NDMzNjEyOQ',
    },
    path: 'FASHION_SHOES_WOMENS_SHOES_WOMENS_BOOTS_WOMENS_RAIN_BOOTS',
    rawPath: 'fashion/shoes/womens-shoes/womens-boots/womens-rain-boots',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY2NTAwMjU0MTA1Nw',
    name: "Women's Snow Boots",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjYyNDI4NDMzNjEyOQ',
    },
    path: 'FASHION_SHOES_WOMENS_SHOES_WOMENS_BOOTS_WOMENS_SNOW_BOOTS',
    rawPath: 'fashion/shoes/womens-shoes/womens-boots/womens-snow-boots',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjYyOTc2NzIwODk2MQ',
    name: "Women's Sandals",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3NzA4Njc2NzEwNQ',
    },
    path: 'FASHION_SHOES_WOMENS_SHOES_WOMENS_SANDALS',
    rawPath: 'fashion/shoes/womens-shoes/womens-sandals',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjYzMjE3Mjc3MzM3Nw',
    name: "Women's Flats",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3NzA4Njc2NzEwNQ',
    },
    path: 'FASHION_SHOES_WOMENS_SHOES_WOMENS_FLATS',
    rawPath: 'fashion/shoes/womens-shoes/womens-flats',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY2NjM2NzMyODI1Nw',
    name: "Women's Ballet Flats",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjYzMjE3Mjc3MzM3Nw',
    },
    path: 'FASHION_SHOES_WOMENS_SHOES_WOMENS_FLATS_WOMENS_BALLET_FLATS',
    rawPath: 'fashion/shoes/womens-shoes/womens-flats/womens-ballet-flats',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY2NzAzNTY2NDM4NQ',
    name: "Women's Boat Shoes",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjYzMjE3Mjc3MzM3Nw',
    },
    path: 'FASHION_SHOES_WOMENS_SHOES_WOMENS_FLATS_WOMENS_BOAT_SHOES',
    rawPath: 'fashion/shoes/womens-shoes/womens-flats/womens-boat-shoes',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY2ODM0MDY0OTk4NQ',
    name: "Women's Loafers",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjYzMjE3Mjc3MzM3Nw',
    },
    path: 'FASHION_SHOES_WOMENS_SHOES_WOMENS_FLATS_WOMENS_LOAFERS',
    rawPath: 'fashion/shoes/womens-shoes/womens-flats/womens-loafers',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjYzMjk4NTkyNzY4MQ',
    name: "Women's Heels",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3NzA4Njc2NzEwNQ',
    },
    path: 'FASHION_SHOES_WOMENS_SHOES_WOMENS_HEELS',
    rawPath: 'fashion/shoes/womens-shoes/womens-heels',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY2OTcxMDIzNzY5Nw',
    name: "Women's High Heels",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjYzMjk4NTkyNzY4MQ',
    },
    path: 'FASHION_SHOES_WOMENS_SHOES_WOMENS_HEELS_WOMENS_HIGH_HEELS',
    rawPath: 'fashion/shoes/womens-shoes/womens-heels/womens-high-heels',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY3MDgzMjExNTcxMw',
    name: "Women's Low Heels",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjYzMjk4NTkyNzY4MQ',
    },
    path: 'FASHION_SHOES_WOMENS_SHOES_WOMENS_HEELS_WOMENS_LOW_HEELS',
    rawPath: 'fashion/shoes/womens-shoes/womens-heels/womens-low-heels',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY3MjMzMjg3MzcyOQ',
    name: "Women's Wedges",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjYzMjk4NTkyNzY4MQ',
    },
    path: 'FASHION_SHOES_WOMENS_SHOES_WOMENS_HEELS_WOMENS_WEDGES',
    rawPath: 'fashion/shoes/womens-shoes/womens-heels/womens-wedges',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjYzNDA2NTczMTU4NQ',
    name: "Women's Mules",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3NzA4Njc2NzEwNQ',
    },
    path: 'FASHION_SHOES_WOMENS_SHOES_WOMENS_MULES',
    rawPath: 'fashion/shoes/womens-shoes/womens-mules',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjYzNTc1NDIxNzQ3Mw',
    name: "Women's Sneakers",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3NzA4Njc2NzEwNQ',
    },
    path: 'FASHION_SHOES_WOMENS_SHOES_WOMENS_SNEAKERS',
    rawPath: 'fashion/shoes/womens-shoes/womens-sneakers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjcyODkyMDU1NTUyMQ',
    name: "Women's Flip Flops",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3NzA4Njc2NzEwNQ',
    },
    path: 'FASHION_SHOES_WOMENS_SHOES_WOMENS_FLIP_FLOPS',
    rawPath: 'fashion/shoes/womens-shoes/womens-flip-flops',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU3NzkwNzUwNzIwMQ',
    name: "Men's Shoes",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3MTk2NTQ1NjM4NQ',
    },
    path: 'FASHION_SHOES_MENS_SHOES',
    rawPath: 'fashion/shoes/mens-shoes',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjYzNzM1NzMyNjMzNw',
    name: "Men's Dress Shoes",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3NzkwNzUwNzIwMQ',
    },
    path: 'FASHION_SHOES_MENS_SHOES_MENS_DRESS_SHOES',
    rawPath: 'fashion/shoes/mens-shoes/mens-dress-shoes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY3MzIwNjg0NTQ0MQ',
    name: 'Derby Shoes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjYzNzM1NzMyNjMzNw',
    },
    path: 'FASHION_SHOES_MENS_SHOES_MENS_DRESS_SHOES_DERBY_SHOES',
    rawPath: 'fashion/shoes/mens-shoes/mens-dress-shoes/derby-shoes',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY3Mzg3NzU1NzI0OQ',
    name: 'Oxford Shoes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjYzNzM1NzMyNjMzNw',
    },
    path: 'FASHION_SHOES_MENS_SHOES_MENS_DRESS_SHOES_OXFORD_SHOES',
    rawPath: 'fashion/shoes/mens-shoes/mens-dress-shoes/oxford-shoes',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY3NDQyODU2NzU1Mw',
    name: 'Brogues',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjYzNzM1NzMyNjMzNw',
    },
    path: 'FASHION_SHOES_MENS_SHOES_MENS_DRESS_SHOES_BROGUES',
    rawPath: 'fashion/shoes/mens-shoes/mens-dress-shoes/brogues',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjYzODg5MzE5NTI2NQ',
    name: "Men's Loafers",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3NzkwNzUwNzIwMQ',
    },
    path: 'FASHION_SHOES_MENS_SHOES_MENS_LOAFERS',
    rawPath: 'fashion/shoes/mens-shoes/mens-loafers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY0MDIxNDcyODcwNQ',
    name: "Men's Sandals",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3NzkwNzUwNzIwMQ',
    },
    path: 'FASHION_SHOES_MENS_SHOES_MENS_SANDALS',
    rawPath: 'fashion/shoes/mens-shoes/mens-sandals',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY0MTE2NTYzOTY4MQ',
    name: "Men's Sneakers",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3NzkwNzUwNzIwMQ',
    },
    path: 'FASHION_SHOES_MENS_SHOES_MENS_SNEAKERS',
    rawPath: 'fashion/shoes/mens-shoes/mens-sneakers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY0MjQ3MjI5NjQ0OQ',
    name: "Men's Boots",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3NzkwNzUwNzIwMQ',
    },
    path: 'FASHION_SHOES_MENS_SHOES_MENS_BOOTS',
    rawPath: 'fashion/shoes/mens-shoes/mens-boots',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY0ODMxNzAwOTkyMQ',
    name: "Men's Chelsea Boots",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjY0MjQ3MjI5NjQ0OQ',
    },
    path: 'FASHION_SHOES_MENS_SHOES_MENS_BOOTS_MENS_CHELSEA_BOOTS',
    rawPath: 'fashion/shoes/mens-shoes/mens-boots/mens-chelsea-boots',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY1MDI2NDI0ODMyMQ',
    name: "Men's Chukka Boots",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjY0MjQ3MjI5NjQ0OQ',
    },
    path: 'FASHION_SHOES_MENS_SHOES_MENS_BOOTS_MENS_CHUKKA_BOOTS',
    rawPath: 'fashion/shoes/mens-shoes/mens-boots/mens-chukka-boots',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY1MTkwOTA4NzIzMw',
    name: "Men's Combat Boots",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjY0MjQ3MjI5NjQ0OQ',
    },
    path: 'FASHION_SHOES_MENS_SHOES_MENS_BOOTS_MENS_COMBAT_BOOTS',
    rawPath: 'fashion/shoes/mens-shoes/mens-boots/mens-combat-boots',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY1MzY0MTgwOTkyMQ',
    name: "Men's Cowboy Boots",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjY0MjQ3MjI5NjQ0OQ',
    },
    path: 'FASHION_SHOES_MENS_SHOES_MENS_BOOTS_MENS_COWBOY_BOOTS',
    rawPath: 'fashion/shoes/mens-shoes/mens-boots/mens-cowboy-boots',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY1NDQ1NTQ4ODUxMw',
    name: "Men's Hiking Boots",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjY0MjQ3MjI5NjQ0OQ',
    },
    path: 'FASHION_SHOES_MENS_SHOES_MENS_BOOTS_MENS_HIKING_BOOTS',
    rawPath: 'fashion/shoes/mens-shoes/mens-boots/mens-hiking-boots',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY1NTQwNDIyMDQxNw',
    name: "Men's Rain Boots",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjY0MjQ3MjI5NjQ0OQ',
    },
    path: 'FASHION_SHOES_MENS_SHOES_MENS_BOOTS_MENS_RAIN_BOOTS',
    rawPath: 'fashion/shoes/mens-shoes/mens-boots/mens-rain-boots',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjY1NzM0ODk4NDgzMw',
    name: "Men's Snow Boots",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjY0MjQ3MjI5NjQ0OQ',
    },
    path: 'FASHION_SHOES_MENS_SHOES_MENS_BOOTS_MENS_SNOW_BOOTS',
    rawPath: 'fashion/shoes/mens-shoes/mens-boots/mens-snow-boots',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjczMDkyNTA4ODc2OQ',
    name: "Men's Flip Flops",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3NzkwNzUwNzIwMQ',
    },
    path: 'FASHION_SHOES_MENS_SHOES_MENS_FLIP_FLOPS',
    rawPath: 'fashion/shoes/mens-shoes/mens-flip-flops',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU3ODkwMjYwNTgyNQ',
    name: 'Shoe Care & Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3MTk2NTQ1NjM4NQ',
    },
    path: 'FASHION_SHOES_SHOE_CARE_ACCESSORIES',
    rawPath: 'fashion/shoes/shoe-care-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc2NjcxNzQ1',
    name: 'Shoelaces',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3ODkwMjYwNTgyNQ',
    },
    path: 'FASHION_SHOES_SHOE_CARE_ACCESSORIES_SHOE_LACES',
    rawPath: 'fashion/shoes/shoe-care-accessories/shoe-laces',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjIyNDczMDQxNzAzNzMxMw',
    name: 'Shoe Horns',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3ODkwMjYwNTgyNQ',
    },
    path: 'FASHION_SHOES_SHOE_CARE_ACCESSORIES_SHOE_HORNS',
    rawPath: 'fashion/shoes/shoe-care-accessories/shoe-horns',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjcxNDIxOTQ1NDQ2NQ',
    name: 'Inserts & Insoles',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3ODkwMjYwNTgyNQ',
    },
    path: 'FASHION_SHOES_SHOE_CARE_ACCESSORIES_INSERTS_INSOLES',
    rawPath: 'fashion/shoes/shoe-care-accessories/inserts-insoles',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjcxNTExNzE2NjU5Mw',
    name: 'Shoe Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3ODkwMjYwNTgyNQ',
    },
    path: 'FASHION_SHOES_SHOE_CARE_ACCESSORIES_SHOE_BAGS',
    rawPath: 'fashion/shoes/shoe-care-accessories/shoe-bags',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjcxNTk0ODM5MjQ0OQ',
    name: 'Shoe Brushes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3ODkwMjYwNTgyNQ',
    },
    path: 'FASHION_SHOES_SHOE_CARE_ACCESSORIES_SHOE_BRUSHES',
    rawPath: 'fashion/shoes/shoe-care-accessories/shoe-brushes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjcxNzUwODU1ODg0OQ',
    name: 'Shoe Polish',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3ODkwMjYwNTgyNQ',
    },
    path: 'FASHION_SHOES_SHOE_CARE_ACCESSORIES_SHOE_POLISH',
    rawPath: 'fashion/shoes/shoe-care-accessories/shoe-polish',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjcxODMwMzI5NzUzNw',
    name: 'Shoe Cleaners',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3ODkwMjYwNTgyNQ',
    },
    path: 'FASHION_SHOES_SHOE_CARE_ACCESSORIES_SHOE_CLEANERS',
    rawPath: 'fashion/shoes/shoe-care-accessories/shoe-cleaners',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjcxOTAxNTc3MjE2MQ',
    name: 'Shoe Deodorant',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3ODkwMjYwNTgyNQ',
    },
    path: 'FASHION_SHOES_SHOE_CARE_ACCESSORIES_SHOE_DEODORANT',
    rawPath: 'fashion/shoes/shoe-care-accessories/shoe-deodorant',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjcyNDQwMDU1Mzk4NQ',
    name: 'Shoe Trees',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3ODkwMjYwNTgyNQ',
    },
    path: 'FASHION_SHOES_SHOE_CARE_ACCESSORIES_SHOE_TREES',
    rawPath: 'fashion/shoes/shoe-care-accessories/shoe-trees',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjcyNjU4OTczNDkxMw',
    name: 'Shoe Waterproofing Sprays',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU3ODkwMjYwNTgyNQ',
    },
    path: 'FASHION_SHOES_SHOE_CARE_ACCESSORIES_SHOE_WATERPROOFING_SPRAYS',
    rawPath: 'fashion/shoes/shoe-care-accessories/shoe-waterproofing-sprays',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU1NzQ3Nzc1NjkyOQ',
    name: 'Fashion Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQxMzYyODQ0NDY3Mw',
    },
    path: 'FASHION_FASHION_ACCESSORIES',
    rawPath: 'fashion/fashion-accessories',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc2MTgwMjI1',
    name: 'Small Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU1NzQ3Nzc1NjkyOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_SMALL_ACCESSORIES',
    rawPath: 'fashion/fashion-accessories/small-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc1NTkwNDAx',
    name: 'Suspenders',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc2MTgwMjI1',
    },
    path: 'FASHION_FASHION_ACCESSORIES_SMALL_ACCESSORIES_SUSPENDERS',
    rawPath: 'fashion/fashion-accessories/small-accessories/suspenders',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMzA2MDY3OTU0MDczNw',
    name: 'Lanyards',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc2MTgwMjI1',
    },
    path: 'FASHION_FASHION_ACCESSORIES_SMALL_ACCESSORIES_LANYARDS',
    rawPath: 'fashion/fashion-accessories/small-accessories/lanyards',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU2NDc4MzUyOTk4NQ',
    name: 'Key Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc2MTgwMjI1',
    },
    path: 'FASHION_FASHION_ACCESSORIES_SMALL_ACCESSORIES_KEY_ACCESSORRIES',
    rawPath: 'fashion/fashion-accessories/small-accessories/key-accessorries',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc2NTU3MDU3',
    name: 'Keychains',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU2NDc4MzUyOTk4NQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_SMALL_ACCESSORIES_KEY_ACCESSORRIES_KEYCHAINS',
    rawPath:
      'fashion/fashion-accessories/small-accessories/key-accessorries/keychains',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU2NTE2MDA2NzA3Mw',
    name: 'Keyrings',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU2NDc4MzUyOTk4NQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_SMALL_ACCESSORIES_KEY_ACCESSORRIES_KEYRINGS',
    rawPath:
      'fashion/fashion-accessories/small-accessories/key-accessorries/keyrings',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU2NTcyNDE2ODE5Mw',
    name: 'Patches',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc2MTgwMjI1',
    },
    path: 'FASHION_FASHION_ACCESSORIES_SMALL_ACCESSORIES_PATCHES',
    rawPath: 'fashion/fashion-accessories/small-accessories/patches',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjI2NzE0MzI4ODIwOTQwOQ',
    name: 'Music Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc2MTgwMjI1',
    },
    path: 'FASHION_FASHION_ACCESSORIES_SMALL_ACCESSORIES_MUSIC_ACCESSORIES',
    rawPath: 'fashion/fashion-accessories/small-accessories/music-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6Mjg3ODc3OTYxMzkyMTI4MQ',
    name: 'Hand fans',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc2MTgwMjI1',
    },
    path: 'FASHION_FASHION_ACCESSORIES_SMALL_ACCESSORIES_HAND_FANS',
    rawPath: 'fashion/fashion-accessories/small-accessories/hand-fans',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc0OTUxNDI1',
    name: 'Socks and Slippers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU1NzQ3Nzc1NjkyOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_SOCKS_AND_SLIPPERS',
    rawPath: 'fashion/fashion-accessories/socks-and-slippers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM0MjY5MzY3MDUwMjQwMQ',
    name: 'Socks',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc0OTUxNDI1',
    },
    path: 'FASHION_FASHION_ACCESSORIES_SOCKS_AND_SLIPPERS_SOCKS',
    rawPath: 'fashion/fashion-accessories/socks-and-slippers/socks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTM0MjY5NDI2Mzk2MzY0OQ',
    name: 'Slippers',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc0OTUxNDI1',
    },
    path: 'FASHION_FASHION_ACCESSORIES_SOCKS_AND_SLIPPERS_SLIPPERS',
    rawPath: 'fashion/fashion-accessories/socks-and-slippers/slippers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc2MDY1NTM3',
    name: 'Watches',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU1NzQ3Nzc1NjkyOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_WATCHES',
    rawPath: 'fashion/fashion-accessories/watches',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc1MTk3MTg1',
    name: 'Belts',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU1NzQ3Nzc1NjkyOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_BELTS',
    rawPath: 'fashion/fashion-accessories/belts',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTgxMzQzOTA3MDIwOQ',
    name: 'Hair Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU1NzQ3Nzc1NjkyOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_HAIR_ACCESSORIES',
    rawPath: 'fashion/fashion-accessories/hair-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTgxNTUzMDkzMDE3Nw',
    name: 'Headbands',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMTgxMzQzOTA3MDIwOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_HAIR_ACCESSORIES_HEADBANDS',
    rawPath: 'fashion/fashion-accessories/hair-accessories/headbands',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTgxNjExNzkzNjEyOQ',
    name: 'Hair Ties',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMTgxMzQzOTA3MDIwOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_HAIR_ACCESSORIES_HAIR_TIES',
    rawPath: 'fashion/fashion-accessories/hair-accessories/hair-ties',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTgxNzc4MjcxNDM2OQ',
    name: 'Hair Clips',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMTgxMzQzOTA3MDIwOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_HAIR_ACCESSORIES_HAIR_CLIPS',
    rawPath: 'fashion/fashion-accessories/hair-accessories/hair-clips',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTUxMzgxNDQ1NjA0MTQ3Mw',
    name: 'Scrunchies',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMTgxMzQzOTA3MDIwOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_HAIR_ACCESSORIES_SCRUNCHIES',
    rawPath: 'fashion/fashion-accessories/hair-accessories/scrunchies',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDYxNjQ5OTMxNDY4OQ',
    name: 'Hair Pins',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMTgxMzQzOTA3MDIwOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_HAIR_ACCESSORIES_HAIR_PINS',
    rawPath: 'fashion/fashion-accessories/hair-accessories/hair-pins',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc1NzA1MDg5',
    name: 'Eyewear',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU1NzQ3Nzc1NjkyOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_EYEWEAR',
    rawPath: 'fashion/fashion-accessories/eyewear',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc1ODE5Nzc3',
    name: 'Eyeglasses',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc1NzA1MDg5',
    },
    path: 'FASHION_FASHION_ACCESSORIES_EYEWEAR_EYEGLASSES',
    rawPath: 'fashion/fashion-accessories/eyewear/eyeglasses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc1OTUwODQ5',
    name: 'Sunglasses',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc1NzA1MDg5',
    },
    path: 'FASHION_FASHION_ACCESSORIES_EYEWEAR_SUNGLASSES',
    rawPath: 'fashion/fashion-accessories/eyewear/sunglasses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDYxMzc5NDc5MTQyNQ',
    name: 'Eyewear Cases',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc1NzA1MDg5',
    },
    path: 'FASHION_FASHION_ACCESSORIES_EYEWEAR_EYEWEAR_CASES',
    rawPath: 'fashion/fashion-accessories/eyewear/eyewear-cases',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQyMTI1NzQzNTg3MzI4MQ',
    name: 'Goggles',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTc1NzA1MDg5',
    },
    path: 'FASHION_FASHION_ACCESSORIES_EYEWEAR_GOGGLES',
    rawPath: 'fashion/fashion-accessories/eyewear/goggles',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTgxNDY2NjQ0NDgwMQ',
    name: 'Headwear',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU1NzQ3Nzc1NjkyOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_HEADWEAR',
    rawPath: 'fashion/fashion-accessories/headwear',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTczMTAwMDMz',
    name: 'Caps',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMTgxNDY2NjQ0NDgwMQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_HEADWEAR_CAPS',
    rawPath: 'fashion/fashion-accessories/headwear/caps',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTczMjMxMTA1',
    name: 'Hats',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMTgxNDY2NjQ0NDgwMQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_HEADWEAR_HATS',
    rawPath: 'fashion/fashion-accessories/headwear/hats',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTgyMDI4NzMwMzY4MQ',
    name: 'Beanies',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMTgxNDY2NjQ0NDgwMQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_HEADWEAR_BEANIES',
    rawPath: 'fashion/fashion-accessories/headwear/beanies',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTgyMTczNDc5NzMxMw',
    name: 'Fedoras',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMTgxNDY2NjQ0NDgwMQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_HEADWEAR_FEDORAS',
    rawPath: 'fashion/fashion-accessories/headwear/fedoras',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQyMTI2MjAyMTYyMzgwOQ',
    name: 'Swim Caps',
    parent: {
      id: 'Q2F0ZWdvcnk6MTMwMTgxNDY2NjQ0NDgwMQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_HEADWEAR_SWIM_CAPS',
    rawPath: 'fashion/fashion-accessories/headwear/swim-caps',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTc2MzM4NzE5NTM5Mw',
    name: 'Scarves',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU1NzQ3Nzc1NjkyOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_SCARVES',
    rawPath: 'fashion/fashion-accessories/scarves',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMzA1NjMxNzg5MDU2MQ',
    name: 'Card Holders',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU1NzQ3Nzc1NjkyOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_CARD_HOLDERS',
    rawPath: 'fashion/fashion-accessories/card-holders',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMzA1ODk0MzEzMTY0OQ',
    name: 'Coin Pocket Wallets',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU1NzQ3Nzc1NjkyOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_COIN_POCKET_WALLETS',
    rawPath: 'fashion/fashion-accessories/coin-pocket-wallets',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMzEyODExMDEyMDk2MQ',
    name: 'Wallets',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU1NzQ3Nzc1NjkyOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_WALLETS',
    rawPath: 'fashion/fashion-accessories/wallets',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTczNzIyNjI1',
    name: 'Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQxMzYyODQ0NDY3Mw',
    },
    path: 'FASHION_BAGS',
    rawPath: 'fashion/bags',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTczODM3MzEz',
    name: 'Handbags',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTczNzIyNjI1',
    },
    path: 'FASHION_BAGS_HANDBAGS',
    rawPath: 'fashion/bags/handbags',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTczOTY4Mzg1',
    name: 'Shoulder Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTczNzIyNjI1',
    },
    path: 'FASHION_BAGS_SHOULDERBAGS',
    rawPath: 'fashion/bags/shoulderbags',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc0MDk5NDU3',
    name: 'Backpacks',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTczNzIyNjI1',
    },
    path: 'FASHION_BAGS_BACKPACKS',
    rawPath: 'fashion/bags/backpacks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc0MjE0MTQ1',
    name: 'Laptop Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTczNzIyNjI1',
    },
    path: 'FASHION_BAGS_LAPTOP_BAGS',
    rawPath: 'fashion/bags/laptop-bags',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTc5NTY4NTc0NDY0MQ',
    name: 'Clutches',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTczNzIyNjI1',
    },
    path: 'FASHION_BAGS_CLUTCHES',
    rawPath: 'fashion/bags/clutches',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTgwMzQyMTU0ODU0NQ',
    name: 'Weekend Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTczNzIyNjI1',
    },
    path: 'FASHION_BAGS_WEEKEND_BAGS',
    rawPath: 'fashion/bags/weekend-bags',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTgwNTA2OTc0NjE3Nw',
    name: 'Shopping Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTczNzIyNjI1',
    },
    path: 'FASHION_BAGS_SHOPPING_BAGS',
    rawPath: 'fashion/bags/shopping-bags',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU3Mjg5MzkzNzY2NQ',
    name: 'Cross-Body Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTczNzIyNjI1',
    },
    path: 'FASHION_BAGS_CROSS_BODY_BAGS',
    rawPath: 'fashion/bags/cross-body-bags',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU3NTEzNzkwNjY4OQ',
    name: 'Belt Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTczNzIyNjI1',
    },
    path: 'FASHION_BAGS_BELT_BAGS',
    rawPath: 'fashion/bags/belt-bags',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU3NjEwNjQ0Njg0OQ',
    name: 'Briefcases',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTczNzIyNjI1',
    },
    path: 'FASHION_BAGS_BRIEFCASES',
    rawPath: 'fashion/bags/briefcases',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU3NjY1ODE5NDQzMw',
    name: 'Gym Bags',
    parent: {
      id: 'Q2F0ZWdvcnk6NzA4MjEwMTczNzIyNjI1',
    },
    path: 'FASHION_BAGS_GYM_BAGS',
    rawPath: 'fashion/bags/gym-bags',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU3OTcwNDg2NDc3MQ',
    name: 'Suitcases',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU1NzQ3Nzc1NjkyOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_SUITCASES',
    rawPath: 'fashion/fashion-accessories/suitcases',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU4MjQ3NzU2MTg1Nw',
    name: 'Gloves and Mittens',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU1NzQ3Nzc1NjkyOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_GLOVES_AND_MITTENS',
    rawPath: 'fashion/fashion-accessories/gloves-and-mittens',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MTMwMTc2NDExODM5NjkyOQ',
    name: 'Gloves',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU4MjQ3NzU2MTg1Nw',
    },
    path: 'FASHION_FASHION_ACCESSORIES_GLOVES_AND_MITTENS_GLOVES',
    rawPath: 'fashion/fashion-accessories/gloves-and-mittens/gloves',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDU4MjkyNTI3MTA0MQ',
    name: 'Mittens',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU4MjQ3NzU2MTg1Nw',
    },
    path: 'FASHION_FASHION_ACCESSORIES_GLOVES_AND_MITTENS_MITTENS',
    rawPath: 'fashion/fashion-accessories/gloves-and-mittens/mittens',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDYxODI3MTU3MTk2OQ',
    name: 'Face Masks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU1NzQ3Nzc1NjkyOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_FACE_MASKS',
    rawPath: 'fashion/fashion-accessories/face-masks',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDYxODU1MDgzNzI0OQ',
    name: 'Umbrellas',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU1NzQ3Nzc1NjkyOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_UMBRELLAS',
    rawPath: 'fashion/fashion-accessories/umbrellas',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDYxOTEyMDUwODkyOQ',
    name: 'Suit Accessories',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDU1NzQ3Nzc1NjkyOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_SUIT_ACCESSORIES',
    rawPath: 'fashion/fashion-accessories/suit-accessories',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6NzA4MjEwMTc2NDI1OTg1',
    name: 'Bow Ties',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDYxOTEyMDUwODkyOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_SUIT_ACCESSORIES_BOW_TIES',
    rawPath: 'fashion/fashion-accessories/suit-accessories/bow-ties',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDYxOTUxMzUyODMyMQ',
    name: 'Ties',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDYxOTEyMDUwODkyOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_SUIT_ACCESSORIES_TIES',
    rawPath: 'fashion/fashion-accessories/suit-accessories/ties',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDYxOTgwNzI3NzA1Nw',
    name: 'Cufflinks',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDYxOTEyMDUwODkyOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_SUIT_ACCESSORIES_CUFFLINKS',
    rawPath: 'fashion/fashion-accessories/suit-accessories/cufflinks',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjA4NDYyMTAzNjE5MTc0NQ',
    name: 'Pocket Squares',
    parent: {
      id: 'Q2F0ZWdvcnk6MjA4NDYxOTEyMDUwODkyOQ',
    },
    path: 'FASHION_FASHION_ACCESSORIES_SUIT_ACCESSORIES_POCKET_SQUARES',
    rawPath: 'fashion/fashion-accessories/suit-accessories/pocket-squares',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    name: "Women's Fashion",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQxMzYyODQ0NDY3Mw',
    },
    path: 'FASHION_WOMENS_FASHION',
    rawPath: 'fashion/womens-fashion',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQzMzQxMzA1ODU2MQ',
    name: "Women's Tops",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_TOPS',
    rawPath: 'fashion/womens-fashion/womens-tops',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM0NDQ4NzE2NTk1Mw',
    name: "Women's T-shirts",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQzMzQxMzA1ODU2MQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_TOPS_WOMENS_T_SHIRTS',
    rawPath: 'fashion/womens-fashion/womens-tops/womens-t-shirts',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM0NTQ1NzU1NzUwNQ',
    name: "Women's Blouses",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQzMzQxMzA1ODU2MQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_TOPS_WOMENS_BLOUSES',
    rawPath: 'fashion/womens-fashion/womens-tops/womens-blouses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM0NjQwOTc0NjQzMw',
    name: "Women's Tunics",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQzMzQxMzA1ODU2MQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_TOPS_WOMENS_TUNICS',
    rawPath: 'fashion/womens-fashion/womens-tops/womens-tunics',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM1MjQxOTA4NjMzOA',
    name: "Women's Polos",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQzMzQxMzA1ODU2MQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_TOPS_WOMENS_POLOS',
    rawPath: 'fashion/womens-fashion/womens-tops/womens-polos',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM1MzM4Mzc5MjY0MQ',
    name: "Women's Tank Tops",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQzMzQxMzA1ODU2MQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_TOPS_WOMENS_TANK_TOPS',
    rawPath: 'fashion/womens-fashion/womens-tops/womens-tank-tops',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM1NDE4MTQ4MDQ0OQ',
    name: "Women's Crop Tops",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQzMzQxMzA1ODU2MQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_TOPS_WOMENS_CROP_TOPS',
    rawPath: 'fashion/womens-fashion/womens-tops/womens-crop-tops',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM1NTAwMzUxNDg4MQ',
    name: "Women's Camisoles",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQzMzQxMzA1ODU2MQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_TOPS_WOMENS_CAMISOLES',
    rawPath: 'fashion/womens-fashion/womens-tops/womens-camisoles',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM1NTgzMjUyODg5OA',
    name: "Women's Bodysuits",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQzMzQxMzA1ODU2MQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_TOPS_WOMENS_BODYSUITS',
    rawPath: 'fashion/womens-fashion/womens-tops/womens-bodysuits',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQzNTA1MTczNzA4OQ',
    name: "Women's Hoodies",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_HOODIES',
    rawPath: 'fashion/womens-fashion/womens-hoodies',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQzODYzMTM0NjE3Nw',
    name: "Women's Sweaters",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_SWEATERS',
    rawPath: 'fashion/womens-fashion/womens-sweaters',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQ0MjcyMTEzNjY0MQ',
    name: "Women's Cardigans",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_CARDIGANS',
    rawPath: 'fashion/womens-fashion/womens-cardigans',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQ0NDgwNzYzOTA0MQ',
    name: "Women's Outerwear",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_OUTERWEAR',
    rawPath: 'fashion/womens-fashion/womens-outerwear',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM3NTg3OTc5NDY4OQ',
    name: "Women's Jackets",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ0NDgwNzYzOTA0MQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_OUTERWEAR_WOMENS_JACKETS',
    rawPath: 'fashion/womens-fashion/womens-outerwear/womens-jackets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM4MDMyNzMyOTc5Mw',
    name: "Women's Parkas",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ0NDgwNzYzOTA0MQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_OUTERWEAR_WOMENS_PARKAS',
    rawPath: 'fashion/womens-fashion/womens-outerwear/womens-parkas',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM4MTQzNzExNjQxNw',
    name: "Women's Puffers",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ0NDgwNzYzOTA0MQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_OUTERWEAR_WOMENS_PUFFERS',
    rawPath: 'fashion/womens-fashion/womens-outerwear/womens-puffers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM4MjQzNjk2NjQwMQ',
    name: "Women's Coats",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ0NDgwNzYzOTA0MQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_OUTERWEAR_WOMENS_COATS',
    rawPath: 'fashion/womens-fashion/womens-outerwear/womens-coats',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM4MzQ1OTE0Nzc3Nw',
    name: "Women's Raincoats",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ0NDgwNzYzOTA0MQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_OUTERWEAR_WOMENS_RAINCOATS',
    rawPath: 'fashion/womens-fashion/womens-outerwear/womens-raincoats',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM4NDg1NDE2MzQ1Nw',
    name: "Women's Trench Coats",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ0NDgwNzYzOTA0MQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_OUTERWEAR_WOMENS_TRENCH_COATS',
    rawPath: 'fashion/womens-fashion/womens-outerwear/womens-trench-coats',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM4NjA3NjgzNTg0Mg',
    name: "Women's Windbreakers",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ0NDgwNzYzOTA0MQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_OUTERWEAR_WOMENS_WINDBREAKERS',
    rawPath: 'fashion/womens-fashion/womens-outerwear/womens-windbreakers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQ0NjcwOTcyMzEzNw',
    name: "Women's Blazers",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_BLAZERS',
    rawPath: 'fashion/womens-fashion/womens-blazers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQ0NzYyOTQwNjIxMA',
    name: "Women's Dresses",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_DRESSES',
    rawPath: 'fashion/womens-fashion/womens-dresses',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQ2MjAyMTc4MzU1Mw',
    name: "Women's Suits",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_SUITS',
    rawPath: 'fashion/womens-fashion/womens-suits',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQ2NDU0OTQ5MDY5MA',
    name: "Women's Jumpsuits",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_JUMPSUITS',
    rawPath: 'fashion/womens-fashion/womens-jumpsuits',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQ2NTk4Mjc2MzAwOQ',
    name: "Women's Playsuits",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_PLAYSUITS',
    rawPath: 'fashion/womens-fashion/womens-playsuits',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQ2NzI2MDIzOTg3Mw',
    name: "Women's Overalls",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_OVERALLS',
    rawPath: 'fashion/womens-fashion/womens-overalls',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQ2ODY1NzE1NjA5Nw',
    name: "Women's Skirts",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_SKIRTS',
    rawPath: 'fashion/womens-fashion/womens-skirts',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQ2OTUwNTA5MzYzMw',
    name: "Women's Pants",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_PANTS',
    rawPath: 'fashion/womens-fashion/womens-pants',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQ3MTc1ODUzMjYwOQ',
    name: "Women's Jeans",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_JEANS',
    rawPath: 'fashion/womens-fashion/womens-jeans',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQ3MzEzMzM2MzIwMQ',
    name: "Women's Shorts",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_SHORTS',
    rawPath: 'fashion/womens-fashion/womens-shorts',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQ3NTQ4MjY0ODU3Nw',
    name: "Women's Swimwear",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_SWIMWEAR',
    rawPath: 'fashion/womens-fashion/womens-swimwear',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM4OTA1MDM2ODAwMQ',
    name: "Women's Bikinis",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ3NTQ4MjY0ODU3Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_SWIMWEAR_WOMENS_BIKINIS',
    rawPath: 'fashion/womens-fashion/womens-swimwear/womens-bikinis',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM5MDY2MzE1OTgwOQ',
    name: "Women's One-Piece Swimsuits",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ3NTQ4MjY0ODU3Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_SWIMWEAR_WOMENS_ONE_PIECE_SWIMSUITS',
    rawPath:
      'fashion/womens-fashion/womens-swimwear/womens-one-piece-swimsuits',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM5MTUyOTU2MjExMw',
    name: "Women's Swim Bottoms",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ3NTQ4MjY0ODU3Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_SWIMWEAR_WOMENS_SWIM_BOTTOMS',
    rawPath: 'fashion/womens-fashion/womens-swimwear/womens-swim-bottoms',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM5MjMxMjQzODc4NQ',
    name: "Women's Swim Tops",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ3NTQ4MjY0ODU3Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_SWIMWEAR_WOMENS_SWIM_TOPS',
    rawPath: 'fashion/womens-fashion/womens-swimwear/womens-swim-tops',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM5Mzc4MDgzODQwMQ',
    name: "Women's Beach Cover Ups",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ3NTQ4MjY0ODU3Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_SWIMWEAR_WOMENS_BEACH_COVER_UPS',
    rawPath: 'fashion/womens-fashion/womens-swimwear/womens-beach-cover-ups',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQ3Njg0MTgzMjQ0OQ',
    name: "Women's Activewear",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_ACTIVEWEAR',
    rawPath: 'fashion/womens-fashion/womens-activewear',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM5NTIwOTU3MjM1Mw',
    name: "Women's Activewear Sets",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ3Njg0MTgzMjQ0OQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_ACTIVEWEAR_WOMENS_ACTIVEWEAR_SETS',
    rawPath: 'fashion/womens-fashion/womens-activewear/womens-activewear-sets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM5NjczMTU5NjgwMQ',
    name: "Women's Athletic Dresses",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ3Njg0MTgzMjQ0OQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_ACTIVEWEAR_WOMENS_ATHLETIC_DRESSES',
    rawPath: 'fashion/womens-fashion/womens-activewear/womens-athletic-dresses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjM5NzY0ODU5Mjg5Nw',
    name: "Women's Athletic Jackets",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ3Njg0MTgzMjQ0OQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_ACTIVEWEAR_WOMENS_ATHLETIC_JACKETS',
    rawPath: 'fashion/womens-fashion/womens-activewear/womens-athletic-jackets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQwMDI3NjczMzk1Mw',
    name: "Women's Athletic Pants",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ3Njg0MTgzMjQ0OQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_ACTIVEWEAR_WOMENS_ATHLETIC_PANTS',
    rawPath: 'fashion/womens-fashion/womens-activewear/womens-athletic-pants',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQwMTA0MDcxOTg3Mw',
    name: "Women's Athletic Shorts",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ3Njg0MTgzMjQ0OQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_ACTIVEWEAR_WOMENS_ATHLETIC_SHORTS',
    rawPath: 'fashion/womens-fashion/womens-activewear/womens-athletic-shorts',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQwMTc3NzAxNjgzMw',
    name: "Women's Athletic Skirts",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ3Njg0MTgzMjQ0OQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_ACTIVEWEAR_WOMENS_ATHLETIC_SKIRTS',
    rawPath: 'fashion/womens-fashion/womens-activewear/womens-athletic-skirts',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQwMjU3ODE3ODA0OQ',
    name: "Women's Athletic Tops",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ3Njg0MTgzMjQ0OQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_ACTIVEWEAR_WOMENS_ATHLETIC_TOPS',
    rawPath: 'fashion/womens-fashion/womens-activewear/womens-athletic-tops',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQwNTQ4OTg0NDIyNQ',
    name: "Women's Yoga Wraps",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ3Njg0MTgzMjQ0OQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_ACTIVEWEAR_WOMENS_YOGA_WRAPS',
    rawPath: 'fashion/womens-fashion/womens-activewear/womens-yoga-wraps',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQwODczOTgyMzYxNw',
    name: "Women's Unitards",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ3Njg0MTgzMjQ0OQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_ACTIVEWEAR_WOMENS_UNITARDS',
    rawPath: 'fashion/womens-fashion/womens-activewear/womens-unitards',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQwOTgzNjY2Njg4MQ',
    name: "Women's Ski Wear",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ3Njg0MTgzMjQ0OQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_ACTIVEWEAR_WOMENS_SKI_WEAR',
    rawPath: 'fashion/womens-fashion/womens-activewear/womens-ski-wear',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQxMTAyMTI5NTYxNw',
    name: "Women's Ski Suits",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjQwOTgzNjY2Njg4MQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_ACTIVEWEAR_WOMENS_SKI_WEAR_WOMENS_SKI_SUITS',
    rawPath:
      'fashion/womens-fashion/womens-activewear/womens-ski-wear/womens-ski-suits',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQxMjY0NTc1MjgzMw',
    name: "Women's Ski Jackets",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjQwOTgzNjY2Njg4MQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_ACTIVEWEAR_WOMENS_SKI_WEAR_WOMENS_SKI_JACKETS',
    rawPath:
      'fashion/womens-fashion/womens-activewear/womens-ski-wear/womens-ski-jackets',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQxMzY5MTEwMTE4NQ',
    name: "Women's Ski Pants",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjQwOTgzNjY2Njg4MQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_ACTIVEWEAR_WOMENS_SKI_WEAR_WOMENS_SKI_PANTS',
    rawPath:
      'fashion/womens-fashion/womens-activewear/womens-ski-wear/womens-ski-pants',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQxNDYzNDU0MTA1Nw',
    name: "Women's Ski Tops",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjQwOTgzNjY2Njg4MQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_ACTIVEWEAR_WOMENS_SKI_WEAR_WOMENS_SKI_TOPS',
    rawPath:
      'fashion/womens-fashion/womens-activewear/womens-ski-wear/womens-ski-tops',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQxNzQ0NDQ0NjIwOQ',
    name: "Women's Sports Bras",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ3Njg0MTgzMjQ0OQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_ACTIVEWEAR_WOMENS_SPORTS_BRAS',
    rawPath: 'fashion/womens-fashion/womens-activewear/womens-sports-bras',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQ3ODQxNTg3NjA5Nw',
    name: "Women's Pajamas",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_PYJAMAS',
    rawPath: 'fashion/womens-fashion/womens-pyjamas',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ2MTM5NDc3MTk2OQ',
    name: "Women's Pajama Sets",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ3ODQxNTg3NjA5Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_PYJAMAS_WOMENS_PAJAMA_SETS',
    rawPath: 'fashion/womens-fashion/womens-pyjamas/womens-pajama-sets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ2MzE5OTE1ODI3Mw',
    name: "Women's Pajama Tops",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ3ODQxNTg3NjA5Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_PYJAMAS_WOMENS_PAJAMA_TOPS',
    rawPath: 'fashion/womens-fashion/womens-pyjamas/womens-pajama-tops',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ2NDE1Mzk4NTAyNQ',
    name: "Women's Pajama Bottoms",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ3ODQxNTg3NjA5Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_PYJAMAS_WOMENS_PAJAMA_BOTTOMS',
    rawPath: 'fashion/womens-fashion/womens-pyjamas/womens-pajama-bottoms',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ2NjA5NTg4MjI0MQ',
    name: "Women's Nightgowns",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ3ODQxNTg3NjA5Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_PYJAMAS_WOMENS_NIGHTGOWNS',
    rawPath: 'fashion/womens-fashion/womens-pyjamas/womens-nightgowns',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQ4MDQyODA0NDI4OQ',
    name: 'Maternity Fashion',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION',
    rawPath: 'fashion/womens-fashion/maternity-fashion',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQxODY3ODQ3MjcwNQ',
    name: 'Maternity Hoodies',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MDQyODA0NDI4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION_MATERNITY_HOODIES',
    rawPath: 'fashion/womens-fashion/maternity-fashion/maternity-hoodies',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQxOTUzNDM4OTI0OQ',
    name: 'Maternity Tops',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MDQyODA0NDI4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION_MATERNITY_TOPS',
    rawPath: 'fashion/womens-fashion/maternity-fashion/maternity-tops',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQyMTkwODg0MDQ0OQ',
    name: 'Maternity Sweaters',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MDQyODA0NDI4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION_MATERNITY_SWEATERS',
    rawPath: 'fashion/womens-fashion/maternity-fashion/maternity-sweaters',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQyMjgxOTI1MDE3Nw',
    name: 'Maternity Pants',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MDQyODA0NDI4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION_MATERNITY_PANTS',
    rawPath: 'fashion/womens-fashion/maternity-fashion/maternity-pants',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQzNzk0NjE3MTM5Mw',
    name: 'Maternity Jeans',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MDQyODA0NDI4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION_MATERNITY_JEANS',
    rawPath: 'fashion/womens-fashion/maternity-fashion/maternity-jeans',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQzOTAwODIzMTQyNQ',
    name: 'Maternity Shorts',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MDQyODA0NDI4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION_MATERNITY_SHORTS',
    rawPath: 'fashion/womens-fashion/maternity-fashion/maternity-shorts',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQzOTk2ODI2ODI4OQ',
    name: 'Maternity Skirts',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MDQyODA0NDI4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION_MATERNITY_SKIRTS',
    rawPath: 'fashion/womens-fashion/maternity-fashion/maternity-skirts',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ0MDkzNzkyMjU2MQ',
    name: 'Maternity Leggings',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MDQyODA0NDI4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION_MATERNITY_LEGGINGS',
    rawPath: 'fashion/womens-fashion/maternity-fashion/maternity-leggings',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ0MjA5OTMwMjQwMQ',
    name: 'Maternity Lounge Sets',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MDQyODA0NDI4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION_MATERNITY_LOUNGE_SETS',
    rawPath: 'fashion/womens-fashion/maternity-fashion/maternity-lounge-sets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ0Mjk0NjEyNTgyNQ',
    name: 'Maternity Dresses',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MDQyODA0NDI4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION_MATERNITY_DRESSES',
    rawPath: 'fashion/womens-fashion/maternity-fashion/maternity-dresses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ0NzMzMjI3MDA4MQ',
    name: 'Maternity Outerwear',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MDQyODA0NDI4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION_MATERNITY_OUTERWEAR',
    rawPath: 'fashion/womens-fashion/maternity-fashion/maternity-outerwear',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ0ODkwNzkzNTc0NQ',
    name: 'Maternity Underwear',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MDQyODA0NDI4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION_MATERNITY_UNDERWEAR',
    rawPath: 'fashion/womens-fashion/maternity-fashion/maternity-underwear',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ0OTY3NTU5MTY4MQ',
    name: 'Maternity Tights',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MDQyODA0NDI4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION_MATERNITY_TIGHTS',
    rawPath: 'fashion/womens-fashion/maternity-fashion/maternity-tights',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ1MTAyNTg2MjY1Nw',
    name: 'Maternity Swimwear',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MDQyODA0NDI4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION_MATERNITY_SWIMWEAR',
    rawPath: 'fashion/womens-fashion/maternity-fashion/maternity-swimwear',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ1MjMyMTA2NzAwOQ',
    name: 'Maternity Bikinis',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjQ1MTAyNTg2MjY1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION_MATERNITY_SWIMWEAR_MATERNITY_BIKINIS',
    rawPath:
      'fashion/womens-fashion/maternity-fashion/maternity-swimwear/maternity-bikinis',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ1NDE4MjEwOTE4NQ',
    name: 'Maternity One-Piece Swimsuits',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjQ1MTAyNTg2MjY1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION_MATERNITY_SWIMWEAR_MATERNITY_ONE_PIECE_SWIMSUITS',
    rawPath:
      'fashion/womens-fashion/maternity-fashion/maternity-swimwear/maternity-one-piece-swimsuits',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ1NTYyMTYyMzgwOQ',
    name: 'Nursing Tops',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MDQyODA0NDI4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION_NURSING_TOPS',
    rawPath: 'fashion/womens-fashion/maternity-fashion/nursing-tops',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ1NjUzMzczNzQ3Mw',
    name: 'Nursing Dresses',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MDQyODA0NDI4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION_NURSING_DRESSES',
    rawPath: 'fashion/womens-fashion/maternity-fashion/nursing-dresses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ1NzkzMzk3OTY0OQ',
    name: 'Nursing Covers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MDQyODA0NDI4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION_NURSING_COVERS',
    rawPath: 'fashion/womens-fashion/maternity-fashion/nursing-covers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ1OTM4NjAxMTY0OQ',
    name: 'Nursing Bras',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MDQyODA0NDI4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION_NURSING_BRAS',
    rawPath: 'fashion/womens-fashion/maternity-fashion/nursing-bras',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ2MDMyODA3NTI2NQ',
    name: 'Nursing Pads',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MDQyODA0NDI4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_MATERNITY_FASHION_NURSING_PADS',
    rawPath: 'fashion/womens-fashion/maternity-fashion/nursing-pads',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQ4MTQ2NzYwOTA4OQ',
    name: "Women's Loungewear",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_LOUNGEWEAR',
    rawPath: 'fashion/womens-fashion/womens-loungewear',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ2NzEwMjc3NzM0NQ',
    name: "Women's Onesies",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MTQ2NzYwOTA4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_LOUNGEWEAR_WOMENS_ONESIES',
    rawPath: 'fashion/womens-fashion/womens-loungewear/womens-onesies',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ2ODA2OTY3OTEwNQ',
    name: "Women's Lounge Sets",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MTQ2NzYwOTA4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_LOUNGEWEAR_WOMENS_LOUNGE_SETS',
    rawPath: 'fashion/womens-fashion/womens-loungewear/womens-lounge-sets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ2OTU1NjMxNDExMw',
    name: "Women's Lounge Tops",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MTQ2NzYwOTA4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_LOUNGEWEAR_WOMENS_LOUNGE_TOPS',
    rawPath: 'fashion/womens-fashion/womens-loungewear/womens-lounge-tops',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ3MDI0MjQ5MjQxNw',
    name: "Women's Lounge Bottoms",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MTQ2NzYwOTA4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_LOUNGEWEAR_WOMENS_LOUNGE_BOTTOMS',
    rawPath: 'fashion/womens-fashion/womens-loungewear/womens-lounge-bottoms',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ3MTc1MjQ5MTAwOQ',
    name: "Women's Kimonos",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MTQ2NzYwOTA4OQ',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_LOUNGEWEAR_WOMENS_KIMONOS',
    rawPath: 'fashion/womens-fashion/womens-loungewear/womens-kimonos',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQ4MjIzOTE0ODAzNA',
    name: "Women's Intimates",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyMjQ4Njg4MDI1Nw',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_INTIMATES',
    rawPath: 'fashion/womens-fashion/womens-intimates',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ3MzE4MDg0ODEyOQ',
    name: 'Lingerie Bodysuits',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MjIzOTE0ODAzNA',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_INTIMATES_LINGERIE_BODYSUITS',
    rawPath: 'fashion/womens-fashion/womens-intimates/lingerie-bodysuits',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ3NDE5ODgwMjQzMw',
    name: 'Lingerie Bottoms',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MjIzOTE0ODAzNA',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_INTIMATES_LINGERIE_BOTTOMS',
    rawPath: 'fashion/womens-fashion/womens-intimates/lingerie-bottoms',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ3NTMzNzU4ODczNw',
    name: 'Lingerie Tops',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MjIzOTE0ODAzNA',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_INTIMATES_LINGERIE_TOPS',
    rawPath: 'fashion/womens-fashion/womens-intimates/lingerie-tops',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ3Nzc1MTQyNzA3Mw',
    name: 'Lingerie Rompers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MjIzOTE0ODAzNA',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_INTIMATES_LINGERIE_ROMPERS',
    rawPath: 'fashion/womens-fashion/womens-intimates/lingerie-rompers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ3OTIyMDAzOTY4MQ',
    name: 'Bras',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MjIzOTE0ODAzNA',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_INTIMATES_BRAS',
    rawPath: 'fashion/womens-fashion/womens-intimates/bras',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ4MjkyMzc0MTE4NQ',
    name: 'Bralettes',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MjIzOTE0ODAzNA',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_INTIMATES_BRALETTES',
    rawPath: 'fashion/womens-fashion/womens-intimates/bralettes',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ4MzcwODE1Nzk1Mw',
    name: 'Bustiers',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MjIzOTE0ODAzNA',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_INTIMATES_BUSTIERS',
    rawPath: 'fashion/womens-fashion/womens-intimates/bustiers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ4NDUzNjM1Mjc2OQ',
    name: 'Corsets',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MjIzOTE0ODAzNA',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_INTIMATES_CORSETS',
    rawPath: 'fashion/womens-fashion/womens-intimates/corsets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ4NTI0NjQ1MTcxMw',
    name: 'Period Underwear',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MjIzOTE0ODAzNA',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_INTIMATES_PERIOD_UNDERWEAR',
    rawPath: 'fashion/womens-fashion/womens-intimates/period-underwear',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ4NTk4NTAwOTY2NQ',
    name: 'Nipple Pasties',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MjIzOTE0ODAzNA',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_INTIMATES_NIPPLE_PASTIES',
    rawPath: 'fashion/womens-fashion/womens-intimates/nipple-pasties',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ4NzEyMTYxNjg5Nw',
    name: 'Garter Belts',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MjIzOTE0ODAzNA',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_INTIMATES_GARTER_BELTS',
    rawPath: 'fashion/womens-fashion/womens-intimates/garter-belts',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ4ODU4NDM2NDAzMw',
    name: 'Fashion & Breast Tape',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MjIzOTE0ODAzNA',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_INTIMATES_FASHION_BREAST_TAPE',
    rawPath: 'fashion/womens-fashion/womens-intimates/fashion-breast-tape',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ5MzQzMjk3OTQ1Nw',
    name: 'Slip Dresses',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MjIzOTE0ODAzNA',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_INTIMATES_SLIP_DRESSES',
    rawPath: 'fashion/womens-fashion/womens-intimates/slip-dresses',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjQ5ODk1MTYzNDk0NQ',
    name: 'Shapewear',
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQ4MjIzOTE0ODAzNA',
    },
    path: 'FASHION_WOMENS_FASHION_WOMENS_INTIMATES_SHAPEWEAR',
    rawPath: 'fashion/womens-fashion/womens-intimates/shapewear',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTQyNDE5MjA5NDIwOQ',
    name: "Men's Fashion",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQxMzYyODQ0NDY3Mw',
    },
    path: 'FASHION_MENS_FASHION',
    rawPath: 'fashion/mens-fashion',
    depth: 1,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTcwMzg2OTQxNTQyNQ',
    name: "Men's Shirts",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyNDE5MjA5NDIwOQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_SHIRTS',
    rawPath: 'fashion/mens-fashion/mens-shirts',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjUwMDcyNzY3NjkyOQ',
    name: "Men's Casual Shirts",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTcwMzg2OTQxNTQyNQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_SHIRTS_MENS_CASUAL_SHIRTS',
    rawPath: 'fashion/mens-fashion/mens-shirts/mens-casual-shirts',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjUwNzA3NzczODQ5Nw',
    name: "Men's Dress Shirts",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTcwMzg2OTQxNTQyNQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_SHIRTS_MENS_DRESS_SHIRTS',
    rawPath: 'fashion/mens-fashion/mens-shirts/mens-dress-shirts',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjUwODA3NjM0MzI5Nw',
    name: "Men's Tuxedo Shirts",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTcwMzg2OTQxNTQyNQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_SHIRTS_MENS_TUXEDO_SHIRTS',
    rawPath: 'fashion/mens-fashion/mens-shirts/mens-tuxedo-shirts',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTcwODc3NjE2MTI4MQ',
    name: "Men's Polos",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyNDE5MjA5NDIwOQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_POLOS',
    rawPath: 'fashion/mens-fashion/mens-polos',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTcxMzk5MjMwMjU5Mw',
    name: "Men's Tank Tops",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyNDE5MjA5NDIwOQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_TANK_TOPS',
    rawPath: 'fashion/mens-fashion/mens-tank-tops',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTcxNTM1NzQ1MDI0MQ',
    name: "Men's T-Shirts",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyNDE5MjA5NDIwOQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_T_SHIRTS',
    rawPath: 'fashion/mens-fashion/mens-t-shirts',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTcyMzY3NDgwNDIyNQ',
    name: "Men's Blazers",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyNDE5MjA5NDIwOQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_BLAZERS',
    rawPath: 'fashion/mens-fashion/mens-blazers',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTcyODQwNjUzNjE5Mw',
    name: "Men's Outerwear",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyNDE5MjA5NDIwOQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_OUTERWEAR',
    rawPath: 'fashion/mens-fashion/mens-outerwear',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjUxMTI5NDAyOTgyNQ',
    name: "Men's Jackets",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTcyODQwNjUzNjE5Mw',
    },
    path: 'FASHION_MENS_FASHION_MENS_OUTERWEAR_MENS_JACKETS',
    rawPath: 'fashion/mens-fashion/mens-outerwear/mens-jackets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjUxMjMyNjY4MDU3Nw',
    name: "Men's Parkas",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTcyODQwNjUzNjE5Mw',
    },
    path: 'FASHION_MENS_FASHION_MENS_OUTERWEAR_MENS_PARKAS',
    rawPath: 'fashion/mens-fashion/mens-outerwear/mens-parkas',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjUxNjM5OTYxMTkwNQ',
    name: "Men's Puffers",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTcyODQwNjUzNjE5Mw',
    },
    path: 'FASHION_MENS_FASHION_MENS_OUTERWEAR_MENS_PUFFERS',
    rawPath: 'fashion/mens-fashion/mens-outerwear/mens-puffers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjUyNjAzMTY5OTk2OQ',
    name: "Men's Coats",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTcyODQwNjUzNjE5Mw',
    },
    path: 'FASHION_MENS_FASHION_MENS_OUTERWEAR_MENS_COATS',
    rawPath: 'fashion/mens-fashion/mens-outerwear/mens-coats',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjUyODUyMjQ3NzU2OQ',
    name: "Men's Raincoats",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTcyODQwNjUzNjE5Mw',
    },
    path: 'FASHION_MENS_FASHION_MENS_OUTERWEAR_MENS_RAINCOATS',
    rawPath: 'fashion/mens-fashion/mens-outerwear/mens-raincoats',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjUyOTQ4MzkwNzA3Mw',
    name: "Men's Trench Coats",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTcyODQwNjUzNjE5Mw',
    },
    path: 'FASHION_MENS_FASHION_MENS_OUTERWEAR_MENS_TRENCH_COATS',
    rawPath: 'fashion/mens-fashion/mens-outerwear/mens-trench-coats',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjUzMDY3ODEyMDQ0OQ',
    name: "Men's Windbreakers",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTcyODQwNjUzNjE5Mw',
    },
    path: 'FASHION_MENS_FASHION_MENS_OUTERWEAR_MENS_WINDBREAKERS',
    rawPath: 'fashion/mens-fashion/mens-outerwear/mens-windbreakers',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjUzMTYyNTUyNTI0OQ',
    name: "Men's Vests",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTcyODQwNjUzNjE5Mw',
    },
    path: 'FASHION_MENS_FASHION_MENS_OUTERWEAR_MENS_VESTS',
    rawPath: 'fashion/mens-fashion/mens-outerwear/mens-vests',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTczMTc5NzcxMjg5Nw',
    name: "Men's Hoodies",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyNDE5MjA5NDIwOQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_HOODIES',
    rawPath: 'fashion/mens-fashion/mens-hoodies',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTczMzc2NDc1OTU1Mw',
    name: "Men's Sweaters",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyNDE5MjA5NDIwOQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_SWEATERS',
    rawPath: 'fashion/mens-fashion/mens-sweaters',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTczNDk2NDI0ODU3Nw',
    name: "Men's Cardigans",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyNDE5MjA5NDIwOQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_CARDIGANS',
    rawPath: 'fashion/mens-fashion/mens-cardigans',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTczNjI4Nzc0ODA5Nw',
    name: "Men's Suits",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyNDE5MjA5NDIwOQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_SUITS',
    rawPath: 'fashion/mens-fashion/mens-suits',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTczNzE2NzI1NzYwMQ',
    name: "Men's Tuxedos",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyNDE5MjA5NDIwOQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_TUXEDOS',
    rawPath: 'fashion/mens-fashion/mens-tuxedos',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTczODE3MzE2OTY2NQ',
    name: "Men's Jeans",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyNDE5MjA5NDIwOQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_JEANS',
    rawPath: 'fashion/mens-fashion/mens-jeans',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTczOTAzNDAwMTQwOQ',
    name: "Men's Pants",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyNDE5MjA5NDIwOQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_PANTS',
    rawPath: 'fashion/mens-fashion/mens-pants',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTc0MDY4NzM2MDAwMQ',
    name: "Men's Shorts",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyNDE5MjA5NDIwOQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_SHORTS',
    rawPath: 'fashion/mens-fashion/mens-shorts',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTc0MTcwMjQxNDMzNw',
    name: "Men's Swimwear",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyNDE5MjA5NDIwOQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_SWIMWEAR',
    rawPath: 'fashion/mens-fashion/mens-swimwear',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTc0MjYxMTA4NzM2MQ',
    name: "Men's Underwear",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyNDE5MjA5NDIwOQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_UNDERWEAR',
    rawPath: 'fashion/mens-fashion/mens-underwear',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjUwOTEzOTg2MTUwNQ',
    name: "Men's Undershirts",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTc0MjYxMTA4NzM2MQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_UNDERWEAR_MENS_UNDERSHIRTS',
    rawPath: 'fashion/mens-fashion/mens-underwear/mens-undershirts',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjUzNDA0MjA1MDU2MQ',
    name: "Men's Briefs",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTc0MjYxMTA4NzM2MQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_UNDERWEAR_MENS_BRIEFS',
    rawPath: 'fashion/mens-fashion/mens-underwear/mens-briefs',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTc0NDc0NzAwMzkwNQ',
    name: "Men's Pyjamas",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyNDE5MjA5NDIwOQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_PYJAMAS',
    rawPath: 'fashion/mens-fashion/mens-pyjamas',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjUzNzM3MDc4Nzg0MQ',
    name: "Men's Pajama Sets",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTc0NDc0NzAwMzkwNQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_PYJAMAS_MENS_PAJAMA_SETS',
    rawPath: 'fashion/mens-fashion/mens-pyjamas/mens-pajama-sets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU0Mjk1MjA3OTM2MQ',
    name: "Men's Pyjama Bottoms",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTc0NDc0NzAwMzkwNQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_PYJAMAS_MENS_PYJAMA_BOTTOMS',
    rawPath: 'fashion/mens-fashion/mens-pyjamas/mens-pyjama-bottoms',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU0MzczMTU4MDkyOQ',
    name: "Men's Pyjama Tops",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTc0NDc0NzAwMzkwNQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_PYJAMAS_MENS_PYJAMA_TOPS',
    rawPath: 'fashion/mens-fashion/mens-pyjamas/mens-pyjama-tops',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTc0NTYzNDgyMDA5Nw',
    name: "Men's Loungewear",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyNDE5MjA5NDIwOQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_LOUNGEWEAR',
    rawPath: 'fashion/mens-fashion/mens-loungewear',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU0NTg3NjcyMTY2NQ',
    name: "Men's Onesies",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTc0NTYzNDgyMDA5Nw',
    },
    path: 'FASHION_MENS_FASHION_MENS_LOUNGEWEAR_MENS_ONESIES',
    rawPath: 'fashion/mens-fashion/mens-loungewear/mens-onesies',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU0Njc0MDY4Mjc1Mw',
    name: "Men's Lounge Sets",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTc0NTYzNDgyMDA5Nw',
    },
    path: 'FASHION_MENS_FASHION_MENS_LOUNGEWEAR_MENS_LOUNGE_SETS',
    rawPath: 'fashion/mens-fashion/mens-loungewear/mens-lounge-sets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU0NzYwMjYyODYwOQ',
    name: "Men's Lounge Bottoms",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTc0NTYzNDgyMDA5Nw',
    },
    path: 'FASHION_MENS_FASHION_MENS_LOUNGEWEAR_MENS_LOUNGE_BOTTOMS',
    rawPath: 'fashion/mens-fashion/mens-loungewear/mens-lounge-bottoms',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU0ODM4MDM5MzQ3Mw',
    name: "Men's Lounge Tops",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTc0NTYzNDgyMDA5Nw',
    },
    path: 'FASHION_MENS_FASHION_MENS_LOUNGEWEAR_MENS_LOUNGE_TOPS',
    rawPath: 'fashion/mens-fashion/mens-loungewear/mens-lounge-tops',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ0NTc0NjgxMDQzNzYzMw',
    name: "Men's Activewear",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTQyNDE5MjA5NDIwOQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_ACTIVEWEAR',
    rawPath: 'fashion/mens-fashion/mens-activewear',
    depth: 2,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU1MDAzMDQwOTcyOQ',
    name: "Men's Activewear Sets",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTc0NjgxMDQzNzYzMw',
    },
    path: 'FASHION_MENS_FASHION_MENS_ACTIVEWEAR_MENS_ACTIVEWEAR_SETS',
    rawPath: 'fashion/mens-fashion/mens-activewear/mens-activewear-sets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU1NTUxNjY5MDQzMw',
    name: "Men's Athletic Jackets",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTc0NjgxMDQzNzYzMw',
    },
    path: 'FASHION_MENS_FASHION_MENS_ACTIVEWEAR_MENS_ATHLETIC_JACKETS',
    rawPath: 'fashion/mens-fashion/mens-activewear/mens-athletic-jackets',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU1Nzg1MTk2NzQ4OQ',
    name: "Men's Athletic Tops",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTc0NjgxMDQzNzYzMw',
    },
    path: 'FASHION_MENS_FASHION_MENS_ACTIVEWEAR_MENS_ATHLETIC_TOPS',
    rawPath: 'fashion/mens-fashion/mens-activewear/mens-athletic-tops',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU1ODY5Nzc5MTQ4OQ',
    name: "Men's Athletic Shorts",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTc0NjgxMDQzNzYzMw',
    },
    path: 'FASHION_MENS_FASHION_MENS_ACTIVEWEAR_MENS_ATHLETIC_SHORTS',
    rawPath: 'fashion/mens-fashion/mens-activewear/mens-athletic-shorts',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU1OTgyODc2MjYyNQ',
    name: "Men's Athletic Pants",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTc0NjgxMDQzNzYzMw',
    },
    path: 'FASHION_MENS_FASHION_MENS_ACTIVEWEAR_MENS_ATHLETIC_PANTS',
    rawPath: 'fashion/mens-fashion/mens-activewear/mens-athletic-pants',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU2MjA3OTcxMTIzMw',
    name: "Men's Unitards",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTc0NjgxMDQzNzYzMw',
    },
    path: 'FASHION_MENS_FASHION_MENS_ACTIVEWEAR_MENS_UNITARDS',
    rawPath: 'fashion/mens-fashion/mens-activewear/mens-unitards',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU2MzE2OTc3MTUyMQ',
    name: "Men's Sports Jerseys",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTc0NjgxMDQzNzYzMw',
    },
    path: 'FASHION_MENS_FASHION_MENS_ACTIVEWEAR_MENS_SPORTS_JERSEYS',
    rawPath: 'fashion/mens-fashion/mens-activewear/mens-sports-jerseys',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU2NDQ3NDAzNjIyNQ',
    name: "Men's Ski Wear",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ0NTc0NjgxMDQzNzYzMw',
    },
    path: 'FASHION_MENS_FASHION_MENS_ACTIVEWEAR_MENS_SKI_WEAR',
    rawPath: 'fashion/mens-fashion/mens-activewear/mens-ski-wear',
    depth: 3,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU2NTM5MTA5Nzg1Nw',
    name: "Men's Ski Suits",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU2NDQ3NDAzNjIyNQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_ACTIVEWEAR_MENS_SKI_WEAR_MENS_SKI_SUITS',
    rawPath:
      'fashion/mens-fashion/mens-activewear/mens-ski-wear/mens-ski-suits',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU2NzIwOTU1ODAxNw',
    name: "Men's Ski Jackets",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU2NDQ3NDAzNjIyNQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_ACTIVEWEAR_MENS_SKI_WEAR_MENS_SKI_JACKETS',
    rawPath:
      'fashion/mens-fashion/mens-activewear/mens-ski-wear/mens-ski-jackets',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU2ODE0MjE1MTY4MQ',
    name: "Men's Ski Pants",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU2NDQ3NDAzNjIyNQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_ACTIVEWEAR_MENS_SKI_WEAR_MENS_SKI_PANTS',
    rawPath:
      'fashion/mens-fashion/mens-activewear/mens-ski-wear/mens-ski-pants',
    depth: 4,
  },
  {
    id: 'Q2F0ZWdvcnk6MjQ1MjU2ODg1ODY1Njc2OQ',
    name: "Men's Ski Tops",
    parent: {
      id: 'Q2F0ZWdvcnk6MjQ1MjU2NDQ3NDAzNjIyNQ',
    },
    path: 'FASHION_MENS_FASHION_MENS_ACTIVEWEAR_MENS_SKI_WEAR_MENS_SKI_TOPS',
    rawPath: 'fashion/mens-fashion/mens-activewear/mens-ski-wear/mens-ski-tops',
    depth: 4,
  },
];

const uppercaseFirst = (str?: string) =>
  str ? str?.[0]?.toUpperCase() + str?.slice(1) : '';

const mapName = (name: string) => {
  const newParts = [];
  const parts = (name || '').split('/');

  for (const part of parts) {
    const currParts = part.split('-');

    newParts.push(currParts.map(uppercaseFirst).join(' '));
  }

  return newParts.join(' > ');
};

export const leafCategories = categories
  .filter(
    (category) =>
      !categories.some(
        (other) => other.parent && other.parent.id === category.id,
      ),
  )
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((category) => ({
    label: mapName(category.rawPath),
    slug: category.path,
    handle: category.name,
  }));
