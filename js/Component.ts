export class Component<State = {}> {
    private el;
     state: State = {} as State;
    events: {
        [key: string]: (ev: Event) => void;
    } = {};
    constructor(el: HTMLElement, initialState?: Partial<State>) {
        this.el = el;
        this.state = {...this.state, ...initialState};
        Promise.resolve().then(() => {
            if(this.el) {
                this.onMount(this.el);
                this.onHandler();
            }
        })
     }
    private onHandler() {
        for (const [key, handler] of Object.entries(this.events)) {
            // Split the key into the event name and the selector
            const [eventName, selector] = key.split("@");

            // Query the DOM for elements matching the selector
            const elements = this.el?.querySelectorAll(selector);

            // Attach the event handler to the appropriate event for each matching element
            elements.forEach((element) => {
                element.addEventListener(eventName, handler);
            });
        }
    }
    setState(patch: { }): void {
        console.log("HHHHHHHHFFGHB G");
        this.state = {...this.state, ...patch};
        this.el.innerHTML = this.render();
        this.onHandler();
    }

    onMount(el: HTMLElement): void{
            el.innerHTML = this.render();
    }

    render(): string {
        return "<h1>hello</h1>";
    }
}