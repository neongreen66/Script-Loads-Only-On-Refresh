// JavaScript source code
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    
    constructor(params) {
        super(params);
        this.setTitle("SPA - View 2");
    }

    async getHtml() {
        return `
            <div class="container">
                <h1>View 2</h1>
                <p>You are viewing the 2nd view</p>
            </div>
        `;
    }
}