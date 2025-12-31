export function getDbDMenu() {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = `
    <dbd-menu>Menu</dbd-menu>
    `
    document.body.appendChild(wrapper)
    return wrapper
}

// menu will alow DB URL SET UPS FOR LOCAL USER , dbdragon in all minds communication hub for non global params