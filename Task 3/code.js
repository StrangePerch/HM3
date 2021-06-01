function Add(styles, text)
{
        let element = document.createElement("p");
        element.innerHTML = text;
        let value = "";
        for (const style of styles) {
                value += `${style.name}: ${style.value};`;
                
        }
        element.setAttribute("style", value);
        document.body.insertBefore(element, null);
}

let styles =
    [
        {name: "background", value: "red"}, 
        {name: "font-size", value: "30px"},
        {name: "font-family", value: "Arial Black, serif"}
    ]

Add(styles, "asdsdadasdds test apple hello");