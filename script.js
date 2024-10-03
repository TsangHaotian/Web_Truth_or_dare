document.addEventListener('DOMContentLoaded', function() {
    const namesWithWeights = [
        { name: '张三【在scriipt.js文件中可自行添加】', weight: 1 },
        { name: '李四【在scriipt.js文件中可自行添加】', weight: 1 },
        { name: '王五【在scriipt.js文件中可自行添加】', weight: 1 },
        { name: '赵六【在scriipt.js文件中可自行添加】', weight: 1 },
        { name: '田七【在scriipt.js文件中可自行添加】', weight: 1 },
        { name: '在scriipt.js文件中可自行添加', weight: 1 },
        
    ]; // 名字和对应的权重列表

    const totalWeight = namesWithWeights.reduce((sum, { weight }) => sum + weight, 0); // 计算总权重

    const drawnNameDiv = document.getElementById('drawn-name');
    const drawButton = document.getElementById('draw-button');

    drawButton.addEventListener('click', function() {
        let randomValue = Math.random() * totalWeight;
        let drawnName;

        // 使用some方法遍历namesWithWeights数组，找到对应的name
        namesWithWeights.some(({ name, weight }) => {
            if (randomValue - weight <= 0) {
                drawnName = name;
                return true; // 找到名字后退出some方法
            }
            randomValue -= weight;
            return false;
        });

        if (drawnName) {
            // 生成随机颜色
            const randomColor = getRandomColor();

            // 显示抽中的名字，并应用随机颜色
            drawnNameDiv.innerHTML = `<p style="color: ${randomColor};"> ${drawnName} </p>`;
        } else {
            drawnNameDiv.innerHTML = '<p>没有名字被抽中</p>';
        }
    });

    // 生成随机颜色的函数
    function getRandomColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`; // 返回rgb颜色格式的字符串
    }
});