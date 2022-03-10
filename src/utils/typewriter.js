export function makeTypewriter(itemArray, setter, speed = 80, pause = 2000) {
    let arrayIndex = 0;
    let position = 0;
    let duration, direction, currentLetter;

    const isItemFinished = (currentItem) => position === currentItem.length * 2 - 1;
    const isLastItem = () => arrayIndex === itemArray.length - 1;
    const isIterationForwardFinished = (currentItem) => position === currentItem.length - 1;
    const isIteratingForward = (currentItem) => position < currentItem.length;

    function _typewriter() {
        let current = itemArray[arrayIndex];

        if (isItemFinished(current)) {
            position = 0;
            if (isLastItem()) {
                arrayIndex = 0;
            } else {
                arrayIndex++;
            }
        }

        duration = isIterationForwardFinished(current) ? pause : speed;
        direction = isIteratingForward(current) ? 1 : -1;
        currentLetter = (position % current.length) + 1;
        setter(current.slice(0, currentLetter * direction));
        position++;
        setTimeout(_typewriter, duration);
    }

    return _typewriter;
}
