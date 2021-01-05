class MeteoWidgetElement extends HTMLElement {

    constructor() {
        super()
        this.attachShadow({mode: 'open'})

        this.shadowRoot.innerHTML = `
            <img src ="">
            <h2>Paris</h2>
            <h3>
                <span id="temperature">25°C</span>
                (<span id="description">Nuageux</span>)
            </h3>
        `
    }

    fetchAPIDATA() {

    }

    connectedCallback() {
        this._city = this.getAttribute('city') || 'Paris'
        this._units = this.getAttribute('units') || 'metric'
        this._lang = this.getAttribute('lang') || 'fr'
    }

    render () {

    }
}

window.customElements.define('meteo-widget', MeteoWidgetElement)