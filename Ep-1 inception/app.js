
const parent=React.createElement("div",

    {id:"parent"},React.createElement("div",
    {
        id:"child"
    },[React.createElement("h1",
        
       {} ,"hello form react"),React.createElement("h1",
        {
            id:"parent"
        },"hello form react")]));

console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
