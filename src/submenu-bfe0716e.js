document.addEventListener('DOMContentLoaded', function() {
    // 创建右侧子目录容器
    createSidebar();
    
    // 页面加载时更新子目录
    updateSubmenu();
    
    // 监听导航点击事件
    document.querySelectorAll('nav.summary a').forEach(function(link) {
        link.addEventListener('click', function() {
            setTimeout(updateSubmenu, 100);
        });
    });
});

function createSidebar() {
    var sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    document.body.appendChild(sidebar);
}

function updateSubmenu() {
    var sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    
    // 获取当前页面的 URL
    var currentUrl = window.location.pathname;
    
    // 找到当前活跃的章节
    var activeItem = document.querySelector('nav.summary li.active');
    if (!activeItem) {
        activeItem = document.querySelector('nav.summary li a[href="' + currentUrl + '"]');
        if (activeItem) {
            activeItem = activeItem.parentElement;
        }
    }
    
    // 找到父章节
    var parentLi = activeItem;
    while (parentLi && !parentLi.classList.contains('chapter')) {
        parentLi = parentLi.parentElement;
        if (parentLi && parentLi.tagName === 'LI') {
            parentLi = parentLi.parentElement.parentElement;
        }
    }
    
    // 如果当前就是一级章节，显示其子项
    if (parentLi && parentLi.querySelector('ul')) {
        var subItems = parentLi.querySelector('ul').querySelectorAll('li');
        if (subItems.length > 0) {
            renderSubmenu(parentLi.querySelector('a').textContent, subItems);
            return;
        }
    }
    
    // 否则找到最近的有子项的父级
    var summaryUl = document.querySelector('nav.summary > ul');
    var chapters = summaryUl.querySelectorAll('li.chapter');
    
    for (var i = 0; i < chapters.length; i++) {
        var chapter = chapters[i];
        var chapterLink = chapter.querySelector('a');
        var subUl = chapter.querySelector('ul');
        
        if (subUl && subUl.querySelectorAll('li').length > 0) {
            // 检查当前页面是否在这个章节下
            var subLinks = subUl.querySelectorAll('a');
            var isInChapter = false;
            
            subLinks.forEach(function(link) {
                if (currentUrl.indexOf(link.getAttribute('href')) !== -1) {
                    isInChapter = true;
                }
            });
            
            if (isInChapter) {
                renderSubmenu(chapterLink.textContent, subUl.querySelectorAll('li'));
                return;
            }
        }
    }
    
    // 默认显示第一个有子项的章节
    for (var j = 0; j < chapters.length; j++) {
        var ch = chapters[j];
        var chLink = ch.querySelector('a');
        var sub = ch.querySelector('ul');
        
        if (sub && sub.querySelectorAll('li').length > 0) {
            renderSubmenu(chLink.textContent, sub.querySelectorAll('li'));
            return;
        }
    }
    
    // 如果没有子项，隐藏侧边栏
    sidebar.style.display = 'none';
}

function renderSubmenu(title, items) {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'block';
    
    var html = '<h3>' + title + '</h3><ul>';
    
    items.forEach(function(item) {
        var link = item.querySelector('a');
        if (link) {
            var href = link.getAttribute('href');
            var text = link.textContent;
            var isActive = window.location.pathname.indexOf(href) !== -1;
            var className = isActive ? 'class="active"' : '';
            html += '<li><a href="' + href + '" ' + className + '>' + text + '</a></li>';
        }
    });
    
    html += '</ul>';
    sidebar.innerHTML = html;
}
