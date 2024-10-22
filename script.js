function loadPost(postFile) {
    const contentDiv = document.getElementById('main-content'); // 获取主内容区域的DOM元素

    // 使用XMLHttpRequest请求子页面内容
    const xhr = new XMLHttpRequest();
    xhr.open('GET', postFile, true);

    // 当文件加载成功时，将内容插入到主内容区域
    xhr.onload = function() {
        if (xhr.status === 200) {
            contentDiv.innerHTML = xhr.responseText; // 替换内容区域的HTML
        } else {
            contentDiv.innerHTML = '<p>Sorry, the post could not be loaded.</p>';
        }
    };

    xhr.send(); // 发送请求
}


/* body 进入时的淡入效果 */
@keyframes bodyFadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

body {
    animation: bodyFadeIn 1s ease-in-out;
}
