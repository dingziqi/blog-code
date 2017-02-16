let watches = [];

export default function init(){
    let imgs = document.querySelectorAll('img[data-src]');

    imgs.forEach(item => {
        watches.push({
            item: item,
            timer: setInterval(function(){
                let pos = item.getBoundingClientRect();
                if(pos.top <= window.innerHeight){
                    item.src = item.dataset['src'];
                    item.removeAttribute('data-src');
                    item.className = 'lazy-img';
                    watches.map(watcher => {
                        if(watcher.item == item){
                            clearInterval(watcher.timer);
                        }
                    })
                }
            }, 150)
        });
    });
}
