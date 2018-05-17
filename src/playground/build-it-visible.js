class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    };

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    };

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.handleToggleVisibility}>
                    {this.state.visibility ? "Hide message" : "Show message"}
                </button>
                {this.state.visibility && (
                    <p>This is a hidden message</p>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));


// const app = {
//     title: "Visibility Toggle",
//     subtitle: "This is some hidden info"
// }
// 
// const appRoot = document.getElementById('app');
// 
// let vis = false;
// 
// const toggleVis = () => {
//     vis == false ? vis = true : vis = false;
//     renderTemplate();
// }
// 
// const renderTemplate = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick = {toggleVis}>
//                 {vis ? "Show details" : "Hide details"}
//             </button>
//             {vis && (
//                 <div>
//                     <p>Here is a hidden message</p>
//                 </div>
//             )}
//         </div>
//     );
// 
//     ReactDOM.render(template, appRoot);
// }
// 
// renderTemplate();
