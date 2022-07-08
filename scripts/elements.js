function writeElements() { const element = ["nav", "footer"]; const html = ["<div class='nav-cont'><div class='nav-con-logo'><a href='/'><img src='/media/t2bm.png'></a></div><div class='nav-con-links'><div class='nav-con-links-lt'><ul><li><a href='/play.html'>Play</a></li></ul></div><div class=' nav-con-links-rt '><ul></ul></div></div><div id='navmobile-enter'><p><span class='material-symbols-outlined'>menu</span></div></div>", "<div class='footer-cont'><p>&copy 2022 GoodGalaxy</p><p>Better Minecraft is created and maintained by Luna Pixel Studios.</p><p>T2BM and GoodGalaxy are not affiliated with Microsoft Studios or Luna Pixel Studios.</p></div>"]; for (let i = 0; i < element.length; i++) { document.getElementsByTagName(element[i])[0].innerHTML = html[i]; } return };
writeElements();
document.getElementById('navmobile-enter').onclick = showNavMenu();

function showNavMenu() {
    document.getElementsByClassName('nav-con-links')[0].style.display = 'flex';
}