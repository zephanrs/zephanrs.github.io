async function btn() {
    var username = document.getElementById('input1').value
    const url = 'https://api.hypixel.net/player?key=220986b8-7656-4d7f-a1d7-dc2ef20ba7a8&name=' + username
    const body = { a: 1 };

    fetch(url, (body))
            .then(res => res.json())
            .then(data =>{
                if(data.player.uuid) {
                    var uuid = data.player.uuid

                    gexp(uuid)
                
                    document.getElementById('query').style.display = 'none'
                    document.getElementById('data').style.display = 'block'
                }})
        }
async function gexp(uuid) {
    const url = 'https://api.hypixel.net/findGuild?key=220986b8-7656-4d7f-a1d7-dc2ef20ba7a8&byUuid=' + uuid
    const body = { a: 1 };

    fetch(url, (body))
            .then(res => res.json())
            .then(data =>{
                const url = 'https://api.hypixel.net/guild?key=220986b8-7656-4d7f-a1d7-dc2ef20ba7a8&id=' + data.guild
                const body = { a: 1 };

                fetch(url, (body))
                    .then(res => res.json())
                    .then(data =>{
                        const member = data.guild.members.find(member => member.uuid === uuid)

                        const gxp = new Intl.NumberFormat().format(Object.values(member.expHistory).reduce((a, b) => a + b, 0))

                        document.getElementById('p2').innerHTML = gxp
                    })
            })
    
    setTimeout(() => {
        gexp(uuid)
    }, 60000);
                
}