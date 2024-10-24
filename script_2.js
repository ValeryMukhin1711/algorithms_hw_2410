// Предположим, у вас есть рюкзак вместимостью 10 кг и список предметов, которые вы можете положить в рюкзак. Каждый предмет имеет свой вес и стоимость:

// Предмет
// Вес (кг)
// Стоимость ($)
// 1
// 2
// 10
// 2
// 3
// 15
// 3
// 5
// 25
// 4
// 7
// 35


// Вам нужно выбрать такой набор предметов, чтобы их суммарный вес не превышал 10 кг, а суммарная стоимость была максимальной.


// Решение задачи о рюкзаке с помощью жадного алгоритма заключается в следующих шагах:
// Вычисляем "ценность" каждого предмета, разделив его стоимость на вес.
// Сортируем предметы в порядке убывания их ценности.
// Идем по отсортированному списку предметов и добавляем их в рюкзак, начиная с самых ценных, пока не достигнем максимальной вместимости рюкзака.


console.log('Start')
const no_1 = {name: 'no_1',
    weight: 1,
    cost: 2
};

const no_2 = {name: 'no_2',
    weight: 10,
    cost: 2
};

const no_3 = {name: 'no_3',
    weight: 3,
    cost: 15
};

const no_4 = {name: 'no_4',
    weight: 3,
    cost: 5
};

const no_5 = {name: 'no_5',
    weight: 25,
    cost: 4
};

const no_6 = {name: 'no_6',
    weight: 8,
    cost: 35
};

const objects = [no_1, no_2, no_3, no_4, no_5, no_6];
// добавить для каждого отбъекта его "ценность"(value) cost/weigth
// функция рачёта value
function getItemValue(item) {
    return item.cost/item.weight
}



objects.sort((a,b) => b.cost/b.weight - a.cost/a.weight)

// проверить сортировку objects
console.log(objects)

// функция загрузки в рюкзак

function putToBackpack (arr, maxWeigth) {
    const resArr = []
    let i = 0
    for (let sumWeigth =0 ; (sumWeigth < maxWeigth) && i < arr.length ; ) {
        // console.log(objects[i])
        // console.log((maxWeigth-sumWeigth),objects[i].weight,resArr)
        if (arr[i].weight <= (maxWeigth - sumWeigth)) {
        sumWeigth += arr[i].weight
        resArr.push(arr[i])
        }
        i++

        }
    
    return resArr
}

const sumWeith = putToBackpack(objects, 10)

console.log(sumWeith)



// function chooseWhatToTake (arr) {
//     const objectsToTake = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         arr[i].value = (arr[i].cost / arr[i].weight)
//         console.log(arr[i].value)
//     }

//     arr[value].sort()
//     console.log(arr);

//     for (let i= 0; i < arr.length; i++) {

//     }
// };

// chooseWhatToTake(objects);