const mainContainer = document.getElementById('root')

const data = {
    type:'a',
    properties:{
        href:'https://en.wikipedia.org/wiki/Demon_Slayer:_Kimetsu_no_Yaiba',
        target:'_blank'
    },
    children:'Demon Slayer on Wikipedia'
}

function appnedData(data,container){
    // const tag = document.createElement(data.type);
    // tag.innerHTML = data.children;
    // tag.setAttribute('href',data.properties.href)
    // tag.setAttribute('target',data.properties.target)

    // container.appendChild(tag);

    const tag = document.createElement(data.type);
    tag.innerHTML = data.children;
    for (const i in data.properties) {
        if(i === 'children') continue
        tag.setAttribute(i,data.properties[i])
    }

    container.appendChild(tag)

}


appnedData(data,mainContainer)