export default function lazyLoading(): void {
    const targets = document.querySelectorAll<HTMLElement>('*[data-src]');

    if (targets.length === 0) {
        return;
    }

    const options: IntersectionObserverInit = {
        root: null,
        rootMargin: '0px',
        threshold: 0.01,
    };

    const loadImage = (items: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        items.forEach((item) => {
            if (item.intersectionRatio > 0) {
                if (item.target.getAttribute('data-src') !== null) {
                    const dataSrc = item.target.getAttribute('data-src');
                    if (dataSrc) {
                        item.target.src = dataSrc;
                    }
                    item.target.onload = () => {
                        item.target.removeAttribute('data-src');
                        observer.unobserve(item.target);
                    };
                }
            }
        });
    };

    const observer = new IntersectionObserver(loadImage, options);

    targets.forEach((target) => {
        observer.observe(target);
    });
}