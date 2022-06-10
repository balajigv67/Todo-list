let myData = []
        const inputEl = document.getElementById("input-el")
        const submitEl = document.getElementById("submit-el")
        const ulEl = document.querySelector(".ul-el")

        const localDb = JSON.parse(localStorage.getItem("myData"))
        if (localDb) {
            myData = localDb
            for (i = 0; i < myData.length; i++) {
                const divEl = document.createElement("div")
                divEl.classList.add("div-el")
                divEl.classList.add("mt-2")
                divEl.classList.add("flex")
                divEl.classList.add("justify-between")
                divEl.classList.add("space-x-2")
                divEl.classList.add("text-xl")
                divEl.classList.add("text-white")
                divEl.classList.add("p-2")
                divEl.classList.add("mx-5")
                divEl.classList.add("rounded-md")
                divEl.classList.add("bg-gradient-to-r")
                divEl.classList.add("from-indigo-500")
                divEl.classList.add("to-sky-500")

                const liEl = document.createElement("li")
                liEl.classList.add("li-el")
                liEl.classList.add("overflow-hidden")
                liEl.innerHTML = myData[i]
                divEl.appendChild(liEl)
                ulEl.appendChild(divEl)

                const delBtn = document.createElement("i")
                delBtn.classList.add("del-btn")
                delBtn.classList.add("fa-solid")
                delBtn.classList.add("fa-trash")
                delBtn.classList.add("cursor-pointer")
                delBtn.classList.add("px-1")
                delBtn.classList.add("py-1")
                divEl.appendChild(delBtn)

                delBtn.addEventListener("click", function (e) {
                    e.preventDefault()

                    ulEl.removeChild(divEl)
                    const item = e.target
                    console.log(item)
                    if (item.classList[0] === "del-btn") {
                        const delLocal = item.parentElement
                        console.log(delLocal)
                        const dataName = delLocal.children[0].innerText
                        console.log(dataName)
                        myData.splice(myData.indexOf(dataName), 1)
                        console.log(myData)
                        localStorage.setItem('myData', JSON.stringify(myData))

                    }
                })
            }
            localStorage.setItem("myData", JSON.stringify(myData))

        }
        function render(myData) {

            const divEl = document.createElement("div")
            divEl.classList.add("div-el")
            divEl.classList.add("mt-2")
            divEl.classList.add("flex")
            divEl.classList.add("justify-between")
            divEl.classList.add("space-x-2")
            divEl.classList.add("text-xl")
            divEl.classList.add("text-white")
            divEl.classList.add("p-2")
            divEl.classList.add("mx-5")
            divEl.classList.add("rounded-md")
            divEl.classList.add("bg-gradient-to-r")
            divEl.classList.add("from-indigo-500")
            divEl.classList.add("to-sky-500")
            const liEl = document.createElement("li")
            liEl.classList.add("li-el")
            liEl.classList.add("overflow-hidden")
            liEl.innerHTML = inputEl.value
            divEl.appendChild(liEl)
            ulEl.appendChild(divEl)

            localStorage.setItem("myData", JSON.stringify(myData))
            inputEl.value = ''

            const delBtn = document.createElement("i")
            delBtn.classList.add("del-btn")
            delBtn.classList.add("fa-solid")
            delBtn.classList.add("fa-trash")
            delBtn.classList.add("cursor-pointer")
            delBtn.classList.add("px-1")
            delBtn.classList.add("py-1")
            divEl.appendChild(delBtn)
            delBtn.addEventListener("click", function (e) {
                e.preventDefault()
                ulEl.removeChild(divEl)
                const item = e.target
                console.log(item)
                if (item.classList[0] === "del-btn") {
                    const delLocal = item.parentElement
                    console.log(delLocal)
                    const dataName = delLocal.children[0].innerText
                    console.log(dataName)
                    myData.splice(myData.indexOf(dataName), 1)
                    console.log(myData)
                    localStorage.setItem('myData', JSON.stringify(myData))

                }
            })
        }
        submitEl.addEventListener("click", function (e) {
            e.preventDefault()
            const check = inputEl.value
            if (!check) {
                alert("Plz enter input")
            } else {
                myData.push(inputEl.value)
                render(myData)
            }

        })