function openCity(evt, mac) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].style.alignItems = 'center';
        tabcontent[i].style.justifyContent = 'center';
        tabcontent[i].style.gap = '12px';

        tabcontent[i].classList.remove('hide')
        tabcontent[i].classList.add('show', 'fade')
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(mac).style.display = "flex";
    evt.currentTarget.className += " active";
}