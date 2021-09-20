import {useState} from "react";

export default function Search() {
    const [years, setYears] = useState(null);

    // 3-4. Задачи
    const checkIsSearch = () => {
        if (years === 'google') return 'Yandex круче. Но это не точно'
        else return years
    }

    // 5. Задача
    const filterAge = (e) => {
        const arr = [
            {
                name: "Aza",
                age: "12",
            },
            {
                name: "Mani",
                age: 23,
            },
            {
                name: "Nona",
                age: 32,
            },
            {
                name: "Roma",
                age: 13,
            }
        ];
        e.preventDefault()
        const result = arr.find((item) => item.age === years)
        if (!!result?.name) return result.name
        else return "Result notFound"
    }

    // 6. Задача
    const superSum = () => {
        let a = -2;
        let b = 76;
        return a + b;
    }
    console.log('superSum:', superSum())

    // 7. Задача
    let minNum = [21, 12, 6, 45, 934, 67, 28, 123, 43, 56, 676, 4];
    let min = minNum[0];
    let max = minNum[0];

    for (let i = 1; i < minNum.length; i++) {
        if (minNum[i] < min) {
            min = minNum[i];
        }
        if (minNum[i] > max) {
            max = minNum[i];
        }
    }
    console.log("min:", min)
    console.log("max:", max)

    // 8. Задача
    const value = () => {
        let a = "XXX";
        let b = "YYY";

        let reverseArr = [a, b];
        let reversedArr = reverseArr.reverse();
        return reversedArr;
    }
    console.log('value:', value());

    // 9. Задача
    const findMax = () => {
        let arrayNum = [21, 12, 6, 4335, 34, 67, 928, 123, 43, 56, 676, 4]
        const maxNum = Math.max(...arrayNum)
        return maxNum;
    }
    console.log('findMax:', findMax())

    // 10. Задача
    const timeOut = () => {
        console.log('Yandex круче. Но это не точно')
        // alert('Yandex круче. Но это не точно')
    }
    setTimeout(timeOut, 3000)

    return (
        <div>
            <form className="block-elem" onSubmit={(e) => alert(filterAge(e))}>
                <input onChange={(e) => setYears(e.target.value)} id={"years"} className="input"
                       placeholder="поле ввода"></input>
                <button type={"submit"} className="btn">Search</button>
            </form>
            <form className="block-elem" onSubmit={(e) => alert(checkIsSearch())}>
                <input onChange={(e) => setYears(e.target.value)} id={"years"} className="input"
                       placeholder="поле ввода"></input>
                <button type={"submit"} className="btn">Search</button>
            </form>
        </div>
    )
};