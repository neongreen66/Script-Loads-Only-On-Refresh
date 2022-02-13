// JavaScript source code
import AbstracView from "./AbstractView.js"

export default class extends AbstracView {

    constructor() {
        super();
        this.setTitle("SPA - View 1");
    }

    async getHtml() {
        return `
            <div class="container">
                <h1>View -1 Line Chart</h1>
                <div class="line-area"></div>
            </div>
        `;
    }
}