const $leftLinks = document.querySelectorAll('.left-menu a'),
    $mapLinks = document.querySelectorAll('.map a'),
    $info = document.querySelector('.info')

/*const requestData = (id) => {
    fetch('data.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            $info.innerHTML = `
			<h2>${data[id - 1].district}</h2>
			<p>${data[id - 1].info}</p>
		`;
    });
};*/
//requestData();
$leftLinks.forEach(elements =>{
    elements.addEventListener('mouseenter', (e)=>{ //смотрим куда навели мышь, на какой округ из левого списка
        let self = e.currentTarget; //получили всю ссылку
        let selfHref = self.getAttribute('href'); //положили атрибут href
        let selfColor = self.dataset.color;//цвета
        let currentElements = document.querySelector(`.map a[href="${selfHref}"]`);//ищем ссылку у которой такой же href
        let currentPolygon = currentElements.querySelectorAll('polygon')//ищем все что туда входит
        let currentPath = currentElements.querySelectorAll('path')//ищем все что туда входит
        if(currentPolygon){
            currentPolygon.forEach(elements => elements.style.cssText = `fill: ${selfColor}; stroke-width: 3px;`)
        }if(currentPath){
            currentPath.forEach(elements => elements.style.cssText = `fill: ${selfColor}; stroke-width: 3px;`)
        }
        self.classList.add('active')
    })
    elements.addEventListener('mouseleave', (e)=>{ //смотрим куда навели мышь, на какой округ из левого списка
        let self = e.currentTarget; //получили всю ссылку
        let selfHref = self.getAttribute('href'); //положили атрибут href
        let currentElements = document.querySelector(`.map a[href="${selfHref}"]`);//ищем ссылку у которой такой же href
        let currentPolygon = currentElements.querySelectorAll('polygon')//ищем все что туда входит
        let currentPath = currentElements.querySelectorAll('path')//ищем все что туда входит
        if(currentPolygon){
            currentPolygon.forEach(elements => elements.style.cssText = ``)
        }if(currentPath){
            currentPath.forEach(elements => elements.style.cssText = ``)
        }
        self.classList.remove('active')
    })
   /* el.addEventListener('click', (e) => {
        e.preventDefault();
        let self = e.currentTarget;
        let selfHref = self.getAttribute('href');
        let currentElement = document.querySelector(`.map a[href="${selfHref}"]`);
        let id = parseInt(currentElement.dataset.id);
        requestData(id);
    });*/
})
$mapLinks.forEach(elements =>{
    elements.addEventListener('mouseenter', (e)=>{ //смотрим куда навели мышь, на какой округ из левого списка
        let self = e.currentTarget; //получили всю ссылку
        let selfHref = self.getAttribute('href'); //положили атрибут href
        let selfColor = self.dataset.color;//цвета
        let currentElements = document.querySelector(`.left-menu a[href="${selfHref}"]`);//ищем ссылку у которой такой же href
        let currentPolygon = self.querySelectorAll('polygon')//ищем все что туда входит
        let currentPath = self.querySelectorAll('path')//ищем все что туда входит
        if(currentPolygon){
            currentPolygon.forEach(elements => elements.style.cssText = `fill: ${selfColor}; stroke-width: 3px;`)
        }if(currentPath){
            currentPath.forEach(elements => elements.style.cssText = `fill: ${selfColor}; stroke-width: 3px;`)
        }
        currentElements.classList.add('active')
    })
    elements.addEventListener('mouseleave', (e)=>{ //смотрим куда навели мышь, на какой округ из левого списка
        let self = e.currentTarget; //получили всю ссылку
        let selfHref = self.getAttribute('href'); //положили атрибут href
        let currentElements = document.querySelector(`.left-menu a[href="${selfHref}"]`);//ищем ссылку у которой такой же href
        let currentPolygon = self.querySelectorAll('polygon')//ищем все что туда входит
        let currentPath = self.querySelectorAll('path')//ищем все что туда входит
        if(currentPolygon){
            currentPolygon.forEach(elements => elements.style.cssText = ``)
        }if(currentPath){
            currentPath.forEach(elements => elements.style.cssText = ``)
        }
        currentElements.classList.remove('active')
    })
   /* el.addEventListener('click', (e) => {
        e.preventDefault();
        let self = e.currentTarget;
        let selfHref = self.getAttribute('href');
        let currentElement = document.querySelector(`.left-menu a[href="${selfHref}"]`);
        let id = parseInt(currentElement.dataset.id);
        requestData(id);
    });*/
})

