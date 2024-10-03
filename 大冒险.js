document.addEventListener('DOMContentLoaded', function () {
    const namesWithWeights = [
        { "name": "唱一首你最喜欢的歌曲，不使用任何伴奏。", "weight": 1 },
        { "name": "用非母语说一段绕口令。", "weight": 1 },
        { "name": "模仿你最喜欢的电影角色的一个场景。", "weight": 1 },
        { "name": "用脚写字，写下你的名字。", "weight": 1 },
        { "name": "做5个不同的鬼脸，让其他人猜你模仿的是什么。", "weight": 1 },
        { "name": "用纸巾做一个帽子并戴在头上一分钟。", "weight": 1 },
        { "name": "用一只手完成一段舞蹈。", "weight": 1 },
        { "name": "用不同的声调重复同一句话三次。", "weight": 1 },
        { "name": "倒着走一段距离。", "weight": 1 },
        { "name": "用吸管喝完一杯水。", "weight": 1 },
        { "name": "用非惯用手吃完一包零食。", "weight": 1 },
        { "name": "讲一个笑话，但要非常严肃，不笑。", "weight": 1 },
        { "name": "用身体语言描述一个动物，但不能说话。", "weight": 1 },
        { "name": "选择一个在场的人，给他们按摩一分钟。", "weight": 1 },
        { "name": "用一个塑料勺子吃果冻。", "weight": 1 },
        { "name": "背诵你最喜欢的一首诗。", "weight": 1 },
        { "name": "用一个词描述你今天的感受。", "weight": 1 },
        { "name": "模仿一个动物的叫声。", "weight": 1 },
        { "name": "用你的脚做一次瑜伽动作。", "weight": 1 },
        { "name": "用一个物品即兴创作一个故事。", "weight": 1 },
        { "name": "用你的非惯用手画一个自画像。", "weight": 1 },
        { "name": "唱一首儿歌。", "weight": 1 },
        { "name": "尝试用不同的语言说“我爱你”。", "weight": 1 },
        { "name": "跳一段即兴的舞蹈。", "weight": 1 },
        { "name": "做一个一分钟的自我介绍，但要假装你是另一个人。", "weight": 1 },
        { "name": "用一个物品做一个魔术。", "weight": 1 },
        { "name": "尝试用不同的方言说一段话。", "weight": 1 },
        { "name": "用一个物品即兴唱一首歌。", "weight": 1 },
        { "name": "尝试用脚穿针引线。", "weight": 1 },
        { "name": "用一个物品做一个时尚的帽子。", "weight": 1 },
        { "name": "用一个物品做一个临时的乐器并演奏。", "weight": 1 },
        { "name": "尝试只用肢体语言讲述一个小故事。", "weight": 1 },
        { "name": "选择一个人，为他们唱一首生日歌，即使那天不是他们的生日。", "weight": 1 },
        { "name": "用你的非惯用手完成一个简单的绘画作品。", "weight": 1 },
        { "name": "尝试只用脚打开一个罐子。", "weight": 1 },
        { "name": "模仿三种不同的动物走路。", "weight": 1 },
        { "name": "用你的脚玩一次“石头、剪刀、布”。", "weight": 1 },
        { "name": "尝试用不同的语言唱国歌。", "weight": 1 },
        { "name": "用一个物品即兴讲一个一分钟的故事。", "weight": 1 },
        { "name": "用一个物品做一个临时的乐器，并用它演奏一段旋律。", "weight": 1 },
        { "name": "尝试用不同的方言朗读一首诗。", "weight": 1 },
        { "name": "用你的脚玩一次“井字棋”。", "weight": 1 },
        { "name": "尝试用一个物品做一个临时的投掷玩具，并玩一次。", "weight": 1 },
        { "name": "尝试用不同的声线给一段动画片配音。", "weight": 1 },
    ]; // 名字和对应的权重列表

    const totalWeight = namesWithWeights.reduce((sum, { weight }) => sum + weight, 0); // 计算总权重

    const drawnNameDiv = document.getElementById('drawn-name');
    const drawButton = document.getElementById('draw-button');

    drawButton.addEventListener('click', function () {
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