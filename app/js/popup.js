// let doc = document,
//    flag = 'false',
//    speedHiddenScroll = 350,
//    lockElem = doc.querySelector('.fixed'),
//    scrollWidth = window.innerWidth - doc.getElementsByTagName('html')[0].clientWidth;

// function constr(arg1, arg2, arg3, arg4, arg5, arg6) {
//    let flag2 = arg2
//    if (flag2 === 'true') {
//       doc.querySelector('div.' + arg1).classList.add('view__out'),
//          doc.querySelector('div.' + arg1 + ' > .popup-window').classList.add('view__popup');
//    } else {
//       doc.querySelector('div.' + arg1).classList.remove('view__out'),
//          doc.querySelector('div.' + arg1 + ' > .popup-window').classList.remove('view__popup');
//    }
//    setTimeout(function () {
//       flag = arg3;
//       lockElem.setAttribute('style', 'padding-right:' + arg4 + 'px');
//       doc.body.setAttribute('style', 'padding-right:' + arg4 + 'px; overflow:' + arg5);
//    }, arg6);
// }
// document.onkeydown = function (e) {
//    let closeEsc = doc.querySelector('.view__out').className.replace(/ .*/, '');
//    if (e.which == 27 && closeEsc) {
//       constr(closeEsc, 'false', 'false', 0, 'auto', speedHiddenScroll);
//    }
// }
// doc.body.addEventListener("click", function (e) {
//    e.preventDefault();
//    let open = e.target.className.replace(/ .*/, ''),
//       close = e.target.parentNode.parentNode.className.replace(/ .*/, ''),
//       regex = /(?:Open)/gi;
//    if (open.match(regex) && flag === 'false') {
//       constr(open, 'true', 'true', scrollWidth, 'hidden', 0);
//    } else if (open.match(regex) && e.target.tagName.toLowerCase() === 'div') {
//       constr(open, 'false', 'false', 0, 'auto', speedHiddenScroll);
//    } else if (e.target.classList.contains('close')) {
//       constr(close, 'false', 'false', 0, 'auto', speedHiddenScroll);
//    } else if (open.match(regex) && flag === 'true') {
//       let dooble = e.target.parentNode.parentNode.parentNode.className.replace(/ .*/, ''),
//          doobleTarget = e.target.className.replace(/ .*/, '');
//       constr(dooble, 'false', 'true', scrollWidth, 'hidden', 0);
//       constr(doobleTarget, 'true', 'true', scrollWidth, 'hidden', 0);
//    }
// });