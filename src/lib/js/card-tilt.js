const tiltEffectSettings = {
    max: 8,
    perspective: 1000,
}

/**
 * 
 * @param {*} event 
 */
export const handleCardMouseMove = (event) => {
    const currentCard = event.composedPath().find((/** @type {{ className: string | string[]; }} */ item) => item.className.includes('card card-'));
    const { max, perspective } = tiltEffectSettings;
    
    const cardWidth = currentCard.offsetWidth;
    const cardHeight = currentCard.offsetHeight;    
    const centerX = currentCard.offsetLeft + (cardWidth/2);
    const centerY = currentCard.offsetTop + (cardHeight/2);    
    const mouseX = event.pageX - centerX;
    const mouseY = event.pageY - centerY;
    const rotateXUnbound = (+1)*max*mouseY/(cardHeight/2);
    const rotateYUnbound = (-1)*max*mouseX/(cardWidth/2);
    const rotateX = rotateXUnbound < -max ? -max : (rotateXUnbound > max ? max : rotateXUnbound);    
    const rotateY = rotateYUnbound < -max ? -max : (rotateYUnbound > max ? max : rotateYUnbound);
    currentCard.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

/**
 * 
 * @param {*} event 
 */
export const handleCardMouseLeave = (event) => {
    const currentCard = event.composedPath().find((/** @type {{ className: string | string[]; }} */ item) => item.className.includes('card card-'));
    const { perspective } = tiltEffectSettings;
    currentCard.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`;
}