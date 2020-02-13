//接收一个数组，接收回掉函数
//item当前遍历到的数组元素
//index当前遍历的元素的索引
//array当前遍历的数组的引用
// [1,2].map((item, index, array) => {
//     return item + 2
// })

const arrayMap = (array: [], callback:(item: any,index: number, arr: any[]) => any): any => {
    let i = -1
    const len = array.length
    let resArray = []
    while (++i < len){
        resArray.push(callback(array[i],i,array))
    }
    return resArray
}
export = arrayMap
