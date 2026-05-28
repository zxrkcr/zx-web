const typing = document.querySelector('.typing');

if (typing) {
    const length = typing.textContent.length;
    typing.style.width = length + 'ch' ;
    typing.style.animationTimingFunction = `steps(${length}, end)`;
}