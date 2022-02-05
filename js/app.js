const player = new ytPlayer('#player', {
  width: window.innerWidth,
  height: window.innerHeight
})

const GetYTIdByLink = (url) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : '';
}

player.on('ended', () => {
  player.play()
})

window.wallpaperPropertyListener = {
  applyUserProperties (properties) {
    if (properties.link) {
      const id = GetYTIdByLink(properties.link.value)
      if (id.length > 0) {
        player.load(id, true)
      }
    }
    if (properties.vol) {
      vol = properties.vol.value
      player.setVolume(vol)
    }
  }
}
