import {publishSync} from "pubsub-js";

const onPageLeave = () => {
    publishSync('changeFooterCondition', false)
    publishSync('changeLoadingBgCondition', true)
}

const onPageEnter = () => {
    publishSync('changeFooterCondition', true)
    publishSync('changeLoadingBgCondition', false)
}

const setCurrentMenu = (name) => {
    publishSync('setCurrentMenu', name)
}

export {onPageLeave, onPageEnter, setCurrentMenu}