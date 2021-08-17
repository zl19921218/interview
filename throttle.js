/*
 * @Author: 石头
 * @Date: 2021-08-04 16:29:50
 * @LastEditors: 石头
 * @LastEditTime: 2021-08-04 16:34:49
 * @Description: 节流函数
 */

/**
 * @description: 间隔time时间执行一次  第一次执行
 */

const throttle = (fn, time) => {
    let trigger = false;

    return () => {
        if (trigger) {
            return;
        }

        trigger = true;

        setTimeout(() => {
            fn();
        }, time)

    }
}
