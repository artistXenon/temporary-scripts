const k = {
    vidFocus: _ => [document.querySelector("#movie_player").click(), document.querySelector("#movie_player").click()],
    list: [],
    add: function(title) {
        this.vidFocus()
        this.list.push({
            time: Number(document.querySelector('div.ytp-progress-bar').getAttribute('aria-valuenow')), 
            title
        })
        this.print()
    },
    remove: function() {
        this.list.pop()
        this.print()
    },
    rename: function(title) {
        this.list[this.list.length - 1].title = title
        this.print()
    },
    retime: function(offset) {
        this.list[this.list.length - 1].time += offset
        this.print()
    },
    format: function(time) {
        let h, m, s, rst = ''
        h = Math.floor(time / 3600)
        time -= h * 3600
        m = Math.floor(time / 60)
        time -= m * 60
        s = time
        return `${h.toString().padStart(2, 0)}:${m.toString().padStart(2, 0)}:${s.toString().padStart(2, 0)}`
    },
    print: function() {
        let rst = '✨ SET LIST ✨\n'
        for (let o of this.list) {
            rst += `\n\n🎵 ${this.format(o.time)} / ${o.title}`
        }
        console.log(rst)
    }
}



/*
k.add('')
k.rename('')
k.retime(0)
k.remove()
k.print()
*/
