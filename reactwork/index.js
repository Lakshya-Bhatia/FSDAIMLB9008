console.log("hello");
const parent=document.getElementById('root');
console.dir(parent);
const root=ReactDOM.createRoot(parent);
// const h1=React.createElement("h1",{style:{color:'lightdarkpink'}},"LAKSHYA BHATIA");
// const l1=React.createElement("li",{style:{backgroundColor:'pink'}},"Oranges");
// const l2=React.createElement("li",{},"apple");
// const ul=React.createElement("ul",{},l1,l2);
const element = <h1>Hello, world!</h1>;
const l1=<li>Orange</li>
const l2=<li>Apple</li>
const ul=<ul>{l1}{l2}</ul>
const  container=(
    <div style={{backgroundColor:'blue'}}>
        <div>{element}</div>
        <div>{ul}</div>

    </div>
)

root.render(container)
