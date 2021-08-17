/*
 * @Author: 石头
 * @Date: 2021-08-04 16:27:49
 * @LastEditors: 石头
 * @LastEditTime: 2021-08-04 16:34:40
 * @Description: 防抖函数
 */

/**
 * @description: time时间后执行，期间内如果再次检测到执行请求，时间清零，重新开始计算
 * 第一次不执行
 */

const debounce = (fn, time) => {
    let timer = null;

    return () => {
    
        clearTimeout(timer);

        fn();

        timer = setTimeout(() => {
            fn();
        }, time);
    }
}